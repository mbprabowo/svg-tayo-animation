var tlBottomLine = new TimelineMax();
var tlBuildingOne = new TimelineMax();
var tlBuildingTwo = new TimelineMax();
var tlBuildingThree = new TimelineMax();
var tlTreesOne = new TimelineMax();
var tlTreesTwo = new TimelineMax();
var tlCloud = new TimelineMax();

tlBottomLine.from('#road', .75, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut})

tlBuildingOne.from('#building-one', 1, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut});
tlBuildingTwo.from('#building-two', 1, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut, delay: 0.4})
tlBuildingThree.from('#building-three', 1, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut, delay: 0.2});
tlTreesOne.from('#trees-one', 1, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut, delay: 0.3});
tlTreesTwo.from('#trees-two', 1, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut, delay: 0.1});
tlCloud.from('.cloud', 1, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut, delay: 0.4});

setInterval(function() {
  document.getElementById('tayo').style.display = 'inline';
  document.getElementById('bonbon').style.display = 'inline';
  document.getElementById('plane').style.display = 'inline';
},500)

TweenMax.to('#puteran', 10, {rotation:360, ease:Linear.easeNone, repeat:-1})
