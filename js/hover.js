




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


<div class="HoverContainer" id="Stressed_Container">
<div class="HoverBackground" id="Stressed_Background" style="width: 100px; background-color: blue;;">
        <div class="FaceShadow" id="Stressed_Shadow" style="width: 100px; background-color: red;;">
          <a href="">
        <img src="Images\Moods. Cover-01.png" alt="Stressed Mood Face Image" style="width: 100px; background-color: red;;">
      </a>
    </div>
    <h2 class="MoodTitle" id="StressedTitle">Websites</h2>

</div>
</div>