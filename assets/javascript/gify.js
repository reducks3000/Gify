//gify animal array
let animals = ["Cat", "Dog", "Horse", "Seal"];

function displayGif() {
    let animals = $(this).attr("data-name");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=WHqpLXdFmw6xzWwMkiuMJUZdLjE6NGBR";

//ajax call
$.ajax({url: queryURL, method: "GET"}).done(function(response){
//empties out gif div
    $('#gif').empty();

    for (let i = 0; i < response.data.length; i++) {
        let gifDiv = $('<div class = "gifDiv">');
        let rating = response.data[i].rating;
        let ratingDiv = $('<p>').html("Rating: " + rating);
        let animated = response.data[i].images.fixed_height.url;
        let still = response.data[i].images.fixed_height_still.url;
        let gifImg = $('<img class="gifImg">');
    
//setting gifs to still on load
        gifImg.attr('src', still);
        gifImg.attr('data-still', still);
        gifImg.attr('data-animate', animated);
        gifImg.attr('data-state', 'still');
//ratings for each gif
        gifDiv.append(ratingDiv);
        gifDiv.prepend(gifImg);
        $('#gifDump').prepend(gifDiv);
    }
});
};

