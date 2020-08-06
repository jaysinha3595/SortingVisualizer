function selection(){
    delay = 0;
    var min_index; //comparisions=0;
    for(var i=0; i<=arr_size_slider.value-1; i++){
        update_cont(elements[i], element_size[i], 'yellow');  //current min
        min_index = i;
        for(var j=i+1; j<arr_size_slider.value; j++){
            update_cont(elements[j], element_size[j], 'cyan');   //comparing this to min
            update_cont(elements[i], element_size[i], 'yellow');
            //comparisions++;
            //update_comparisions(comparisions);
            if(element_size[j]<element_size[min_index]){

                update_cont(elements[min_index], element_size[min_index], '#459909');     //reset previous min to green
                min_index = j;
                update_cont(elements[min_index], element_size[min_index], 'red');   //this is current min, changnig it to red
            }
            //this 'if' is not for algo but for animation
            if(j!=min_index) update_cont(elements[j], element_size[j], '#459909');    //doesn't reset the current minimum
        }

        if(min_index!=i){
            var temp = element_size[min_index];
            element_size[min_index] = element_size[i];
            element_size[i] = temp;

            update_cont(elements[i], element_size[i], 'orangered');     //animated swap
            update_cont(elements[min_index], element_size[min_index], '#459909');     //animated swap
        }
        update_cont(elements[i], element_size[i], 'orangered');
    }
    enable_buttons();
}


