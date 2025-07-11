// Hiện nút khi cuộn xuống 100px
window.onscroll = function () {
  var btn = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Click nút thì cuộn về đầu
document.getElementById("backToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
