var btn = document.getElementById("cont-but").getElementsByTagName("li");

var showDiv = document.getElementById("cont-body").getElementsByTagName("div");

function out(){
    btn[0].onclick = function(){
            showDiv[0].style.display="block";
            showDiv[1].style.display = "none";
            showDiv[2].style.display = "none";
    }
}
function out1(){
    btn[1].onclick = function(){
            showDiv[0].style.display="none";
            showDiv[1].style.display = "block";
            showDiv[2].style.display = "none";
    }
}
function out2(){
    btn[2].onclick = function(){
            showDiv[0].style.display="none";
            showDiv[1].style.display = "none";
            showDiv[2].style.display = "block";
    }
}


out();
out1();
out2();


var nav = document.getElementById("two-but").getElementsByTagName("li");

var showBox = document.getElementById("two-body").getElementsByTagName("div");

function but(){
    nav[0].onclick = function(){
        showBox[0].style.display="block";
        showBox[1].style.display = "none";
        showBox[2].style.display = "none";
    }
}
function but1(){
    nav[1].onclick = function(){
        showBox[0].style.display="none";
        showBox[1].style.display = "block";
        showBox[2].style.display = "none";
    }
}
function but2(){
    nav[2].onclick = function(){
        showBox[0].style.display="none";
        showBox[1].style.display = "none";
        showBox[2].style.display = "block";
    }
}


but();
but1();
but2();

var icon = document.getElementById("icon-nav").getElementsByTagName("li");

var showMag = document.getElementById("icon-cont").getElementsByTagName("div");

function num(){
    icon[0].onclick = function(){
        showMag[0].style.display="block";
        showMag[1].style.display = "none";
        showMag[2].style.display = "none";
    }
}
function num1(){
    icon[1].onclick = function(){
        showMag[0].style.display="none";
        showMag[1].style.display = "block";
        showMag[2].style.display = "none";
    }
}
function num2(){
    icon[2].onclick = function(){
        showMag[0].style.display="none";
        showMag[1].style.display = "none";
        showMag[2].style.display = "block";
    }
}


num();
num1();
num2();