//Main Buttons. the user can switch between the two main charts
let TimesChart_btn = document.getElementById('times-chart-btn');
let ProgressChart_btn = document.getElementById('progression-chart-btn');

//From Progress Window the chart-btn's
let LineChart_btn = document.getElementById('LineChart-btn');
let BarChart_btn = document.getElementById('BarChart-btn');
let PieChart_btn = document.getElementById('PieChart-btn');
let DoughnutChart_btn = document.getElementById('DoughnutChart-btn');

//Second Chart
let LineChart_btn02 = document.getElementById('LineChart-btn02');
let BarChart_btn02 = document.getElementById('BarChart-btn02');
let PieChart_btn02 = document.getElementById('PieChart-btn02');
let DoughnutChart_btn02 = document.getElementById('DoughnutChart-btn02');

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

//Second Chart (Progress) data
let Accuracy = [22000, 12000, 15000, 10000, 30000];
let Labels02 = ['some', 'thing', 'should', 'upgrade', 'lel'];

const data = {
    labels: Labels,
    datasets: [{
        label: 'Your Time',
        data: Times,
        borderWidth: 1,
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
        ],
        yAxisID: 'y',
    }, {
        type: 'line',
        label: 'Learning Accuracy in %',
        data: Accuracy,
        backgroundColor: [
            'rgba(185, 126, 131,0.2)',
        ],
        borderColor: [
            'rgba(185, 126, 131,1)',
        ],
        yAxisID: 'LearningAccuracy',
    }],
};

const FirstChartdata02 = {
    labels: Labels,
    datasets: [{
        label: 'Your Time',
        data: Times,
        borderWidth: 1,
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
        ],
        yAxisID: 'y',
    }],
};

//Second Chart (progress) data
const data02 = {
    labels: Labels02,
    datasets: [{
        label: 'Learning Accuracy',
        data: Accuracy,
        borderWidth: 1,
        backgroundColor: [
            'rgba(185, 126, 131,0.2)',
        ],
        borderColor: [
            'rgba(185, 126, 131,1)',
        ],
    }, {
        type: 'line',
        label: 'Your Time',
        data: Times,
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
        ],
        yAxisID: 'Times',
    }]
};

const SecChartdata02 = {
    labels: Labels02,
    datasets: [{
        label: 'Learning Accuracy',
        data: Accuracy,
        borderWidth: 1,
        backgroundColor: [
            'rgba(185, 126, 131,0.2)',
        ],
        borderColor: [
            'rgba(185, 126, 131,1)',
        ],
        yAxisID: 'y',
    }],
};

const scales = {
    y: {
        beginAtZero: true,
        position: 'left',
        type: 'linear',
        title: {
            color: '#4568dc',
            display: true,
            text: 'Time'
        }
    },
    x: {
        title: {
            color: '#4568dc',
            display: true,
            text: 'Learning Passsages'
        }
    },
    LearningAccuracy: {
        display: false,
        beginAtZero: true,
        position: 'right',
        type: 'linear',
        title: {
            color: '#4568dc',
            display: true,
            text: 'Learning Accuracy in %'
        },
    },
};

const scales02 = {
    y: {
        beginAtZero: true,
        position: 'left',
        type: 'linear',
        title: {
            color: '#4568dc',
            display: true,
            text: 'Learning Accuracy in %'
        }
    },
    x: {
        title: {
            color: '#4568dc',
            display: true,
            text: 'Learning Passsages'
        }
    },
    Times: {
        display: false,
        beginAtZero: true,
        position: 'right',
        type: 'linear',
        title: {
            color: '#4568dc',
            display: true,
            text: 'Time'
        },
    },
};

//Config for first Chart 
const FirstChart_config01 = {
    type: 'line',
    data: FirstChartdata02,
    options: {
        scales: scales,
        maintainAspectRatio: false
    }
};

const FirstChart_config02 = {
    type: 'bar',
    data: FirstChartdata02,
    options: {
        scales: scales,
        maintainAspectRatio: false
    }
};

const FirstChart_config03 = {
    type: 'pie',
    data: FirstChartdata02,
    options: {
        maintainAspectRatio: false,
    }
};

const FirstChart_config04 = {
    type: 'doughnut',
    data: FirstChartdata02,
    options: {
        maintainAspectRatio: false,
    }
};

//config for second chart
const SecChart_config01 = {
    type: 'line',
    data: SecChartdata02,
    options: {
        scales: scales02,
        maintainAspectRatio: false
    }
};

const SecChart_config02 = {
    type: 'bar',
    data: SecChartdata02,
    options: {
        scales: scales02,
        maintainAspectRatio: false
    }
};

const SecChart_config03 = {
    type: 'pie',
    data: SecChartdata02,
    options: {
        maintainAspectRatio: false
    }
};

const SecChart_config04 = {
    type: 'doughnut',
    data: SecChartdata02,
    options: {
        maintainAspectRatio: false,
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

DoughnutChart_btn.addEventListener('click', () => {
    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config04);

    ChangeChartInfo(FirstChart_config04.type, graphInfoText);
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

DoughnutChart_btn02.addEventListener('click', () => {
    SecondChart.destroy();
    SecondChart = new Chart(ctx02, SecChart_config04);

    ChangeChartInfo(SecChart_config04.type, graphInfoText02);
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

//For First Chart
function ActivateMixedChart() {
    FirstChart_config01.data = data;
    FirstChart_config02.data = data;

    FirstChart_config01.options.scales.LearningAccuracy.display = true;
    FirstChart_config02.options.scales.LearningAccuracy.display = true;

    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config01);
};

function DeactivateMixedChart() {
    FirstChart_config01.data = FirstChartdata02;
    FirstChart_config02.data = FirstChartdata02;

    FirstChart_config01.options.scales.LearningAccuracy.display = false;
    FirstChart_config02.options.scales.LearningAccuracy.display = false;

    FirstChart.destroy();
    FirstChart = new Chart(ctx, FirstChart_config01);
};

//For Second Chart
function ActivateMixedChart02() {
    SecChart_config01.data = data02;
    SecChart_config02.data = data02;

    SecChart_config01.options.scales.Times.display = true;
    SecChart_config02.options.scales.Times.display = true;

    SecondChart.destroy();
    SecondChart = new Chart(ctx02, SecChart_config01);
};

function DeactivateMixedChart02() {
    SecChart_config01.data = SecChartdata02;
    SecChart_config02.data = SecChartdata02;

    SecChart_config01.options.scales.Times.display = false;
    SecChart_config02.options.scales.Times.display = false;

    SecondChart.destroy();
    SecondChart = new Chart(ctx02, SecChart_config01);
};