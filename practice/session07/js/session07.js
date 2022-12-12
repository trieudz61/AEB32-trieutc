//Bai1
function gapDoi() {
  let a = prompt("Nhap so A : ");
  console.log(a * 2);
}
//BaiChanLe nè đại ca
function checkChanle() {
  let b = prompt("Nhap so can check : ");
  if (b % 2 === 1) {
    console.log(b + " Day la so le");
  } else {
    console.log(b + " Day la so chan");
  }
}
//Bai2
function min() {
  let a = prompt("Nhap số thứ nhất : ");
  let b = prompt("Nhap số thứ hai : ");
  let c = prompt("Nhap số thứ ba : ");
  let d = prompt("Nhap số thứ tư : ");
  let arr = [a, b, c, d];
  let min = a;
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  console.log(min);
}
//Bai3
function countDivide() {
  let input = prompt("Nhập Số cần check: ");
  let _input = Math.floor((input - 1) / 2);
  console.log(_input);
}
//Bai4
function hangChuchangdv() {
  let input = "";
  while (true) {
    input = prompt("Nhập Số có 2 chữ số cần check: ");
    if (input > 99 || input < 1) {
      continue;
    } else {
      break;
    }
  }
  let hangchuc = Math.floor(input / 10);
  let hangdonvi = input % 10;
  console.log("Hang chuc: " + hangchuc + " Hang don vi: " + hangdonvi);
}

//Bai5
function checkSoNguyenTo() {
  let input = prompt("Nhập Số cần check: ");
  let temp = 0;
  for (let i = 0; i <= Math.floor(input / 2); i++) {
    if (input % i === 0) {
      temp++;
    }
  }
  if (temp > 2) {
    console.log("Đây không phải số Nguyên Tố");
  } else {
    console.log("Đây là số Nguyên Tố");
  }
}
//Bai6
function uocChunglonnhat() {
  let a = prompt("Nhập số thứ nhất: ");
  let b = prompt("Nhập số thứ hai: ");
  let temp = [];
  let temp2 = [];
  for (let i = 0; i <= a; i++) {
    if (a % i === 0) {
      temp.push(i);
    }
  }
  for (let i = 0; i <= b; i++) {
    if (b % i === 0) {
      temp2.push(i);
    }
  }
  let tempResult = [];
  for (let j = 0; j <= temp.length; j++) {
    for (let z = 0; z <= temp2.length; z++) {
      if (temp[j] === temp2[z]) {
        tempResult.push(temp[j]);
      }
    }
  }
  let max = tempResult[0];
  for (let i = 0; i <= tempResult.length; i++) {
    if (max < tempResult[i]) max = tempResult[i];
  }
  console.log(max);
}
//Bai7
function isUpperCase(myString) {
  return myString === myString.toUpperCase();
}
function changeText() {
  let strings = prompt("Nhập chuỗi đi bạn yêu: ");
  var character = "";
  let temp = Array.from(strings);
  for (let i = 0; i < temp.length; i++) {
    if (isUpperCase(temp[i])) {
      character = character + temp[i].toLowerCase();
    } else {
      character = character + temp[i].toUpperCase();
    }
  }
  console.log(character);
}
//Bai8
function convertHash() {
  let strings = prompt("Nhập chuỗi đi bạn yêu: ");
  let convertString = strings.split(" ");
  let result = "";
  for (let i = 0; i < convertString.length; i++) {
    result = result + countString(convertString[i]);
  }
  console.log(result);
}
function countString(strings) {
  let temp = Array.from(strings);
  return temp.length + " ";
}
//Bai9
function dem() {
  let data = prompt("Nhập số cần phân tích đi bạn yêu: ");
  console.log(thuaSoNguyenTo(data));
  console.log(demSoUoc(data));
}
function demSoUoc(input) {
  let count = null;
  for (let i = 0; i <= input; i++) {
    if (input % i === 0) {
      count++;
    }
  }
  return count;
}
function thuaSoNguyenTo(input) {
  let string = "";
  let data = input;
  let temp = null;
  while (true) {
    temp = data;
    for (let i = 2; i <= data; i++) {
      if (data % i == 0) {
        data = data / i;
        string = string + i + "*";
        break;
      }
    }
    if (temp === 1) {
      break;
    }
  }
  console.log(string.substring(0, string.length - 1));
}
//Bai10
function banXangDao(){
    let xang = null
    while(true){
        xang = parseFloat(prompt("Muốn mua bao nhiêu lít xăng đại ca? chúng tôi chỉ bắn xăng chẵn không thích bán xăng lẻ!"))
        if(xang==Math.floor(xang)){
            break
        }
        else{
            alert("Nhập cho đúng không là đứng tại quầy luôn!")
        }
    }
    let giaXang1l=parseFloat(prompt("1 lít bán với giá: "))
    let giaXang2l=parseFloat(prompt("2 lít bán với giá: "))
    let cashXang=null
    if(giaXang1l<(giaXang2l/2)){
        cashXang = giaXang1l*xang
    }else{
        if(xang%2===0){
            cashXang = toiUu1(xang)*giaXang2l 
        }
        else{
            cashXang = toiUu1(xang)*giaXang2l + giaXang1l
        }
    }
    console.log("Số tiền ít nhất cần trả là: "+ cashXang)
}

function toiUu1(xang){
    return parseFloat(Math.floor(xang/2))
}