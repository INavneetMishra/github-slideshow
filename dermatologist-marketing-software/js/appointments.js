// Appointment Scheduling Module
class AppointmentScheduler {
    constructor() {
        this.appointments = this.loadSampleAppointments();
        this.currentView = 'day';
        this.init();
    }

    init() {
        this.renderAppointmentsList();
        this.renderCalendar();
    }

    loadSampleAppointments() {
        return [
            {
                id: 'A001',
                patientName: 'Sarah Johnson',
                patientId: 'P001',
                treatment: 'Botox Treatment',
                date: '2026-01-03',
                time: '09:00',
                duration: 60,
                status: 'confirmed',
                notes: 'Follow-up appointment'
            },
            {
                id: 'A002',
                patientName: 'Michael Chen',
                patientId: 'P002',
                treatment: 'Acne Consultation',
                date: '2026-01-03',
                time: '10:30',
                duration: 30,
                status: 'confirmed',
                notes: ''
            },
            {
                id: 'A003',
                patientName: 'Emily Rodriguez',
                patientId: 'P003',
                treatment: 'Chemical Peel',
                date: '2026-01-03',
                time: '14:00',
                duration: 90,
                status: 'confirmed',
                notes: 'First time treatment'
            },
            {
                id: 'A004',
                patientName: 'Jennifer Lee',
                patientId: 'P005',
                treatment: 'Laser Treatment Consultation',
                date: '2026-01-04',
                time: '11:00',
                duration: 45,
                status: 'pending',
                notes: 'New patient'
            },
            {
                id: 'A005',
                patientName: 'David Wilson',
                patientId: 'P004',
                treatment: 'Follow-up',
                date: '2026-01-06',
                time: '15:30',
                duration: 30,
                status: 'confirmed',
                notes: ''
            }
        ];
    }

