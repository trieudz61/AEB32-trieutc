let elmDetailUser = document.getElementById("container__DetailUser");
let elmEditUser = document.getElementById("container__editUser");
const urlParams = new URLSearchParams(window.location.search);
const id_ = urlParams.get("id");
console.log(id_);
let URL_ = "https://63a06bcf24d74f9fe837c129.mockapi.io/user/" + id_;
console.log(URL_);
let convertDataDetailUser = (inputData) => {
  return `
  <div class="avt" style="flex: 0.5">
          <img
            class="avatar_user"
            src="${inputData.image}"
            alt="avatar User"
          />
        </div>
        <div style="flex: 0.5">
          <div class="infor_User"><div class="infor_User2">Name:${inputData.firstname}</div></div>
          <div class="infor_User"><div class="infor_User2">Age:${inputData.age}</div></div>
          <div class="infor_User"><div class="infor_User2">Hobbies:${inputData.hobbies}</div></div>
          <div class="infor_User"><div class="infor_User2">Address:${inputData.address}</div></div>
        </div>
  `;
};
let getUserFromAPI_ = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(URL_, {
        method: "GET",
      }).then(async (res) => {
        let dataFromRES = await res.json();
        console.log(dataFromRES);
        elmDetailUser.innerHTML = convertDataDetailUser(dataFromRES);
        elmEditUser.innerHTML = convertDataUser(dataFromRES);
      });
    } catch (error) {
      reject(error);
    }
  });
};
getUserFromAPI_();

let convertDataUser = (inputData) => {
  return `
  <div class="input__user">
    <p>First Name</p>
    <input type="text" id="firstname" value="${inputData.firstname}" />
  </div>
  <div class="input__user">
    <p>Last Name</p>
    <input type="text" id="lastname" value="${inputData.lastname}" />
  </div>
  <div class="input__user">
    <p>Email</p>
    <input type="text" id="email" value="${inputData.email}" />
  </div>
  <div class="input__user">
    <p>Address</p>
    <input type="text" id="address" value="${inputData.address}" />
  </div>
  <div class="input__user">
    <p>Hobbies</p>
    <input type="text" id="hobbies" value="${inputData.hobbies}" />
  </div>
  <div class="input__user">
    <p>Age</p>
    <input type="text" id="age" value="${inputData.age}" />
  </div>
  <div>
    <button class="btn__submit" onclick="getValueInputText()">Submit</button>
  </div>
  `;
};

let _getUserFromAPI_ = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(URL_, {
        method: "GET",
      }).then(async (res) => {
        let dataFromRES = await res.json();
        console.log(dataFromRES);
        elmEditUser.innerHTML = convertDataUser(dataFromRES);
      });
    } catch (error) {
      reject(error);
    }
  });
};
_getUserFromAPI_();

let getValueInputText = () => {
  let getFirstName = document.getElementById("firstname").value;
  let getLastName = document.getElementById("lastname").value;
  let getEmail = document.getElementById("email").value;
  let getAddress = document.getElementById("address").value;
  let getHobbies = document.getElementById("hobbies").value;
  let getAge = document.getElementById("age").value;
  putUserEdit(
    getFirstName,
    getLastName,
    getEmail,
    getAddress,
    getHobbies,
    getAge
  );
};
let putUserEdit = async (
  getFirstName,
  getLastName,
  getEmail,
  getAddress,
  getHobbies,
  getAge
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(URL_, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: getFirstName,
          lastname: getLastName,
          email: getEmail,
          address: getAddress,
          hobbies: getHobbies,
          age: getAge,
        }),
      }).then((res) => {
        window.open("./ShowListUser.html");
      });
    } catch (error) {
      reject(error);
    }
  });
};
