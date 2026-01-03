// Treatments & Services Module
class TreatmentManager {
    constructor() {
        this.treatments = this.loadSampleTreatments();
        this.init();
    }

    init() {
        this.renderTreatments();
    }

    loadSampleTreatments() {
        return [
            {
                id: 'T001',
                name: 'Botox Treatment',
                category: 'Anti-Aging',
                price: 450,
                duration: 60,
                description: 'FDA-approved botulinum toxin injections to reduce fine lines and wrinkles',
                popularity: 95,
                image: 'botox.jpg'
            },
            {
                id: 'T002',
                name: 'Chemical Peel',
                category: 'Skin Rejuvenation',
                price: 250,
                duration: 90,
                description: 'Professional chemical exfoliation for smoother, brighter skin',
                popularity: 78,
                image: 'chemical-peel.jpg'
            },
            {
                id: 'T003',
                name: 'Laser Hair Removal',
                category: 'Laser Treatments',
                price: 350,
                duration: 45,
                description: 'Permanent hair reduction using advanced laser technology',
                popularity: 88,
                image: 'laser-hair.jpg'
            },
            {
                id: 'T004',
                name: 'Acne Treatment',
                category: 'Medical Dermatology',
                price: 180,
                duration: 30,
                description: 'Comprehensive acne treatment and skin care consultation',
                popularity: 92,
                image: 'acne.jpg'
            },
            {
                id: 'T005',
                name: 'Dermal Fillers',
                category: 'Anti-Aging',
                price: 650,
                duration: 60,
                description: 'Hyaluronic acid fillers to restore volume and contour',
                popularity: 85,
                image: 'fillers.jpg'
            },
            {
                id: 'T006',
                name: 'Microneedling',
                category: 'Skin Rejuvenation',
                price: 400,
                duration: 75,
                description: 'Collagen induction therapy for improved skin texture',
                popularity: 73,
                image: 'microneedling.jpg'
            },
            {
                id: 'T007',
                name: 'Skin Cancer Screening',
                category: 'Medical Dermatology',
                price: 150,
                duration: 30,
                description: 'Comprehensive skin examination and mole assessment',
                popularity: 68,
                image: 'screening.jpg'
            },
            {
                id: 'T008',
                name: 'HydraFacial',
                category: 'Facial Treatments',
                price: 300,
                duration: 60,
                description: 'Deep cleansing, exfoliation, and hydration treatment',
                popularity: 82,
                image: 'hydrafacial.jpg'
            }
        ];
    }

    renderTreatments() {
        const container = document.getElementById('treatmentsGrid');
        if (!container) return;

        container.innerHTML = this.treatments.map(treatment => `
            <div class="treatment-card">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                    <div style="flex: 1;">
                        <h4>${treatment.name}</h4>
                        <p style="color: var(--text-secondary); font-size: 13px; margin: 5px 0;">
                            ${treatment.category}
                        </p>
                    </div>
                    <div>
                        <button class="action-btn" onclick="treatmentManager.editTreatment('${treatment.id}')">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </div>
                <div class="price">$${treatment.price}</div>
                <p style="margin: 15px 0; line-height: 1.6;">${treatment.description}</p>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span style="color: var(--text-secondary); font-size: 13px;">
                            <i class="fas fa-clock"></i> ${treatment.duration} min
                        </span>
                        <span style="color: var(--primary-color); font-size: 13px;">
                            <i class="fas fa-star"></i> ${treatment.popularity}% popular
                        </span>
                    </div>
                    <div style="background: var(--dark-bg); height: 6px; border-radius: 3px; overflow: hidden;">
                        <div style="background: var(--primary-color); width: ${treatment.popularity}%; height: 100%;"></div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    editTreatment(id) {
        const treatment = this.treatments.find(t => t.id === id);
        if (!treatment) return;

        const content = `
            <div class="modal-header">
                <h2>Edit Treatment</h2>
                <button class="close-btn">&times;</button>
            </div>
            <form id="editTreatmentForm">
                <div class="form-group">
                    <label>Treatment Name</label>
                    <input type="text" name="name" value="${treatment.name}" required>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <select name="category">
                        <option value="Anti-Aging" ${treatment.category === 'Anti-Aging' ? 'selected' : ''}>Anti-Aging</option>
                        <option value="Skin Rejuvenation" ${treatment.category === 'Skin Rejuvenation' ? 'selected' : ''}>Skin Rejuvenation</option>
                        <option value="Laser Treatments" ${treatment.category === 'Laser Treatments' ? 'selected' : ''}>Laser Treatments</option>
                        <option value="Medical Dermatology" ${treatment.category === 'Medical Dermatology' ? 'selected' : ''}>Medical Dermatology</option>
                        <option value="Facial Treatments" ${treatment.category === 'Facial Treatments' ? 'selected' : ''}>Facial Treatments</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Price ($)</label>
                    <input type="number" name="price" value="${treatment.price}" required>
                </div>
                <div class="form-group">
                    <label>Duration (minutes)</label>
                    <input type="number" name="duration" value="${treatment.duration}" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea name="description" rows="3" required>${treatment.description}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </form>
        `;
        showModal(content);

        document.getElementById('editTreatmentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            treatment.name = formData.get('name');
            treatment.category = formData.get('category');
            treatment.price = parseFloat(formData.get('price'));
            treatment.duration = parseInt(formData.get('duration'));
            treatment.description = formData.get('description');
            this.renderTreatments();
            closeModal();
            showNotification('Treatment updated successfully!');
        });
    }
}

function showAddTreatmentModal() {
    const content = `
        <div class="modal-header">
            <h2>Add New Treatment</h2>
            <button class="close-btn">&times;</button>
        </div>
        <form id="addTreatmentForm">
            <div class="form-group">
                <label>Treatment Name</label>
                <input type="text" name="name" required placeholder="e.g., IPL Photo Facial">
            </div>
            <div class="form-group">
                <label>Category</label>
                <select name="category" required>
                    <option value="">Select Category</option>
                    <option value="Anti-Aging">Anti-Aging</option>
                    <option value="Skin Rejuvenation">Skin Rejuvenation</option>
                    <option value="Laser Treatments">Laser Treatments</option>
                    <option value="Medical Dermatology">Medical Dermatology</option>
                    <option value="Facial Treatments">Facial Treatments</option>
                </select>
            </div>
            <div class="form-group">
                <label>Price ($)</label>
                <input type="number" name="price" required placeholder="0.00" step="0.01">
            </div>
            <div class="form-group">
                <label>Duration (minutes)</label>
                <input type="number" name="duration" required placeholder="60">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea name="description" rows="3" required placeholder="Brief description of the treatment"></textarea>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn btn-primary">Add Treatment</button>
            </div>
        </form>
    `;
    showModal(content);

    document.getElementById('addTreatmentForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTreatment = {
            id: 'T' + String(treatmentManager.treatments.length + 1).padStart(3, '0'),
            name: formData.get('name'),
            category: formData.get('category'),
            price: parseFloat(formData.get('price')),
            duration: parseInt(formData.get('duration')),
            description: formData.get('description'),
            popularity: 50,
            image: 'default.jpg'
        };
        treatmentManager.treatments.push(newTreatment);
        treatmentManager.renderTreatments();
        closeModal();
        showNotification('Treatment added successfully!');
    });
}

// Initialize treatment manager
let treatmentManager;
document.addEventListener('DOMContentLoaded', () => {
    treatmentManager = new TreatmentManager();
});
