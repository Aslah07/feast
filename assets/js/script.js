const promoCards = document.querySelectorAll(".promo-card");
const svgElements = document.querySelectorAll(".svg-color");

function hoverEffectCard(promoCard, svgElement) {
  promoCard.addEventListener("mouseover", () => {
    promoCard.classList.add("hovereffect");
    svgElement.style.fill = "#fff";
  });

  promoCard.addEventListener("mouseout", () => {
    promoCard.classList.remove("hovereffect");
    svgElement.style.fill = "";
  });
}

promoCards.forEach((promoCard, index) => {
  const svgElement = svgElements[index];
  hoverEffectCard(promoCard, svgElement);
});
