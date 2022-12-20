let elmTableData = document.getElementById("tableData");
console.log(elmTableData);
let formatData = (data) => {
  return `
  <tr>
  <td>${data.job}</td>
  <td>${data.monday}</td>
  <td>${data.tuesday}</td>
  <td>${data.wednesday}</td>
  <td>${data.thursday}</td>
  <td>${data.friday}</td>
  <td>${data.saturday}</td>
  <td>${data.sunday}</td>
</tr>
  `;
};

let listData = [
  {
    job: "YOGA",
    monday: "07:00-08:00",
    tuesday: "-",
    wednesday: "-",
    thursday: "15:00-17:00",
    friday: "-",
    saturday: "09:00-11:00",
    sunday: "-",
  },
  {
    job: "PILATES",
    monday: "07:00-08:00",
    tuesday: "-",
    wednesday: "-",
    thursday: "15:00-17:00",
    friday: "-",
    saturday: "09:00-11:00",
    sunday: "-",
  },
  {
    job: "CROSSFIT",
    monday: "07:00-08:00",
    tuesday: "-",
    wednesday: "-",
    thursday: "15:00-17:00",
    friday: "-",
    saturday: "09:00-11:00",
    sunday: "-",
  },
  {
    job: "CARDIO",
    monday: "07:00-08:00",
    tuesday: "-",
    wednesday: "-",
    thursday: "15:00-17:00",
    friday: "-",
    saturday: "09:00-11:00",
    sunday: "-",
  },
  {
    job: "ZUMBA",
    monday: "07:00-08:00",
    tuesday: "-",
    wednesday: "-",
    thursday: "15:00-17:00",
    friday: "-",
    saturday: "09:00-11:00",
    sunday: "-",
  },
  {
    job: "BOXING",
    monday: "07:00-08:00",
    tuesday: "-",
    wednesday: "-",
    thursday: "15:00-17:00",
    friday: "-",
    saturday: "09:00-11:00",
    sunday: "-",
  },
];
let tempData_ = "";
let tempData = listData.map((data) => {
  tempData_ += formatData(data);
});

elmTableData.innerHTML = tempData_;
