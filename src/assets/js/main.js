const dogInput = document.getElementById('js-dog-input');
const dogButton = document.querySelector('.hero__btn');
const dogName = document.getElementById('js-dog-name');

dogButton.addEventListener('click', function() {
  let name = dogInput.value;
  dogName.innerText = name;
  dogInput.value = '';
})