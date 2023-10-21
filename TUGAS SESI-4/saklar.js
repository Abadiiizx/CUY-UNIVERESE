function saklar() {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");


  let toggle4 = document.getElementById("default-toggle4");

  let toggle5 = document.getElementById("default-toggle5");
  let toggle6 = document.getElementById("default-toggle6");

  let toggle7 = document.getElementById("default-toggle7");
  let toggle8 = document.getElementById("default-toggle8");
  let toggle9 = document.getElementById("default-toggle9");
  let toggle10 = document.getElementById("default-toggle10");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

  let lampu4 = document.getElementById("lampu4");

  let lampu5 = document.getElementById("lampu5");
  let lampu6 = document.getElementById("lampu6");

  let lampu7 = document.getElementById("lampu7");
  let lampu8 = document.getElementById("lampu8");
  let lampu9 = document.getElementById("lampu9");
  let lampu10 = document.getElementById("lampu10");

  //    RUANG KELUARGA
  if (toggle1.checked == true) {
    lampu1.src = "assets/images/on.gif";
  } else {
    lampu1.src = "assets/images/off.gif";
  }
  if (toggle2.checked == true) {
    lampu2.src = "assets/images/on.gif";
  } else {
    lampu2.src = "assets/images/off.gif";
  }
  if (toggle3.checked == true) {
    lampu3.src = "assets/images/on.gif";
  } else {
    lampu3.src = "assets/images/off.gif";
  }


  //   RUANG MAKAN
  if (toggle4.checked == true) {
    lampu4.src = "assets/images/on.gif";
  } else {
    lampu4.src = "assets/images/off.gif";
  }
  //   RUANG TIDUR
  if (toggle5.checked == true) {
    lampu5.src = "assets/images/on.gif";
  } else {
    lampu5.src = "assets/images/off.gif";
  }
  if (toggle6.checked == true) {
    lampu6.src = "assets/images/on.gif";
  } else {
    lampu6.src = "assets/images/off.gif";
  }
  // RUANG TAMU 4
  if (toggle7.checked == true) {
    lampu7.src = "assets/images/on.gif";
  } else {
    lampu7.src = "assets/images/off.gif";
  }
  if (toggle8.checked == true) {
    lampu8.src = "assets/images/on.gif";
  } else {
    lampu8.src = "assets/images/off.gif";
  }
  if (toggle9.checked == true) {
    lampu9.src = "assets/images/on.gif";
  } else {
    lampu9.src = "assets/images/off.gif";
  }
  if (toggle10.checked == true) {
    lampu10.src = "assets/images/on.gif";
  } else {
    lampu10.src = "assets/images/off.gif";
  }
}
function saklar1() {
  let toggle11 = document.getElementById("default-toggle11");
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  
  if (toggle11.checked){
    toggle1.checked = true;
    lampu1.src = "assets/images/on.gif";
    toggle2.checked = true;
    lampu2.src = "assets/images/on.gif";
    toggle3.checked = true;
    lampu3.src = "assets/images/on.gif";
  } else {
    toggle1.checked = false;
    lampu1.src = "assets/images/off.gif";
    toggle2.checked = false;
    lampu2.src = "assets/images/off.gif";
    toggle3.checked = false;
    lampu3.src = "assets/images/off.gif";
  }
}

function saklar2() {
  let toggle12 = document.getElementById("default-toggle12");
  let toggle4 = document.getElementById("default-toggle4");

  if (toggle12.checked) {
    toggle4.checked = true;
    lampu4.src = "assets/images/on.gif";
  } else {
    toggle4.checked = false;
    lampu4.src = "assets/images/off.gif";
  }
}

function saklar3() {
  let toggle13 = document.getElementById("default-toggle13");
  let toggle5 = document.getElementById("default-toggle5");
  let toggle6 = document.getElementById("default-toggle6");
  
  if (toggle13.checked){
    toggle5.checked = true;
    lampu5.src = "assets/images/on.gif";
    toggle6.checked = true;
    lampu6.src = "assets/images/on.gif";
  } else {
    toggle5.checked = false;
    lampu5.src = "assets/images/off.gif";
    toggle6.checked = false;
    lampu6.src = "assets/images/off.gif";
  }
}

function saklar4() {
  let toggle14 = document.getElementById("default-toggle14");
  let toggle7 = document.getElementById("default-toggle7");
  let toggle8 = document.getElementById("default-toggle8");
  let toggle9 = document.getElementById("default-toggle9");
  let toggle10 = document.getElementById("default-toggle10");

  
  if (toggle14.checked){
    toggle7.checked = true;
    lampu7.src = "assets/images/on.gif";
    toggle8.checked = true;
    lampu8.src = "assets/images/on.gif";
    toggle9.checked = true;
    lampu9.src = "assets/images/on.gif";
    toggle10.checked = true;
    lampu10.src = "assets/images/on.gif";
  } else {
    toggle7.checked = false;
    lampu7.src = "assets/images/off.gif";
    toggle8.checked = false;
    lampu8.src = "assets/images/off.gif";
    toggle9.checked = false;
    lampu9.src = "assets/images/off.gif";
    toggle10.checked = false;
    lampu10.src = "assets/images/off.gif";
  }
}