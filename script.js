// setting up the objects that need to be used 
const MainObj = {
    inspirationalMessage: [ 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
                            "Failure is only the opportunity to begin again, this time more intelligently.",
                            'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.',
                            'Believe you can and you are halfway there.',
                            'The only way to succeed is to believe in yourself and your ability to make a difference in the world.',
                            "When you feel like quitting, remember why you started."
                        ],
    dailyTask: [ "Make someone smile today",
                 "Do some form of exercise",
                 "Make someone happy today",
                 "Do something that makes you feel good",
                 "Do something that makes you feel loved",
                 "Make a change in your mindset"

    ],
    jokeOfTheDay: ["What do you call a fish wearing a bowtie? Sofishticated.",
                   "Why did the tomato turn red? Because it saw the salad dressing!",
                   "Why did the math book look sad? Because it had too many problems.",
                   "Why did the scarecrow win an award? Because he was outstanding in his field.",
                   "What do you call a fake noodle? An impasta.",
                   "Why do bees hum? Because they don't know the words."

                    ],
    asciiArt: [ "|.-----.|",
                 "||x . x||",
                 "||_.-._||",
                 "`--)-(--`",
                "__[=== o]___",
               "|:::::::::::|",
               "-=========-()" ]
}

//Loop through the ascii art
const getAscii = (arr) => {
    for (let i = 0 ; i < arr.length ; i++ ) {
        console.log(arr[i]);
    }
}

//picking at an inspirationalMessage, dailyTask and jokeOfTheDay at random
const randMessage = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];   
}


console.log("Inspirational message: " , randMessage(MainObj.inspirationalMessage));
console.log("Daily task: " , randMessage(MainObj.dailyTask));
console.log("Your joke of the day: " , randMessage(MainObj.jokeOfTheDay));
getAscii(MainObj.asciiArt)
