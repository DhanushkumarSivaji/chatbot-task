export function generateRandomNumber(){
    var min = 0;
    var max = 4;
    var i;
    i = Math.floor(Math.random() * (max - min)) + min;
    while(i===generateRandomNumber.last)
        i = Math.floor(Math.random() * (max - min)) + min;
    generateRandomNumber.last=i;
    return i;
};
