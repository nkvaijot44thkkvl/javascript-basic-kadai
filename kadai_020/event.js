const button = document.getElementById('btn');
console.log(button);

const Label = document.getElementById('text');
console.log(Label);

button.addEventListener('click',() =>{
  Label.textContent = 'ボタンをクリックしました。';
});