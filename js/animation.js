var delay=5;

var algo_speed = document.querySelector("#speed");
algo_speed.addEventListener('input', getSpeed);

window.onload = getSpeed();

var user_delay;
function getSpeed(){
    switch(algo_speed.value){
        case "1": user_delay = 500; break;
        case "2": user_delay = 100; break;
        case "3": user_delay = 50; break;
        case "4": user_delay = 20; break;
        case "5": user_delay = 5; break;
    }
} 


function update_cont(div, div_size, color){
    window.setTimeout(function(){
        div.style="height:"+div_size+"px; background-color:"+color+";";
    },delay+=user_delay);
}

/*function update_comparisions(value){
    window.setTimeout(function(){
        document.querySelector('.comparisions').textContent = value;
    }, delay+=5);
}

function reset_comparisions(value){
    window.setTimeout(function(){
        document.querySelector('.comparisions').textContent = value;
    }, 0);
}*/

function disable_buttons(){
    var db = document.querySelectorAll(".btn");
    for(var i=0; i<db.length; i++){
        db[i].disabled = true;
        db[i].classList.add("disabled");
    }
}

function enable_buttons(){
    window.setTimeout(function(){
        var db = document.querySelectorAll(".btn");
        for(var i=0; i<db.length; i++){
            db[i].disabled = false;
            db[i].classList.remove("disabled");
            db[i].classList.remove("active");
        }
    },delay+=user_delay);
}

function reset_buttons(){
    var db = document.querySelectorAll(".btn");
    for(var i=0; i<db.length; i++){
        db[i].disabled = false;
        db[i].classList.remove("active");
        db[i].classList.remove("disabled");
    }
}