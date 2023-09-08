


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




    function typede2(typedeid,type_name){

        var typed = new Typed(typedeid, {
        strings: [type_name,],	
        typeSpeed: 10,
        backSpeed: 0,
        startDelay: 0,
        loop: false,
        smartBackspace: true,
        });
    
        
        }

function applyMosaicInAnimation(selector, duration, intervalFrame) {
    $(document).ready(function () {
        $(selector).mosaicIn({
            duration: duration,
            intervalFrame: intervalFrame
        });
    });
}



applyMosaicInAnimation('#type1-in', 1200, 5);
typede("#typed-sample","ここは　平和で　明るい国　きょうも　ゆかいな仲間たちが　たのしくせいかつをしている")
function type2in(){
    typede("#typed-sample2","はずだったのだが。。。")
    applyMosaicInAnimation('#type2-in', 1200, 5);
}
function type3in(){
    typede("#typed-sample3","国を　ほうかい　させるべく　4体の魔物が　国に侵入してきた　のだった")
    applyMosaicInAnimation('#type3-in', 1200, 5);
}
function type4in(){
   typede("#typed-sample4","こうなったら　平和も何も　あったもんじゃない　きょうあくな　魔物は　すきかってに　あばれだし　芸付は　さながら　むほうちたいとなってしまった")
    applyMosaicInAnimation('#type4-in', 1200, 5);
}
function type5in(){
    typede("#typed-sample5","そんなじゅうみんたちの　たったひとつのきぼうは　がくえんないにちらばらる　４つの封印スタンプだった　それさえあれば　ふたたび　平和をとりもどす　ことができるのだ　しかしどこに　まただれが　そのスタンプをさがしにいくのか？")
    applyMosaicInAnimation('#type5-in', 1500, 5);
}
function type6in(){
    typede("#typed-sample6","みんながそうおもったとき　3にんの　ゆうきあるせんしがたちあがった！！　そのなを　ゆうしゃ　ヒーラー　魔法使い　\nはたしてかれらは　ぶじ　スタンプを　さがしだすことができるのであろうか？")
    applyMosaicInAnimation('#type6-in', 9000, 5);
}
function type7in(){
    typede("#typed-sample7","3にんは　ふあんときぼうをむねにひめ　いま　たびだつことをけついした!　勇敢なるせんしたちよ　ぜひこの国をまもってくれ！！")
    applyMosaicInAnimation('#type7-in', 1200, 5);

}

function typebody(){
    applyMosaicInAnimation('#typebody-in', 1200, 5);

}









document.querySelectorAll(".typebtn").forEach(button => {
    button.addEventListener("click", function () {
        

        // 質問5のボタンがクリックされた場合、結果を表示
        if (this.classList.contains("typeend")) {
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


document.getElementById("mainclass").style.display ="block";
  function clickDisplayAlert() {
    const p1 = document.getElementById("main22");
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
    const p1 = document.getElementById("main22");
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