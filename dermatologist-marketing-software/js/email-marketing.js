// Email Marketing Module
class EmailMarketing {
    constructor() {
        this.campaigns = this.loadSampleCampaigns();
        this.init();
    }

    init() {
        this.renderCampaigns();
    }

    loadSampleCampaigns() {
        return [
            {
                id: 'C001',
                name: 'Summer Skin Care Special',
                subject: 'Get Ready for Summer with 20% Off',
                status: 'sent',
                sent: 1250,
                delivered: 1215,
                opened: 847,
                clicked: 312,
                sentDate: '2026-01-01',
                content: 'Promote summer skincare packages and sun protection'
            },
            {
                id: 'C002',
                name: 'New Patient Welcome Series',
                subject: 'Welcome to DermaCare - Your Journey Begins',
                status: 'active',
                sent: 342,
                delivered: 338,
                opened: 256,
                clicked: 89,
                sentDate: '2026-01-02',
                content: 'Automated welcome email for new patients'
            },
            {
                id: 'C003',
                name: 'Botox Birthday Special',
                subject: 'Happy Birthday! Enjoy 25% Off Botox',
                status: 'scheduled',
                sent: 0,
                delivered: 0,
                opened: 0,
                clicked: 0,
                sentDate: '2026-01-15',
                content: 'Monthly birthday promotion for existing patients'
            },
            {
                id: 'C004',
                name: 'Acne Treatment Newsletter',
                subject: 'Clear Skin Ahead: Latest Acne Treatments',
                status: 'draft',
                sent: 0,
                delivered: 0,
                opened: 0,
                clicked: 0,
                sentDate: null,
                content: 'Educational content about acne treatments'
            }
        ];
    }

