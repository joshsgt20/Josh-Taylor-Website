
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



    .from(container.querySelector('.TextContainer'), {
      duration: .6,
      translateX: -80,
      opacity: 0,
      delay: -2,
      ease: 'power2.out',
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

    .from(container.querySelector('.ContactImage'), {
      duration: 0.5,
      scaleY: 0,
      autoAlpha: 0,
      ease: 'linear.easeNone'
    })






    // Scroll Animations

    .to(".card",{
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
      y:50,
      opacity: 0,
      ease: 'power4.out'
    })
    
    .from(".ContactImg",{
      scrollTrigger: {
        trigger: ".ContactInfo",
        start: "top 80%",
        end: "top 50%",
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
        start: "top 80%",
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
        start: "top 80%",
        end: "top 40%",
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
        start: "top 80%",
        end: "top 40%",
        scrub: 3,
        toggleActions: "play none none none",
      },
      y:50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    })

    .from(".GridImage4",{
      scrollTrigger: {
        trigger: ".GridImage3",
        start: "top 80%",
        end: "top 40%",
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




