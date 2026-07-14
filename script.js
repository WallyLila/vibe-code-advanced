// ===== Thai Provinces Data =====
const THAI_PROVINCES = [
    { th: "กรุงเทพมหานคร", en: "Bangkok" },
    { th: "กระบี่", en: "Krabi" },
    { th: "กาญจนบุรี", en: "Kanchanaburi" },
    { th: "กาฬสินธุ์", en: "Kalasin" },
    { th: "กำแพงเพชร", en: "Kamphaeng Phet" },
    { th: "ขอนแก่น", en: "Khon Kaen" },
    { th: "จันทบุรี", en: "Chanthaburi" },
    { th: "ฉะเชิงเทรา", en: "Chachoengsao" },
    { th: "ชลบุรี", en: "Chon Buri" },
    { th: "ชัยนาท", en: "Chai Nat" },
    { th: "ชัยภูมิ", en: "Chaiyaphum" },
    { th: "ชุมพร", en: "Chumphon" },
    { th: "เชียงราย", en: "Chiang Rai" },
    { th: "เชียงใหม่", en: "Chiang Mai" },
    { th: "ตรัง", en: "Trang" },
    { th: "ตราด", en: "Trat" },
    { th: "ตาก", en: "Tak" },
    { th: "นครนายก", en: "Nakhon Nayok" },
    { th: "นครปฐม", en: "Nakhon Pathom" },
    { th: "นครพนม", en: "Nakhon Phanom" },
    { th: "นครราชสีมา", en: "Nakhon Ratchasima" },
    { th: "นครศรีธรรมราช", en: "Nakhon Si Thammarat" },
    { th: "นครสวรรค์", en: "Nakhon Sawan" },
    { th: "นนทบุรี", en: "Nonthaburi" },
    { th: "นราธิวาส", en: "Narathiwat" },
    { th: "น่าน", en: "Nan" },
    { th: "บึงกาฬ", en: "Bueng Kan" },
    { th: "บุรีรัมย์", en: "Buri Ram" },
    { th: "ปทุมธานี", en: "Pathum Thani" },
    { th: "ประจวบคีรีขันธ์", en: "Prachuap Khiri Khan" },
    { th: "ปราจีนบุรี", en: "Prachin Buri" },
    { th: "ปัตตานี", en: "Pattani" },
    { th: "พระนครศรีอยุธยา", en: "Phra Nakhon Si Ayutthaya" },
    { th: "พะเยา", en: "Phayao" },
    { th: "พังงา", en: "Phang Nga" },
    { th: "พัทลุง", en: "Phatthalung" },
    { th: "พิจิตร", en: "Phichit" },
    { th: "พิษณุโลก", en: "Phitsanulok" },
    { th: "เพชรบุรี", en: "Phetchaburi" },
    { th: "เพชรบูรณ์", en: "Phetchabun" },
    { th: "แพร่", en: "Phrae" },
    { th: "ภูเก็ต", en: "Phuket" },
    { th: "มหาสารคาม", en: "Maha Sarakham" },
    { th: "มุกดาหาร", en: "Mukdahan" },
    { th: "แม่ฮ่องสอน", en: "Mae Hong Son" },
    { th: "ยโสธร", en: "Yasothon" },
    { th: "ยะลา", en: "Yala" },
    { th: "ร้อยเอ็ด", en: "Roi Et" },
    { th: "ระนอง", en: "Ranong" },
    { th: "ระยอง", en: "Rayong" },
    { th: "ราชบุรี", en: "Ratchaburi" },
    { th: "ลพบุรี", en: "Lop Buri" },
    { th: "ลำปาง", en: "Lampang" },
    { th: "ลำพูน", en: "Lamphun" },
    { th: "เลย", en: "Loei" },
    { th: "ศรีสะเกษ", en: "Si Sa Ket" },
    { th: "สกลนคร", en: "Sakon Nakhon" },
    { th: "สงขลา", en: "Songkhla" },
    { th: "สตูล", en: "Satun" },
    { th: "สมุทรปราการ", en: "Samut Prakan" },
    { th: "สมุทรสงคราม", en: "Samut Songkhram" },
    { th: "สมุทรสาคร", en: "Samut Sakhon" },
    { th: "สระแก้ว", en: "Sa Kaeo" },
    { th: "สระบุรี", en: "Saraburi" },
    { th: "สิงห์บุรี", en: "Sing Buri" },
    { th: "สุโขทัย", en: "Sukhothai" },
    { th: "สุพรรณบุรี", en: "Suphan Buri" },
    { th: "สุราษฎร์ธานี", en: "Surat Thani" },
    { th: "สุรินทร์", en: "Surin" },
    { th: "หนองคาย", en: "Nong Khai" },
    { th: "หนองบัวลำภู", en: "Nong Bua Lam Phu" },
    { th: "อ่างทอง", en: "Ang Thong" },
    { th: "อำนาจเจริญ", en: "Amnat Charoen" },
    { th: "อุดรธานี", en: "Udon Thani" },
    { th: "อุตรดิตถ์", en: "Uttaradit" },
    { th: "อุทัยธานี", en: "Uthai Thani" },
    { th: "อุบลราชธานี", en: "Ubon Ratchathani" }
];

