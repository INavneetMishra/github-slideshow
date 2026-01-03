// Main Application Logic
class DermaCareApp {
    constructor() {
        this.currentPage = 'dashboard';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.initializeCharts();
        this.loadInitialData();
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const page = item.getAttribute('data-page');
                this.navigateTo(page);
            });
        });
    }

    navigateTo(page) {
        // Remove active class from all nav items and pages
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });

        // Add active class to current nav item and page
        document.querySelector(`[data-page="${page}"]`).classList.add('active');
        document.getElementById(page).classList.add('active');

        // Update page title
        const titles = {
            'dashboard': 'Dashboard',
            'patients': 'Patient Management',
            'appointments': 'Appointments',
            'email-marketing': 'Email Marketing',
            'treatments': 'Treatments & Services',
            'analytics': 'Analytics',
            'campaigns': 'Marketing Campaigns'
        };
        document.getElementById('page-title').textContent = titles[page];

        this.currentPage = page;
    }

    initializeCharts() {
        // Patient Acquisition Chart
        const acquisitionCtx = document.getElementById('acquisitionChart');
        if (acquisitionCtx) {
            new Chart(acquisitionCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'New Patients',
                        data: [45, 52, 61, 58, 72, 89],
                        borderColor: '#4A90E2',
                        backgroundColor: 'rgba(74, 144, 226, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: '#3d4157'
                            },
                            ticks: {
                                color: '#b8b8b8'
                            }
                        },
                        x: {
                            grid: {
                                color: '#3d4157'
                            },
                            ticks: {
                                color: '#b8b8b8'
                            }
                        }
                    }
                }
            });
        }
    }

    loadInitialData() {
        // This would typically load from a backend API
        console.log('Loading initial data...');
    }
}

// Utility Functions
function showModal(content) {
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.innerHTML = `
        <div class="modal">
            <div class="modal-content">
                ${content}
            </div>
        </div>
    `;

    // Add close functionality
    const closeBtn = modalContainer.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on background click
    const modal = modalContainer.querySelector('.modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.innerHTML = '';
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#50C878' : '#E94B3C'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new DermaCareApp();
});
