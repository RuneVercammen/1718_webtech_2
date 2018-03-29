let drawFlatArea = function (count) {
    let strResult = "";
    for(i = 1; i <= count; i++){
        strResult +="_";
    }
}

let drawmountain = function (count) {
    let strResult = "/";
    for(i = 1; i <= count; i++){
        strResult +="'";    
    }
    strResult += "\\";
    return strResult;
}
console.log(drawFlatArea(15))