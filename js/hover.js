//Movement animation
const card = document.querySelector(".hovercard");
const card2 = document.querySelector(".hovercard2");
const container = document.querySelector(".hovercontainer");
const container2 = document.querySelector(".hovercontainer2");


//Items
const title = document.querySelector(".hovertitle");
const sneaker = document.querySelector(".hoverimage img");
const purchase = document.querySelector(".hoverbutton");
const description = document.querySelector(".hoverinfo h3");


const title2 = document.querySelector(".hovertitle2");
const sneaker2 = document.querySelector(".hoverimage2 img");
const purchase2 = document.querySelector(".hoverbutton2");
const description2 = document.querySelector(".hoverinfo2 h3");


//Moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});

container2.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card2.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});


//Animate In
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
//Popout
    title.style.transform = "translateZ(50px)";
    title.style.transition = '0.5s ease';

    sneaker.style.transform = "translateZ(50px) rotatez(-10deg)";
    purchase.style.transform = "translateZ(50px)";
    sizes.style.transform = "translateZ(50px)";
})


//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = '0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    title.style.transform = "translateZ(0px)";
    title.style.transition = '0.5s ease';

    sneaker.style.transform = "translateZ(0px) rotatez(0deg)";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
} );





////////SECOND SHOE AS A TEST
container2.addEventListener('mouseenter', (e) =>{
    card2.style.transition = 'none';
//Popout
    title2.style.transform = "translateZ(50px)";
    title2.style.transition = '0.5s ease';

    sneaker2.style.transform = "translateZ(50px) rotatez(-10deg)";
    sneaker2.style.transition = '0.5s ease';
    purchase2.style.transform = "translateZ(50px)";
    purchase2.style.transition = '0.5s ease';
})


//Animate Out
container2.addEventListener('mouseleave', (e) => {
    card2.style.transition = '0.5s ease';
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    title2.style.transform = "translateZ(0px)";
    title2.style.transition = '0.5s ease';

    sneaker2.style.transform = "translateZ(0px) rotatez(0deg)";
    purchase2.style.transform = "translateZ(0px)";
} );