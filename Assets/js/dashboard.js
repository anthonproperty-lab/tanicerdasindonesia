function updatePerfGraph(historyData) {
    const ctx = document.getElementById('perfChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

    if (perfChart) perfChart.destroy();

    perfChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: historyData.map((_, i) => i),
            datasets: [{
                data: historyData,
                borderColor: '#10b981',
                borderWidth: 3,
                pointRadius: 4,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#060b13',
                pointBorderWidth: 2,
                fill: true,
                backgroundColor: gradient,
                tension: 0.35
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 800 },
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            }
        }
    });
}


let timeAlloc = 3600;
setInterval(() => {
    timeAlloc--;
    if(timeAlloc < 0) timeAlloc = 3600;
    let mins = Math.floor(timeAlloc / 60);
    let secs = timeAlloc % 60;
    document.getElementById('countdown').innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}, 1000);

// Simulasi Pengisian Data Real-Time Telemetri SCADA IoT
setTimeout(() => {
    document.getElementById('scada-status').innerHTML = '<span class="status-indicator"></span> Cloud Live Connected';
    document.getElementById('target-crop').innerText = 'Smart Greenhouse B';
    document.getElementById('val-ec').innerText = '1.82 mS/cm';
    document.getElementById('val-ph').innerText = '6.21 pH';
    document.getElementById('val-efficiency').innerText = '94.2%';
    document.getElementById('val-error').innerText = '0.04%';
    document.getElementById('val-cycles').innerText = '32 / Hari';
    document.getElementById('val-yield').innerText = '98.7%';
    updatePerfGraph([85.5, 88.2, 87.0, 92.5, 94.2]);
    showToastNotif("Koneksi IoT Master Server Berhasil didirikan!");
}, 2000);

// Inisialisasi Grafik Pertama Kali
window.onload = function() {
    updatePerfGraph(performanceHistory);
};

window.addEventListener("orientationchange", function() {
    document.body.style.display = 'none';
    setTimeout(function() {
        document.body.style.display = 'block';
        if(perfChart) perfChart.resize();
    }, 30);
});
