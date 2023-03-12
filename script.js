const color = document.getElementById('colorPick');
const hexbox = document.getElementById('hex-box');
const copyHex = document.getElementById('copyHex');

function hexC() {
  hexbox.value = color.value;
  document.body.style.backgroundColor = color.value;
}

color.addEventListener('input', hexC);

/* Not Working, will work in next version
function copyFunc() {
  copyHex.select();
  navigator.clipboard.writeText(copyHex.value);
  alert("Hexcode Copied")
}
copyHex.addEventListener('click', copyFunc);
*/