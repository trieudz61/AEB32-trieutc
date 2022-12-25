let getValueInputText = () => {
  let getFirstName = document.getElementById("firstname").value;
  let getLastName = document.getElementById("lastname").value;
  let getEmail = document.getElementById("email").value;
  let getAddress = document.getElementById("address").value;
  let getHobbies = document.getElementById("hobbies").value;
  let getAge = document.getElementById("age").value;
  addNewUser(
    getFirstName,
    getLastName,
    getEmail,
    getAddress,
    getHobbies,
    getAge
  );
};
let addNewUser = async (
  getFirstName,
  getLastName,
  getEmail,
  getAddress,
  getHobbies,
  getAge
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch("https://63a06bcf24d74f9fe837c129.mockapi.io/user", {
        method: "POST",
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
