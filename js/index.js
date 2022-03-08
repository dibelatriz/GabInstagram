
// ocutar todos os novos campos
document.addEventListener("DOMContentLoaded", function() {  
    document.querySelectorAll('.novo-login').forEach( (e)=>{ e.style.display = "none"; });
  });

// Trocar as imagens
  var i = 1;
  var intervalID = window.setInterval(trocarImagens, 1500);

  function trocarImagens() {
    switch (i) {
      case 1:
  
        document
          .getElementById("Carrousel")
          .setAttribute("src", "./img/instagram-celular-04-red.png");
        i++;
        break;
      case 2:
        document
          .getElementById("Carrousel")
          .setAttribute("src", "./img/instagram-celular-04-lilas.png");
        i++;
        break;
      case 3:
        document
          .getElementById("Carrousel")
          .setAttribute("src", "./img/instagram-celular-04-blue.png");
        i = 1;
        break;
    }
  }

//Alternar para a tela de novo login
  function trocaDeTela(){
    document.querySelectorAll('.novo-login').forEach( (e)=>{ e.style.display = "flex"; });
    document.querySelectorAll('.continuar').forEach( (e)=>{ e.style.display = "none"; });
  }


