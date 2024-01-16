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
let languageCookieValue3 = getCookieValue("Languagecookie");

const WorkText1 = document.getElementById('WorkText1');
const WorkText2 = document.getElementById('WorkText2');
const WorkText3 = document.getElementById('WorkText3');
const WorkText4 = document.getElementById('WorkText4');
const WorkText5 = document.getElementById('WorkText5');
const WorkText6 = document.getElementById('WorkText6');
const WorkText7 = document.getElementById('WorkText7');
const WorkText8 = document.getElementById('WorkText8');
const WorkText9 = document.getElementById('WorkText9');
const WorkText10 = document.getElementById('WorkText10');
const WorkText11 = document.getElementById('WorkText11');
const WorkText12 = document.getElementById('WorkText12');
const WorkText13 = document.getElementById('WorkText13');
const WorkText14 = document.getElementById('WorkText14');
const WorkText15 = document.getElementById('WorkText15');

if(languageCookieValue3 === "true"){
    /*en*/
    WorkText1.innerText = "The Process";
    WorkText2.innerText = "Design";
    WorkText3.innerText = "In the design phase, we emphasize a simple yet impactful design, incorporating meaningful visuals to perfectly represent your brand. Our objective is to turn website visitors into loyal customers by delivering a clear message through a sleek and engaging design.";
    WorkText4.innerText = "Developement";
    WorkText5.innerText = "During development, we prioritize swift loading times to keep pace with the fast world of social media. We ensure an intuitive interface, aiming to provide users with a sustained and exciting online experience.";
    WorkText6.innerText = "Management";
    WorkText7.innerText = "Our comprehensive management services ensure a seamless website experience. From maintenance and hosting to domain management, backups, security, and messaging, we offer a complete suite of solutions for worry-free website utilization.";
    WorkText8.innerText = "Pizzeria Tilo combines traditional flavors with a modern flair. Our website showcases the rich menu and provides information on current offers. With appealing design and intuitive navigation, we create an enticing online presence for pizza enthusiasts.";
    WorkText9.innerText = "fictitious brand";
    WorkText10.innerText = "SASAOVEE gear combines high-quality equipment with alpine charm. Explore the latest ski trends on the website, enhance your expertise with expert tips, and learn more about on-site services. With inspiring design and easy navigation, we provide an informative platform.";
    WorkText11.innerText = "fictitious brand";
    WorkText12.innerText = "Track Clafield combines functionality with fashionable flair. Explore the latest collections on the website, gain insider insights into tennis trends, and read player profiles. With inspiring design and easy navigation, we create an informative platform without any online shopping features.";
    WorkText13.innerText = "fictitious brand";
    WorkText14.innerText = "The Unterjockel ski resort promises an unparalleled mountain adventure. On the website, you'll find trail maps, weather reports, and event highlights. Learn more about the modern lifts and cozy cabins. With breathtaking design and easy navigation, we provide an informative platform for all winter sports enthusiasts.";
    WorkText15.innerText = "fictitious brand";
}
  
else{
    /*de*/
    WorkText1.innerText = "Der Prozess";
    WorkText2.innerText = "Design";
    WorkText3.innerText = "In der Designphase legen wir Wert auf ein einfaches, aber wirkungsvolles Design, das aussagekräftige visuelle Elemente integriert, um deine Marke perfekt zu repräsentieren. Unser Ziel ist es, Website-Besucher durch eine klare Botschaft und ein ansprechendes Design in treue Kunden zu verwandeln.";
    WorkText4.innerText = "Entwicklung";
    WorkText5.innerText = "Während der Entwicklung legen wir Wert auf schnelle Ladezeiten, um mit der schnelllebigen Welt der sozialen Medien Schritt zu halten. Wir gewährleisten eine intuitive Benutzeroberfläche und streben danach, den Nutzern ein kontinuierliches und aufregendes Online-Erlebnis zu bieten.";
    WorkText6.innerText = "Management";
    WorkText7.innerText = "Unsere umfassenden Management-Services gewährleisten eine reibungslose Website-Erfahrung. Von Wartung und Hosting über Domain-Verwaltung, Backups, Sicherheit bis hin zur Nachrichtenübermittlung bieten wir eine vollständige Palette von Lösungen für eine sorgenfreie Nutzung der Website.";
    WorkText8.innerText = "Die Pizzeria Tilo vereint traditionelle Aromen mit modernem Flair. Unsere Webseite präsentiert das reichhaltige Menü und informiert über aktuelle Angebote. Mit ansprechendem Design und intuitiver Navigation schaffen wir eine verlockende Online-Präsenz für Pizza-Liebhaber.";
    WorkText9.innerText = "fiktive marke";
    WorkText10.innerText = "SASAOVEE gear verbindet hochwertige Ausrüstung mit alpinem Charme. Entdecke auf der Webseite die neuesten Skitrends, erweitere dein Fachwissen mit Expertentipps und erfahre mehr über den Services vor Ort. Mit inspirierendem Design und leichter Navigation bieten wir eine informative Plattform.";
    WorkText11.innerText = "fiktive marke";
    WorkText12.innerText = "Track Clafield vereint Funktionalität mit modischem Flair. Entdecken Sie auf der Webseite die neuesten Kollektionen, erhalten Sie Insider-Einblicke in Tennis-Trends und lesen Sie Spielerporträts. Mit inspirierendem Design und leichter Navigation schaffen wir eine informative Plattform ganz ohne Online-Shop-Funktionen.";
    WorkText13.innerText = "fiktive marke";
    WorkText14.innerText = "Das Skigebiet Unterjockel verspricht unvergleichliches Bergabenteuer. Auf der Webseite findest du Pistenkarten, Wetterberichte, und Event-Highlights. Erfahre mehr über die modernen Lifte und gemütlichen Hütten. Mit atemberaubendem Design und leichter Navigation bieten wir eine informative Plattform für alle Wintersportbegeisterten.";
    WorkText15.innerText = "fiktive marke";
}