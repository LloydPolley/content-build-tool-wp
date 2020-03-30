// https://github.com/michaelCaleyWhaley/SaleBanner
// OPTIONS - class, target, title, link, h1, p, pAlt, cta, p2, start, end, dataTracking,  html
// translations format en/nl/fr/de
// INVOCATIONS

// Use that block of code when banner needs to be above desktop hero but below mobile fast-track
// --> choose 'banner-target' as the value for target in invoked banner
function createTarget(className) {
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
          '<div class="corona-banner"><!--mp_trans_disable_start--><h1 class="playfair not-nl">STILL DELIVERING STYLE 24/7</h1><p class="not-nl">We’ll get your order to you, wherever you want it for free<br><br><span class="italic">exclusions apply</span></p><!-- <span class="exclusions not-nl">exclusions apply</span> --><h1 class="playfair only-nl">We bezorgen stijl nog steeds 24/7</h1><p class="only-nl">We leveren je bestelling, waar je maar wilt! Gratis!<br><br><span class="italic">Uitzonderingen voorbehouden</span></p><!-- <span class="exclusions only-nl">Uitzonderingen voorbehouden</span> --><!--mp_trans_disable_end--><div class="corona-link"><a class="fast-track link-hover not-nl" href="/delivery-update">FIND OUT MORE</a> <a class="fast-track link-hover only-nl-a" href="/delivery-update">Lees meer</a></div></div>'
      });
    }
  }

  // CORONA VIRUS UPDATE BANNER > sales closed
  if (hpCheck || womenCheck || menCheck || girlsCheck || boysCheck) {
    var virusUpdateBanner = new SaleBanner({
      target: ".banner-target-top",
      title: "Covid 19 Update",
      dataTracking: "corona-virus",
      start: "26 march, 2020, 12:00",
      end: "26 march, 2020, 22:00",
      class: "corona-virus",
      html:
        '<div class="corona-banner"> <!--mp_trans_disable_start--> <h1 class="playfair">OUR COMMUNITY<br>IS ALWAYS OPEN</h1> <img class="png-top" src="https://images.riverisland.com/is/image/RiverIsland/c20200326-lp%20banner-dearfriends-png_DNT?$PNG%20Alpha%20Transparency$&scl=1" alt="Dear Friends of RI"> <p>We hope you are well and adjusting to the new normal.</p> <p>Last week we let you know we were temporarily closing our stores, now we have some more news to share.</p> <p> The government has said online retailers can ‘operate normally’, but COVID-19 is serious and nothing feels normal at the moment. <b>As a business driven by the love of fashion, we don’t say it often, but some things are just more important.</b> </p> <p> Right now, we need to put our people first and so <b>we’ve made the difficult decision to temporarily close our Distribution Centre.</b> This will help protect our teams and make sure they can do the right thing to keep their families and community safe. </p> <p> <b>Any orders placed online before 10pm today (Thursday 26th March) will be shipped to you within 5 days.</b> After that, we’ll still be taking orders, we just can’t promise when we will get them to you. It could take weeks, although we hope not. </p> <p> Our warehouse and stores may be closed for a while, but <b>our community is always open.</b> As you stay at home, we want to be there with you, lightening the mood (if we can) and sharing entertainment and inspiration.</b> </p> <p style="max-width: 870px;">We’re looking forward to a time when the news changes less often than our outfit and will be <b>back to our full glory</b> as soon as we can.</p> <p>Until then, we hope you stay connected; we’ll miss you if you don’t.</p> <p class="love">Be safe,</p> <img class="png-bottom" src="https://images.riverisland.com/is/image/RiverIsland/c20200326-lp%20banner-riverisland-png_DNT?$PNG%20Alpha%20Transparency$&scl=1" alt="River Island"> <!--mp_trans_disable_end--> <div class="corona-link"> <a class="dark-rounded-cta not-nl" href="/inspiration/hub/coronavirus-update">FIND OUT MORE</a> <a class="dark-rounded-cta only-nl-a" href="/inspiration/hub/coronavirus-update">Lees meer</a> </div> </div>'
    });
  }

  if (hpCheck || womenCheck || menCheck || girlsCheck || boysCheck) {
    console.log('run')
    var virusUpdateBanner = new SaleBanner({
      target: ".banner-target-top",
      title: "Covid 19 Update",
      dataTracking: "corona-virus",
      start: "26 march, 2020, 22:00",
      end: "30 april, 2020, 00:00",
      class: "corona-virus",
      html:
        '<div class="corona-banner"> <!--mp_trans_disable_start--> <h1 class="playfair">OUR COMMUNITY<br>IS ALWAYS OPEN</h1> <img class="png-top" src="https://images.riverisland.com/is/image/RiverIsland/c20200326-lp%20banner-dearfriends-png_DNT?$PNG%20Alpha%20Transparency$&scl=1" alt="Dear Friends of RI"> <p>We hope you are well and adjusting to the <b><i>new normal.</i></b></p> <p>Last week we let you know we were temporarily closing our stores, <b>now we have some more news to share.</b></p> <p> The government has said online retailers can ‘operate normally’, but COVID-19 is serious and nothing feels normal at the moment. <b>As a business driven by the love of fashion, we don’t say it often, but some things are just more important.</b> </p> <p> Right now, we need to put our people first and so <b>we’ve made the difficult decision to temporarily close our Distribution Centre.</b> This will help protect our teams and make sure they can do the right thing to keep their families and community safe. </p> <p style="max-width: 800px;"> We will still be taking online orders, we just can’t promise when we will get them to you. It could take weeks, although we hope not. </p> <p> Our warehouse and stores may be closed for a while, but <b>our community is always open.</b> As you stay at home, we want to be there with you, lightening the mood (if we can) and <b>sharing entertainment and inspiration.</b> </p> <p style="max-width: 870px;">We’re looking forward to a time when the news changes less often than our outfit and will <b>be back to our full glory</b> as soon as we can.</p> <p>Until then, we hope you stay connected; we’ll miss you if you don’t.</p> <p class="love">Be safe,</p> <img class="png-bottom" src="https://images.riverisland.com/is/image/RiverIsland/c20200326-lp%20banner-riverisland-png_DNT?$PNG%20Alpha%20Transparency$&scl=1" alt="River Island"> <!--mp_trans_disable_end--> <div class="corona-link"> <div class="eng-pun"> <a class="dark-rounded-cta" href="/inspiration/hub/coronavirus-update">FIND OUT MORE</a> </div> <div class="nl-pun"> <a class="dark-rounded-cta" href="/inspiration/hub/coronavirus-update">LEES MEER</a> </div> </div> </div>'
    });
  }
})();
