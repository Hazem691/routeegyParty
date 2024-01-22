$(document).ready(function () {
    $(".boxIcon").click(function () {
        $(".boxContainer").addClass("open");
    });

    $(".closeing").click(function () {
        $(".boxContainer").removeClass("open");
    });
});

$(document).ready(function(){
    $("#about h2").on("click", function(){
        $("p").stop().slideUp(500);
        $(this).next("p").stop().slideToggle(500);
    });
});

$(document).ready(function(){
    let maxChar = 100;

    $("#messageTextarea").on("input", function(){
        let currChar = $(this).val();
        let remainingChars = maxChar - currChar.length;

        

        if (remainingChars >= 0) {
            $(".counterChar").text(remainingChars);
        } else {
            $(".counterChar").text("your available characters finished");
        }
    });
});


function calculateCountdown(targetDate) {
    // Parse the target date string into a Date object
    const targetDateTime = new Date(targetDate).getTime();

    // Update the countdown every second
    setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time difference
        const timeDifference = (targetDateTime - now);

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the countdown
       $(".theDay").html(`${days}`) ;
       $(".thehour").html(`${hours}`) ;
       $(".theminute").html(`${minutes}`);
       $(".thesecond").html(`${seconds}`)

    }, 1000); // Update every second
}

// Example: Call the function with a target date string
calculateCountdown("2024-02-01T00:00:00");