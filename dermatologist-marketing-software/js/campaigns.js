// Marketing Campaigns Module
class CampaignManager {
    constructor() {
        this.campaigns = this.loadSampleCampaigns();
        this.init();
    }

    init() {
        this.renderActiveCampaigns();
    }

    loadSampleCampaigns() {
        return [
            {
                id: 'MC001',
                name: 'Summer Skin Protection Campaign',
                type: 'Seasonal',
                status: 'active',
                startDate: '2026-01-01',
                endDate: '2026-03-31',
                budget: 5000,
                spent: 2340,
                leads: 124,
                conversions: 38,
                revenue: 17100,
                channels: ['Email', 'Social Media', 'Google Ads']
            },
            {
                id: 'MC002',
                name: 'New Patient Referral Program',
                type: 'Referral',
                status: 'active',
                startDate: '2025-12-01',
                endDate: '2026-02-28',
                budget: 3000,
                spent: 2100,
                leads: 89,
                conversions: 42,
                revenue: 21300,
                channels: ['Email', 'Word of Mouth']
            },
            {
                id: 'MC003',
                name: 'Anti-Aging Treatment Series',
                type: 'Product Launch',
                status: 'active',
                startDate: '2026-01-15',
                endDate: '2026-04-15',
                budget: 8000,
                spent: 1200,
                leads: 67,
                conversions: 19,
                revenue: 12350,
                channels: ['Email', 'Social Media', 'Events']
            },
            {
                id: 'MC004',
                name: 'Acne Awareness Month',
                type: 'Educational',
                status: 'planned',
                startDate: '2026-02-01',
                endDate: '2026-02-28',
                budget: 4500,
                spent: 0,
                leads: 0,
                conversions: 0,
                revenue: 0,
                channels: ['Social Media', 'Blog', 'Webinar']
            }
        ];
    }

