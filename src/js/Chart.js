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
let BarChart_btn02 =document.getElementById('BarChart-btn02');
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

//Checkbox from both Chart Pages
let Checkbox01 = document.getElementsByClassName('chart-option-wrapper')[0];
let Checkbox02 = document.getElementsByClassName('chart-option-wrapper')[1];

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
let Accuracy = [];
let Labels02 = [];

const FirstChartMixed_data = {
    labels: Labels,
    datasets: [{
        type: 'line',
        label: 'How often you clicked "repeat"',
        data: Accuracy,
        borderWidth: 1,
        backgroundColor: [
            'rgba(185, 126, 131,0.2)',
        ],
        borderColor: [
            'rgba(185, 126, 131,1)',
        ],
        yAxisID: 'LearningAccuracy',
    }, {
        label: 'The Time you needed',
        data: Times,
        borderWidth: 3,
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
        ],
        yAxisID: 'y',
    }],
};

const FirstChartdata02 = {
    labels: Labels,
    datasets: [{
        label: 'The Time you needed',
        data: Times,
        borderWidth: 3,
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
        label: 'How often you clicked "repeat"',
        data: Accuracy,
        borderWidth: 3,
        backgroundColor: [
            'rgba(185, 126, 131,0.2)',
        ],
        borderColor: [
            'rgba(185, 126, 131,1)',
        ],
    }, {
        type: 'line',
        label: 'The Time you needed',
        data: Times,
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
        ],
        yAxisID: 'Times',
        borderWidth: 1
    }]
};

const SecChartdata02 = {
    labels: Labels02,
    datasets: [{
        label: 'How often you clicked "repeat"',
        data: Accuracy,
        borderWidth: 3,
        backgroundColor: [
            'rgba(185, 126, 131,0.2)',
        ],
        borderColor: [
            'rgba(185, 126, 131,1)',
        ],
        yAxisID: 'y'
    }],
};

const scales = {
    x: {
        title: {
            color: '#4568dc',
            display: true,
            text: 'Date'
        }
    },
    LearningAccuracy: {
        display: true,
        beginAtZero: true,
        position: 'right',
        type: 'linear',
        title: {
            color: '#4568dc',
            display: true,
            text: 'How often you clicked "repeat"'
        },
        ticks: {
            color: 'rgba(185, 126, 131,1)'
        }
    },
    y: {
        display: true,
        beginAtZero: true,
        position: 'left',
        type: 'linear',
        title: {
            color: '#4568dc',
            display: true,
            text: 'Time in seconds'
        },
        ticks: {
            color: 'rgba(75, 192, 192, 1)'
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
            text: 'How often you clicked "repeat"'
        },
        ticks: {
            color: 'rgba(185, 126, 131,1)'
        }
    },
    x: {
        title: {
            color: '#4568dc',
            display: true,
            text: 'Date'
        }
    },
    Times: {
        display: true,
        beginAtZero: true,
        position: 'right',
        type: 'linear',
        title: {
            color: '#4568dc',
            display: true,
            text: 'Time in seconds'
        },
        ticks: {
            color: 'rgba(75, 192, 192, 1)'
        }
    },
};

let isIn2ndChart = false;
const plugin01 = {
    tooltip: {
        callbacks: {
            label: ((tooltipItem) => {
                if (tooltipItem.dataset.label == `How often you clicked "repeat"`) {
                    isIn2ndChart = true;

                    return `${tooltipItem.dataset.label} : ${tooltipItem.formattedValue}/${CardsAmount[CurrChartStack]['user_cardAmountNew'][tooltipItem.dataIndex]} Cards`;
                } else {
                    isIn2ndChart = false;

                    return `${tooltipItem.dataset.label}:${tooltipItem.formattedValue}`;
                };
            }),
            afterBody: ((tooltipItem) => {
                if (isIn2ndChart) {
                    if (localStorage.getItem('UsedMode')) {
                        let modes = JSON.parse(localStorage.getItem('UsedMode'));

                        return `Used Mode - ${modes[CurrChartStack].user_usedMode[tooltipItem[0].dataIndex]}`;
                    };
                };
            }),
        },
    }
}

