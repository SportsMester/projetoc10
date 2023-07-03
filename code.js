var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["afbe9106-c260-4e5f-a189-f03a175abc24","7c1a4761-c5e7-4098-a09f-3c247451eeba","d32749bc-0317-4899-97c4-a4b49cb6b450"],"propsByKey":{"afbe9106-c260-4e5f-a189-f03a175abc24":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"7c1a4761-c5e7-4098-a09f-3c247451eeba":{"name":"car","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":12,"version":"OkSukQq1cmHHF6_CrsQdPxN1.m1i9JGD","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":219,"y":266},"rootRelativePath":"assets/7c1a4761-c5e7-4098-a09f-3c247451eeba.png"},"d32749bc-0317-4899-97c4-a4b49cb6b450":{"name":"otica","sourceUrl":"assets/api/v1/animation-library/gamelab/SKK0dX5AGBTXkrDyUiOhw8DW.1cIqu2T/category_buildings/building_23.png","frameSize":{"x":267,"y":284},"frameCount":1,"looping":true,"frameDelay":2,"version":"SKK0dX5AGBTXkrDyUiOhw8DW.1cIqu2T","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":267,"y":284},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SKK0dX5AGBTXkrDyUiOhw8DW.1cIqu2T/category_buildings/building_23.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

var otica;
  otica = createSprite(368,186,20,20)
  otica.setAnimation("otica");
  otica.scale = 0.2
  
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("sam");
  sam.scale = 0.08
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("car");
  car1.scale = 0.2
  
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("car");
  car2.scale = 0.2
  
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("car");
  car3.scale = 0.2
  
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("car");
  car4.scale = 0.2
 
  
 
//adicione velocidade para fazer o carro se mover.
car1.velocityY = 8
car2.velocityY = 8
car3.velocityY = -8
car4.velocityY = -8

function draw() {
   background("black");
   textSize(25)
   fill("white")
  text("The Impossible Game",100,44)
  text("Vidas: " + life,150,100)
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
 car1.bounceOff(boundary1)
 car1.bounceOff(boundary2)
 
 car2.bounceOff(boundary1)
 car2.bounceOff(boundary2)
 
 car3.bounceOff(boundary1)
 car3.bounceOff(boundary2)
 
 car4.bounceOff(boundary1)
 car4.bounceOff(boundary2)
 
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
if(keyDown("LEFT_ARROW")){
  sam.x = sam.x -4
}
if(keyDown("RIGHT_ARROW")){
  sam.x = sam.x +4
}
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
if(sam.isTouching(car1)||
   sam.isTouching(car2)|| 
   sam.isTouching(car3)||
   sam.isTouching(car4)){
  life = life+1;
  sam.x = 20
  sam.y = 190
  
  
}
  
  
  
  
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
