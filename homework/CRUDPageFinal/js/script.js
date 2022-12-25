const sidebar = document.querySelector(".sidebar");
const navItems = document.querySelectorAll("nav .nav-item");
const toggle = document.querySelector(".sidebar .toggle");

toggle.addEventListener("click", () => {
  if (sidebar.className === "sidebar") sidebar.classList.add("open");
  else sidebar.classList.remove("open");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });

    navItem.classList.add("active");
  });
});

const elmTableBody = document.getElementById("table__body");

let getUserFromAPI = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch("https://63a06bcf24d74f9fe837c129.mockapi.io/user", {
        method: "GET",
      }).then(async (res) => {
        let dataFromRES = await res.json();
        convertJStoDataTable(dataFromRES);
      });
    } catch (error) {
      reject(error);
    }
  });
};
getUserFromAPI();

let convertDataTable = (inputData) => {
  return `
  <tr>
  <td>${inputData.id}</td>
  <td>${inputData.firstname}</td>
  <td>${inputData.lastname}</td>
  <td>${inputData.email}</td>
  <td>
    <a href="./DetailUser.html?id=${inputData.id}" type="button" class="btn user__details">Detail</a>
    <a  href="./EditUser.html?id=${inputData.id}" type="button" class="btn user__edit">Edit</a>
    <a type="button" class="btn user__delete" onclick="deleteUser(${inputData.id})">Delete</a>
  </td>
  </tr>
    `;
};

let convertJStoDataTable = (inputData) => {
  let Temp = "";
  inputData.map((_inputData) => {
    Temp += convertDataTable(_inputData);
  });
  elmTableBody.innerHTML = Temp;
};

let deleteUser = async (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(
        "https://63a06bcf24d74f9fe837c129.mockapi.io/user/" + inputData,
        {
          method: "DELETE",
        }
      ).then(async (res) => {
        getUserFromAPI();
      });
    } catch (error) {
      reject(error);
    }
  });
};
