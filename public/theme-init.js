(function () {
  const theme = localStorage.getItem("portfolio-theme");
  if (theme === "dark" || (!theme && true)) {
    document.documentElement.classList.add("dark");
  }
})();
