const questionList = [
    {
        type: "radiogroup",
        name: 'question1',
        title: "You meet up with a friend who works in the military that you haven’t seen in 10 years. Your friend has since had kids and has lived in 4 different states across the country. What are you the most interested in hearing about?",
        choices: [
            { value: "A", text: ["What were each of the places like?", "How much do the houses cost in North Carolina versus Oregon?", "Are you guys planning on buying a house?", "What were the schools like?", "What are you doing job wise?"] },
            { value: "B", text: ["What have you been up to?", "Which state was your favorite?", "Tell me everything that happened. Start from the beginning.", "How are your kids doing?", "Have you made new friends in each place?", "Are you sick of moving?"] },
            { value: "C", text: ["Is it challenging to move so much?", "Have the kids been impacted by having to make new friends every 2-3 years?", "Are you doing okay, really?", "Is this something you want to keep doing, or are you ready to settle down in one place?", "How are you able to manage having to leave your job every 2-3 years?"] }
        ]
    },
    {
        type: "radiogroup",
        name: 'question2',
        title: "You just saw a movie with a friend. What do you talk about during or after the movie?",
        choices: [
            { value: "A", text: ["That movie was supposed to take place in Texas, but the landscape looks more like it was filmed in California.", "You know, the actor is actually British but he does such a great job with his American accent, you would never know!", "I wonder if that was a true story. Now I want to look it up.", "Is that the same actor from...?", "The acting was very good. They were so believable.", "I was not expecting that ending."] },
            { value: "B", text: ["That was a nice movie. I liked it.", "Can you believe the ending? That was crazy!", "What was your favorite part?", "(After the movie) Remember that scene when… that happened to me before.", "Didn’t you love how they…? It was so funny when…", "(During the movie if you’ve seen it already, before different scenes you might say) “You’re gonna love this part!” “This part is so funny!” “Watch this next part!”"] },
            { value: "C", text: ["I need 5 minutes just to reflect on this before we talk. It was so moving.", "I love movies that challenge me to think about my own life and where I’m at with things.", "Man, when he had to say goodbye to his daughter like that, knowing he’d never see her again… I can only imagine.", "I don’t know what we would do if that was us in that situation and that happened to our kid."] }
        ]
    },
    {
        type: "radiogroup",
        name: 'question3',
        title: "Which conversations are you most drawn to have with a friend at work/ or which ones would be the most interesting/natural to be a part of?",
        choices: [
            { value: "A", text: ["I went to this Thai restaurant last weekend and tried some foods that I had never heard of before. Here’s a picture of the names of them. I know you went to Thailand. Have you ever heard of these dishes?", "That copier isn’t working well again. I have an easy workaround though. This is what I usually do to get it working again. I’ve tried similar methods on other machines and it seems to do the trick there as well.", "Did you hear that they are taking cursive out of the curriculum in public schools?", "I bought these new sneakers. They are supposed to have really good arch support. I’ve been wearing them now for 3 weeks and no pain. Super supportive and I can walk for miles."] },
            { value: "B", text: ["Did you see the game last night (or episode of a show)? What did you think?", "How was your Spring Break? I did this and this… What did you do?", "Did you see the debate last night? Can you believe he said that?!", "I have a dog too! Here’s a picture of her. This is her at the beach last weekend, and here’s one of her with her favorite toy."] },
            { value: "C", text: ["When I traveled to Spain, I didn’t think I would know enough Spanish to get by. But whenever I tried speaking in Spanish they didn’t switch to English! It made me feel so good. All those years of studying and applying myself paid off. And it felt so good to actually be able to communicate in another language.", "I got my 15-year work plaque today. I can’t believe it’s already been 15 years. When I think back to the person I was when I first started working here, I was so shy and reserved. I didn’t speak up at meetings… I didn’t even trust my own intuitions. I can’t imagine how much more I’ll grow in the next 15 years. Or if I’ll even still be at this job.", "I can’t believe that my daughter is graduating high school next week. Time goes by too fast. I remember when she was a little baby in my arms and now she’s going to go off on her own and start her own life. I feel like I didn’t get enough years with her. Life is too short."] }
        ]
    },
    {
        type: "radiogroup",
        name: 'question4',
        title: "Which group of words and phrases best describes you?",
        choices: [
            { value: "A", text: ["Practical", "Common sense", "Factual/theoretical", "Small talk about topics (weather, news, health and fitness, design)", "Make connections to ideas/the world", "How things work/systems", "Stay up to date with ideas/what’s going on in the world", "I want to confirm that/look that up", "“That’s interesting”"] },
            { value: "B", text: ["Relational/conversational", "Stories (you usually know names of people, how everyone is connected, and what they’re up to)", "Small talk about people (How’s she doing? What’s new?)", "You usually tell the timeline of your day (or the story you’re telling) sequentially/in the order it occurred", "Follow up with people’s lives", "“That’s funny”"] },
            { value: "C", text: ["Reflective/deep", "Make connections to self and how you fit in the world", "You seek meaning and purpose in life", "Deep talks with others about struggles, growth, etc.", "Keep up with self—how far you’ve come and where you are going", "“That’s moving/powerful”"] }
        ]
    },
    {
        type: "radiogroup",
        name: 'question5',
        title: "You are on a group chat with friends. What would you most enjoy reading/watching?",
        choices: [
            { value: "A", text: ["I just read this article on which items not to buy at Costco because they are not actually a deal.", "Check out this list of the top 10 most quaint towns in Europe not overrun by tourism.", "Did you hear? Slight modifications made to the Schrödinger's cat paradox might explain why quantum particles can exist in more than one state simultaneously, while large objects–like the universe–seemingly cannot.", "I saw this article about this new brewery in town. It’s actually located at that old warehouse on the east side of town that hasn’t been in use for years. From what I can see, they seem to have some really unique beer options and a good variety.", "I just started reading this book called Promotion Magnet. At first I thought it would be a generic read about networking and goal-setting, but it’s actually a game-changer."] },
            { value: "B", text: ["You know how your niece loves to sing? I saw this video of this little kid singing, “A Whole New World”. It reminded me of her.", "I found this pic of so and so online. Look what he looks like now! I can’t believe it.", "What you said reminds me of this video I saw yesterday. Watch what they did. Maybe it’ll help.", "Random reels- (For example, a woman and her boyfriend are eating a burrito. Caption- “Trying to eat at same speed of boyfriend”. Every time he takes a bite she takes a bite. Her mouth is getting fuller and fuller. Eventually he finally looks over and figures it out. The funny part is watching her struggle to keep up and how long it takes him to realize what’s happening.)"] },
            { value: "C", text: ["Check out this podcast on overcoming negative self-talk.", "I read this really good book called Find Your Why. It focuses on the bigger picture and finding our life’s purpose.", "I saw this video of a dog that started limping during the months that his owner was in a cast to “be a support” during that time. It was so precious! I love how supportive that dog was to his owner. It warms my heart.", "Today I watched this documentary about this guy who sold his house and decided to live off the land. He moved from a fairly big city to a remote town in Alaska. It just fascinates me how he was able to give all that up, and also how he pushes through in order to survive—catching food, bearing the cold, not getting eaten by wild animals… just to get through another day. I wouldn’t want to do it, but I bet he’s learning a lot about himself through the process."] }
        ]
    },
    {
        type: "radiogroup",
        name: 'question6',
        title: "You are on a group chat with friends. What would you most enjoy reading/watching?",
        choices: [
            { value: "A", text: ["Talking for a half hour about any ONE of these:", "Different restaurants in the area- the type of food they serve, the way the food is prepared, the quality, the price, the ambiance…", "Health and fitness- discussing specific target areas of the body (how to build muscle/routines) or health foods/supplements to help with ailments", "The relativity of truth"] },
            { value: "B", text: ["Talking for a half hour about any ONE of these:", "A coworker’s wedding (the colors they chose, the decorations, the venue, who was invited, how they met…)", "Did you watch the game? How do you think they’re gonna do? What do you think about the recent trade? Swapping stories about your favorite players’ best/worst games and plays.", "Chatting about different actors and what movies they are in. Sharing which movie they were the best in and maybe even telling some fun facts about the actors’ personal lives along the way"] },
            { value: "C", text: ["Talking for a half hour about any ONE of these:", "Sitting down with your friend to try and sort out why she struggles with commitment in relationships", "Discussing the book <i>The Meaning of Human Existence</i>", "Reflecting with a friend about how long you’ve known each other and all you’ve been through together (sharing sentimental stories/moments that were dear to each of you)"] }
        ]
    },
    {
        type: "radiogroup",
        name: 'question7',
        title: "You are a school teacher and you come home and tell your partner about your day. (If you’re not a teacher, imagine a similar type of situation at the office or at your line of work). Which describes you best?",
        choices: [
            { value: "A", text: ["I tried this new method to teach fractions and it really made my day a lot easier. The students seemed to understand the lesson quicker and I felt like a better teacher!"] },
            { value: "B", text: ["Johnny did this today and Katie did that today… And my coworker said this… and this happened and that happened."] },
            { value: "C", text: ["It was amazing. Remember that girl that never wanted to speak in front of a group? I didn’t get to tell you yet but I’ve been working her in slowly on little things hoping it would help. Well, today I asked for a volunteer to come up to the front and demonstrate what their group learned and she raised her hand!! It was incredible to see her do that and it made me feel good too that maybe the little things I worked on with her made a difference."] }
        ]
    }
]