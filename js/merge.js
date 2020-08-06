function mergesort1(){
    delay = 0;
    mergesort(0, element_size.length-1);
    enable_buttons();
}

function mergesort(l, r){
    if(l<r){
        var mid = Math.floor(l+(r-l)/2);
        update_cont(elements[mid], element_size[mid], 'yellow');
        mergesort(l, mid);
        mergesort(mid+1, r);
        merge(l,mid,r);
    }
}

function merge(l,mid, r){
    var i,j,k;
    var n1 = mid-l+1;
    var n2 = r-mid;

    var L = [n1], R = [n2];     //temp arrays
    //copy data in temp arrs
    for(i=0; i<n1; i++){
        L[i] = element_size[l+i];
    }
    for(j=0; j<n2; j++){
        R[j] = element_size[mid+1+j];
    }

    i=0;
    j=0;
    k=l;

    while(i<n1 && j<n2){
        if(L[i] <= R[j]){
            element_size[k] = L[i];
            update_cont(elements[k], element_size[k], 'orangered');
            i++;
        }
        else{
            element_size[k] = R[j];
            update_cont(elements[k], element_size[k], 'orangered');
            j++;
        }
        k++;
    }

    while(i<n1){
        element_size[k] = L[i];
        update_cont(elements[k], element_size[k], 'orangered');
        i++;
        k++;
    }

    while(j<n2){
        element_size[k] = R[j];
        update_cont(elements[k], element_size[k], 'orangered');
        j++;
        k++;
    }

}