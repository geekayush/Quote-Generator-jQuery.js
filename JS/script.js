var quotes = [['"If you want to achieve greatness stop asking for permission."', '-- Anonymous'], ['"Things work out best for those who make the best of how things work out."', '-- John Wooden'], ['"To live a creative life, we must lose our fear of being wrong."', '-- Anonymous'], ['"If you are not willing to risk the usual you will have to settle for the ordinary."', '-- Jim Rohn'], ['"Trust because you are willing to accept the risk, not because it\'s safe or certain."', '-- Anonymous'], ['"All our dreams can come true if we have the courage to pursue them."', '-- Walt Disney'], ['"Good things come to people who wait, but better things come to those who go out and get them."', '-- Anonymous'], ['"If you do what you always did, you will get what you always got."', '-- Anonymous'], ['"Success is walking from failure to failure with no loss of enthusiasm."', '-- Winston Churchill'], ['"Just when the caterpillar thought the world was ending, he turned into a butterfly."', '-- Proverb'], ['"Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them."', '-- Vaibhav Shah'], ['"Opportunities don\'t happen, you create them."', '-- Chris Grosser']];

function newQuote() {
    var random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[random][0];
    document.getElementById('person').innerHTML = quotes[random][1];
}

function startTime() {
    var today = new Date();
    var ampm = '';
    var hour = today.getHours();
    if (hour > 12) {
        hour = hour - 12;
        ampm = 'PM';
    } else if (hour < 12) {
        ampm = 'AM';
    } else if (hour == 12) {
        hour = 12;
        ampm = 'PM';
    } else {
        ampm = 'PM';
    }
    if (hour == 0)
        hour = 12;

    var m = today.getMinutes();
    if (m < 10) {
        m = '0' + m;
    }
    document.getElementById('time').innerHTML = hour + ":" + m + " " + ampm;
    var t = setTimeout(function () {
        startTime()
    }, 500);
}

function startDate() {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();
}
