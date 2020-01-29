/*MAIN FUNCTIONS*/

/* TRYING TO MAKE A EYE FOLLOW
document.querySelector("body").addEventListener('mousemove', eyeball);

function eyeball() {
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye) {
        console.log("a");
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
    })
}*/



/*CALL OUT THE NAME */
function touchMascot() {
    var userName = prompt("What is your name?", "Enter your name here.");
    if (userName) {
        alert("It is good to meet you, " + userName + ".");
        document.getElementById("rockImg").src = "rock_happy.png";
    }
}


/*TIMING OF THE DAY */
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = "Horário: " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

/*BACKGROUND BASED ON TIMING*/
function background_color() {
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        document.body.style.background = 'thistle'
        document.getElementsByClassName('msg').innerHTML = "Bom Dia!"
    } else if (hora >= 12 && hora <= 18) {
        document.body.style.background = 'rgb(191, 216, 215)'
        document.getElementsByClassName('msg').innerHTML = "Boa Tarde!"
    } else {
        document.body.style.background = 'rgb(195, 191, 216)'
        document.getElementsByClassName('msg').innerHTML = "Boa Noite!"
    }
}


function blink_call() {
    console.log("blink");
    setInterval(function() {
        close_eye();
        console.log("close");
    }, 9000);
    setInterval(function() {
        open_eye();
        console.log("open");
    }, 9050);
}


function close_eye() {
    let p_eye_1 = document.getElementById("p_eye_1");
    let p_eye_2 = document.getElementById("p_eye_2");
    let p_1 = document.getElementById("p_1");
    let p_2 = document.getElementById("p_2");

    p_eye_1.classList.remove("p_eye_1");
    p_eye_1.classList.add("p_eye_1_smile");
    p_eye_2.classList.remove("p_eye_2");
    p_eye_2.classList.add("p_eye_2_smile");

    p_1.classList.remove("p_1");
    p_2.classList.remove("p_2");
}

function open_eye() {
    let p_eye_1 = document.getElementById("p_eye_1");
    let p_eye_2 = document.getElementById("p_eye_2");
    let p_1 = document.getElementById("p_1");
    let p_2 = document.getElementById("p_2");

    p_eye_1.classList.add("p_eye_1");
    p_eye_1.classList.remove("p_eye_1_smile");
    p_eye_2.classList.add("p_eye_2");
    p_eye_2.classList.remove("p_eye_2_smile");

    p_1.classList.add("p_1");
    p_2.classList.add("p_2");
}