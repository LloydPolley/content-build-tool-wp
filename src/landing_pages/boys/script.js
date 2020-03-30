// class fixedImage {
//   constructor(
//     image1,
//     image2,
//     image3,
//     target1,
//     target2,
//     target3,
//     endTarget,
//     container,
//     offSetFadeIn,
//     pageAnchors
//   ) {
//     this.image1 = image1;
//     this.image2 = image2;
//     this.image3 = image3;
//     this.target1 = target1;
//     this.target2 = target2;
//     this.target3 = target3;
//     this.endTarget = endTarget;
//     this.container = container;
//     this.offSetFadeIn = offSetFadeIn;
//     this.pageAnchors = pageAnchors;
//     this.init();
//   }

//   handleOpacity(image, target, pAnchor) {
//     let middle =
//       target.getBoundingClientRect().top -
//       window.innerHeight / 2 +
//       this.offSetFadeIn;

//     if (window.innerWidth > 701) {
//       if (middle < 0) {
//         pAnchor.style.display = 'block';
//         image.style.opacity = 1;
//       } else if (middle > 0) {
//         pAnchor.style.display = 'none';
//         image.style.opacity = 0;
//       }
//     } else {
//       if (middle < 0) {
//         image.style.opacity = 1;
//       } else if (middle > 0) {
//         image.style.opacity = 0;
//       }
//     }

//     if (this.endTarget) {
//       if (this.endTarget.getBoundingClientRect().top - 500 < 0) {
//         this.container.style.opacity = 0;
//       } else {
//         this.container.style.opacity = 1;
//       }
//     }
//   }

//   init() {
//     window.addEventListener("scroll", () => {
//       // console.log(this.pageAnchors)
//       if (window.innerWidth > 701) {
//         this.handleOpacity(this.image2, this.target2, this.pageAnchors[1]);
//         this.handleOpacity(this.image3, this.target3, this.pageAnchors[2]);
//       } else {
//         this.handleOpacity(this.image2, this.target2);
//         this.handleOpacity(this.image3, this.target3);
//       }
//     });
//   }
// }

// const desktopImages = document.querySelectorAll(".prm-fixed img");
// const desktopAnchor = document.querySelectorAll(".desktop-anchor");
// const endAnchor = document.querySelectorAll(".end-target")[0];
// const containerDesk = document.querySelectorAll(".prm-fixed")[0];

// const pageAnchors = document.querySelectorAll(".page-anchors");

// //Desktop
// if (window.innerWidth > 1025) {
//   const desktopFixed = new fixedImage(
//     desktopImages[0],
//     desktopImages[1],
//     desktopImages[2],
//     desktopAnchor[0],
//     desktopAnchor[1],
//     desktopAnchor[2],
//     endAnchor,
//     containerDesk,
//     0,
//     pageAnchors
//   );
// }

// //Tablets
// if (window.innerWidth > 701 && window.innerWidth < 1025) {
//   const desktopFixed = new fixedImage(
//     desktopImages[0],
//     desktopImages[1],
//     desktopImages[2],
//     desktopAnchor[0],
//     desktopAnchor[1],
//     desktopAnchor[2],
//     endAnchor,
//     containerDesk,
//     300,
//     pageAnchors
//   );
// }

// const mobImages = document.querySelectorAll(".hero-mob img");
// const mobAnchor = document.querySelectorAll(".mob-anchor");
// const endAnchorMob = document.querySelectorAll('.end-target-mob')[0];
// const containerMob = document.querySelectorAll(".hero-mob")[0];

// //Mobile
// if (window.innerWidth < 701) {
//   const mobFixed = new fixedImage(
//     mobImages[0],
//     mobImages[1],
//     mobImages[2],
//     mobAnchor[0],
//     mobAnchor[1],
//     mobAnchor[2],
//     endAnchorMob,
//     containerMob,
//     -200
//   );
// }


console.log('test script')