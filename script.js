   const quizData = [
   {
       question: "when salma was born?",
       a: "06/03/2000",
       b: "07/03/2000",
       c: "08/03/2000",
       correct: "c",
   },
   {
       question: "what is salma's last name?",
       a: "bokarman",
       b: "Boukarmane",
       c: "Bokarmane",
       correct: "b",
   },
   {
       question: "what is her sister's name?",
       a: "Farah Boukarmane",
       b: "farah",
       c: "farah bokarman",
       correct:"a",
   },
   {
       question: "she is an engineering student at?",
       a: "Ensa Fes",
       b: "Ensa Hoceima",
       c: "Ensa Tetouan",
       correct: "b",
   },
 ];
        var i=0;
        var scoreNum=0;
        var question=document.getElementById('question');
        var submit=document.getElementById('submit');
        var ul=document.getElementById('list');

        question.innerHTML="<p>"+quizData[i].question+"</p>";
        var li = document.createElement("li");
        li.innerHTML="<input type=\"radio\" class=\"choix\" id=\"choix1\" name=\"choix\" value="+quizData[i].a+"><label for=\"choix\">"+quizData[i].a+"</label>";
        ul.appendChild(li);
        var li = document.createElement("li");
        li.innerHTML="<input type=\"radio\" class=\"choix\" id=\"choix2\" name=\"choix\" value="+quizData[i].b+"><label for=\"choix\">"+quizData[i].b+"</label>";
        ul.appendChild(li);
        var li = document.createElement("li");
        li.innerHTML="<input type=\"radio\" class=\"choix\"  id=\"choix3\" name=\"choix\" value="+quizData[i].c+"><label for=\"choix\">"+quizData[i].c+"</label>";
        ul.appendChild(li);
        submit.onclick=function(){Quest();};

      function Quest(){
          const rbs = document.querySelectorAll('input[name="choix"]');
          var selectedValue="";
          for (const rb of rbs) {
          if (rb.checked) {
            if(rb.id=="choix1")
            selectedValue = "a";
            if(rb.id=="choix2")
            selectedValue = "b";
            if(rb.id=="choix3")
            selectedValue = "c";
            // break;
            }
         }
          var score=document.getElementById("score");
          if (quizData[i].correct===selectedValue){
            scoreNum++;
           }
        i++;
        if(i<quizData.length){
          score.innerHTML="<h3 id=\"score\">Your score :"+scoreNum+"</h3>";
          var ul=document.getElementById('list');
          ul.innerHTML = "";
          question.innerHTML="<p>"+quizData[i].question+"</p>";
          var li = document.createElement("li");
          li.innerHTML="<input type=\"radio\" class=\"choix\" id=\"choix1\" name=\"choix\" value="+quizData[i].a+"><label for=\"choix\">"+quizData[i].a+"</label>";
          ul.appendChild(li);
          var li = document.createElement("li");
          li.innerHTML="<input type=\"radio\" class=\"choix\" id=\"choix2\" name=\"choix\" value="+quizData[i].b+"><label for=\"choix\">"+quizData[i].b+"</label>";
          ul.appendChild(li);
          var li = document.createElement("li");
          li.innerHTML="<input type=\"radio\" class=\"choix\"  id=\"choix3\" name=\"choix\" value="+quizData[i].c+"><label for=\"choix\">"+quizData[i].c+"</label>";
          ul.appendChild(li);
       }
       else{
        document.body.innerHTML="<h3 id=\"finalScore\">Your Final Score :"+scoreNum+"</h3><button id=\"reload\" onclick=\"location.reload()\">Reload</button>";
         }
     }
    //disable Right-click
     document.addEventListener("contextmenu", function(e){
     e.preventDefault(); 
     }, false);
     // Try to right click on this page - Nothing will happen.
     //disable shortcut key : F12 and CLT-U
     document.addEventListener("keydown", function(e){
     // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
     // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
     // THIS WILL ONLY DISABLE CONTROL AND F12
     if (e.ctrlKey || e.keyCode==123) {
      e.stopPropagation();
      e.preventDefault();
         }
     });
