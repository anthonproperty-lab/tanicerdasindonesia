/* ==========================================================
   TANI CERDAS INDONESIA
   DASHBOARD ENGINE
========================================================== */

let perfChart = null;

const performanceHistory = [
    85.5,
    88.2,
    87.0,
    92.5
];


/* ==========================================================
   PERFORMANCE CHART
========================================================== */

function initPerformanceChart() {

    updatePerformanceChart(performanceHistory);

}

function updatePerformanceChart(history) {

    const canvas = document.getElementById("perfChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 160);

    gradient.addColorStop(0, "rgba(16,185,129,.40)");
    gradient.addColorStop(1, "rgba(16,185,129,0)");

    if (perfChart) {

        perfChart.destroy();

    }

    perfChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: history.map((_, index) => index + 1),

            datasets: [

                {

                    data: history,

                    borderColor: "#10b981",

                    backgroundColor: gradient,

                    fill: true,

                    borderWidth: 3,

                    pointRadius: 4,

                    pointBackgroundColor: "#10b981",

                    pointBorderColor: "#060b13",

                    pointBorderWidth: 2,

                    tension: .35

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                x: {

                    display: false

                },

                y: {

                    display: false

                }

            }

        }

    });

}


/* ==========================================================
   COUNTDOWN
========================================================== */

let countdownValue = 3600;

function startCountdown() {

    const counter = document.getElementById("countdown");

    if (!counter) return;

    setInterval(() => {

        countdownValue--;

        if (countdownValue < 0) {

            countdownValue = 3600;

        }

        const minute = Math.floor(countdownValue / 60);

        const second = countdownValue % 60;

        counter.textContent =
            `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;

    },1000);

}


/* ==========================================================
   SIMULASI TELEMETRY
========================================================== */

function loadTelemetryDemo() {

    setTimeout(() => {

        setText("scada-status",
            `<span class="status-indicator"></span> Cloud Live Connected`,
            true
        );

        setText("target-crop","Smart Greenhouse B");

        setText("val-ec","1.82 mS/cm");

        setText("val-ph","6.21 pH");

        setText("val-efficiency","94.2%");

        setText("val-error","0.04%");

        setText("val-cycles","32 / Hari");

        setText("val-yield","98.7%");

        updatePerformanceChart([

            85.5,
            88.2,
            87.0,
            92.5,
            94.2

        ]);

        if (typeof showToastNotif === "function") {

            showToastNotif(
                "Koneksi IoT Master Server berhasil."
            );

        }

    },2000);

}


/* ==========================================================
   HELPERS
========================================================== */

function setText(id,value,isHtml=false){

    const element = document.getElementById(id);

    if(!element) return;

    if(isHtml){

        element.innerHTML=value;

    }else{

        element.textContent=value;

    }

}


/* ==========================================================
   RESPONSIVE
========================================================== */

window.addEventListener("orientationchange",()=>{

    if(perfChart){

        setTimeout(()=>{

            perfChart.resize();

        },100);

    }

});


/* ==========================================================
   INITIALIZER
========================================================== */

function initDashboard(){

    initPerformanceChart();

    startCountdown();

    loadTelemetryDemo();

}
