window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector("header").classList.add("header-fixed");
    document.getElementById("brand").style.display = "none";
  } else {
    document.querySelector("header").classList.remove("header-fixed");
    document.getElementById("brand").style.display = "block";
  }
};
