
function nextStep(e, next) {
    e.preventDefault();
   el = document.getElementById(`step-${next}`);
   document.getElementById(`step-number-${next}`).classList.remove('selected');
   el.classList.add('hidden')
   el2 = document.getElementById(`step-${++next}`);
   document.getElementById(`step-number-${next}`).classList.add('selected')
   el2.classList.remove('hidden')
}
function backStep(e, number){
  e.preventDefault();
  document.getElementById(`step-${number}`).classList.add('hidden');
  document.getElementById(`step-number-${number}`).classList.remove('selected');
  document.getElementById(`step-${--number}`).classList.remove('hidden');
  document.getElementById(`step-number-${number}`).classList.add('selected')
}