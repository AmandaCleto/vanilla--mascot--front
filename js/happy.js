/*WHEN HE GETS TOUCHED*/

//eyes
function happy() {
    //eyes
    let eye_1 = document.getElementById("eye_1");
    let eye_2 = document.getElementById("eye_2");
    eye_1.classList.remove("eye_1");
    eye_1.classList.add("eye_smile_1")
    eye_2.classList.remove("eye_2");
    eye_2.classList.add("eye_smile_2")
    close_eye();

    //smile
    let mouth = document.getElementById("mouth");
    mouth.classList.remove("neutro");
    mouth.classList.add('smile');

    //hehe
    var element = document.getElementById('texto');
    element.innerHTML = "HeHe" + "<br>" + "&nbsp;&nbsp;HeHe";
    element.style.transform = "rotate(341deg)";

    //calling the normal function
    setTimeout(function() {
        normal();
    }, 5000);
}

//turn back
function normal() {
    //eye
    console.log("normal");
    let eye_1 = document.getElementById("eye_1");
    let eye_2 = document.getElementById("eye_2");
    eye_1.classList.add("eye_1");
    eye_1.classList.remove("eye_smile_1")
    eye_2.classList.add("eye_2");
    eye_2.classList.remove("eye_smile_2")
    open_eye();

    //smile
    let mouth = document.getElementById("mouth");
    mouth.classList.add("neutro");
    mouth.classList.remove('smile');

    //hehe
    var element = document.getElementById('texto');
    element.innerHTML = "";
}





/*
TESTING PART
//Creating the risk for the mouth
var divRisc = document.createElement('div');
divRisc.style.height = "13px";
divRisc.style.width = "3px";
divRisc.style.marginBottom = "50px";
divRisc.style.marginLeft = "12px";
divRisc.style.backgroundColor = "black";
divRisc.style.transform = "rotate(5deg)";

//putting the new risk inside the smile
document.getElementById("mouth").appendChild(divRisc);

*/