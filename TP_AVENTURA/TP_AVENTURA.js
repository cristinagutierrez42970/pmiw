https://youtu.be/X1uQx_ztQCc

let estado = 0; 
let pantallas = []; 
let imgPantallas = [];
let sfxClick;
let sfxSuspenso;
let audioFondo;

function preload() {
  soundFormats('mp3', 'wav');
  audioFondo = loadSound('fondo.mp3');
  sfxClick = loadSound('click.mp3');
  sfxSuspenso = loadSound('suspenso.mp3');
  for (let i = 0; i <= 15; i++) {
    imgPantallas[i] = loadImage("assets/" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 450); 
  textFont('sans-serif');
  inicializarPantallas();
}

function draw() {
  background(15, 18, 25);
  
  if (estado === 99) {
    dibujarPantallaCreditos();
  } else if (estado >= 0 && estado < pantallas.length) {
    dibujarPantalla(pantallas[estado]);
  }
}

function inicializarPantallas() {
  //1
  pantallas[0] = {
    titulo: "La Última Llamada",
    texto: "Llevás meses en la cuerda floja por malas resoluciones. Suena el teléfono: un HOMICIDIO en el barrio. Es tu última oportunidad para limpiar tu nombre; un solo error y perdes tu placa para siempre.",
    idImg: 0,
    opciones: [
      { texto: "Ir a la escena del crimen", destino: 1 }
    ]
  };

  //2
  pantallas[1] = {
    titulo: "La Escena del Crimen",
    texto: "Llegas a la casa. En la habitación se encuentra un cuerpo femenino sin vida. No hay arma homicida a la vista, pero la víctima presenta claros signos de golpes. Tenés que actuar rápido.",
    idImg: 1,
    opciones: [
      { texto: "1. Investigar la escena", destino: 2 },
      { texto: "2. Interrogar al testigo", destino: 3 }
    ]
  };

  //3
  pantallas[2] = {
    titulo: "Rastro de Sangre",
    texto: "Inspeccionas la habitación con detenimiento y hallas restos de sangre a metros de la cama que intentaron limpiar. Recolectas la muestra con cuidado para el análisis.",
    idImg: 2,
    opciones: [
      { texto: "Continuar al laboratorio", destino: 4 }
    ]
  };

  //4
  pantallas[3] = {
    titulo: "El Testimonio",
    texto: "El vecino cuenta con camaras de seguridad hacia la entrada de la casa. Te muestra el video donde se ve salir apresuradamente a la actual pareja de la víctima.",
    idImg: 3,
    opciones: [
      { texto: "Continuar a revisar pruebas", destino: 4 }
    ]
  };

  //5
  pantallas[4] = {
    titulo: "Análisis de Evidencia",
    texto: "Tenés la pista crucial en tus manos. Es el momento decisivo de procesar la evidencia para descubrir a quién pertenece en la base de datos.",
    idImg: 4,
    esPista: true, 
    opciones: [
      { texto: "ANALIZAR PISTA ENCONTRADA", destino: 5 }
    ]
  };

  // 6 
  pantallas[5] = {
    titulo: "Coincidencia de ADN",
    texto: "El informe del laboratorio confirma lo esperado: el análisis de sangre da positivo al 99.9% de coincidencia genética con la pareja actual. La pista es clara y no podés dejar que escape. ¿Cómo vas a proceder?",
    idImg: 5,
    opciones: [
      { texto: "1. Seguir al sospechoso", destino: 8 }, 
      { texto: "2. Confrontar al sospechoso", destino: 9 } 
    ]
  };

  // 7 
  pantallas[6] = {
    titulo: "Registro de la Cámara",
    texto: "Amplías el video en alta resolución: se distingue perfectamente la cara y la ropa de la pareja saliendo minutos antes del crimen. La pista es clara y no podés dejar que escape. ¿Cómo vas a proceder?",
    idImg: 6,
    opciones: [
      { texto: "1. Seguir al sospechoso", destino: 8 }, 
      { texto: "2. Confrontar al sospechoso", destino: 9 } 
    ]
  };
  
  //8
  pantallas[8] = {
    titulo: "En la Sombra",
    texto: "Lo sigues sigilosamente. Camina encapuchado y perseguido hasta subirse a un auto negro polarizado sin patentes. Es una secuencia altamente sospechosa.",
    idImg: 7,
    opciones: [
      { texto: "Esperar que baje y exigir la verdad", destino: 10 } 
    ]
  };

  //9
  pantallas[9] = {
    titulo: "La Emboscada",
    texto: "Aguardás a que salga de su trabajo. Cuando camina a solas por un callejón... ¡PUM! Lo acorralás contra el muro exigiendo que te cuente toda la verdad.",
    idImg: 8,
    opciones: [
      { texto: "Escuchar su testimonio", destino: 10 } 
    ]
  };

  //10
  pantallas[10] = {
    titulo: "La Conspiración",
    texto: "El sospechoso jura ser inocente: '¡Fui a verla y la encontré muerta, por eso llamé a la policía! El asesino es EL HERMANO. Peleaban por una herencia millonaria tras la muerte de su padre, hace dias discutian de manera agresiva. YO LA AMABA!!!'.",
    idImg: 9,
    opciones: [
      { texto: "1. Entregar pruebas para culpar a la pareja", destino: 11 }, 
      { texto: "2. Investigar al hermano de la víctima", destino: 12 } 
    ]
  };

  //11
  pantallas[11] = {
    titulo: "Pruebas Acumuladas",
    texto: "Sostienes los informes que señalan a la pareja. Estás indeciso; la acusación familiar te hace dudar, pero la ciencia apunta a un solo hombre.",
    idImg: 10,
    opciones: [
      { texto: "Ir a la Decisión Final", destino: 13 } 
    ]
  };

  //12
  pantallas[12] = {
    titulo: "Investigar al Hermano",
    texto: "Verificas que la herencia millonaria existe. En las cámaras de horas antes, ves salir al hermano de la víctima con el rostro desfigurado por la furia.",
    idImg: 11,
    opciones: [
      { texto: "Ir a la Decisión Final", destino: 13 } 
    ]
  };

  //13
  pantallas[13] = {
    titulo: " DECISIÓN FINAL",
    texto: "Se acaba el tiempo. La fiscalía exige un culpable. Confuso, al borde de perderlo todo y con miedo a equivocar tu veredicto, tenés que tomar la elección final.",
    idImg: 12,
    opciones: [
      { texto: "1. Culpar a la Pareja", destino: 14 }, 
      { texto: "2. Culpar al Hermano", destino: 15 }, 
      { texto: "3. No cerrar el caso", destino: 16 }  
    ]
  };

  //14
  pantallas[14] = {
    titulo: "¡CORRECTO!",
    texto: "¡EL CULPABLE FUE LA PAREJA! Intentó responsabilizar al hermano para cobrar la herencia e inventó la Coartada. Tu intuición salvó tu trabajo y se hizo justicia.",
    idImg: 13,
    esFinal: true,
    opciones: [{ texto: "Volver al Inicio", destino: 0 }]
  };

  //15
  pantallas[15] = {
    titulo: "GRAVE ERROR",
    texto: "EL HERMANO NO FUE. El verdadero asesino, su pareja, escapó del país gracias a tu distracción. La jefatura te retira la placa. PERDISTE TU TRABAJO.",
    idImg: 14,
    esFinal: true,
    opciones: [{ texto: "Volver al Inicio", destino: 0 }]
  };

  //16
  pantallas[16] = {
    titulo: "CASO SIN CERRAR",
    texto: "NO CULPASTE A NADIE. Ante tu indecisión, la fiscalía te apartó del caso por incompetencia. PERDISTE TU TRABAJO y el crimen quedó impune.",
    idImg: 15,
    esFinal: true,
    opciones: [{ texto: "Volver al Inicio", destino: 0 }]
  };
}

let caminoCamaras = false;

function dibujarPantalla(datos) {
  stroke(60, 80, 110);
  strokeWeight(2);
  fill(25, 30, 42);
  rect(30, 30, 360, 390, 8);
  
  if (imgPantallas[datos.idImg]) {
    image(imgPantallas[datos.idImg], 30, 30, 360, 390);
  }
 
  fill(255);
  textAlign(LEFT, TOP);
  textSize(18);
  textStyle(BOLD);
  text(datos.titulo, 420, 30, 350, 50);

  textSize(14);
  textStyle(NORMAL);
  fill(210, 220, 235);
  text(datos.texto, 420, 85, 350, 160);

  dibujarBotonCreditos();

  for (let i = 0; i < datos.opciones.length; i++) {
    let yBtn = 265 + (i * 50);
    dibujarBoton(datos.opciones[i].texto, 420, yBtn, 350, 42);
  }
}

function dibujarBoton(txt, x, y, ancho, alto) {
  let hover = mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
  stroke(hover ? color(0, 200, 255) : color(80, 100, 130));
  strokeWeight(1.5);
  fill(hover ? color(40, 60, 90) : color(30, 40, 55));
  rect(x, y, ancho, alto, 6);
  
  fill(hover ? 255 : 220);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13);
  textStyle(BOLD);
  text(txt, x + ancho / 2, y + alto / 2);
}

