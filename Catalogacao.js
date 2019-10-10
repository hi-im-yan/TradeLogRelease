// Catalogo de cores:
// 	1 é verde
// 	2 é azul
// 	3 é amarelo
// 	4 é vermelho

//todo List
// Média de vitórias antes do hit
// cor da linha antes do hit
// as tabelas das informações
// alert decente
// catalogação por vela

var arrayLinhas = [];
var arrayLinesAfterHit = [];
var arrayLinesBeforeHit = [
  { green: 0 },
  { blue: 0 },
  { yellow: 0 },
  { red: 0 }
];
var doubleHit = 0;
var successAfterHit = 0;
var firstMGAfterHit = 0;
var secondMGAfterHit = 0;

function addLinhaNoCatalogo(color) {
  arrayLinhas.push(color);
  document.getElementById("counter").innerHTML = arrayLinhas.length;

  document.getElementById("successRate").innerHTML =
    ((calculateSuccessRate() * 100) / arrayLinhas.length).toFixed(2) + "%";

  checkSuccess();
  checkFirstMG();
  checkSecondMG();
  checkHits();
  if (color == 4) {
    document.getElementById(
      "avgWinBeforeHit"
    ).innerHTML = avgSuccessBeforeHit();
    updateLineBeforeHit();
  }
  //se a linha anterior foi vermelha, cataloga a linha atual como sucesso ou perda
  if (arrayLinhas[arrayLinhas.length - 2] == 4) checkColorAfterHit(color);
}

function checkSuccess() {
  var successCounter = 0;
  for (var i = 0; i < arrayLinhas.length; i++)
    if (arrayLinhas[i] == 1) successCounter++;

  updatePorcentage(successCounter, "successCounter");
  return successCounter;
}

function checkFirstMG() {
  var firstMGCounter = 0;
  for (var i = 0; i < arrayLinhas.length; i++)
    if (arrayLinhas[i] == 2) firstMGCounter++;

  updatePorcentage(firstMGCounter, "firstMGCounter");
  return firstMGCounter;
}

function checkSecondMG() {
  var secondMGCounter = 0;
  for (var i = 0; i < arrayLinhas.length; i++)
    if (arrayLinhas[i] == 3) secondMGCounter++;

  updatePorcentage(secondMGCounter, "secondMGCounter");
  return secondMGCounter;
}

function checkHits() {
  var hitCounter = 0;
  for (var i = 0; i < arrayLinhas.length; i++)
    if (arrayLinhas[i] == 4) hitCounter++;

  updatePorcentage(hitCounter, "hitCounter");
  return hitCounter;
}

function calculateSuccessRate() {
  var successCounter = 0;

  for (var i = 0; i < arrayLinhas.length; i++)
    if (arrayLinhas[i] != 4) successCounter++;

  return successCounter;
}

//Sapoha ficou uma bagunça mas basicamente eu to atualizando as linhas do html sempre que tiver uma linha após a vermelha
//Foi feito isso pq se atualizar a linha apenas da cor após o hit, a porcentagem de outras linhas não é atualizada
//Ainda vou pensar em um jeito de atualizar todas as linhas ao mesmo tempo, nem que eu bote esse código feio dentro de uma função e eu chame a função
function checkColorAfterHit(color) {
  arrayLinesAfterHit.push(color);
  if (color == 1) {
    successAfterHit++;
    document.getElementById("successAfterHit").innerHTML =
      successAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(color) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("firstMGAfterHit").innerHTML =
      firstMGAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(2) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("secondMGAfterHit").innerHTML =
      secondMGAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(3) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("doubleHit").innerHTML =
      doubleHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(4) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
  } else if (color == 2) {
    firstMGAfterHit++;
    document.getElementById("firstMGAfterHit").innerHTML =
      firstMGAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(color) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("successAfterHit").innerHTML =
      successAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(1) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("secondMGAfterHit").innerHTML =
      secondMGAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(3) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("doubleHit").innerHTML =
      doubleHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(3) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
  } else if (color == 3) {
    secondMGAfterHit++;
    document.getElementById("secondMGAfterHit").innerHTML =
      secondMGAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(color) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("successAfterHit").innerHTML =
      successAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(1) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("firstMGAfterHit").innerHTML =
      firstMGAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(2) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("doubleHit").innerHTML =
      doubleHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(4) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
  } else if (color == 4) {
    doubleHit++;
    document.getElementById("doubleHit").innerHTML =
      doubleHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(color) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("successAfterHit").innerHTML =
      successAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(1) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("firstMGAfterHit").innerHTML =
      firstMGAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(2) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
    document.getElementById("secondMGAfterHit").innerHTML =
      secondMGAfterHit +
      " -> " +
      (
        (updatePorcentageAfterHitForThisColor(3) * 100) /
        arrayLinesAfterHit.length
      ).toFixed(2) +
      "%";
  }

  document.getElementById("afterHitSuccessRate").innerHTML =
    ((updatePorcentageAfterHit() * 100) / arrayLinesAfterHit.length).toFixed(
      2
    ) + "%";
}

function updatePorcentageAfterHit() {
  //This function update the entire success rate after hits
  let afterHitSuccessRate = 0;

  for (let index = 0; index < arrayLinesAfterHit.length; index++) {
    if (arrayLinesAfterHit[index] != 4) afterHitSuccessRate++;
  }
  return afterHitSuccessRate;
}

