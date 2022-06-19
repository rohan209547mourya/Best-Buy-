// let productArr = [
//     {image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg;canvasHeight=100;canvasWidth=100",name:"MacBook Pro 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray",price:1299.99,quantity:2},
//     {image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451333_sd.jpg;canvasHeight=100;canvasWidth=100",name:"Best Buy essentials™ - Full Motion TV Wall Mount for 47–84 TVs - Black",price:59,quantity:1},
//     {image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451333_sd.jpg;canvasHeight=100;canvasWidth=100",name:"Best Buy essentials™ - Full Motion TV Wall Mount for 47–84 TVs - Black",price:800,quantity:4}
// ]

let productArr = JSON.parse(localStorage.getItem("cart_page"));

// let totalAmount = 0;
productArr.forEach(function(elem,index){
    // totalAmount = totalAmount + (elem.quantity*elem.price);
    let div = document.createElement("div");
    
    let image = document.createElement("img");
    image.setAttribute("src",elem.image);

    let name = document.createElement("p");
    name.innerText = elem.name;

    // Append price, quantity, remove in this div.
    let div2 = document.createElement("div");

    let price = document.createElement("h4");
    price.innerText = "$"+elem.price;

    let quantity = document.createElement("p");
    quantity.innerText = "Qty " + elem.quantity;

    let remove = document.createElement('p');
    remove.innerText = "Remove";
    remove.addEventListener("click",function(){
        removefun(index)
    })

    div2.append(price,quantity,remove);
    div.append(image,name,div2);
    document.querySelector("#responsiveness").append(div);
    
})
let referalAmt = localStorage.getItem("totalReferalAmt")
document.querySelector("#totalAmount").innerText = "$"+referalAmt;

let referalDiscount = localStorage.getItem("referalDiscount");
document.querySelector("#referalDiscount").innerText = referalDiscount;
// "$"+totalAmount

// document.querySelector("#referalBtn").addEventListener("click",referal);
// let temp = totalAmount;
// function referal(){
//     if(document.querySelector("#referal").value == "buyers10"){
//         totalAmount = totalAmount - totalAmount*(10/100);
//         alert("Referal added successfuly")
//         document.querySelector("#totalAmount").innerText = "$"+totalAmount
//         document.querySelector("#savings").innerText = "$"+(temp - totalAmount).toFixed(2)
//     }else{
//         alert("Referal code is not Correct")
//     }
// }

document.querySelector("form").addEventListener("submit",submitfun);

function submitfun(elem){
    elem.preventDefault();
    // console.log("inside fun")
    if(document.querySelector("#card").value == 1234567812345678){
        alert("OTP sent successfully");
        window.location.href="otpPage.html"
    }else {
        alert("Please enter a valid card number")
        window.location.reload();
    }
}

function removefun(index){
    productArr.splice(index,1);
    localStorage.setItem("cart_page",JSON.stringify(productArr));
    window.location.reload();
}