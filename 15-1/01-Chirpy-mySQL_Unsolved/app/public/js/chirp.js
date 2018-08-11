// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps
// AJAX grab and display all Example
// var moment = require("moment");

$(document).ready(function () {
    $.get("/api/all", function (data) {
        console.log(data);
        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {

                var row = $("#chirpsDisplay");
                row.addClass("someclass");

                row.append("<p>" + data[i].author + " says: " +  data[i].chirp + " on: " + data[i].time_created + "</p>");
                // row.append("<p>" + data[i].chirp + "</p>");
                // row.append("<p>" + data[i].time_created + "</p>");

                $("#container").prepend(row);

            }

        }

    });

    // Send an AJAX POST-request with jQuery Example
    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log(event.timeStamp)
        var timestamp = moment(event.timeStamp).format("h:mma");
        console.log(timestamp)
        var newChirp = {
            author: $("#author").val().trim(),
            chirp: $("#chirp").val().trim(),
            time_created: timestamp
        };
        $.ajax("/api/new", {
            type: "POST",
            data: newChirp
        }).then(
            function() {
                console.log("new chirp!", newChirp.chirp);
                location.reload();
            }
        );
    })
    
})


// When user chirps
