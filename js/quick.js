function quick(){
    delay = 0;
    quicksort(0, element_size.length-1);
    enable_buttons();
}

function quicksort(start, end){
    if(start<end){
        update_cont(elements[start], element_size[start], 'yellow');         //array boundaries
        update_cont(elements[end], element_size[end], 'yellow');             //array boundaries
        var pi = part(start, end);
        update_cont(elements[pi-1], element_size[pi-1], 'orangered');
        quicksort(start, pi-1);
        quicksort(pi+1, end);
    }
}

function part(start, end){
    update_cont(elements[end], element_size[end], 'black'); //pivot
    var pivot = element_size[end];
    var p_index = start;
    for(var i=start; i<end; i++){
        if(element_size[i]<=pivot){
            update_cont(elements[i], element_size[i], 'red');
            if(i!=p_index) update_cont(elements[p_index], element_size[p_index], 'red');
            var temp = element_size[i];
            element_size[i] = element_size[p_index];
            element_size[p_index] = temp;
            update_cont(elements[i], element_size[i], '#459909');
            update_cont(elements[p_index], element_size[p_index], '#459909');
            p_index++;
        }
    }
    update_cont(elements[end], element_size[end], 'red');
    update_cont(elements[p_index], element_size[p_index], 'red');
    var temp2 = element_size[end];
    element_size[end] = element_size[p_index];
    element_size[p_index] = temp2;
    update_cont(elements[end], element_size[end], 'orangered');
    update_cont(elements[p_index], element_size[p_index], 'orangered');
    return p_index;
}