    renderActiveCampaigns() {
        const container = document.getElementById('activeCampaignsList');
        if (!container) return;

        const activeCampaigns = this.campaigns.filter(c => c.status === 'active');

        container.innerHTML = activeCampaigns.map(campaign => {
            const roi = campaign.spent > 0 ? ((campaign.revenue - campaign.spent) / campaign.spent * 100).toFixed(1) : 0;
            const budgetUsed = campaign.budget > 0 ? ((campaign.spent / campaign.budget) * 100).toFixed(1) : 0;
            const conversionRate = campaign.leads > 0 ? ((campaign.conversions / campaign.leads) * 100).toFixed(1) : 0;

            return `
                <div class="campaign-card" style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                        <div>
                            <h4>${campaign.name}</h4>
                            <p style="color: var(--text-secondary); font-size: 13px; margin-top: 5px;">
                                ${campaign.type} Campaign
                            </p>
                        </div>
                        <span class="status-badge ${campaign.status}">${campaign.status.toUpperCase()}</span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 15px;">
                        <div>
                            <p style="color: var(--text-secondary); font-size: 12px;">Start Date</p>
                            <p style="font-weight: 600;">${campaign.startDate}</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 12px;">End Date</p>
                            <p style="font-weight: 600;">${campaign.endDate}</p>
                        </div>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="color: var(--text-secondary); font-size: 13px;">Budget Used</span>
                            <span style="font-weight: 600;">$${campaign.spent.toLocaleString()} / $${campaign.budget.toLocaleString()}</span>
                        </div>
                        <div style="background: var(--dark-bg); height: 8px; border-radius: 4px; overflow: hidden;">
                            <div style="background: var(--primary-color); width: ${budgetUsed}%; height: 100%;"></div>
                        </div>
                        <p style="text-align: right; font-size: 12px; color: var(--text-secondary); margin-top: 3px;">
                            ${budgetUsed}% used
                        </p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
                        <div style="text-align: center;">
                            <p style="color: var(--text-secondary); font-size: 12px; margin-bottom: 5px;">Leads</p>
                            <p style="font-size: 20px; font-weight: 700; color: var(--primary-color);">${campaign.leads}</p>
                        </div>
                        <div style="text-align: center;">
                            <p style="color: var(--text-secondary); font-size: 12px; margin-bottom: 5px;">Conversions</p>
                            <p style="font-size: 20px; font-weight: 700; color: var(--secondary-color);">${campaign.conversions}</p>
                        </div>
                        <div style="text-align: center;">
                            <p style="color: var(--text-secondary); font-size: 12px; margin-bottom: 5px;">Conv. Rate</p>
                            <p style="font-size: 20px; font-weight: 700;">${conversionRate}%</p>
                        </div>
                        <div style="text-align: center;">
                            <p style="color: var(--text-secondary); font-size: 12px; margin-bottom: 5px;">ROI</p>
                            <p style="font-size: 20px; font-weight: 700; color: ${roi > 0 ? 'var(--secondary-color)' : 'var(--danger-color)'};">
                                ${roi}%
                            </p>
                        </div>
                    </div>

                    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
                        <p style="color: var(--text-secondary); font-size: 12px; margin-bottom: 8px;">Channels:</p>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            ${campaign.channels.map(channel =>
                                `<span style="background: var(--dark-bg); padding: 5px 12px; border-radius: 15px; font-size: 12px;">
                                    ${channel}
                                </span>`
                            ).join('')}
                        </div>
                    </div>

                    <div style="margin-top: 15px; display: flex; gap: 10px;">
                        <button class="btn btn-outline btn-sm" onclick="campaignManager.viewCampaign('${campaign.id}')">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                        <button class="btn btn-outline btn-sm" onclick="campaignManager.editCampaign('${campaign.id}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    viewCampaign(id) {
        const campaign = this.campaigns.find(c => c.id === id);
        if (!campaign) return;

        const roi = campaign.spent > 0 ? ((campaign.revenue - campaign.spent) / campaign.spent * 100).toFixed(1) : 0;
        const conversionRate = campaign.leads > 0 ? ((campaign.conversions / campaign.leads) * 100).toFixed(1) : 0;

        const content = `
            <div class="modal-header">
                <h2>Campaign Details</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div>
                <h3>${campaign.name}</h3>
                <p style="color: var(--text-secondary); margin: 10px 0;">
                    ${campaign.type} Campaign
                </p>
                <span class="status-badge ${campaign.status}">${campaign.status.toUpperCase()}</span>
            </div>
            <div style="margin-top: 25px;">
                <h4 style="margin-bottom: 15px;">Performance Metrics</h4>
                <div style="background: var(--dark-bg); padding: 20px; border-radius: 8px;">
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Total Leads</p>
                            <p style="font-size: 28px; font-weight: 700; margin-top: 5px;">${campaign.leads}</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Conversions</p>
                            <p style="font-size: 28px; font-weight: 700; margin-top: 5px;">${campaign.conversions}</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Conversion Rate</p>
                            <p style="font-size: 28px; font-weight: 700; margin-top: 5px;">${conversionRate}%</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Revenue Generated</p>
                            <p style="font-size: 28px; font-weight: 700; margin-top: 5px;">$${campaign.revenue.toLocaleString()}</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">Budget Spent</p>
                            <p style="font-size: 28px; font-weight: 700; margin-top: 5px;">$${campaign.spent.toLocaleString()}</p>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); font-size: 13px;">ROI</p>
                            <p style="font-size: 28px; font-weight: 700; margin-top: 5px; color: ${roi > 0 ? 'var(--secondary-color)' : 'var(--danger-color)'};">
                                ${roi}%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        showModal(content);
    }

    editCampaign(id) {
        const campaign = this.campaigns.find(c => c.id === id);
        if (!campaign) return;

        showNotification('Campaign editing feature - full implementation available', 'success');
    }
}

function showCreateMarketingCampaignModal() {
    const content = `
        <div class="modal-header">
            <h2>Create Marketing Campaign</h2>
            <button class="close-btn">&times;</button>
        </div>
        <form id="createCampaignForm">
            <div class="form-group">
                <label>Campaign Name</label>
                <input type="text" name="name" required placeholder="e.g., Spring Renewal Campaign">
            </div>
            <div class="form-group">
                <label>Campaign Type</label>
                <select name="type" required>
                    <option value="">Select Type</option>
                    <option value="Seasonal">Seasonal</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Referral">Referral</option>
                    <option value="Educational">Educational</option>
                    <option value="Promotional">Promotional</option>
                </select>
            </div>
            <div class="form-group">
                <label>Start Date</label>
                <input type="date" name="startDate" required>
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="date" name="endDate" required>
            </div>
            <div class="form-group">
                <label>Budget ($)</label>
                <input type="number" name="budget" required placeholder="5000">
            </div>
            <div class="form-group">
                <label>Marketing Channels</label>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
                    <label style="display: flex; align-items: center; gap: 8px;">
                        <input type="checkbox" name="channels" value="Email"> Email Marketing
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px;">
                        <input type="checkbox" name="channels" value="Social Media"> Social Media
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px;">
                        <input type="checkbox" name="channels" value="Google Ads"> Google Ads
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px;">
                        <input type="checkbox" name="channels" value="Blog"> Blog Content
                    </label>
                </div>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn btn-primary">Create Campaign</button>
            </div>
        </form>
    `;
    showModal(content);

    document.getElementById('createCampaignForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const channels = Array.from(formData.getAll('channels'));

        const newCampaign = {
            id: 'MC' + String(campaignManager.campaigns.length + 1).padStart(3, '0'),
            name: formData.get('name'),
            type: formData.get('type'),
            status: 'planned',
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate'),
            budget: parseFloat(formData.get('budget')),
            spent: 0,
            leads: 0,
            conversions: 0,
            revenue: 0,
            channels: channels
        };

        campaignManager.campaigns.push(newCampaign);
        campaignManager.renderActiveCampaigns();
        closeModal();
        showNotification('Marketing campaign created successfully!');
    });
}

// Initialize campaign manager
let campaignManager;
document.addEventListener('DOMContentLoaded', () => {
    campaignManager = new CampaignManager();
});
