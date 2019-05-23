/* global $ */
$("#search-button").click(function(){
  let search = $("#search-term").val();
$.ajax({
  url: "https://api.giphy.com/v1/gifs/search?q=" + search + "&rating=pg&api_key=8Jc9gh1J97JiQtCrZsDsEYJxoj1HlcxH",
method: "GET",
  success: function(response) {
    console.log("ASD");
    $("#az1").empty();
    $("#az1").append("<img src='" + response.data[0].images.original.url + "'>");
  },
});
});

