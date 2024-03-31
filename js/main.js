
const transitionslide1 = document.querySelector('.transition-slide')
const transitionslide2 = document.querySelector('.transition-slide2')
const transitionslide3 = document.querySelector('.transition-slide3')
const transitionslide4 = document.querySelector('.transition-slide4')
const transitionslide5 = document.querySelector('.transition-slide5')


// Function to add and remove the page transition screen
function pageTransitionIn() {
  // GSAP methods can be chained and return directly a promise
  // but here, a simple tween is enough
  return gsap
    // .timeline()
    // .set(loadingScreen, { transformOrigin: 'bottom left'})
    // .to(loadingScreen, { duration: .5, scaleY: 1 })
    .timeline()
    .to(transitionslide1,{duration: .25, scaleY: 1, transformOrigin: 'bottom left'})
    .to(transitionslide2,{duration: .25, delay: -.1, scaleY: 1, transformOrigin: 'bottom left'})
    .to(transitionslide3,{duration: .25, delay: -.1, scaleY: 1, transformOrigin: 'bottom left'})
    .to(transitionslide4,{duration: .25, delay: -.1, scaleY: 1, transformOrigin: 'bottom left'})
    .to(transitionslide5,{duration: .25, delay: -.1, scaleY: 1, transformOrigin: 'bottom left'})
    

  }
// Function to add and remove the page transition screen
function pageTransitionOut(container) {
  // GSAP methods can be chained and return directly a promise
  return gsap
    .timeline({ delay: .5 }) // More readable to put it here
    .add('start') // Use a label to sync screen and content animation
    .to(transitionslide1, {
      duration: 0.5,
      scaleY: 0,
      skewX: 0,
      transformOrigin: 'top left',
      ease: 'power1.out',
      delay:-.3,
    })
    .to(transitionslide2, {
      duration: 0.5,
      scaleY: 0,
      skewX: 0,
      transformOrigin: 'top left',
      ease: 'power1.out',
      delay:-.5,
    })
    .to(transitionslide3, {
      duration: 0.5,
      scaleY: 0,
      skewX: 0,
      transformOrigin: 'top left',
      ease: 'power1.out',
      delay:-.5,
    })
    .to(transitionslide4, {
      duration: 0.5,
      scaleY: 0,
      skewX: 0,
      transformOrigin: 'top left',
      ease: 'power1.out',
      delay:-.5,
    })
    .to(transitionslide5, {
      duration: 0.5,
      scaleY: 0,
      skewX: 0,
      transformOrigin: 'top left',
      ease: 'power1.out',
    }, 'start')

    .call(contentAnimation, [container], 'start')

}



