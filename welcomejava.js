const box =
document.getElementById("whendates");

function loadFirstButton() {
    box.innerHTML = '<button class="buttonno1" onClick="loadSecondButton()">14&15</button><div class="agenda"><p class="writingtime">Cosplay</p><p class="writingtime"> Game</p>';
}
function loadSecondButton(){
    box.innerHTML='<button class="buttonno1" onClick="loadFirstButton()">16&17</button><div class="agenda"><p class="writingtime">Board Game</p><p class="writingtime">Nightreight Co-op</p>';
}
loadFirstButton();
