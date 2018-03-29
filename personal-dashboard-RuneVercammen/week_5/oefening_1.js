let recept =  {
    naam: "Mc Chicken",
    porties: "4",
    ingredienten: ["ei","water", "kippenfilet", "sla" ],
}
console.log(recept.naam)
console.log("porties: " + recept.porties)
console.log("ingredienten:")
for(let i=0; i<recept.ingredienten.length; i++){
    console.log(recept.ingredienten[i])
} 