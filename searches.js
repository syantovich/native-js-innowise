function binary (arr,element){
    let left =0;
    let right=arr.length-1;
 while (left<=right){
     let middle=Math.floor((left+right)/2);
     let middleElem=arr[middle];
     if(middleElem===element){
         return middle;
     }
     if(middleElem>element){
         right=middle-1;
     }else{
         left=middle+1;
     }


 }
 return undefined;

}
function bumbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let swap=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=swap;
            }
        }
    }
    return arr
}
let arr=[]
for(let i=0;i<100;i++){
    arr.push(Math.floor(Math.random()*1000))
}
console.log(arr)
arr=bumbleSort(arr);
console.log(binary(arr,37))
console.log(arr)

//дискрипторы
//структ
прото

let a=[{current:5,next:{current: 3,next:undefined}}]