//alle +-knoppen
let addBrickButtons = document.getElementsByClassName("add-brick");
let colors = ['yellow', 'black', 'orange', 'blue'];
//alle --knoppen
let removeBrickButtons = document.getElementsByClassName('remove-brick');

for(let i=0; i< addBrickButtons.lenght; i++){
    addBrickButtons[i].addEventListener('click',function(event){
        addBrickToWall(i+1, colors[i]);
    })
}
/* help
let addBrickToYellowWall = function(){
    let wall = document.getElementById('wall-'+wallNumber);
    console.log(wallNumber)
    let brick = document.createElement('div');
    let brickClass = 'brick brick-' + color;
    brick.className = brickClass
    wall.appendChild(brick);
} 
*/
let addBrickToWall = function(wallNumber, color){
    let wall = document.getElementById('wall-'+wallNumber);
    console.log(wallNumber)
    let brick = document.createElement('div');
    let brickClass = 'brick brick-' + color;
    brick.className = brickClass
    wall.appendChild(brick);
}
for (let i=0;i<removeBrickButtons.lenght; i++){
    removeBrickButtons[i].addEventListener('click', function(event){
        removeBrickFromWall(i+1);
    })
}

let removeBrickFromWall = function(wallNumber){
    let wall = document.getElementById('wall-'+wallNumber);
    //eerste steen van de muur telkens verwijderen
    console.log(wall.childElementCount);
    //enkel als de muur stenen bevat, dan mag er een steen verwijderd worden
    if(wall.childElementCount > 0){
        wall.removeChild(wall.firstElementChild);
    }    
}
let calculateButton = document.getElementById('btnCalculate');
calculateButton.addEventListener('click', function(event){
    //1. aantal stenen per muur
    countBricksPerWall();
    //2. grootste-kleinste muur
    //3. bereken kostprijs per muur
})
let countBricksPerWall = function(){
    /* let wall = document.getElementById("wall-1");
    let countBricks = wall.childElementCount;
    let countBricksSpanElement = document.getElementById('wall-1-amountstones');
    countBricksSpanElement.textContent = countBricks + " stenen"
    */
   let numberOfWalls = document.getElementsByClassName('wall').length;
   for(let i = 0; i< numberOfWalls; i++){
       let wall = document.getElementById('wall-'+ (i+1)+'-amountstones');
       let countBricks = wall.childElementCount;
       let countBricksSpanElement = document.getElementById('wall-'+(i+1)+'amountstones')
       countBricksSpanElement.textContent = countBricks + ' stenen';
   }
}
