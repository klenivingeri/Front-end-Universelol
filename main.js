

fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(response => saveLocalStorage(response.data))
    .catch(error => console.log('Api não localizada'));




const saveLocalStorage = (heros)=>{







  Object.keys(heros).forEach(item =>{
    var div = document.createElement('div');
        div.setAttribute('class', 'perfil');
        
        div.innerHTML =  `<div class="dentro">
                          <img class="photo" src="img/${heros[item].id}.jpg">
                          <div class="nameimg" style="background-image:url('img/${heros[item].id}.jpg')">
                            <div class="name">
                              <span class="h1">${heros[item].name}</span>
                            </div>
                          </div>`
      document.getElementById('galery').appendChild(div);
      
    });
  }


function handleInput(e) {
   var ss = e.target.selectionStart;
   var se = e.target.selectionEnd;
   e.target.value = e.target.value.toUpperCase();
   e.target.selectionStart = ss;
   e.target.selectionEnd = se;
}

window.onscroll = function(){
   var top = window.pageYOffset || document.documentElement.scrollTop
       console.log(top);
       if(top >= 100){
          let fixa = document.getElementById('pesquisa')
          fixa.setAttribute('style','position: fixed;z-index:999;margin-top:-100px;width:100%')
       }else{
                   let fixa = document.getElementById('pesquisa')
          fixa.setAttribute('style','position: relative;z-index:0;')
       }
}


/*
                          

const leagueoflegends =  JSON.parse(localStorage.getItem('@leagueoflegends'))
if(!leagueoflegends){
  fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(data => saveLocalStorage(data))
    .catch(error => console.log('Api não localizada'));

  const saveLocalStorage = (heros)=>{
  console.log('estava vazio')
  localStorage.setItem('@leagueoflegends', JSON.stringify(heros.data))
  }
}

Object.keys(leagueoflegends).forEach(function(item){
  var div = document.createElement('div');
      div.setAttribute('class', 'digimon');
      div.innerHTML =  `<p>${leagueoflegends[item].name}</p>
                        <p>AD: ${leagueoflegends[item].info['attack']}</p>
                        <p>DF: ${leagueoflegends[item].info['defense']}</p>
                        <p>MG: ${leagueoflegends[item].info['magic']}</p>
                        <p>DF: ${leagueoflegends[item].info['difficulty']}</p>`
      document.body.appendChild(div);

});
 


*/

 





































/*
var digimon = new XMLHttpRequest();
digimon.onreadystatechange = function() {
       console.log(digimon.responseText)
};
digimon.open("GET", "https://digimon-api.vercel.app/api/digimon", true);
digimon.send();

*/