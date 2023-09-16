//オブジェクト取得
const reiwa = document.querySelector('.reiwa');
const counter = document.querySelector('.counter');

//あと何日メソッド
function nanNichi(){

//今の日時
const d1 = new Date();

//ターゲット日時
const d2 = new Date('2023/09/17 09:30'); //令和元年
//時差（ミリ秒）
const d3 = d2 - d1;
// ミリ秒から秒に
const d3_Sec = Math.floor(d3 / 1000);

//分、時、日の秒数
const Minute_Sec = 60;
const Hour_Sec = 60 * 60;
const Day_Sec = 60 * 60 * 24;

//あと何日  
const d4_Day = Math.floor(d3_Sec / Day_Sec);

//あと何時間
const d5_Hour = Math.floor(d3_Sec / Hour_Sec  % 24);

//あと何分
const d6_Minute = Math.floor(d3_Sec / Minute_Sec % 60);

//あと何秒
const d7_Sec = Math.floor(d3_Sec % 60);
   
//カウントダウン
counter.innerHTML = d4_Day + "日" + d5_Hour + "時間" + d6_Minute + "分" + d7_Sec + "秒";

//1秒ごとに実行
setTimeout(nanNichi, 1000);
}

//関数実行
nanNichi();
//

/*
function ontime() {
    const d1 = new Date();
console.log(d1)
//ターゲット日時
const d2 = new Date('2023/09/16 09:00'); //令和元年
//時差（ミリ秒）
const d3 = d2 - d1;
// ミリ秒から秒に
const d3_Sec = Math.floor(d3 / 1000);

//分、時、日の秒数
const Minute_Sec = 60;
const Hour_Sec = 60 * 60;
const Day_Sec = 60 * 60 * 24;

//あと何日  
const d4_Day = Math.floor(d3_Sec / Day_Sec);

//あと何時間
const d5_Hour = Math.floor(d3_Sec / Hour_Sec  % 24);

//あと何分
const d6_Minute = Math.floor(d3_Sec / Minute_Sec % 60);

//あと何秒
const d7_Sec = Math.floor(d3_Sec % 60);
if(d4_Day + "日" + d5_Hour + "時間" + d6_Minute + "分" + d7_Sec + "秒" >= "8日6時間42分40秒"){
    setTimeout("location.href='https://rakkochchch.github.io/2023schoolfestival.ury/home'",1000*0);
}
setTimeout(ontime, 1000);
}
ontime();

 */
function ontime() {
const dead = new Date( 2023, (9- 1), 17 , 9 , 40 ); // 締め切り
const deadLine = parseInt( dead / 1000 ); // timestampに変更する
const dateCurrent = parseInt( new Date() / 1000 ); // 現在時刻を取得

if ( dateCurrent > deadLine ) {
    setTimeout("location.href='https://rakkochchch.github.io/2023schoolfestival.ury/home'",1000*0);
}

setTimeout(ontime, 1000);
console.log(dateCurrent)
console.log(dead)
}

ontime();