// ===== API Configuration =====
const API_KEY = '2977a00e5829409bc8a1a1ffbcd135f1';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const AIR_POLLUTION_API_URL = 'https://api.openweathermap.org/data/2.5/air_pollution';
const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// ===== DOM Elements =====
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const suggestionsList = document.getElementById('suggestions-list');
const loadingState = document.getElementById('loading-state');
const welcomeState = document.getElementById('welcome-state');
const weatherData = document.getElementById('weather-data');
const errorToast = document.getElementById('error-toast');
const errorMessage = document.getElementById('error-message');

// ===== State =====
let currentWeatherData = null;
let currentAirData = null;
let currentForecastData = null;
let currentCityTh = '';
let selectedSuggestionIndex = -1;
let debounceTimer = null;

// ===== Search & Autocomplete =====
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    clearTimeout(debounceTimer);

    if (query.length === 0) {
        hideSuggestions();
        return;
    }

    debounceTimer = setTimeout(() => {
        const matches = filterProvinces(query);
        showSuggestions(matches, query);
    }, 150);
});

searchInput.addEventListener('keydown', (e) => {
    const items = suggestionsList.querySelectorAll('li');

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, items.length - 1);
        updateActiveSuggestion(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
        updateActiveSuggestion(items);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedSuggestionIndex >= 0 && items[selectedSuggestionIndex]) {
            const province = items[selectedSuggestionIndex].dataset;
            selectProvince(province.th, province.en);
        } else {
            const query = searchInput.value.trim();
            if (query) {
                const matches = filterProvinces(query);
                if (matches.length > 0) {
                    selectProvince(matches[0].th, matches[0].en);
                }
            }
        }
    } else if (e.key === 'Escape') {
        hideSuggestions();
    }
});

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (!query) return;

    const matches = filterProvinces(query);
    if (matches.length > 0) {
        selectProvince(matches[0].th, matches[0].en);
    } else {
        showError('ไม่พบจังหวัดที่ค้นหา');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        hideSuggestions();
    }
});

function filterProvinces(query) {
    const q = query.toLowerCase();
    return THAI_PROVINCES.filter(p =>
        p.th.includes(query) || p.en.toLowerCase().includes(q)
    ).slice(0, 8);
}

function showSuggestions(matches, query) {
    if (matches.length === 0) {
        hideSuggestions();
        return;
    }

    selectedSuggestionIndex = -1;
    suggestionsList.innerHTML = matches.map(p => {
        const highlightedTh = highlightMatch(p.th, query);
        return `
            <li data-th="${p.th}" data-en="${p.en}">
                <svg class="suggestion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>${highlightedTh} <span style="color: var(--text-muted); font-size: 0.85em;">(${p.en})</span></span>
            </li>
        `;
    }).join('');

    suggestionsList.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            selectProvince(li.dataset.th, li.dataset.en);
        });
    });

    suggestionsList.classList.remove('hidden');
}

