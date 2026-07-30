console.log("umair")
console.log(`Value of X is:`,x)

var x = 1;
console.log(x)

console.log("global is executtion start 1")

let globalVar = " har jaga access huta hun 2"

setTimeout(() => {
    console.log("A..>")

},0)
var globalFn = function(){
    console.log("main global fn ma hun 3 ")
}
console.log(globalFn)
console.log(globalVar)



console.log("global execution end 4")


console.log("Global Execution context start...> " )

setTimeout(() => {
    console.log("Im inside of setTimeOut")

},2000)

Promise.resolve().then(() => {
    console.log("this is from mirco task queue")

})

Promise.resolve().then(function b (){
    console.log("this is from mirco task queue one")
})

setTimeout(() => {
    console.log("ma pehale chala")
}, 1700)
 console.log("Global excution end");
 