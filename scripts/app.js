const canvas = document.getElementById('zenithCanvas');
const ctx = canvas.getContext('2d');

document.getElementById('generatePlot').addEventListener('click', generatePlot);
document.getElementById('exportPlot').addEventListener('click', exportPlot);

function generatePlot(event) {
    event.preventDefault();
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const date = new Date(document.getElementById('date').value);

    generateStarPlot(latitude, longitude, date);
};

document.getElementById('exportPlot').addEventListener('click', function() {
    const canvas = document.getElementById('zenithCanvas');
    const link = document.createElement('a');
    link.download = 'zenith_star_plot.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});

function generateStarPlot(latitude, longitude, date) {
    const canvas = document.getElementById('zenithCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create an observer
    const observer = Astronomy.MakeObserver(latitude, longitude, 0);
    const time = new Astronomy.Time(date);

    // Placeholder for star plotting logic
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Example: Plot the Sun's position
    const sun = Astronomy.Equator('Sun', time, observer, true, true);
    const sunAzimuth = sun.hor.azimuth;
    const sunAltitude = sun.hor.altitude;

    // Convert azimuth and altitude to canvas coordinates
    const x = canvas.width / 2 + (canvas.width / 2) * Math.cos(sunAzimuth * Math.PI / 180) * Math.cos(sunAltitude * Math.PI / 180);
    const y = canvas.height / 2 - (canvas.height / 2) * Math.sin(sunAltitude * Math.PI / 180);

    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    // Add more logic to plot stars based on latitude, longitude, and date
}

function exportPlot() {
    const link = document.createElement('a');
    link.download = 'zenith_star_plot.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}