

//**********************************String template*********************************/
/*
var age = 23
var name = 'kausar islam'

console.log(`My name is ${name} and  i am ${age} years old. i am ${age>23?'not':''} adult`) //string template

console.log(name.padStart(15,'*')) //  ***kausar islam

console.log(name.padEnd(20,'%')) // kausar islam%%%%%%%%

console.log('s'.repeat(10)) //ssssssssss 

//##########################################################################################

//*******************************Arrow function**************************************** */

// let add = (a,b)=>{
//     return a+b
// }


// let add = (a,b) =>  a+b         //shortcut for implecet return
// console.log(add(6,7))


// let sqr = x => x*x            //shortcut for one parameter
// console.log(sqr(5))


//this in arrow function refer to the parent object instead of this

/*
let obj =  {
    name: ' kausar',
    print : function(){
        setTimeout(()=>{
            console.log(this)
            console.log( `hello, ${this.name}`)
        },1000)
    }
}

obj.print()

//we can not use bind , call , apply method with arrow funciton 

//##################################################################################


//******************************default parameter**********************************/

/*

var sqr = (n=1)=> n*n       //here n=1 is default parameter --> if you do not pass any value then the default value will be counted

console.log(sqr())  //1

//in default parameter we can not pass null/ undefined

//####################################################################################

//***************************rest and spread operator******************************* */

/*
let add = (...number )=>{               //rest operator for unknown number of parameter
    return number.reduce((a,b)=>a+b)
    
}

console.log(add(1,2,3,4,5,6)) //21

let add = (...number )=>{               
    
    console.log(...number)  //spread operator
}

add(1,2,3,4,5,6,7,8)

//#######################################################################################//

//********************************shorthand in object letaral **************************************************/
/*
let a=10, b=20

// let obj = {
//     a:a,
//     b:b,
//     print: function(){

//     }
// }

//shorthand
let obj={
    a,
    b,
    print(){

    }
}
console.log(obj)  //{a: 10, b: 20, print: ƒ}

//##############################################################################################//#endregion

//*************************************object Destructure *********************************** */
/*
 let person = {
     name: 'kausar',
     email: '1234@gmail.com',
     address:{
         city: 'dhaka',
         country: 'bangladesh'
     }
 }

 let {name,email}=person  //object Destructure
 console.log(name,email)  //kausar 1234@gmail.com


 let {name,email,address:{city,country}}=person  ////object Destructure in two layer
console.log(name,email,city,country) //kausar 1234@gmail.com dhaka bangladesh

//####################################################################//#endregion

//********************Object to array / array to object************* */

/*
let obj ={
    a:10,
    b: 'ok'
}

console.log(Object.entries(obj))   //object to array
/*output
(2) [Array(2), Array(2)]
0: (2) ["a", 10]
1: (2) ["b", "ok"]
*/

/*
let objArr= [
    ['a',10],
    ['b','ok']
]
console.log(Object.fromEntries(objArr))  //{a: 10, b: "ok"} //array to object


//########################################################################

//****************************Iterator**********************************/

/*

let arr = [1,2,3]

let arriterate = arr[Symbol.iterator]()
console.log(arriterate.next()) //{value: 1, done: false}
console.log(arriterate.next()) //{value: 2, done: false}

//for string
let str = 'abcde'
let strIterate = str[Symbol.iterator]()
console.log(strIterate.next())  //{value: "a", done: false}
console.log(strIterate.next())  //{value: "b", done: false}

//##########################################################################//#endregion

//**************************for of loop************************************/
/*
let arr= [1,2,3,4]

for(let v of arr){
    console.log(v)
}

/*output-->
 1
 2
 3
 4
 */

 /*
 let str = 'eqrqrewtq'

 for (let s of str){
     console.log(s)
 }

 //#######################################################################
 //********************************Custom iterable object****************** */
 
 let obj={
     start : 1,
     end: 5,
     [Symbol.iterator]: function() {
        let currentValue = this.start
        let self = this
        return{
            next(){
                return{
                    done: currentValue>self.end,
                    value: currentValue>self.end ? undefined : currentValue++
                } 
            }
        }
     }

 }

 let iterate= obj[Symbol.iterator]()
console.log(iterate.next())  //{done: false, value: 1}
console.log(iterate.next()) 
console.log(iterate.next()) 
console.log(iterate.next()) 
console.log(iterate.next()) 
console.log(iterate.next()) 
console.log(iterate.next()) 
console.log(iterate.next()) 


 //########################################################################
 //*****************************Generator****************************** */
/*
let arr = [1,2,3,4]

function* generate(collection){    //generator
    for(let i=0;i<= collection.length;i++){
        yield collection[i]
    }

}

let it = generate(arr)
console.log(it.next())  //{value: 1, done: false}
console.log(it.next())  //{value: 2, done: false}
console.log(it.next())  //{value: 3, done: false}
console.log(it.next())  //{value: 4, done: false}
console.log(it.next())  //{value: undefined, done: false}

//#########################################################################//#endregion

//************************************************************************* */
