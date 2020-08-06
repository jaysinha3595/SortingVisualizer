function insertion(){
    delay = 0;
    var key, j;
    for(var i=1; i<arr_size_slider.value; i++){
        key = element_size[i];
        update_cont(elements[i], key, 'yellow');        //change key's color to yellow
        j = i-1;
        //update_cont(elements[j], element_size[j], 'cyan');      //change color of j to visualize comparision
        while(j>=0 && element_size[j] > key){
           // update_cont(elements[j], element_size[j], 'cyan'); 
            update_cont(elements[j], element_size[j], 'red');
            element_size[j+1] = element_size[j];
            update_cont(elements[j+1], element_size[j+1], 'orangered');
            update_cont(elements[j], key, 'yellow');
            j--;
            //update_cont(elements[j], element_size[j], 'orangered');
        }
        update_cont(elements[j], element_size[j], 'orangered');
        element_size[j+1]  = key;
        update_cont(elements[j+1], element_size[j+1], 'orangered');
    }
    update_cont(elements[j+1], element_size[j+1], 'orangered');
    enable_buttons();
}