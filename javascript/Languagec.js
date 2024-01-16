
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
let languageCookieValue2 = getCookieValue("Languagecookie");

const ContactText1 = document.getElementById('ContactText1');
const ContactText2 = document.getElementById('ContactText2');

if(languageCookieValue2 === "true"){
    /*en*/
    ContactText1.innerText = "I have taken note of the privacy policy and agree that my details provided through the contact form may be collected and processed for the purpose of handling my request.";
    ContactText2.innerText = "Send Message";
}
  
else{
    /*de*/
    ContactText1.innerText = "Ich habe die Datenschutzrichtlinie zur Kenntnis genommen und stimme zu, dass meine über das Kontaktformular bereitgestellten Informationen zum Zweck der Bearbeitung meiner Anfrage erfasst und verarbeitet werden dürfen.";
    ContactText2.innerText = "Abschicken";
}