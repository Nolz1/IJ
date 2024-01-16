
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
let languageCookieValue = getCookieValue("Languagecookie");

const HeadText1 = document.getElementById('HeadText1');
const HeadText2 = document.getElementById('HeadText2');
const HeadText3 = document.getElementById('HeadText3');

const FootText1 = document.getElementById('FootText1');
const FootText2 = document.getElementById('FootText2');
const FootText3 = document.getElementById('FootText3');
const FootText4 = document.getElementById('FootText4');
const FootText5 = document.getElementById('FootText5');
const FootText6 = document.getElementById('FootText6');
const FootText7 = document.getElementById('FootText7');
const FootText8 = document.getElementById('FootText8');

const HomeText1 = document.getElementById('HomeText1');
const HomeText2 = document.getElementById('HomeText2');
const HomeText3 = document.getElementById('HomeText3');
const HomeText4 = document.getElementById('HomeText4');
const HomeText5 = document.getElementById('HomeText5');
const HomeText6 = document.getElementById('HomeText6');
const HomeText7 = document.getElementById('HomeText7');
const HomeText8 = document.getElementById('HomeText8');
const HomeText9 = document.getElementById('HomeText9');
const HomeText10 = document.getElementById('HomeText10');
const HomeText11 = document.getElementById('HomeText11');
const HomeText12 = document.getElementById('HomeText12');
const HomeText13 = document.getElementById('HomeText13');
const HomeText14 = document.getElementById('HomeText14');
const HomeText15 = document.getElementById('HomeText15');
const HomeText16 = document.getElementById('HomeText16');
const HomeText17 = document.getElementById('HomeText17');
const HomeText18 = document.getElementById('HomeText18');
const HomeText19 = document.getElementById('HomeText19');
const HomeText20 = document.getElementById('HomeText20');
const HomeText21 = document.getElementById('HomeText21');
const HomeText22 = document.getElementById('HomeText22');
const HomeText23 = document.getElementById('HomeText23');
const HomeText24 = document.getElementById('HomeText24');
const HomeText25 = document.getElementById('HomeText25');
const HomeText26 = document.getElementById('HomeText26');
const HomeText27 = document.getElementById('HomeText27');
const HomeText28 = document.getElementById('HomeText28');
const HomeText29 = document.getElementById('HomeText29');
const HomeText30 = document.getElementById('HomeText30');
const HomeText31 = document.getElementById('HomeText31');
const HomeText32 = document.getElementById('HomeText32');
const HomeText33 = document.getElementById('HomeText33');
const HomeText34 = document.getElementById('HomeText34');
const HomeText35 = document.getElementById('HomeText35');
const HomeText36 = document.getElementById('HomeText36');
const HomeText37 = document.getElementById('HomeText37');
const HomeText38 = document.getElementById('HomeText38');
const HomeText39 = document.getElementById('HomeText39');
const HomeText40 = document.getElementById('HomeText40');
const HomeText41 = document.getElementById('HomeText41');
const HomeText42 = document.getElementById('HomeText42');


