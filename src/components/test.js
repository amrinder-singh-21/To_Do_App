//const a = "iamamrinder.jpg"
const a = "shhhhh.jpg"
console.log(a)

var index = ""

if(a.endsWith(".png")){
index = a.indexOf(".png")
}else if(a.endsWith(".jpg")){
    index = a.indexOf(".jpg")
}

console.log("index=",index)

const slice1 = a.slice(0, index)
console.log("slice1",slice1);

const slice2 = a.slice(index)
console.log("slice2",slice2);

const name = slice1 + Date.now() + slice2
console.log("name",name)