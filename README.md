# Zenith Star Plots

This project is a simple web application that generates zenith star plots based on user-provided latitude, longitude, and date. The plots can be exported as high-resolution PNG files.

## Project Structure

```
zenith-star-plots
├── src
│   ├── index.html       # Main HTML document
│   ├── styles.css       # Styles for the web page
│   └── scripts
│       └── app.js       # JavaScript functionality
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Getting Started

To set up and run the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd zenith-star-plots
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Open the application**:
   Open `src/index.html` in your web browser to view the application.

## Usage

1. Enter the latitude and longitude in the provided input fields.
2. Select the date for which you want to generate the zenith star plot.
3. Click the "Generate Plot" button to create the plot.
4. Use the "Export as PNG" button to download the plot in high resolution.

## Libraries Used

- [D3.js](https://d3js.org/) or [Chart.js](https://www.chartjs.org/) for generating plots.
- Additional libraries for exporting images may be included in the `package.json`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.