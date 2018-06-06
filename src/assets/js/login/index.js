function etc() {
  alert("Hello");
}
function alertar() {
  var btn = document.getElementById('btn-login');
  btn.addEventListener('click',etc, false);
}
document.onload=alertar();
