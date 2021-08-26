a = new Date();
function hr() {
  setInterval(() => {
    a = new Date();
    if (a.getSeconds() < 10) {
      sec = '0' + a.getSeconds();
    }
    else
     sec = a.getSeconds();
    if (a.getMinutes() < 10) {
      min = '0' + a.getMinutes();
    }
    else
     min = a.getMinutes();
    
    let time = a.getHours() + ':' + min + ':' + sec + ' AM';
    let tim = 'Time ' + a.getHours() + ':' + min + ' AM';
    document.getElementById('time').innerHTML = time;
    document.getElementById('tab').innerHTML = tim;
  }, 1000);   
}
function hrr() {
  setInterval(() => {
    a = new Date();
    hr = a.getHours() - 12;
    if (a.getSeconds() < 10) {
      sec = '0' + a.getSeconds();
    }
    else
     sec = a.getSeconds();
    if (a.getMinutes() < 10) {
      min = '0' + a.getMinutes();
    }
    else
     min = a.getMinutes();
    
    let time = hr + ':' + min + ':' + sec + ' PM';
    let tim = 'Time ' + hr  + ':' + min + ' PM';
    document.getElementById('time').innerHTML = time;
    document.getElementById('tab').innerHTML = tim;
  }, 1000);
}
function hrrr() {
  setInterval(() => {
    a = new Date();
    if (a.getSeconds() < 10) {
      sec = '0' + a.getSeconds();
    }
    else
     sec = a.getSeconds();
    if (a.getMinutes() < 10) {
      min = '0' + a.getMinutes();
    }
    else
     min = a.getMinutes();
    
    let time = a.getHours() + 12 + ':' + min + ':' + sec + ' AM';
    let tim = a.getHours() + 12 + ':' + min + ' PM';      
    document.getElementById('time').innerHTML = time;
    document.getElementById('tab').innerHTML = tim;
  }, 1000);
}
if (a.getHours() <= 12) {
  hr();
}
else if (a.getHours() > 12) {
  hrr();
}
else if (a.getHours() == 0) {
  hrrr();
}