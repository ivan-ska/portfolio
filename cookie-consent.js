document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookie_consent")) {
    const popupHTML = `
      <section class="popup">
        <div class="popup-container">
          <p>I use analytics and cookies on the website</p>
          <a href="#" class="popup-button">OK</a>
        </div>
      </section>
    `;
    document.body.insertAdjacentHTML("beforeend", popupHTML);
  }

  const popup = document.querySelector(".popup");
  if (!popup) {
    loadGoogleAnalytics();
    return;
  }

  const okButton = popup.querySelector(".popup-button");

  okButton.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("cookie_consent", "true");
    popup.remove();
    loadGoogleAnalytics();
  });

  function loadGoogleAnalytics() {
    if (window.gtag) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-JVPDNKRWWT";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-JVPDNKRWWT");
    };
  }
});
