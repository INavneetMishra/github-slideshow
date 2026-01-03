# Quick Start Guide - DermaCare Pro

Get up and running with DermaCare Pro in minutes!

## Installation

### Option 1: Direct File Access
1. Download or clone the repository
2. Navigate to the `dermatologist-marketing-software` folder
3. Double-click `index.html` to open in your browser

### Option 2: Local Web Server (Recommended)
```bash
# Using Python 3
cd dermatologist-marketing-software
python -m http.server 8000

# Using Node.js
npx http-server

# Then open http://localhost:8000 in your browser
```

## First Steps

### 1. Explore the Dashboard (30 seconds)
- Open the application
- You'll land on the Dashboard showing practice overview
- Review the statistics cards at the top
- Check the patient acquisition chart
- Scroll through recent activities

### 2. Add Your First Patient (2 minutes)
1. Click "Patient Management" in the sidebar
2. Click the "Add New Patient" button
3. Fill in the form:
   - Name: John Doe
   - Email: john@example.com
   - Phone: (555) 123-4567
   - Status: Lead
   - Notes: Interested in acne treatment
4. Click "Add Patient"
5. See your new patient in the table!

### 3. Schedule an Appointment (2 minutes)
1. Click "Appointments" in the sidebar
2. Click "Schedule Appointment"
3. Select the patient you just created
4. Fill in:
   - Treatment: Acne Consultation
   - Date: Tomorrow's date
   - Time: 10:00 AM
   - Duration: 30 minutes
5. Click "Schedule"
6. View your appointment in the calendar and upcoming list

### 4. Create an Email Campaign (2 minutes)
1. Click "Email Marketing" in the sidebar
2. Click "Create Campaign"
3. Enter details:
   - Campaign Name: Welcome Email
   - Subject: Welcome to Our Practice
   - Content: Thank you for choosing our dermatology practice...
   - Send Option: Save as Draft
4. Click "Create Campaign"
5. See your campaign in the campaigns grid

### 5. Add a Treatment (1 minute)
1. Click "Treatments & Services"
2. Click "Add Treatment"
3. Fill in:
   - Name: Vitamin C Facial
   - Category: Facial Treatments
   - Price: 150
   - Duration: 45
   - Description: Brightening facial with vitamin C serum
4. Click "Add Treatment"

### 6. View Analytics (1 minute)
1. Click "Analytics" in the sidebar
2. Review the four charts:
   - Revenue trends over time
   - Treatment distribution
   - Patient demographics
   - Marketing ROI

### 7. Create a Marketing Campaign (2 minutes)
1. Click "Marketing Campaigns"
2. Click "New Campaign"
3. Fill in:
   - Name: New Year Skin Reset
   - Type: Seasonal
   - Start Date: Today
   - End Date: 30 days from now
   - Budget: 5000
   - Channels: Check Email and Social Media
4. Click "Create Campaign"
5. View your campaign in the active campaigns list

## Common Tasks

### Managing Patients

**View Patient Details:**
- Navigate to Patient Management
- Click the eye icon on any patient row

**Edit Patient:**
- Click the edit icon
- Update any information
- Click "Save Changes"

**Filter Patients:**
- Use the dropdown at top right
- Select "Active", "Inactive", or "Leads"

### Managing Appointments

**Edit an Appointment:**
- Click the edit icon on any appointment
- Update details
- Click "Save Changes"

**Cancel an Appointment:**
- Click the X icon
- Confirm cancellation

**View Calendar:**
- Switch between Day, Week, Month views
- Click the view toggle buttons

### Email Marketing

**Send a Draft Campaign:**
- Find a draft campaign
- Click "Send Campaign"
- Confirm to send

**View Campaign Performance:**
- Click the eye icon on any sent campaign
- Review open rates, click rates, delivery stats

### Working with Treatments

**Edit Pricing:**
- Click edit icon on treatment card
- Update the price
- Save changes

**View Treatment Details:**
- All information is visible on the card
- Edit to see full form

### Analytics

**Understanding the Charts:**
- **Revenue Chart**: Monthly income trends
- **Treatment Chart**: Distribution of services performed
- **Demographics**: Patient age groups
- **ROI Chart**: Marketing spend vs. revenue generated

### Marketing Campaigns

**Track Campaign Performance:**
- View leads generated
- Monitor conversions
- Check budget utilization
- Calculate ROI

**Use Campaign Templates:**
- Click a template card
- It will pre-fill campaign details
- Customize as needed

## Tips & Tricks

### Navigation
- Use sidebar for main navigation
- Click logo to return to dashboard
- Active page is highlighted in blue

### Search
- Use the search box in the header
- Searches across current page data

### Modals
- Click background to close
- Click X button to close
- Press ESC to close (if implemented)

### Status Badges
- **Green (Active)**: Current patients/campaigns
- **Gray (Inactive)**: Past patients
- **Yellow (Lead)**: Potential patients
- **Blue (Pending)**: Awaiting confirmation

### Data Persistence
**Important**: This demo uses client-side storage only. Data will reset when you:
- Refresh the page
- Close the browser
- Clear browser cache

For production use, implement backend database storage.

## Keyboard Shortcuts

Coming in future version:
- `Ctrl/Cmd + K`: Quick search
- `Ctrl/Cmd + N`: New patient/appointment
- `ESC`: Close modal
- `Tab`: Navigate form fields

## Troubleshooting

### Charts Not Displaying
- Ensure you have internet connection (Chart.js loads from CDN)
- Wait a few seconds for page to fully load
- Try refreshing the page

### Buttons Not Working
- Check browser console for errors (F12)
- Ensure JavaScript is enabled
- Try a different browser

### Styling Issues
- Clear browser cache
- Ensure CSS file is loading
- Check for Font Awesome CDN connection

### Data Not Saving
- Remember: This is a demo with client-side storage only
- Data resets on page refresh
- For persistent data, implement backend

## Next Steps

1. **Customize the Design**
   - Edit `css/main.css` to change colors
   - Update logo and branding
   - Modify status badge colors

2. **Add Real Data**
   - Replace sample patients with real data
   - Update treatments to match your practice
   - Configure actual email campaigns

3. **Implement Backend**
   - Set up database (PostgreSQL, MySQL)
   - Create REST API
   - Add authentication
   - Enable data persistence

4. **Deploy to Production**
   - Choose hosting provider
   - Set up HTTPS
   - Configure domain
   - Implement security measures

## Getting Help

### Documentation
- `README.md`: Overview and features
- `FEATURES.md`: Complete feature list
- `QUICKSTART.md`: This file

### Code Structure
- `index.html`: Main application file
- `css/main.css`: All styles
- `js/app.js`: Core application
- `js/patients.js`: Patient module
- `js/appointments.js`: Appointment module
- `js/email-marketing.js`: Email campaigns
- `js/treatments.js`: Treatment catalog
- `js/analytics.js`: Charts and analytics
- `js/campaigns.js`: Marketing campaigns

### Best Practices
1. Test all features with sample data first
2. Backup data regularly (when backend is implemented)
3. Use Chrome DevTools for debugging
4. Keep modules separated
5. Follow existing code patterns when extending

## Support

For questions or issues:
1. Check documentation files
2. Review code comments
3. Inspect browser console
4. Contact development team

---

**Congratulations!** You're now ready to use DermaCare Pro for your dermatology practice marketing needs.

Happy managing! 🎉
