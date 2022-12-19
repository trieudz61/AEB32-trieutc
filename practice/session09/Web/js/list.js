let elmBodyTable = document.getElementById("table-body-table");
let listUser = [
  {
    id: 1,
    firstName: "Trieu",
    lastName: "Tran",
    email: "Name@example.com",
  },
  {
    id: 2,
    firstName: "Hoa",
    lastName: "Tran",
    email: "Kito@example.com",
  },
  {
    id: 3,
    firstName: "Minh",
    lastName: "Tran",
    email: "Rono@example.com",
  },
];

function formatUser(user) {
  let stringTr = `<tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
    </tr>
    `;
  return stringTr;
}

let tempRow = "";
listUser.map((user) => {
  tempRow += formatUser(user);
});

elmBodyTable.innerHTML = tempRow;
