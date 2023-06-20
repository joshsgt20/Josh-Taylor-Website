
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hello",{
  scrollTrigger: {
    trigger: ".hello",
    start: "top 90%",
    end: "top 50%",
    markers: true,
    scrub: 1,
    toggleActions: "play none none none"
  },
  x:400,
  rotation: 360,
})


gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hello",
        start: "top 90%",
        end: "top 50%",
        markers: true,
        scrub: 1,
        toggleActions: "play none none none"
      }
    });

    tl.to(".hello", {
        x: 400,
        rotation: 360,
        ease: "none",
        duration: 3
    })
    
    .to(".hello",{
    backgroundColor: "red",
    duration: 1
    })

    .to(".hello",{
        x:0,
        duration: 3
    });
