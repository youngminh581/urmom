let button = document.getElementById("urmom")
let word = document.getElementById("word")
let result = document.getElementById("result")


const reverse = (input) => {
    let reverse = ""

    for (let i = input.length - 1;i >= 0; i--) {
        reverse += input[i]
    }


    return reverse
}



button.addEventListener("click", () => {
    if(!word.value)
    {
        prompt("give a word")
        return
    }
    result.innerText = ""
    result.innerText = reverse(word.value)
}) 





