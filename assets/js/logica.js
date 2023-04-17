//peticion para llamar los digimon

function getDigimon() {
    var resultado = fetch("https://digimon-api.vercel.app/api/digimon")

    resultado
        .then(result => result.json())
        .then(json => {
            console.log(json); //datos
            for (var i = 0; i < json.length; i++) {
                inyectionHtml(json[i], i)

            }
        })
        .catch(error => {
            console.log(error);
        })
}

function inyectionHtml(digimon, index) {
    var fila = ` <tr>
        <th scope="row">${index + 1}</th>
        <td><img src="${digimon.img}" width="50px" alt=""></td>
        <td>${digimon.name}</td>
        
        <td>${digimon.level}</td>
    </tr>`

    var body = document.getElementById("cuerpo_tabla");
    body.innerHTML = body.innerHTML + fila;
}

   
getDigimon();

//peticio para el buscador 
var formulario = document.getElementById("formulario")
formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    var input1 = document.getElementById("input1").value 
    console.log(input1)
    fetch("https://digimon-api.vercel.app/api/digimon/name/"+input1)
.then(resp => resp.json())
.then(datos =>{
    console.log(datos[0])
    console.log(datos[0].name)
    inyectionHtml2(datos[0])
})
})
function inyectionHtml2(digimon){
    document.getElementById("tabla").style.display = "none"
    var bodycard = document.getElementById("cuerpo_card")
bodycard.innerHTML = ""

    bodycard.innerHTML += `<div class="card col-12 mx-auto" style="width: 18rem;">
    <img src="${digimon.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${digimon.name}</li>
      <li class="list-group-item">${digimon.level}</li>
    </ul>
  </div>`
    
}













