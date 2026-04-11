# IMD - Rainfall & Weather Visualization

A comprehensive web-based application for visualizing rainfall data across Indian states and accessing real-time weather information. This project provides an interactive interface to explore meteorological data with an integrated weather service for user locations.

## 🌍 Features

### Rainfall Visualization

- **Interactive State Maps**: Visual representation of rainfall distribution across all Indian states and union territories using interactive SVG maps
- **State-wise Rainfall Data**: Display average and maximum rainfall (mm/hr) for each state
- **Color-coded Visualization**: States are color-coded based on rainfall intensity for quick visual analysis
- **Historical Data**: Access rainfall data from the CSV database for date-specific analysis
- **State Selection**: Dropdown menu to select and view detailed rainfall statistics for any state

### Weather Information

- **Real-time Weather Data**: Current weather conditions fetched from OpenWeatherAPI
- **Geolocation Services**: Automatic detection of user's location using browser geolocation
- **Weather Details**:
  - Current temperature (°C)
  - "Feels like" temperature
  - Weather description
  - Humidity percentage
  - Air pressure (hPa)
- **Location Display**: Current city and state information using reverse geocoding

### User Interface

- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Interactive Tooltips**: Hover over states to view state names
- **Professional Styling**: Government of India themed design with official IMD branding
- **Navigation Menu**: Easy access to Home, About, Services, and Contact sections

## 🛠️ Technology Stack

### Frontend

- **HTML5**: Semantic markup structure
- **CSS3**: Responsive styling with custom stylesheets
- **SCSS**: Advanced styling with variables and mixins (compiled to CSS)
- **JavaScript (ES6)**: Modern JavaScript with module imports/exports
- **SVG**: Interactive vector graphics for map visualization

### APIs & External Services

- **OpenWeatherAPI**: Real-time weather data
  - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
  - Provides: Temperature, humidity, pressure, weather description
- **Geoapify API**: Location/Geocoding services
  - Endpoint: `https://api.geoapify.com/v1/geocode/reverse`
  - Provides: Reverse geocoding (coordinates to address)

### Data

- **CSV Format**: Rainfall data stored in `final_output.csv`
- Contains state names, average rainfall, and maximum rainfall data

## 📋 Project Structure

```text
IMD-Rainfall-Data-Visualization/
├── index.html                # Main HTML file
├── Home.js                   # Main JavaScript file for weather and location
├── Home.css                  # Compiled CSS styles
├── Home.scss                 # SCSS source files for styles
├── rainfall.js               # Rainfall data processing and visualization
├── states.js                 # State data and image mappings
├── map_svg.js                # SVG map tooltip functionality
├── final_output.csv          # Rainfall data in CSV format
├── images/                   # Directory containing state images and logos
│   ├── imd_logo.png         # IMD logo
│   ├── logo_emb.png         # Government emblem
│   ├── imd_150.png          # 150 years IMD celebration logo
│   └── [state_images].png   # Individual state/UT images
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser with JavaScript enabled
- Geolocation permission (for weather feature)
- Internet connection for API calls

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Simar0024/IMD-Rainfall-Data-Visualization.git
   cd IMD-Rainfall-Data-Visualization
   ```

2. **No build process required**: Simply open `index.html` in your web browser
   - Most straightforward method: Double-click `index.html`
   - Or use a local server (recommended for testing):

     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if http-server is installed)
     http-server
     ```

3. **Access the application**:
   - If using a local server: Open `http://localhost:8000` in your browser
   - If opening directly: Use `file:///path/to/IMD/index.html`

### API Setup

#### OpenWeatherAPI

