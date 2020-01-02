function pushGameScore(score) {
  // patch fetch
  debugger
  let game_score = {
    final_score: `${score}`
    // game_id: `${game.gameId}`
  };
  let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(game_score)
  };
  fetch(`http://localhost:3000/games/${game.gameId}`, configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}