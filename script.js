const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#Weight").value);
   const result = document.querySelector("#result");
   const expl = document.querySelector("#expl");

   if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid Height ${height}`
    result.style.color = "red";;
   } else if (weight === " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid Height ${weight}`;
    result.style.color = "red";
   } else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);

    if (bmi <= 18.6){
    expl.innerHTML = '<span>You are under weight</span>';
    expl.style.color ="red";
    result.style.color = "red";
    } else if (bmi >= 18.6 || bmi < 24.9){
        expl.innerHTML = "<span>Your weight is Normal</span>";
        expl.style.color ="aquamarine";
        result.style.color = "aquamarine";
    }else{
        expl.innerHTML = "<span>Your are over weight</span>";
        expl.style.color ="red";
        result.style.color = "red";
    }

    // show the result

    result.innerHTML = `<span>${bmi}</span>`;
   }
})


