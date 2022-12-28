let elmBodyList = document.getElementById("body__ShowList");

let convertJSToDataList = (inputData) => {
  return `
  <div class="pt-4 p-lg-5 col-md-4 align-self-center">
  <div class="card" style="width: 18rem">
    <img src="${inputData.image}" class="card-img-top thumbnail" alt="${inputData.image}" />
    <div class="card-body">
      <h5 class="card-title">Title: ${inputData.cardtitle}</h5>
      <p class="card-text">
      Desciption: ${inputData.desciption}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Price: ${inputData.price}$</li>
    </ul>
    <div class="card-body">
      <a href="detail.html?id=${inputData.id}" class="card-link">Detail Product</a>
    </div>
  </div>
</div>
  `;
};

let getProductFromMock = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch("https://63a06bcf24d74f9fe837c129.mockapi.io/product", {
        method: "GET",
      }).then(async (res) => {
        let dataFromReq = await res.json();
        convertJStoDataCard(dataFromReq);
      });
    } catch (error) {
      reject(error);
    }
  });
};
let convertJStoDataCard = (inputData) => {
  let Temp = "";
  inputData.map((_inputData) => {
    Temp += convertJSToDataList(_inputData);
  });
  elmBodyList.innerHTML = Temp;
};
getProductFromMock();
let goToHomePage = () => {
  window.location.href = "../views/home.html";
};

let goToList = () => {
  window.location.href = "../views/list.html";
};
