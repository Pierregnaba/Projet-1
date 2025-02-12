document.getElementById("link").addEventListener("click", function (event) {
  event.preventDefault();
  const confirmation = window.confirm(
    "Vous allez être redirigé vers un autre site. Voulez-vous continuer ?"
  );
  if (confirmation) {
    window.location.href = this.href;
  }
});