//Config for first Chart 
const FirstChart_config01 = {
    type: 'line',
    data: FirstChartMixed_data,
    options: {
        scales: scales,
        maintainAspectRatio: false,
        plugins: plugin01
    }
};

const FirstChart_config02 = {
    type: 'bar',
    data: FirstChartMixed_data,
    options: {
        scales: scales,
        maintainAspectRatio: false,
        plugins: plugin01
    }
};

const FirstChart_config03 = {
    type: 'pie',
    data: FirstChartdata02,
    options: {
        maintainAspectRatio: false,
        plugins: plugin01
    }
};

const FirstChart_config04 = {
    type: 'doughnut',
    data: FirstChartdata02,
    options: {
        maintainAspectRatio: false,
        plugins: plugin01
    }
};

//config for second chart
const SecChart_config01 = {
    type: 'line',
    data: data02,
    options: {
        scales: scales02,
        maintainAspectRatio: false,
        plugins: plugin01
    }
};

const SecChart_config02 = {
    type: 'bar',
    data: data02,
    options: {
        scales: scales02,
        maintainAspectRatio: false,
        plugins: plugin01
    }
};

const SecChart_config03 = {
    type: 'pie',
    data: SecChartdata02,
    options: {
        maintainAspectRatio: false,
        plugins: plugin01
    }
};

const SecChart_config04 = {
    type: 'doughnut',
    data: SecChartdata02,
    options: {
        maintainAspectRatio: false,
        plugins: plugin01
    }
};

let FirstChart = new Chart(ctx, FirstChart_config01);

LineChart_btn.addEventListener('click', () => {
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        FirstChart.destroy();
        FirstChart = new Chart(ctx, FirstChart_config01);

        ChangeChartInfo(FirstChart_config01.type, graphInfoText);
    };
});

BarChart_btn.addEventListener('click', () => {
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        FirstChart.destroy();
        FirstChart = new Chart(ctx, FirstChart_config02);

        ChangeChartInfo(FirstChart_config02.type, graphInfoText);
    };
});

PieChart_btn.addEventListener('click', () => {
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        FirstChart.destroy();
        FirstChart = new Chart(ctx, FirstChart_config03);

        ChangeChartInfo(FirstChart_config03.type, graphInfoText);
    };
});

DoughnutChart_btn.addEventListener('click', () => {
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        FirstChart.destroy();
        FirstChart = new Chart(ctx, FirstChart_config04);

        ChangeChartInfo(FirstChart_config04.type, graphInfoText);
    };
});

//Second Chart (general progression)
let SecondChart = new Chart(ctx02, SecChart_config01);

LineChart_btn02.addEventListener('click', () => {
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        SecondChart.destroy();
        SecondChart = new Chart(ctx02, SecChart_config01);

        ChangeChartInfo(SecChart_config01.type, graphInfoText02);
    };
});

BarChart_btn02.addEventListener('click', () => {
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        SecondChart.destroy();
        SecondChart = new Chart(ctx02, SecChart_config02);

        ChangeChartInfo(SecChart_config02.type, graphInfoText02);
    };
});

PieChart_btn02.addEventListener('click', () => {
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        SecondChart.destroy();
        SecondChart = new Chart(ctx02, SecChart_config03);

        ChangeChartInfo(SecChart_config03.type, graphInfoText02);
    };
});

DoughnutChart_btn02.addEventListener('click', () => {
    if (localStorage.getItem(`${CurrChartStack}_UserTimesNew`)) {
        SecondChart.destroy();
        SecondChart = new Chart(ctx02, SecChart_config04);

        ChangeChartInfo(SecChart_config04.type, graphInfoText02);
    };
});

//Changes the InnerHTML of graphInfoText 
const ChangeChartInfo = (Type, To) => { To.textContent = `/ ${Type} Chart`; };

