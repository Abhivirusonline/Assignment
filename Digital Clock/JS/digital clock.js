var month = new Array();
month=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC',];

function startClock() {
    setInterval(function() {

        var dt = new Date();
        var todaydate = dt.getDate() + " " + month[dt.getMonth()] + " " + dt.getFullYear();
        document.getElementById("date-disp").innerHTML = todaydate;

        var h = dt.getHours();
        var m = dt.getMinutes();
        var s = dt.getSeconds();

        if (h < 10) h = "0" + h;
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;
        var conv = "AM";
        if (h >= 12) conv = "PM";
        if (h == 24) {
            conv = "AM";
            h = "00";
        }
        if (h >= 13 && h < 24) {
            h -= 12;
            if (h < 10) h = "0" + h;
        }
        var tm = h + ":" + m + ":" + s;
        var message = "";
        if (conv == "AM") {
            message = "Good Morning";
        }
        else {
                if ((h == 12 ) || (h >=1 && h <= 4)) {
                message = "Good Afternoon";
                }
                else if (h >= 4 && h <= 11) {
                message = "Good Evening";
                }
            }
        document.getElementById("msg").innerHTML=message;
        document.getElementById("time").innerHTML=tm;
        document.getElementById("convention").innerHTML=conv;

    }, 1000);
}