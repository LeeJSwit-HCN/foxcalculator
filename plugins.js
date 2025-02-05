let mode_value = 'deadcell';
let step = 0;
let deadcell_num = 0;
let miss_num = 0;
let sword_num = 0;
let box_num = 0;
let fox_num = 0;
let now_list = '';
let now_dirc = '';
let now_mod = '';
let step_list = [];
let deadcell_list = [];
let sword_condition = [];
let box_condition = [];
let A_u = ['32', '23', '53', '25', '66'];
let A_r = ['32', '24', '35', '55', '61'];
let A_d = ['11', '24', '45', '54', '52'];
let A_l = ['16', '22', '42', '45', '53'];
let B_u = ['14', '32', '35', '44', '63'];
let B_r = ['24', '31', '43', '54', '46'];
let B_d = ['14', '33', '42', '45', '63'];
let B_l = ['23', '31', '34', '46', '53'];
let C_u = ['15', '22', '34', '52', '64'];
let C_r = ['22', '25', '41', '44', '56'];
let C_d = ['13', '25', '43', '55', '62'];
let C_l = ['21', '33', '36', '52', '55'];
let D_u = ['22', '35', '41', '54', '63'];
let D_r = ['13', '25', '31', '42', '54'];
let D_d = ['14', '23', '36', '42', '55'];
let D_l = ['23', '35', '46', '52', '64'];
let matrix = {
    '11': '', '12': '', '13': '', '14': '', '15': '', '16': '',
    '21': '', '22': '', '23': '', '24': '', '25': '', '26': '',
    '31': '', '32': '', '33': '', '34': '', '35': '', '36': '',
    '41': '', '42': '', '43': '', '44': '', '45': '', '46': '',
    '51': '', '52': '', '53': '', '54': '', '55': '', '56': '',
    '61': '', '62': '', '63': '', '64': '', '65': '', '66': '',
}
function sw_u(id) {
    if (id == 'A1') { return '11' }
    if (id == 'A2') { return '12' }
    if (id == 'A3') { return '13' }
    if (id == 'A4') { return '14' }
    if (id == 'A5') { return '15' }
    if (id == 'A6') { return '16' }
    if (id == 'B1') { return '21' }
    if (id == 'B2') { return '22' }
    if (id == 'B3') { return '23' }
    if (id == 'B4') { return '24' }
    if (id == 'B5') { return '25' }
    if (id == 'B6') { return '26' }
    if (id == 'C1') { return '31' }
    if (id == 'C2') { return '32' }
    if (id == 'C3') { return '33' }
    if (id == 'C4') { return '34' }
    if (id == 'C5') { return '35' }
    if (id == 'C6') { return '36' }
    if (id == 'D1') { return '41' }
    if (id == 'D2') { return '42' }
    if (id == 'D3') { return '43' }
    if (id == 'D4') { return '44' }
    if (id == 'D5') { return '45' }
    if (id == 'D6') { return '46' }
    if (id == 'E1') { return '51' }
    if (id == 'E2') { return '52' }
    if (id == 'E3') { return '53' }
    if (id == 'E4') { return '54' }
    if (id == 'E5') { return '55' }
    if (id == 'E6') { return '56' }
    if (id == 'F1') { return '61' }
    if (id == 'F2') { return '62' }
    if (id == 'F3') { return '63' }
    if (id == 'F4') { return '64' }
    if (id == 'F5') { return '65' }
    if (id == 'F6') { return '66' }
}
function sw_r(id) {
    if (id == 'F1') { return '11' }
    if (id == 'E1') { return '12' }
    if (id == 'D1') { return '13' }
    if (id == 'C1') { return '14' }
    if (id == 'B1') { return '15' }
    if (id == 'A1') { return '16' }
    if (id == 'F2') { return '21' }
    if (id == 'E2') { return '22' }
    if (id == 'D2') { return '23' }
    if (id == 'C2') { return '24' }
    if (id == 'B2') { return '25' }
    if (id == 'A2') { return '26' }
    if (id == 'F3') { return '31' }
    if (id == 'E3') { return '32' }
    if (id == 'D3') { return '33' }
    if (id == 'C3') { return '34' }
    if (id == 'B3') { return '35' }
    if (id == 'A3') { return '36' }
    if (id == 'F4') { return '41' }
    if (id == 'E4') { return '42' }
    if (id == 'D4') { return '43' }
    if (id == 'C4') { return '44' }
    if (id == 'B4') { return '45' }
    if (id == 'A4') { return '46' }
    if (id == 'F5') { return '51' }
    if (id == 'E5') { return '52' }
    if (id == 'D5') { return '53' }
    if (id == 'C5') { return '54' }
    if (id == 'B5') { return '55' }
    if (id == 'A5') { return '56' }
    if (id == 'F6') { return '61' }
    if (id == 'E6') { return '62' }
    if (id == 'D6') { return '63' }
    if (id == 'C6') { return '64' }
    if (id == 'B6') { return '65' }
    if (id == 'A6') { return '66' }
}
function sw_d(id) {
    if (id == 'F6') { return '11' }
    if (id == 'F5') { return '12' }
    if (id == 'F4') { return '13' }
    if (id == 'F3') { return '14' }
    if (id == 'F2') { return '15' }
    if (id == 'F1') { return '16' }
    if (id == 'E6') { return '21' }
    if (id == 'E5') { return '22' }
    if (id == 'E4') { return '23' }
    if (id == 'E3') { return '24' }
    if (id == 'E2') { return '25' }
    if (id == 'E1') { return '26' }
    if (id == 'D6') { return '31' }
    if (id == 'D5') { return '32' }
    if (id == 'D4') { return '33' }
    if (id == 'D3') { return '34' }
    if (id == 'D2') { return '35' }
    if (id == 'D1') { return '36' }
    if (id == 'C6') { return '41' }
    if (id == 'C5') { return '42' }
    if (id == 'C4') { return '43' }
    if (id == 'C3') { return '44' }
    if (id == 'C2') { return '45' }
    if (id == 'C1') { return '46' }
    if (id == 'B6') { return '51' }
    if (id == 'B5') { return '52' }
    if (id == 'B4') { return '53' }
    if (id == 'B3') { return '54' }
    if (id == 'B2') { return '55' }
    if (id == 'B1') { return '56' }
    if (id == 'A6') { return '61' }
    if (id == 'A5') { return '62' }
    if (id == 'A4') { return '63' }
    if (id == 'A3') { return '64' }
    if (id == 'A2') { return '65' }
    if (id == 'A1') { return '66' }
}
function sw_l(id) {
    if (id == 'A6') { return '11' }
    if (id == 'B6') { return '12' }
    if (id == 'C6') { return '13' }
    if (id == 'D6') { return '14' }
    if (id == 'E6') { return '15' }
    if (id == 'F6') { return '16' }
    if (id == 'A5') { return '21' }
    if (id == 'B5') { return '22' }
    if (id == 'C5') { return '23' }
    if (id == 'D5') { return '24' }
    if (id == 'E5') { return '25' }
    if (id == 'F5') { return '26' }
    if (id == 'A4') { return '31' }
    if (id == 'B4') { return '32' }
    if (id == 'C4') { return '33' }
    if (id == 'D4') { return '34' }
    if (id == 'E4') { return '35' }
    if (id == 'F4') { return '36' }
    if (id == 'A3') { return '41' }
    if (id == 'B3') { return '42' }
    if (id == 'C3') { return '43' }
    if (id == 'D3') { return '44' }
    if (id == 'E3') { return '45' }
    if (id == 'F3') { return '46' }
    if (id == 'A2') { return '51' }
    if (id == 'B2') { return '52' }
    if (id == 'C2') { return '53' }
    if (id == 'D2') { return '54' }
    if (id == 'E2') { return '55' }
    if (id == 'F2') { return '56' }
    if (id == 'A1') { return '61' }
    if (id == 'B1') { return '62' }
    if (id == 'C1') { return '63' }
    if (id == 'D1') { return '64' }
    if (id == 'E1') { return '65' }
    if (id == 'F1') { return '66' }
}
function dirc(num) {
    if (now_dirc == 'u') { return sw_u(num); }
    if (now_dirc == 'r') { return sw_r(num); }
    if (now_dirc == 'd') { return sw_d(num); }
    if (now_dirc == 'l') { return sw_l(num); }
}
const rgbToHex = (str) => {
    let result = '';
    if (str.indexOf("#") === 0) {
        result = str;
    } else if (str.indexOf("rgb(") === 0) {
        const colors = str.replace(/rgb\(/g, "").replace(/\)/g, "").split(",");
        const r = parseInt(colors[0]).toString(16).length === 1 ? "0" + parseInt(colors[0]).toString(16) : parseInt(colors[0]).toString(16);
        const g = parseInt(colors[1]).toString(16).length === 1 ? "0" + parseInt(colors[1]).toString(16) : parseInt(colors[1]).toString(16);
        const b = parseInt(colors[2]).toString(16).length === 1 ? "0" + parseInt(colors[2]).toString(16) : parseInt(colors[2]).toString(16);
        result = `#${r}${g}${b}`;
    }
    return result
}
var commonUtil = {
    alert: function (msg, type) {
        if (typeof (type) == "undefined") {
            type = "success";
        }
        var divElement = $("<div></div>").addClass('alert').addClass('alert-' + type).addClass('alert-dismissible').addClass('col-md-4').addClass('col-md-offset-4').addClass('text-center');
        divElement.css({
            "position": "absolute",
            "left": "35%",
            "top": "12px",
        });
        divElement.text(msg);
        $('body').append(divElement);
        return divElement;
    },
    message: function (msg, type) {
        var divElement = commonUtil.alert(msg, type);
        var isIn = false;
        divElement.on({
            mouseover: function () { isIn = true; },
            mouseout: function () { isIn = false; }
        });
        setTimeout(function () {
            var IntervalMS = 20;
            var floatSpace = 60;
            var nowTop = divElement.offset().top;
            var stopTop = nowTop - floatSpace;
            divElement.fadeOut(IntervalMS * floatSpace);
            var upFloat = setInterval(function () {
                if (nowTop >= stopTop) {
                    divElement.css({ "top": nowTop-- });
                } else {
                    clearInterval(upFloat);
                    divElement.remove();
                }
            }, IntervalMS);
            if (isIn) {
                clearInterval(upFloat);
                divElement.stop();
            }
            divElement.hover(function () {
                clearInterval(upFloat);
                //divElement.stop();
            }, function () {
                divElement.fadeOut(IntervalMS * (nowTop - stopTop));
                upFloat = setInterval(function () {
                    if (nowTop >= stopTop) {
                        divElement.css({ "top": nowTop-- });
                    } else {
                        clearInterval(upFloat);
                        divElement.remove();
                    }
                }, IntervalMS);
            });
        }, 1500);
    }
}
function mode_update(radio) {
    mode_value = document.getElementsByName("optradio").value = radio
    document.getElementById('deadcell_col').style.backgroundColor = 'black';
    document.getElementById('miss_col').style.backgroundColor = 'black';
    document.getElementById('sword_col').style.backgroundColor = 'black';
    document.getElementById('box_col').style.backgroundColor = 'black';
    document.getElementById('fox_col').style.backgroundColor = 'black';
    document.getElementById('clear_col').style.backgroundColor = 'black';
    switch (mode_value) {
        case 'deadcell':
            document.getElementById('deadcell_col').style.backgroundColor = '#0D6EFD'; break;
        case 'miss':
            document.getElementById('miss_col').style.backgroundColor = '#0D6EFD'; break;
        case 'sword':
            document.getElementById('sword_col').style.backgroundColor = '#0D6EFD'; break;
        case 'box':
            document.getElementById('box_col').style.backgroundColor = '#0D6EFD'; break;
        case 'fox':
            document.getElementById('fox_col').style.backgroundColor = '#0D6EFD'; break;
        case 'clear':
            document.getElementById('clear_col').style.backgroundColor = '#0D6EFD'; break;
    }
}
function increment() {
    var progressBar_step = document.getElementById('progress-step');
    progressBar_step.style.width = step * (100 / 10) + '%';
    progressBar_step.innerText = step + '/10';
    if (step >= 10) {
        progressBar_step.innerText = '宗长结果';
    }
    var progressBar_deadcell = document.getElementById('progress-deadcell');
    progressBar_deadcell.style.width = deadcell_num * (100 / 5) + '%';
    progressBar_deadcell.innerText = deadcell_num + '/5';
    if (deadcell_num == 5) {
        progressBar_deadcell.innerText = '固定点完成';
    }
}
function which_list() {
    if (deadcell_list.length == 5) {
        if (A_u.includes(deadcell_list[0]) && A_u.includes(deadcell_list[1]) && A_u.includes(deadcell_list[2]) && A_u.includes(deadcell_list[3]) && A_u.includes(deadcell_list[4])) {
            now_list = 'A_u'; now_dirc = 'u'; now_mod = 'A';
        }
        else if (A_r.includes(deadcell_list[0]) && A_r.includes(deadcell_list[1]) && A_r.includes(deadcell_list[2]) && A_r.includes(deadcell_list[3]) && A_r.includes(deadcell_list[4])) {
            now_list = 'A_r'; now_dirc = 'r'; now_mod = 'A';
        }
        else if (A_d.includes(deadcell_list[0]) && A_d.includes(deadcell_list[1]) && A_d.includes(deadcell_list[2]) && A_d.includes(deadcell_list[3]) && A_d.includes(deadcell_list[4])) {
            now_list = 'A_d'; now_dirc = 'd'; now_mod = 'A';
        }
        else if (A_l.includes(deadcell_list[0]) && A_l.includes(deadcell_list[1]) && A_l.includes(deadcell_list[2]) && A_l.includes(deadcell_list[3]) && A_l.includes(deadcell_list[4])) {
            now_list = 'A_l'; now_dirc = 'l'; now_mod = 'A';
        }
        if (B_u.includes(deadcell_list[0]) && B_u.includes(deadcell_list[1]) && B_u.includes(deadcell_list[2]) && B_u.includes(deadcell_list[3]) && B_u.includes(deadcell_list[4])) {
            now_list = 'B_u'; now_dirc = 'u'; now_mod = 'B';
        }
        else if (B_r.includes(deadcell_list[0]) && B_r.includes(deadcell_list[1]) && B_r.includes(deadcell_list[2]) && B_r.includes(deadcell_list[3]) && B_r.includes(deadcell_list[4])) {
            now_list = 'B_r'; now_dirc = 'r'; now_mod = 'B';
        }
        else if (B_d.includes(deadcell_list[0]) && B_d.includes(deadcell_list[1]) && B_d.includes(deadcell_list[2]) && B_d.includes(deadcell_list[3]) && B_d.includes(deadcell_list[4])) {
            now_list = 'B_d'; now_dirc = 'd'; now_mod = 'B';
        }
        else if (B_l.includes(deadcell_list[0]) && B_l.includes(deadcell_list[1]) && B_l.includes(deadcell_list[2]) && B_l.includes(deadcell_list[3]) && B_l.includes(deadcell_list[4])) {
            now_list = 'B_l'; now_dirc = 'l'; now_mod = 'B';
        }
        if (C_u.includes(deadcell_list[0]) && C_u.includes(deadcell_list[1]) && C_u.includes(deadcell_list[2]) && C_u.includes(deadcell_list[3]) && C_u.includes(deadcell_list[4])) {
            now_list = 'C_u'; now_dirc = 'u'; now_mod = 'C';
        }
        else if (C_r.includes(deadcell_list[0]) && C_r.includes(deadcell_list[1]) && C_r.includes(deadcell_list[2]) && C_r.includes(deadcell_list[3]) && C_r.includes(deadcell_list[4])) {
            now_list = 'C_r'; now_dirc = 'r'; now_mod = 'C';
        }
        else if (C_d.includes(deadcell_list[0]) && C_d.includes(deadcell_list[1]) && C_d.includes(deadcell_list[2]) && C_d.includes(deadcell_list[3]) && C_d.includes(deadcell_list[4])) {
            now_list = 'C_d'; now_dirc = 'd'; now_mod = 'C';
        }
        else if (C_l.includes(deadcell_list[0]) && C_l.includes(deadcell_list[1]) && C_l.includes(deadcell_list[2]) && C_l.includes(deadcell_list[3]) && C_l.includes(deadcell_list[4])) {
            now_list = 'C_l'; now_dirc = 'l'; now_mod = 'C';
        }
        if (D_u.includes(deadcell_list[0]) && D_u.includes(deadcell_list[1]) && D_u.includes(deadcell_list[2]) && D_u.includes(deadcell_list[3]) && D_u.includes(deadcell_list[4])) {
            now_list = 'D_u'; now_dirc = 'u'; now_mod = 'D';
        }
        else if (D_r.includes(deadcell_list[0]) && D_r.includes(deadcell_list[1]) && D_r.includes(deadcell_list[2]) && D_r.includes(deadcell_list[3]) && D_r.includes(deadcell_list[4])) {
            now_list = 'D_r'; now_dirc = 'r'; now_mod = 'D';
        }
        else if (D_d.includes(deadcell_list[0]) && D_d.includes(deadcell_list[1]) && D_d.includes(deadcell_list[2]) && D_d.includes(deadcell_list[3]) && D_d.includes(deadcell_list[4])) {
            now_list = 'D_d'; now_dirc = 'd'; now_mod = 'D';
        }
        else if (D_l.includes(deadcell_list[0]) && D_l.includes(deadcell_list[1]) && D_l.includes(deadcell_list[2]) && D_l.includes(deadcell_list[3]) && D_l.includes(deadcell_list[4])) {
            now_list = 'D_l'; now_dirc = 'l'; now_mod = 'D';
        }
    }
}
function A_general() {
    if (matrix[dirc('C5')] == 'sword' && matrix[dirc('C6')] == 'sword' &&
        matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword' &&
        matrix[dirc('E5')] == 'sword' && matrix[dirc('E6')] == 'sword') {
        if (matrix[dirc('A1')] == 'box' && matrix[dirc('A2')] == 'box' &&
            matrix[dirc('B1')] == 'box' && matrix[dirc('B2')] == 'box') {
            document.getElementById(dirc('A4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F1')).style.backgroundColor = "#ff00ff";
        }//A-1-1
        if (matrix[dirc('C3')] == 'box' && matrix[dirc('C4')] == 'box' &&
            matrix[dirc('D3')] == 'box' && matrix[dirc('D4')] == 'box') {
            document.getElementById(dirc('A4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F1')).style.backgroundColor = "#ff00ff";
        }//A-1-2
    } if (matrix[dirc('C4')] == 'sword' && matrix[dirc('C5')] == 'sword' &&
        matrix[dirc('D4')] == 'sword' && matrix[dirc('D5')] == 'sword' &&
        matrix[dirc('E4')] == 'sword' && matrix[dirc('E5')] == 'sword') {
        if (matrix[dirc('A1')] == 'box' && matrix[dirc('A2')] == 'box' &&
            matrix[dirc('B1')] == 'box' && matrix[dirc('B2')] == 'box') {
            document.getElementById(dirc('B4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F5')).style.backgroundColor = "#ff00ff";
        }//A-2-1
        if (matrix[dirc('D1')] == 'box' && matrix[dirc('D2')] == 'box' &&
            matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box') {
            document.getElementById(dirc('B4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F5')).style.backgroundColor = "#ff00ff";
        }//A-2-2
    } if (matrix[dirc('D4')] == 'sword' && matrix[dirc('D5')] == 'sword' &&
        matrix[dirc('E4')] == 'sword' && matrix[dirc('E5')] == 'sword' &&
        matrix[dirc('F4')] == 'sword' && matrix[dirc('F5')] == 'sword') {
        if ((matrix[dirc('A1')] == 'box' && matrix[dirc('A2')] == 'box' &&
            matrix[dirc('B1')] == 'box' && matrix[dirc('B2')] == 'box') || (
                matrix[dirc('D1')] == 'box' && matrix[dirc('D2')] == 'box' &&
                matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box')) {
            document.getElementById(dirc('A6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D3')).style.backgroundColor = "#ff00ff";
        }//A-3-1 A-3-2
    } if (matrix[dirc('C4')] == 'sword' && matrix[dirc('C5')] == 'sword' && matrix[dirc('C6')] == 'sword' &&
        matrix[dirc('D4')] == 'sword' && matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword') {
        if ((matrix[dirc('D1')] == 'box' && matrix[dirc('D2')] == 'box' &&
            matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box') || (
                matrix[dirc('E4')] == 'box' && matrix[dirc('E5')] == 'box' &&
                matrix[dirc('F4')] == 'box' && matrix[dirc('F5')] == 'box')) {
            document.getElementById(dirc('A4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F1')).style.backgroundColor = "#ff00ff";
        }//A-4-1 A-4-2
    } if (matrix[dirc('D4')] == 'sword' && matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword' &&
        matrix[dirc('E4')] == 'sword' && matrix[dirc('E5')] == 'sword' && matrix[dirc('E6')] == 'sword') {
        if ((matrix[dirc('A1')] == 'box' && matrix[dirc('A2')] == 'box' &&
            matrix[dirc('B1')] == 'box' && matrix[dirc('B2')] == 'box') || (
                matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box' &&
                matrix[dirc('F1')] == 'box' && matrix[dirc('F2')] == 'box')) {
            document.getElementById(dirc('A6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D3')).style.backgroundColor = "#ff00ff";
        }//A-5-1 A-5-2
    } if (matrix[dirc('C3')] == 'sword' && matrix[dirc('C4')] == 'sword' && matrix[dirc('C5')] == 'sword' &&
        matrix[dirc('D3')] == 'sword' && matrix[dirc('D4')] == 'sword' && matrix[dirc('D5')] == 'sword') {
        if ((matrix[dirc('A1')] == 'box' && matrix[dirc('A2')] == 'box' &&
            matrix[dirc('B1')] == 'box' && matrix[dirc('B2')] == 'box') || (
                matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box' &&
                matrix[dirc('F1')] == 'box' && matrix[dirc('F2')] == 'box')) {
            document.getElementById(dirc('A3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F3')).style.backgroundColor = "#ff00ff";
        }//A-6-1 A-6-2
    } if (matrix[dirc('D1')] == 'sword' && matrix[dirc('D2')] == 'sword' &&
        matrix[dirc('E1')] == 'sword' && matrix[dirc('E2')] == 'sword' &&
        matrix[dirc('F1')] == 'sword' && matrix[dirc('F2')] == 'sword') {
        if (matrix[dirc('E4')] == 'box' && matrix[dirc('E5')] == 'box' &&
            matrix[dirc('F4')] == 'box' && matrix[dirc('F5')] == 'box') {
            document.getElementById(dirc('A3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F3')).style.backgroundColor = "#ff00ff";
        }//A-7-1
        if (matrix[dirc('C5')] == 'box' && matrix[dirc('C6')] == 'box' &&
            matrix[dirc('D5')] == 'box' && matrix[dirc('D6')] == 'box') {
            document.getElementById(dirc('A3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F4')).style.backgroundColor = "#ff00ff";
        }//A-7-2
        if ((matrix[dirc('D5')] == 'box' && matrix[dirc('D6')] == 'box' &&
            matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box') || (
                matrix[dirc('C3')] == 'box' && matrix[dirc('C4')] == 'box' &&
                matrix[dirc('D3')] == 'box' && matrix[dirc('D4')] == 'box')) {
            document.getElementById(dirc('B4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F5')).style.backgroundColor = "#ff00ff";
        }//A-7-3 A-7-4
    }
}
function B_general() {
    if (matrix[dirc('A1')] == 'sword' && matrix[dirc('A2')] == 'sword' && matrix[dirc('A3')] == 'sword' &&
        matrix[dirc('B1')] == 'sword' && matrix[dirc('B2')] == 'sword' && matrix[dirc('B3')] == 'sword') {
        if ((matrix[dirc('A5')] == 'box' && matrix[dirc('A6')] == 'box' &&
            matrix[dirc('B5')] == 'box' && matrix[dirc('B6')] == 'box') || (
                matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box' &&
                matrix[dirc('F5')] == 'box' && matrix[dirc('F6')] == 'box')) {
            document.getElementById(dirc('C4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F4')).style.backgroundColor = "#ff00ff";
        }//B-1-1 B-1-2
        if ((matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box' &&
            matrix[dirc('F1')] == 'box' && matrix[dirc('F2')] == 'box') || (
                matrix[dirc('E4')] == 'box' && matrix[dirc('E5')] == 'box' &&
                matrix[dirc('F4')] == 'box' && matrix[dirc('F5')] == 'box')) {
            document.getElementById(dirc('B5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D5')).style.backgroundColor = "#ff00ff";
        }//B-1-3 B-1-4
    } if (matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword' &&
        matrix[dirc('E5')] == 'sword' && matrix[dirc('E6')] == 'sword' &&
        matrix[dirc('F5')] == 'sword' && matrix[dirc('F6')] == 'sword') {
        if ((matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box' &&
            matrix[dirc('F1')] == 'box' && matrix[dirc('F2')] == 'box') || (
                matrix[dirc('A2')] == 'box' && matrix[dirc('A3')] == 'box' &&
                matrix[dirc('B2')] == 'box' && matrix[dirc('B3')] == 'box')) {
            document.getElementById(dirc('C4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F4')).style.backgroundColor = "#ff00ff";
        }//B-2-1 B-2-2
        if ((matrix[dirc('D2')] == 'box' && matrix[dirc('D3')] == 'box' &&
            matrix[dirc('E2')] == 'box' && matrix[dirc('E3')] == 'box') || (
                matrix[dirc('A5')] == 'box' && matrix[dirc('A6')] == 'box' &&
                matrix[dirc('B5')] == 'box' && matrix[dirc('B6')] == 'box')) {
            document.getElementById(dirc('A2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
        }//B-2-3 B-2-4
    } if (matrix[dirc('E4')] == 'sword' && matrix[dirc('E5')] == 'sword' && matrix[dirc('E6')] == 'sword' &&
        matrix[dirc('F4')] == 'sword' && matrix[dirc('F5')] == 'sword' && matrix[dirc('F6')] == 'sword') {
        if ((matrix[dirc('A5')] == 'box' && matrix[dirc('A6')] == 'box' &&
            matrix[dirc('B5')] == 'box' && matrix[dirc('B6')] == 'box') || (
                matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box' &&
                matrix[dirc('F1')] == 'box' && matrix[dirc('F2')] == 'box')) {
            document.getElementById(dirc('A2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
        }//B-3-1 B-3-2
    } if (matrix[dirc('D1')] == 'sword' && matrix[dirc('D2')] == 'sword' &&
        matrix[dirc('E1')] == 'sword' && matrix[dirc('E2')] == 'sword' &&
        matrix[dirc('F1')] == 'sword' && matrix[dirc('F2')] == 'sword') {
        if ((matrix[dirc('A1')] == 'box' && matrix[dirc('A2')] == 'box' &&
            matrix[dirc('B1')] == 'box' && matrix[dirc('B2')] == 'box') || (
                matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box' &&
                matrix[dirc('F5')] == 'box' && matrix[dirc('F6')] == 'box')) {
            document.getElementById(dirc('B5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D5')).style.backgroundColor = "#ff00ff";
        }//B-4-1 B-4-2
        if ((matrix[dirc('B3')] == 'box' && matrix[dirc('B4')] == 'box' &&
            matrix[dirc('C3')] == 'box' && matrix[dirc('C4')] == 'box') || (
                matrix[dirc('D5')] == 'box' && matrix[dirc('D6')] == 'box' &&
                matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box')) {
            document.getElementById(dirc('A3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F6')).style.backgroundColor = "#ff00ff";
        }//B-4-3 B-4-4
    } if (matrix[dirc('D1')] == 'sword' && matrix[dirc('D2')] == 'sword' && matrix[dirc('D3')] == 'sword' &&
        matrix[dirc('E1')] == 'sword' && matrix[dirc('E2')] == 'sword' && matrix[dirc('E3')] == 'sword') {
        if ((matrix[dirc('A1')] == 'box' && matrix[dirc('A2')] == 'box' &&
            matrix[dirc('B1')] == 'box' && matrix[dirc('B2')] == 'box') || (
                matrix[dirc('E4')] == 'box' && matrix[dirc('E5')] == 'box' &&
                matrix[dirc('F4')] == 'box' && matrix[dirc('F5')] == 'box')) {
            document.getElementById(dirc('A3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F6')).style.backgroundColor = "#ff00ff";
        }//B-5-1 B-5-2
    }
}
function C_general() {
    if (matrix[dirc('B5')] == 'sword' && matrix[dirc('B6')] == 'sword' &&
        matrix[dirc('C5')] == 'sword' && matrix[dirc('C6')] == 'sword' &&
        matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword') {
        if ((matrix[dirc('C1')] == 'box' && matrix[dirc('C2')] == 'box' &&
            matrix[dirc('D1')] == 'box' && matrix[dirc('D2')] == 'box') || (
                matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box' &&
                matrix[dirc('F5')] == 'box' && matrix[dirc('F6')] == 'box')) {
            document.getElementById(dirc('A1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F2')).style.backgroundColor = "#ff00ff";
        }//C-1-1 C-1-2
    } if (matrix[dirc('C5')] == 'sword' && matrix[dirc('C6')] == 'sword' &&
        matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword' &&
        matrix[dirc('E5')] == 'sword' && matrix[dirc('E6')] == 'sword') {
        if ((matrix[dirc('C1')] == 'box' && matrix[dirc('C2')] == 'box' &&
            matrix[dirc('D1')] == 'box' && matrix[dirc('D2')] == 'box') || (
                matrix[dirc('D3')] == 'box' && matrix[dirc('D4')] == 'box' &&
                matrix[dirc('E3')] == 'box' && matrix[dirc('E4')] == 'box')) {
            document.getElementById(dirc('B3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F6')).style.backgroundColor = "#ff00ff";
        }//C-2-1 C-2-2
    } if (matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword' &&
        matrix[dirc('E5')] == 'sword' && matrix[dirc('E6')] == 'sword' &&
        matrix[dirc('F5')] == 'sword' && matrix[dirc('F6')] == 'sword') {
        if ((matrix[dirc('A3')] == 'box' && matrix[dirc('A4')] == 'box' &&
            matrix[dirc('B3')] == 'box' && matrix[dirc('B4')] == 'box') || (
                matrix[dirc('C2')] == 'box' && matrix[dirc('C3')] == 'box' &&
                matrix[dirc('D2')] == 'box' && matrix[dirc('D3')] == 'box')) {
            document.getElementById(dirc('B1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E3')).style.backgroundColor = "#ff00ff";
        }//C-3-1 C-3-2
        if ((matrix[dirc('D3')] == 'box' && matrix[dirc('D4')] == 'box' &&
            matrix[dirc('E3')] == 'box' && matrix[dirc('E4')] == 'box') || (
                matrix[dirc('C1')] == 'box' && matrix[dirc('C2')] == 'box' &&
                matrix[dirc('D1')] == 'box' && matrix[dirc('D2')] == 'box')) {
            document.getElementById(dirc('A2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F1')).style.backgroundColor = "#ff00ff";
        }//C-3-4 C-3-4
    } if (matrix[dirc('D4')] == 'sword' && matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword' &&
        matrix[dirc('E4')] == 'sword' && matrix[dirc('E5')] == 'sword' && matrix[dirc('E6')] == 'sword') {
        if ((matrix[dirc('A3')] == 'box' && matrix[dirc('A4')] == 'box' &&
            matrix[dirc('B3')] == 'box' && matrix[dirc('B4')] == 'box') || (
                matrix[dirc('C1')] == 'box' && matrix[dirc('C2')] == 'box' &&
                matrix[dirc('D1')] == 'box' && matrix[dirc('D2')] == 'box')) {
            document.getElementById(dirc('B1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('B5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E3')).style.backgroundColor = "#ff00ff";
        }//C-4-1 C-4-2
        if ((matrix[dirc('C2')] == 'box' && matrix[dirc('C3')] == 'box' &&
            matrix[dirc('D2')] == 'box' && matrix[dirc('D3')] == 'box') || (
                matrix[dirc('B5')] == 'box' && matrix[dirc('B6')] == 'box' &&
                matrix[dirc('C5')] == 'box' && matrix[dirc('C6')] == 'box')) {
            document.getElementById(dirc('B3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F5')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F6')).style.backgroundColor = "#ff00ff";
        }//C-4-3 C-4-4
    } if (matrix[dirc('D3')] == 'sword' && matrix[dirc('D4')] == 'sword' && matrix[dirc('D5')] == 'sword' &&
        matrix[dirc('E3')] == 'sword' && matrix[dirc('E4')] == 'sword' && matrix[dirc('E5')] == 'sword') {
        if ((matrix[dirc('A3')] == 'box' && matrix[dirc('A4')] == 'box' &&
            matrix[dirc('B3')] == 'box' && matrix[dirc('B4')] == 'box') || (
                matrix[dirc('B5')] == 'box' && matrix[dirc('B6')] == 'box' &&
                matrix[dirc('C5')] == 'box' && matrix[dirc('C6')] == 'box')) {
            document.getElementById(dirc('A2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F1')).style.backgroundColor = "#ff00ff";
        }//C-5-1 C-5-2
    } if (matrix[dirc('C1')] == 'sword' && matrix[dirc('C2')] == 'sword' && matrix[dirc('C3')] == 'sword' &&
        matrix[dirc('D1')] == 'sword' && matrix[dirc('D2')] == 'sword' && matrix[dirc('D3')] == 'sword') {
        if ((matrix[dirc('A3')] == 'box' && matrix[dirc('A4')] == 'box' &&
            matrix[dirc('B3')] == 'box' && matrix[dirc('B4')] == 'box')) {
            document.getElementById(dirc('A1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F2')).style.backgroundColor = "#ff00ff";
        }//C-6-1 C-6-2
    }
}
function D_general() {
    if (matrix[dirc('A3')] == 'sword' && matrix[dirc('A4')] == 'sword' && matrix[dirc('A5')] == 'sword' &&
        matrix[dirc('B3')] == 'sword' && matrix[dirc('B4')] == 'sword' && matrix[dirc('B5')] == 'sword') {
        if ((matrix[dirc('C3')] == 'box' && matrix[dirc('C4')] == 'box' &&
            matrix[dirc('D3')] == 'box' && matrix[dirc('D4')] == 'box') || (
                matrix[dirc('D2')] == 'box' && matrix[dirc('D3')] == 'box' &&
                matrix[dirc('E2')] == 'box' && matrix[dirc('E3')] == 'box')) {
            document.getElementById(dirc('B6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F5')).style.backgroundColor = "#ff00ff";
        }//D-1-1 D-1-2
    } if (matrix[dirc('A4')] == 'sword' && matrix[dirc('A5')] == 'sword' && matrix[dirc('A6')] == 'sword' &&
        matrix[dirc('B4')] == 'sword' && matrix[dirc('B5')] == 'sword' && matrix[dirc('B6')] == 'sword') {
        if ((matrix[dirc('D5')] == 'box' && matrix[dirc('D6')] == 'box' &&
            matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box') || (
                matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box' &&
                matrix[dirc('F1')] == 'box' && matrix[dirc('F2')] == 'box')) {
            document.getElementById(dirc('A1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F6')).style.backgroundColor = "#ff00ff";
        }//D-2-1 D-2-2
    } if (matrix[dirc('A3')] == 'sword' && matrix[dirc('A4')] == 'sword' &&
        matrix[dirc('B3')] == 'sword' && matrix[dirc('B4')] == 'sword' &&
        matrix[dirc('C3')] == 'sword' && matrix[dirc('C4')] == 'sword') {
        if ((matrix[dirc('A5')] == 'box' && matrix[dirc('A6')] == 'box' &&
            matrix[dirc('B5')] == 'box' && matrix[dirc('B6')] == 'box') || (
                matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box' &&
                matrix[dirc('F1')] == 'box' && matrix[dirc('F2')] == 'box')) {
            document.getElementById(dirc('A2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E3')).style.backgroundColor = "#ff00ff";
        }//D-3-1 D-3-2
    } if (matrix[dirc('B3')] == 'sword' && matrix[dirc('B4')] == 'sword' &&
        matrix[dirc('C3')] == 'sword' && matrix[dirc('C4')] == 'sword' &&
        matrix[dirc('D3')] == 'sword' && matrix[dirc('D4')] == 'sword') {
        if (matrix[dirc('E1')] == 'box' && matrix[dirc('E2')] == 'box' &&
            matrix[dirc('F1')] == 'box' && matrix[dirc('F2')] == 'box' || (
                matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box' &&
                matrix[dirc('F5')] == 'box' && matrix[dirc('F6')] == 'box')) {
            document.getElementById(dirc('A3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F4')).style.backgroundColor = "#ff00ff";
        }//D-4-1 D-4-2
    } if (matrix[dirc('D5')] == 'sword' && matrix[dirc('D6')] == 'sword' &&
        matrix[dirc('E5')] == 'sword' && matrix[dirc('E6')] == 'sword' &&
        matrix[dirc('F5')] == 'sword' && matrix[dirc('F6')] == 'sword') {
        if ((matrix[dirc('A3')] == 'box' && matrix[dirc('A4')] == 'box' &&
            matrix[dirc('B3')] == 'box' && matrix[dirc('B4')] == 'box') || (
                matrix[dirc('A5')] == 'box' && matrix[dirc('A6')] == 'box' &&
                matrix[dirc('B5')] == 'box' && matrix[dirc('B6')] == 'box')) {
            document.getElementById(dirc('A2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E3')).style.backgroundColor = "#ff00ff";
        }//D-5-1 D-5-2
    } if (matrix[dirc('C2')] == 'sword' && matrix[dirc('C3')] == 'sword' &&
        matrix[dirc('D2')] == 'sword' && matrix[dirc('D3')] == 'sword' &&
        matrix[dirc('E2')] == 'sword' && matrix[dirc('E3')] == 'sword') {
        if ((matrix[dirc('A3')] == 'box' && matrix[dirc('A4')] == 'box' &&
            matrix[dirc('B3')] == 'box' && matrix[dirc('B4')] == 'box') || (
                matrix[dirc('D5')] == 'box' && matrix[dirc('D6')] == 'box' &&
                matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box')) {
            document.getElementById(dirc('A1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('C4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F6')).style.backgroundColor = "#ff00ff";
        }//D-6-1 D-6-2
    } if (matrix[dirc('C2')] == 'sword' && matrix[dirc('C3')] == 'sword' && matrix[dirc('C4')] == 'sword' &&
        matrix[dirc('D2')] == 'sword' && matrix[dirc('D3')] == 'sword' && matrix[dirc('D4')] == 'sword') {
        if ((matrix[dirc('A3')] == 'box' && matrix[dirc('A4')] == 'box' &&
            matrix[dirc('B3')] == 'box' && matrix[dirc('B4')] == 'box') || (
                matrix[dirc('D5')] == 'box' && matrix[dirc('D6')] == 'box' &&
                matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box')) {
            document.getElementById(dirc('B6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('E1')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F2')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F5')).style.backgroundColor = "#ff00ff";
        }//D-7-1 D-7-2
        if ((matrix[dirc('A5')] == 'box' && matrix[dirc('A6')] == 'box' &&
            matrix[dirc('B5')] == 'box' && matrix[dirc('B6')] == 'box') || (
                matrix[dirc('E5')] == 'box' && matrix[dirc('E6')] == 'box' &&
                matrix[dirc('F5')] == 'box' && matrix[dirc('F6')] == 'box')) {
            document.getElementById(dirc('A3')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('A4')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('D6')).style.backgroundColor = "#ff00ff";
            document.getElementById(dirc('F4')).style.backgroundColor = "#ff00ff";
        }//D-7-3 D-2-4
    }
}
function updata_matrix_increment() {
    step = 0;
    deadcell_num = 0;
    miss_num = 0;
    sword_num = 0;
    box_num = 0;
    fox_num = 0;
    step_list = [];
    deadcell_list = [];
    var sword_min = 100;
    var box_min = 100;
    var sword_sum = 0;
    var box_sum = 0;
    for (i = 1; i <= 6; i++) {
        for (j = 1; j <= 6; j++) {
            if (rgbToHex(document.getElementById(i * 10 + j).style.backgroundColor) == '#9fc5e8') {
                matrix[i * 10 + j] = 'sword';
                step++;
                sword_num++;
                if (i * 10 + j < sword_min) {
                    sword_min = i * 10 + j;
                }
                sword_sum += i * 10 + j;
                step_list.push((i * 10 + j).toString());
                document.getElementById(i * 10 + j).style.borderColor = "white";
                document.getElementById(i * 10 + j).style.borderWidth = '1px';
            } else if (rgbToHex(document.getElementById(i * 10 + j).style.backgroundColor) == '#ea9999') {
                matrix[i * 10 + j] = 'box';
                step++;
                box_num++;
                if (i * 10 + j < box_min) {
                    box_min = i * 10 + j;
                }
                box_sum += i * 10 + j;
                step_list.push((i * 10 + j).toString());
                document.getElementById(i * 10 + j).style.borderColor = "white";
                document.getElementById(i * 10 + j).style.borderWidth = '1px';
            } else if (document.getElementById(i * 10 + j).style.backgroundColor == 'white') {
                matrix[i * 10 + j] = 'miss';
                step++;
                miss_num++;
                step_list.push((i * 10 + j).toString());
            } else if (rgbToHex(document.getElementById(i * 10 + j).style.backgroundColor) == '#ff00ff') {
                matrix[i * 10 + j] = 'fox';
            } else if (rgbToHex(document.getElementById(i * 10 + j).style.backgroundColor) == '#999999') {
                matrix[i * 10 + j] = 'deadcell';
                deadcell_num++;
                deadcell_list.push((i * 10 + j).toString());
            }
        }
    }
    if (deadcell_num == 5) {
        which_list();
        if (now_list == '') {
            commonUtil.message('固定位错误,请仔细核对', 'danger');
        }
    }
    if (sword_num == 6) {
        if ((sword_sum / 6) - sword_min != 6 && (sword_sum / 6) - sword_min != 10.5) {
            commonUtil.message('双剑长这样？', 'danger');
        }
    } if (box_num == 4) {
        if ((box_sum / 4) - box_min != 5.5) {
            commonUtil.message('宝箱长这样？', 'danger');
        }
    }
    increment();
}
function find_condition() {
    updata_matrix_increment();
    var validation = true;
    var sword_all = [];
    var sword_tran = [];
    var sword_vert = [];
    var sword_count = 0;
    sword_condition = [];
    box_condition = [];
    for (h = 1; h <= 5; h++) {
        for (w = 1; w <= 4; w++) {
            sword_tran.push(h * 10 + w + 0);
            sword_tran.push(h * 10 + w + 1);
            sword_tran.push(h * 10 + w + 2);
            sword_tran.push(h * 10 + w + 10);
            sword_tran.push(h * 10 + w + 11);
            sword_tran.push(h * 10 + w + 12);
            for (i = 0; i < sword_tran.length; i++) {
                if (matrix[sword_tran[i]] == 'deadcell' || matrix[sword_tran[i]] == 'miss' || matrix[sword_tran[i]] == 'box' || matrix[sword_tran[i]] == 'fox') {
                    validation = false;
                }
                if (matrix[sword_tran[i]] == 'sword') {
                    sword_count++;
                }
            } if (sword_count != sword_num) {
                validation = false;
            }
            if (validation) {
                sword_all.push(sword_tran);
            } validation = true; sword_tran = []; sword_count = 0;
        }
    }
    for (h = 1; h <= 4; h++) {
        for (w = 1; w <= 5; w++) {
            sword_vert.push(h * 10 + w + 0);
            sword_vert.push(h * 10 + w + 1);
            sword_vert.push(h * 10 + w + 10);
            sword_vert.push(h * 10 + w + 11);
            sword_vert.push(h * 10 + w + 20);
            sword_vert.push(h * 10 + w + 21);
            for (i = 0; i < sword_vert.length; i++) {
                if (matrix[sword_vert[i]] == 'deadcell' || matrix[sword_vert[i]] == 'miss' || matrix[sword_vert[i]] == 'box' || matrix[sword_vert[i]] == 'fox') {
                    validation = false;
                }
                if (matrix[sword_vert[i]] == 'sword') {
                    sword_count++;
                }
            } if (sword_count != sword_num) {
                validation = false;
            }
            if (validation) {
                sword_all.push(sword_vert);
            } validation = true; sword_vert = []; sword_count = 0;
        }
    }
    for (i = 0; i < sword_all.length; i++) {
        for (j = 0; j < sword_all[i].length; j++) {
            sword_condition.push(sword_all[i][j].toString());
        }
    }
    for (var i = 0; i < sword_condition.length; i++) {
        for (var j = i + 1; j < sword_condition.length; j++) {
            if (sword_condition[i] == sword_condition[j]) {
                sword_condition.splice(j, 1);
                j--;
            }
        }
    }
    var box_all = [];
    var box_li = [];
    var box_count = 0;
    for (h = 1; h <= 5; h++) {
        for (w = 1; w <= 5; w++) {
            box_li.push(h * 10 + w + 0);
            box_li.push(h * 10 + w + 1);
            box_li.push(h * 10 + w + 10);
            box_li.push(h * 10 + w + 11);
            for (i = 0; i < box_li.length; i++) {
                if (matrix[box_li[i]] == 'deadcell' || matrix[box_li[i]] == 'miss' || matrix[box_li[i]] == 'sword' || matrix[box_li[i]] == 'fox') {
                    validation = false;
                }
                if (sword_condition.includes(box_li[i].toString())) {
                    validation = false;
                }
                if (matrix[box_li[i]] == 'box') {
                    box_count++;
                }
            } if (box_count != box_num) {
                validation = false;
            }
            if (validation) {
                box_all.push(box_li);
            } validation = true; box_li = []; box_count = 0;
        }
    }
    for (i = 0; i < box_all.length; i++) {
        for (j = 0; j < box_all[i].length; j++) {
            box_condition.push(box_all[i][j].toString());
        }
    }
    for (var i = 0; i < box_condition.length; i++) {
        for (var j = i + 1; j < box_condition.length; j++) {
            if (box_condition[i] == box_condition[j]) {
                box_condition.splice(j, 1);
                j--;
            }
        }
    }
}
function speculate() {
    find_condition();
    if (step > 0) {
        clear_all_tip();
        if (sword_condition.length == 6) {
            for (i = 0; i < sword_condition.length; i++) {
                document.getElementById(sword_condition[i]).style.backgroundColor = '#9fc5e8'
            }
        } else {
            for (i = 0; i < sword_condition.length; i++) {
                document.getElementById(sword_condition[i]).style.borderColor = "#007bff";
                document.getElementById(sword_condition[i]).style.borderWidth = '2px';
            }
            document.getElementById(step_list[step - 1]).style.borderColor = "white";
            document.getElementById(step_list[step - 1]).style.borderWidth = '1px';
        }
        if (box_condition.length == 4 && sword_condition.length == 6) {
            for (i = 0; i < box_condition.length; i++) {
                document.getElementById(box_condition[i]).style.backgroundColor = '#ea9999'
            }
        } else {
            for (i = 0; i < box_condition.length; i++) {
                document.getElementById(box_condition[i]).style.borderColor = "#e06a6a";
                document.getElementById(box_condition[i]).style.borderWidth = '2px';
            }
            document.getElementById(step_list[step - 1]).style.borderColor = "white";
            document.getElementById(step_list[step - 1]).style.borderWidth = '1px';
        }
        updata_matrix_increment();
    }
    if (now_mod == 'A') {
        if (step >= 10) { A_general(); }
        else {
            if (matrix[dirc('D5')] == '') {
                document.getElementById(dirc('D5')).style.borderColor = '#7ad694';
                document.getElementById(dirc('D5')).style.borderWidth = '2px';
            }
            else if (matrix[dirc('E1')] == '' && matrix[dirc('E2')] == '') {
                document.getElementById(dirc('E1')).style.borderColor = '#7ad694';
                document.getElementById(dirc('E1')).style.borderWidth = '2px';
                document.getElementById(dirc('E2')).style.borderColor = '#7ad694';
                document.getElementById(dirc('E2')).style.borderWidth = '2px';
            }
        }

    }
    else if (now_mod == 'B') {
        if (step >= 10) { B_general(); }
        else {
            if (matrix[dirc('E2')] == '') {
                document.getElementById(dirc('E2')).style.borderColor = '#7ad694';
                document.getElementById(dirc('E2')).style.borderWidth = '2px';
            }
            if (matrix[dirc('E5')] == '') {
                document.getElementById(dirc('E5')).style.borderColor = '#7ad694';
                document.getElementById(dirc('E5')).style.borderWidth = '2px';
            }
        }
    }
    else if (now_mod == 'C') {
        if (step >= 10) { C_general(); }
        else {
            if (matrix[dirc('D5')] == '') {
                document.getElementById(dirc('D5')).style.borderColor = '#7ad694';
                document.getElementById(dirc('D5')).style.borderWidth = '2px';
            }
            else if (matrix[dirc('B3')] == '') {
                document.getElementById(dirc('B3')).style.borderColor = '#7ad694';
                document.getElementById(dirc('B3')).style.borderWidth = '2px';
            }
        }
    }
    else if (now_mod == 'D') {
        if (step >= 10) { D_general(); }
        else {
            if (matrix[dirc('B4')] == '') {
                document.getElementById(dirc('B4')).style.borderColor = '#7ad694';
                document.getElementById(dirc('B4')).style.borderWidth = '2px';
            } else if (matrix[dirc('B4')] == 'box') {
                document.getElementById(dirc('C2')).style.borderColor = '#7ad694';
                document.getElementById(dirc('C2')).style.borderWidth = '2px';
            }
            else if (matrix[dirc('B4')] == 'miss') {
                document.getElementById(dirc('D3')).style.borderColor = '#7ad694';
                document.getElementById(dirc('D3')).style.borderWidth = '2px';
            }
            else if (matrix[dirc('E5')] == '' && matrix[dirc('E6')] == '') {
                document.getElementById(dirc('E5')).style.borderColor = '#7ad694';
                document.getElementById(dirc('E5')).style.borderWidth = '2px';
                document.getElementById(dirc('E6')).style.borderColor = '#7ad694';
                document.getElementById(dirc('E6')).style.borderWidth = '2px';
            }
        }
    }
}
function clear_all_tip() {
    for (i = 1; i <= 6; i++) {
        for (j = 1; j <= 6; j++) {
            document.getElementById(i * 10 + j).style.borderColor = "white";
            document.getElementById(i * 10 + j).style.borderWidth = '1px';
        }
    }
}
function clear_fox() {
    for (i = 1; i < 7; i++) {
        for (j = 1; j < 7; j++) {
            if (rgbToHex(document.getElementById(i * 10 + j).style.backgroundColor) == '#ff00ff') {
                document.getElementById(i * 10 + j).style.backgroundColor = "black";
            }
        }
    }
}
function reset() {
    mode_value = 'deadcell';
    step = 0;
    deadcell_num = 0;
    miss_num = 0;
    sword_num = 0;
    box_num = 0;
    fox_num = 0;
    now_list = '';
    now_dirc = '';
    now_mod = '';
    deadcell_list = [];
    step_list = [];
    sword_condition = [];
    box_condition = [];
    matrix = {
        '11': '', '12': '', '13': '', '14': '', '15': '', '16': '',
        '21': '', '22': '', '23': '', '24': '', '25': '', '26': '',
        '31': '', '32': '', '33': '', '34': '', '35': '', '36': '',
        '41': '', '42': '', '43': '', '44': '', '45': '', '46': '',
        '51': '', '52': '', '53': '', '54': '', '55': '', '56': '',
        '61': '', '62': '', '63': '', '64': '', '65': '', '66': '',
    }
    for (i = 1; i < 7; i++) {
        for (j = 1; j < 7; j++) {
            document.getElementById(i * 10 + j).style.backgroundColor = "black";
            document.getElementById(i * 10 + j).style.borderColor = "white";
            document.getElementById(i * 10 + j).style.borderWidth = '1px';
        }
    }
    var progressBar_step = document.getElementById('progress-step');
    progressBar_step.style.width = 0 + '%';
    progressBar_step.innerText = '';
    var progressBar_deadcell = document.getElementById('progress-deadcell');
    progressBar_deadcell.style.width = 0 + '%';
    progressBar_deadcell.innerText = '';
    mode_update(mode_value);
}
function Livelistening(id) {
    updata_matrix_increment();
    if (mode_value == 'deadcell') {
        if (deadcell_num < 5) {
            document.getElementById(id).style.backgroundColor = "#999999";
        } else { commonUtil.message('固定位最多有5个', 'danger'); }
    }
    else if (mode_value == 'sword') {
        if (step < 10 && sword_num < 6) {
            document.getElementById(id).style.backgroundColor = "#9fc5e8";
        } else {
            if (step == 10) { commonUtil.message('已经用完所有次数', 'danger'); }
            else { commonUtil.message('双剑位最多有6个', 'danger'); }
        } if (deadcell_num < 5) { commonUtil.message('建议先选固定位', 'warning'); }
    }
    else if (mode_value == 'box') {
        if (step < 10 && box_num < 4) {

            document.getElementById(id).style.backgroundColor = "#ea9999";
        } else {
            if (step == 10) { commonUtil.message('已经用完所有次数', 'danger'); }
            else { commonUtil.message('宝箱位最多有4个', 'danger'); }
        } if (deadcell_num < 5) { commonUtil.message('建议先选固定位', 'warning'); }
    }
    else if (mode_value == 'miss') {
        if (step < 10) {
            document.getElementById(id).style.backgroundColor = "white";
        } else { commonUtil.message('已经用完所有次数', 'danger'); }
        if (deadcell_num < 5) { commonUtil.message('建议先选固定位', 'warning'); }
    } else if (mode_value == 'fox') {
        if (step < 10 && fox_num < 1) {
            document.getElementById(id).style.backgroundColor = "#ff00ff";
        } else {
            if (step == 10) { commonUtil.message('已经用完所有次数', 'danger'); }
            else { commonUtil.message('宗长最多有1个', 'danger'); }
        } if (deadcell_num < 5) { commonUtil.message('建议先选固定位', 'warning'); }
    } else if (mode_value == 'clear') {
        if (rgbToHex(document.getElementById(id).style.backgroundColor) == '#999999') { now_list = ''; }
        clear_fox();
        step = 0;
        deadcell_num = 0;
        miss_num = 0;
        sword_num = 0;
        box_num = 0;
        fox_num = 0;
        now_list = '';
        now_dirc = '';
        now_mod = '';
        deadcell_list = [];
        step_list = [];
        sword_condition = [];
        box_condition = [];
        matrix = {
            '11': '', '12': '', '13': '', '14': '', '15': '', '16': '',
            '21': '', '22': '', '23': '', '24': '', '25': '', '26': '',
            '31': '', '32': '', '33': '', '34': '', '35': '', '36': '',
            '41': '', '42': '', '43': '', '44': '', '45': '', '46': '',
            '51': '', '52': '', '53': '', '54': '', '55': '', '56': '',
            '61': '', '62': '', '63': '', '64': '', '65': '', '66': '',
        }
        document.getElementById(id).style.backgroundColor = "black";
        increment();
    }
    clear_all_tip();
    speculate();
}