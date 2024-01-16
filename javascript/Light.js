
function getcookieValue(cName){
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split("; ");
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
}
let lightCookieValue = getcookieValue("Lightcookie");

if (lightCookieValue === "true") {
    document.documentElement.style.setProperty("--col-1-", "rgb(180, 180, 180)");
    document.documentElement.style.setProperty("--col-2-", "rgb(25, 25, 25)");
} else {
    document.documentElement.style.setProperty("--col-1-", "rgb(240, 240, 240)");
    document.documentElement.style.setProperty("--col-2-", "rgb(5, 5, 5)");
}