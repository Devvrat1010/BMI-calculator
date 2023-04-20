const height=document.getElementById("height")
const weight=document.getElementById("weight")
const container=document.getElementById("container")
const btn=document.getElementById("btn")


const fetchbio=(height,weight)=>{
    // res=
    fetch("https://bmi-calculator-api.devvrat-singhsi.repl.co/",{
        body:{weight:weight.value,height:height.value},
        method:"POST"
    })
    .then(res=>res.json())
    .then(res=>container.innerText=res["output"])
};

btn.addEventListener("click",()=>{
    fetchbio(height.value,weight.value)
})