// Function to animate the content of each page
function contentAnimation(container) {

  $(container.querySelector('.highlight-animation')).addClass('show')
  $(container.querySelector('.ContactButton')).addClass('show')

  return gsap
    .timeline()
    .from(container.querySelector('.Slider'), {
      duration: 1,
      translateX: -2000,
      ease: 'power2.out',
    })

    .from('.nav-links li', {
      duration: .2,
      translateY: 10,
      ease: 'power1',
      stagger: 0.2,
      opacity: 0,
      delay: -.3,
    })

    .from(".rect1, .shadow1",{
      duration: .5,
      translateX: 1000,
      delay: -.4
    })
    .from(".rect2, .shadow2",{
      duration: .5,
      translateX: 1000,
      delay: -.4
    })

    .from(".rect3, .shadow3",{
      duration: .5,
      translateX: 1000,
      delay: -.3

    })

    .from(".rect4, .shadow4",{
      duration: .5,
      translateX: 1000,
      delay: -.3

    })

    .from(".rect5, .shadow5",{
      duration: .5,
      translateX: 1000,
      delay: -.3

    })


    
    .to("#AdditionalInfo",{
      duration: .4,
      translateY: 0,
      delay: -1,
      opacity: 1,

    })





    .from(".slider-icon",{
      duration: .5,
      translateY: 50,
      delay: -.3,
      stagger: 0.2,
      opacity: 0,
      delay: -1.5,
      ease: 'power2',

    })


    .from(".Exp-Section",{
      duration: .8,
      translateY: 550,
      stagger: 0.5,
      opacity: 0,
      delay: -2.1,
      ease: 'power2',

    })

    .from(".Services-Section",{
      duration: .8,
      translateY: -550,
      stagger: 0.5,
      opacity: 0,
      delay: -1.8,
      ease: 'power2',

    })


    
    
    .to(".exp-card",{
      duration: .4,
      translateY: 0,
      stagger: 0.3,
      opacity: 1,
      delay: -1,
      ease: 'power4',

    })


    .from(".contact-section",{
      duration: .8,
      translateX: 550,
      stagger: 0.5,
      opacity: 0,
      delay: -2.1,
      ease: 'power2',

    }) 
    .from(container.querySelector('.TextContainer'), {
      duration: .8,
      translateX: -80,
      opacity: 0,
      delay: -.7,
      ease: 'power2.out',
    })
    .from(container.querySelector('.ContactImage'), {
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      delay: -.3,
      ease: 'linear.easeNone'
    })






    // Scroll Animations

    .to(".scroll-card",{
      scrollTrigger: {
        trigger: ".CardContainer",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        toggleActions: "play none none none",
        duration: 0.5,
      },
      y:0,
      stagger: 0.3,
      opacity:1,
      ease: 'power1.out'
    })

    .from(".AboutImg",{
      scrollTrigger: {
        trigger: ".AboutImg",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        toggleActions: "play none none none"
      },
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      ease: 'linear.easeNone'
    })
    
    .from(".ContactImg",{
      scrollTrigger: {
        trigger: ".ContactInfo",
        start: "top 70%",
        end: "top 40%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    .from(".GridImage1",{
      scrollTrigger: {
        trigger: ".DarkBtn",
        start: "top 65%",
        end: "top 40%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    .from(".GridImage2",{
      scrollTrigger: {
        trigger: ".GridImage1",
        start: "top 55%",
        end: "top 30%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    .from(".GridImage3",{
      scrollTrigger: {
        trigger: ".GridImage2",
        start: "top 55%",
        end: "top 30%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out',
      
    })

    .from(".GridImage4",{
      scrollTrigger: {
        trigger: ".GridImage3",
        start: "top 55%",
        end: "top 30%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    .from(".bottomrect1,.bottomrect2, .bottomrect3, .bottomrect4, .bottomrect5",{
      scrollTrigger: {
        trigger: "#Footer",
        start: "top 90%",
        end: "top 70%",
        scrub: 3,
      },
      x:-400,
      stagger: 0.3,
      ease: 'power1.out'
    })

    .from(".bottomshadow1, .bottomshadow2, .bottomshadow3, .bottomshadow4, .bottomshadow5",{
      scrollTrigger: {
        trigger: "#Footer",
        start: "top 90%",
        end: "top 70%",
        scrub: 3,
      },
      x:-400,
      stagger: 0.3,
      ease: 'power1.out'
    })

    .from(".footer-icon",{
      scrollTrigger: {
        trigger: "#Footer",
        start: "top 90%",
        end: "top 70%",
        scrub: 3,
        duration: 0.5,
      },
      y:50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power1.out'
    })


    .from("#Stars .fa",{
      scrollTrigger: {
        trigger: "#Testimonial",
        start: "top 85%",
        end: "top 60%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:20,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    
    .from("#SJRSite",{
      scrollTrigger: {
        trigger: "#Testimonial",
        start: "top 65%",
        end: "top 10%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      x:400,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    .from("#Eccomerce",{
      scrollTrigger: {
        trigger: "#Testimonial",
        start: "top 65%",
        end: "top 10%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      x:-400,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    .from("#MoodsSite",{
      scrollTrigger: {
        trigger: "#Eccomerce",
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      x:400,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })
    

    .from("#UniSite",{
      scrollTrigger: {
        trigger: "#MoodsSite",
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      x:-400,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    .from("#AdharSite",{
      scrollTrigger: {
        trigger: "#UniSite",
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      x:400,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })



    .from(".FlexWideGraphics img",{
      scrollTrigger: {
        trigger: ".MarketingSection",
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    })

    .from(".SocialMediaImages img",{
      scrollTrigger: {
        trigger: "#AwarenessMedia",
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    })

    .from(".FlexSocialGraphics img",{
      scrollTrigger: {
        trigger: "#DigitalDesignHeader",
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    })

    .from(".FlexPrinted img",{
      scrollTrigger: {
        trigger: "#SocialMediaheader",
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    })


    .from("#MoodsImage",{
      scrollTrigger: {
        trigger: ".UIDesign",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
        toggleActions: "play none none none",
      },
      x:400,
      opacity: 0,
      ease: 'power4.out'
    })

    .from("#LinksImage",{
      scrollTrigger: {
        trigger: "#MoodsImage",
        start: "top 80%",
        end: "top 70%",
        scrub: 2,
        toggleActions: "play none none none",
      },
      x:-400,
      opacity: 0,
      ease: 'power4.out'
    })

    .from("#CameraPhoto",{
      scrollTrigger: {
        trigger: "#CameraPhoto",
        start: "top 95%",
        end: "top 70%",
        scrub: 2,
        toggleActions: "play none none none",
      },
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      ease: 'linear.easeNone'
    })

    .from("#AdditionalMarketing",{
      scrollTrigger: {
        trigger: "#AdditionalMarketing",
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      ease: 'linear.easeNone'
    })
    
    .from(".wide-image",{
      scrollTrigger: {
        trigger: ".wide-image",
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      ease: 'power1'
    })
    

    .from(".skills",{
      scrollTrigger: {
        trigger: ".SkillsOverview",
        start: "top 90%",
        end: "top 60%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      scaleX:0,
      transformOrigin:'left',
      ease: 'power1'
    })


    .from(".BSHLogos img",{
      scrollTrigger: {
        trigger: "#BSH",
        start: "top 60%",
        end: "top 30%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    })

    .from(".ScrumCollage",{
      scrollTrigger: {
        trigger: ".ScrumCollage",
        start: "top 95%",
        end: "top 70%",
        scrub: 2,
        toggleActions: "play none none none",
      },
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      ease: 'linear.easeNone'
    })


    .from(".SiemensImage",{
      scrollTrigger: {
        trigger: ".SiemensImage",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        toggleActions: "play none none none",
      },
      x:400,
      opacity: 0,
      ease: 'power4'
    })
  

    .from(".NEFFImage",{
      scrollTrigger: {
        trigger: ".NEFFImage",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        toggleActions: "play none none none",
      },
      x:-400,
      opacity: 0,
      ease: 'power4'
    })


    .from("#Reesink",{
      scrollTrigger: {
        trigger: "#Reesink",
        start: "top 95%",
        end: "top 70%",
        scrub: 2,
        toggleActions: "play none none none",
      },
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      ease: 'linear.easeNone'
    })


    .from("#Rawnet",{
      scrollTrigger: {
        trigger: "#Rawnet",
        start: "top 95%",
        end: "top 70%",
        scrub: 2,
        toggleActions: "play none none none",
      },
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      ease: 'linear.easeNone'
    })




    .from("#AdharPhoto",{
      scrollTrigger: {
        trigger: "#AdharPhoto",
        start: "top 95%",
        end: "top 70%",
        scrub: 2,
        toggleActions: "play none none none",
      },
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      ease: 'linear.easeNone'
    })


    .from(".experienceimages",{
      scrollTrigger: {
        trigger: "#OtherBusinesses",
        start: "top 70%",
        end: "top 40%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    })


    .call(scrollAnimation, [container], 'start')


    


    

  }




$(function() {
  barba.init({

    transitions: [{

      async leave(data) {


        await pageTransitionIn()
     data.current.container.remove()
      },

      async enter(data) {
        await pageTransitionOut(data.next.container)
      },

      async once(data) {
        await contentAnimation(data.next.container);
        
      }
    }]
  });

});

barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});



//
//.to(".panel1",{
 // scrollTrigger: {
   // trigger: ".panel",
    //pin: true,
    //pinSpacing: false,
  //  scrub: 1,
  ////  start: "0% 0%",
   // end: "bottom+=1000 bottom",

//  },
//  x:0,
 // ease: 'power4.out'
//})



//.to(".panel2",{
  //scrollTrigger: {
 //   trigger: ".panel1",
 //   start: "bottom top",
 //   end: "bottom+=1200 bottom",
 //   pin: true,
 //   pinSpacing: false,
 //   scrub: 3,
 //   markers: true
 
 // },
//  x:0,
 // ease: 'power4.out'
//})
