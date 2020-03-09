import '../workspace/content.scss';
import workspace from  '../workspace/workspace.html';
import header from '../../external/html/header.html';
import footer from '../../external/html/footer.html';

//COUNTRY SELECT
const targetRegion = document.querySelector('#region-target');
targetRegion.classList.add('region-UK');

//HTML PARTIALS ENTRY POINT
//Workspace import for blank html file
const targetContent = document.querySelector('#content-target');
targetContent.innerHTML = workspace;

//Header import for blank html file
const targetHeader = document.querySelector('#header-target');
targetHeader.innerHTML = header;

const targetFooter = document.querySelector('#footer-target');
targetFooter.innerHTML = footer;

