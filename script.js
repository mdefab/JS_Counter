const buttonChangers = document.querySelectorAll(".btn");
const counterNumber = document.getElementById("number");
const incrementBox = document.getElementById("increment");

let counter = 0;

buttonChangers.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        e.preventDefault();
        const increment = Number(incrementBox.value);
        console.log(increment)
        switch(btn.value){
            case "increase":
                counter+=increment
                counterNumber.innerHTML = counter;
                break;
            case "decrease":
                counter -=increment;
                counterNumber.innerHTML = counter;
                break;
            case "reset":
                counter = 0;
                counterNumber.innerHTML = counter;
                break; 
    };
});
});