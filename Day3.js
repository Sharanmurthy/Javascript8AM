//Non primitive
//array 

let ab = [17,18,21,true,'Welcome',"Hai"]

console.log(ab);

//object

let abj = {
    name : "xyz",
    age : 21,
    gender : 'M'
}

console.log(abj);


//functions (Important)

//Function declaration:

function a() {
console.log("Hi")
}

a()

//function with parameter:
function b (a){
    console.log("my name is",a);
    console.log("my name is "+a);   
}

b("Sharan")

// value passing inside the function 

function c(a){
    console.log(a);
    
    a=[1,2,3,4,"My numbers"]
    console.log("My First array inside the function",a);   
}
c(123)

// function expression

function d(rent,transport,food){
    let d = (rent+transport+food)
    console.log("Total expense",(rent+transport+food));
    console.log("Expense",d);
    console.log(`Total is ${d}`);
    console.log(`Expens is ${d} and total is ${d}`)
    
    
}
d(1000,2000,3000)

//asigning a function to variable 

let f = function g  (a,b,c){
    console.log("check",a,b,c);
    if (b>1){
        g(b+1)
        console.log(b);
        
    }

}
f(1,2,3)

let a = function b(x) {
    if (x > 0) {
        console.log(x);
        a(x - 1); // recursive call to itself
    }
};

a(3)


//arrow function

let e = () => {
    console.log("My first arrow");
    let a = "BALA"
    let b = "KING"
    console.log(`${a} is a ${b}`);
    
}

e()


const j = (a,b) => {
    console.log("here",a,b);
    
}

j(1,"one")

//IIFE

(function k(a){
    console.log("IIFE");
    console.log(a);
})

(123);

