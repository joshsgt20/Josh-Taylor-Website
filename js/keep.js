//SVG Animations

const Slider = document.querySelector('.Slider');
const Logo = document.querySelector('#Title');
const Nav = document.querySelector('#Menu');
const Welcome = document.querySelector('.Welcome');
const Hamburger = document.querySelector('.Hamburger');
const Intro = document.querySelector('.Intro_Text');

const MoodsAnimation = document.querySelector('#MoodsAnimation');
const LinksAnimation = document.querySelector('#LinksAnimation');
const AdharAnimation = document.querySelector('#AdharAnimation');
const UMHAnimation = document.querySelector('#UMHAnimation');

const ContactPhoto = document.querySelector('#ContactPhoto');
const ContactSocials = document.querySelector('#ContactSocials');

const BlogPost1 = document.querySelector('#BlogPost1');
const BlogPost2 = document.querySelector('#BlogPost2');
const BlogPost3 = document.querySelector('#BlogPost3');
const BlogPost4 = document.querySelector('#BlogPost4');

const rect1 = document.querySelector('.rect1');
const rect2 = document.querySelector('.rect2');
const rect3 = document.querySelector('.rect3');
const rect4 = document.querySelector('.rect4');
const rect5 = document.querySelector('.rect5');


const tl = new TimelineMax();

tl.fromTo(Slider, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
.fromTo(Welcome, 1, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "=0")
.fromTo(Intro, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0")
.fromTo(Logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=2")
.fromTo(Nav, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=2.5")
.fromTo(Hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=2");

tl.fromTo(rect1, 1, { x: "100%" }, { x: "0%", ease: Power2.easeInOut },"-=2")
.fromTo(rect2, 1, { x: "100%" }, { x: "0%", ease: Power2.easeInOut },"-=2.2")
.fromTo(rect3, 1, { x: "100%" }, { x: "0%", ease: Power2.easeInOut },"-=2.4")
.fromTo(rect4, 1, { x: "100%" }, { x: "0%", ease: Power2.easeInOut },"-=2.6")
.fromTo(rect5, 1, { x: "100%" }, { x: "0%", ease: Power2.easeInOut },"-=2.8")

tl.fromTo(MoodsAnimation, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: Power1.easeInOut}, "=-2.5")
tl.fromTo(LinksAnimation, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: Power1.easeInOut}, "=-2.3")
tl.fromTo(AdharAnimation, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: Power1.easeInOut}, "=-2.1")
tl.fromTo(UMHAnimation, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: Power1.easeInOut}, "=-1.9")

tl.fromTo(ContactPhoto, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: Power1.easeInOut}, "=-2")
tl.fromTo(ContactSocials, 1, {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: Power1.easeInOut}, "=-2.5")

tl.fromTo(BlogPost1, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-2.5")
tl.fromTo(BlogPost2, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-2.3")
tl.fromTo(BlogPost3, 1, {opacity: 0, y: 30}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "=-2.1")
tl.fromTo(BlogPost4, 1, {opacity: 0, y: 30})



//Movement animation
const StressedBackground = document.querySelector("#Stressed_Background");
const StressedContainer = document.querySelector("#Stressed_Container");

const AnxiousBackground = document.querySelector("#Anxious_Background");
const AnxiousContainer = document.querySelector("#Anxious_Container");



//Items

const StressedImage = document.querySelector("#Stressed_Shadow img");
const StressedShadow = document.querySelector("#Stressed_Shadow");
const StressedTitle = document.querySelector("#StressedTitle");

const AnxiousImage = document.querySelector("#Anxious_Shadow img");
const AnxiousShadow = document.querySelector("#Anxious_Shadow");
const AnxiousTitle = document.querySelector("#AnxiousTitle");





//Moving animation event
StressedContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    StressedBackground.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});



//Animate In - Stressed
StressedContainer.addEventListener('mouseenter', (e) =>{
    StressedBackground.style.transition = 'none';
//Popout
StressedTitle.style.transform = "translateZ(100px)";
StressedTitle.style.transition = '0.5s ease';

    StressedShadow.style.transform = "translateY(20px) translateZ(50px)";
    StressedShadow.style.transition = '0.5s ease';

StressedImage.style.transform = "translateY(20px)";
StressedImage.style.transition = '0.5s ease';


})
//Animate Out
StressedContainer.addEventListener('mouseleave', (e) => {
    StressedBackground.style.transition = '0.5s ease';
    StressedBackground.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    StressedTitle.style.transform = "translateZ(0px)";
    StressedTitle.style.transition = '0.5s ease';

    StressedShadow.style.transform = "translateY(0px) translateZ(0px)";
    
    StressedImage.style.transform = "translateY(0px) translateZ(0px)";
    StressedImage.style.transition = '0.5s ease';

} );


// Javascript for typwriter
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
