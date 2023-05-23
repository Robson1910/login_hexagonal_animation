let hexagonAnimation = document.getElementById('hexagonAnimation').innerHTML
const linhas = 30;
const hexagonais = 16;

let h = 0;
while(h<linhas){
    hexagonAnimation = hexagonAnimation + "<div class='row'></div>"
    document.getElementById('hexagonAnimation').innerHTML = hexagonAnimation
    h++
}

for(var i =0; i<linhas; i++){
    let row = document.querySelectorAll('.row')[i].innerHTML
    for(var j =0; j<hexagonais; j++){
        row = row + "<div class='hexagon'></div>"
        document.querySelectorAll('.row')[i].innerHTML = row
    }
}

let cursor = document.getElementById('cursor')
window.onmousemove = function(e){
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
}

document.getElementById("frmLogin").addEventListener("submit", function(event) {
    // Impede o envio do formulário
    event.preventDefault()
 
    // Realiza a validação dos campos
    var email = document.getElementById("email").value
    var senha = document.getElementById("password").value
    var isValid = true

      if (email === "") {
        alert("Preencha o campo Email!")
        document.getElementById("email").classList.add("error")
        document.getElementById("email").focus()
        isValid = false;
      } else if (senha === "") {
        alert("Preencha o campo Senha!") 
        document.getElementById("password").classList.add("error")
        document.getElementById("password").focus()
        isValid = false;
      }

      if(email !== ""){
        document.getElementById("email").classList.remove("error")
      } else if(senha !== ""){
        document.getElementById("password").classList.remove("error")
      }

    // Se todos os campos forem válidos, pode prosseguir com o envio do formulário
    if (isValid) {
      this.submit()
    }
  });