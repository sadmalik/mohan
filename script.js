const one = document.querySelector("#one");
const two = document.querySelector("#two");

one.addEventListener("click",function(){
    one.style.display = "none";
    two.style.display = "initial";
})
two.addEventListener("click",function(){
    two.style.display = "none";
    one.style.display = "initial";
})

// one.addEventListener("click", function (){
//     one.style.transform="translate(0)";
//     two.style.transform="translate(100%)";
    
// })
// one.addEventListener("click", function (){
// })
// var obj = {
//     fullname: "Mukesh Kumar",
//     username:"Mak",
//     contact : "8962979810",
//     // image:"https://images.unsplash.com/photo-1662203218067-5a43c3b65235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
// }
// // delete obj.fullname;
// // obj.username = "Macoy"
// // obj.contact = "8962979810"
// for (const key in obj) {
// console.log(key + " -> " + obj[key]);
//     }
//     console.log(obj)
//     console.log(obj.contact)



