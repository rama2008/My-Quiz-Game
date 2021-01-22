getState()
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
 
  update(state)
    database.ref('/').update({
        gameState: state
      });
  
   
  
    asyncStart()
if (gameState===0) {
    constestant = new Contestant();
    var constestantCountRef = await database.ref('contestantCount').once("value");
    if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
    }
    question = new Question();
    question.display();
}                                  
    
