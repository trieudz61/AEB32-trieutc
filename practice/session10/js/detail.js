let elmBodyCard = document.getElementById("bodycard");
function convertCard(data) {
  let temp = `
    <div class="card col-3" style="width: 18rem">
<img
  src=${data.src}
  class="card-img-top img-thumbnail"
  alt="..."
/>
<div class="card-body">
  <h5 class="card-title">${data.card_title}</h5>
  <p class="card-text">
  ${data.card_text}
  </p>
  <a href="#" class="btn btn-primary">${data.card_btn}</a>
</div>
</div>
    `;
  return temp;
}
const urlParams = new URLSearchParams(window.location.search);
const id_ = urlParams.get("id");
let URL = "https://63a06bcf24d74f9fe837c129.mockapi.io/card/" + id_;
let tempDataCard = "";

const fetchDataCard = async (id_) => {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
  tempDataCard = convertCard(data);
  elmBodyCard.innerHTML = tempDataCard;
  return data;
};
fetchDataCard(id_);
