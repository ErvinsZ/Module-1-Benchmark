var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');


      var quiz={
                questions:[
                          {q:'Who is Gendalf?', answers:['Wizard in LOTR',"Harry Potter's brother",'King of Sweden','All of the mentioned'],answer:1},

                          {q:'What came first? Chicken or the egg?',answers:['Chicken','Egg','Both at the same time','No one knows'],answer:4},

                          {q:'Which of these creatures has three hearts?',answers:['Fungus beatle','Octopus','Sea horse','None'],answer:2},

                          {q:'Who is Santas favourite reindeer?',answers:['Prancer','Rudoplh','Dasher','Santa does not discriminate, he loves them all equally'],answer:2},

                          {q:'What alphabet is this - ես սիրում եմ պիցցա?',answers:['Russian','Hindi','Armenian','Thai'],answer:3}
                          ],
                index:0,


                           

                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        opt1.innerHTML=this.questions[this.index].answers[0];
                        opt2.innerHTML=this.questions[this.index].answers[1];
                        opt3.innerHTML=this.questions[this.index].answers[2];
                        opt4.innerHTML=this.questions[this.index].answers[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Thank you for participating!"      
                        opt1.style.display="none";
                        opt2.style.display="none";
                        opt3.style.display="none";
                        opt4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(highlight){
                   
                         var id=highlight.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	highlight.className="correct";
                         	highlight.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	highlight.className="wrong";
                         	highlight.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.score;
                }
 
           }


           window.onload=quiz.load();

           function button(highlight){
           	     quiz.check(highlight);
           	     quiz.notClickAble();
           }

         function  next(){
              quiz.next();
              quiz.clickAble();
         } 



