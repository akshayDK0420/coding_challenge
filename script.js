// Solution No - 1
function searchValue () {
    let inputText = [1,1,2,3,5,7,3,6,2];
    let foundedValue;
    for (let i = 0; i<inputText.length; i++){
        if (i === inputText.indexOf(inputText[i]) && i === inputText.lastIndexOf(inputText[i])) {
            foundedValue = inputText[i];
            break;
        } else {
            foundedValue = "not founded.";
        }
    }
    return foundedValue;
}
console.log("Search value: "+ searchValue())

// Solution No - 2
const arr = [];
const rotateRight = arr => {
    for (let i = 0; i < arr.length-1; i++){
        temp = arr[i];
        arr[i] = arr [i+1];
        arr[i+1] = temp;
    };
};
Array.prototype.rotate = function(n){
    const {length: l } = this;
    if(n >= l){
        return;
    };
    for(let i = 0; i < n; i++){
        rotateRight(this);
    };
};
const a = [6,7,8,9,1,2,3,4,5]
a.rotate(4);
console.log(a);