    renderAppointmentsList() {
        const container = document.getElementById('appointmentsList');
        if (!container) return;

        const today = new Date().toISOString().split('T')[0];
        const upcomingAppointments = this.appointments
            .filter(apt => apt.date >= today)
            .sort((a, b) => {
                const dateA = new Date(a.date + ' ' + a.time);
                const dateB = new Date(b.date + ' ' + b.time);
                return dateA - dateB;
            })
            .slice(0, 10);

        container.innerHTML = upcomingAppointments.map(apt => `
            <div class="appointment-item">
                <div class="appointment-info">
                    <h4>${apt.patientName}</h4>
                    <p>${apt.treatment}</p>
                    ${apt.notes ? `<small style="color: #b8b8b8;">${apt.notes}</small>` : ''}
                </div>
                <div class="appointment-time">
                    <strong>${this.formatDate(apt.date)}</strong>
                    <span>${apt.time} (${apt.duration} min)</span>
                    <span class="status-badge ${apt.status}">${apt.status}</span>
                </div>
                <div>
                    <button class="action-btn" onclick="appointmentScheduler.editAppointment('${apt.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn danger" onclick="appointmentScheduler.cancelAppointment('${apt.id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    renderCalendar() {
        const container = document.getElementById('appointmentCalendar');
        if (!container) return;

        const today = new Date();
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

        let calendarHTML = `
            <div class="calendar-header">
                <button onclick="appointmentScheduler.previousMonth()">&lt;</button>
                <h3>${today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
                <button onclick="appointmentScheduler.nextMonth()">&gt;</button>
            </div>
            <div class="calendar-grid">
                <div class="calendar-day-header">Sun</div>
                <div class="calendar-day-header">Mon</div>
                <div class="calendar-day-header">Tue</div>
                <div class="calendar-day-header">Wed</div>
                <div class="calendar-day-header">Thu</div>
                <div class="calendar-day-header">Fri</div>
                <div class="calendar-day-header">Sat</div>
        `;

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<div class="calendar-day empty"></div>';
        }

        // Days of month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(today.getFullYear(), today.getMonth(), day);
            const dateStr = date.toISOString().split('T')[0];
            const dayAppointments = this.appointments.filter(apt => apt.date === dateStr);
            const isToday = day === today.getDate();

            calendarHTML += `
                <div class="calendar-day ${isToday ? 'today' : ''}">
                    <div class="day-number">${day}</div>
                    ${dayAppointments.length > 0 ? `<div class="appointment-count">${dayAppointments.length} apt</div>` : ''}
                </div>
            `;
        }

        calendarHTML += '</div>';

        // Add CSS for calendar
        const style = document.createElement('style');
        style.textContent = `
            .calendar-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            .calendar-header button {
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                color: var(--text-primary);
                padding: 8px 15px;
                border-radius: 5px;
                cursor: pointer;
            }
            .calendar-grid {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 10px;
            }
            .calendar-day-header {
                text-align: center;
                font-weight: 600;
                padding: 10px;
                color: var(--text-secondary);
            }
            .calendar-day {
                background: var(--dark-bg);
                padding: 10px;
                border-radius: 8px;
                min-height: 80px;
                position: relative;
            }
            .calendar-day.empty {
                background: transparent;
            }
            .calendar-day.today {
                border: 2px solid var(--primary-color);
            }
            .day-number {
                font-weight: 600;
                margin-bottom: 5px;
            }
            .appointment-count {
                font-size: 11px;
                color: var(--primary-color);
                background: rgba(74, 144, 226, 0.2);
                padding: 2px 6px;
                border-radius: 10px;
                display: inline-block;
            }
        `;
        if (!document.getElementById('calendar-style')) {
            style.id = 'calendar-style';
            document.head.appendChild(style);
        }

        container.innerHTML = calendarHTML;
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    editAppointment(id) {
        const appointment = this.appointments.find(a => a.id === id);
        if (!appointment) return;

        const content = `
            <div class="modal-header">
                <h2>Edit Appointment</h2>
                <button class="close-btn">&times;</button>
            </div>
            <form id="editAppointmentForm">
                <div class="form-group">
                    <label>Patient Name</label>
                    <input type="text" value="${appointment.patientName}" readonly>
                </div>
                <div class="form-group">
                    <label>Treatment</label>
                    <input type="text" name="treatment" value="${appointment.treatment}" required>
                </div>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" name="date" value="${appointment.date}" required>
                </div>
                <div class="form-group">
                    <label>Time</label>
                    <input type="time" name="time" value="${appointment.time}" required>
                </div>
                <div class="form-group">
                    <label>Duration (minutes)</label>
                    <input type="number" name="duration" value="${appointment.duration}" required>
                </div>
                <div class="form-group">
                    <label>Status</label>
                    <select name="status">
                        <option value="pending" ${appointment.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="confirmed" ${appointment.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                        <option value="completed" ${appointment.status === 'completed' ? 'selected' : ''}>Completed</option>
                        <option value="cancelled" ${appointment.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Notes</label>
                    <textarea name="notes">${appointment.notes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </form>
        `;
        showModal(content);

        document.getElementById('editAppointmentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            appointment.treatment = formData.get('treatment');
            appointment.date = formData.get('date');
            appointment.time = formData.get('time');
            appointment.duration = parseInt(formData.get('duration'));
            appointment.status = formData.get('status');
            appointment.notes = formData.get('notes');
            this.renderAppointmentsList();
            this.renderCalendar();
            closeModal();
            showNotification('Appointment updated successfully!');
        });
    }

    cancelAppointment(id) {
        if (confirm('Are you sure you want to cancel this appointment?')) {
            const appointment = this.appointments.find(a => a.id === id);
            if (appointment) {
                appointment.status = 'cancelled';
                this.renderAppointmentsList();
                showNotification('Appointment cancelled');
            }
        }
    }

    previousMonth() {
        // Implementation for previous month navigation
        console.log('Previous month');
    }

    nextMonth() {
        // Implementation for next month navigation
        console.log('Next month');
    }
}

function showAddAppointmentModal() {
    const content = `
        <div class="modal-header">
            <h2>Schedule Appointment</h2>
            <button class="close-btn">&times;</button>
        </div>
        <form id="addAppointmentForm">
            <div class="form-group">
                <label>Patient</label>
                <select name="patientId" required>
                    <option value="">Select Patient</option>
                    ${patientManager ? patientManager.patients.map(p =>
                        `<option value="${p.id}">${p.name}</option>`
                    ).join('') : ''}
                </select>
            </div>
            <div class="form-group">
                <label>Treatment</label>
                <input type="text" name="treatment" required>
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date" name="date" required>
            </div>
            <div class="form-group">
                <label>Time</label>
                <input type="time" name="time" required>
            </div>
            <div class="form-group">
                <label>Duration (minutes)</label>
                <input type="number" name="duration" value="60" required>
            </div>
            <div class="form-group">
                <label>Notes</label>
                <textarea name="notes"></textarea>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn btn-primary">Schedule</button>
            </div>
        </form>
    `;
    showModal(content);

    document.getElementById('addAppointmentForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const patientId = formData.get('patientId');
        const patient = patientManager.patients.find(p => p.id === patientId);

        const newAppointment = {
            id: 'A' + String(appointmentScheduler.appointments.length + 1).padStart(3, '0'),
            patientName: patient.name,
            patientId: patientId,
            treatment: formData.get('treatment'),
            date: formData.get('date'),
            time: formData.get('time'),
            duration: parseInt(formData.get('duration')),
            status: 'confirmed',
            notes: formData.get('notes')
        };
        appointmentScheduler.appointments.push(newAppointment);
        appointmentScheduler.renderAppointmentsList();
        appointmentScheduler.renderCalendar();
        closeModal();
        showNotification('Appointment scheduled successfully!');
    });
}

function switchCalendarView(view) {
    const buttons = document.querySelectorAll('.view-toggle .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    console.log('Switched to', view, 'view');
}

// Initialize appointment scheduler
let appointmentScheduler;
document.addEventListener('DOMContentLoaded', () => {
    appointmentScheduler = new AppointmentScheduler();
});