function GetRepsData() {
    const CurrStack = CurrChartStack;

    if (localStorage.getItem(`${CurrStack}_UserRepsNew`)) {

        //If there was a replace text it gets deleted now 
        ResetReText();

        if (Accuracy.length != 0 || Labels02.length != 0) {
            Accuracy.length = 0;
            Labels02.length = 0;
        };

        let CurrStackData = JSON.parse(localStorage.getItem(`${CurrStack}_UserRepsNew`));

        //Date
        let CurrDate = JSON.parse(localStorage.getItem(`${CurrStack}_UserDateNew`));

        if (CurrStackData != null) {
            for (let i = 0; i < CurrStackData['user_repsNew'].length; i++) {
                const e = CurrStackData['user_repsNew'][i];

                Accuracy.push(e);
            };

            //Gets Date
            for (let i = 0; i < CurrDate['user_dateNew'].length; i++) {
                const el = CurrDate['user_dateNew'][i];

                Labels02.push(el);
            };
        };

        //Update Chart
        SecondChart.destroy();
        SecondChart = new Chart(ctx02, SecChart_config01);

        ChangeChartInfo(SecChart_config01.type, graphInfoText02);

    } else {
        //Sets Replacement Text when no data can be shown
        SetReText();
    };
};
GetRepsData();

//Gets and Updates TimeData
function GetTimeData() {
    const CurrStack = CurrChartStack;

    if (localStorage.getItem(`${CurrStack}_UserTimesNew`)) {

        //If there was a replace text it gets deleted now 
        ResetReText();

        if (Times.length != 0 || Labels.length != 0) {
            Times.length = 0;
            Labels.length = 0;
        };

        let CurrStackData = JSON.parse(localStorage.getItem(`${CurrStack}_UserTimesNew`));

        //Date
        let CurrDate = JSON.parse(localStorage.getItem(`${CurrStack}_UserDateNew`));

        if (CurrStackData != null) {
            for (let i = 0; i < CurrStackData['user_timesNew'].length; i++) {
                const e = CurrStackData['user_timesNew'][i];

                Times.push(e);
            };

            //Gets Date
            for (let i = 0; i < CurrDate['user_dateNew'].length; i++) {
                const el = CurrDate['user_dateNew'][i];

                Labels.push(el);
            };
        };

        //Update Chart
        FirstChart.destroy();
        FirstChart = new Chart(ctx, FirstChart_config01);

        ChangeChartInfo(FirstChart_config01.type, graphInfoText);

        //Calls Function of second Chart again so it gets updated with the information of the first chart
        GetRepsData();
    } else {
        //Sets Replacement Text when no data can be shown
        SetReText();
    };
};
GetTimeData();

//For First Chart
function ActivateMixedChart() {
    FirstChart_config01.data = FirstChartMixed_data;
    FirstChart_config02.data = FirstChartMixed_data;

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

//Shows Replace Text
function SetReText() {
    let text = document.createTextNode('There are no data available that can be shown');
    let h3 = document.createElement('h3');
    h3.style.color = 'var(--front-color)';
    h3.id = 'md03-INI-Text';

    h3.appendChild(text);

    if (!Chart_Wrapper.querySelector('#md03-INI-Text')) {
        Chart_Wrapper.appendChild(h3);
    };

    if (!Chart_Wrapper2.querySelector('#md03-INI-Text')) {
        Chart_Wrapper2.appendChild(h3.cloneNode(true));
    };

    ctx.style.display = 'none';
    ctx02.style.display = 'none';

    Checkbox01.style.display = 'none';
    Checkbox02.style.display = 'none';
};

function ResetReText() {
    let MD_INIText = document.getElementById('md03-INI-Text');

    if (Chart_Wrapper.contains(MD_INIText)) {
        Chart_Wrapper.removeChild(MD_INIText);
    };

    if (Chart_Wrapper2.querySelector('#md03-INI-Text')) {
        let childToRemove = document.querySelector('#md03-INI-Text')

        Chart_Wrapper2.removeChild(childToRemove);
    };

    ctx.style.display = 'block';
    ctx02.style.display = 'block';

    Checkbox01.style.display = 'flex';
    Checkbox02.style.display = 'flex';
};

//Just for Bug Fixes and other uses 
function reloadAllCharts() {
    //Reloads (updates) all charts
    FirstChart.destroy();
    SecondChart.destroy();

    FirstChart = new Chart(ctx, FirstChart_config01);
    SecondChart = new Chart(ctx02, SecChart_config01);
};