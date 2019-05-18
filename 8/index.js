var arr1 = [1,2,2,3,1,4,5,6,4,7,71,8];
var sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    if(typeof arr1[i] == "number"){
    sum1 += arr1[i];
    }
    
} 
document.write(arr1 + "<br>");
document.write(sum1 + "<br>");
//方法二
function sum(arr1){
    var result = 0;
    for(var i = 0; i<arr1.length; i++){
        if(typeof arr1[i] == "number"){
            result += arr1[i];
        }
    }
    return result;
}
document.write(sum(arr1));
//

function sum2(array){
    
    let all = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "number") {
            
            all += array[i];
        }
    }
    return all;
}
const array = [1,2,2,3,1,4,5,6,4,7,71,8];
document.write(sum2(array))








