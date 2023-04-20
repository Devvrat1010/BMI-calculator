const height=document.getElementById("height")
const weight=document.getElementById("weight")
const container=document.getElementById("container")
const btn=document.getElementById("btn")


const fetchbio=(height,weight)=>{
    // res=
    fetch("http://localhost:5173/?height="+height+"&weight="+weight)
    .then(res=>res.json())
    .then(res=>container.innerText=res["output"])
};

btn.addEventListener("click",()=>{
    fetchbio(height.value,weight.value)
})