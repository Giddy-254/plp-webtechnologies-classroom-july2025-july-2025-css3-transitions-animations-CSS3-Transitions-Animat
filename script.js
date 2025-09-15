
document.addEventListener('DOMContentLoaded', () => {
  
  let globalNumber = 10;

  function addNumbers(a, b) {
    return a + b + globalNumber;
  }

  const calcBtn = document.getElementById('calcBtn');
  const resultEl = document.getElementById('result');
  if (calcBtn && resultEl) {
    calcBtn.addEventListener('click', () => {
      const local1 = 5, local2 = 15;
      const res = addNumbers(local1, local2);
      resultEl.textContent = `Local (5 + 15) + Global (10) = ${res}`;
    });
  } else {
    console.warn('calcBtn or result element not found');
  }

  
  const box = document.getElementById('box');
  const animateBtn = document.getElementById('animateBtn');
  if (animateBtn && box) {
    animateBtn.addEventListener('click', () => {
      box.classList.toggle('animated');
      box.classList.toggle('active'); 
    });
  } else {
    console.warn('animateBtn or box element not found');
  }

  
  console.log('DOM loaded — animations ready');

  
});