    renderCampaigns() {
        const container = document.getElementById('campaignsGrid');
        if (!container) return;

        container.innerHTML = this.campaigns.map(campaign => {
            const openRate = campaign.sent > 0 ? ((campaign.opened / campaign.sent) * 100).toFixed(1) : 0;
            const clickRate = campaign.opened > 0 ? ((campaign.clicked / campaign.opened) * 100).toFixed(1) : 0;
            const deliveryRate = campaign.sent > 0 ? ((campaign.delivered / campaign.sent) * 100).toFixed(1) : 0;

            return `
                <div class="campaign-card">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                        <div>
                            <h4>${campaign.name}</h4>
                            <span class="status-badge ${campaign.status}">${campaign.status.toUpperCase()}</span>
                        </div>
                        <div>
                            <button class="action-btn" onclick="emailMarketing.editCampaign('${campaign.id}')">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn" onclick="emailMarketing.viewCampaign('${campaign.id}')">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <p><strong>Subject:</strong> ${campaign.subject}</p>
                    <p style="color: var(--text-secondary); font-size: 13px; margin-top: 5px;">${campaign.content}</p>
                    ${campaign.sentDate ? `<p style="font-size: 12px; color: var(--text-secondary); margin-top: 10px;">
                        ${campaign.status === 'scheduled' ? 'Scheduled for' : 'Sent on'}: ${campaign.sentDate}
                    </p>` : ''}
                    ${campaign.sent > 0 ? `
                        <div class="campaign-stats">
                            <div class="campaign-stat">
                                <small>Sent</small>
                                <strong>${campaign.sent}</strong>
                            </div>
                            <div class="campaign-stat">
                                <small>Delivered</small>
                                <strong>${deliveryRate}%</strong>
                            </div>
                            <div class="campaign-stat">
                                <small>Open Rate</small>
                                <strong>${openRate}%</strong>
                            </div>
                            <div class="campaign-stat">
                                <small>Click Rate</small>
                                <strong>${clickRate}%</strong>
                            </div>
                        </div>
                    ` : ''}
                    ${campaign.status === 'draft' ? `
                        <div style="margin-top: 15px;">
                            <button class="btn btn-primary btn-sm" onclick="emailMarketing.sendCampaign('${campaign.id}')">
                                <i class="fas fa-paper-plane"></i> Send Campaign
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');

        // Add button styles
        const style = document.createElement('style');
        style.textContent = `
            .btn-sm {
                padding: 8px 16px;
                font-size: 13px;
            }
        `;
        if (!document.getElementById('btn-styles')) {
            style.id = 'btn-styles';
            document.head.appendChild(style);
        }
    }

    viewCampaign(id) {
        const campaign = this.campaigns.find(c => c.id === id);
        if (!campaign) return;

        const openRate = campaign.sent > 0 ? ((campaign.opened / campaign.sent) * 100).toFixed(1) : 0;
        const clickRate = campaign.opened > 0 ? ((campaign.clicked / campaign.opened) * 100).toFixed(1) : 0;
        const deliveryRate = campaign.sent > 0 ? ((campaign.delivered / campaign.sent) * 100).toFixed(1) : 0;

        const content = `
            <div class="modal-header">
                <h2>Campaign Details</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div style="margin-bottom: 20px;">
                <h3>${campaign.name}</h3>
                <span class="status-badge ${campaign.status}">${campaign.status.toUpperCase()}</span>
            </div>
            <div style="margin-bottom: 15px;">
                <strong>Subject Line:</strong>
                <p>${campaign.subject}</p>
            </div>
            <div style="margin-bottom: 15px;">
                <strong>Content:</strong>
                <p>${campaign.content}</p>
            </div>
            ${campaign.sent > 0 ? `
                <div style="background: var(--dark-bg); padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <h4 style="margin-bottom: 15px;">Performance Metrics</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Total Sent</p>
                            <p style="font-size: 24px; font-weight: 700;">${campaign.sent}</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Delivery Rate</p>
                            <p style="font-size: 24px; font-weight: 700;">${deliveryRate}%</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Open Rate</p>
                            <p style="font-size: 24px; font-weight: 700;">${openRate}%</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Click Rate</p>
                            <p style="font-size: 24px; font-weight: 700;">${clickRate}%</p>
                        </div>
                    </div>
                </div>
            ` : ''}
        `;
        showModal(content);
    }

    editCampaign(id) {
        const campaign = this.campaigns.find(c => c.id === id);
        if (!campaign) return;

        const content = `
            <div class="modal-header">
                <h2>Edit Campaign</h2>
                <button class="close-btn">&times;</button>
            </div>
            <form id="editCampaignForm">
                <div class="form-group">
                    <label>Campaign Name</label>
                    <input type="text" name="name" value="${campaign.name}" required>
                </div>
                <div class="form-group">
                    <label>Subject Line</label>
                    <input type="text" name="subject" value="${campaign.subject}" required>
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <textarea name="content" rows="5" required>${campaign.content}</textarea>
                </div>
                <div class="form-group">
                    <label>Status</label>
                    <select name="status">
                        <option value="draft" ${campaign.status === 'draft' ? 'selected' : ''}>Draft</option>
                        <option value="scheduled" ${campaign.status === 'scheduled' ? 'selected' : ''}>Scheduled</option>
                        <option value="active" ${campaign.status === 'active' ? 'selected' : ''}>Active</option>
                        <option value="sent" ${campaign.status === 'sent' ? 'selected' : ''}>Sent</option>
                    </select>
                </div>
                ${campaign.status === 'scheduled' ? `
                    <div class="form-group">
                        <label>Send Date</label>
                        <input type="date" name="sentDate" value="${campaign.sentDate || ''}">
                    </div>
                ` : ''}
                <div class="form-actions">
                    <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </form>
        `;
        showModal(content);

        document.getElementById('editCampaignForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            campaign.name = formData.get('name');
            campaign.subject = formData.get('subject');
            campaign.content = formData.get('content');
            campaign.status = formData.get('status');
            if (formData.get('sentDate')) {
                campaign.sentDate = formData.get('sentDate');
            }
            this.renderCampaigns();
            closeModal();
            showNotification('Campaign updated successfully!');
        });
    }

    sendCampaign(id) {
        if (confirm('Are you sure you want to send this campaign to all recipients?')) {
            const campaign = this.campaigns.find(c => c.id === id);
            if (campaign) {
                // Simulate sending
                campaign.status = 'sent';
                campaign.sent = 1000 + Math.floor(Math.random() * 500);
                campaign.delivered = Math.floor(campaign.sent * 0.97);
                campaign.opened = Math.floor(campaign.delivered * 0.68);
                campaign.clicked = Math.floor(campaign.opened * 0.35);
                campaign.sentDate = new Date().toISOString().split('T')[0];
                this.renderCampaigns();
                showNotification('Campaign sent successfully!');
            }
        }
    }
}

function showCreateCampaignModal() {
    const content = `
        <div class="modal-header">
            <h2>Create Email Campaign</h2>
            <button class="close-btn">&times;</button>
        </div>
        <form id="createCampaignForm">
            <div class="form-group">
                <label>Campaign Name</label>
                <input type="text" name="name" required placeholder="e.g., Summer Promotion 2026">
            </div>
            <div class="form-group">
                <label>Subject Line</label>
                <input type="text" name="subject" required placeholder="Catchy email subject">
            </div>
            <div class="form-group">
                <label>Content</label>
                <textarea name="content" rows="6" required placeholder="Email content and description"></textarea>
            </div>
            <div class="form-group">
                <label>Send Option</label>
                <select name="sendOption">
                    <option value="draft">Save as Draft</option>
                    <option value="schedule">Schedule for Later</option>
                    <option value="send">Send Now</option>
                </select>
            </div>
            <div class="form-group" id="scheduleDateGroup" style="display: none;">
                <label>Schedule Date</label>
                <input type="date" name="scheduleDate">
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn btn-primary">Create Campaign</button>
            </div>
        </form>
    `;
    showModal(content);

    const form = document.getElementById('createCampaignForm');
    const sendOption = form.querySelector('[name="sendOption"]');
    const scheduleDateGroup = document.getElementById('scheduleDateGroup');

    sendOption.addEventListener('change', (e) => {
        scheduleDateGroup.style.display = e.target.value === 'schedule' ? 'block' : 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const sendOption = formData.get('sendOption');

        const newCampaign = {
            id: 'C' + String(emailMarketing.campaigns.length + 1).padStart(3, '0'),
            name: formData.get('name'),
            subject: formData.get('subject'),
            content: formData.get('content'),
            status: sendOption === 'send' ? 'sent' : sendOption === 'schedule' ? 'scheduled' : 'draft',
            sent: sendOption === 'send' ? 1000 : 0,
            delivered: sendOption === 'send' ? 970 : 0,
            opened: sendOption === 'send' ? 680 : 0,
            clicked: sendOption === 'send' ? 240 : 0,
            sentDate: sendOption === 'send' ? new Date().toISOString().split('T')[0] :
                      sendOption === 'schedule' ? formData.get('scheduleDate') : null
        };

        emailMarketing.campaigns.push(newCampaign);
        emailMarketing.renderCampaigns();
        closeModal();
        showNotification(`Campaign ${sendOption === 'send' ? 'sent' : 'created'} successfully!`);
    });
}

// Initialize email marketing
let emailMarketing;
document.addEventListener('DOMContentLoaded', () => {
    emailMarketing = new EmailMarketing();
});