if(languageCookieValue === "true"){
    /*en*/
    HeadText1.innerText = "Home";
    HeadText2.innerText = "Work";
    HeadText3.innerText = "Contact";

    FootText1.innerText = "Sites";
    FootText2.innerText = "Home";
    FootText3.innerText = "Work";
    FootText4.innerText = "Contact";
    FootText5.innerText = "Functions";
    FootText6.innerText = "Connect";
    FootText7.innerText = "Elevate your online presence with our expert web design services. Your vision, our innovation.";
    FootText8.innerText = "Imprint and privacy policy";

    HomeText1.innerText = "The web project";
    HomeText2.innerText = "cutting-edge web products";
    HomeText3.innerText = "Contact";
    HomeText4.innerText = "Meet the project";
    HomeText5.innerText = "As an innovative company, we are dedicated to shaping your digital success story. Our focus extends beyond top-notch web design, advanced development, and effective website management to address your specific needs.";
    HomeText6.innerText = "A creative project to level up";
    HomeText7.innerText = "Get a creative side that is more than just a regular online presence. We craft hand coded business tools that help you grow your business and expand in a new way.";
    HomeText8.innerText = "Design";
    HomeText9.innerText = "Discover customized websites with an aesthetic touch and explore digital experiences that captivate your customers, fostering a lasting connection to your business.";
    HomeText10.innerText = "Develop";
    HomeText11.innerText = "We don't just design functional websites; we create digital solutions tailored specifically to your customers' needs, delivering an impressive user experience.";
    HomeText12.innerText = "Manage";
    HomeText13.innerText = "In addition to website management, we ensure that your online presence operates seamlessly and remains up-to-date. Our focus is on providing a worry-free and successful digital journey for your business.";
    HomeText14.innerText = "Digital";
    HomeText15.innerText = "Products";
    HomeText16.innerText = "Creative aspect";
    HomeText17.innerText = "Our creative web design solutions are made to stand out of the crowd. We specialize in crafting engaging websites, offering bespoke 3D models, dynamic 2D animations, and sleek graphic designs.";
    HomeText18.innerText = "Transform your digital space and captivate your audience with our innovative approach to web aesthetics.";
    HomeText19.innerText = "What sets us ahead of the market";
    HomeText20.innerText = "Individuality";
    HomeText21.innerText = "We develop websites that fully meet your needs and optimally support your business.";
    HomeText22.innerText = "Conversion optimization";
    HomeText23.innerText = "Optimized functions and solutions make a website a unique tool.";
    HomeText24.innerText = "Management afterwards";
    HomeText25.innerText = "If you want to make changes afterwards, things get done for you out of one simple message.";
    HomeText26.innerText = "What you get";
    HomeText27.innerText = "";
    HomeText28.innerText = "Visibility";
    HomeText29.innerText = "Gain visibility in front of over 1,000,000 people daily and expand your reach to attract potential clients online.";
    HomeText30.innerText = "Credibility";
    HomeText31.innerText = "Build trust and reliability with your customers by leaving a professional first impression.";
    HomeText32.innerText = "Service";
    HomeText33.innerText = "Facilitate access to information and provide easier online support.";
    HomeText34.innerText = "Availability";
    HomeText35.innerText = "Deliver information and products from your company at all times to minimize waiting times.";
    HomeText36.innerText = "Special appearance";
    HomeText37.innerText = "Stand out from your competition and infuse your business with a more distinguished appeal.";
    HomeText38.innerText = "Increased sales";
    HomeText39.innerText = "Expand your customer base and boost sales with a wider audience and numerous benefits for attracting more customers.";
    HomeText40.innerText = "How can we help you?";
    HomeText41.innerText = "Want a website?";
    HomeText42.innerText = "Want to see some projects?";
  }

