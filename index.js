let player1 = 1;

// let cross = document.getElementById('cross-zero').innerHTML;
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let resultContainer = document.getElementById("resultContainer");
resultContainer.style.display = 'none';

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');

let html1 = `<p id="cross-zero" class="cross-zero">0</p>
            <style>.cross-zero{
                position: relative;
                font-size: 60%;
                color: #fff;
                font-weight: bold;
                
            }
            
            }</style>`

let html2 = `<p id="cross-zero" class="cross-zero">X</p>
            <style>.cross-zero{
                position: relative;
                font-size: 60%;
                color: #fff;
                font-weight: bold;
                
            }
           
            }</style>`


score2.innerText="Player 1 turn";

document.querySelectorAll('.box').forEach(function(btn){
    // for(var i = 0; i < btn.length; i++)
    // {
    //    Distribute(btn[i]);
    // }
    btn.addEventListener('click', function(){

        if(btn.innerText===''){
            console.log('hello');
            if(player1 === 1){
                // btn.innerText = "0"
                btn.innerHTML = html1;
                score2.innerText="Player 2 turn";
                player1 = 2;
            }
            else{
                // btn.innerText = "X"
                // cross.innerText = "X";
                btn.innerHTML = html2;
                score2.innerText="Player 1 turn";
                player1 = 1;
            }


            // check for zero
            function myfunc1(){
                if (b1.innerHTML === html1 && b2.innerHTML === html1 && b3.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                    score1.innerText = "Player 1 WON !";
                    score2.innerText=" ";
                }
                
                if (b1.innerHTML === html2 && b2.innerHTML === html2 && b3.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                    score1.innerText = "Player 2 WON !";
                    score2.innerText=" ";
                    
                }
            }
            myfunc1();

            function myfunc2(){
                if (b4.innerHTML === html1 && b5.innerHTML === html1 && b6.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                    score1.innerText = "Player 1 WON !";
                    score2.innerText=" ";

                }

                if (b4.innerHTML === html2 && b5.innerHTML === html2 && b6.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }
                
            }
            myfunc2();

            function myfunc3(){
                if (b7.innerHTML === html1 && b8.innerHTML === html1 && b9.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 1 WON !";
                }

                if (b7.innerHTML === html2 && b8.innerHTML === html2 && b9.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }
                
            }
            myfunc3();

            function myfunc3(){
                if (b7.innerHTML === html1 && b8.innerHTML === html1 && b9.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true
                    score2.innerText=" ";
                    score1.innerText = "Player 1 WON !";
                }

                if (b7.innerHTML === html2 && b8.innerHTML === html2 && b9.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }
                
            }
            myfunc3();


            function myfunc4(){
                if (b1.innerHTML === html1 && b4.innerHTML === html1 && b7.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 1 WON !";
                }

                if (b1.innerHTML === html2 && b4.innerHTML === html2 && b7.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b9").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }
                
            }
            myfunc4();

            function myfunc5(){
                if (b2.innerHTML === html1 && b5.innerHTML === html1 && b8.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b3").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 1 WON !";
                }

                if (b2.innerHTML === html2 && b5.innerHTML === html2 && b8.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b3").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }
                
            }
            myfunc5();

            function myfunc6(){
                if (b7.innerHTML === html1 && b8.innerHTML === html1 && b9.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true
                    score2.innerText=" ";
                    score1.innerText = "Player 1 WON !";
                }
                
                if (b7.innerHTML === html2 && b8.innerHTML === html2 && b9.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }

            }
            myfunc6();

            function myfunc7(){
                if (b3.innerHTML === html1 && b6.innerHTML === html1 && b9.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b8").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 1 WON !";
                }

                if (b3.innerHTML === html2 && b6.innerHTML === html2 && b9.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b5").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b8").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }
                
            }
            myfunc7();

            function myfunc8(){
                if (b1.innerHTML === html1 && b5.innerHTML === html1 && b9.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 1 WON !";
                }

                if (b1.innerHTML === html2 && b5.innerHTML === html2 && b9.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b7").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b4").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b3").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }
                
            }
            myfunc8();

            function myfunc9(){
                if (b3.innerHTML === html1 && b5.innerHTML === html1 && b7.innerHTML === html1) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b9").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b4").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 1 WON !";
                }

                if (b3.innerHTML === html2 && b5.innerHTML === html2 && b7.innerHTML === html2) {
                    // document.getElementById('print')
                    //     .innerHTML = "Player X won";
                    document.getElementById("b9").disabled = true;
                    document.getElementById("b6").disabled = true;
                    document.getElementById("b8").disabled = true;
                    document.getElementById("b1").disabled = true;
                    document.getElementById("b2").disabled = true;
                    document.getElementById("b4").disabled = true;
                    score2.innerText=" ";
                    score1.innerText = "Player 2 WON !";
                }
                
            }
            myfunc9();
        }

    });
});





