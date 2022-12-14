
let bai1 = () => {
    let data = prompt("nhap vao day so: ")
    let Array = data.split(" ")
    let j = Math.floor(Array.length)-1
    for(let i = 0 ; i<Math.floor(Array.length/2);i++){
        for(z = j ; z > Math.floor(Array.length/2);){
            if(Array[i]==Array[j]){
                j=j-1
                break
            }
            else{
                return console.log("FALSE")
            }
        }
    }
    console.log("TRUE")
}
 let bai2 = () => {
   
    let m = prompt("Nhap m")
    let n = prompt("Nhap n")
    let k = prompt("Nhap k")
    let count = 0
    let multiArray = []
    for(let i = 0 ; i < m ; i++){
        for (let j = 0; j<n; j++){
           let data= prompt("Nhap so ["+parseInt(i+1)+"]["+parseInt(j+1)+"]")    
           multiArray.push(data)
           if(k ===data){
            count++
           }
        }
    }
    console.log(count)
 }
 
 let bai3=() => {
   let N = prompt("Nhap N")
   let K = prompt("Nhap K")
   let data = []
   for(let i=0; i < N ; i++){
    let _data = prompt("Nhap so thu: "+parseInt(i+1))
    data.push(_data)
   }
   let temp = data[0]
   for (let i = 0 ; i < K ; i++){
         if(temp < parseInt(data[i])){
            temp = data[i]
    }
   }
   console.log(temp)
 }
