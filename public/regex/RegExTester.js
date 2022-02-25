function testRegEx() { 
    let result = document.querySelector("p");
    let txt = document.getElementById("txt").value;
    let regex = new RegExp(document.getElementById("exp").value);

    console.log(regex.test(txt));

    if (regex.test(txt)){
        result.innerText = "True";
    }

    else{
        result.innerText = "False";
    }


}