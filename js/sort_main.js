var arr_size_slider = document.querySelector("#arr-size");
var container = document.querySelector(".array-container");
//var comparisions;


arr_size_slider.addEventListener('input', generateArray);

/* Generate New Array */
var elements;   //to keep the divs, i.e array elements
var element_size;  //hieght of respective divs, i.e value of elements
function generateArray(){
    reset_buttons();
    elements = [];
    element_size = [];
    //reset_comparisions('0');
    container.innerHTML="";
    arr_size_slider.max = container.offsetWidth/7-5;   //screen width
    var arr_size = arr_size_slider.value;
    for(var i=0; i<arr_size; i++){
        elements[i] = document.createElement("div");
        element_size[i] = Math.floor(Math.random() * 500) +5;
        container.appendChild(elements[i]);
        elements[i].style="height:"+element_size[i]+"px;";
    }
}


/* Call on window.onload */
window.onload = generateArray();

/* Update array */
document.querySelector(".update").addEventListener('click', generateArray);


/*Adding eventListeners to all button */
var buttons = document.querySelectorAll(".btn");
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', runAlgo);
}


function runAlgo(){
    this.classList.add("active");
    disable_buttons();
    switch(this.textContent){
        case "Bubble Sort": bubble(); break;
        case "Selection Sort": selection(); break;
        case "Insertion Sort": insertion(); break;
        case "Quick Sort": quick(); break;
        case "Merge Sort": mergesort1(); break;
        case "Heap Sort": heap(); break;
    }
}