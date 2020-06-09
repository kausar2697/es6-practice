

//**********************************String template*********************************/

var age = 23
var name = 'kausar islam'

console.log(`My name is ${name} and  i am ${age} years old. i am ${age>23?'not':''} adult`) //string template

console.log(name.padStart(15,'*')) //  ***kausar islam

console.log(name.padEnd(20,'%')) // kausar islam%%%%%%%%

console.log('s'.repeat(10)) //ssssssssss 

//##########################################################################################

//*******************************Arrow function**************************************** */

let add = (a,b)=>{
    return a+b
}


let add = (a,b) =>  a+b         //shortcut for implecet return
console.log(add(6,7))


let sqr = x => x*x            //shortcut for one parameter
console.log(sqr(5))


//this in arrow function refer to the parent object instead of this


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



var sqr = (n=1)=> n*n       //here n=1 is default parameter --> if you do not pass any value then the default value will be counted

console.log(sqr())  //1

//in default parameter we can not pass null/ undefined

//####################################################################################

//***************************rest and spread operator******************************* */


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

let a=10, b=20

let obj = {
    a:a,
    b:b,
    print: function(){

    }
}

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


let objArr= [
    ['a',10],
    ['b','ok']
]
console.log(Object.fromEntries(objArr))  //{a: 10, b: "ok"} //array to object


//########################################################################

//****************************Iterator**********************************/



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

//*******************set method*********************************************** */

let set = new Set([1,2,3])
set.add(5)
set.add(6)

console.log(set)

console.log(set.clear())

console.log(set.delete(5))

console.log(set.has(1))

console.log(set.keys())


let keyIterate = set.keys()
console.log(keyIterate.next())

//########################################################//#endregion

//*******************map method*********************************************** */
//we can give anything as key in map method to form an object


let map = new Map(
[
    ['a',10],
    ['b','20'],
    ['c',30]
]
)

map.set('d',40)

map.set({name: 'kausar'},45)

map.delete('c')

console.log(map.size)  //4

console.log(map.get('b'))  //20

console.log(map.values(20))

console.log(map.keys())  //MapIterator {"a", "b", "c", "d"}

console.log(map.entries())  //MapIterator {"a" => 10, "b" => "20", "c" => 30, "d" => 40}

for (let [k,v] of map){
     console.log(k,v)
} 

   /*output      
             a 10
             b 20
             c 30
             d 40
*/

map.forEach((v,k)=>{
    console.log(k,v)
})

 /*output      
             a 10
             b 20
             c 30
             d 40
*/


//###################################################################################//#endregion

//*******************************************weak set******************** */

//in set if we pass an object as reference then you can not make its entries null.for doing this we need to use weak set

let a= {a:10}, b = {b:20}

let set = new Set([a,b])
a=null
console.log(set) //can not remove value


let weakSet = new WeakSet([a,b]) //need to provide object as perameter
a=null
console.log(weakSet)

//#########################################################################//#endregion

//*******************************************weak map******************** */
 
let a= {a:10}, b = {b:20}
let weakMap = new WeakMap([[a,45],[b,75]])
a=null

console.log(weakMap.get(a))  //45

console.log(weakMap.has(a))   //false   //successfully removed



//#########################################################################//#endregion

//*******************************************Class in es6******************** */

class Rectangle{
    constructor(width,height){
        this.width=width
        this.height=height

        this.another = function(){    //declare into the class property

        }
    }
          
    name='kausar'
    test2 = function() {   //declare into the class property
        
    }

    draw(){                       //declare in prototype
        console.log('drawing..')
    }
}

let rec1= new Rectangle(45,50)
console.log(rec1.draw()) 

//###########################################################################

//*****************************Static method*********************************** */

class Person{
    constructor(name,email){
        this.name=name
        this.email=email
    }

    print(){
        console.log(`Name = ${this.name}  Email = ${this.email}`)
    }

    static create(str){
        let person = JSON.parse(str)
        return new Person(person.name, person.email) 
    }
}
 str = `{"name": "Kausar", "email" : "1234"}`
 let p1 = Person.create(str)
 console.log(p1)

  /* output:

     Person {name: "Kausar", email: "1234"}
     email: "1234"
     name: "Kausar"  
     __proto__:
     constructor: ƒ Person(name, email)
     print: ƒ print()  
     __proto__: Object

*/ 

 console.log(p1.print())   //Name = Kausar  Email = 1234 

//#############################################################//#endregion

//*****************hide or private class property*********** */

const _name= Symbol()
const _draw= Symbol()
class Person{
    constructor(name){
        this[_name]=name   //private

    }

    [_draw](){

    }

}

let p1 = new Person('ok')

//#####################################################################//#endregion

//*****************hide or private class property by WeakMap()*********** */

const _name= new WeakMap()
const _resize= new WeakMap()
class Person{
    constructor(name){
        this.size = 100
        _name.set(this,name)
       
        _resize.set(this,()=>{
            console.log(this)
        })   //private

    }

    draw (){
        console.log(_name.get(this))
        _resize.get(this)()

    }

}

let p1 = new Person('ok')
p1.draw()


//###################################################################################//#endregion

//***************************Get the private property value from the outside of the class******************************* */

const _name= new WeakMap()
const _resize= new WeakMap()
class Person{
    constructor(name){
        this.size = 100
        _name.set(this,name)
       
        _resize.set(this,()=>{
            console.log(this)
        })   //private

    }
    set name(n){            //use set keyword to set the property
        _name.set(this,n)
    }

    get name(){                //use get keyword to get the property
        return _name.get(this)  
    }
    
    draw (){
        console.log(_name.get(this))
        _resize.get(this)()

    }

}

let p1 = new Person('ok')
p1.name='no'
console.log(p1.name)

//#################################################################################//#endregion

//*******************************Inheritance**************************************/

class shape{
    constructor(color){
        this.color=color
    }

    draw(){
        console.log("drawing..")
    }
}

class Rectangle extends shape{
    constructor(color,hight,width){
        super(color)
        this.hight=hight
        this.width=width
    }

    calculate(){
        return this.hight*this.width+ this.color
    }

}

let s1 = new Rectangle('a',30,40)
console.log(s1.draw())

//####################################################################//#endregion


//*******************************ES6 MODULE SYSTEM*********************** */
import Rectangle from './Ractangle'

let s1 = new Rectangle('a',30,40)
console.log(s1.draw())


import * as func from './func'

console.log(func.add(5,5))

import {add,sub} from './func'

console.log(add(4,5))