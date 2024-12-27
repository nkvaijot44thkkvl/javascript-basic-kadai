let untyped = '';

const untypedfield = document.getElementById('untyped')

//複数のテキストを格納する配列
const textList = [
  'Hello World',
  'This is my App',
  'How are you?'
];

//ランダムなテキストを表示
const createText = () => {
  untyped = textList[0];
  console.log(untyped);
  untypedfield.textContent =  untyped;
};
createText();
//キー入力を判定
const keyPress = e => {};

//タイピングスキルのランクを判定
const rankCheck = score => {};

//ゲームを終了
const gameOver = id => {};

//カウントダウンタイマー
const timer = () => {};