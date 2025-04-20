let tweet = prompt("Enter your tweet: ");
let tweetlength = tweet.length;

if (tweetlength <= 140) {
    alert(`${tweet}\n\n That JS Char tweet will work `);
}
else if (tweetlength > 140) {
    alert(`${tweet}\n\nYour ${tweetlength} Characters tweet , ${tweetlength - 140} characters too long`);
}