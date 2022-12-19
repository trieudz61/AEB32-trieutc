let elmBodyCard = document.getElementById("bodycard");
console.log(elmBodyCard);
let listCard = [
  {
    src: "https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png",
    card_title: "Premium",
    card_text: "Bla bla 123",
    card_btn: "ABC",
  },
  {
    src: "https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png",
    card_title: "Premium",
    card_text: "Bla bla 123",
    card_btn: "ABC",
  },
  {
    src: "https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png",
    card_title: "Premium",
    card_text: "Bla bla 123",
    card_btn: "ABC",
  },
  {
    src: "https://bietmaytinh.com/wp-content/uploads/2021/06/cach-cat-anh-hinh-vuong-4.png",
    card_title: "Premium",
    card_text: "Bla bla 123",
    card_btn: "ABC",
  },
];
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
let tempDataCard = "";
let amountDataCard = listCard.map((_data) => {
  tempDataCard += convertCard(_data);
});
elmBodyCard.innerHTML = tempDataCard;
