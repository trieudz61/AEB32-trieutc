let bai1 = () => {
  let data = prompt("nhap vao day so: ");
  let Array = data.split(" ");
  let j = Math.floor(Array.length) - 1;
  for (let i = 0; i < Math.floor(Array.length / 2); i++) {
    for (z = j; z > Math.floor(Array.length / 2); ) {
      if (Array[i] == Array[j]) {
        j = j - 1;
        break;
      } else {
        return console.log("FALSE");
      }
    }
  }
  console.log("TRUE");
};
let bai2 = () => {
  let m = prompt("Nhap m");
  let n = prompt("Nhap n");
  let k = prompt("Nhap k");
  let count = 0;
  let multiArray = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let data = prompt(
        "Nhap so [" + parseInt(i + 1) + "][" + parseInt(j + 1) + "]"
      );
      multiArray.push(data);
      if (k === data) {
        count++;
      }
    }
  }
  console.log(count);
};

let bai3 = () => {
  let N = prompt("Nhap N");
  let K = prompt("Nhap K");
  let data = [];
  for (let i = 0; i < N; i++) {
    let _data = prompt("Nhap so thu: " + parseInt(i + 1));
    data.push(_data);
  }
  let temp = data[0];
  for (let i = 0; i < K; i++) {
    if (temp < parseInt(data[i])) {
      temp = data[i];
    }
  }
  console.log(temp);
};
let bai4 = () => {
  let data = prompt("Nhap so chu so : ");
  for (let i = 0; i < data; i++) {
    let count = 0;
    let _data = prompt("Nhap so thu " + parseInt(i + 1));
    count = parseInt(count) + parseInt(countNumber(_data));
    console.log(count);
  }
};
let countNumber = (data) => {
  let temp = String(data).split("");
  let count = 0;
  for (let _temp of temp) {
    count += parseInt(_temp);
  }
  return count;
};

let Bai5 = () => {
  let k = 3; // tuong manh thu 2
  let exam = [1, 2];
  let exam2 = [3, 2];
  let exam3 = [1, 3];
  let ARR = new Array();
  ARR.push(exam);
  ARR.push(exam2);
  ARR.push(exam3);
  let ARR2 = new Array();
  let STOP = ARR.length;
  // ý tưởng là sẽ tìm phần tử sát thương vật lý lớn nhất trong mảng ARR , để đặt vào ARR2 ,
  //sau đó xóa phần tử đó đi trong ARR, và bắt đầu lại vòng lặp để tìm phần tử lớn thứ 2 trong ARR để đặt vào ARR2 và tương tự đến kết thúc
  while (true) {
    let TEMP = 0;
    TEMP = ARR[0][0];
    let COUNT = 0;
    let i = 0;
    for (i = 0; i < ARR.length; i++) {
      if (TEMP < parseInt(ARR[i][0])) {
        TEMP = parseInt(ARR[i][0]);
      }
    }
    let MAX = TEMP;

    for (let j = 0; j < ARR.length; j++) {
      if (ARR[j][0] === MAX) {
        break;
      }
      COUNT++;
    }
    ARR2.push(ARR[COUNT]);
    ARR.splice(COUNT, 1);
    if (ARR2.length == STOP) {
      break;
    }
  }
  // kết quả ta được 1 mảng ARR2 đã sắp xếp theo sát thương vật lý giờ sắp xếp theo sắp thương phép thuật
  // tiếp theo là so sánh sát thương phép thuật trong mảng ARR2(sắp xếp lại những phần tử có sức mạnh vật lý bằng nhau thôi)

  for (let i = 0; i < ARR2.length - 1; i++) {
    for (let j = i + 1; j < ARR2.length; j++) {
      if (ARR2[i][1] < ARR2[j][1] && ARR2[j][0] == ARR2[i][0]) {
        let t = ARR2[i][1];
        let z = ARR2[j][1];
        ARR2[i][1] = z;
        ARR2[j][1] = t;
      }
    }
  }
  console.log(ARR2[k - 1][0] + " " + ARR2[k - 1][1]);
};
Bai5();
