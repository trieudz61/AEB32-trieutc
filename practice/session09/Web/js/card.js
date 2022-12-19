let elmBodyCard = document.getElementById("bodycard");
let listCard = [
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Senior Operations Technician",
    card_text: "Aleen_Weissnat",
    card_btn: "Southeast",
    id: "1",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Dynamic Research Administrator",
    card_text: "Zoey60",
    card_btn: "North",
    id: "2",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Corporate Research Executive",
    card_text: "Timmothy56",
    card_btn: "Northwest",
    id: "3",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Legacy Applications Designer",
    card_text: "Ellsworth.Okuneva37",
    card_btn: "East",
    id: "4",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Regional Functionality Liaison",
    card_text: "Sheridan26",
    card_btn: "Northwest",
    id: "5",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "District Markets Assistant",
    card_text: "Clair.Stroman",
    card_btn: "Southwest",
    id: "6",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Principal Optimization Facilitator",
    card_text: "Craig51",
    card_btn: "North",
    id: "7",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "National Solutions Facilitator",
    card_text: "Dannie_Wiza",
    card_btn: "Northwest",
    id: "8",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Investor Response Assistant",
    card_text: "Torrey_Smitham83",
    card_btn: "East",
    id: "9",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Regional Mobility Coordinator",
    card_text: "Kristopher71",
    card_btn: "Northwest",
    id: "10",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Dynamic Research Designer",
    card_text: "Octavia.Bode44",
    card_btn: "West",
    id: "11",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Investor Metrics Engineer",
    card_text: "Sammie_Beer",
    card_btn: "Northwest",
    id: "12",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Legacy Mobility Executive",
    card_text: "Gwendolyn_Miller43",
    card_btn: "Northeast",
    id: "13",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Senior Web Producer",
    card_text: "Burley_Smith",
    card_btn: "Southeast",
    id: "14",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Product Tactics Producer",
    card_text: "Yazmin.Murphy",
    card_btn: "Southwest",
    id: "15",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "Internal Division Agent",
    card_text: "Darien92",
    card_btn: "Southwest",
    id: "16",
  },
  {
    src: "https://loremflickr.com/640/480/food",
    card_title: "National Quality Engineer",
    card_text: "Germaine_Boehm53",
    card_btn: "Northwest",
    id: "17",
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