else{
    /*de*/
    HeadText1.innerText = "Home";
    HeadText2.innerText = "Arbeit";
    HeadText3.innerText = "Kontakt";

    FootText1.innerText = "Seiten";
    FootText2.innerText = "Home";
    FootText3.innerText = "Arbeit";
    FootText4.innerText = "Kontakt";
    FootText5.innerText = "Funktionen";
    FootText6.innerText = "Connecten";
    FootText7.innerText = "Verbessere deine Online-Präsenz mit unseren professionellen Webdesign-Dienstleistungen. Deine Vision, unsere Innovation.";
    FootText8.innerText = "Impressum / Datenschutzrichtlinien";
    
    HomeText1.innerText = "Das Web Projekt";
    HomeText2.innerText = "Hochwertige Webprodukte";
    HomeText3.innerText = "Anfragen";
    HomeText4.innerText = "Das Projekt selbst";
    HomeText5.innerText = "Als innovatives Unternehmen sind wir darauf ausgerichtet, deine digitale Erfolgsgeschichte zu gestalten. Unser Fokus erstreckt sich über erstklassiges Webdesign, fortschrittliche Entwicklung und effektives Website-Management, um auf deine spezifischen Bedürfnisse einzugehen.";
    HomeText6.innerText = "Ein Projekt für das nächste Level";
    HomeText7.innerText = "Erhalte eine kreative Seite, die mehr ist als nur eine gewöhnliche Online-Präsenz. Wir entwickeln individuell programmierte Werkzeuge, die dir helfen, deinen Unternehmen zu verbessern und auf neue Weise zu expandieren.";
    HomeText8.innerText = "Design";
    HomeText9.innerText = "Entdecke maßgeschneiderte Websites mit einer ästhetischen Note und erleben Sie digitale Welten, die deine Kunden begeistern und eine dauerhafte Verbindung zu deinem Unternehmen schaffen.";
    HomeText10.innerText = "Entwicklung";
    HomeText11.innerText = "Wir entwerfen nicht nur funktionale Websites; wir schaffen digitale Lösungen, die speziell auf die Bedürfnisse Ihrer Kunden zugeschnitten sind und ein beeindruckendes Nutzererlebnis bieten.";
    HomeText12.innerText = "Management";
    HomeText13.innerText = "Neben dem Website-Management stellen wir sicher, dass deine Online-Präsenz reibungslos funktioniert und stets auf dem neuesten Stand ist. Unser Fokus liegt darauf, deinem Unternehmen eine sorgenfreie und erfolgreiche digitale Reise zu ermöglichen.";
    HomeText14.innerText = "Digitale";
    HomeText15.innerText = "Produkte";
    HomeText16.innerText = "Kreative Seite";
    HomeText17.innerText = "Unsere kreativen Webdesign-Lösungen zeichnen sich durch ihre Einzigartigkeit aus. Wir haben uns darauf spezialisiert, ansprechende Websites zu gestalten und bieten maßgeschneiderte 3D-Modelle, dynamische 2D-Animationen und elegante Grafikdesigns.";
    HomeText18.innerText = "Verwandele deine digitalen Präsenz und fessele das Publikum mit unserem innovativen Ansatz für Webästhetik.";
    HomeText19.innerText = "Was uns ausmacht";
    HomeText20.innerText = "Individualität";
    HomeText21.innerText = "Wir entwickeln Webseiten, die vollständig Ihren Bedürfnissen entsprichen und deinen Unternehmen optimal unterstützt.";
    HomeText22.innerText = "Übernahmeoptimierung";
    HomeText23.innerText = "Optimierte Funktionen und Lösungen machen eine Website zu einem einzigartigen Werkzeug.";
    HomeText24.innerText = "Management im Nachhinein";
    HomeText25.innerText = "Wenn du nachträgliche Änderungen vornehmen möchten, werden diese für Sie mit einer einfachen Nachricht erledigt.";
    HomeText26.innerText = "Was du bekommst";
    HomeText27.innerText = "";
    HomeText28.innerText = "Sichtbarkeit";
    HomeText29.innerText = "Erziele Sichtbarkeit vor über 1.000.000 Menschen täglich und erweitere deine Reichweite, um potenzielle Kunden online anzusprechen.";
    HomeText30.innerText = "Vertrauen";
    HomeText31.innerText = "Schaffe Vertrauen und Zuverlässigkeit bei deinen Kunden, indem du einen professionellen ersten Eindruck hinterlässt.";
    HomeText32.innerText = "Service";
    HomeText33.innerText = "Erleichtere den Zugang zu Informationen und biete einfacheren Online-Support.";
    HomeText34.innerText = "Verfügbarkeit";
    HomeText35.innerText = "Liefere Informationen und Produkte deines Unternehmens jederzeit aus, um Wartezeiten zu minimieren.";
    HomeText36.innerText = "Besonderes Auftreten";
    HomeText37.innerText = "Hebe dich von deiner Konkurrenz ab und verleihe deinem Unternehmen eine anspruchsvollere Ausstrahlung.";
    HomeText38.innerText = "Gesteigerte Einnahmen";
    HomeText39.innerText = "Erweitere deine Kundenbasis und steigere die Verkäufe durch eine breitere Zielgruppe und zahlreiche Vorteile zur Anziehung neuer Kunden.";
    HomeText40.innerText = "Wie können wir dir helfen?";
    HomeText41.innerText = "Kontakt aufnehmen";
    HomeText42.innerText = "Unsere Projekte ansehen";   
}