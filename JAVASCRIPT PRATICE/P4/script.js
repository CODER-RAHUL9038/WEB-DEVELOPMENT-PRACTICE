// ************ TWEENS **************
// gsap.to('#box' ,{
//     x: 400,
//     duration: 2,
//     rotation: 360,
//     scale: 0.5,
//     backgroundColor: 'green',
//     borderRadius: '50%',
//     ease: 'elastic.out(2, 1)',
//     yoyo: true,
//     repeat: 2,
//     repeatDelay: 1,

// })

// ***********TIMELINES************
// let tl = gsap.timeline();
// tl.to('#box1', {
//     x :1200,
//     duration: 2,

// })
// tl.to('#box2', {
//     x :1200,
//     duration: 2,

// })
// tl.to('#box3', {
//     x :1200,
//     duration: 2,

// })

// *********** SCROLL TRIGGER ************

gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
});
gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
    scrollTrigger: {
    trigger: "#page2 #box",
    scroller : 'body',
    markers: true,
  scrub: 5,
    }
});
gsap.from("#page3 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,  
   scrollTrigger: {
    trigger: "#page3 #box",
    scroller : 'body',
    markers: true,
  scrub: 1,
    }
});