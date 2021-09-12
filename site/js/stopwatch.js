let tm = "00" + ":" + "00" + ":" + "00";
document.getElementById('stopwatch').innerHTML = tm;

function strt() {
    let s = 0;
    let m = 0;
    let h = 0;
    document.getElementById('stopwatch').id = 'started';
    setInterval(() => {
        s++;
        if (s > 59) {
            m++;
            s = 0;
        }
        if (m > 59) {
            h++;
            m = 0;
        }
        if (s < 10) {
            sec = '0' + s;
        }
        else {
            sec = s;
        }
        if (m < 10) {
            min = '0' + m;
        }
        else {
            min = m;
        }
        if (h < 10) {
            hour = '0' + h;
        }
        else {
            hour = h;
        }
        time = hour + ":" + min + ":" + sec;
        document.getElementById('started').innerHTML = time;z
    }, 1000);
}

function stp() {
    document.getElementById('started').id = 'stopped';
    if (s < 10) {
        sec = '0' + s;
    }
    else {
        sec = s;
    }
    if (m < 10) {
        min = '0' + m;
    }
    else {
        min = m;
    }
    if (h < 10) {
        hour = '0' + h;
    }
    else {
        hour = h;
    }
    tim = hour + ":" + min + ":" + sec;
    document.getElementById('stopped').innerHTML = tim;
}

function rst() {
    let res = "00" + ":" + "00" + ":" + "00";
    let id = document.getElementsByTagName('div')[0].id;
    if (id == 'stopwatch') {
        document.getElementById('stopwatch').innerHTML = res;
        document.getElementById('stopwatch').id = 'stopwatch';
    }
    if (id == 'started') {
        document.getElementById('started').innerHTML = res;
        document.getElementById('started').id = 'stopwatch';
    }
    if (id == 'stopped') {
        document.getElementById('stopped').innerHTML = res;
        document.getElementById('stopped').id = 'stopwatch';
    }

}