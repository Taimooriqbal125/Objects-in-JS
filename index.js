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



