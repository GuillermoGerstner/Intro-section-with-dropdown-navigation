
////////// Mobile //////////

//const modal = document.querySelector('.modal');
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.modal__navbar__close');
const modalNavbar = document.querySelector('.modal__navbar');
const modalBackground = document.querySelector('.modal__background');


const modalFeaturesBtn = document.querySelector('.modal__navbar__features__title');
const modalFeaturesList = document.querySelector('.modal__navbar__features__list');
const modalFeaturesImage = document.querySelector('.modal__navbar__features__title__image');

const modalCompanyBtn = document.querySelector('.modal__navbar__company__title');
const modalCompanyList = document.querySelector('.modal__navbar__company__list');
const modalCompanyImage = document.querySelector('.modal__navbar__company__title__image');

window.addEventListener('resize', function() {
	
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;

    if (viewport_width >= 1440) {
        modalNavbar.classList.remove('appear_navbar__modal');
        modalBackground.classList.remove('appear_background__modal');

        modalFeaturesList.classList.remove("appear_features__modal");
        modalCompanyList.classList.remove("appear_company__modal");
        modalFeaturesImage.classList.remove("rotate");
        modalCompanyImage.classList.remove("rotate");
    }
});

menuBtn.addEventListener('click', ()=>{
    modalNavbar.classList.add('appear_navbar__modal');
    modalBackground.classList.add('appear_background__modal');
});

closeBtn.addEventListener('click', ()=>{
    modalNavbar.classList.remove('appear_navbar__modal');
    modalBackground.classList.remove('appear_background__modal');

    modalFeaturesList.classList.remove("appear_features__modal");
    modalCompanyList.classList.remove("appear_company__modal");
    modalFeaturesImage.classList.remove("rotate");
    modalCompanyImage.classList.remove("rotate");
});

modalFeaturesBtn.addEventListener('click', ()=>{
    modalFeaturesList.classList.toggle("appear_features__modal");

    modalFeaturesImage.classList.toggle("rotate");
});

modalCompanyBtn.addEventListener('click', ()=>{
    modalCompanyList.classList.toggle("appear_company__modal");

    modalCompanyImage.classList.toggle("rotate");
});

////////// Desktop //////////

const featuresBtn = document.querySelector('.navbar__links__features');
const featuresList = document.querySelector('.navbar__links__features__menu');
const featuresImage = document.querySelector('.navbar__links__features__image');

const companyBtn = document.querySelector('.navbar__links__company');
const companyList = document.querySelector('.navbar__links__company__menu');
const companyImage = document.querySelector('.navbar__links__company__image');

window.addEventListener('resize', function() {
	
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;

    if (viewport_width < 1440) {

        featuresList.classList.remove("appear_features");
        companyList.classList.remove("appear_company");
        featuresImage.classList.remove("rotate");
        companyImage.classList.remove("rotate");
    }
});

featuresBtn.addEventListener('click', ()=>{
    featuresList.classList.toggle("appear_features");

    featuresImage.classList.toggle("rotate");
});

companyBtn.addEventListener('click', ()=>{
    companyList.classList.toggle("appear_company");

    companyImage.classList.toggle("rotate");
});