// 選択ボタンデータを配列に入れてカウントする関数
let countA = 0;
let countB = 0;
let countC = 0;
const box = [];

// クリックイベントを各ボタンに追加
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        box.push(value);

        countA = box.filter(x => x === "a").length;
        countB = box.filter(y => y === "b").length;
        countC = box.filter(z => z === "c").length;
        console.log("Count A:", countA);
        console.log("Count B:", countB);
        console.log("Count C:", countC);

        // 質問5のボタンがクリックされた場合、結果を表示
        if (this.classList.contains("end")) {
            showResult();
        } else {
            // 質問の親要素を隠す
            const parentDiv = this.closest("div");
            console.log(parentDiv)
            parentDiv.style.display = "none";

            // 次の質問を表示
            const id = this.getAttribute("href");
            console.log(id)
            const nextQuestion = document.querySelector(id);
            nextQuestion.classList.add("fit");
            nextQuestion.style.display = "block";
        }
    });
});

// 結果を出力する関数
function showResult() {
    const answer1 = document.getElementById('answer_01');
    const answer2 = document.getElementById('answer_02');
    const answer3 = document.getElementById('answer_03'); // 追加した結果エレメント
    const answer4 = document.getElementById('answer_04');
    const question5 = document.getElementById('q_06');
    const ptagu1 = document.getElementById('transparent_p');

    if (countA === countB && countB === countC) {
        ptagu1.style.display = "none";
        question5.style.display = "none";
        answer3.style.display = "block"; // すべて等しい場合の結果
    } else if (countA > countB && countA > countC) {
        ptagu1.style.display = "none";
        question5.style.display = "none";
        answer1.style.display = "block"; // countA が最大の場合の結果
    } else if (countB > countA && countB > countC) {
        ptagu1.style.display = "none";
        question5.style.display = "none";
        answer2.style.display = "block"; // countB が最大の場合の結果
    } else if (countC > countA && countC > countB){
        ptagu1.style.display = "none";
        question5.style.display = "none";
        answer4.style.display = "block";
    }
}



//ボタン１をクリックした時の処理
//document.getElementById("twitterclass").style.display ="none";
document.getElementById("mainclass").style.display ="block";
  function clickDisplayAlert() {
    const p1 = document.getElementById("mainclass");
    const p2 = document.getElementById("twitterclass");
    const p3 = document.getElementById("instagramclass");
    if(p1.style.display=="block"){
		// noneで非表示
		p1.style.display ="none";
        p2.style.display ="block";
        p3.style.display ="none"
    }else{
      // blockで表示
        p1.style.display ="block";
        p2.style.display ="none";
        p3.style.display ="none"
    }
      
  }


  document.getElementById("mainclass").style.display ="block";
  function clickDisplayAlertsns() {
    const p1 = document.getElementById("mainclass");
    const p2 = document.getElementById("instagramclass");
    const p3 = document.getElementById("twitterclass");
    if(p1.style.display=="block"){
		// noneで非表示
		p1.style.display ="none";
        p2.style.display ="block";
        p3.style.display ="none"
    }else{
      // blockで表示
      p1.style.display ="block";
      p2.style.display ="none";
      p3.style.display ="none"
    }
      
  }


document.getElementById("share_boxid2").style.display ="none";
function clickSherebox2(share_boxid,answer_num1,answer_num2) {
const p1 = document.getElementById(share_boxid);
const p2 = document.getElementById(answer_num1);
const p3 = document.getElementById(answer_num2);
if(p1.style.display=="none"){
    // noneで非表示
    p2.style.display ="none";
    p3.style.display ="none"
    p1.style.display ="block";
}else{
    // blockで表示
    p2.style.display ="block";
    p3.style.display =""
    p1.style.display ="none";
}
    
}















function clickcopy(text){
    navigator.clipboard.writeText(text).then(
        () => {
          alert('文章をコピーしました。');
        },
        () => {
          alert('コピーに失敗しました。');
        });
}


function typedechar(typedeid,type_name){

    var typed = new Typed(typedeid, {
    strings: [type_name,],	
    typeSpeed: 50,
    backSpeed: 0,
    startDelay: 0,
    loop: false,
    onStop:true,
    cursorChar: "",

    smartBackspace: true,
    });

    
    }
function typede(typedeid,type_name){

    var typed = new Typed(typedeid, {
    strings: [type_name,],	
    typeSpeed: 50,
    backSpeed: 0,
    startDelay: 0,
    loop: false,
    smartBackspace: true,
    
    });

    
    }

    function typede4(typedeid){

        var typed = new Typed(typedeid, {
        strings: ["<a onclick=type2in()>あなたの役職診断(全6問)</a>","<a onclick=type2in()>診断スタート</a>"],	
        typeSpeed: 30,
        backSpeed: 0,
        startDelay: 0,
        loop: false,
        smartBackspace: true,
        
        });
    
        
        }
        

        typede4("#typed-sample");

    function type2in(){

    setTimeout(() => {
        typedechar("#typed-sample2_1","当てはまる&nbsp;&nbsp;&nbsp;&nbsp;");
        
    }, );

    setTimeout(() => {
        typedechar("#typed-sample2_2","判断できない&nbsp;&nbsp;");
    }, 600);

    setTimeout(() => {
        typedechar("#typed-sample2_3","当てはまらない");
    }, 1100);
}


    function type3in(){
        setTimeout(() => {
            typedechar("#typed-sample3_1","当てはまる&nbsp;&nbsp;&nbsp;&nbsp;");
        }, );
    
        setTimeout(() => {
            typedechar("#typed-sample3_2","判断できない&nbsp;&nbsp;");
        }, 600);
    
        setTimeout(() => {
            typedechar("#typed-sample3_3","当てはまらない");
        }, 1100);
    }



    function type4in(){
        setTimeout(() => {
            typedechar("#typed-sample4_1","当てはまる&nbsp;&nbsp;&nbsp;&nbsp;");
        }, );
    
        setTimeout(() => {
            typedechar("#typed-sample4_2","判断できない&nbsp;&nbsp;");
        }, 600);
    
        setTimeout(() => {
            typedechar("#typed-sample4_3","当てはまらない");
        }, 1100);
    }


    function type5in(){
        setTimeout(() => {
            typedechar("#typed-sample5_1","当てはまる&nbsp;&nbsp;&nbsp;&nbsp;");
        }, );
    
        setTimeout(() => {
            typedechar("#typed-sample5_2","判断できない&nbsp;&nbsp;");
        }, 600);
    
        setTimeout(() => {
            typedechar("#typed-sample5_3","当てはまらない");
        }, 1100);
    }


    function type6in(){
        setTimeout(() => {
            typedechar("#typed-sample6_1","当てはまる&nbsp;&nbsp;&nbsp;&nbsp;");
        }, );
    
        setTimeout(() => {
            typedechar("#typed-sample6_2","判断できない&nbsp;&nbsp;");
        }, 600);
    
        setTimeout(() => {
            typedechar("#typed-sample6_3","当てはまらない");
        }, 1100);
    }

    function type7in(){
        setTimeout(() => {
            typedechar("#typed-sample7_1","勉強する&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        }, );
    
        setTimeout(() => {
            typedechar("#typed-sample7_2","友達と出かける");
        }, 600);
    
        setTimeout(() => {
            typedechar("#typed-sample7_3","のんびりする&nbsp;&nbsp;");
        }, 1100);
    }
