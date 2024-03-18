
const addButtons = document.querySelectorAll(".add");
const removeButtons = document.querySelectorAll(".remove");
const totalElement = document.querySelector("#total");

let total = 0;



function updateTotal() {
    totalElement.textContent = `Total: ${total}`;
}

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        total += 1;
        updateTotal();
    });
});

removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (total > 0) {
            total -= 1;
            updateTotal();
        }
    });
});




// addButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     total += 1;
//     console.log(`Total: ${total}`);
//   });
// });

// removeButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (total > 0) {
//       total -= 1;
//       console.log(`Total: ${total}`);
//     }
//   });
// });