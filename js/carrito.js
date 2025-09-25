document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    const buyButtons = document.querySelectorAll(".comprar");

    let count = 0;

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            count++;
            cartCount.textContent = count; // Actualizar el contador
        });
    });
});