function updatePorcentageAfterHitForThisColor(color) {
  //This function update the success rate after hit of each color
  let successRateOfThisColor = 0;

  for (let index = 0; index < arrayLinesAfterHit.length; index++) {
    if (arrayLinesAfterHit[index] == color) successRateOfThisColor++;
  }

  return successRateOfThisColor;
}

function updatePorcentage(counter, id) {
  document.getElementById(id).innerHTML =
    counter + " -> " + ((counter * 100) / arrayLinhas.length).toFixed(2) + "%";
}

function avgSuccessBeforeHit() {
  return Math.floor(
    (checkSuccess() + checkFirstMG() + checkSecondMG()) / checkHits()
  );
}

function colorBeforeHit() {
  if (arrayLinhas[arrayLinhas.length - 2] == 1) arrayLinesBeforeHit[0].green++;
  else if (arrayLinhas[arrayLinhas.length - 2] == 2)
    arrayLinesBeforeHit[1].blue++;
  else if (arrayLinhas[arrayLinhas.length - 2] == 3)
    arrayLinesBeforeHit[2].yellow++;
  else if (arrayLinhas[arrayLinhas.length - 2] == 4)
    arrayLinesBeforeHit[3].red++;
  return arrayLinhas[arrayLinhas.length - 2];
}

function updateLineBeforeHit() {
  let check = colorBeforeHit();
  if (check == 1)
    document.getElementById("greenBeforeHit").innerHTML =
      arrayLinesBeforeHit[0].green;
  else if (check == 2)
    document.getElementById("blueBeforeHit").innerHTML =
      arrayLinesBeforeHit[1].blue;
  else if (check == 3)
    document.getElementById("yellowBeforeHit").innerHTML =
      arrayLinesBeforeHit[2].yellow;
  else if (check == 4)
    document.getElementById("redBeforeHit").innerHTML =
      arrayLinesBeforeHit[3].red;
}
// function returnFeedback() {
//   let feedBack = "";

//   if (calculateSuccessRate() / arrayLinhas.length >= 0.78) {
//     console.log(checkSuccess());
//     console.log(checkSuccess());
//     feedBack += "A estratégia é consistente. Observe essas dicas:\n\n";
//     if (checkSuccess() / arrayLinhas.length > 0.63)
//       feedBack += ".Considere sempre dar primeira entrada.\n\n";
//     else if (checkFirstMG() / arrayLinhas.length > 0.6)
//       feedBack +=
//         ".Considere esperar dar a entrada no que seria o primeiro MG.\n\n";
//     else if (checkSecondMG() / arrayLinhas.length > 0.6)
//       feedBack +=
//         ".Talvez demore um pouco pra ter um ganho consistente, mas o acerto é maior no segundo MG.\n\n";
//     else
//       feedBack +=
//         ".A estratégia tem várias vitórias mas as vitórias estão bagunçadas, considere operar com um valor considerável baixo. Sempre em mente que terá que utilizar MG\n\n";
//   }

//   if (updatePorcentageAfterHit() / arrayLinesAfterHit.length == 1) {
//     feedBack +=
//       ".Sempre que der o hit, considere dar uma entrada mais alta.\n\n";
//     if (
//       updatePorcentageAfterHitForThisColor(1) / arrayLinesAfterHit.length >
//       0.8
//     )
//       feedBack += ".Após o hit faça a primeira ordem considerando vitória!\n\n";
//     else if (
//       updatePorcentageAfterHitForThisColor(2) / arrayLinesAfterHit.length >
//       0.8
//     )
//       feedBack +=
//         " .Após o hit faça a primeira ordem ao contrário da sua estratégia e faça uma segunda ordem na próxima vela seguindo a cor do primeiro MG!\n\n";
//     else if (
//       updatePorcentageAfterHitForThisColor(3) / arrayLinesAfterHit.length >
//       0.8
//     )
//       feedBack +=
//         " .Após o hit faça a primeira e a segunda ordem ao contrário da estratégia e a terceira ordem conforme o segundo MG!\n\n";
//     else
//       feedBack +=
//         "\n\n.Após o hit aumente levemente o valor da ordem, esteja ciente de que que pode ser preciso utilizar MG.\n\n";
//   }

//   if (doubleHit > 1 && calculateSuccessRate() / arrayLinhas.length >= 0.78)
//     feedBack +=
//       ".Essa estratégia teve alguns hits seguidos talvez considere baixar o valor das ordens caso queira continuar operando nessa estratégia ou utilizar outra estratégia.\n\n";

//   if (
//     updatePorcentageAfterHit() / arrayLinesAfterHit.length < 1 &&
//     calculateSuccessRate() / arrayLinhas.length < 0.78
//   )
//     feedBack +=
//       ".Não é seguro operar nessa estratégia, talvez tente outra que melhor se adapte ao gráfico.\n\n";

//   if (calculateSuccessRate() / arrayLinhas.length < 0.78)
//     feedBack +=
//       ".Essa estratégia não tem muita taxa de acerto, operar cegamente essa estratégia pode quebrar a banca.\n Talvez outra estratégia se adapte ao gráfico.";
//   alert(feedBack);
// }

function createCandle() {
  let toAppend = document.getElementById("secondView");
  var new_row = document.createElement("div");
  new_row.setAttribute("class", "tres mr-2 mt-2");
  toAppend.append(new_row);
}

// background-image: url(https://i.pinimg.com/originals/4f/6d/05/4f6d052bb1b26150115888ea06d4c106.jpg); background-size:auto, contain"
