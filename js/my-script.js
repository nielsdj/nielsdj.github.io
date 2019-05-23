;(function() {
	'use strict'

	window.addEventListener('load', function(){
        //to ask: truck die niet meer van truckleft veranderd, hoe op gsm gebruiken, array van trucks
        let collisionCheck = false;
        let pauseCheck = false;
        let goButton = document.getElementById('go');
        let pauseButton = document.getElementById('pause');
        let score = 0;

        //auto
        let autoStyle = document.getElementById("auto").style;
        let autoBottom = 10;
        let autoWidth = 41;
        let autoHeigth = 72;
        
        let autoTop;
        let autoLeft =  Math.floor(window.innerWidth / 2 - 20);
        
        //truck
        let truckTop = 30;
        let truckBottom;
        let truckWidth = 43;
        let truckLeft = Math.floor(Math.random() * window.innerWidth);
        if (truckLeft > window.innerWidth - truckWidth ){
            truckLeft = window.innerWidth - truckWidth;
        }
        

        
        let truckHeigth = 97;

        let truckStyle = document.getElementById("truck").style;
        
        truckStyle.left = truckLeft + 'px';

        //startscherm
        let startschermStyle = document.getElementById("startscherm").style;  

        //scorebord
        let scorebord = document.getElementById("scorebord");
        let scoreSpan = document.getElementById("score");
        let gammaset = false;
        let gamma;

        let uitvoerenLoop = 1;   
          
        

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

            if (autoLeft === 320){
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
        function collision() {
            // test hoogte
            if (truckBottom <= window.innerHeight - autoTop){return false;}
            // test right
            if (truckLeft >= autoLeft + autoWidth){return false;}
            // test left
            if (truckLeft + truckWidth <= autoLeft){return false;}
            
            collisionCheck = true;
            document.getElementById("endscore").innerHTML = "jouw score: " + score;
            document.getElementById("eindscherm").style.visibility = "visible";
            console.log("botsing");
             
        }
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

        function loop() {
            requestAnimationFrame(loop);
            truckBottom = truckTop + truckHeigth;
            autoTop = autoBottom + autoHeigth;
            
            if (pauseButton.clicked == true)
            {
            return;
            }

            //testzone
            if(gammaset){ 
            autoLeft = ((window.innerWidth/60)*(gamma +30))-(autoWidth/2)
            }
            
            
            
            
            // tot hier testzone
            if (collisionCheck == false || pauseCheck == true){  
                truckTop = truckTop + Math.floor(score/2) + 1;                
            }
            
            
            autoStyle.left = autoLeft + 'px';
            autoStyle.bottom = autoBottom + 'px';
            
            
            truckStyle.top = truckTop + 'px';
            collision();
            truckGoUp();
            scoreBerekenen();
            
            
        }

     
        goButton.addEventListener('click', function(){
            startschermStyle.left = -(window.innerWidth) + 'px';

            pauseButton.style.visibility = "visible";
            scorebord.style.visibility = "visible";

            loop();    
            
        });

        document.getElementById("pause").addEventListener('click', function(){
            if (pauseCheck == false){
                pauseCheck = true;
            }   else pauseCheck = false;
            
        });
        
        function truckGoUp() {
            if(truckTop > (truckHeigth + window.innerHeight)){
                truckTop = -truckHeigth;
                truckLeft = Math.floor(Math.random() * window.innerWidth);
                if (truckLeft > window.innerWidth - truckWidth ){
                    truckLeft = window.innerWidth - truckWidth;
                }
                truckStyle.left = truckLeft + 'px';
                

            }
        }
         
        function scoreBerekenen() {
            if((autoBottom - autoHeigth) == (truckBottom - window.innerHeight - truckHeigth)){
                if(collisionCheck == false){
                    score++; 
                    scoreSpan.innerText = score;
                }            
                
            }
        }


	});	

})();