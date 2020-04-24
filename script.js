   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
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
                        op1.innerHTML=this.questions[this.index].answers[0];
                        op2.innerHTML=this.questions[this.index].answers[1];
                        op3.innerHTML=this.questions[this.index].answers[2];
                        op4.innerHTML=this.questions[this.index].answers[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Thank you for participating!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
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


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



