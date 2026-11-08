window.dataLayer = window.dataLayer || [];
window.gtag = function () {
  window.dataLayer.push(arguments);
};

window.gtag("js", new Date());
window.gtag("config", "G-C8HSJJ6TV8");

const analyticsScript = document.createElement("script");
analyticsScript.async = true;
analyticsScript.src =
  "https://www.googletagmanager.com/gtag/js?id=G-C8HSJJ6TV8";
document.head.appendChild(analyticsScript);
