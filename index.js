//  Object is use by this { } like we add block .
// method of objects is     KEY VALUE format



// var calclator = {
// sum : function sum(a,b){
//     return a+b;
// }
// subtract : function subtract()
// }


var studentsName = ["ali", "ubaid" ,"rizwan","muneeb","taimoor"];

function called(value){
    if (value == "rizwan"){
        return value + "fail"
    }
    else{
        return value + "pass"
    }
}


var result = studentsName.map(called);
console.log(result);



var dataofCars = [{
    name : "civic",
    model : {regno : 123 , city : "fsd"},
    color : "grey",
    owner : "kuma",
    taxstatus : "pay"
},
{
    name : "city",
    model : {regno : 456 , city : "lhr"},
    color : "black",
    owner : "pandak",
    taxstatus : "non pay"  
},
{
    name : "alsvin",
    model : {regno : 789 , city : "fsd"},
    color : "silver",
    owner : "puja",
    taxstatus : "pay"
},
{
    name : "revo",
    model : {regno : 999 , city : "rwlp"},
    color : "black",
    owner : "shanawaz",
    taxstatus : "pay"
},
{
    name : "cultus",
    model : {regno : 456 , city : "fsd"},
    color : "grey",
    owner : "sambul",
    taxstatus : "pay"
}
];

console.log("original" , dataofCars.length);
function findData(value){
if (value.color == "black"){
    return value;
}
}

var result = dataofCars.filter(findData);
console.log(result);


class Students {
    constructor(city, cell, district, sibling, cast) {
        this.city = city;
        this.cell = cell;
        this.district = district;
        this.sibling = sibling;
        this.cast = cast;
        console.log("hello World");
    }

    printCity() {
        console.log(`Your city is ${this.city}`);
    }

    printCell() {
        console.log(`Your cell is ${this.cell}`);
    }

    printDistrict() {
        console.log(`Your district is ${this.district}`);
    }

    printSibling() {
        console.log(`No of siblings: ${this.sibling}`);
    }

    printCast() {
        console.log(`Your cast is ${this.cast}`);
    }
}

let umair = new Students("Fsd", 1177, "Punjab", 3, "Gujjer");
let ali = new Students("Fsd", 1122, "Pindi", 6, "Mian");
let hannan = new Students("Fsd", 1937, "KPK", 1, "Dogar");
let muneeb = new Students("Fsd", 15, "Chitral", 2, "Muslim");

umair.printCell();
umair.printSibling();
umair.printCast();
umair.printCity();

let employs = {
    name : "ali",
    age : 16,
    disability : false,
    salary : 28000,
}
delete employs.name
employs. name = "ali";
Object.seal(employs);




let newstudents = {
    name : "ali",
    class : 3
}
// Functions in Objects .

// Objects.keys(    )
 
let cars ={
    name : "audi",
    owner : "ali",
    color :"red",
    registration : [{model : 2022 , city : "fsd"}]
}

console.log(Object.keys(cars));

//  Object.values(    )  Use previous object

console.log(Object.values(cars));

// Object.entries(  )
console.log(Object.entries(cars))

// Object.seal(  )    no change in previous

Object.seal(cars);
cars.sell = false
delete cars.name
// Objects.freeze(   )  no new add no change in previous 

// Object.assign    important use to merge to objects 


// (Object.assign(cars ,newstudents))

// comment of multi line by /* jnskjxsjasjkac */




// Optional Chaining in Objects  (?.)

let Ali ={
    age : 21,
    color : "black",
    citizen : "pakistan",
    height : "5 feet"
}

console.log(Ali.age)
// in this ali.age is created and printed but in other case see

console.log(Ali.gender)
// in this case you see that genter is not created thus not be printed 
//  use ?.
console.log(Ali?.gender?.color);
