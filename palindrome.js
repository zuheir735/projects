function palindrome (str) {
    var input= str.replace(/[^A-Z0-9]/ig,"").toLowerCase()
    var reversed = str.split("").reverse().join('')
    if (input==reversed){
        console.log(str + " is a palindrome")
    }
    else{
        console.log(str + "is not a palindrome")

    }
}

palindrome("zuheir")

