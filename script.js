window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  const maxScroll = 700;

  let marginTop = Math.min(scrollY, maxScroll);
  let leafTop = Math.min(scrollY * -1.5, maxScroll);
  let leafLeft = Math.min(scrollY * 1.5, maxScroll);
  let hill5Left = Math.min(scrollY * 1.2, maxScroll);
  let hill4Left = Math.min(scrollY * -1.2, maxScroll);
  let hill1Top = Math.min(scrollY * 0.5, maxScroll);

  document.getElementById("text").style.marginTop = marginTop + "px";
  document.getElementById("leaf").style.top = leafTop + "px";
  document.getElementById("leaf").style.left = leafLeft + "px";
  document.getElementById("hill5").style.left = hill5Left + "px";
  document.getElementById("hill4").style.left = hill4Left + "px";
  document.getElementById("hill1").style.top = hill1Top + "px";
});
