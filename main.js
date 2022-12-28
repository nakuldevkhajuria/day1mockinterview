if(2=='2'){
    console.log(' type of the variable  is not checked')
}
else if(2===2){
    console.log('type and data are same')
}

//question 2:
const obj1 = {
    name : 'nakul',
    standard : '8th class'
}
const obj2 = {
    
    standard : '10th class'
}
const obj3 = {...obj1,...obj2};
console.log(obj3);//last object which has the key standard.
//only its key value we be assigned. cause it comes at the end.
const arr1 = [1,2,4];
let arr2 = [...arr1];

arr1[1] = 4;

console.log(arr1)
console.log(arr2)

//also
const arr3 = [1,2,3,4,5,6]
const [one,two,three,...rest] =   arr3  
console.log(rest);// we are structuring the non primitive datatype which is arr3
//we are structuring, one has value 1, two has 2. like that.

//Question 3

console.log(value1);//this gives undefined
// console.log(value2);//this gives reference error
var value1 = 3;
let value2 = 4;
const value3 = 5;

function raju(){
    value2=4;//value 2 is declared with let and initiated twice. with different scope in place.
    return value2;
}
console.log(raju())


//Question 5

// Storing an array of functions

// const functions = [ greetJohn];

// const functions = [sayHello, greetJohn];
// functions.forEach(func => func());  // Output: 'Hello', 'Hello, John!'

// Using an anonymous function
setTimeout(function() {
  console.log('Hello, world!');
}, 1000);  // Output: 'Hello, world!' after 1 second

// Using arrow functions
const add = (x, y) => x + y;
console.log(add(1, 2));  // Output: 3

// I hope these examples give you a 
// better understanding of how first-class functions can be used in JavaScript.

//Question 6:
function createCounter(){
    let count =0;
    
    return {
        inreaseCount:() => {
            count++;
        },
        decreaseCount: () => {
            count--;
        },
        showCount: () => {
            return count;
        }
    }
}
const counter = new createCounter();//very important to create a object using a function.
counter.inreaseCount()
console.log(counter.showCount())
counter.decreaseCount()
console.log(counter.showCount())

//Question 7
const parent = {
    name:'ParentName',
    sayHello : function(years){
        return `my name is ${this.name} and age is  ${years}`
    }
}
const child = {
    name:'childName'
}
let parentFunction = parent.sayHello;
console.log(parent.sayHello(2));//use this. this will work using this way.//like this also object properties are getting bind.
console.log(parentFunction.bind(child,4)())
//here IIFE is also used. because the function returned is need to be self invoke.
console.log(parentFunction(2))//but not in it. this will not work here.
// When the parentFunction function is called on its own, it logs "Hello, my name is undefined", because the value of this is not bound to any object.
// console.log(parentFunction.call(child,23)) .call
// console.log(parentFunction.apply(child,[23]))   .apply
//and bind can be used as a callback, because bind will create a new function with modified values.



// function Child(){}
//use call apply bind