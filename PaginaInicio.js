const cargarPerros = function (){$.get("https://dog.ceo/api/breeds/image/random/12", data=>{
    for (i=0; i<data.message.length; i++){
        galItem = document.createElement("div")
        galItem.className = "galeryItem"
        $(".galeryContainer").append(galItem)
        galImg = document.createElement("img")
        galImg.src=`${data.message[i]}`
        galImg.className = "galeryImg"
        galItem.append(galImg)
    }
})
}

const razas = []
$.get("https://dog.ceo/api/breeds/list/all", data=>{
    for (let current in data.message){
        razas.push(current)
    }
})

$(".lupa").click(function(){
    if(razas.includes($(".inputRaza")[0].value) == true){
        $(".galeryContainer").empty()
        $.get(`https://dog.ceo/api/breed/${$(".inputRaza")[0].value}/images/random/12`, data=>{
            for (i=0; i<data.message.length; i++){
                galItem = document.createElement("div")
                galItem.className = "galeryItem"
                $(".galeryContainer").append(galItem)
                galImg = document.createElement("img")
                galImg.src=`${data.message[i]}`
                galImg.className = "galeryImg"
                galItem.append(galImg)
            }
        })
    }else{
        swal ( "No pudimos encontrar esa raza" ,  "Tal vez escribiste mal" ,  "error" )
    }
})

$(".reload").click(function(){
    $(".galeryContainer").empty()
    cargarPerros()
})

cargarPerros()

// Cargar foto

const defaultBtn = document.querySelector("#default-btn")
const wrapper = document.querySelector(".wrapper")
const cancelBtn = document.querySelector("#cancel-btn")
const fileBtn = document.querySelector(".file-name")
const customBtn = document.querySelector("#custom-btn")
const img = document.querySelector("#uploadImg")
const imgUpload = document.querySelector("#img1")

function defaultBtnActive(){
    defaultBtn.click()
}

defaultBtn.addEventListener("change", function(){
    const file = this.files[0]
    if(file){
        const reader = new FileReader()
        reader.onload = function(){
            const result = reader.result;
            img.src = `${result}`;
            wrapper.classList.add("active")
            fileBtn.addEventListener("click", function(){
                imgUpload.src = reader.result;
                img.src = ""
                wrapper.classList.remove("active")
            });
        }
        cancelBtn.addEventListener("click", function(){
            img.src=""
            wrapper.classList.remove("active")
        })

        reader.readAsDataURL(file)
    }
})