function dibujarBotonCreditos() {
  let hover = mouseX > 700 && mouseX < 780 && mouseY > 10 && mouseY < 32;
  stroke(100);
  fill(hover ? 90 : 50);
  rect(700, 10, 80, 22, 4);
  fill(255);
  noStroke();
  textSize(11);
  textAlign(CENTER, CENTER);
  text("Créditos", 740, 21);
}

function mousePressed() {
  
 if (audioFondo && !audioFondo.isPlaying()) {
    audioFondo.loop();
    audioFondo.setVolume(0.25);
  }

  if (mouseX > 700 && mouseX < 780 && mouseY > 10 && mouseY < 32) {
    if (sfxClick) sfxClick.play();
    estado = 99;
    return;
  }

  if (estado >= 0 && estado < pantallas.length) {
    let ops = pantallas[estado].opciones;

    if (estado === 1) {
      if (mouseY > 265 && mouseY < 307) caminoCamaras = false; 
      if (mouseY > 315 && mouseY < 357) caminoCamaras = true;  
    }

    for (let i = 0; i < ops.length; i++) {
      let x = 420;
      let y = 265 + (i * 50);
      if (mouseX > x && mouseX < x + 350 && mouseY > y && mouseY < y + 42) {
        
        let siguienteEstado = (estado === 4) ? (caminoCamaras ? 6 : 5) : ops[i].destino;

        if ([9, 13, 14, 15, 16].includes(siguienteEstado)) {
          if (sfxSuspenso) sfxSuspenso.play();
        } else {
          if (sfxClick) sfxClick.play();
        }

        estado = siguienteEstado;
        return;
      }
    }
  }

  if (estado === 99) {
    if (sfxClick) sfxClick.play();
    estado = 0; 
  }
}
 

function dibujarPantallaCreditos() {
  background(10, 12, 20);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(22);
  textStyle(BOLD);
  text("CRÉDITOS Y AUTORÍA", width / 2, 70);
  
  textSize(15);
  textStyle(NORMAL);
  text("Desarrollado por:", width / 2, 130);
  fill(0, 200, 255);
  text("• Cristina Gutiérrez", width / 2, 155);
  
  fill(200);
  textSize(13);
  text("Materia: Programación para medios interactivos orientada a las tecnologías web", width / 2, 230);

  noFill();
  stroke(0, 200, 255, 120);
  ellipse(width / 2, 330, 70 + sin(frameCount * 0.05) * 25);
  stroke(255, 100, 0, 100);
  ellipse(width / 2, 330, 40 + cos(frameCount * 0.05) * 15);

  fill(180);
  noStroke();
  textSize(12);
  text("[ Clic en cualquier lugar para regresar ]", width / 2, 410);
}
