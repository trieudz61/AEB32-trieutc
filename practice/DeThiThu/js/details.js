let elmDetailProduct = document.getElementById("body__ShowDetailProduct");
const urlParams = new URLSearchParams(window.location.search);
const id_ = urlParams.get("id");
let URL_ = "https://63a06bcf24d74f9fe837c129.mockapi.io/product/" + id_;
let getProductFromAPI = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(URL_, {
        method: "GET",
      }).then(async (res) => {
        let dataFromRES = await res.json();
        elmDetailProduct.innerHTML = convertJSToDetailProduct(dataFromRES);
      });
    } catch (error) {
      reject(error);
    }
  });
};

let convertJSToDetailProduct = (inputData) => {
  return `
    <div class="pt-4 p-lg-5 col-md-12 align-self-center">
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
    </div>
  </div>
    `;
};
getProductFromAPI();
