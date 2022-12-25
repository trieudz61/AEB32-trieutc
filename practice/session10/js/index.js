let elmTable = document.getElementById("body__Table");
const fetchData = async () => {
  let tableData = "";

  const res = await fetch("https://63a06bcf24d74f9fe837c129.mockapi.io/user");
  const data = await res.json();
  data.map((_data) => {
    tableData += convertTableFromJson(_data);
    elmTable.innerHTML = tableData;
  });

  return res;
};
const deleteData = async (data) => {
  const res = await fetch(
    "https://63a06bcf24d74f9fe837c129.mockapi.io/user/" + data,
    {
      method: "DELETE",
    }
  );
  fetchData();
};

let convertTableFromJson = (data) => {
  return `
  <tr>
  <td><a href="./detail.html?id=${data.id}" style="text-decoration:none">${data.id}</a></td>
  <td>${data.firstname}</td>
  <td>${data.lastname}</td>
  <td>${data.email}</td>
  <td>
    <button class="btn btn-success"><a href="./detail.html?id=${data.id}"  style="text-decoration:none;color:white;" >Detail</a></button>
    <button class="btn btn-danger" onclick="deleteData(${data.id})">Delete</button>
  </td>
</tr>
  `;
};
fetchData();
