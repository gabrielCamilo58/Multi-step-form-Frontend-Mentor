
function nextStep(e, next) {
    e.preventDefault();
   el = document.getElementById(`step-${next}`);
   el.classList.add('hidden')
   el2 = document.getElementById(`step-${++next}`);
   el2.classList.remove('hidden')
  console.log(el2)
    console.log(next);
}