document.onmousemove = function(e) {
  //Positie van de cursor opvragen
  let xPos = e.clientX;
  let yPos = e.clientY;
  
  //We gaan een x en yFactor maken die start vanuit het midden.
  let xFactor = (window.innerWidth/2 - xPos) / (window.innerWidth/10);
  let yFactor = (window.innerHeight/2 - yPos) / (window.innerHeight/5);
  
  //Verander hier de positie van de objecten aan de hand van de x en y Factor

  document.querySelector('.micro1').style.left = 400 + xFactor* 2 + 'px';
  document.querySelector('.micro1').style.top = 300 + yFactor* 2 + 'px';

  document.querySelector('.micro2').style.left = 400 + xFactor* 5 + 'px';
  document.querySelector('.micro2').style.top = 450 + yFactor* 5 + 'px';

  document.querySelector('.micro3').style.left = 500 + xFactor* 3 + 'px';
  document.querySelector('.micro3').style.top = 30 + yFactor* 3 + 'px';

  document.querySelector('.micro4').style.left = 700 + xFactor* 1 + 'px';
  document.querySelector('.micro4').style.top = 90 + yFactor* 1 + 'px';

  document.querySelector('.micro5').style.left = 850 + xFactor* 6 + 'px';
  document.querySelector('.micro5').style.top = 90 + yFactor* 6 + 'px';

  document.querySelector('.micro6').style.left = 1000 + xFactor* 3 + 'px';
  document.querySelector('.micro6').style.top = 20 + yFactor* 3 + 'px';

  document.querySelector('.micro7').style.left = 1100 + xFactor* 3 + 'px';
  document.querySelector('.micro7').style.top = 120 + yFactor* 3 + 'px';

  document.querySelector('.micro8').style.left = 1100 + xFactor* 1 + 'px';
  document.querySelector('.micro8').style.top = 280 + yFactor* 1 + 'px';

  document.querySelector('.micro9').style.left = 1120 + xFactor* 2 + 'px';
  document.querySelector('.micro9').style.top = 450 + yFactor* 2 + 'px';

  document.querySelector('.micro10').style.left = 1200 + xFactor* 2 + 'px';
  document.querySelector('.micro10').style.top = 400 + yFactor* 2 + 'px';

  
}