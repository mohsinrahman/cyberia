/* Gömmer hamburgarikonen och aktiverar den gömda menyn */
function navOpen() {
	document.getElementById("navicon").style.display = "none";
    document.getElementById("sideNav").style.width = "100%";
    document.getElementById("sideNav").style.display = "block";
    document.getElementById("closeicon").style.display = "flex";
}
/* Gömmer menyn och kryss-ikonen */
function navClose() {
    document.getElementById("sideNav").style.display = "none";
     document.getElementById("closeicon").style.display = "none";
     document.getElementById("navicon").style.display = "flex";
}