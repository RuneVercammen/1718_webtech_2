//variabele maken voor de drie dingen die we nodig hebben
let link = document.querySelector('a')
console.log(link);

let vet = document.getElementsByTagName('strong');
console.log(vet);

let span = document.getElementsByTagName('span');
console.log(span);

//event koppelen aan de link
link.addEventListener('mouseover', function (){
//vetgedrukte woorden oranje
highlightElements(vet, 'orange');
// alle span-elementen paars
highlightElements(span, 'purple');
// a-elements roze achtergrondkleur (nieuwe functie)
highlightAnchor(link, 'pink');

},false);


function highlightElements(elements, color){
  for(let i=0; i<elements.length;i++){
    elements[i].style.color = color;
  }
}
function highlightAnchor (element, color){
  element.style.backgroundColor = color;
}


//fokoff


link.addEventListener('mouseout', function (){
  //vetgedrukte woorden zwart
  unHighlightElements(vet, 'black');
  // alle span-elementen paars
  unHighlightElements(span, 'black');
  // a-elements roze achtergrondkleur (nieuwe functie)
  unHighlightAnchor(link, 'beige');
  
  },false);
  
  function unHighlightElements(elements, color){
    for(let i=0; i<elements.length;i++){
      elements[i].style.color = color;
    }
  }
  function unHighlightAnchor (element, color){
    element.style.backgroundColor = color;
  }