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
        let truckTop1 = 30;
        let truckBottom1;
        let truckWidth = 43;
        let truckLeft1 = Math.floor(Math.random() * window.innerWidth);
        if (truckLeft1 > window.innerWidth - truckWidth ){
            truckLeft1 = window.innerWidth - truckWidth;
        }
        

        
        let truckHeigth = 97;

        let truckStyle1 = document.getElementById("truck1").style;
        
        truckStyle1.left = truckLeft1 + 'px';


        //truck2
        let truckTop2 = -120;
        let truckBottom2;
        let truckLeft2 = Math.floor(Math.random() * window.innerWidth);
        if (truckLeft2 > window.innerWidth - truckWidth ){
            truckLeft2 = window.innerWidth - truckWidth;
        }
        let truckStyle2 = document.getElementById("truck2").style;
        
        truckStyle2.left = truckLeft2 + 'px';

        //truck3
        let truckTop3 = -900;
        let truckBottom3;
        let truckLeft3 = Math.floor(Math.random() * window.innerWidth);
        if (truckLeft2 > window.innerWidth - truckWidth ){
            truckLeft2 = window.innerWidth - truckWidth;
        }
        let truckStyle3 = document.getElementById("truck3").style;
        
        truckStyle3.left = truckLeft3 + 'px';

        //truck4
        let truckTop4 = -780;
        let truckBottom4;
        let truckLeft4 = Math.floor(Math.random() * window.innerWidth);
        if (truckLeft4 > window.innerWidth - truckWidth ){
            truckLeft4 = window.innerWidth - truckWidth;
        }
        let truckStyle4 = document.getElementById("truck4").style;
        
        truckStyle4.left = truckLeft4 + 'px';

        //truck5
        let truckTop5 = -400;
        let truckBottom5;
        let truckLeft5 = Math.floor(Math.random() * window.innerWidth);
        if (truckLeft5 > window.innerWidth - truckWidth ){
            truckLeft5 = window.innerWidth - truckWidth;
        }
        let truckStyle5 = document.getElementById("truck5").style;
        
        truckStyle5.left = truckLeft5 + 'px';

        //truck6
        let truckTop6 = -450;
        let truckBottom6;
        let truckLeft6 = Math.floor(Math.random() * window.innerWidth);
        if (truckLeft6 > window.innerWidth - truckWidth ){
            truckLeft6 = window.innerWidth - truckWidth;
        }
        let truckStyle6 = document.getElementById("truck6").style;
        
        truckStyle6.left = truckLeft6 + 'px';

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

        
        function collision1() {
            if (window.innerHeight - truckTop1 > 10){
            // test hoogte
            if (truckBottom1 <= window.innerHeight - autoTop){return false;}
            // test right
            if (truckLeft1 >= autoLeft + autoWidth){return false;}
            // test left
            if (truckLeft1 + truckWidth <= autoLeft){return false;}
            
            collisionCheck = true;
            document.getElementById("endscore").innerHTML = "jouw score: " + score;
            document.getElementById("eindscherm").style.visibility = "visible";
            console.log("botsing");
            } 
        }
        function collision2() {
            if (window.innerHeight - truckTop2 > 10){
            // test hoogte
            if (truckBottom2 <= window.innerHeight - autoTop){return false;}
            // test right
            if (truckLeft2 >= autoLeft + autoWidth){return false;}
            // test left
            if (truckLeft2 + truckWidth <= autoLeft){return false;}
            
            collisionCheck = true;
            document.getElementById("endscore").innerHTML = "jouw score: " + score;
            document.getElementById("eindscherm").style.visibility = "visible";
            console.log("botsing");
            }
        }
        function collision3() {
            if (window.innerHeight - truckTop3 > 10){
            // test hoogte
            if (truckBottom3 <= window.innerHeight - autoTop){return false;}
            // test right
            if (truckLeft3 >= autoLeft + autoWidth){return false;}
            // test left
            if (truckLeft3 + truckWidth <= autoLeft){return false;}
            
            collisionCheck = true;
            document.getElementById("endscore").innerHTML = "jouw score: " + score;
            document.getElementById("eindscherm").style.visibility = "visible";
            console.log("botsing");
            } 
        }
        function collision4() {
            if (window.innerHeight - truckTop4 > 10){
            // test hoogte
            if (truckBottom4 <= window.innerHeight - autoTop){return false;}
            // test right
            if (truckLeft4 >= autoLeft + autoWidth){return false;}
            // test left
            if (truckLeft4 + truckWidth <= autoLeft){return false;}
            
            collisionCheck = true;
            document.getElementById("endscore").innerHTML = "jouw score: " + score;
            document.getElementById("eindscherm").style.visibility = "visible";
            console.log("botsing");
            }
        }
        function collision5() {
            if (window.innerHeight - truckTop5 > 10){
            // test hoogte
            if (truckBottom5 <= window.innerHeight - autoTop){return false;}
            // test right
            if (truckLeft5 >= autoLeft + autoWidth){return false;}
            // test left
            if (truckLeft5 + truckWidth <= autoLeft){return false;}
            
            collisionCheck = true;
            document.getElementById("endscore").innerHTML = "jouw score: " + score;
            document.getElementById("eindscherm").style.visibility = "visible";
            console.log("botsing");
            }
        }
        function collision6() {
            if (window.innerHeight - truckTop6 > 10){
            // test hoogte
            if (truckBottom6 <= window.innerHeight - autoTop){return false;}
            // test right
            if (truckLeft6 >= autoLeft + autoWidth){return false;}
            // test left
            if (truckLeft6 + truckWidth <= autoLeft){return false;}
            
            collisionCheck = true;
            document.getElementById("endscore").innerHTML = "jouw score: " + score;
            document.getElementById("eindscherm").style.visibility = "visible";
            console.log("botsing");
            }
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
            if (pauseButton.clicked == true)
            {
            return;
            }
            requestAnimationFrame(loop);
            truckBottom1 = truckTop1 + truckHeigth;
            truckBottom2 = truckTop2 + truckHeigth;
            truckBottom3 = truckTop3 + truckHeigth;
            truckBottom4 = truckTop4 + truckHeigth;
            truckBottom5 = truckTop5 + truckHeigth;
            truckBottom6 = truckTop6 + truckHeigth;
            autoTop = autoBottom + autoHeigth;
            
            

            //testzone
            if(gammaset){ 
            autoLeft = ((window.innerWidth/60)*(gamma +30))-(autoWidth/2)
            }
            
            
            
            
            // tot hier testzone
            if (collisionCheck == false || pauseCheck == true){  
                truckTop1 = truckTop1 + Math.floor(score/2) + 3; 
                truckTop2 = truckTop2 + Math.floor(score/2) + 2;   
                truckTop3 = truckTop3 + Math.floor(score/2) + 1; 
                truckTop4 = truckTop4 + Math.floor(score/2) + 1; 
                truckTop5 = truckTop5 + Math.floor(score/2) + 2; 
                truckTop6 = truckTop6 + Math.floor(score/2) + 3;              
            }
            
            
            autoStyle.left = autoLeft + 'px';
            autoStyle.bottom = autoBottom + 'px';
            
            
            truckStyle1.top = truckTop1 + 'px';
            truckStyle2.top = truckTop2 + 'px';
            truckStyle3.top = truckTop3 + 'px';
            truckStyle4.top = truckTop4 + 'px';
            truckStyle5.top = truckTop5 + 'px';
            truckStyle6.top = truckTop6 + 'px';
            collision1();
            collision2();
            collision3();
            collision4();
            collision5();
            collision6();
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
            
            if(truckTop1 > (truckHeigth + window.innerHeight)){
                truckTop1 = -truckHeigth;
                truckLeft1 = Math.floor(Math.random() * window.innerWidth);
                if (truckLeft1 > window.innerWidth - truckWidth ){
                    truckLeft1 = window.innerWidth - truckWidth;
                }
                truckStyle1.left = truckLeft1 + 'px';
                

            }
            if(truckTop2 > (truckHeigth + window.innerHeight)){
                truckTop2 = -truckHeigth;
                truckLeft2 = Math.floor(Math.random() * window.innerWidth);
                if (truckLeft2 > window.innerWidth - truckWidth ){
                    truckLeft2 = window.innerWidth - truckWidth;
                }
                truckStyle2.left = truckLeft2 + 'px';
                 
                

            }
            if(truckTop3 > (truckHeigth + window.innerHeight)){
                truckTop3 = -truckHeigth;
                truckLeft3 = Math.floor(Math.random() * window.innerWidth);
                if (truckLeft3 > window.innerWidth - truckWidth ){
                    truckLeft3 = window.innerWidth - truckWidth;
                }
                truckStyle3.left = truckLeft3 + 'px';
                

            }
            if(truckTop4 > (truckHeigth + window.innerHeight)){
                truckTop4 = -truckHeigth;
                truckLeft4 = Math.floor(Math.random() * window.innerWidth);
                if (truckLeft4 > window.innerWidth - truckWidth ){
                    truckLeft4 = window.innerWidth - truckWidth;
                }
                truckStyle4.left = truckLeft4 + 'px';
                

            }
            if(truckTop5 > (truckHeigth + window.innerHeight)){
                truckTop5 = -truckHeigth;
                truckLeft5 = Math.floor(Math.random() * window.innerWidth);
                if (truckLeft5 > window.innerWidth - truckWidth ){
                    truckLeft5 = window.innerWidth - truckWidth;
                }
                truckStyle5.left = truckLeft5 + 'px';
                

            }
            if(truckTop6 > (truckHeigth + window.innerHeight)){
                truckTop6 = -truckHeigth;
                truckLeft6 = Math.floor(Math.random() * window.innerWidth);
                if (truckLeft6 > window.innerWidth - truckWidth ){
                    truckLeft6 = window.innerWidth - truckWidth;
                }
                truckStyle6.left = truckLeft6 + 'px';
                
                

            }
        }
         
        function scoreBerekenen() {
            if((autoBottom - autoHeigth) == (truckBottom1 - window.innerHeight - truckHeigth)){
                if(collisionCheck == false){
                    score++; 
                    scoreSpan.innerText = score;
                }            
                
            }
            if((autoBottom - autoHeigth) == (truckBottom2 - window.innerHeight - truckHeigth)){
                if(collisionCheck == false){
                    score++; 
                    scoreSpan.innerText = score;
                }            
                
            }
            if((autoBottom - autoHeigth) == (truckBottom3 - window.innerHeight - truckHeigth)){
                if(collisionCheck == false){
                    score++; 
                    scoreSpan.innerText = score;
                }            
                
            }
            if((autoBottom - autoHeigth) == (truckBottom4 - window.innerHeight - truckHeigth)){
                if(collisionCheck == false){
                    score++; 
                    scoreSpan.innerText = score;
                }            
                
            }
            if((autoBottom - autoHeigth) == (truckBottom5 - window.innerHeight - truckHeigth)){
                if(collisionCheck == false){
                    score++; 
                    scoreSpan.innerText = score;
                }            
                
            }
            if((autoBottom - autoHeigth) == (truckBottom6 - window.innerHeight - truckHeigth)){
                if(collisionCheck == false){
                    score++; 
                    scoreSpan.innerText = score;
                }            
                
            }

        }


	});	

})();