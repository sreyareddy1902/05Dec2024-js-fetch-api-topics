
//synchronous javascript
/*----
console.log("this is first line")
alert("hello")
console.log("this is second line")
-----*/

//asynchornous javascript
/*---example1
setTimeout(function(){
    console.log("this is first line")
},2000)
console.log("this is second line")
-----*/

/*---example2
test()
console.log("this is first line")
function test()
{
    console.log("this is second line")
}
----*/

/*----example3
setTimeout(function(){
    console.log("this is first line")
},0)
console.log("this is second line")
-----*/

/*----example4
setTimeout(function(){
    console.log("first line")
},2000)
console.log("second line")
console.log("third line")
console.log("fourth line")
----*/

//callback function
/*----example1
function fun(add)
{
    console.log("first line")
    add()
}
function notfun()
{
    console.log("second line")
}
fun(notfun)
----*/
/*----example2
function fun()
{
    setTimeout(()=>{
        console.log("first line")
    },2000)
}
function notfun()
{
    console.log("second line")
}
fun()
notfun()
----*/

/*----example3
function fun(add)
{
    setTimeout(()=>{
        console.log("first line")
        add()
    },2000)
}
function notfun()
{
    console.log("second line")
}
fun(notfun)
----*/

/*----example4
function fun(add)
{
    setTimeout(()=>{
        console.log("first line")
    },2000)
    add()
}
function notfun()
{
    console.log("second line")
}
fun(notfun)
----*/

//callback hell
/*---example
function callBackHell()
{
    setTimeout(()=>{
        console.log("first callback")
        setTimeout(()=>{
            console.log("second callback")
            setTimeout(()=>{
                console.log("third callback")
            },1000)
        },2000)
    },2000)
}
callBackHell()
----*/

