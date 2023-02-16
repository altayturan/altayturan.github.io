
fetch("../../data/gamelinks.json")
  .then((response) => response.json())
  .then((json) => {
    let linksDiv = document.querySelector("div.gamelinks");
    for (let l of json.games) {
      if(linksDiv.id.toString() == l.gameName.toString()){
        for(let k of l.links){
          linksDiv.insertAdjacentHTML(
            "beforeend",
            `<a href="${k.link}" target="_blank" class="link" style="--hc: ${k.color};">
            <div>
              <h3 class="name">${k.name}</h3>
            </div>
            <img src="./assets/icons/${k.fileName}" alt="">
          </a>`
          );
        }
      }
    }
  });

