
document.addEventListener("DOMContentLoaded", function () {
    
    let container = document.createElement("div");
    container.classList.add("d-flex", "flex-wrap", "justify-content-around", "align-items-start");
    document.body.appendChild(container);

    for (let i = 1; i <= 100; i++) {
      let element = document.createElement("div");
      element.classList.add("p-3", "m-3", "border", "rounded", "text-center");

      if (i % 3 === 0 && i % 5 === 0) {
        element.textContent = "FizzBuzz";
        element.classList.add("bg-info", "text-white");
      } else if (i % 3 === 0) {
        element.textContent = "Fizz";
        element.classList.add("bg-warning");
      } else if (i % 5 === 0) {
        element.textContent = "Buzz";
        element.classList.add("bg-primary", "text-white");
      } else {
        element.textContent = i;
        element.classList.add("bg-light");
      }

      container.appendChild(element);
    }
  });