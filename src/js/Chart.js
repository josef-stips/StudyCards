//Main Buttons. the user can switch between the two main charts
let TimesChart_btn = document.getElementById('times-chart-btn');
let ProgressChart_btn = document.getElementById('progression-chart-btn');

//From Progress Window the chart-btn's
let LineChart_btn = document.getElementById('LineChart-btn');
let BarChart_btn = document.getElementById('BarChart-btn');
let PieChart_btn = document.getElementById('PieChart-btn');
let PolarChart_btn = document.getElementById('PolarChart-btn');
let RadarChart_btn = document.getElementById('RadarChart_btn');

//Main Content with Chart and other stuff
let md03_MainContent = document.getElementById('md03-main-content');
//In this div the chart is displayed
let Chart_Wrapper = document.getElementById('Chart-wrapper');
let Chart_Wrapper2 = document.getElementById('Chart-wrapper2');

//Both Chart Content
let FirstChart_Content = document.getElementById('md03-first-chart-content');
let SecondChart_Content = document.getElementById('md03-second-chart-content');

//Chart Canvas
let ctx = document.getElementById('ProgressionChart-times');
let ctx_2 = document.getElementById('ProgressionChart-correctness');

//EventListener 
TimesChart_btn.addEventListener('click', () => {
    FirstChart_Content.style.display = 'block';
    SecondChart_Content.style.display = 'none';

    r.style.setProperty('--focus-on-btn-tab01', '#4568dc');
    r.style.setProperty('--focus-on-btn-tab02', 'rgb(255,255,255)');
});

ProgressChart_btn.addEventListener('click', () => {
    FirstChart_Content.style.display = 'none';
    SecondChart_Content.style.display = 'block';

    r.style.setProperty('--focus-on-btn-tab01', 'rgb(255,255,255)');
    r.style.setProperty('--focus-on-btn-tab02', '#4568dc');
});

//Main

//First Chart (times)
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    }
});

//Second Chart (general progression)
new Chart(ctx_2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    }
});