document.addEventListener('DOMContentLoaded', () => {
    // Check if we have data in localStorage
    const airDataStr = localStorage.getItem('airData');
    const cityTh = localStorage.getItem('cityTh');

    if (!airDataStr || !cityTh) {
        // No data, redirect back to home
        window.location.href = 'index.html';
        return;
    }

    const airData = JSON.parse(airDataStr);
    displayPMDetail(airData, cityTh);

    // Back button behavior
    document.getElementById('back-btn').addEventListener('click', (e) => {
        e.preventDefault();
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

function displayPMDetail(airData, cityTh) {
    document.getElementById('detail-city').textContent = cityTh;

    if (!airData || !airData.list || !airData.list[0]) {
        document.getElementById('detail-pm').textContent = 'ไม่มีข้อมูล';
        document.getElementById('detail-pm-label').textContent = '--';
        return;
    }

    const comp = airData.list[0].components;
    const pm25 = comp.pm2_5;
    const pm10 = comp.pm10;
    const aqi = airData.list[0].main.aqi;
    const aqiLabels = ['', 'ดี', 'พอใช้', 'ปานกลาง', 'ไม่ดี', 'แย่มาก'];
    const pmInfo = getPM25Level(pm25);

    document.getElementById('detail-pm').textContent = `${pm25.toFixed(1)} µg/m³`;
    document.getElementById('detail-pm').style.background = `linear-gradient(135deg, ${pmInfo.color}, #60a5fa)`;
    document.getElementById('detail-pm').style.webkitBackgroundClip = 'text';
    document.getElementById('detail-pm').style.webkitTextFillColor = 'transparent';
    document.getElementById('detail-pm-label').textContent = pmInfo.label;
    document.getElementById('detail-pm-label').style.color = pmInfo.color;

    // PM Level Bar
    document.getElementById('pm-bar-indicator').style.left = `${Math.min(pmInfo.barPct, 100)}%`;
    document.getElementById('pm-bar-indicator').style.borderColor = pmInfo.color;
    document.getElementById('pm-bar-indicator').style.boxShadow = `0 0 10px ${pmInfo.color}`;

    // Status Badge
    const badge = document.getElementById('pm-status-badge');
    badge.textContent = `● ${pmInfo.label}`;
    badge.className = `status-badge ${pmInfo.class}`;

    // Detail Grid
    document.getElementById('val-pm25').textContent = `${pm25.toFixed(1)} µg/m³`;
    document.getElementById('val-pm25').style.color = pmInfo.color;
    document.getElementById('val-pm10').textContent = `${pm10.toFixed(1)} µg/m³`;
    document.getElementById('val-aqi').textContent = `${aqi}/5 (${aqiLabels[aqi] || '--'})`;
    document.getElementById('val-co').textContent = `${comp.co.toFixed(1)} µg/m³`;
    document.getElementById('val-no2').textContent = `${comp.no2.toFixed(1)} µg/m³`;
    document.getElementById('val-o3').textContent = `${comp.o3.toFixed(1)} µg/m³`;
    document.getElementById('val-so2').textContent = `${comp.so2.toFixed(1)} µg/m³`;
}

function getPM25Level(pm25) {
    if (pm25 <= 15) return { label: 'ดีมาก', color: '#34d399', class: 'status-good', barPct: (pm25 / 15) * 16.6 };
    if (pm25 <= 25) return { label: 'ดี', color: '#34d399', class: 'status-good', barPct: 16.6 + ((pm25 - 15) / 10) * 16.6 };
    if (pm25 <= 37.5) return { label: 'ปานกลาง', color: '#fbbf24', class: 'status-moderate', barPct: 33.2 + ((pm25 - 25) / 12.5) * 16.6 };
    if (pm25 <= 75) return { label: 'เริ่มมีผลกระทบต่อสุขภาพ', color: '#fb923c', class: 'status-unhealthy', barPct: 49.8 + ((pm25 - 37.5) / 37.5) * 16.6 };
    if (pm25 <= 150) return { label: 'มีผลกระทบต่อสุขภาพ', color: '#f87171', class: 'status-very-unhealthy', barPct: 66.4 + ((pm25 - 75) / 75) * 16.6 };
    return { label: 'อันตราย', color: '#a855f7', class: 'status-hazardous', barPct: Math.min(83 + ((pm25 - 150) / 150) * 17, 100) };
}
