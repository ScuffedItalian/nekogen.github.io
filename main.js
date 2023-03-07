const img = document.getElementById("img");
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
async function getApiNeko() {
  const data1 = fetch("https://nekos.life/api/v2/img/neko");
  const response = await data1;
  const data2 = await response.json();
  img.src = data2.url;
}

async function getApiWaifu() {
  const data3 = fetch("https://api.waifu.pics/sfw/slap");
  const response2 = await data3;
  const data4 = await response2.json();
  img.src = data4.url;
}

//
button1.addEventListener("click", getApiNeko)
button2.addEventListener("click", getApiWaifu)
