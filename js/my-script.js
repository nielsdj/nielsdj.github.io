;(function() {
	'use strict'

	window.addEventListener('load', function(){
        document.getElementById('carStartRight').style.left = 7 + 'vw';
        document.getElementById('carStartLeft').style.left = 65 + 'vw';

        let collisionCheck = false;
        let pauseCheck = false;
        let goButton = document.getElementById('go');
        let pauseButton = document.getElementById('pause');
       
        
        var carDriving = new Audio("js/carDriving.wav");
        var crashSound = new Audio("js/crash.wav");

        //auto
        let autoStyle = document.getElementById("auto").style;
        let autoBottom = 10;
        let autoWidth = 41;
        let autoHeigth = 72;
        
        let autoTop;
        let autoLeft =  Math.floor(window.innerWidth / 2 - 20);
        
        //bijhouden positie elke truck
        let truckBottom1;
        let truckBottom2;
        let truckBottom3;
        let truckBottom4;
        let truckBottom5;
        let truckBottom6;

        let truckTop1;
        let truckTop2;
        let truckTop3;
        let truckTop4;
        let truckTop5;
        let truckTop6;

        let truckLeft1;
        let truckLeft2;
        let truckLeft3;
        let truckLeft4;
        let truckLeft5;
        let truckLeft6;

        let truckStyle1;
        let truckStyle2;
        let truckStyle3;
        let truckStyle4;
        let truckStyle5;
        let truckStyle6;

        


    
        //Alle trucks positionering
        let truckTop = [truckTop1,truckTop2,truckTop3,truckTop4,truckTop5,truckTop6];
        let truckBottom = [truckBottom1,truckBottom2,truckBottom3,truckBottom4,truckBottom5,truckBottom6];
        let truckStyle = [truckStyle1,truckStyle2,truckStyle3,truckStyle4,truckStyle5,truckStyle6];
        let truckLeft = [truckLeft1,truckLeft2,truckLeft3,truckLeft4,truckLeft5,truckLeft6];
        let truckNaam = ["truck1","truck2","truck3","truck4","truck5","truck6"];
        let truckSnelheid = [1,2,3,1,2,3];
        let truckHoogte = [30,-150,-690,-780,-930,-1100];
        let truckHeigth = 97;
        let truckWidth = 43;

        for (let i = 0; i < truckTop.length; i++) {
            truckTop[i] = truckHoogte[i];
            
            
            truckLeft[i] = Math.floor(Math.random() * window.innerWidth);
            if (truckLeft[i] > window.innerWidth - truckWidth ){
                truckLeft[i] = window.innerWidth - truckWidth;
            }                 

            truckStyle[i] = document.getElementById(truckNaam[i]).style;
            
            truckStyle[i].left = truckLeft[i] + 'px';

        }
        
        
        
        //startscherm
        let startschermStyle = document.getElementById("startscherm").style;  

        //scorebord
        let scorebord = document.getElementById("scorebord");
        let scoreSpan = document.getElementById("score");
        let highscorebord = document.getElementById("highscorebord");
        let highscoreSpan = document.getElementById("highscore");
        let gammaset = false;
        let gamma;
        let score = 0;
        scoreSpan.innerText = score;
        let highscore;
        if (localStorage.getItem("highscore") == null){
            highscore = 0;
        }else highscore = localStorage.getItem("highscore");
        
        highscoreSpan.innerText = highscore;
      
          
        

        let moveLeft = function(){

            if (autoLeft === 0){
                return;
            }
            autoLeft = autoLeft - 15;
            if (autoLeft < 0){
                autoLeft = 0;
                
            }


        }
        let moveRight = function(){

            if (autoLeft === window.innerWidth){
                return;
            }
            autoLeft = autoLeft + 15;
            if (autoLeft > 320){
                autoLeft = 320;
                
            }
        }

        // ik haalde code om met de pijltjes te werken op https://www.codespeedy.com/detect-arrow-key-press-in-javascript/
        document.onkeydown = function(event) {
            switch (event.keyCode) {
               case 37:
                    moveLeft();                    
                    break;
               case 39:
                    moveRight();
                  break;
               
            }
        };

        //checkt de botsing tussen auto's en trucks, behandelt het einde van de game
        function collision() {
            for (let i = 0; i < truckTop.length; i++) {
                if (window.innerHeight - truckTop[i] > 10){
                    // test hoogte
                    if (truckBottom[i] <= window.innerHeight - autoTop){continue;}
                    // test right
                    if (truckLeft[i] >= autoLeft + autoWidth){continue;}
                    // test left
                    if (truckLeft[i] + truckWidth <= autoLeft){continue;}
                    
                    crashSound.play();
                    collisionCheck = true;
                    document.getElementById("endscore").innerHTML = "Jouw score: " + score;
                    document.getElementById("eindscherm").style.visibility = "visible";
                    pauseButton.style.visibility = "hidden";
                    console.log("botsing");

                    if (localStorage.getItem("highscore") < score || localStorage.getItem("highscore") == null){
                        highscore = score;
                        document.getElementById("endhighscore").innerHTML = "New highscore: " + highscore;
                    } else document.getElementById("endhighscore").innerHTML = "Highscore: " + highscore;
                    
                    localStorage.setItem("highscore", highscore);
                    carDriving.pause();
                    
                } 
            }
            
        }
        //zorgt voor de beweging met de auto, 26 en -26 zijn de maximale gamma waarden zodat de gebruiker zijn of haar device niet te schuin hoeft te houden
        window.addEventListener('deviceorientation', function(e) {
            gammaset = true;
            if (e.gamma < -26){
                e.gamma = -26;
                
                return;
            }
            if (e.gamma > 26){
                e.gamma = 26;
                return;
            }
            gamma = e.gamma;
            console.log(e.gamma)  
            
                       
            
        });

        //deze loop wordt uitgevoerd doorheen het spel
        function loop() {
            if (collisionCheck == true)
            {
            return;
            }
            
            requestAnimationFrame(loop);
            if (pauseCheck == true){
                return;
            }
            for (let i = 0; i < truckTop.length; i++) {
                truckBottom[i] = truckTop[i] + truckHeigth;
            }
           
            autoTop = autoBottom + autoHeigth;           
            
            
            if(gammaset){ 
            autoLeft = ((window.innerWidth/60)*(gamma +30))-(autoWidth/2)
            }                
                        
            
            if (collisionCheck == false || pauseCheck == true){  
                for (let i = 0; i < truckTop.length; i++) {
                    truckTop[i] = truckTop[i] + Math.floor(score/5) + truckSnelheid[i] ;
                }
                            
            }            
            
            autoStyle.left = autoLeft + 'px';
            autoStyle.bottom = autoBottom + 'px';
            
            for (let i = 0; i < truckTop.length; i++) {
                truckStyle[i].top = truckTop[i] + 'px';
            }

            collision();              
            truckGoUp();      
            
        }

        //start knop
        goButton.addEventListener('click', function(){
            startschermStyle.visibility = "hidden";
            document.getElementById("carStartRight").style.transition = 0 + 's';
            document.getElementById("carStartLeft").style.transition = 0 + 's';
            pauseButton.style.visibility = "visible";
            scorebord.style.visibility = "visible";
            highscorebord.style.visibility = "visible";
            carDriving.play();
            loop();    
            
        });
        //pauzeknop
        document.getElementById("pause").addEventListener('click', function(){
            if (pauseCheck == false){
                pauseCheck = true;
            }   else pauseCheck = false;
            
        });

        //restartknop
        document.getElementById("restart").addEventListener('click', function(){
            location.reload();            
        });
        
        //brengt de truck van beneden terug naar boven en doet de score +1
        function truckGoUp() {
            for (let i = 0; i < truckTop.length; i++) {
                if(truckTop[i] > (truckHeigth + window.innerHeight)){
                    truckTop[i] = -truckHeigth;
                    truckLeft[i] = Math.floor(Math.random() * window.innerWidth);
                    if (truckLeft[i] > window.innerWidth - truckWidth ){
                        truckLeft[i] = window.innerWidth - truckWidth;
                    }
                    truckStyle[i].left = truckLeft[i] + 'px';
                    score++; 
                    scoreSpan.innerText = score;
                    
                    
                }
            }
            
            
            
        }
         
        
	});	

})();