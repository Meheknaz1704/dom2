// individual text
let para=document.getElementById("para")
console.log(para);
para.style.backgroundColor="grey";
para.style.color="white";

// css text
let para1=document.getElementById("para1")
console.log(para1);
para1.style.cssText="background-color:black;color:white";

function onButtonClick() {
    console.log("button click!!")
}

function onaddClick(){
    let para1=document.getElementById("para1")
    para1.classList.add("greyText");
    
}

function onremoveClick(){
    let para1=document.getElementById("para1")
    para1.classList.remove("greyText");
    
}

// innerText
let para2=document.getElementById("para1");
console.log(para2.innerText);

// textContent
let pa=document.getElementById("para1")
console.log(pa.textContent)

// innerHTML
let parael=document.getElementById("para1")
console.log(parael.innerHTML)
