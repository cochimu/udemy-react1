/**
 * var（非推奨：上書き可、再宣言可）
 */
// var val1 = "var変数";
// console.log(val1);
// var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);
// var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

/**
 * let（上書き可、再宣言不可）
 */
// let val2 = "let変数";
// console.log(val2);
// letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);
// letは再宣言不可
// let val2 = "let変数を再宣言";

/**
 * const（上書き不可、再宣言不可）
 */
// const val3 = "const変数";
// console.log(val3);
// const変数は上書き不可、再宣言不可
// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

// ただし、constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ゆかり",
//   age: 34,
// };
// val4.name = "yukari";
// val4.adress = "Chiba";
// console.log(val4)

// 配列も同じく
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monker");
// console.log(val5);

// なので開発ではconstを使うことが多い

/**
 * テンプレート文字列
 */
// 「私の名前はゆかりです。年齢は34歳です。」と出力したい
// const name = "ゆかり";
// const age = 34;
// 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// テンプレート文字列を用いた方法
// バッククオートで囲う
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));
// アロー関数
// const func2 = (str) => {
//   return str;
// }
// 中身が1行で終わる場合は以下のように省略もできる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ゆかり",
//   age: 34,
// };
// 通常
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
// 分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message1);
// 配列も同じ
// const myProfile = ['ゆかり', 34];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// 引数に何も与えられないとundefindと表示されるのを防ぐ
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("ゆかり");

/**
 * スプレッド構文（...）
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// 配列の中身を順番に処理する
// console.log(...arr1);
// スプレッド構文を使わない場合
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// スプレッド構文を使うと
// sumFunc(...arr1);

// 配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// arr4の要素を持った配列を作れる
// const arr6 = [...arr4];
// console.log(arr6);
//　結合した新たな配列を作れる
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// ただのコピーだと参照になってしまい、元の値にも影響してしまうのでNG(参照渡し)
// const arr8 = arr4;
// arr8[0] = 100;
// 上記で元のarr4[0]も100になってしまう
