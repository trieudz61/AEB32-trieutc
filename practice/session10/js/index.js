let tableData = "";
let elmTable = document.getElementById("body__Table");
const fetchData = async () => {
  const res = await fetch("https://63a06bcf24d74f9fe837c129.mockapi.io/user");
  const data = await res.json();
  data.map((_data) => {
    tableData += convertTableFromJson(_data);
    elmTable.innerHTML = tableData;
  });

  return data;
};

let convertTableFromJson = (data) => {
  return `
  <tr>
  <td><a href="./detail.html?id=${data.id}" style="text-decoration:none">${data.id}</a></td>
  <td>${data.firstname}</td>
  <td>${data.lastname}</td>
  <td>${data.email}</td>
</tr>
  `;
};
fetchData();
