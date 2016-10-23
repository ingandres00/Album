
var artistas = ["Red Hot Chilli Pepers","Efecto Pasillo",""];
var años = ["1996", "1986"];
//document.write(discos[0],años[0]);
console.log(artistas[0],años[0]);

function reproduccion(){
  this.cargarcanciones = discos ;
  console.log(discos);
}

document.addEventListener("DOMContentLoaded", function (event) {
  var dom_discos = Array.from(document.querySelectorAll(".discos"));
  var dom_playlist = document.querySelector("#playlist");
  dom_discos.forEach(function(element,index,array){
    element.addEventListener("click",function(){
      var dom_audio = document.querySelector("#audio");
      dom_playlist.style.display = "";
      dom_audio.style.display = "";
      dom_playlist.innerHTML = "";
      document.querySelector("body").removeChild(dom_audio);
      var new_li = document.createElement("li");
      new_li.setAttribute("class", "active");
      var new_a = document.createElement("a");
      new_a.setAttribute("href", element.getAttribute("data-song") );
      new_li.appendChild(new_a);
      dom_playlist.appendChild(new_li);
      var new_audio = document.createElement("audio");
      new_audio.setAttribute("id","audio");
      new_audio.setAttribute("preload","auto");
      new_audio.setAttribute("controls","");
      var new_source = document.createElement("source");
      new_source.setAttribute("src",element.getAttribute("data-song"));
      new_audio.appendChild(new_source);
      document.querySelector("body").appendChild(new_audio);
    });
  });

});
