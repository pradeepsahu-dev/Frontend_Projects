const display = document.querySelector("input")
let button = document.querySelectorAll("button");
   

button.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
      
        let value = btn.innerText;
        console.log(value);


        if(value === "C"){
            display.value ="";

        }

        else if(value === "DEL"){
            display.value = display.value.slice(0, -1);
        }

        else if(value === "=") {
             display.value = eval(display.value);

        }

        else{
            display.value += value;
        }
    });
});