function highlightMatch(text, query) {
    const idx = text.indexOf(query);
    if (idx === -1) return text;
    return text.substring(0, idx) +
        `<span class="suggestion-highlight">${text.substring(idx, idx + query.length)}</span>` +
        text.substring(idx + query.length);
}

function hideSuggestions() {
    suggestionsList.classList.add('hidden');
    selectedSuggestionIndex = -1;
}

function updateActiveSuggestion(items) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === selectedSuggestionIndex);
        if (i === selectedSuggestionIndex) {
            item.scrollIntoView({ block: 'nearest' });
        }
    });
}

async function selectProvince(thName, enName) {
    searchInput.value = thName;
    hideSuggestions();
    searchInput.blur();
    await fetchWeatherData(thName, enName);
}

// ===== Fetch Weather Data =====
async function fetchWeatherData(thName, enName) {
    showLoading();

    try {
        const weatherUrl = `${WEATHER_API_URL}?q=${encodeURIComponent(enName)},TH&appid=${API_KEY}&units=metric&lang=th`;
        const weatherRes = await fetch(weatherUrl);

        if (!weatherRes.ok) throw new Error('ไม่สามารถดึงข้อมูลสภาพอากาศได้');

        currentWeatherData = await weatherRes.json();
        currentCityTh = thName;

        const { lat, lon } = currentWeatherData.coord;
        
        const airUrl = `${AIR_POLLUTION_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        const airRes = await fetch(airUrl);
        currentAirData = airRes.ok ? await airRes.json() : null;

        const forecastUrl = `${FORECAST_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=th`;
        const forecastRes = await fetch(forecastUrl);
        currentForecastData = forecastRes.ok ? await forecastRes.json() : null;

        // Save data to localStorage for detail pages
        localStorage.setItem('weatherData', JSON.stringify(currentWeatherData));
        localStorage.setItem('airData', JSON.stringify(currentAirData));
        localStorage.setItem('cityTh', thName);

        displayWeatherData(thName);
    } catch (error) {
        showError(error.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อ');
        hideLoading();
    }
}

// ===== Display Weather Data =====
function displayWeatherData(thName) {
    const data = currentWeatherData;
    const air = currentAirData;

    // City Header
    document.getElementById('city-name').textContent = thName;
    document.getElementById('city-date').textContent = formatThaiDate(new Date());

    const iconCode = data.weather[0].icon;
    document.getElementById('weather-icon-main').src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    document.getElementById('weather-icon-main').alt = data.weather[0].description;

    document.getElementById('temp-main').textContent = Math.round(data.main.temp);
    document.getElementById('weather-desc').textContent = data.weather[0].description;

    // Weather card (combined)
    document.getElementById('temp-value').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('temp-feel').textContent = `รู้สึกเหมือน ${Math.round(data.main.feels_like)}°C`;
    document.getElementById('cloud-mini').textContent = `เมฆ ${data.clouds.all}%`;
    const rain = data.rain ? (data.rain['1h'] || data.rain['3h'] || 0) : 0;
    document.getElementById('rain-mini').textContent = `ฝน ${rain.toFixed(1)} mm`;

    // PM2.5 card
    if (air && air.list && air.list[0]) {
        const pm25 = air.list[0].components.pm2_5;
        document.getElementById('pm-value').textContent = `${pm25.toFixed(1)} µg/m³`;
        const pmInfo = getPM25Level(pm25);
        document.getElementById('pm-level').textContent = pmInfo.label;
        document.getElementById('pm-level').style.color = pmInfo.color;
        document.getElementById('pm-bar-fill').style.left = `${Math.min(pmInfo.barPct, 100)}%`;
    } else {
        document.getElementById('pm-value').textContent = 'ไม่มีข้อมูล';
        document.getElementById('pm-level').textContent = '--';
        document.getElementById('pm-bar-fill').style.left = '0%';
    }

    // Additional info
    document.getElementById('wind-value').textContent = `${data.wind.speed} m/s`;
    document.getElementById('humidity-value').textContent = `${data.main.humidity}%`;
    document.getElementById('visibility-value').textContent = data.visibility ? `${(data.visibility / 1000).toFixed(1)} km` : '--';
    document.getElementById('pressure-value').textContent = `${data.main.pressure} hPa`;

    // Display Forecast
    displayForecastData();

    hideLoading();
    welcomeState.classList.add('hidden');
    weatherData.classList.remove('hidden');

    weatherData.style.animation = 'none';
    weatherData.offsetHeight;
    weatherData.style.animation = '';
}

function displayForecastData() {
    const forecastScroll = document.getElementById('forecast-scroll');
    if (!currentForecastData || !currentForecastData.list) {
        forecastScroll.innerHTML = '<div style="color: var(--text-muted); padding: 1rem; font-size: 0.9rem;">ไม่มีข้อมูลพยากรณ์ล่วงหน้า</div>';
        return;
    }

    // Take next 8 items (24 hours in 3-hour steps)
    const forecasts = currentForecastData.list.slice(0, 8);
    
    forecastScroll.innerHTML = forecasts.map(item => {
        const date = new Date(item.dt * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const timeString = `${hours}:00`;
        const iconCode = item.weather[0].icon;
        const temp = Math.round(item.main.temp);
        
        return `
            <div class="forecast-item">
                <span class="forecast-time">${timeString}</span>
                <img class="forecast-icon" src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather icon">
                <span class="forecast-temp">${temp}°C</span>
            </div>
        `;
    }).join('');
}

// ===== Card Click → Open New Window =====
document.getElementById('card-weather').addEventListener('click', () => {
    if (!currentWeatherData) return;
    window.open('weather-detail.html', '_blank');
});

document.getElementById('card-pm').addEventListener('click', () => {
    if (!currentAirData) return;
    window.open('pm-detail.html', '_blank');
});

// Keyboard support for cards
document.querySelectorAll('.weather-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// ===== Helper Functions =====
function formatThaiDate(date) {
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const days = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
    const thaiYear = date.getFullYear() + 543;
    return `วัน${days[date.getDay()]}ที่ ${date.getDate()} ${months[date.getMonth()]} ${thaiYear} เวลา ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} น.`;
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

function getPM25Level(pm25) {
    if (pm25 <= 15) return { label: 'ดีมาก', color: '#34d399', class: 'status-good', barPct: (pm25 / 15) * 16.6 };
    if (pm25 <= 25) return { label: 'ดี', color: '#34d399', class: 'status-good', barPct: 16.6 + ((pm25 - 15) / 10) * 16.6 };
    if (pm25 <= 37.5) return { label: 'ปานกลาง', color: '#fbbf24', class: 'status-moderate', barPct: 33.2 + ((pm25 - 25) / 12.5) * 16.6 };
    if (pm25 <= 75) return { label: 'เริ่มมีผลกระทบต่อสุขภาพ', color: '#fb923c', class: 'status-unhealthy', barPct: 49.8 + ((pm25 - 37.5) / 37.5) * 16.6 };
    if (pm25 <= 150) return { label: 'มีผลกระทบต่อสุขภาพ', color: '#f87171', class: 'status-very-unhealthy', barPct: 66.4 + ((pm25 - 75) / 75) * 16.6 };
    return { label: 'อันตราย', color: '#a855f7', class: 'status-hazardous', barPct: Math.min(83 + ((pm25 - 150) / 150) * 17, 100) };
}

function getWindDirection(deg) {
    if (deg == null) return '--';
    const dirs = ['เหนือ', 'ตะวันออกเฉียงเหนือ', 'ตะวันออก', 'ตะวันออกเฉียงใต้', 'ใต้', 'ตะวันตกเฉียงใต้', 'ตะวันตก', 'ตะวันตกเฉียงเหนือ'];
    return dirs[Math.round(deg / 45) % 8];
}

// ===== Loading & Error =====
function showLoading() {
    welcomeState.classList.add('hidden');
    weatherData.classList.add('hidden');
    loadingState.classList.remove('hidden');
}

function hideLoading() {
    loadingState.classList.add('hidden');
}

function showError(message) {
    errorMessage.textContent = message;
    errorToast.classList.remove('hidden');
    setTimeout(() => { errorToast.classList.add('hidden'); }, 4000);
}
