question()
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Question.getQuestionInfo();

    if(allQuestion !== undefined){
      var display_position = 130;
      for(var plr in allQuestion){
        if (plr === "question" + question.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allQuestions[plr].name + ": " + allQuestions[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && question.index !== null){
      question.distance +=50
      question.update();
    }
  

 display()
 this.title.html ("MyQuizGame");
 this.title.position(350,0);

 this.question.html ("Question:- what starts and ends with the letter 'E' , but has only one letter?");
 this.question.position(150,80);
 this.Option1.html("1: Everyone");
 this.Option1.position(150,100);
 this.Option2.html("2: Envelope");
 this.Option2.position(150,120);

 this.input1.position(150,230);