1. Visit [OpenWeatherAPI](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key
4. Replace the `Weather_Key` in [Home.js](Home.js#L10) with your API key:

   ```javascript
   const Weather_Key = 'your-api-key-here';
   ```

#### Geoapify API

1. Visit [Geoapify](https://www.geoapify.com/)
2. Sign up for a free account
3. Get your API key
4. Replace the `Location_Key` in [Home.js](Home.js#L11) with your API key:

   ```javascript
   const Location_Key = 'your-api-key-here';
   ```

## 📖 Usage

### Viewing Rainfall Data

1. The application loads automatically with the default rainfall visualization
2. **Color Legend**:
   - Light colors indicate low rainfall areas
   - Dark colors indicate high rainfall areas
3. **Hover over states** to see their names in a tooltip
4. **Select a state** from the dropdown menu and click "Search" to view detailed rainfall statistics:
   - Average rainfall (mm/hr)
   - Maximum rainfall (mm/hr)

### Checking Current Weather

1. The application automatically requests browser geolocation permission
2. Accept the permission to see:
   - Current location (city and state)
   - Current temperature and "feels like" temperature
   - Weather description (e.g., Cloudy, Sunny, Rainy)
   - Humidity and air pressure
3. If geolocation is disabled or unavailable, an error message will be displayed

### Navigation

- **Home**: View the current rainfall visualization and weather
- **About**: Information about the India Meteorological Department
- **Services**: Available meteorological services
- **Contact**: Contact information for the IMD

## 📊 Data Format

### CSV Rainfall Data (final_output.csv)

```text
Date,Time,State,AvgRainfall,MaxRainfall
2023-10-03,00:00:00,ANDAMAN & NICOBAR,2.5,15.3
2023-10-03,00:00:00,ANDHRA PRADESH,3.2,18.7
...
```

### States Data (states.js)

Maps state IDs to their respective images for visualization:

```javascript
{
    id: 'state-name',
    img_path: './images/state-image.png'
}
```

## 🔧 Configuration

### Customizing Rainfall Colors

Edit the `getColor()` function in [rainfall.js](rainfall.js) to change the color mapping for different rainfall ranges.

### Changing Date/Time Data

By default, only data for `2023-10-03` is available. To add more data:

1. Update `final_output.csv` with new rainfall data
2. Update date validation in [rainfall.js](rainfall.js) if needed

### Styling Customization

Edit [Home.scss](Home.scss) to customize:

- Color scheme
- Responsive breakpoints
- Typography
- Layout spacing

## 🌐 API Response Examples

### OpenWeatherAPI Response

```json
{
  "main": {
    "temp": 28.5,
    "feels_like": 30.2,
    "humidity": 75,
    "pressure": 1013
  },
  "weather": [{
    "description": "partly cloudy"
  }]
}
```

### Geoapify Response

```json
{
  "results": [{
    "county": "New Delhi",
    "state": "Delhi"
  }]
}
```

## 📱 Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Required Features**:

  - ES6 JavaScript modules
  - Geolocation API
  - SVG support
  - CSS Grid and Flexbox

## 🔒 Privacy & Permissions

- **Geolocation**: Used only to fetch local weather data, not stored on servers
- **API Keys**: Stored in client-side JavaScript (ensure using free-tier keys only)
- **Data Usage**: No user data is collected or stored permanently

## 📝 License

This project is created for educational and meteorological information purposes. It uses public data from the India Meteorological Department and various free APIs.

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Areas for Improvement

- Add more historical dates to rainfall data
- Implement data filtering by date range
- Add weather alerts and notifications
- Improve mobile responsiveness
- Add more detailed statistics and charts
- Implement dark mode

## 📞 Support

For issues or questions:

1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Contact the project maintainers

## 🔗 Useful Resources

- [OpenWeatherAPI Documentation](https://openweathermap.org/api)
- [Geoapify Documentation](https://www.geoapify.com/api/)
- [India Meteorological Department](https://www.imd.gov.in/)
- [SVG Specification](https://www.w3.org/TR/SVG2/)
- [Geolocation API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

## 📜 Changelog

### Version 1.0 (Current)

- Initial release with rainfall visualization
- Real-time weather information
- Interactive state maps
- Responsive design

## ⭐ Acknowledgments

- India Meteorological Department for the official branding and information
- OpenWeatherAPI for weather data services
- Geoapify for geolocation services
- Government of India for official logos and emblems

---

**Created by**: Simar0024  
**Last Updated**: April 2026  
**Project Status**: Active Development
