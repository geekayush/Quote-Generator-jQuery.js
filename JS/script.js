var quotes = [['"If you want to achieve greatness stop asking for permission."', '-- Anonymous'], ['"Things work out best for those who make the best of how things work out."', '-- John Wooden'], ['"To live a creative life, we must lose our fear of being wrong."', '-- Anonymous'], ['"If you are not willing to risk the usual you will have to settle for the ordinary."', '-- Jim Rohn'], ['"Trust because you are willing to accept the risk, not because it\'s safe or certain."', '-- Anonymous'], ['"All our dreams can come true if we have the courage to pursue them."', '-- Walt Disney'], ['"Good things come to people who wait, but better things come to those who go out and get them."', '-- Anonymous'], ['"If you do what you always did, you will get what you always got."', '-- Anonymous'], ['"Success is walking from failure to failure with no loss of enthusiasm."', '-- Winston Churchill'], ['"Just when the caterpillar thought the world was ending, he turned into a butterfly."', '-- Proverb'], ['"Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them."', '-- Vaibhav Shah'], ['"Opportunities don\'t happen, you create them."', '-- Chris Grosser'], ['"There is nothing permanent except change."', '-- Heraclitus'], ['"It is better to be feared than loved, if you cannot be both."', '-- Niccolo Machiavelli'], ['"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself."', '-- Henry James'], ['"Learning never exhausts the mind."', '-- Leonardo da Vinci'], ['"Good judgment comes from experience, and a lot of that comes from bad judgment."', '-- Will Rogers'], ['"No act of kindness, no matter how small, is ever wasted."', '-- Aesop'], ['"Work like you don\'t need the money. Love like you\'ve never been hurt. Dance like nobody\'s watching."', '-- Satchel Paige'], ['"It is far better to be alone, than to be in bad company."', '-- George Washington'], ['"Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak."', '-- Thomas Carlyle'], ['"Keep your face always toward the sunshine - and shadows will fall behind you."', '-- Walt Whiteman'], ['"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."', '-- Samuel Beckett'], ['"Coming together is a beginning; keeping together is progress; working together is success."', '-- Henry Ford'], ['"Change your life today. Don\'t gamble on the future, act now, without delay."', '-- Simone dr Beauvoir'], ['"I have not failed. I\'ve just found 10,000 ways that won\'t work."', '-- Thomas A. Edison'], ['"Very little is needed to make a happy life; it is all within yourself, in your way of thinking."', '-- Marcus Aurelius'], ['"The secret of getting ahead is getting started."', '-- Mark Twain'], ['"If your actions inspire others to dream more, learn more, do more and become more, you are a leader."', '-- John Quincy Adams'], ['"Problems are not stop signs, they are guidelines."', '-- Robert H. Schuller'], ['"We know what we are, but know not what we may be."', '-- William Shakespeare'], ['"It\'s not what you look at that matters, it\'s what you see."', '-- Henry David Thoreau'], ['"You don\'t choose your family. They are God\'s gift to you, as you are to them."', '-- Desmond Tutu'], ['"Life isn\'t about finding yourself. Life is about creating yourself."', '-- George Bernard Shaw'], ['"The only true wisdom is in knowing you know nothing."', '-- Socrates'], ['"Believe you can and you\'re halfway there."', '-- Theodore Roosevelt'], ['"The future belongs to those who believe in the beauty of their dreams."', '-- Eleanor Roosevelt'], ['"Do not go where the path may lead, go instead where there is no path and leave a trail."', '-- Ralph Waldo Emerson'], ['"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."', '-- Buddha'], ['"It is during our darkest moments that we must focus to see the light."', '-- Aristotle'], ['"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."', '-- Helen Keller'], ['"Only I can change my life. No one can do it for me."', '-- Carol Burnett']];

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
