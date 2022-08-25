const inputPlayer = document.querySelectorAll("#inputPlayer");
const btn = document.querySelector(".btn");

const equipos = document.querySelector(".equipos");

btn.addEventListener("click", () => {
  const jugadores = [];
  inputPlayer.forEach(function (player) {
    player.classList.add("hidden");
    jugadores.push(player.value);
  });

  jugadores.sort(() => Math.random() - 0.5);
  console.log(jugadores);

  let fragment = "";
  mezclar = jugadores.forEach(function (player) {
    fragment = `<div class="formacion">
  <p id="teama">Equipo A</p>
  <p>${jugadores[0]}</p>
  <p>${jugadores[1]}</p>
  <p>${jugadores[2]}</p>
  <p>${jugadores[3]}</p>
  <p>${jugadores[4]}</p>
  </div>
  <div class="formacion">
  <p id="teamb">Equipo B</p>
  <p>${jugadores[5]}</p>
  <p>${jugadores[6]}</p>
  <p>${jugadores[7]}</p>
  <p>${jugadores[8]}</p>
  <p>${jugadores[9]}</p>
  </div>`;
  });

  equipos.innerHTML = fragment;
});
