let arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;


numbers(arr);

function numbers(arr){

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            sum += arr[i] * arr[i]

        }
    }
    console.log(sum);
}

alert("Welcome Cavid Bashirov")
alert("Welcome Sunal Jabili")