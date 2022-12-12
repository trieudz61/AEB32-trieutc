//Bai1
function Gapdoi(){
    let a = prompt("Nhap so A : ")
    console.log(a*2)    
}
//BaiChanLe nè đại ca
function CheckChanLe(){
    let b = prompt("Nhap so can check : ")
    if(b%2==1){
        console.log( b + ' Day la so le')
    }
    else{
        console.log(b+ ' Day la so chan')
    }  
}
//Bai2
function min (){
    let a = prompt("Nhap số thứ nhất : ")
    let b = prompt("Nhap số thứ hai : ")
    let c = prompt("Nhap số thứ ba : ")
    let d = prompt("Nhap số thứ tư : ")
    let arr = [a,b,c,d]
    let min = a
    for (let i=1;i<arr.length;i++){
        if(min>arr[i])
            min=arr[i]
    }
    console.log(min)
}
//Bai3
function countDivide(){
    let input = prompt("Nhập Số cần check: ")
    let _input =Math.floor((input-1)/2)
    console.log(_input)
}
//Bai4
function HangChucHangDV(){
    let input=''
    while(true){
        input = prompt("Nhập Số có 2 chữ số cần check: ")
        if(input>99||input<1){
            continue
        }else{
            break
        }
    }
    let hangchuc = Math.floor(input/10)
    let hangdonvi = input%10
    console.log("Hang chuc: "+hangchuc +" Hang don vi: "+hangdonvi)
}

//Bai5
function checkSoNguyenTo(){
    let input = prompt("Nhập Số cần check: ")
    let temp = 0 
    for (let i = 0 ; i <= Math.floor(input/2);i++){
        if(input%i==0){
            temp++
        }
    }
    if(temp>2){
        console.log("Đây không phải số Nguyên Tố")
    }
    else{
        console.log("Đây là số Nguyên Tố")
    }
}
//Bai6
function uocChungLonNhat(){
    let a = prompt("Nhập số thứ nhất: ")
    let b = prompt("Nhập số thứ hai: ")
    let temp = []
    let temp2 = []
    for (let i = 0 ; i <= a;i++){
        if(a%i==0){
            temp.push(i)
        }
    }
    for (let i = 0 ; i <= b;i++){
        if(b%i==0){
            temp2.push(i)
        }
    }
    let tempResult=[]
    for(let j = 0; j<=temp.length;j++){
        for(let z = 0; z<=temp2.length;z++){
            if(temp[j]==temp2[z]){
                tempResult.push(temp[j])
            }
        }
    }
    let max = tempResult[0]
    for(let i = 0; i<=tempResult.length;i++){
        if(max<tempResult[i])
        max=tempResult[i]
    }
    console.log(max)
}
//Bai7
