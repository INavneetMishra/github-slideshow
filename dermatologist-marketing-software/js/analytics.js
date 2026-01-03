// Analytics Module
class AnalyticsManager {
    constructor() {
        this.init();
    }

    init() {
        // Wait a bit for the page to be visible before rendering charts
        setTimeout(() => {
            this.renderCharts();
        }, 500);
    }

    renderCharts() {
        this.renderRevenueChart();
        this.renderTreatmentChart();
        this.renderDemographicsChart();
        this.renderROIChart();
    }

    renderRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [65000, 72000, 68000, 78000, 85000, 89430],
                    backgroundColor: 'rgba(74, 144, 226, 0.8)',
                    borderColor: '#4A90E2',
                    borderWidth: 2
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
                            color: '#b8b8b8',
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
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

    renderTreatmentChart() {
        const ctx = document.getElementById('treatmentChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Botox', 'Fillers', 'Chemical Peel', 'Laser', 'Acne Treatment', 'Other'],
                datasets: [{
                    data: [30, 25, 15, 12, 10, 8],
                    backgroundColor: [
                        '#4A90E2',
                        '#50C878',
                        '#F5A623',
                        '#E94B3C',
                        '#9B59B6',
                        '#95A5A6'
                    ],
                    borderWidth: 2,
                    borderColor: '#2d3142'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#b8b8b8',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    renderDemographicsChart() {
        const ctx = document.getElementById('demographicsChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['18-25', '26-35', '36-45', '46-55', '56+'],
                datasets: [{
                    data: [15, 28, 32, 18, 7],
                    backgroundColor: [
                        '#4A90E2',
                        '#50C878',
                        '#F5A623',
                        '#E94B3C',
                        '#9B59B6'
                    ],
                    borderWidth: 2,
                    borderColor: '#2d3142'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#b8b8b8',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    renderROIChart() {
        const ctx = document.getElementById('roiChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Marketing Spend',
                        data: [8000, 8500, 7800, 9200, 10000, 9500],
                        borderColor: '#E94B3C',
                        backgroundColor: 'rgba(233, 75, 60, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Revenue Generated',
                        data: [32000, 38000, 35000, 42000, 48000, 52000],
                        borderColor: '#50C878',
                        backgroundColor: 'rgba(80, 200, 120, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#b8b8b8'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#3d4157'
                        },
                        ticks: {
                            color: '#b8b8b8',
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
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

// Initialize analytics manager
let analyticsManager;
document.addEventListener('DOMContentLoaded', () => {
    analyticsManager = new AnalyticsManager();
});
