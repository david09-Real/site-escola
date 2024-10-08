function estrela(){
    let imagem =window.document.getElementById("cor")
    
    if (imagem.src.includes("estreva_vazia")) {
       
        imagem.src = "http://127.0.0.1:5500/fuck/estrela_cheia-removebg-preview.png"; 
    } else {
       
        imagem.src = "http://127.0.0.1:5500/fuck/estreva_vazia-removebg-preview.png";
    }
 }
 function estrela2(){
    let imagema =window.document.getElementById("cor2")
    if (imagema.src.includes("estreva_vazia")) {
       
        imagema.src = "http://127.0.0.1:5500/fuck/estrela_cheia-removebg-preview.png"; 
    } else {
       
        imagema.src = "http://127.0.0.1:5500/fuck/estreva_vazia-removebg-preview.png";
    }
 }
 function estrela3(){
    let imagemem =window.document.getElementById("cor3") 
    if (imagemem.src.includes("estreva_vazia")) {
       
        imagemem.src = "http://127.0.0.1:5500/fuck/estrela_cheia-removebg-preview.png"; 
    } else {
       
        imagemem.src = "http://127.0.0.1:5500/fuck/estreva_vazia-removebg-preview.png";
    }
}
let login = window.document.getElementById('conta')
function aparecerlogin(){
    
    

    if(  login.style.display === "block"){
        login.style.display = "none"
    }
    else {
         login.style.display = "block"
    }
   
}

let email = window.document.getElementById('email');
let senha = window.document.getElementById('pass');

function entrar() {
    let senhava = senha.value
let emailva = email.value
   
    if(emailva == "admin" && senhava == "admin"){
        window.alert('bommm')
        login.style.display = "none"
    }
     

    
}
document.addEventListener('keydown', function(event) {
    
   
    if (event.key === 'Enter') {
            
           
    entrar();
        }
    });