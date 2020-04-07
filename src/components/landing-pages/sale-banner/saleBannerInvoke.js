// https://github.com/michaelCaleyWhaley/SaleBanner
// OPTIONS - class, target, title, link, h1, p, pAlt, cta, p2, start, end, dataTracking,  html
// translations format en/nl/fr/de
// INVOCATIONS

import SaleBanner from './saleBanner';

// Use that block of code when banner needs to be above desktop hero but below mobile fast-track
// --> choose 'banner-target' as the value for target in invoked banner
function createTarget(className) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", className);
  document.getElementsByClassName("desktop-section")[0].insertBefore(
      newDiv,
      document.getElementsByClassName("desktop-section")[0].children[0]
    );

  var mobDiv = document.createElement("div");
  mobDiv.setAttribute("class", className + "-mob");
  document
    .getElementsByClassName("mob-section")[0]
    .insertBefore(
      mobDiv,
      document.getElementsByClassName("mob-section")[0].children[1]
    );
}
createTarget("banner-target");

// Use that block of code when banner needs to be above fast-track on mobile
// --> choose 'banner-target-top' as the value for target in invoked banner
function createTargetTop(className) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", className);
  document
    .getElementsByClassName("desktop-section")[0]
    .insertBefore(
      newDiv,
      document.getElementsByClassName("desktop-section")[0].children[0]
    );

  var mobDiv = document.createElement("div");
  mobDiv.setAttribute("class", className + "-mob");
  document
    .getElementsByClassName("mob-section")[0]
    .insertBefore(
      mobDiv,
      document.getElementsByClassName("mob-section")[0].children[0]
    );
}
createTargetTop("banner-target-top");

(function() {
  // Check for regions or pages
  var ukCheck = document.getElementsByClassName("region-UK")[0];
  var ieCheck = document.getElementsByClassName("region-IE")[0];
  var deCheck = document.getElementsByClassName("region-DE")[0];
  var frCheck = document.getElementsByClassName("region-FR")[0];
  var euCheck = document.getElementsByClassName("region-EU")[0];
  var nlCheck = document.getElementsByClassName("region-NL")[0];
  var seCheck = document.getElementsByClassName("region-SE")[0];
  var usCheck = document.getElementsByClassName("region-US")[0];
  var auCheck = document.getElementsByClassName("region-AU")[0];

  var hpCheck = document.getElementsByClassName("ri-home")[0];
  var womenCheck = document.getElementsByClassName("womens-landing-page")[0];
  var menCheck = document.getElementsByClassName("mens-landing-page")[0];
  var girlsCheck = document.getElementsByClassName("girls-landing-page")[0];
  var boysCheck = document.getElementsByClassName("boys-landing-page")[0];
  var homeCheck = document.getElementsByClassName("homeware-landing-page")[0];
  var kidsCheck = document.getElementsByClassName("kids-lp")[0];
  var babyCheck = document.getElementsByClassName("baby-landing-page")[0];

  //IMPORTANT//
  //PLEASE ADD THE CLASS top-content-promotion on all banners at the top of the page
  // Add it as the first class in the class list below eg: 'top-content-promotion one-pound-delivery'

  // CORONA VIRUS UPDATE BANNER > delivery UK / IE
  if (ukCheck || ieCheck) {
    if (hpCheck || womenCheck || menCheck || girlsCheck || boysCheck) {
      var corona = new SaleBanner({
        target: ".banner-target-top",
        title: "Corvid-19",
        dataTracking: "corona-virus",
        start: "19 march, 2020, 00:00",
        end: "26 march, 2020, 12:00",
        class: "corona-virus",
        html:
          '<p>Banner</p>'
      });
    }
  }

})();
