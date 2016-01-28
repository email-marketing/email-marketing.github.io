var curdate = new Date();
var m = curdate.getMonth() + 1;
var d = curdate.getDate();
var h = curdate.getHours();
var expire_date = {'month':m, 'day':d, 'hour': h + 17, 'minute': 43, 'sec': 35};

var exp_date = localStorage.getItem("expire-date");
if(exp_date === null) {
	localStorage.setItem("expire-date", JSON.stringify(expire_date));
} else if(exp_date['hour'] <= 0 || exp_date['hour'] == null) {
		localStorage.setItem("expire-date", JSON.stringify(expire_date));
}

exp_date = JSON.parse(localStorage.getItem('expire-date'));

year = new Date().getFullYear();
month = exp_date['month'];
day = exp_date['day']; 
hour= exp_date['hour'];
minute= exp_date['minute'];
sec= exp_date['sec'];

month = --month;
dateFuture = new Date(year, month, day, hour, minute, sec);


function CountBox() {
	dateNow = new Date;
	amount = dateFuture.getTime() - dateNow.getTime() + 5;
	delete dateNow;
	if (amount < 0) {
		out = "<div id='countbox-days'><span></span>0<div id='countbox-days-text'></div></div>" + "<div id='countbox-hours'><span></span>0<div id='countbox-hours-text'></div></div>" + "<div id='countbox-mins'><span></span>0<div id='countbox-mins-text'></div></div>" + "<div id='countbox-secs'><span></span>0<div id='countbox-secs-text'></div></div>";
		document.getElementById("countbox").innerHTML = out
	} else {
		days = 0;
		hours = 0;
		mins = 0;
		secs = 0;
		out = "";
		amount = Math.floor(amount / 1e3);
		days = Math.floor(amount / 86400);
		amount = amount % 86400;
		hours = Math.floor(amount / 3600);
		amount = amount % 3600;
		mins = Math.floor(amount / 60);
		amount = amount % 60;
		secs = Math.floor(amount);
		out = "<div id='countbox-days'><span></span>" + days + "<div id='countbox-days-text'></div></div>" + "<div id='countbox-hours'><span></span>" + hours + "<div id='countbox-hours-text'></div></div>" + "<div id='countbox-mins'><span></span>" + mins + "<div id='countbox-mins-text'></div></div>" + "<div id='countbox-secs'><span></span>" + secs + "<div id='countbox-secs-text'></div></div>";
		document.getElementById("countbox").innerHTML = out;
		setTimeout("CountBox()", 1e3)
	}
}
window.onload = function () {
	CountBox();
}
