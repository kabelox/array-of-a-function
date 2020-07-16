function DashInsert(num) {
    var arr = num.toString().split('_');
    var i = 0;
    while(i < arr.length-1){
    if( arr[i]%2 !==0 && arr[i+1]%2 !==0){ 
    arr.splice(i+1,0,'-'); 
    }
    i++
    }
    return arr.join('_'); 
    }