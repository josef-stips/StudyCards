//Main Buttons. the user can switch between the two main charts
let TimesChart_btn = document.getElementById('times-chart-btn');
let ProgressChart_btn = document.getElementById('progression-chart-btn');

//From Progress Window the chart-btn's
let LineChart_btn = document.getElementById('LineChart-btn');
let BarChart_btn = document.getElementById('BarChart-btn');
let PieChart_btn = document.getElementById('PieChart-btn');
let PolarChart_btn = document.getElementById('PolarChart-btn');
let RadarChart_btn = document.getElementById('RadarChart-btn');

//Second Chart
let LineChart_btn02 = document.getElementById('LineChart-btn02');
let BarChart_btn02 = document.getElementById('BarChart-btn02');
let PieChart_btn02 = document.getElementById('PieChart-btn02');
let PolarChart_btn02 = document.getElementById('PolarChart-btn02');
let RadarChart_btn02 = document.getElementById('RadarChart-btn02');

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
let ctx02 = document.getElementById('ProgressionChart-correctness');

//Small Info Chart text
let graphInfoText = document.getElementsByClassName('graph-info-text')[0];
let graphInfoText02 = document.getElementsByClassName('graph-info-text')[1];

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

//First Chart (times) data
let Times = [];
let Labels = [];

const data = {
    labels: Labels,
    datasets: [{
        label: 'How fast do you got?',
        data: Times,
        borderWidth: 1
    }]
};

//Second Chart (progress) data
const data02 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    }]
};

//Config for first Chart 
const FirstChart_config01 = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    }
};

const FirstChart_config02 = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    }
};

const FirstChart_config03 = {
    type: 'pie',
    data: data,
    options: {
        maintainAspectRatio: false
    }
};

const FirstChart_config04 = {
    type: 'polarArea',
    data: data,
    options: {
        maintainAspectRatio: false
    }
};

const FirstChart_config05 = {
    type: 'doughnut',
    data,
    options: {
        maintainAspectRatio: false
    }
};

//config for second chart
const SecChart_config01 = {
    type: 'line',
    data: data02,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    }
};

const SecChart_config02 = {
    type: 'bar',
    data: data02,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    }
};

const SecChart_config03 = {
    type: 'pie',
    data: data02,
    options: {
        maintainAspectRatio: false
    }
};

const SecChart_config04 = {
    type: 'polarArea',
    data: data02,
    options: {
        maintainAspectRatio: false
    }
};

const SecChart_config05 = {
    type: 'doughnut',
    data: data02,
    options: {
        maintainAspectRatio: false
    }
};

let FirstChart = new Chart(ctx, FirstChart_config01);

LineChart_btn.addEventListener('click', () => {
    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config01);

    ChangeChartInfo(FirstChart_config01.type, graphInfoText);
});

BarChart_btn.addEventListener('click', () => {
    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config02);

    ChangeChartInfo(FirstChart_config02.type, graphInfoText);
});

PieChart_btn.addEventListener('click', () => {
    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config03);

    ChangeChartInfo(FirstChart_config03.type, graphInfoText);
});

PolarChart_btn.addEventListener('click', () => {
    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config04);

    ChangeChartInfo(FirstChart_config04.type, graphInfoText);
});

RadarChart_btn.addEventListener('click', () => {
    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config05);

    ChangeChartInfo(FirstChart_config05.type, graphInfoText);
});

//Second Chart (general progression)
let SecondChart = new Chart(ctx02, SecChart_config01);

LineChart_btn02.addEventListener('click', () => {
    SecondChart.destroy();
    SecondChart = new Chart(ctx02, SecChart_config01);

    ChangeChartInfo(SecChart_config01.type, graphInfoText02);
});

BarChart_btn02.addEventListener('click', () => {
    SecondChart.destroy();
    SecondChart = new Chart(ctx02, SecChart_config02);

    ChangeChartInfo(SecChart_config02.type, graphInfoText02);
});

PieChart_btn02.addEventListener('click', () => {
    SecondChart.destroy();
    SecondChart = new Chart(ctx02, SecChart_config03);

    ChangeChartInfo(SecChart_config03.type, graphInfoText02);
});

PolarChart_btn02.addEventListener('click', () => {
    SecondChart.destroy();
    SecondChart = new Chart(ctx02, SecChart_config04);

    ChangeChartInfo(SecChart_config04.type, graphInfoText02);
});

RadarChart_btn02.addEventListener('click', () => {
    SecondChart.destroy();
    SecondChart = new Chart(ctx02, SecChart_config05);

    ChangeChartInfo(SecChart_config05.type, graphInfoText02);
});

//Changes the InnerHTML of graphInfoText 
const ChangeChartInfo = (Type, To) => { To.textContent = `/ ${Type} Chart`; };

//Gets and Updates TimeData
function GetTimeData() {
    if (Times.length != 0 || Labels.length != 0) {
        Times.length = 0;
        Labels.length = 0;
    };

    const CurrStack = CurrChartStack;
    console.log(CurrChartStack)
    let CurrStackData = JSON.parse(localStorage.getItem(`${CurrStack}_UserTimes`));

    for (let i = 0; i < CurrStackData['user_times'].length; i++) {
        const e = CurrStackData['user_times'][i];

        Times.push(e);
        Labels.push(e);
    };

    //Update Chart
    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config01);

    ChangeChartInfo(FirstChart_config01.type, graphInfoText);

    console.log(Times, Labels)
};
GetTimeData();