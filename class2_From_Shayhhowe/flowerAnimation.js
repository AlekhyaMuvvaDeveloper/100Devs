const petals = document.querySelectorAll(".petal");

petals.forEach((petal, i) => {
    petal.style.setProperty("--i", i);
});

console.log("inside javascript");