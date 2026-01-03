# DermaCare Pro - Dermatologist Marketing Software

A comprehensive marketing and practice management software designed specifically for dermatology clinics. Streamline patient management, appointments, email marketing campaigns, and analytics all in one powerful platform.

## Features

### 1. Dashboard Overview
- Real-time statistics on patients, appointments, and revenue
- Patient acquisition trends with interactive charts
- Recent activity feed
- Quick access to key metrics

### 2. Patient Management
- Complete patient database with contact information
- Patient status tracking (Active, Inactive, Lead)
- Treatment history for each patient
- Full CRUD operations (Create, Read, Update, Delete)
- Advanced filtering options
- Patient notes and preferences

### 3. Appointment Scheduling
- Visual calendar interface (Day/Week/Month views)
- Easy appointment creation and management
- Treatment duration tracking
- Appointment status management (Pending, Confirmed, Completed, Cancelled)
- Upcoming appointments list
- Patient association with appointments

### 4. Email Marketing
- Create and manage email campaigns
- Campaign performance tracking
  - Delivery rates
  - Open rates
  - Click-through rates
- Campaign status management (Draft, Scheduled, Active, Sent)
- Schedule campaigns for future dates
- Template-based campaign creation

### 5. Treatment & Service Catalog
- Comprehensive treatment listings
- Pricing management
- Treatment categories (Anti-Aging, Skin Rejuvenation, Laser Treatments, etc.)
- Duration tracking
- Popularity metrics
- Detailed treatment descriptions

### 6. Analytics Dashboard
- Revenue trend analysis
- Treatment distribution charts
- Patient demographics visualization
- Marketing ROI tracking
- Multiple chart types (Bar, Line, Pie, Doughnut)

### 7. Marketing Campaigns
- Multi-channel campaign management
- Budget tracking and spending analysis
- Lead generation metrics
- Conversion rate tracking
- ROI calculation
- Campaign templates for common scenarios
- Channel-specific performance tracking

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js for data visualization
- **Icons**: Font Awesome 6
- **Design**: Modern dark theme with responsive layout
- **Architecture**: Modular JavaScript with separate concerns

## File Structure

```
dermatologist-marketing-software/
├── index.html              # Main application file
├── css/
│   └── main.css           # All styles and themes
├── js/
│   ├── app.js             # Core application logic and navigation
│   ├── patients.js        # Patient management module
│   ├── appointments.js    # Appointment scheduling module
│   ├── email-marketing.js # Email marketing module
│   ├── treatments.js      # Treatment catalog module
│   ├── analytics.js       # Analytics and charts module
│   └── campaigns.js       # Marketing campaigns module
├── assets/                # Images and media files
└── data/                  # Data storage (for future implementation)
```

## Getting Started

### Installation

1. Clone or download this repository
2. No build process required - this is a pure HTML/CSS/JavaScript application
3. Open `index.html` in a modern web browser

### Usage

Simply open the `index.html` file in your browser to start using the application. All features are accessible through the sidebar navigation.

### Browser Requirements

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Modern browser with ES6+ JavaScript support required.

## Key Features Explained

### Patient Management
- **Add New Patient**: Click "Add New Patient" button to create patient records
- **Edit Patient**: Click the edit icon on any patient row
- **View Details**: Click the view icon to see complete patient information
- **Filter Patients**: Use the dropdown to filter by status (All, Active, Inactive, Leads)

### Appointment Scheduling
- **Schedule Appointment**: Click "Schedule Appointment" to create new appointments
- **Calendar Views**: Switch between Day, Week, and Month views
- **Edit/Cancel**: Manage existing appointments from the list
- **Patient Selection**: Link appointments to existing patients

### Email Marketing
- **Create Campaign**: Design email campaigns with subject and content
- **Track Performance**: Monitor delivery, open, and click rates
- **Schedule**: Set future send dates for campaigns
- **Campaign Status**: Draft campaigns before sending

### Marketing Campaigns
- **Multi-Channel**: Track campaigns across Email, Social Media, Google Ads
- **Budget Management**: Set budgets and monitor spending
- **Performance Metrics**: Track leads, conversions, and ROI
- **Templates**: Use pre-built templates for common campaign types

## Sample Data

The application comes pre-loaded with sample data to demonstrate all features:
- 5 sample patients
- 5 upcoming appointments
- 4 email campaigns with performance metrics
- 8 treatment offerings
- 4 active marketing campaigns

All sample data can be edited or deleted, and new records can be created.

## Future Enhancements

Potential features for future versions:
- Backend integration with REST API
- Database persistence (PostgreSQL/MySQL)
- User authentication and authorization
- SMS marketing capabilities
- Online booking widget for patients
- Payment processing integration
- Insurance claim management
- Inventory tracking for products
- Staff management and scheduling
- Advanced reporting and exports
- Mobile app version
- Integration with electronic health records (EHR)

## Customization

### Changing Colors
Edit the CSS variables in `css/main.css`:

```css
:root {
    --primary-color: #4A90E2;    /* Main brand color */
    --secondary-color: #50C878;  /* Success/positive color */
    --danger-color: #E94B3C;     /* Warning/negative color */
    --warning-color: #F5A623;    /* Alert color */
    /* ... more variables ... */
}
```

### Adding New Features
Each module is self-contained in its own JavaScript file. To add new features:
1. Create a new JavaScript file in the `js/` folder
2. Include it in `index.html`
3. Follow the existing module pattern

## Support

For questions, issues, or feature requests, please contact your development team.

## License

Copyright 2026 DermaCare Pro. All rights reserved.

## Credits

Developed for dermatology practices to streamline marketing and patient management operations.

---

**Note**: This is a frontend demonstration application. For production use, implement:
- Secure backend API
- Database integration
- User authentication
- Data encryption
- HIPAA compliance measures (for US healthcare)
- Regular security audits
