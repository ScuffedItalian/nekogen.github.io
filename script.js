const img = document.getElementById("img");
const button = document.getElementById("button1")
async function getApi() {
  const data1 = fetch("https://nekos.life/api/v2/img/neko");
  const response = await data1;
  const data2 = await response.json();
  img.src = data2.url;
}


button.addEventListener("click", getApi)
