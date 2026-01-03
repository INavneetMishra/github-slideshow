// Patient Management Module
class PatientManager {
    constructor() {
        this.patients = this.loadSamplePatients();
        this.init();
    }

    init() {
        this.renderPatientsTable();
        this.setupFilters();
    }

    loadSamplePatients() {
        return [
            {
                id: 'P001',
                name: 'Sarah Johnson',
                email: 'sarah.j@email.com',
                phone: '(555) 123-4567',
                lastVisit: '2026-01-01',
                status: 'active',
                treatments: ['Botox', 'Facial'],
                notes: 'Regular patient, prefers morning appointments'
            },
            {
                id: 'P002',
                name: 'Michael Chen',
                email: 'mchen@email.com',
                phone: '(555) 234-5678',
                lastVisit: '2025-12-28',
                status: 'active',
                treatments: ['Acne Treatment'],
                notes: 'Sensitive skin'
            },
            {
                id: 'P003',
                name: 'Emily Rodriguez',
                email: 'emily.r@email.com',
                phone: '(555) 345-6789',
                lastVisit: '2025-12-15',
                status: 'active',
                treatments: ['Chemical Peel'],
                notes: 'Interested in anti-aging treatments'
            },
            {
                id: 'P004',
                name: 'David Wilson',
                email: 'dwilson@email.com',
                phone: '(555) 456-7890',
                lastVisit: '2025-11-20',
                status: 'inactive',
                treatments: ['Consultation'],
                notes: 'Follow up needed'
            },
            {
                id: 'P005',
                name: 'Jennifer Lee',
                email: 'jlee@email.com',
                phone: '(555) 567-8901',
                lastVisit: null,
                status: 'lead',
                treatments: [],
                notes: 'Inquired about laser treatment'
            }
        ];
    }

    renderPatientsTable() {
        const tbody = document.getElementById('patientsTableBody');
        if (!tbody) return;

        const filter = document.getElementById('patientFilter')?.value || 'all';
        let filteredPatients = this.patients;

        if (filter !== 'all') {
            filteredPatients = this.patients.filter(p => p.status === filter);
        }

        tbody.innerHTML = filteredPatients.map(patient => `
            <tr>
                <td><strong>${patient.id}</strong></td>
                <td>${patient.name}</td>
                <td>${patient.email}</td>
                <td>${patient.phone}</td>
                <td>${patient.lastVisit || 'Never'}</td>
                <td><span class="status-badge ${patient.status}">${patient.status.toUpperCase()}</span></td>
                <td>
                    <button class="action-btn" onclick="patientManager.viewPatient('${patient.id}')">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="action-btn" onclick="patientManager.editPatient('${patient.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="action-btn danger" onclick="patientManager.deletePatient('${patient.id}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            </tr>
        `).join('');
    }

    setupFilters() {
        const filter = document.getElementById('patientFilter');
        if (filter) {
            filter.addEventListener('change', () => {
                this.renderPatientsTable();
            });
        }
    }

    viewPatient(id) {
        const patient = this.patients.find(p => p.id === id);
        if (!patient) return;

        const content = `
            <div class="modal-header">
                <h2>Patient Details</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="patient-details">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <strong>Patient ID:</strong>
                        <p>${patient.id}</p>
                    </div>
                    <div>
                        <strong>Name:</strong>
                        <p>${patient.name}</p>
                    </div>
                    <div>
                        <strong>Email:</strong>
                        <p>${patient.email}</p>
                    </div>
                    <div>
                        <strong>Phone:</strong>
                        <p>${patient.phone}</p>
                    </div>
                    <div>
                        <strong>Status:</strong>
                        <p><span class="status-badge ${patient.status}">${patient.status.toUpperCase()}</span></p>
                    </div>
                    <div>
                        <strong>Last Visit:</strong>
                        <p>${patient.lastVisit || 'Never'}</p>
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    <strong>Treatments:</strong>
                    <p>${patient.treatments.join(', ') || 'None'}</p>
                </div>
                <div style="margin-top: 20px;">
                    <strong>Notes:</strong>
                    <p>${patient.notes}</p>
                </div>
            </div>
        `;
        showModal(content);
    }

    editPatient(id) {
        const patient = this.patients.find(p => p.id === id);
        if (!patient) return;

        const content = `
            <div class="modal-header">
                <h2>Edit Patient</h2>
                <button class="close-btn">&times;</button>
            </div>
            <form id="editPatientForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value="${patient.name}" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value="${patient.email}" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" value="${patient.phone}" required>
                </div>
                <div class="form-group">
                    <label>Status</label>
                    <select name="status">
                        <option value="lead" ${patient.status === 'lead' ? 'selected' : ''}>Lead</option>
                        <option value="active" ${patient.status === 'active' ? 'selected' : ''}>Active</option>
                        <option value="inactive" ${patient.status === 'inactive' ? 'selected' : ''}>Inactive</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Notes</label>
                    <textarea name="notes">${patient.notes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </form>
        `;
        showModal(content);

        document.getElementById('editPatientForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            patient.name = formData.get('name');
            patient.email = formData.get('email');
            patient.phone = formData.get('phone');
            patient.status = formData.get('status');
            patient.notes = formData.get('notes');
            this.renderPatientsTable();
            closeModal();
            showNotification('Patient updated successfully!');
        });
    }

    deletePatient(id) {
        if (confirm('Are you sure you want to delete this patient?')) {
            this.patients = this.patients.filter(p => p.id !== id);
            this.renderPatientsTable();
            showNotification('Patient deleted successfully!');
        }
    }
}

function showAddPatientModal() {
    const content = `
        <div class="modal-header">
            <h2>Add New Patient</h2>
            <button class="close-btn">&times;</button>
        </div>
        <form id="addPatientForm">
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" required>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" required>
            </div>
            <div class="form-group">
                <label>Status</label>
                <select name="status">
                    <option value="lead">Lead</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <div class="form-group">
                <label>Notes</label>
                <textarea name="notes"></textarea>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn btn-primary">Add Patient</button>
            </div>
        </form>
    `;
    showModal(content);

    document.getElementById('addPatientForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPatient = {
            id: 'P' + String(patientManager.patients.length + 1).padStart(3, '0'),
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            status: formData.get('status'),
            lastVisit: null,
            treatments: [],
            notes: formData.get('notes')
        };
        patientManager.patients.push(newPatient);
        patientManager.renderPatientsTable();
        closeModal();
        showNotification('Patient added successfully!');
    });
}

// Initialize patient manager
let patientManager;
document.addEventListener('DOMContentLoaded', () => {
    patientManager = new PatientManager();
});
