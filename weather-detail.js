document.addEventListener('DOMContentLoaded', () => {
    // Check if we have data in localStorage
    const weatherDataStr = localStorage.getItem('weatherData');
    const cityTh = localStorage.getItem('cityTh');

    if (!weatherDataStr || !cityTh) {
        // No data, redirect back to home
        window.location.href = 'index.html';
        return;
    }

    const weatherData = JSON.parse(weatherDataStr);
    displayWeatherDetail(weatherData, cityTh);

    // Back button behavior
    document.getElementById('back-btn').addEventListener('click', (e) => {
        e.preventDefault();
        // Since it's a new window, we might want to just close it, or navigate back
        // Usually, in a real app if opened in _blank, window.close() is appropriate.
        // But some browsers block it if not opened by script. We can just use history.back() or window.close().
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.close();
            // Fallback if window.close() is blocked
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 100);
        }
    });
});

function displayWeatherDetail(data, cityTh) {
    const d = data.main;
    const weather = data.weather[0];
    const cloudiness = data.clouds.all;
    const rain1h = data.rain ? (data.rain['1h'] || 0) : 0;
    const rain3h = data.rain ? (data.rain['3h'] || 0) : 0;

    document.getElementById('detail-city').textContent = cityTh;
    document.getElementById('detail-temp').textContent = `${Math.round(d.temp)}°C`;
    document.getElementById('detail-desc').textContent = weather.description;

    document.getElementById('val-feels-like').textContent = `${Math.round(d.feels_like)}°C`;
    document.getElementById('val-temp-min').textContent = `${Math.round(d.temp_min)}°C`;
    document.getElementById('val-temp-max').textContent = `${Math.round(d.temp_max)}°C`;

    document.getElementById('val-cloud-pct').textContent = `${cloudiness}%`;
    document.getElementById('val-cloud-bar').style.width = `${Math.max(cloudiness, 2)}%`; // at least 2% so it's visible
    document.getElementById('val-cloud-desc').textContent = getCloudDescription(cloudiness);
    document.getElementById('val-visibility').textContent = data.visibility ? `${(data.visibility / 1000).toFixed(1)} km` : '--';

    document.getElementById('val-rain-1h').textContent = `${rain1h.toFixed(1)} mm`;
    document.getElementById('val-rain-3h').textContent = `${rain3h.toFixed(1)} mm`;
    document.getElementById('val-rain-desc').textContent = getRainDescription(rain1h);
    document.getElementById('val-humidity').textContent = `${d.humidity}%`;

    if (rain1h > 0) {
        document.getElementById('rain-alert').style.display = 'inline-flex';
    }
}

function getCloudDescription(pct) {
    if (pct <= 10) return 'ท้องฟ้าแจ่มใส';
    if (pct <= 30) return 'มีเมฆบางส่วน';
    if (pct <= 60) return 'มีเมฆปานกลาง';
    if (pct <= 84) return 'มีเมฆมาก';
    return 'มีเมฆครึ้ม';
}

function getRainDescription(mm) {
    if (mm === 0) return 'ไม่มีฝน';
    if (mm < 2.5) return 'ฝนเล็กน้อย';
    if (mm < 7.5) return 'ฝนปานกลาง';
    if (mm < 35) return 'ฝนหนัก';
    return 'ฝนหนักมาก';
}
