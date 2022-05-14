//variables
var nbre1 = "",
  nbre2 = "",
  T = "",
  operateur = "",
  prevOperation = document.querySelector(".prevOperation"),
  powerOn = document.querySelector("#powerOn"),
  powerOff = document.querySelector("#powerOff");


//les actions des operateurs
function operation() {
  switch (operateur) {
    case "+":
      // si c'est l'addition, on fait a + b que l'on renvoie ensuite à la var a que l'on transforme en string
      T = String(Number(nbre1) + Number(nbre2));
      // à nbreAffichee du HTML on affecte la nouvelle var a
      document.getElementById("nbreAffichee").innerHTML = T;
      prevOperation.textContent = nbre2
      // on reinitialise la var b au vide
      nbre2 = "";
      // on reinitialise l'operateur au vide
      operateur = "";
      break;

    case "-":
      T = String(Number(nbre1) - Number(nbre2));
      document.getElementById("nbreAffichee").innerHTML = T;
      nbre2 = "";
      operateur = "";
      break;

    case "*":
      T = String(Number(nbre1) * Number(nbre2));
      document.getElementById("nbreAffichee").innerHTML = T;
      nbre2 = "";
      operateur = "";
      break;

    case "/":
      // cas d'un nombre divisé par 0
      if (nbre2 == "0") {
        document.getElementById("nbreAffichee").innerHTML = "Impossible !";
        nbre1 = "";
        nbre2 = "";
        operateur = "";
        break;
      } else {
        T = String(Number(nbre1) / Number(nbre2));
        document.getElementById("nbreAffichee").innerHTML = T;
        nbre2 = "";
        operateur = "";
        break;
      }
  }
}

// ----------------------------------------------------------------------------------------------------------------------

//actions lorsqu'on appuie sur un boutton
function boutton(m) {
  //si on appuie sur le boutton =
  if (m == "=") {
    // si a et b different du vide alors on effectue les operations
    if ((nbre1 != "") & (nbre2 != "")) {
      operation();
    }
  }

  // verifier les operateurs
  else if (m == "+" || m == "-" || m == "*" || m == "/") {
    if (nbre1 != "" && nbre2 == "") {
      operateur = m;
      // dans nbreAffichee du HTML on affiche le nombre entré "+ operateur"
      
      prevOperation.textContent = nbre1
      
    } else if (nbre1 != "" && nbre2 != "") {
      operation();
      operateur = m;  
      prevOperation.textContent = nbre2
    }
  }

  // verifier les chiffres et les decimaux
  else {
    // si l'operateur est vide (il n' ya pas d'operateur), alors m = le chiffre entré sur la calculatrice
    // on concatene les deux chiffres ( a et m)
    if (operateur == "") {
      nbre1 = nbre1 + m;
      document.getElementById("nbreAffichee").innerHTML = nbre1;

    } else {
      nbre2 = nbre2 + m;
      document.getElementById("nbreAffichee").innerHTML =
        nbre2;//operateur + nbre2;
    }
  }
}

// ----------------------------------------------------------------------------------------------------------------------

// fonctions pour les bouttons speciaux
function boutton_special(m) {
  switch (m) {
    case "reset":
      location.reload();
      break;

    case "bs":
      if (nbre1 != "" && operateur != "") {
        // exemple : 2 * ""  =
        if (nbre2 == "") {
          // on reinitialise l'operateur au vide et on affiche juste le nbre1
          operateur = "";
          document.getElementById("nbreAffichee").innerHTML = nbre1;
        }
        // dans ce cas, b a une valeur
        else {
          var bx = new Array();
          bx = nbre2.split("");
          bx.pop();
          nbre2 = bx.join("");
          document.getElementById("nbreAffichee").innerHTML =
            nbre1 + nbre2;// operateur + nbre2;
        }
      } else if (nbre1 != "" && operateur == "") {
        var ax = new Array();
        ax = nbre1.split("");
        ax.pop();
        nbre1 = ax.join("");
        document.getElementById("nbreAffichee").innerHTML = nbre1;
      }
      break;
  }
}

powerOn.addEventListener("click", ()=>{
  prevOperation.innerHTML = 0
  document.getElementById("nbreAffichee").innerHTML = "0"
  document.getElementById("nbreAffichee").style.color = "black"
  nbre1 = "" , nbre2 = "" 
})

var test = 0;

powerOff.addEventListener("click", ()=>{
  prevOperation.innerHTML = ""
  document.getElementById("nbreAffichee").style.color = "antiquewhite"
  nbre1 = "" , nbre2 = "" 
  test = 1; 
})




/*let input = document.querySelector(".input");
input.disabled = true;
input.addEventListener("change", on_off);
function on_off(m) {
  if (document.querySelector(".input").value === "") {
    input.disabled = true; 
  } else {
    input.disabled = false;
  }
}*/

/*let input = document.querySelector(".input");
let button = document.querySelector(".button");
button.disabled = true;
input.addEventListener("change", on_off);
function on_off() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}*/

/*function on_off(item){
  on_off.innerText="0";
  constEcran = "";
etatCalco = true;
document.addEventListener("keydown", off);
let touche_on = document.querySelector(".button");
for(lettouche of touche_on ){
  touche.addEventListener("onclick", off);
}
}*/

/*function on_off(m){
  const btn = document.querySelector(".button");
  const btn_on_off = document.querySelector(".nbreAffichee"); // nbreAffichee

  btn.addEventListener("onclick",()=>{
    btn_on_off.classList.toggle(is-visible);
  })
}

function on_off(m){
  if(m == "on_off"){
     nbre1 = "", nbre2="";
    document.getElementById("nbreAffichee").innerHTML ="";
  }
}*/
