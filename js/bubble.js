function bubble(){
    delay = 0;
    //comparisions = 0;

    for(var i=0; i<arr_size_slider.value-1; i++){
        for(var j=0; j<arr_size_slider.value-i-1; j++){
            update_cont(elements[j], element_size[j] ,'yellow');  //current element
            //comparisions++;
            //update_comparisions(comparisions);
            if(element_size[j]>element_size[j+1]){

                update_cont(elements[j], element_size[j] ,'red');   
                update_cont(elements[j+1], element_size[j+1] ,'red');

                var temp = element_size[j+1];
                element_size[j+1] = element_size[j];
                element_size[j] = temp;

                update_cont(elements[j], element_size[j] ,'#459909');
                update_cont(elements[j+1], element_size[j+1] ,'#459909');
            }
            update_cont(elements[j], element_size[j], '#459909');
        }
        update_cont(elements[j],element_size[j], 'orangered');
    }
    update_cont(elements[0],element_size[0], 'orangered');

    enable_buttons();
};