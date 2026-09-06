 let fondo;
 let framesCorre = [];
 let framesMagia = [];

 let estadoP = 1;
 let frameCorre = 0;
 let frameMagia = 0;

 let marcaEnElTiempo = 0;
 let posX = -50;
 let posY = 510;
 let escalaSprite = 2.0;


function preload() {
  fondo = loadImage("data/fondo.png");

  
  
  for (let i = 1; i <= 5; i++) {
    let num = nf(i, 2);
    framesCorre.push(loadImage("data/corre/corre_" + num + ".png"));
  }

  for (let i = 1; i <= 4; i++) {
    let num = nf(i, 2);
    framesMagia.push(loadImage("data/magia/magia_" + num + ".png"));
  }
}


function setup() {
  createCanvas(800, 600);
  reset();
}


function draw() {
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);

  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text("1: caminar | 2: correr | 3: magia | R: reiniciar", 20, 20);

  if (estadoP === 1) {
    posX = posX + 2;
  } 
  else if (estadoP === 2) {
    posX = posX + 3;
  } 
  else if (estadoP === 3) {
    posX = posX + 1.5;
  }

  
  if (posX > width + 80) {
    posX = -80;
  }

  imageMode(CENTER);

    if (estadoP === 1 && framesCorre.length > 0) {
    let img = framesCorre[frameCorre];
    image(img, posX, posY, img.width * escalaSprite, img.height * escalaSprite);
  }

   if (estadoP === 2 && framesCorre.length > 0) {
    let img = framesCorre[frameCorre];
    image(img, posX, posY, img.width * escalaSprite, img.height * escalaSprite);
  }

  if (estadoP === 3 && framesMagia.length > 0) {
    let img = framesMagia[frameMagia];
    image(img, posX, posY, img.width * escalaSprite, img.height * escalaSprite);
  }

  let espera = 150;
  if (estadoP === 1) espera = 140;
  if (estadoP === 2) espera = 100;
  if (estadoP === 3) espera = 130;

  if (millis() > marcaEnElTiempo + espera) {
    marcaEnElTiempo = millis();

     if (estadoP === 1 || estadoP === 2) {
      frameCorre++;
      if (frameCorre >= framesCorre.length) {
        frameCorre = 0;
      }
    }

    if (estadoP === 3) {
      frameMagia++;
      if (frameMagia >= framesMagia.length) {
        frameMagia = 0;
        estadoP = 1;
      }
    }
  }
}

     function reset() {
  posX = -50;
  posY = 510;
  estadoP = 1;
  frameCorre = 0;
  frameMagia = 0;
  marcaEnElTiempo = millis();
}

function keyPressed() {
  if (key === '1') {
    estadoP = 1;
    frameCorre = 0;
    marcaEnElTiempo = millis();
  } 
       else if (key === '2') {
    estadoP = 2;
    frameCorre = 0;
    marcaEnElTiempo = millis();
  } 
   else if (key === '3') {
    estadoP = 3;
    frameMagia = 0;
    marcaEnElTiempo = millis();
  }
   
    else if (key === 'r' || key === 'R') {
    reset();
  }
}
