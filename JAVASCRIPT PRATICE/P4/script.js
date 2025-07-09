gsap.to('#box' ,{
    x: 400,
    duration: 2,
    rotation: 360,
    scale: 0.5,
    backgroundColor: 'green',
    borderRadius: '50%',
    ease: 'elastic.out(2, 1)',
    yoyo: true,
    repeat: 5,
    repeatDelay: 1,

})