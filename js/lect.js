/*const inventors = [
    {first:"tarek",last:"mohamed",year:1990,currentYear:2021},
    {first:"shady",last:"mohamed",year:1986,currentYear:2021},
    {first:"adel",last:"samy",year:1990,currentYear:2019},
    {first:"samy",last:"ahmed",year:1986,currentYear:2018},
    {first:"tamer",last:"mohamed",year:1990,currentYear:2021},
    {first:"kamal",last:"hamed",year:1991,currentYear:2017},
];
*/
/*
const mysecond = inventors.filter(function(inventor){
 
    if(inventor.year==1986){
        return inventor.first + inventor.last;
    }

})
*/
/*
const mysecond = inventors.filter(inventor=>{
    if(inventor.year==1986){
        return inventor;
    }
}) 
*/
/*
const fullName = inventors.map(function(myinventor){

    return myinventor.first +" "+ myinventor.last;

})

*/
//const fullName = inventors.map(inventor=>`${inventor.first} ${inventor.last}`);//template letter to put variable as string
/*var arr = [
  { name: "tarek", age: 30 },
  { name: "shady", age: 36 },
  { name: "ali", age: 30 },
  { name: "islam", age: 28 },
  { name: "mohamed", age: 35 },
];

const ordered = arr.sort(function(a,b){
    if(a.age>b.age){
        return 1;
    }else{
        return -1;
    }
});


//const ordered = arr.sort((a,b)=>a.age > b.age ? 1 : -1);
*/
/*
const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
    const suffix = this.dataset.sizing||"";
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value + suffix}`)
}

inputs.forEach(function(input){
    input.addEventListener("change",handleUpdate);
});
inputs.forEach(function(input){
    input.addEventListener("mousemove",handleUpdate);
})
*/
const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
    const suffix = this.dataset.sizing||"";
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value + suffix}`);

}
inputs.forEach(function(input){
    input.addEventListener("change",handleUpdate)
});
inputs.forEach(function(input){
    input.addEventListener("mousemove",handleUpdate)
});