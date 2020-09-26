// builds lunr
var index = lunr(function () {
  this.field('url')
  this.field('title')
  this.field('date')
  this.field('author')
  this.field('content', {boost: 10})
  this.ref('id')
  
  this.add({
    url: "/memories/happy-birthday-to-the-one-and-only",
    title: "",
    date: "December 5, 2019",
    author: "Rana",
    content: "Happy birthday, to the one and only. ",
    id: 0
  });
  this.add({
    url: "/memories/dear-endicott-in-june-2016-your-mother",
    title: "",
    date: "November 4, 2019",
    author: "Chuck Smith",
    content: "Dear Endicott,\n\nIn June 2016 your mother informed me of your passing.  Her message was clear.  “My son is gone.  I’ll let you know when I can talk about it.”  I was in the Ozarks at the time, celebrating my nephews wedding and my sister’s remission from Acute Lymphoblastic Leukemia.  My entire family was there.  Your mother’s news couldn’t have been more of a juxtaposition to the events that brought us there.  Who knew that seven months later, the A.L.L. would be back and the depth of grief your family had experienced would now be known by mine. \n\nYour mother and I can now talk about it.\n\nThe interesting thing is that during that June vacation, I was in the midst of leaving my then job and pursuing two other options.  One was doing the same job I was then doing.  It would be about the same pay, the same drive, and the same challenges.  The other opportunity would be something totally new.  Starting a new career in my early fifties.  Fear was driving me to take the job I knew I could be good at. \n\nHowever, your life ended up having a huge impression upon mine.  Every time your mother or father and I met professionally, we would always share what our kids were doing.  College.  Exams.  Driving. Dating.  The most interesting stories at the time were always the ones that were the answer to my question, “How’s Endi?”  Over time, while I never met you, I was able to learn a little bit about how you viewed life.  All in.  No holds barred.  In reflecting over my career decisions, I realized I could play it safe or I could live it all in.  No holds barred. \n\nBecause of you, I chose the new path…the new direction. \n\nWebster’s defines impression as “a characteristic, trait, or feature resulting from some influence.”  “Stamp.”  “Imprint.”  Life is amazing to me when I consider how someone I never met lived their life in a way that imprinted itself upon mine.  Your perspective on life continues to live on, Endicott.  Therefore, you live on…continuing to influence the rest of us to not hold back, to leave an impression and make a difference.   ",
    id: 1
  });
  this.add({
    url: "/memories/186972458108",
    title: "The 4th Annual Endi Olympics at Echo Hill",
    date: "August 8, 2019",
    author: "Liz",
    content: "&lt;/source&gt;",
    id: 2
  });
  this.add({
    url: "/memories/missing-our-endicott-celebrated-mass-followed-by",
    title: "",
    date: "June 7, 2019",
    author: "Liz",
    content: "Missing our Endicott- celebrated Mass  followed by Crepe breakfast w many wonderful Clifton neighbors and friends.\n\nWe all love you so much",
    id: 3
  });
  this.add({
    url: "/memories/thinking-of-endo-allie",
    title: "",
    date: "June 7, 2019",
    author: "Allie",
    content: "Thinking of Endo- Allie",
    id: 4
  });
  this.add({
    url: "/memories/morning-at-endis-favorite-tamarama-beach-june",
    title: "",
    date: "June 7, 2019",
    author: "Allie",
    content: "&lt;/source&gt;\n\nMorning at Endi’s favorite- Tamarama Beach. June 6, 2019. Love, Allie",
    id: 5
  });
  this.add({
    url: "/memories/simon-second-week-of-college-had-this-artwork",
    title: "",
    date: "June 6, 2019",
    author: "Sam",
    content: "Simon- second week of college had this artwork created. Fall 2018",
    id: 6
  });
  this.add({
    url: "/memories/in-december-2018-endis-parents-and-brothers-went",
    title: "",
    date: "January 18, 2019",
    author: "Sam",
    content: "In December 2018 Endi’s parents and brothers went to Germany to see Endi’s German exchange family. He loved them and they loved him and we had a wonderful time. Come visit!",
    id: 7
  });
  this.add({
    url: "/memories/a-birthday-candle-for-my-angel-above-on-his-23rd",
    title: "",
    date: "December 5, 2018",
    author: "Liz",
    content: "A birthday candle for my angel above on his 23rd Birthday - you are so loved and so missed my boy\n\n\n\n\n\nIn NYC and thinking of you every moment. - mom",
    id: 8
  });
  this.add({
    url: "/memories/the-kids-and-i-spend-a-week-on-the-waters-of",
    title: "",
    date: "December 5, 2018",
    author: "Jenny",
    content: "The kids and I spend a week on the waters of Muskoka, Ontario every summer. The past two summers, I can’t go into or on the water without thinking of you or thinking of my own Julian. We kayaked with you each day ❤️",
    id: 9
  });
  this.add({
    url: "/memories/this-yellow-truck-was-something-that-i-found-on",
    title: "",
    date: "December 5, 2018",
    author: null,
    content: "This yellow truck was something that I found on the rocks as I left Tama when I visited you earlier this year. I tried to find it again as another sign but I could feel you today without any tangible proof needed.\n\nI miss you so much Endo and wish I could hug you and listen to music and hang out aimlessly at the beach or in my room all the time like we once did. I know that we’d have an awesome day of activities planned but today is actually a bit gloomy so maybe the beach would be off the cards this time.\n\nYou’d be happy to hear that Dana has found herself a best friend at college too and that they do almost everything we did together - even mario kart!!! I still have all of your unbeaten records on that damn game.\n\nHappy 23rd birthday beautiful boy. We are all thinking of you and miss and love you so much that no words can describe.\n\nYours always, Al. Xxxx",
    id: 10
  });
  this.add({
    url: "/memories/two-years-today-that-you-so-suddenly-left-us-the",
    title: "",
    date: "December 5, 2018",
    author: null,
    content: "Two years today that you so suddenly left us. The universe was crying with us yesterday in Sydney as I thought of you. There are so many memories I have of us, of you, at Johns and at Tama. I went down with Soph and Dana and we brought you the closest thing I could get to daisies - your mum had told me previously when she visited how you used to pick flowers for her. What a chivalrous gentleman you were Endo!!!!! Whenever I come down to Tama and talk to you I can feel you there. Whether it’s a cold breeze or a feeling inside that just assures me I’m not alone and some mad woman talking out to the ocean with nobody around. But last night more than ever. You were there as my feet were hugged by the ocean that took you, you were there when I curled up into the side of the rocks where we sat that time sheltered from the storm that came over, and you were there as we left just sitting on the edge of a rock and left us a toy truck to let us know. Your mother then told me how you had lost a toy truck as a child and that brought me to tears because it was the biggest sign I’ve ever received from you. I miss you each and every day and I wish I had the chance to say so many more things to you. Thank you for looking out for me and guarding me and giving me the strength to pull through the hard times, just as you helped me through them at Johns. I know you are looking out for the rest of your famil and friends too and you truly are an angel Endo. I’ve had heaps of heartbreaks as you probably know, but this is none like any other. I miss you and I love you. Forever yours Al. 💕",
    id: 11
  });
  this.add({
    url: "/memories/oh-endi-every-day-without-you-is-so-painful",
    title: "",
    date: "August 22, 2018",
    author: null,
    content: "Oh Endi. Every day without you is so painful, almost more than I can bear. So when I tell you that today is the worst day in a long time, that should really tell you something. Since you can’t be here with me, I thought I’d write you a letter.\n\nWe took your brother Simon to college yesterday. The University of Pittsburgh, but you know that. He’s an amazing young man, and you deserve a lot of the credit for how great he is. I never like to compare Simon to you too much, because he deserves to be his own person (and he is), but I also know that you loved having a younger brother and you saw in him an opportunity to shape him and make him (almost) as cool and confident as you. You succeeded. He’s going to thrive, and you’ll always be a part of him.\n\nWhen you were little, remember, people said you and Holden were like twins. Always together, and him always looking out for you. Then, as you got older, you went in your own directions (as it should be), and I think you felt that in many ways you were very different from Holden. But when you learn that he is in Senegal, in the Peace Corps, helping others, you see just how similar you two have always been. Same spirit of adventure, same sense of no boundaries, same desire to make the world a better place, same confidence and big heart.\n\nHannah, your rival and beloved big sister, is a lawyer in New Hampshire (but you know that, too). She, too, is helping others as a public defender. As much as you loved to complete with Hannah, I know you must be very proud to see the good that she is doing. You, too, have always had a powerful sense of justice.\n\nI am so proud of all of them. And I am proud of you, too, Endi. What a truly incredible young man. What a wonderful son to have had in my life.\n\nThe day before we took Simon to college, he rolled into the driveway in his Jeep with the windows rolled down and the music loud. Just like you used to. At the time it made me smile (the truth is I think about you and smile all the time, because of your sheer awesomeness). But now I am remembering that, and I am crying. I want you to be here with us so much. Right now, by my side, where you are supposed to be.\n\nEndi, I love you. More than these words or any can ever say. Love, Father. August 22, 2018",
    id: 12
  });
  this.add({
    url: "/memories/176920717963",
    title: "",
    date: "August 12, 2018",
    author: null,
    content: "",
    id: 13
  });
  this.add({
    url: "/memories/176920710178",
    title: "",
    date: "August 12, 2018",
    author: null,
    content: "",
    id: 14
  });
  this.add({
    url: "/memories/thank-you-echo-hill-camp-for-another-beautiful",
    title: "",
    date: "August 12, 2018",
    author: null,
    content: "Thank you Echo Hill Camp for another beautiful Endi Olympics Day 2018.\n\nAlways in Spirit - the skies were blue",
    id: 15
  });
  this.add({
    url: "/memories/one-way-those-of-who-love-endi-show-our-love-is",
    title: "",
    date: "June 6, 2018",
    author: null,
    content: "One way those of who love Endi show our love is through artwork. His great-aunt Geri, an accomplished painter in California, created this image of Endi in the wilds of West Virginia.\n\n\n\nEndi’s friend Alyssa created these two mystical studies.\n\n\n\n\nAnd recently Endi’s lifelong friend Bella created this body artwork:\n\n\n\n\nWhen read upside-down, it reads Echo. That is a reference to Echo Hill Camp they both attended and loved — and to the echo of Endi we will always hear.",
    id: 16
  });
  this.add({
    url: "/memories/missing-you-my-endicott-but-know-that-you-are-in",
    title: "",
    date: "June 6, 2018",
    author: null,
    content: "&lt;/source&gt;\n\nMissing you my Endicott but know that you are in my heart always, mom",
    id: 17
  });
  this.add({
    url: "/memories/easter-week-on-isla-mujeres-always-missing-you",
    title: "",
    date: "April 3, 2018",
    author: null,
    content: "Easter Week on Isla Mujeres - always missing you and thinking of you with love. Peace our son.",
    id: 18
  });
  this.add({
    url: "/memories/somewhere-somehow-i-know-that-endicott-saw-his",
    title: "",
    date: "February 6, 2018",
    author: null,
    content: "Somewhere, somehow I know that Endicott saw his beloved Eagles win a Super Bowl.  \n\nEndi, you were definitely down in the family room cheering with all of us. Fly Eagles Fly 🦅!",
    id: 19
  });
  this.add({
    url: "/memories/sam-and-simon-christmas-week-in-porto-endi-you",
    title: "",
    date: "January 3, 2018",
    author: null,
    content: "Sam and Simon - Christmas week in Porto. Endi, you are never far from our hearts. Mom",
    id: 20
  });
  this.add({
    url: "/memories/to-endi-on-your-22nd-birthday",
    title: "",
    date: "December 5, 2017",
    author: null,
    content: "To Endi on your 22nd birthday\n\nThere are so many things I would say to you if I could. Instead I will say the only words I can. That I miss you every single day. That I am crying as I write this. That I think you were and are amazing. And that the only comfort for the loss and pain of who you could have been is the joy and laughter of remembering who you were. So creative, so funny, so beautiful, so challenging, so adventurous. Please know—somehow, somewhere—that your whole family misses you and loves you … and will never forget you.\n\nLove, Dad",
    id: 21
  });
  this.add({
    url: "/memories/167539354543",
    title: "",
    date: "November 15, 2017",
    author: null,
    content: "",
    id: 22
  });
  this.add({
    url: "/memories/hey-endo-its-been-a-while-since-ive-posted-but-a",
    title: "",
    date: "November 15, 2017",
    author: null,
    content: "Hey Endo it’s been a while since I’ve posted but a year has gone by since you left us so suddenly and the past week has been challenging and full of emotions. Everyone is still thinking of you, not a day goes by that we don’t miss you or forget you. The past week has been absolutely pouring with rain too so I guess it’s just your way of telling us you’re here and letting us cry with you for missing us just as much as we miss you. I miss you heaps and there are so so many things I wish I could have said to you. Again, sorry is the first thing I would say. I would then thank you for always looking out for me and continuing to do so. I love you Endo. Hope you’re doing well and having infinite laughs and adventures. Here’s a couple of photos - some of your friends celebrating your life and remembering all of the good times, and a couple of candles we lit after your mass at John’s. Yours always, Al. ",
    id: 23
  });
  this.add({
    url: "/memories/one-year-ago-today-june-8-2017-i-read-on",
    title: "",
    date: "November 15, 2017",
    author: null,
    content: "One year ago today (June 8, 2017) I read on facebook what had happened. I remember being at work and I must have looked really shocked cause my boss had asked if I was okay. I remember my body changing from hot to cold and feeling sick. That might sound crazy cause we weren’t friends but I’d still known you and I really enjoyed the time you were spending in Germany.\n\nSo one month ago I got this tattoo as a tribute to you, Endi and to the loved ones I lost.\n\nMiss you!",
    id: 24
  });
  this.add({
    url: "/memories/i-miss-you",
    title: "I Miss You",
    date: "November 15, 2017",
    author: null,
    content: "I’m just writing to say I miss you, I hope you can hear when I talk to you sometimes, like you remember a few weeks ago, in my car that one night when a song came on it felt as though you were right next to me, signing along with me and when the song was over I talked of all our memories and I laughed and cried but I also felt comfort. I wish you were here.",
    id: 25
  });
  this.add({
    url: "/memories/robinson-secondary-school-stadium-dedicated-fall",
    title: "",
    date: "September 11, 2017",
    author: null,
    content: "Robinson Secondary School Stadium \nDedicated Fall 2016 \nThank You Rams Football  ",
    id: 26
  });
  this.add({
    url: "/memories/165245966808",
    title: "",
    date: "August 16, 2017",
    author: null,
    content: "",
    id: 27
  });
  this.add({
    url: "/memories/165245948383",
    title: "",
    date: "August 16, 2017",
    author: null,
    content: "",
    id: 28
  });
  this.add({
    url: "/memories/2nd-annual-endicotts-olympic-day-at-echo-hill",
    title: "",
    date: "August 16, 2017",
    author: null,
    content: "2nd Annual Endicott’s Olympic Day at Echo Hill Camp\n\nAugust 8th 2017\n\nA big thank you to the camp and staff!",
    id: 29
  });
  this.add({
    url: "/memories/my-dear-endicott-this-june-6-2017-is-a-date-i",
    title: "",
    date: "June 7, 2017",
    author: null,
    content: "My dear Endicott,\n\nThis June 6 2017, is a date I have been dreading. How I wish I could go back in time and hold that young boy seen here on his first day of kindergarten. If only time could stand still.\nNot a moment goes by without my heart aching for you.\n\nI love you. Mom",
    id: 30
  });
  this.add({
    url: "/memories/my-endithis-mothers-day-was-warm-with-the-love",
    title: "",
    date: "May 15, 2017",
    author: null,
    content: "My Endi,\n\nThis Mother’s Day was warm with the love of your dad, siblings, family and friends but there was one certain love missing …from my “Aussie Endi.”\n\nWe released five butterflies in your memory w one released at the goal posts near the Oasis and several off the deck near your outdoor shower and the sauna which have sat dormant since your last use.\n\nMy love for you will always be never-ending. You are a joy.\n\nMom",
    id: 31
  });
  this.add({
    url: "/memories/my-dear-endi-today-march-22-is-our-one-year",
    title: "",
    date: "March 23, 2017",
    author: null,
    content: "My dear Endi,\n\nToday, March 22, is our one year anniversary where you and I enjoyed “The Barber of Seville” at the Sydney Opera House. We dined at a lovely restaurant in the Rocks neighborhood and walked to the Opera House. I surprised you with orchestra pit tickets. Where you sat you had plenty of leg room and could almost touch the magnificent curtain. You were full of life that evening and would grin every time a familiar song would play. I’d close my eyes and think of a little Holden and a little Endi watching Bugs Bunny and singing “…you’re so next..”\n\nI love you, my dear child. I miss you terribly my love, my angel.\n\nMom",
    id: 32
  });
  this.add({
    url: "/memories/claudia-visits-from-australia-feels-endis-spirit",
    title: "",
    date: "March 8, 2017",
    author: null,
    content: "Claudia visits from Australia. Feels Endi’s spirit in Ozzie.",
    id: 33
  });
  this.add({
    url: "/memories/wild-child-beautiful-boy-you-drove-us-crazy-you",
    title: "",
    date: "February 12, 2017",
    author: null,
    content: "Wild child \nbeautiful boy \nyou drove us crazy \nyou gave us joy \nyou left a hurt \ntime cannot heal \nyou left a light \nfate cannot steal\n\nMom and Dad",
    id: 34
  });
  this.add({
    url: "/memories/i-think-about-you-every-day-endi-and-i-miss-you",
    title: "",
    date: "February 12, 2017",
    author: null,
    content: "I think about you every day, Endi. And I miss you so much.\n\nThe time I spent with you was an adventure and not one second was wasted. I remember the first time I met you very well. It was in 2012, at Washington Airport and I just got there from Germany, very nervous about meeting my host family. You came up to me with your big smile, you were very excited and handed me a super corny ‘I LOVE YOU’ balloon. From that point, I knew you were a joker and that we would have a good time!\n\nThe next year you came to Germany, and I am still so thankful you went and joined my Football Team during your stay. We had just transferred to the highest Youth American Football League in Germany and it was a close fight for staying in the league. You joined the practice, and the other kids including me just didn’t stand a chance when going against you in drills. Eventually, I stood on the field with you in the final game of the season. I’m happy to be able to say that. It was a great honor. The impact you made on that game was unbelievable. You played as a tight end and defensive end - to you it was business as usual. We were on offense and I remember rolling out and throwing you a terribly high pass on your out-route. Instead of letting it pass, you gave it all, jumped what felt like three meters high and made a spectacular one-handed grab. At the latest from then on everybody in the entire club knew who the ‘American kid’ was. We won the game and it was very close, it was like a movie. You helped save my team from going back to League 2 and the coach likes to reminisce on that day. He always says if it wasn’t for you, we wouldn’t have made it and I agree. The team went on evolving and reached the Juniorbowl in 2015, two years later. It was so beautiful. You helped a big bunch of kids make incredible memories there, that they will remember for a lifetime. The coach and the entire team send their condolences to the Ackerman family. Endi, you have left your mark here and everyone on the team remembers you very well and loves you!\n\nI had the privilege to come visit you and your lovely family again in 2014. It was one of the most exciting summers I ever had. I learned a lot from you during that time. You were a winner. I could tell by the way you turned off your phone after losing a game of ‘connect four’ on it, the way you focused when laying table tennis and the way you tackled your workouts: The Endi way. If you were in it, you were in it for 100% and you were in it to win. You made me strive to become a winner, too. You showed me how to eat right for building up muscle, which is Chipotle every day for those who don’t know. I remember how we used to sneak out of your parents’ house through the roof at night to go meet friends. I thought it was fantastic. Really, every day spent with you was an adventure.\n\nI always wanted you to come visit me in Germany or in England this past year, but it just didn’t work out. I just wish we could have sat at the fireplace one more time and talk about the memories we made together and share what we are up to. I would have loved to see what kind of man you have become. I am 1000% sure you would have been someone people love to be around, because you were generous, funny, a leader with a lot of energy and an inspiring human being.\n\nI have always heard that people live on in our memories. I think what’s even better is to let you live on in my deeds.\n\nI want to be brave, confident, loving and give life my all, just like you.\n\nI love you Endi.\n\nAnd I love you so much, Mr. and Mrs. Ackerman. Thank you for making it possible, that your son and I became friends. There is so much love in your family and I feel blessed to have lived with you. For so long I didn’t know what to say to you in those dark times but now I know: I love you, and also Holden, Hannah and my little tall buddy Simon, who has probably grown so much. I miss you all.",
    id: 35
  });
  this.add({
    url: "/memories/merry-christmas-endicott-we-love-you-so-much",
    title: "",
    date: "December 29, 2016",
    author: null,
    content: "Merry Christmas Endicott, we love you so much.\n\n  The Ackermans",
    id: 36
  });
  this.add({
    url: "/memories/endi-i-took-this-photo-of-you-doing-what-you",
    title: "",
    date: "December 5, 2016",
    author: null,
    content: "Endi, I took this photo of you doing what you loved to do back in March 2016. Not a moment goes by without you in my thoughts. Happy 21st Birthday my baby boy. Love you. Mom",
    id: 37
  });
  this.add({
    url: "/memories/i-think-of-endi-every-day-and-when-i-do-this",
    title: "I think of Endi every day, and when I do, this passage keeps playing in my head",
    date: "December 5, 2016",
    author: null,
    content: "“O my son Absalom,my son, my son Absalom! Would I had died instead of you, O Absalom, my son, my son!”",
    id: 38
  });
  this.add({
    url: "/memories/153870850068",
    title: "",
    date: "November 30, 2016",
    author: null,
    content: "",
    id: 39
  });
  this.add({
    url: "/memories/endicott-claudia-duncan-tom-and-gemma-st",
    title: "",
    date: "November 1, 2016",
    author: null,
    content: "Endicott, Claudia, Duncan, Tom and Gemma \nSt Paddy’s Pub Crawl 2015 ",
    id: 40
  });
  this.add({
    url: "/memories/endicott-and-claudia-victory-dinner-at-st-johns",
    title: "",
    date: "November 1, 2016",
    author: null,
    content: "Endicott and Claudia \nVictory Dinner at St John’s College in Sydney, 2015",
    id: 41
  });
  this.add({
    url: "/memories/on-saturday-november-26-we-will-be-honoring-and",
    title: "",
    date: "October 12, 2016",
    author: null,
    content: "On Saturday, November 26 , we will be honoring and remembering our beloved son Endicott. We invite friends to join with us for a celebration of his spirit.\n\nHere are the details.\n\n1:00-2:00 p.m. Visitation Hour\n2:00-3:00 p.m. Service\nFairfax Memorial Park\n9902 Braddock Road\nFairfax, VA 22032\n(703) 425-9702\n\nCelebration of Life\nImmediately following service\n3:30-5:30\nTrummer’s On Main\n7134 Main Street\nClifton, VA 20124\n(703) 266-1623\n\nNo need to respond or confirm. No one is expected but all are welcome. If you can be there with us, please do. And please feel free to share with others.\n\nWe are thankful to the many friends and family members who have made donations in honor of our son. Those wishing to do the same should consider these organizations:\n\nFriends of Homeless Animals (Aldie, Virginia)\nIronwood Pig Sanctuary (Marana, Arizona)\nRobinson Football Boosters (Fairfax, Virginia)\nEcho Hill Camp (Worton, Maryland). Contributions made payable to the camp, with “Endicott Fund” in the memo line, will be used to send a camper who is unable to afford the tuition to camp every year. This is the camp all our kids attended, that Endicott loved. These contributions are not tax-deductible.\n\nThank you",
    id: 42
  });
  this.add({
    url: "/memories/endicott-junior-year-at-robinson-october-2012",
    title: "",
    date: "October 4, 2016",
    author: null,
    content: "Endicott, junior year at Robinson, October 2012",
    id: 43
  });
  this.add({
    url: "/memories/endicott-october-1996-10-months-old-playing-in",
    title: "",
    date: "October 4, 2016",
    author: null,
    content: "Endicott, October 1996, 10 months old playing in the leaves",
    id: 44
  });
  this.add({
    url: "/memories/a-reflection-of-endicott",
    title: "A Reflection of Endicott",
    date: "September 4, 2016",
    author: null,
    content: "A Reflection –\n\nGiven by Liz Dixon, Endicott’s mother\n\nRequiem Mass for Endicott Ackerman\n\nSt John’s College Chapel\n\n18 August 2016\n\nThe Ackerman Family wants to express our heartfelt thanks to all the students of St. John’s, the leadership of St. John’s, the staff of W.B. Bull Funeral Home, the U.S. Consulate and of course, Endicott’s beloved friends. The outpouring of love and support has given us the strength to continue this now altered journey of life for all of us. We are taking ½ days at a time and it has and will continue to be our heart breaking process – a life on earth without Endicott.\n\nOne of the most difficult aspects of grief, is the loss of potential. And with Endicott there was so much potential. In everything. When he was little one of my nick-names for him was Spark-A- Lark. He’d walk in a room and he’d look up at you with those big brown eyes and you just knew something was going to happen, most likely fun, a game of wit, mischief or a combination of the three.\n\nHe’s had that same confident, grab the world by the horns attitude since he was two. Nothing was ever going to stop him once he put his mind to it.\n\nIn his senior year of high school, Endi announced that he was going to take a gap year before going to college, to travel and figure out where it was he wanted to go and what he wanted to study. We said “Okay” but you must do something extraordinary and not let the year slip by you.\n\nHe came home two weeks later and informed us that he secured a working visa and a job in the Outback working on a cattle ranch. Sam and I looked at each other and said “What?”\n\nEndi gave us that grin and smiled, “I always wanted to be a cowboy.”\n\nSo on the way to the airport for his first departure we reminded him that he was going to have to apply to schools for college while away. We asked for a short list and his reply was “University of Sydney, they have a great medical program.” I knew right then that it would be a long time until he returned to the states to stay.\n\nI visited Endi here at St. John’s and explored Sydney this past March. I am so blessed to have walked through all the neighborhoods with him. We visited some of his favorite restaurants, enjoyed the Barber of Seville at the Opera House, we walked the Botanical Gardens, shopped and met some of his wonderful friends. We took the ferry to Manly Island and of course walked the coastal walk, and I experienced Bondi Beach with him hand in hand.\n\nAs we were walking he mentioned to me that wherever he ended up in this world he had to be near the ocean. He needed to swim every day of his life in it. I asked about medical schools and he quickly replied Sydney, South Africa and Scotland.\n\nHe shared with me that his goal was to live all over the world in three year time-spans. To experience life and its cultures.\n\nThe world is a big place.\n\nWhat I ask each of you is to keep Endi’s spirit alive, have fun, read good books, do amazing works, drink good drinks mixed properly, love your family, adopt a dog, keep the faith.\n\nRalph Waldo Emerson wrote:\n\n“It is not length of life, but depth of life.”\n\nEndi was my gift from heaven and that he will always be.\n\nThank you.",
    id: 45
  });
  this.add({
    url: "/memories/duncan-hannah-liz-bronte-and-allie-at-bondi",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Duncan, Hannah, Liz, Bronte and Allie at Bondi Beach, August 18, 2016. Remembering Endi.",
    id: 46
  });
  this.add({
    url: "/memories/lizs-final-day-at-bondi-beach-saying-my-farewell",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Liz’s final day at Bondi Beach saying my farewell to the water",
    id: 47
  });
  this.add({
    url: "/memories/liz-and-allie-in-endis-favorite-el-topo",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Liz and Allie in Endi’s favorite El Topo",
    id: 48
  });
  this.add({
    url: "/memories/duncan-and-claudia-celebrating-endi-in-style-with",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Duncan and Claudia celebrating Endi in style with his favorites, oysters and champagne w Liz",
    id: 49
  });
  this.add({
    url: "/memories/liz-and-duncan-remembering-endo",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Liz and Duncan remembering Endo",
    id: 50
  });
  this.add({
    url: "/memories/liz-and-claudia-at-one-of-endis-favorite-museums",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Liz and Claudia at one of Endi’s favorite museums ",
    id: 51
  });
  this.add({
    url: "/memories/endis-favorite-animal-at-the-zoo-taronga-zoo",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Endi’s favorite animal at the zoo. Taronga Zoo, Sydney, August 2016",
    id: 52
  });
  this.add({
    url: "/memories/hannah-at-bondi",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Hannah at Bondi",
    id: 53
  });
  this.add({
    url: "/memories/the-whales",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "The whales.",
    id: 54
  });
  this.add({
    url: "/memories/claudia-and-allie-on-the-rocks-watching-the-two",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Claudia and Allie on the rocks watching the two hump back whales who came to greet us. August 18, 2016",
    id: 55
  });
  this.add({
    url: "/memories/hannah-and-liz-at-bondi",
    title: "",
    date: "September 4, 2016",
    author: null,
    content: "Hannah and Liz at Bondi",
    id: 56
  });
  this.add({
    url: "/memories/149582952793",
    title: "",
    date: "August 27, 2016",
    author: null,
    content: "",
    id: 57
  });
  this.add({
    url: "/memories/149582950993",
    title: "",
    date: "August 27, 2016",
    author: null,
    content: "",
    id: 58
  });
  this.add({
    url: "/memories/thinking-of-you-all-i-wanted-to-drop-you-sam-and",
    title: "",
    date: "August 22, 2016",
    author: null,
    content: "Thinking of you all. I wanted to drop you Sam and Liz a quick line to express my deepest sympathies on the loss of your beloved Endicott. My son Jack new Endicott from Sydney University and I actually met him once very briefly myself dropping Jack into town one day. Endicott really left a marked impression on me with his confidence, firm handshake, eye contact and sensitivity. I often asked Jack about him. I think he really loved Australia and the love was clearly reciprocal. When it was thought to be Endicott who was lost at sea I prayed that he would be found safley and that he would appear somewhere with that cheeky smile firmly in tact. My friend Pastor played the organ at today’s vigil at college and he was really moved by the occasion and by the power Liz of your eulogy. I wished to be there myself. My family send all our love. god Bless. Scott, Sue, Jack, Samuel, Olivia and Luke Campbell",
    id: 59
  });
  this.add({
    url: "/memories/more-from-bondi",
    title: "",
    date: "August 22, 2016",
    author: null,
    content: "More from Bondi",
    id: 60
  });
  this.add({
    url: "/memories/had-the-privilege-of-getting-to-visit-the",
    title: "",
    date: "August 22, 2016",
    author: null,
    content: "Had the privilege of getting to visit the beautiful Sydney, Australia. Could not stop thinking about Endi as I visited Sydney University and Bondi Beach. I get why he decided to stay out there, he couldn’t have chosen a more beautiful place. I wanted to post this just to pay tribute to his memory and give a piece of his spirit to everyone who misses him so much. The feeling of being out there is truly something else and it makes me happy to think of him spending so much time in such an astounding, beautiful, and spiritual place. RIP to a great person and a truly inspiring spirit.",
    id: 61
  });
  this.add({
    url: "/memories/149336236778",
    title: "",
    date: "August 22, 2016",
    author: null,
    content: "",
    id: 62
  });
  this.add({
    url: "/memories/frat-night-in-silly-season-2015",
    title: "",
    date: "August 22, 2016",
    author: null,
    content: "Frat night in Silly Season 2015",
    id: 63
  });
  this.add({
    url: "/memories/gemma-endicott-and-liv-at-our-st-johns-college",
    title: "",
    date: "August 22, 2016",
    author: null,
    content: "Gemma, Endicott and Liv at our St John’s College Formal 2016",
    id: 64
  });
  this.add({
    url: "/memories/most-of-our-corridor-the-pit-from-our-fresher",
    title: "",
    date: "August 22, 2016",
    author: null,
    content: "Most of our corridor ‘The Pit’ from our fResher year and a few other people at my house for a lunch last year",
    id: 65
  });
  this.add({
    url: "/memories/duncan-liv-gemma-and-endicott-st-johns-college",
    title: "",
    date: "August 22, 2016",
    author: null,
    content: "Duncan, Liv, Gemma and Endicott\n\nSt John’s College Formal 2016.\n\nWe all miss you Endo xx",
    id: 66
  });
  this.add({
    url: "/memories/fabulous-and-exciting-day-at-echo",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Fabulous and exciting day at Echo",
    id: 67
  });
  this.add({
    url: "/memories/thank-you-echo-hill-staff-and-campers-for-a",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Thank you Echo Hill Staff and Campers for a wonderful day on the Bay.",
    id: 68
  });
  this.add({
    url: "/memories/liz-and-trevor",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Liz and Trevor",
    id: 69
  });
  this.add({
    url: "/memories/sam-liz-and-simon-with-the-newly-christened",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Sam, Liz and Simon with the newly Christened Endicott’s Scot",
    id: 70
  });
  this.add({
    url: "/memories/endis-memorial-at-echo-hill",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Endi’s Memorial at Echo Hill!",
    id: 71
  });
  this.add({
    url: "/memories/awesome-day-at-echo-hill",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Awesome day at Echo Hill!",
    id: 72
  });
  this.add({
    url: "/memories/the-ackermans-want-to-thank-the-echo-hill-leaders",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "The Ackermans want to thank the Echo Hill leaders, staff, campers and wonderful kitchen team for making the First Annual Endicott Olympics a special day",
    id: 73
  });
  this.add({
    url: "/memories/simon-shoots-by-camp-legend-endi-still-holds-the",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Simon shoots! By camp legend, Endi still holds the water basketball (waba) scoring record: 152",
    id: 74
  });
  this.add({
    url: "/memories/newest-boat-in-the-echo-hill-fleet",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Newest boat in the Echo Hill fleet!",
    id: 75
  });
  this.add({
    url: "/memories/148846402423",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "",
    id: 76
  });
  this.add({
    url: "/memories/happy-to-be-at-echo-hill",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Happy to be at Echo Hill!",
    id: 77
  });
  this.add({
    url: "/memories/before-the-tree-planting-ceremony-a-camper",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Before the tree-planting ceremony, a camper performs in Endi’s honor.",
    id: 78
  });
  this.add({
    url: "/memories/gathering-for-the-first-annual-endicott-olympics",
    title: "",
    date: "August 12, 2016",
    author: null,
    content: "Gathering for the First Annual Endicott Olympics at Echo Hill Camp.",
    id: 79
  });
  this.add({
    url: "/memories/claudia-and-endicott-halloween-2015-in-sydney",
    title: "",
    date: "August 11, 2016",
    author: null,
    content: "Claudia and Endicott, Halloween 2015 in Sydney. \n\nThis was one of my favourite college events last year. While everyone else was finding a cat eared headband or cloth with eye holes cut in, the four of us (Me, Endo, Duncan and Allie), spent about 2 hours putting together the best costumes possible. Endicott, being American, knew how big of a deal Halloween was and wouldn’t settle for anything less. I think my favourite part of the night was just us 4 getting ready in my room. The fake cut on Endo’s arm took me about 40 minutes of layer tissue paper and painting blood, but it obviously wasn’t enough for him as he poured the red paint all over his hands and smeared it over his body. It was hilarious. ",
    id: 80
  });
  this.add({
    url: "/memories/allie-duncan-endicott-and-claudia-halloween",
    title: "",
    date: "August 11, 2016",
    author: null,
    content: "Allie, Duncan, Endicott and Claudia. Halloween 2015 in Sydney ",
    id: 81
  });
  this.add({
    url: "/memories/endicott-halloween-2015-in-sydney",
    title: "",
    date: "August 11, 2016",
    author: null,
    content: "Endicott Halloween 2015 in Sydney ",
    id: 82
  });
  this.add({
    url: "/memories/endi-your-dad-and-i-are-at-the-cabin-this",
    title: "",
    date: "July 24, 2016",
    author: null,
    content: "Endi, \n\nYour dad and I are at the cabin this weekend and as always, your presence is with us every minute. \n\nI looked up and shot this pic because this display reminds me so much of you.  You were trying to explain how you had to have a pair of authentic moccasins so that you could walk through the woods like a Native American and not be heard. It was on your Christmas wish list. Of course we got them for you.  \n\nWe love you so much and miss you terribly.  \n\nMom",
    id: 83
  });
  this.add({
    url: "/memories/147563391988",
    title: "",
    date: "July 17, 2016",
    author: null,
    content: "",
    id: 84
  });
  this.add({
    url: "/memories/147556640668",
    title: "",
    date: "July 17, 2016",
    author: null,
    content: "Dear Endi,\n\nFirst of all, I miss you. Secondly, I’m writing to you from the beach in Wilmington and it’s 6:11am right now (this was kind of an impulsive excursion) and it’s the first time I’ve been to the water since everything happened. I know you’d think that’s weird because you know I love the ocean, and the weather has been perfect, and I live 5 minutes away, and yes, now I can see you rolling your eyes at me and shaking your head in disappointment… but anyway, I’ve just been very hesitant to come back. But I want you to know that being here is bringing me more peace and clarity than I’ve had in weeks. I think I really needed the air and the sounds and the solidarity to collect my thoughts. So this is where I am with it; here are some thoughts and memories that come to mind…\n\nIt’s no Rehoboth, but I can still smell Nicola’s and Grotto’s pizza, and I remember how my stomach felt that time I tried to keep up with you, slice for slice. I know that any beach I visit, I’ll think of you, and the memories that will rush back will be happy ones. And the beach isn’t the only place I’ll think of you, because I know I’m going to visit my favorite place from my childhood. And you happen to be a very big part of why that place exists for me. When I visit camp, Endi, I’ll sit on the bluff bench and remember our ‘corny’ conversations about the future of friendship, I’ll think about all the traditions we said we’d continue, and how you made my laugh echo off the bay at 3am. And, Endi, when I play volleyball, my lifelong pastime, I’ll think about how I was going to go to Tamarama beach with you, and I’ll remember to make plans to go there to play. Also, I wasn’t sure if I could handle it at first, but now I know that my first puppy will be a Leonberger. I really can’t wait to love that dog, Endi. I hope the backyard will be big enough. If it is, I’ll want to play ultimate, and I know that all my best disc tosses I’ll have learned from you.\n\nI’m never going to forget categories in the pool. It doesn’t even bother me that you won, EVERY time. No matter what obscure category your dad could come up with. I never figured out if it was because you were just really good at quick thinking in mid-air or if it was because of your athleticism. Could be both. I’m positive that you gave yourself extra milliseconds by treading water during your descent. Endi, I want you to know how much you mean to me. There’s no way to describe growing up so close in age to someone whose family is so close to mine. Parts of my personality are due to the hours and hours we’ve spent together. You’ve shown me ways to live that I would have never seen from anyone else, shown me things to smile at that I wouldn’t have appreciated otherwise. Your wit is clever and constant and sarcastic and sometimes hilariously inappropriate,…I wonder where you get it from (;  And you are so kind… So deeply kind and genuine and gentle and passionate and I know where you get that from…the humor and love is family wide.\n\nThat picture of us on the stairs is absolutely my favorite picture, and undoubtedly a perfect still frame of my love for you, and how I have loved you since I was at least that small. And I always will love you, Endi. Thank you for giving me plenty of stories to tell my children, and thank you for teaching me things that I could have only learned from someone as humorous and brotherly as you. So, Endicott, thank you for every memory, and thank you for being such a significant part of my childhood, because I know that, even now, you are capable of evoking pieces of me that no one else can.\n\nI started writing this three weeks ago, and it’s taken me this long to realize\nthat this letter to you will never be finished…\n\nThe sunrise was spectacular this morning, Endi, I’m sure you saw it from wherever you are. I know you’d call me a lame tourist for it, but I watched the sky from the splintery lifeguard stand.\n\nYou are forever a part of my life, Endi. I hope to live as freely and passionately as you. I won’t stop learning from your example. I want to help people I love to live like that too.\n\nYou will forever have my love. You were truly my first love. And none of that will ever change. I will always have moments where I think of you, and I know that I’m not alone in this. You’ll always be with us, Endi. And I have no doubt that I will one day see you again.\n\nBella",
    id: 85
  });
  this.add({
    url: "/memories/endi-what-would-i-do-differently-if-you-were",
    title: "",
    date: "July 12, 2016",
    author: null,
    content: "Endi. What would I do differently if you were here? Would I call you? Make an effort to spend time with you while you were home visiting? Write you an email just to see how you were doing in Australia? Unlikely. I was nobody important in your life, just another person on the periphery of some circle of family acquaintances; a down-the-street neighbor; Simon’s friend’s Mother; nobody, really. But I can’t help but wish so strongly that you were here, and that I could spend some time just talking with you. Perhaps I would have seen you again at this year’s Christmas party - I was hoping for a foosball rematch. I believe the first words I ever spoke to you were, “your name precedes you,” because before I ever met you, I knew you through your Mother’s stories and through Anthony and Simon’s eyes as the popular, older guy they looked up to.\n\nNot a day has passed since I heard the tragic news that I have not thought of you and your family. Not one day. I’m not like you, Endi. I don’t live a fearless, adventurous life; quite the contrary. But the most amazing thing has happened – I would have presumed that your death would justify and reaffirm my anxieties, but for some reason, I feel compelled to live more adventurously – and to accept that there is risk inherent in everything we do, and to do it anyway. And not just for me, but for my boys. It’s uncomfortable to think of the possibility that I may outlive my children, but I cannot deny that this possibility exists. Regardless of which one of us goes first, you and your parents have taught me to work hard to give my kids the best possible life with the richest possible experiences. To identify their strengths and what makes them unique and to celebrate them for it. To give them the freedom to explore their worlds, and the confidence in knowing that no matter where they go or what they do, they will always, always be loved.\n\nFor the first time, I took my kids on a long trip. We went to Switzerland and Germany. For many years and for just as many reasons I have been afraid of doing so – the flight was too long and too expensive, the surroundings too uncertain, and in recent years, that Anthony was too tall to comfortably fit on a plane (or in a plane bathroom). But I did it. And as beautiful as the trip was, I spent much of the time watching my kids experience life. Watching them watching the lakes, rivers, and mountains; watching them absorb another culture; watching their worlds expand.\n\nOur last morning in Geneva, I woke Anthony up early and we walked through the city to get breakfast. We sat outside, I drank coffee and Anthony had an apple cinnamon crumble as people walked through the plaza and an accordion played in the background. What a memory. Inspired by you, dear Endi. \n\nRana",
    id: 86
  });
  this.add({
    url: "/memories/glory-days",
    title: "",
    date: "July 12, 2016",
    author: null,
    content: "Glory Days",
    id: 87
  });
  this.add({
    url: "/memories/i-wanted-to-share-an-email-i-sent-to-liz-because-i",
    title: "",
    date: "July 10, 2016",
    author: null,
    content: "I wanted to share an email I sent to Liz because I believe this is the case for anyone who carries Endicott in their hearts. \n\n“Yesterday in Rome we travelled to St Peters in the Vatican City. It is the largest Christian church in the world. I was told that the purpose of the dome design was so that your thoughts are able to reach heaven. Under the largest Cupola (dome) my mother and I said a prayer for Endo. I’ve attached a photo of what I was looking up to. No matter where I am in the world he is with me and with all of you.”",
    id: 88
  });
  this.add({
    url: "/memories/when-prom-came-around-i-was-so-nervous-youd-show",
    title: "",
    date: "July 7, 2016",
    author: null,
    content: "When prom came around I was so nervous you’d show up to my house barefoot, or without a shirt on… Just the slightest thing to get on my nerves. Thankfully you didn’t, you came to my house looking handsome as ever, with your beautiful mom ready for pictures and we had a really great night together. We laughed a lot, drank a lot, and pointed out all the girls on the brink of tipping over in their too high heels. We got back to my house and stargazed a little until you fell asleep on the ground wrapped in my purple blanket. Which I made sure to document! The entire night you were a complete gentleman never leaving my side. I’ll never forget how amazing it was to have your hand in mine all night long being the best friend and the best guy I’ve ever known. I’ll love you and our memories forever.",
    id: 89
  });
  this.add({
    url: "/memories/we-met-each-other-in-7th-grade-and-i-gave-you-my",
    title: "",
    date: "July 7, 2016",
    author: null,
    content: "We met each other in 7th grade and I gave you my number a few weeks later. One night we stayed up texting very late talking about how lame the middle school dances were and how we never attended one. I told you that the only dance I’d consider going to would be prom senior year. You promised that night you would be my date no matter what. I didn’t take it that seriously because no one could know where we’d be 5 years into the future… until the spring time of senior year quickly came and I asked if you remembered the silly 7th grade text promise. You did, you weren’t one to forget things. One day at the gym while you were stretching and I was pretending to do sit-ups next to you, you asked me what my favorite type of flower was and I said Stargazer Lily’s. Sure enough, the next morning you took off your shirt to make sure everyone knew your chiseled abs hadn’t gone anywhere, and you walked up to me at my locker with a poster saying “I ABSolutely hope you say yes to prom” and a bouquet of Stargazer Lily’s. I was so incredibly excited because a dream guy and an amazing person that any girl would have been ecstatic to go to prom with asked me. You didn’t forget or break your promise. A few minutes later as I was trying to keep my blushing under control and all the girls around us were staring with hearts in their eyes you were whistled at by an admin member and told to put your shirt back on. Which you did, very slowly, with the most perfect Endicott smile on your face.",
    id: 90
  });
  this.add({
    url: "/memories/146971516303",
    title: "",
    date: "July 5, 2016",
    author: null,
    content: "",
    id: 91
  });
  this.add({
    url: "/memories/146971514178",
    title: "",
    date: "July 5, 2016",
    author: null,
    content: "",
    id: 92
  });
  this.add({
    url: "/memories/endis-cabin-in-the-woods",
    title: "",
    date: "July 5, 2016",
    author: null,
    content: "Endi’s cabin in the woods",
    id: 93
  });
  this.add({
    url: "/memories/i-miss-you",
    title: "I Miss You",
    date: "July 5, 2016",
    author: null,
    content: "Growing up in the neighborhood that I did I had one friend my age, Kevin Graine, and when I heard that a new family was moving in I was ecstatic to say the least especially when I heard that they had four children. When Endi first moved in I remember our first encounter being an awkward one to say the least just trying to get a feel for what the other person was like. However I knew then and there I would have a friend for life. Endi, Simon, Holden, and I would do anything possible in the small town we lived in, anything ranging from hiking in the woods, to walking to the Clifton store for soda and candy or making a raving talk show to uploading to YouTube staring a spunky meatball shaped stuffed animal of Endi’s. (https://www.youtube.com/user/StingoFeelTheSting you can view all the wonderful episodes here). Endi was an inspiration to me growing up he was everything I wanted to be, strong, kind, athletic,funny, smart, and a plethora of other  great qualities. I looked up to him so much weather he knew that or not he was what drove me to do better in school and better myself as a person and I have great relief knowing that Endi has not just blessed me, but many others around the world with his wit, knowledge and all around fanatic character. Not a day goes by where I don’t think about Endi and one thing I think about most is that I wish we would have talked more. When I moved in 5th grade we kept up contact somewhat but as life got busier and schedules became more packed I found myself not reaching out as much and this is the one thing I regret more than anything was thinking that I had more time. I would give anything to talk to Endi again. The last conversation I remember having with him was because I was having trouble remembering the name of Archers ringtone (Archer was one of Endis favorite shows) and withing 5 minutes of me asking I had a reply form him telling me exactly the name bringing an instant smile to my face. I miss you Endi and I wanted to say thank you for all that you have taught me. \n\nAlso, Thank you to the Ackerman family. I remember countless dinners and sleepovers at your house. Playing Xbox in the basement, the arcade machine, air hockey table, fooseball,. and ping pong. Swimming in your ool (notice how there’s no P in it, they liked to keep it that way). Memories like these I will hold forever and cherish for a lifetime. I’m so sorry for your loss and Mr. Sam, I’d like to take you up on that offer. I think I have a great middle name for my first son.\n\nLove and Warm Regards,\n\nAndrew Farlow ",
    id: 94
  });
  this.add({
    url: "/memories/mom-with-hannah-endicott-and-holden-new-years",
    title: "",
    date: "July 3, 2016",
    author: null,
    content: "Mom with Hannah, Endicott and Holden, New Year’s Eve 2015, Bermuda",
    id: 95
  });
  this.add({
    url: "/memories/some-of-our-favorite-memories-of-endi-are-from",
    title: "",
    date: "July 2, 2016",
    author: null,
    content: "Some of our favorite memories of Endi are from Flag Football. The first photo of Endi and Charlie is from their first year playing flag football (8th grade?) It is also the last time they were on different teams. After that, working with Sam, they came up with complicated strategies to work the system (like the optimal picking order and intentionally performing poorly at try-outs) so that they would always play together. Or rather, they informed Coach Sam of the strategy needed to get the right group of players on the team. Flag football was a much more relaxed game with minimal practices and simpler uniforms. But Endi was never particularly relaxed about playing hard, always playing intensely but really having fun. The last two years of high school, Endi and Charlie also coached Simon’s team and truly reveled in employing some of the same strategies to form this team and figuring out plays to surprise their opponents.\n\n \n\nWe love you, Endicott, such a special boy becoming such a special man.\n\n \n\nAnna and Bill Phillips",
    id: 96
  });
  this.add({
    url: "/memories/146816777173",
    title: "",
    date: "July 2, 2016",
    author: null,
    content: "",
    id: 97
  });
  this.add({
    url: "/memories/146816774498",
    title: "",
    date: "July 2, 2016",
    author: null,
    content: "",
    id: 98
  });
  this.add({
    url: "/memories/146816771558",
    title: "",
    date: "July 2, 2016",
    author: null,
    content: "",
    id: 99
  });
  this.add({
    url: "/memories/146816768753",
    title: "",
    date: "July 2, 2016",
    author: null,
    content: "",
    id: 100
  });
  this.add({
    url: "/memories/a-number-of-people-have-asked-about-gifts-that",
    title: "",
    date: "July 1, 2016",
    author: null,
    content: "A number of people have asked about gifts that could be made in Endi’s (Endo’s) honor.\n\nFor Liz, Hannah, Holden, Simon and me, the greatest gift you could give us would be to continue to love and remember our son. That is all we ask.\n\n(And don’t forget the tattoo, and/or the middle name for your first-born child.)\n\nThat said, the family is making four gifts as ways of honoring Endi, and we would be happy to see anyone else do the same, as they are all good causes.\n\nGifts to Friends of Homeless Animals, in Aldie, Virginia. Endi’s two dogs, Diego and Ozzie, were adopted from this no-kill shelter.\n\nGifts to the Ironwood Pig Sanctuary, in Tucson, Arizona. Endi liked pigs.\n\nGifts to Robinson High School Football Boosters. As everyone knows, football was a huge part of Endi’s life.\n\nGifts to Echo Hill Camp, in Worton, Maryland. This is a place Endi loved very much. The camp is doing many wonderful things to honor Endi’s memory, for which we are deeply grateful. And, for our part, we are going to pay for a child to go to camp, not only this year, but for at least the next 10 years. Because after most kids go to Echo Hill, they want to go back! You could contact the camp about their campership fund (those gifts are tax-deductible), or you could mail a check to the camp and put “Endicott Ackerman” in the subject line (those gifts are not tax-deductible, because we are keeping this fund separate).\n\nWith love to all. Sam / Liz",
    id: 101
  });
  this.add({
    url: "/memories/146776327753",
    title: "",
    date: "July 1, 2016",
    author: null,
    content: "",
    id: 102
  });
  this.add({
    url: "/memories/to-all-who-knew-endi",
    title: "To All Who Knew Endi",
    date: "July 1, 2016",
    author: null,
    content: "And for a brief moment, the world stood still.  That stillness was a symbol to us that Endi had left this world, and had now embarked on a new journey to a world beyond.  Endi’s energy left his body on June 6, 2016, but what remains is his spirit, which is with us all.\n\nIn a lifetime, we come in contact with countless people, make acquaintances with a great many of those, and become friends with a few.  In Endi, he touched many people, and now those of us who count him as a friend, are here, yes, to mourn our loss, but more importantly, to celebrate his life.  We celebrate by remembering all that he gave to those he loved, and the world around him.  We celebrate the many kind deeds he performed and the many lives he touched, in even the simplest of ways.\n\nTo celebrate Endi’s life, please take a brief moment, to reflect on those remembrances, whispering from the past.  Wherever you may be, light a small candle, meditate, or cast the petals of a favorite flower to the wind in Endi’s memory.\n\nEndi, know that you will be missed by all you loved, and by those who loved you, but you will never be forgotten.  The beautiful memories which you left in all of us will live on forever, and ever, and ever …\n\nMay the peace of the Lord be with you always.\n\nPete, Carole and Mary-Margaret Ewens\n\nSt. Clare of Assisi Catholic Church",
    id: 103
  });
  this.add({
    url: "/memories/oh-my-sweet-lizzie-im-so-very-sorry-for-your",
    title: "",
    date: "June 30, 2016",
    author: null,
    content: "Oh my sweet Lizzie,\n\nI’m so very sorry for your loss. I remember we were both pregnant with our third babies (Endi and Andrew) around the same time while we were at TU. I was always impressed with how much you adored and admired your children. You’re a wonderful mom and all of your kids are lucky to have you (and Sam too!). Know that I’ve thought about you every day since I head the sad news about Endi. You and your family will continue to be in my prayers.  Love and hugs to you all. \n\nAnne",
    id: 104
  });
  this.add({
    url: "/memories/endicott-and-gabriel-with-the-dortmund-giants",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "Endicott and Gabriel with the Dortmund Giants Football Team, Summer 2013",
    id: 105
  });
  this.add({
    url: "/memories/endicott-and-gabriel-germany-summer-2013",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "Endicott and Gabriel, Germany, Summer 2013",
    id: 106
  });
  this.add({
    url: "/memories/for-lizzie-and-family",
    title: "For Lizzie and Family",
    date: "June 29, 2016",
    author: null,
    content: "“O Mary, Mother of God, be unto us indeed a Mother; pity the fears and sorrows of your children in our state of uncertainty and danger. Show yourself a Mother to us in the hour of our death…..Amen. \n\nTjc ",
    id: 107
  });
  this.add({
    url: "/memories/homecoming-2013-sara",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "Homecoming 2013\n\n-Sara",
    id: 108
  });
  this.add({
    url: "/memories/it-was-the-end-of-the-day-i-was-walking-to-my",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "It was the end of the day &amp; I was walking to my car and I found a note on the windshield that said “Hey Sara! There’s a surprise in your trunk!” I opened my trunk to some balloons, andsign that said “homecoming?” With two stick figures (one drawn very tall to illustrate our obvious size difference). I waited and nothing actually happened for a couple minutes until Endi popped out with flowers to ask me to homecoming. Not only Endi but his mother showed me the best homecoming.\n\nI have always admired Endicott’s strong sense of self, he was smart and he knew it (always correcting people’s grammar) but you could never be mad because he was so undoubtably him. He is one of a kind and the world is dimmer without him.\n\n-Sara",
    id: 109
  });
  this.add({
    url: "/memories/endi-and-i-at-senior-year-homecoming-2013-he-was",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "Endi and I at senior year homecoming 2013. He was the best date. \n-Sara",
    id: 110
  });
  this.add({
    url: "/memories/146677991588",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 111
  });
  this.add({
    url: "/memories/146677986828",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 112
  });
  this.add({
    url: "/memories/146677982508",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 113
  });
  this.add({
    url: "/memories/146677978388",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 114
  });
  this.add({
    url: "/memories/146677974018",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 115
  });
  this.add({
    url: "/memories/146677969838",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 116
  });
  this.add({
    url: "/memories/146677965493",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 117
  });
  this.add({
    url: "/memories/146677959883",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 118
  });
  this.add({
    url: "/memories/146677954868",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 119
  });
  this.add({
    url: "/memories/146677950293",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 120
  });
  this.add({
    url: "/memories/146677944913",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 121
  });
  this.add({
    url: "/memories/146677940013",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 122
  });
  this.add({
    url: "/memories/146655497793",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 123
  });
  this.add({
    url: "/memories/146655494038",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 124
  });
  this.add({
    url: "/memories/146655489538",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 125
  });
  this.add({
    url: "/memories/146655484948",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "",
    id: 126
  });
  this.add({
    url: "/memories/i-will-miss-endicott-for-the-rest-of-my-life",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "I will miss Endicott for the rest of my life. He was my best friend for many years and will continue to be one of the most important people in my life. We did everything together throughout highschool and I will never forget the short time that I had with him.",
    id: 127
  });
  this.add({
    url: "/memories/we-were-so-sorry-to-hear-about-the-loss-of-endo-i",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "We were so sorry to hear about the loss of Endo. I still remember him laughing and telling me about how he got his name. “Why can’t you be more like Endicott”… I have never met someone like him before and probably never will again. In the vacilica in Florence we lit a candle for Endicott. It shone as brightly as he did.\n\nAmanda and Laura",
    id: 128
  });
  this.add({
    url: "/memories/we-like-all-who-knew-endi-have-been-struggling",
    title: "",
    date: "June 29, 2016",
    author: null,
    content: "We, like all who knew Endi have been struggling with his loss. We keep trying to remember every detail about his too short life. Trying to recall all the times we spent together over the years - each visit and trip. Always wishing we had known him better.  But as we have remembered him, read the memorials, looked at the pics and videos, we have come to realize that we DID know Endi.  We and you, ALL knew him.  He was one of those rare people who was never shy about just being himself–his, intelligent, compassionate, confident, athletic, adventurous, articulate, witty, happy, handsome, self. The thing is, everyone liked him! Loved him! Wanted to be like him! Being able to just be ourselves, our true selves, and have others love us as we are, is what we all want in life.  Endi had that.\n\nWith love, Frank + Kelli Huffman",
    id: 129
  });
  this.add({
    url: "/memories/im-not-sure-what-to-say-about-this-except-wow",
    title: "",
    date: "June 23, 2016",
    author: null,
    content: "I’m not sure what to say about this except wow. Olja and I were laughing through our tears the other night about the time Sam and Endi came to visit us in Philly and we went out to a local beer garden. When Endi walked through the door just about every female head in the place swiveled around. I don’t think he noticed, but we definitely did! (Full disclosure… I did buy Endi a few beers even though he was underage… don’t tell Liz)\n\nDon",
    id: 130
  });
  this.add({
    url: "/memories/i-wanted-to-post-this-not-only-for-everyone-to-see",
    title: "",
    date: "June 23, 2016",
    author: null,
    content: "I wanted to post this not only for everyone to see but to let Sam know I have always looked up to him as a model of what it means to be a father. I think a lot of the brash confidence and wit that Endi had came from you and from your and Liz’s loving embrace.\n\nwith still more love from don",
    id: 131
  });
  this.add({
    url: "/memories/tipton-lane-always-getting-the-flex-on-love",
    title: "",
    date: "June 23, 2016",
    author: null,
    content: "Tipton Lane… always getting the flex on…\n\nlove, Don",
    id: 132
  });
  this.add({
    url: "/memories/this-is-from-one-of-our-many-visits-to-the",
    title: "",
    date: "June 23, 2016",
    author: null,
    content: "This is from one of our many visits to the Ackerman house. Such sweet, sweet boys!\n\nlove, Don",
    id: 133
  });
  this.add({
    url: "/memories/three-years-ago-today-i-became-friends-with-endi",
    title: "",
    date: "June 23, 2016",
    author: null,
    content: "Three years ago today I became friends with Endi on Facebook. We only had one short and nonsense convo and I regret that I never texted him again. I regret that I was too anxious that he maybe might not remember me and will not answer. So for now I’ll have to wait till we meet again to get to know if he does remember me. But because of that I realized that life is too short for not doing things. Like Holden said in his speech, whatever it is we want to do we should do it now. And I will begin with this now. I will do what I want to do. I will do it now or at least as soon as possible and I will do it no matter if someone tells me I should better not. That’s what we all should do cause life is way too short to wait.\n\n\n  Antonella",
    id: 134
  });
  this.add({
    url: "/memories/sam-and-liz-i-am-so-so-sorry-for-you-both-yet",
    title: "",
    date: "June 22, 2016",
    author: null,
    content: "Sam and Liz,\n\nI am so, so sorry for you both, yet heartened by the reflections expressed here. Endi sounds like he was a terrific kid, his life a legacy of warmth and happiness for you, his siblings and his friends. You can’t ask for a better endorsement of the job you do as parents than the chorus you hear on this memorial page, even though tragedy has cut your time with him way too soon. I know you both professionally, and, I’m happy to say personally, and the pride and pleasure you take in your kids is apparent to everyone who works with you. As a fellow 4-kid parent, your loss cuts deep for me, as it does for every parent. But I see the strength and love you have built into the fabric of your family, and I know you will somehow find your way through this. Please know you have a lot of folks out here praying and pulling for you.\n\nJohn",
    id: 135
  });
  this.add({
    url: "/memories/146319070598",
    title: "",
    date: "June 22, 2016",
    author: null,
    content: "",
    id: 136
  });
  this.add({
    url: "/memories/his-second-day-in-australia-in-august-2014",
    title: "",
    date: "June 22, 2016",
    author: null,
    content: "His second day in Australia in August 2014",
    id: 137
  });
  this.add({
    url: "/memories/this-is-my-favourite-video-of-endo-bronte-and-i",
    title: "",
    date: "June 22, 2016",
    author: null,
    content: "This is my favourite video of Endo! \nBronte and I have been watching it non-stop and can’t help laughing. \nIt was taken in my room last year at college, as me, Duncan, Allie and Endo were playing some silly game. \nWe love how lively and in-character he is. He really steals the show. Makes me smile everytime. \n\nClaudia ",
    id: 138
  });
  this.add({
    url: "/memories/dear-ackerman-family-of-course-and-as-usual-no",
    title: "",
    date: "June 22, 2016",
    author: null,
    content: "Dear Ackerman family,\nOf course and as usual, no words express our sorrow we feel at this time for your family and Endicott. Such a turmoil time for you all, and your community surrounding you. We knew you through Clifton Elementary and St Clare church. Liz, I remember teaching a CCD class with you and Endicott came in after his class and I said to you he was a special kid, at glance, not even really knowing him. You wrapped your arms around him tightly and kissed him and said “ yes, he is my sweet one, so kind to others, I love him.” We both laughed and said we wished we had had one more kid, to add to our 4. We both loved a big family, and all the different personalities it brought.\nEndicott lived a full life, the one he was supposed to, the one HE enjoyed. As hard as it is to understand, God had that plan. We never understand why things happen, and especially why they happen to “ good people.” But all of you will be stronger for it, and will touch more people in their lives, then you will know. The letter from Hannah to her brother was so beautiful and moving that I will remember many aspects from that and live my life with those thoughts and actions. Endicotts life and death will be meaningful. And what an honor that is. While the pain of losing a child, brother, relative, friend, etc never leave, his impact of being in this world will forever be a positive and meaningful memory for so many.\nBe so proud your Son, and brother. He is obviously so well loved and thought of. I wish for you so much peace and comfort. We are so very sorry for your loss. In Sympathy, The Jasien family",
    id: 139
  });
  this.add({
    url: "/memories/the-only-time-we-met-endicott-was-at-his-high",
    title: "",
    date: "June 22, 2016",
    author: null,
    content: "The only time we met Endicott was at his high school graduation party at your home.  From that brief visit, we could tell what a terrific young man he was.\n\nOur thoughts and prayers have been with you - and will continue with you - and may God’s peace that passes understanding rest upon each member of the family who misses him so.\n\nBob and Carol",
    id: 140
  });
  this.add({
    url: "/memories/endi-there-is-no-way-to-tell-you-how-sorry-i-am",
    title: "",
    date: "June 21, 2016",
    author: null,
    content: "Endi,\n\nThere is no way to tell you how sorry I am that this happened to you. I hope you weren’t afraid for too long. I hope you didn’t regret jumping for too long, or have to know for too long that you were about to die.\n\nI could tell that you found a lot of direction in the last few years. That’s something we have to do for ourselves, and I was impressed but not surprised. I hear you had big plans and were starting to really apply yourself. That makes me think you were happy before you died. I am so glad for that, because I believe we are “whatever room we are in.” I think you died a happy and confident and optimistic man. That is who you will always be to me, anyway.\n\nI am just so sorry that you didn’t get to try your hand at life, and learn more about the world, and see who you could be and what you could do. You know I always found you so great to be around – you were a sharp and independent thinker, and I thought your witty arrogance was totally charming. Most importantly, I think you always tried to be good to people. But I have learned so much more about you since you died, and it makes me wish I knew you better. I wish our friendship had been deeper. I wish we had done more things for each other. Maybe we postured too much, or maybe we just always relied on the other people in our lives. I wonder if you would feel the same way.\n\nLike Holden said in his eulogy, I want to be inspired by you. I want to rid myself of complacency, and never rely on other people for the initiative to do the things I want to do. This is how I will probably think about you most for the rest of my life.\n\nMom, Dad, Holden, Simon, and I will all have to deal with your death for ourselves, and also as members of a family that lost you. Our family will always be incomplete. But we have been coming together, on a more emotional level than before. I know I took us for granted, and I don’t think I ever will again (I was even washing dishes and loading the dishwasher when I was home). I want so much for them to be okay, and in that desperate feeling, I feel my love for all of them so acutely. I think they are feeling that too, and I am optimistic that we have what it takes to stay as united as we were when you were still here.\n\nI know you regret jumping, but of course we can’t retrospectively separate excessive risk-taking from bad luck. You were who you were, and you loved what you loved. I guess I wish you were a little less arrogant. But not really. Mostly, I am so sorry for the bad luck, my brother.\n\nLove,\nHannah",
    id: 141
  });
  this.add({
    url: "/memories/oh-baby-my-baby-how-i-miss-you-what-i-would",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Oh, baby. \nMy baby. \nHow I miss you. \nWhat I would give to see your face, to hold you in my arms.\n\nWhen you were working on the cattle ranch in the Northern Territories and would “go dark” because of lack of wifi, days would pass and I would grow increasing worried about you. Then you would go to that roadhouse, the place near Alice Springs, connect, and our phones would light up with lots of texts and pictures. Your dad and I would be so excited to hear from you.\n\nBut for those days you didn’t text I would patiently wait. Then I decided that if I saw a majestic hawk soaring in the sky it must be a sign from you. You’d play along. I’d text: “Saw a hawk on Clifton Rd near Davis’ Store, was that u?” Some time would lapsed and then I’d get a “Yep.”\n\nSo this weekend your dad, Simon and I went to the cabin. On Saturday, through tears, I planted the flower boxes on the back deck. The day was beautiful. Trinton’s Run was roaring and overflowing. Sunny, blue skies, big white clouds, cool breeze. \n\nAll of a sudden this huge beautiful hawk comes swooshing down by the fire pit and begins to dance in the sky. I am the only audience. He flies low and then soars as far as my eye can follow. He comes back and circles and circles. I’m mesmerized for a good ten minutes watching him.  Your dad exits the front door and walks from the front porch to the shed and I yell from the side deck, “Look!” and it is gone. I like to think you sent him for me.\n\nEndi, my love for you is so strong. I have been graced to have you as my son and your spirit lives within me…..and I will always be in awe of you. You are such a gift.\n\n“Run like the wind, Endi.”\n\nPeace, my son. I love you.\n\n  mom",
    id: 142
  });
  this.add({
    url: "/memories/hannah-said-something-while-she-was-here-she-said",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Hannah said something while she was here. She said the more she was getting to know Endi better, and the person he had become over the last two years while he’s mostly been gone, the more she liked him.   \n\nThat’s testament to the many wonderful stories his friends have been sharing. But it’s also testament to Endi.   \n\nTo be sure, Endi was confident, sometimes to the point of cockiness. But it was playful. While he had strong opinions about almost everything, and he loved sharing them, he was also always thinking and learning and listening to others. I saw his tastes in many things change over time. He was growing, he was changing, he was getting better.   \n\nThanks to Endi’s Aussie friends, and the stories they are sharing, we’re loving our son even more (if that’s possible). It makes the loss even harder, but the memories even sweeter, for he was a wonderful and dynamic person.   \n\nFinally, this note, just for fun. Endi’s first experience in Australia was not in Sydney but on a ranch in the middle of nowhere. He had limited Internet access so we’d wait for updates that arrived sporadically, and we’d send care packages as often as we could. While searching for Endi’s football highlights I found this email I had saved, from 2014. It is his requests for the next care package. (We sent them all.)   \n\nOh God I miss him.   \n\nHis note:   \n\n  More cigars\n  A torx bit set which must have a t6 t8 &amp; t10 bit \n  Dr bronners lavender \n  St Ives apricot face soap \n  and anything else you think i would like \n\n  Much love, \n  Endicott",
    id: 143
  });
  this.add({
    url: "/memories/endi-ackermans-highlights",
    title: "ENDI ACKERMAN's Highlights",
    date: "June 20, 2016",
    author: null,
    content: "ENDI ACKERMAN’s Highlights\n\nFor Endi’s Australian friends who never saw him play American football, here is a taste:\nhttp://www.hudl.com/athlete/1268504/endi-ackerman\n\n\n  Sam Ackerman",
    id: 144
  });
  this.add({
    url: "/memories/you-were-a-blessing-endicott",
    title: "You were a blessing Endicott",
    date: "June 20, 2016",
    author: null,
    content: "In 2013, I was that lucky mother who hosted this lovely handsome Endicott during the exchange program to Germany.\n\nGabriel came back very happy from the Ackermans and told me he had got a wonderful family and friend and was looking forward to receiving him in summer.\n\nEndicott came. He was a real blessing to us. We had a lot of fun, laughed a lot and he was really easy going.\n\nGabriel visited the Ackermans again the following year. We were still expecting Endi to come back to Germany.\n\nIt is so sad that this will never come to pass.\n\nEndi boosted our Giants through his long experience of American Football training.\n\nThe Dortmund Giants embraced Endicott.\n\nWe met teachers who knew Endicott last Friday. They passed on their condolences to the family.\n\nOne teacher said” I have seen so many exchange students, but Endicott was an outstanding person”.\n\nDear Liz, Sam, Holden, Hannah and Simon, we are very sad too.\n\nWe were still expecting Endi to come again. We had plans. We miss him.\n\nHis smile, his character, Oh my God this child was just lovable. May his soul rest in peace.\n\nI pray that God gives you peace which surpasses all human understanding and lift you up, heal the wounds and comfort you. We will not get tired of praying for you.\n\nWe love you.\n\nHarriet Kaddu- Knabe, Germany\n\n19.06.2016",
    id: 145
  });
  this.add({
    url: "/memories/my-condolences",
    title: "My condolences",
    date: "June 20, 2016",
    author: null,
    content: "Dearest Sam, Liz and children,\n\nMy heart is broken over the loss of Endicott; and there are no words that I can say nor, that will suffice for the pain you feel in this moment; but please know that I am praying for peace and comfort from The Lord to whom lets us know that there is no sorrow that Heaven cannot heal.  I love you guys and it was always such a pleasure to be a part of your families dental care and watch your beautiful family grow and accomplish so much. So please know that, if there is anything that I can do for you all please let me know, Dr. Soga and I are very close and we offer whatever need you may have with much love.\n\nRespectfully and lovingly,\n\nRev. Dr. Sharon Y. Harley",
    id: 146
  });
  this.add({
    url: "/memories/endi-and-django-in-w-virginia",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Endi and Django in W. Virginia",
    id: 147
  });
  this.add({
    url: "/memories/always-always-always-just-so-sweet",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "always always always… just so sweet",
    id: 148
  });
  this.add({
    url: "/memories/endi-was-always-trying-make-other-people-happy",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Endi was always trying make other people happy",
    id: 149
  });
  this.add({
    url: "/memories/endi-was-always-looking-after-little-django-he",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Endi was always looking after little Django… he was so sweet with him.",
    id: 150
  });
  this.add({
    url: "/memories/we-are-heartbroken-a-thousand-times-over",
    title: "We are heartbroken a thousand times over",
    date: "June 20, 2016",
    author: null,
    content: "We are heartbroken for the world because Endi had so much to share that he won’t get a chance to share. Heartbroken for Sam and Liz who give everything of themselves to their children and they deserved many many many more years with this wonderful child. Heartbroken for Hannah and Holden and Simon, he loved each of you so very dearly. And for his friends old and new and still unmade. There would have been so many more.\n\nWe all wanted to be more like Endicott. When he walked into the room there was a sort of humming in the air: the energy of potential, for fun or competition or wit. He was generally fearless and made difficult things seem so easy. One of the last times we saw him, Sam and he had driven to Philly for a football tryout at UPenn. They stayed over, and at about 7 in the morning Endi was out in the driveway, in loafers, trying to prove to our son Django that he could dunk a basketball. I remember saying, “are you sure you want to be doing that? you don’t want to hurt yourself right before the tryout.” He just laughed and shrugged.\n\nAnother time Lizzie and Endi met us for breakfast at a restaurant in Philly. We got there a bit before it opened and Django was getting a bit restless. Next thing we know Endi is running these insane foot races against Django from the restaurant down to the nearby train trestle and back, over and over - also at around 7 in the morning - just to keep him occupied.\n\nWhen Django was born, Endi was about 8 years old. From the very beginning he was crawling on the floor with Django, playing with him, singing to him. He was so incredibly caring and gentle. He just knew what to say, what to do. It was a very, very special relationship. When Django had to do a school project a few years ago about one of his heroes, he chose Endicott. I totally got that.\n\nPeople always tell kids they can be whatever they want when they grow up, and it’s the right thing to say even though it’s not true. With Endi it really was true - he could be president, or a movie star, or a football player, or a writer, or an inventor. It was just a matter of him choosing a path. I don’t know very much about life and when something like this happens I realize I know even less. But I know Endi is still on his path.\n\nmuch much much love\n\nDon, Olja and Django",
    id: 151
  });
  this.add({
    url: "/memories/no-one-compares-to-you-endo-kira-x",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "No one compares to you Endo\n\nKira x ",
    id: 152
  });
  this.add({
    url: "/memories/never-witnessed-you-unhappy-kira-x",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Never witnessed you unhappy\n\nKira x ",
    id: 153
  });
  this.add({
    url: "/memories/loved-your-presence-kira-x",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Loved your presence. \n\nKira x ",
    id: 154
  });
  this.add({
    url: "/memories/chelsea-duncan-claudia-endicott-the-race-at",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Chelsea, Duncan, Claudia, Endicott. The Race at Randwick Stadium Sydney 2015 ",
    id: 155
  });
  this.add({
    url: "/memories/duncan-and-endicott-the-race-at-randwick-stadium",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Duncan and Endicott. The Race at Randwick Stadium Sydney 2015 ",
    id: 156
  });
  this.add({
    url: "/memories/endicott-and-claudia-the-races-at-randwick",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Endicott and Claudia. The Race’s at Randwick Stadium Sydney 2015 ",
    id: 157
  });
  this.add({
    url: "/memories/holden-ackerman-speaking-at-robinson-vigil",
    title: "",
    date: "June 20, 2016",
    author: null,
    content: "Holden Ackerman speaking at Robinson vigil.",
    id: 158
  });
  this.add({
    url: "/memories/sam-ackerman-speaking-at-robinson-vigil",
    title: "",
    date: "June 19, 2016",
    author: null,
    content: "&lt;/source&gt;\n\nSam Ackerman speaking at Robinson vigil.",
    id: 159
  });
  this.add({
    url: "/memories/sweetest-little-kid",
    title: "Sweetest Little Kid",
    date: "June 19, 2016",
    author: null,
    content: " I remember Endi as a sweet, dear little boy.  He grew up to be an amazing man.  When I look at recent pictures I see that little boy in his eyes and in his smile….Sam, Liz, Hannah, Holden and Simon you are in our thoughts and prayers….With Love, Ava &amp; Jim …",
    id: 160
  });
  this.add({
    url: "/memories/craver-christmas-2008",
    title: "Craver Christmas 2008",
    date: "June 19, 2016",
    author: null,
    content: "Memories of a beautiful smile and an amazing young man.",
    id: 161
  });
  this.add({
    url: "/memories/endicott-was-my-godson-i-was-only-a-freshman-in",
    title: "",
    date: "June 19, 2016",
    author: null,
    content: "Endicott was my godson.  I was only a freshman in high school when he was baptized and remember thinking what an honor it was to be chosen by my Aunt Liz (my godmother) and Uncle Sam to be a part of this beautiful baby’s life!  This picture is of me dressing him before the ceremony.  I did not get to spend much time with Endicott throughout his far too short time on this world, but I thought of him often and was always in wonder of his spirit and his love of life.  The last time I saw Endicott in person was at my wedding in 2011.  He had grown into such a handsome young man!  I loved his warm smile and his easy way with conversation, and I had looked forward to a time where we could sit and talk for awhile.  I still look forward to spending that time with him, it will just have to wait for now.  Love you, Endi.     ",
    id: 162
  });
  this.add({
    url: "/memories/endi-we-knew-all-of-your-life-not-as-well-as",
    title: "",
    date: "June 18, 2016",
    author: null,
    content: "Endi. We knew all of your life. Not as well as many, but on those fun occasions when we were together with you, your parents and siblings, we found you courteous, respectful and never ill toward anyone. A gentleman. Your confident and impish (at times mischievous) sense of humor always made us laugh. And the thought of you always makes us smile. Peace and love be with you always, our friend. - Frank + Kelli",
    id: 163
  });
  this.add({
    url: "/memories/endicott-his-cit-summer-at-echo-hill",
    title: "Endicott his CIT summer at Echo Hill",
    date: "June 18, 2016",
    author: null,
    content: "",
    id: 164
  });
  this.add({
    url: "/memories/endicott-echo-hill-camp-summer-2005",
    title: "Endicott - Echo Hill Camp Summer 2005",
    date: "June 18, 2016",
    author: null,
    content: "",
    id: 165
  });
  this.add({
    url: "/memories/i-dont-know-if-duncan-will-post-on-here-in-his",
    title: "",
    date: "June 17, 2016",
    author: null,
    content: "I don’t know if Duncan will post on here in his own words but I wanted to share my view of their friendship. \n\nDuncan and Endo had a friendship like no other.  From the moment they met they were inseparable. Always running off exploring, always laughing, always drinking. I can’t even count the number of times Endo manipulated Duncan into attempting to out drink him.  Which always resulted in Duncan getting way too drunk… (sorry Dunc, but he could handle more than you). Aside from the drinking,  they did their monthly workout together, a 1km swim to Wedding Cake Island, which would always make me nervous. Sure enough, I got to deliver the “i told you so” when Endo returned with a nasty jellyfish sting around his waist (that he then flaunted due to it being across his abs..).  They enjoyed each other’s intelligence and were constantly challenging one another.  In a friendship way, they were soulmates. And had an incredible bond that others would envy. \nI feel so lucky to have witnessed their friendship. \n\n\n  Claudia \n\n\nDuncan and Endicott. St Johns Formal, Sydney 2016. ",
    id: 166
  });
  this.add({
    url: "/memories/endo-and-i-in-our-2nd-week-in-sydney-of-course",
    title: "",
    date: "June 17, 2016",
    author: null,
    content: "Endo and I in our 2nd week in Sydney, of course, at Bondi Beach. \nThis was the first time Endo, Duncan and I had gone exploring round the eastern beaches (we did this almost every sunny weekend) . \nThey went mad, climbing over everything, following the unstable rocks north of the beach… I could barely keep up. \nI remember feeling completely content with my crazy new friends but I would never of guessed how close us 3 would truely become.\n\nClaudia ",
    id: 167
  });
  this.add({
    url: "/memories/endicott-helping-me-move-out-claudia",
    title: "",
    date: "June 17, 2016",
    author: null,
    content: "Endicott “helping” me move out. \n\nClaudia ",
    id: 168
  });
  this.add({
    url: "/memories/endi-i-was-able-to-sit-down-with-mama-bear-today",
    title: "",
    date: "June 16, 2016",
    author: null,
    content: "Endi, I was able to sit down with Mama Bear today for the first time. We talked about how you and I met. You were in 4th grade at the time. Holden and my son were together on the same SYC football team. I remember allot about your “do’s” and “dont’s”. I remember showing you how bad I was at shooting the basketball in your driveway. I remember playing pass and catch in your back yard, I remember your extra credit work helping with the outdoor shower we built. And I remember tattling on you to your Dad about the beer party you had when they were away. I have watched most of Sam and Liz’s children grow up and the entire family always treated me as a good friend. I will miss that smile, but will you say hello to my mom and and enjoy her memories of me as I will of her and you.",
    id: 169
  });
  this.add({
    url: "/memories/my-dearest-liz-after-years-of-hearing-amazing",
    title: "",
    date: "June 16, 2016",
    author: null,
    content: "My dearest Liz.  After years of hearing amazing stories about your children, I finally had the pleasure of meeting Endi in 2013 when you and he were up from Virginia visiting Harvard.  We met for dinner at Chez Henri, and I was so excited to see you and meet your son.  He was so impressive and charming, and seemed equally comfortable talking with “the adults” and entertaining a 6 year old boy.  He engaged with Michael the entire evening.  And I’ll never forget how, when we left the restaurant and started walking back towards Harvard Square, Michael took hold of Endi’s hand while they crossed the street together.  You and I just looked at each other and smiled. \n\nI will always recall that evening fondly and the young man who made such an impression on my son.  May God bless and comfort you and your family, and help you with this unbearable loss.  I love you and am holding you in my prayers and in my heart.",
    id: 170
  });
  this.add({
    url: "/memories/christmas-2013",
    title: "",
    date: "June 16, 2016",
    author: null,
    content: "Christmas 2013 ❤️❤️",
    id: 171
  });
  this.add({
    url: "/memories/endi-bear-with-me-because-i-am-writing-this-at",
    title: "",
    date: "June 16, 2016",
    author: null,
    content: "Endi-\n\nBear with me because I am writing this at 1:47 in the AM.\n\nI am here now at your Grandma Nancy’s house with all these pictures of you around me, reminding me, though I did not need that, of the child you were. So fun-loving and energetic, always with a smile on your face. Not surprising, of course, since, in that way you managed to capture one of the best parts of your father. How fitting that you carried his first name as your middle name. My memories of you are mostly when you were younger, before the black hair that everyone has mentioned. Back when you were as tow-headed as your big brother and sister. I remember your dad coming up to pick me up when I was going to school in VA during spring break and going to see you all. Moving away from Delaware and up to NJ unfortunately also meant for me that I wouldn’t be able to see you (or the others as much), though I am now so glad for those fleeting of opportunities.\n\nHowever, through these messages, I realize what a detriment it was for me to miss seeing you grow up into the young man you became. Though, I like to think I got a small picture of him the last time I saw you in 2013 at Christmas time. Because the memory that evokes in me is a little different, though not far removed from the pictures that I have seen on here. The young man I met was one who had the utmost of patience for his young cousin, Jake. I saw you play with him and never losing patience or wanting to go out and do different more grown-up things. So, it surprised me not at all when I took a picture of all of you that he is perched at your side, snuggling against you. You reminded me so much of your father then and I like to think maybe that gave me a little bit of a sneak peek into the father you might have been. Which makes me cry and makes me proud of you all at the same time. The indelible picture I have of you in my head though is of you holding your youngest cousin, my daughter. There is a picture of you holding her and you looking down at her and her looking up at you, that gives me such a sense of loss and peace all at once. There is one job I have to do as a mother now and that is to hold her close and teach her about her cousin, Endicott. Though I sorely, sorely wish that you were around so that she could get to know you. You were in a class by yourself.\n\nI go to sleep now with the memories of your father singing the “Endicott” song to you when you were a child.\n\nMy love goes out now not just to you and my memories of you, but always and forever, your father, my brother, Sam, Liz, your brothers, Holden and Simon and your sister, Hannah.\n\nLove Always,\nYour Aunt Sarah (and Cousin Gabrielle)",
    id: 172
  });
  this.add({
    url: "/memories/me-lets-find-you-a-crocodile-since-youre",
    title: "",
    date: "June 16, 2016",
    author: null,
    content: "Me: Let’s find you a crocodile, since you’re leaving me for Australia!\n\nEndicott: No I want the dragon, it’s way cooler.\n\nI laughed the entire night watching you walk around with that fake tattoo- smiling so proudly, carefree, and confidently; it was the way you always walked through life. Missing you and all the laughs you gave me.",
    id: 173
  });
  this.add({
    url: "/memories/twenty-years-from-now-you-will-be-more",
    title: "",
    date: "June 15, 2016",
    author: null,
    content: "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.\n\n\n—\n\nMark Twain\n\nOh, my sweet Liz.  All I’ve been able to think about is the photo of Endi’s First Communion picture that you used to carry around so proudly. That amazing, sweet and mischievous smile will be forever etched in my mind.  Please know that our family’s heart breaks with yours and we send you all the love in the world at this time.\n\nI think the reason your Target family is so very enamored with you and your family is because of the passion, adventure, togetherness and love that you have thrown into every step and day of parenthood.  The Ackermans always seemed to me to be the family you’d want to join if you got the choice.\n\nEndicott will live on forever.  His life, captured so beautifully in these photos, seems to have packed 80 years worth of living into his short time on this Earth.  We should all learn from that.  We wish you so much love and peace during this tragic time.\n\nErin, Justin &amp; Lillian Saif",
    id: 174
  });
  this.add({
    url: "/memories/lizzie-this-one-is-for-you-we-love-you-tammi",
    title: "",
    date: "June 15, 2016",
    author: null,
    content: "Lizzie - this one is for you!!! We love you, Tammi and Mom Linda XOXO",
    id: 175
  });
  this.add({
    url: "/memories/although-i-never-met-endicott-i-feel-like-i-knew",
    title: "",
    date: "June 15, 2016",
    author: null,
    content: "Although I never met Endicott, I feel like I knew him because of all the sweet things Liz always said about him, and from her yearly Christmas cards that always bragged on all her kids. My Mom, Linda, and I pray that Endicott will forever rest in peace in God’s arms for eternity in heaven. God bless his sweet soul. He is gone far too soon and too young. God bless and love to your entire family!! XOXO",
    id: 176
  });
  this.add({
    url: "/memories/i-have-met-endi-only-once-but-felt-this-quote-was",
    title: "",
    date: "June 15, 2016",
    author: null,
    content: "I have met Endi only once, but felt this quote was consistent to way he lived his life.  I’ve had the pleasure of watching him grow up &amp; experience life through my cherished friend Liz and her wonderful stories updating me on the adventures of Endi.  Thank you Liz for sharing them with me.      \n\nIt’s been amazing to read all the personal messages and see the pictures from everyone who was in some way touched or inspired by Endi and how he lived.\n\nAll My Love To The Ackerman Family,\n\nMelissa",
    id: 177
  });
  this.add({
    url: "/memories/to-endi-i-still-remember-that-night-we-met-in",
    title: "",
    date: "June 15, 2016",
    author: null,
    content: "To Endi\n\nI still remember that night we met in Canada two years ago. You were walking down the hotel hallway, shirtless of course. You carried yourself with such confidence and a presence like no other. I called you Apricot because I couldn’t comprehend that your name was actually Endicott, but I should’ve known then that a special person like you deserved a special name. I now cherish the few times I got to spend with you including that late night trip to silver diner for milkshakes, that hour or two we spent talking in my car in a church parking lot, and that night you crashed my friends surprise party to hang out with me. I am already missing your smile and charm, you are so loved. \n\nThis past week, I feel like I’ve reread every message and interaction between the two of us. I stumbled across my favorite one from one of my instagram posts, it reads “Don’t say anything now but just imagine how gorgeous our kids are going to be” It breaks my heart that no one got the chance to have you be their father because there is no doubt in my mind that you would’ve been a great one. And I would’ve been damn lucky too. \n\nI kept in frequent contact with Endi these past two years and in July will be studying abroad for a semester in Auckland, New Zealand. My first choice was Sydney, Endi being a huge factor in that but classes ended up not working and I settled on Auckland. Just two weeks ago, Endi and I were talking about him visiting Auckland during his winter break, something I was very much looking forward to. I will now carry his memory with me through my travels, and if i get the chance to visit Sydney, I’ll be sure to say a prayer for Endi and the entire Ackerman family. \n\nMuch love\n\nBrenna",
    id: 178
  });
  this.add({
    url: "/memories/not-many-football-players-also-went-for-the-ib",
    title: "",
    date: "June 15, 2016",
    author: null,
    content: "Not many football players also went for the IB Diploma. He was just as smart as athletic while also being kind and humble. He could take all IB classes and make some of the most amazing catches on the field. He had a bright future. I remember he told me about possibly playing football at Harvard and some other prestigious schools. I always thought he’d get very far in life with his talents. I just pray he enjoyed life to the fullest and for comfort to his family. I’m going to cherish conversations we had in class, playing football together, and being captains for the same game.",
    id: 179
  });
  this.add({
    url: "/memories/i-cannot-tell-you-the-last-time-i-saw-endi-but-i",
    title: "",
    date: "June 15, 2016",
    author: null,
    content: "I cannot tell you the last time I saw Endi, but I can tell you how absolutely fascinated I am of the life he led. Endicott had the courage I was not born with, although we were family. He was an incredible individual, and my only regret is not having the opportunity to talk to him about his adventures in Australia, as well as the adventures he had experienced throughout his entire life. There are two things helping me to cope with the loss of one of my most adventurous/courageous/brilliant cousins:\n\n  Until the very end, you lived life to the fullest.\n  You are now with Bubba and Pap Pap \nSending love from the entire family, and constantly thinking about Aunt Lizzie, Uncle Sam, Hannah, Holden, and Simon",
    id: 180
  });
  this.add({
    url: "/memories/145936470218",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 181
  });
  this.add({
    url: "/memories/jellyfish-sting-so-big-it-would-have-killed-a",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "“Jellyfish sting so big it would have killed a lesser man”\n    @the_endicott",
    id: 182
  });
  this.add({
    url: "/memories/145936215478",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 183
  });
  this.add({
    url: "/memories/145936213468",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 184
  });
  this.add({
    url: "/memories/145936211118",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 185
  });
  this.add({
    url: "/memories/winter-skinnydipping-in-west-virginia-january",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "Winter skinnydipping in West Virginia. January, 2016",
    id: 186
  });
  this.add({
    url: "/memories/145936197178",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 187
  });
  this.add({
    url: "/memories/if-you-spend-some-time-walking-around-barefoot",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "“If you spend some time walking around barefoot you come to the saddening realization of how little of the time it’s earth beneath your feet.”\n\n    @the_endicott",
    id: 188
  });
  this.add({
    url: "/memories/i-do-not-have-pictures-of-endi-i-have-never-met",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "I do not have pictures of Endi. I have never met him. But I know him through the intense love of his sweet mother, our dear friend and colleague, Liz. She shared his accomplishments, his stories of adventure sometimes shaking her head and laughing but always, always lifting him up in love. His soul will continue to shine through all those that he has touched. \n~Sara",
    id: 189
  });
  this.add({
    url: "/memories/145926475923",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 190
  });
  this.add({
    url: "/memories/145926473538",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 191
  });
  this.add({
    url: "/memories/145926471218",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 192
  });
  this.add({
    url: "/memories/in-the-past-few-days-i-tried-to-remember-how-i-met",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "In the past few days I tried to remember how I met Endi for the first time. I thought it would have been this one day three years ago in June. I was walking through the hallway with my friends where he was standing with some other guys. He was leaning at a table so cool and relaxed like the star of some high school movie and was looking at me. Till today I don’t know what this look meant but it was so intense that my heart still beats faster when I think about this scene. I’m sure it wasn’t coincidence that we were there at the same time.\nBut actually, that wasn’t the first time I met Endi. I already have met him earlier that week. It was a really hot day and we had English lessons when our teacher told us that during these lessons some American exchange students will come and tell us something about their lives in the US. I wasn’t one of the lucky students who were chosen to attend the exchange to the USA in the following October so I was really thrilled to got the chance to meet some of the Americans at least during their time here in Germany. I remember how he was standing in the front of the board looking at the class being so confident and relaxed while talking about him being from Fairfax, Virginia and playing football like he was used to give interviews every day. \nI think he had us all the minute he walked in. I have to admit that I was one of the girls who had a crush on him. But how could you resist? He was a charismatic, fascinating guy whose smile was contagious. Whenever he walked by people were looking at him. The girls adored and the guys admired him, watching every of his moves like they could learn something from him. Wherever I went during these days almost everybody talked about him. “This guy called Endicott. The football player from America”. I bet everybody knew about THIS SPECIAL GUY.\nUnfortunately, the time was short and he wasn’t around much so I never got the chance to get to know him better. \nBut even though I only knew him briefly he touched my heart somehow. I always did and still do wish I’d known him better. \nWhen I found out about what happened I couldn’t believe it. I always told myself that this couldn’t be real. I may not have been one of his close friends but I never did or will forget about him. I’m still in shock and infinitely sad. \nJust some weeks ago when I saw a new picture of him popping up on Facebook I thought “maybe we will meet again some day”. And I’m sure we will. Maybe not now, maybe not so soon, but I’m sure we will…some day.\n\nMy heart goes out to the Ackerman family and everyone who had known him. I can’t imagine what you feel right now and you have to deal with. I wish I’d be closer to you during this hard times.\n\nI’m sure I will never meet a person like him again. So incredibly special. He was a great guy.\n\n\n  Antonella Heidel, Dortmund/Germany",
    id: 193
  });
  this.add({
    url: "/memories/remembering-endi",
    title: "Remembering Endi",
    date: "June 14, 2016",
    author: null,
    content: "So, posting all those photos was the easy part. This part, not so easy. We love this boy. Though we haven’t seen too much of him the last few years (but grateful and blessed to have seen him in our house this past Winter), for many years he was a part of our family. He was loyal and loving to our son, David, and it made a difference; a real honest to goodness difference, in David’s life. Before he had movie star good looks, he was just a scrawny, goofy kid with braces and boundless happy energy, who just happened to be smart as a whip, funny beyond his years, and intensely interesting. Most other kids would come over and we’d smile and say “Hi” and “you guys have a good time”. But with Endi, we’d sit down and speak with him, and we were better for it.\n\nHe got my oh-so-subtle humor, which must have been a pleasant change for him. But seriously, it’s true. He had a superb brain, and was raised to view life as multi-dimensional and complex, and to question that which others blindly accepted. And this made him friggin’ interesting. And it means that those who knew him have questions, really poignant questions, that were we speaking of someone else, would simply not be so compelling; What would Endi have accomplished in his life? What would he have become? What would his ultimate passions have been? Who would his life partner have been? What kind of father would he have been, and what kind of kids would he have raised? And why; why why why did he jump in that water? Why? I guess knowing Endi, we do have some clues as to that answer, but I wish to God I’d had the opportunity to argue with him about it. To beg him not to, to tackle him and hold him down, to offer him money, a car, a vacation, ANYTHING to stay on those Goddamn rocks… to stay with us; with the so very many people who loved him and valued him and wanted to live in a world of which he was a part.",
    id: 194
  });
  this.add({
    url: "/memories/davids-bar-mitzvah",
    title: "David's Bar Mitzvah",
    date: "June 14, 2016",
    author: null,
    content: "I had so very many photos of Endi at David’s Bar Mitzvah. Even though David had almost 70 kids there, he was almost constantly with, near, or sharing looks with Endi (as you’ll notice in these photos). Sorry if there’s too many. ",
    id: 195
  });
  this.add({
    url: "/memories/davids-birthday",
    title: "David's Birthday",
    date: "June 14, 2016",
    author: null,
    content: "For David’s 11th or 12th birthday (not sure which), he wanted Endi and John Tolbert to join us in going to The Melting Pot (David’s choice, not mine). These two photos show the craziness happening in the backseat. \n\n\n\n\nThese next two photos were also taken of Endi, John, and David on that same birthday. These two were snapped in our basement, in David’s “Man Cave”. ",
    id: 196
  });
  this.add({
    url: "/memories/a-bunch-of-photos-of-endi-culled-from-many-many",
    title: "A bunch of photos of Endi culled from many, many other photos",
    date: "June 14, 2016",
    author: null,
    content: "This first one is one of my all-time favorites. It’s from a an overnight cub scout trip where we all stayed in Baltimore Harbor overnight on the Taney, a WW II Vessel. That’s Endi on the left, Matt Dulan in the middle, and my son, David Wiener, on the right. \n\n\n\nThese next two are also from the Taney. The first has Endi’s Dad, Sam (in beret and beard), and Matt’s Dad, Jack (foreground) in it.\n\n\n\nAnd this next one has Endi and David (back to camera) being told about the Taney’s map/navigation capabilities.",
    id: 197
  });
  this.add({
    url: "/memories/145914476778",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "",
    id: 198
  });
  this.add({
    url: "/memories/my-thoughts-and-prayers-are-with-friends-and",
    title: "My thoughts and prayers are with friends and family of Endicott Samuel Ackerman",
    date: "June 14, 2016",
    author: null,
    content: "Perhaps they are not stars but rather\nopenings in Heaven where the love of our lost\nones shines down to let us know they are happy\nEskimo Legend",
    id: 199
  });
  this.add({
    url: "/memories/if-there-was-one-thing-about-endicott-it-was-that",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "If there was one thing about Endicott it was that there was no one else like him. He was a truly fascinating man. I always knew that if I was to sit down next to him in the dining hall and have a conversation with him over breakfast, lunch or dinner we would always have something interesting to talk about. Science, The Classics, Poetry or Sport Endicott always had an opinion about anything. More amusingly though, 95% of the time he thought his opinion was the right one! I remember joining in long, incredibly passionate arguments with Tom, Duncan, Henry or whoever cared to listen, and when it was Endicott’s turn to speak he never shied away from the spotlight. I remember him recounting his heroics in the Fresher Footy (Rugby) match, a sport Endicott had never played before. After getting into a fight on the field he explained how he single handedly had fought off four, five, six !? opponents - “Man I was just knocking them down, I had one in my right hand and I was smacking him, I’ve got a bust lip, but I’m still whacking this guy with my left !”.\n\nEndicott was always copping flack for the fact that he had a pretty good rig (aka. body). Every event at Johns people would take odds on the likelihood that Endicott would remove his shirt at some point at an event. Though this banter only played right into Endicott’s ego, I remember someone yelling at Endicott once in the corridor “Put a shirt on!”, for Endicott to only turn straight around lift up his shirt, with a big cheesy grin and say “You’re just jealous, see you could grate cheese on these abs!”. \n\nNo one made the most of their new life in Sydney like Endicott did. Rain, hail or shine every weekend when everyone else was nursing bad hangovers or feeling sorry for themselves Duncan, Endicott and Claude would troop off to the beach to make the most of the day. And in the night they’d do the exact same, venturing out to meet all sorts of new people, seeking out the latest or coolest night spots for some fun. \n\nI like this photo because I think it captures Endicotts thirst for adventure and the fun times we had together. Although we weren’t best mates I always knew that anytime with Endicott was going to be a good one, no matter the event or time we’d pick up exactly where we left off. Ready to seek out some new form of mischief or try out some new idea. ",
    id: 200
  });
  this.add({
    url: "/memories/i-have-sooo-many-photos-of-you-to-choose-from-and",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "I have sooo many photos of you to choose from and I had the best pic of us that really summed up our relationship but it may be a bit inappropriate so I opted for a nicer one. This is one of the many fond memories I was able to capture and keep.\n\nEndo you taught me so much and I thank you for the lessons I’ve gained from fortunately knowing you and becoming so close to you within the past year. There are so many things that I would like to say to you but for now I choose to say sorry. Wherever you are I hope you accept my sincerest apology and just know how much I loved and cared for you.\n\nI will say what you used to say to me every night before bed for the last time, although it hurts and I miss you I hope you ‘sleep tight’ Endo. ",
    id: 201
  });
  this.add({
    url: "/memories/endicott-bront%C3%AB-and-claudia-st-johns-college",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "Endicott, Brontë and Claudia\nSt John’s College Formal \n\nWe love you Endo x ",
    id: 202
  });
  this.add({
    url: "/memories/dear-endi-i-remember-the-days-when-we-were",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "Dear Endi,  \n\nI remember the days when we were kids playing outside in our backyards together in our pools and hot tubs, drinking root beers out of the bottles your dad always got in your basement with your brothers  I think it was called “ birch beer” hahaha that’s was great. I remember the times your mom would make amazing snacks for us after school when we were hungry :) and the car rides to the general store in your dads old school apache 3 speed on the tree on the weekends. But most of all I remember how you always seemed to make people laugh and gather around you. There was always something about you that no one else had. Always so adventurous and ready to get out and go do something at a moments notice. I’m sitting here trying not to ball my eyes but I think everyone’s already doing that and so am i… the world lost a great friend, adventurer, and loving son. My heart goes out to the Ackerman family. I know we never got to hang out much ever since I moved and graduated but I was looking forward to seeing you again one day to have a couple drinks or hell smoke a cigar together but that will have to wait for now. Until we meet again Endi. \n\nSincerely with all my heart and soul,\n\nArthur Thompson",
    id: 203
  });
  this.add({
    url: "/memories/float-on-by-modest-mouse-claudia",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "Float On by Modest Mouse. \n\nClaudia",
    id: 204
  });
  this.add({
    url: "/memories/this-photo-was-taken-in-summer-2015-duncan-endo",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "This photo was taken in summer 2015. Duncan, Endo and I had spent the evening drinking at my Mums apartment. Of course, in Endo’s company, Amy Winehouse and other classics were played on repeat. We suddenly realised we had run out of time. The last train to Bondi Junction (on route to, Endo’s favourite club, El Topo) was 10 minutes away. This photo was taken straight after we had sprinted to the station. Can’t actually remember if we had made in time.  -  Claudia \n\nEndicott and Claudia. \nEdgecliff Station in Sydney. ",
    id: 205
  });
  this.add({
    url: "/memories/nathan-endicott-and-tom-st-johns-formal-2016-in",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "Nathan, Endicott and Tom. \nSt Johns Formal 2016 in Sydney\n\nClaudia",
    id: 206
  });
  this.add({
    url: "/memories/elise-endicott-and-claudia-st-johns-formal-2016",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "Elise, Endicott and Claudia. \nSt Johns Formal 2016 in Sydney \n\nClaudia",
    id: 207
  });
  this.add({
    url: "/memories/endicott-elise-and-allie-st-johns-formal-2016-in",
    title: "",
    date: "June 14, 2016",
    author: null,
    content: "Endicott, Elise and Allie \nSt Johns Formal 2016 in Sydney\n\nClaudia",
    id: 208
  });
  this.add({
    url: "/memories/145880901548",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 209
  });
  this.add({
    url: "/memories/145880898748",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 210
  });
  this.add({
    url: "/memories/good-night-you-king-of-maine-you-prince-of-new",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "“Good night, you King of Maine, you Prince of New England.” Wilbur Larch, The Cider House Rules by John Irving",
    id: 211
  });
  this.add({
    url: "/memories/this-picture-i-found-of-you-on-my-twitter-account",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "This picture I found of you on my Twitter account speaks for itself. You were fearless, ambitious, and simply just Endi. The last words you’ve said to me a couple weeks ago was “I have no complaints” (referring to your life and adventures so far). It inspires me that you found exactly who you were meant to be in life. It gives me comfort that you were content and happy. Much love. \nYour friend, Rachel Kim",
    id: 212
  });
  this.add({
    url: "/memories/growing-up-with-endi",
    title: "Growing up with Endi",
    date: "June 13, 2016",
    author: null,
    content: "They say….. You can always tell where a person has been by the tears and the smiles left behind.   Endi was loved and admired by ALL who knew him.   I know there are MANY tears now, but I am praying that with time… memories will bring a smile to you.  We were so blessed to have Endi in our lives while living in Clifton.  He and Holden were Honorary Farlows.  So many good times shared with the boys, just being boys.  From pool hopping, to sledding the hill, eating snow cream, to going to OBX and driving seaways, Lip Syncing to Queen (Bohemian Rhapsody), The fire pit at your house, the hot tub at our house, the endless hours on the rope swing, Clifton store, Day trips to Baltimore Science Museum, Four-wheeling at the Paris house, to making origami in Richmond.  Endi was a DELIGHT, and oh so smart!  He was such a good friend to Andrew. I know our move to Richmond, put space between the boys, but when each of them recall their childhoods, they will remember each other.     Endi grew from the soft-hearted boy into a smart, strong and handsome young man, with the same soft heart. He will always be 10 years old in my mind…. his short black hair, and the teeth he needed to grow into (and did - SOOO HANDSOME) Endi spread joy and his carefree ways everywhere he went. He will always be in my heart.  HE LIVED LIFE LARGE.  The world is a better place because Endicott was in it.  One never knows what a day will bring… Our loss is heaven’s gain.  Rest in Peace Endi - You are loved.   ",
    id: 213
  });
  this.add({
    url: "/memories/loved-forever",
    title: "loved forever",
    date: "June 13, 2016",
    author: null,
    content: "Oh Endi   \n\nFrom the moment you were born you challenged us. You inspired us. You made us laugh. You gave your love. And you were always deeply loved, every day of your life.   \n\nI was reflecting on how, in leaving us, you have left people crying on three continents. It makes me think about all the many more lives you could have touched all over the world – the places you would have gone, the amazing things you would have achieved, the father you would have been.   \n\nI think of you every moment of every day, and I cannot stop crying. But one day I hope that will change. The day may come when I will still think of you every moment of every day, but maybe I will smile, instead, remembering the simply amazing person you were.   \n\nFor now I am still crying.   \n\nFrom the Ackerman family, thanks to all of those who have shared their memories. Endi lives in your hearts, as he does in ours. To Endi’s friends: when the time comes that you have children of your own, I have a wonderful middle name I would like to suggest.   \n\nSam Ackerman",
    id: 214
  });
  this.add({
    url: "/memories/christmas-2013-cousins",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "Christmas 2013. Cousins.",
    id: 215
  });
  this.add({
    url: "/memories/endi-and-family-early-2000",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "Endi and family early 2000",
    id: 216
  });
  this.add({
    url: "/memories/145864555113",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 217
  });
  this.add({
    url: "/memories/145861275738",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 218
  });
  this.add({
    url: "/memories/endicott-i-met-you-earlier-this-year-at-manly",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "Endicott, I met you earlier this year at Manly beach through a mutual friend of ours. We all spent a few hours together tanning under the sun and swimming in the ocean and having plenty of laughs. We had a great chat about our hopes for the future and our travels.\n\nFrom just spending a day with you I could see the passion in your eyes when you spoke about the future or the things you enjoyed and the places you visited/wanted to visit. I could tell you were intelligent and hardworking. I could see you were caring and loving. You also had a beautiful smile that made anyone around you want to smile. I wish I had taken the step to organise for us all to catch up again but your passing has certainly affected me even though I met you once. \n\nYou’re loved by everyone and will continue to be in the hearts of those who met you. Rest in peace. Xx",
    id: 219
  });
  this.add({
    url: "/memories/zoe-and-endicott-listen-out-in-sydney-claudia",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "Zoe and Endicott. \nListen Out in Sydney\n\nClaudia Lowe",
    id: 220
  });
  this.add({
    url: "/memories/chelsea-duncan-and-endicott-listen-out-in",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "Chelsea, Duncan and Endicott. \nListen Out in Sydney\n\nClaudia Lowe",
    id: 221
  });
  this.add({
    url: "/memories/duncan-zoe-endicott-claudia-and-chelsea-at",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "Duncan, Zoe, Endicott, Claudia and Chelsea.\n At Sancta Sophia College Before Listen Out In Sydney. \n\nClaudia Lowe",
    id: 222
  });
  this.add({
    url: "/memories/145861247768",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 223
  });
  this.add({
    url: "/memories/145846978708",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 224
  });
  this.add({
    url: "/memories/145846945963",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 225
  });
  this.add({
    url: "/memories/145846903978",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 226
  });
  this.add({
    url: "/memories/145846891473",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 227
  });
  this.add({
    url: "/memories/145846887123",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 228
  });
  this.add({
    url: "/memories/145846886193",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 229
  });
  this.add({
    url: "/memories/145846881918",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 230
  });
  this.add({
    url: "/memories/145846881053",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 231
  });
  this.add({
    url: "/memories/endis-namesake",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "Endi’s namesake",
    id: 232
  });
  this.add({
    url: "/memories/145846169223",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 233
  });
  this.add({
    url: "/memories/145846164783",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 234
  });
  this.add({
    url: "/memories/145846158783",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 235
  });
  this.add({
    url: "/memories/145845909998",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 236
  });
  this.add({
    url: "/memories/145845907868",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 237
  });
  this.add({
    url: "/memories/145845904538",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 238
  });
  this.add({
    url: "/memories/145845772938",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 239
  });
  this.add({
    url: "/memories/145845768933",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 240
  });
  this.add({
    url: "/memories/145845767208",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "",
    id: 241
  });
  this.add({
    url: "/memories/submitted-by-andrew-iooss",
    title: "",
    date: "June 13, 2016",
    author: null,
    content: "Submitted by Andrew Iooss",
    id: 242
  });
  this.add({
    url: "/memories/145811838683",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 243
  });
  this.add({
    url: "/memories/145811786398",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 244
  });
  this.add({
    url: "/memories/145811661143",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 245
  });
  this.add({
    url: "/memories/145811615033",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 246
  });
  this.add({
    url: "/memories/145811575533",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 247
  });
  this.add({
    url: "/memories/145811509968",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 248
  });
  this.add({
    url: "/memories/145811486878",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 249
  });
  this.add({
    url: "/memories/145791674298",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 250
  });
  this.add({
    url: "/memories/145791540753",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 251
  });
  this.add({
    url: "/memories/145791531443",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 252
  });
  this.add({
    url: "/memories/145791518943",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 253
  });
  this.add({
    url: "/memories/145791505238",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 254
  });
  this.add({
    url: "/memories/145791410253",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 255
  });
  this.add({
    url: "/memories/145791370863",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 256
  });
  this.add({
    url: "/memories/145791340913",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 257
  });
  this.add({
    url: "/memories/145791319493",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 258
  });
  this.add({
    url: "/memories/145791274128",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 259
  });
  this.add({
    url: "/memories/145791157433",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 260
  });
  this.add({
    url: "/memories/145791089393",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 261
  });
  this.add({
    url: "/memories/145791069243",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 262
  });
  this.add({
    url: "/memories/145791042363",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 263
  });
  this.add({
    url: "/memories/145791014498",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 264
  });
  this.add({
    url: "/memories/145790997753",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 265
  });
  this.add({
    url: "/memories/145790972838",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 266
  });
  this.add({
    url: "/memories/145790952953",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 267
  });
  this.add({
    url: "/memories/145790932623",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 268
  });
  this.add({
    url: "/memories/145790878663",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 269
  });
  this.add({
    url: "/memories/145790835783",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 270
  });
  this.add({
    url: "/memories/145790759173",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 271
  });
  this.add({
    url: "/memories/145790345318",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 272
  });
  this.add({
    url: "/memories/145790007358",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 273
  });
  this.add({
    url: "/memories/145789986383",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 274
  });
  this.add({
    url: "/memories/145789895638",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 275
  });
  this.add({
    url: "/memories/145789642548",
    title: "",
    date: "June 12, 2016",
    author: null,
    content: "",
    id: 276
  });
  this.add({
    url: "/memories/wild-and-wonderful",
    title: "",
    date: "January 14, 2016",
    author: null,
    content: "“the wild and wonderful mountains of west virginia”",
    id: 277
  });
  this.add({
    url: "/memories/145789471683",
    title: "",
    date: "July 6, 2015",
    author: null,
    content: "⛵️",
    id: 278
  });
});

// builds reference data
var store = [{
  "link": "/memories/happy-birthday-to-the-one-and-only",
  "title": "",
  "date": "December 5, 2019",
  "author": "Rana",
  "excerpt": "Happy birthday, to the one and only. "
},{
  "link": "/memories/dear-endicott-in-june-2016-your-mother",
  "title": "",
  "date": "November 4, 2019",
  "author": "Chuck Smith",
  "excerpt": "Dear Endicott, In June 2016 your mother informed me of your passing.  Her message was clear.  “My son is gone. ..."
},{
  "link": "/memories/186972458108",
  "title": "The 4th Annual Endi Olympics at Echo Hill",
  "date": "August 8, 2019",
  "author": "Liz",
  "excerpt": "&lt;/source&gt;"
},{
  "link": "/memories/missing-our-endicott-celebrated-mass-followed-by",
  "title": "",
  "date": "June 7, 2019",
  "author": "Liz",
  "excerpt": "Missing our Endicott- celebrated Mass  followed by Crepe breakfast w many wonderful Clifton neighbors and friends. We all love you so..."
},{
  "link": "/memories/thinking-of-endo-allie",
  "title": "",
  "date": "June 7, 2019",
  "author": "Allie",
  "excerpt": "Thinking of Endo- Allie"
},{
  "link": "/memories/morning-at-endis-favorite-tamarama-beach-june",
  "title": "",
  "date": "June 7, 2019",
  "author": "Allie",
  "excerpt": "&lt;/source&gt;\n\nMorning at Endi’s favorite- Tamarama Beach. June 6, 2019. Love, Allie"
},{
  "link": "/memories/simon-second-week-of-college-had-this-artwork",
  "title": "",
  "date": "June 6, 2019",
  "author": "Sam",
  "excerpt": "Simon- second week of college had this artwork created. Fall 2018"
},{
  "link": "/memories/in-december-2018-endis-parents-and-brothers-went",
  "title": "",
  "date": "January 18, 2019",
  "author": "Sam",
  "excerpt": "In December 2018 Endi’s parents and brothers went to Germany to see Endi’s German exchange family. He loved them and..."
},{
  "link": "/memories/a-birthday-candle-for-my-angel-above-on-his-23rd",
  "title": "",
  "date": "December 5, 2018",
  "author": "Liz",
  "excerpt": "A birthday candle for my angel above on his 23rd Birthday - you are so loved and so missed my..."
},{
  "link": "/memories/the-kids-and-i-spend-a-week-on-the-waters-of",
  "title": "",
  "date": "December 5, 2018",
  "author": "Jenny",
  "excerpt": "The kids and I spend a week on the waters of Muskoka, Ontario every summer. The past two summers, I..."
},{
  "link": "/memories/this-yellow-truck-was-something-that-i-found-on",
  "title": "",
  "date": "December 5, 2018",
  "author": null,
  "excerpt": "This yellow truck was something that I found on the rocks as I left Tama when I visited you earlier..."
},{
  "link": "/memories/two-years-today-that-you-so-suddenly-left-us-the",
  "title": "",
  "date": "December 5, 2018",
  "author": null,
  "excerpt": "Two years today that you so suddenly left us. The universe was crying with us yesterday in Sydney as I..."
},{
  "link": "/memories/oh-endi-every-day-without-you-is-so-painful",
  "title": "",
  "date": "August 22, 2018",
  "author": null,
  "excerpt": "Oh Endi. Every day without you is so painful, almost more than I can bear. So when I tell you..."
},{
  "link": "/memories/176920717963",
  "title": "",
  "date": "August 12, 2018",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/176920710178",
  "title": "",
  "date": "August 12, 2018",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/thank-you-echo-hill-camp-for-another-beautiful",
  "title": "",
  "date": "August 12, 2018",
  "author": null,
  "excerpt": "Thank you Echo Hill Camp for another beautiful Endi Olympics Day 2018. Always in Spirit - the skies were blue..."
},{
  "link": "/memories/one-way-those-of-who-love-endi-show-our-love-is",
  "title": "",
  "date": "June 6, 2018",
  "author": null,
  "excerpt": "One way those of who love Endi show our love is through artwork. His great-aunt Geri, an accomplished painter in..."
},{
  "link": "/memories/missing-you-my-endicott-but-know-that-you-are-in",
  "title": "",
  "date": "June 6, 2018",
  "author": null,
  "excerpt": "&lt;/source&gt;\n\nMissing you my Endicott but know that you are in my heart always, mom"
},{
  "link": "/memories/easter-week-on-isla-mujeres-always-missing-you",
  "title": "",
  "date": "April 3, 2018",
  "author": null,
  "excerpt": "Easter Week on Isla Mujeres - always missing you and thinking of you with love. Peace our son."
},{
  "link": "/memories/somewhere-somehow-i-know-that-endicott-saw-his",
  "title": "",
  "date": "February 6, 2018",
  "author": null,
  "excerpt": "Somewhere, somehow I know that Endicott saw his beloved Eagles win a Super Bowl.   Endi, you were definitely down in..."
},{
  "link": "/memories/sam-and-simon-christmas-week-in-porto-endi-you",
  "title": "",
  "date": "January 3, 2018",
  "author": null,
  "excerpt": "Sam and Simon - Christmas week in Porto. Endi, you are never far from our hearts. Mom"
},{
  "link": "/memories/to-endi-on-your-22nd-birthday",
  "title": "",
  "date": "December 5, 2017",
  "author": null,
  "excerpt": "To Endi on your 22nd birthday There are so many things I would say to you if I could. Instead..."
},{
  "link": "/memories/167539354543",
  "title": "",
  "date": "November 15, 2017",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/hey-endo-its-been-a-while-since-ive-posted-but-a",
  "title": "",
  "date": "November 15, 2017",
  "author": null,
  "excerpt": "Hey Endo it’s been a while since I’ve posted but a year has gone by since you left us so..."
},{
  "link": "/memories/one-year-ago-today-june-8-2017-i-read-on",
  "title": "",
  "date": "November 15, 2017",
  "author": null,
  "excerpt": "One year ago today (June 8, 2017) I read on facebook what had happened. I remember being at work and..."
},{
  "link": "/memories/i-miss-you",
  "title": "I Miss You",
  "date": "November 15, 2017",
  "author": null,
  "excerpt": "I’m just writing to say I miss you, I hope you can hear when I talk to you sometimes, like..."
},{
  "link": "/memories/robinson-secondary-school-stadium-dedicated-fall",
  "title": "",
  "date": "September 11, 2017",
  "author": null,
  "excerpt": "Robinson Secondary School Stadium \nDedicated Fall 2016 \nThank You Rams Football  "
},{
  "link": "/memories/165245966808",
  "title": "",
  "date": "August 16, 2017",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/165245948383",
  "title": "",
  "date": "August 16, 2017",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/2nd-annual-endicotts-olympic-day-at-echo-hill",
  "title": "",
  "date": "August 16, 2017",
  "author": null,
  "excerpt": "2nd Annual Endicott’s Olympic Day at Echo Hill Camp August 8th 2017 A big thank you to the camp and..."
},{
  "link": "/memories/my-dear-endicott-this-june-6-2017-is-a-date-i",
  "title": "",
  "date": "June 7, 2017",
  "author": null,
  "excerpt": "My dear Endicott, This June 6 2017, is a date I have been dreading. How I wish I could go..."
},{
  "link": "/memories/my-endithis-mothers-day-was-warm-with-the-love",
  "title": "",
  "date": "May 15, 2017",
  "author": null,
  "excerpt": "My Endi, This Mother’s Day was warm with the love of your dad, siblings, family and friends but there was..."
},{
  "link": "/memories/my-dear-endi-today-march-22-is-our-one-year",
  "title": "",
  "date": "March 23, 2017",
  "author": null,
  "excerpt": "My dear Endi, Today, March 22, is our one year anniversary where you and I enjoyed “The Barber of Seville”..."
},{
  "link": "/memories/claudia-visits-from-australia-feels-endis-spirit",
  "title": "",
  "date": "March 8, 2017",
  "author": null,
  "excerpt": "Claudia visits from Australia. Feels Endi’s spirit in Ozzie."
},{
  "link": "/memories/wild-child-beautiful-boy-you-drove-us-crazy-you",
  "title": "",
  "date": "February 12, 2017",
  "author": null,
  "excerpt": "Wild child beautiful boy you drove us crazy you gave us joy you left a hurt time cannot heal you..."
},{
  "link": "/memories/i-think-about-you-every-day-endi-and-i-miss-you",
  "title": "",
  "date": "February 12, 2017",
  "author": null,
  "excerpt": "I think about you every day, Endi. And I miss you so much. The time I spent with you was..."
},{
  "link": "/memories/merry-christmas-endicott-we-love-you-so-much",
  "title": "",
  "date": "December 29, 2016",
  "author": null,
  "excerpt": "Merry Christmas Endicott, we love you so much.\n\n  The Ackermans"
},{
  "link": "/memories/endi-i-took-this-photo-of-you-doing-what-you",
  "title": "",
  "date": "December 5, 2016",
  "author": null,
  "excerpt": "Endi, I took this photo of you doing what you loved to do back in March 2016. Not a moment..."
},{
  "link": "/memories/i-think-of-endi-every-day-and-when-i-do-this",
  "title": "I think of Endi every day, and when I do, this passage keeps playing in my head",
  "date": "December 5, 2016",
  "author": null,
  "excerpt": "“O my son Absalom,my son, my son Absalom! Would I had died instead of you, O Absalom, my son, my son!”"
},{
  "link": "/memories/153870850068",
  "title": "",
  "date": "November 30, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/endicott-claudia-duncan-tom-and-gemma-st",
  "title": "",
  "date": "November 1, 2016",
  "author": null,
  "excerpt": "Endicott, Claudia, Duncan, Tom and Gemma \nSt Paddy’s Pub Crawl 2015 "
},{
  "link": "/memories/endicott-and-claudia-victory-dinner-at-st-johns",
  "title": "",
  "date": "November 1, 2016",
  "author": null,
  "excerpt": "Endicott and Claudia \nVictory Dinner at St John’s College in Sydney, 2015"
},{
  "link": "/memories/on-saturday-november-26-we-will-be-honoring-and",
  "title": "",
  "date": "October 12, 2016",
  "author": null,
  "excerpt": "On Saturday, November 26 , we will be honoring and remembering our beloved son Endicott. We invite friends to join..."
},{
  "link": "/memories/endicott-junior-year-at-robinson-october-2012",
  "title": "",
  "date": "October 4, 2016",
  "author": null,
  "excerpt": "Endicott, junior year at Robinson, October 2012"
},{
  "link": "/memories/endicott-october-1996-10-months-old-playing-in",
  "title": "",
  "date": "October 4, 2016",
  "author": null,
  "excerpt": "Endicott, October 1996, 10 months old playing in the leaves"
},{
  "link": "/memories/a-reflection-of-endicott",
  "title": "A Reflection of Endicott",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "A Reflection – Given by Liz Dixon, Endicott’s mother Requiem Mass for Endicott Ackerman St John’s College Chapel 18 August..."
},{
  "link": "/memories/duncan-hannah-liz-bronte-and-allie-at-bondi",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Duncan, Hannah, Liz, Bronte and Allie at Bondi Beach, August 18, 2016. Remembering Endi."
},{
  "link": "/memories/lizs-final-day-at-bondi-beach-saying-my-farewell",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Liz’s final day at Bondi Beach saying my farewell to the water"
},{
  "link": "/memories/liz-and-allie-in-endis-favorite-el-topo",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Liz and Allie in Endi’s favorite El Topo"
},{
  "link": "/memories/duncan-and-claudia-celebrating-endi-in-style-with",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Duncan and Claudia celebrating Endi in style with his favorites, oysters and champagne w Liz"
},{
  "link": "/memories/liz-and-duncan-remembering-endo",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Liz and Duncan remembering Endo"
},{
  "link": "/memories/liz-and-claudia-at-one-of-endis-favorite-museums",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Liz and Claudia at one of Endi’s favorite museums "
},{
  "link": "/memories/endis-favorite-animal-at-the-zoo-taronga-zoo",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Endi’s favorite animal at the zoo. Taronga Zoo, Sydney, August 2016"
},{
  "link": "/memories/hannah-at-bondi",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Hannah at Bondi"
},{
  "link": "/memories/the-whales",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "The whales."
},{
  "link": "/memories/claudia-and-allie-on-the-rocks-watching-the-two",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Claudia and Allie on the rocks watching the two hump back whales who came to greet us. August 18, 2016..."
},{
  "link": "/memories/hannah-and-liz-at-bondi",
  "title": "",
  "date": "September 4, 2016",
  "author": null,
  "excerpt": "Hannah and Liz at Bondi"
},{
  "link": "/memories/149582952793",
  "title": "",
  "date": "August 27, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/149582950993",
  "title": "",
  "date": "August 27, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/thinking-of-you-all-i-wanted-to-drop-you-sam-and",
  "title": "",
  "date": "August 22, 2016",
  "author": null,
  "excerpt": "Thinking of you all. I wanted to drop you Sam and Liz a quick line to express my deepest sympathies..."
},{
  "link": "/memories/more-from-bondi",
  "title": "",
  "date": "August 22, 2016",
  "author": null,
  "excerpt": "More from Bondi"
},{
  "link": "/memories/had-the-privilege-of-getting-to-visit-the",
  "title": "",
  "date": "August 22, 2016",
  "author": null,
  "excerpt": "Had the privilege of getting to visit the beautiful Sydney, Australia. Could not stop thinking about Endi as I visited..."
},{
  "link": "/memories/149336236778",
  "title": "",
  "date": "August 22, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/frat-night-in-silly-season-2015",
  "title": "",
  "date": "August 22, 2016",
  "author": null,
  "excerpt": "Frat night in Silly Season 2015"
},{
  "link": "/memories/gemma-endicott-and-liv-at-our-st-johns-college",
  "title": "",
  "date": "August 22, 2016",
  "author": null,
  "excerpt": "Gemma, Endicott and Liv at our St John’s College Formal 2016"
},{
  "link": "/memories/most-of-our-corridor-the-pit-from-our-fresher",
  "title": "",
  "date": "August 22, 2016",
  "author": null,
  "excerpt": "Most of our corridor ‘The Pit’ from our fResher year and a few other people at my house for a..."
},{
  "link": "/memories/duncan-liv-gemma-and-endicott-st-johns-college",
  "title": "",
  "date": "August 22, 2016",
  "author": null,
  "excerpt": "Duncan, Liv, Gemma and Endicott\n\nSt John’s College Formal 2016.\n\nWe all miss you Endo xx"
},{
  "link": "/memories/fabulous-and-exciting-day-at-echo",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Fabulous and exciting day at Echo"
},{
  "link": "/memories/thank-you-echo-hill-staff-and-campers-for-a",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Thank you Echo Hill Staff and Campers for a wonderful day on the Bay."
},{
  "link": "/memories/liz-and-trevor",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Liz and Trevor"
},{
  "link": "/memories/sam-liz-and-simon-with-the-newly-christened",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Sam, Liz and Simon with the newly Christened Endicott’s Scot"
},{
  "link": "/memories/endis-memorial-at-echo-hill",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Endi’s Memorial at Echo Hill!"
},{
  "link": "/memories/awesome-day-at-echo-hill",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Awesome day at Echo Hill!"
},{
  "link": "/memories/the-ackermans-want-to-thank-the-echo-hill-leaders",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "The Ackermans want to thank the Echo Hill leaders, staff, campers and wonderful kitchen team for making the First Annual..."
},{
  "link": "/memories/simon-shoots-by-camp-legend-endi-still-holds-the",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Simon shoots! By camp legend, Endi still holds the water basketball (waba) scoring record: 152"
},{
  "link": "/memories/newest-boat-in-the-echo-hill-fleet",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Newest boat in the Echo Hill fleet!"
},{
  "link": "/memories/148846402423",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/happy-to-be-at-echo-hill",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Happy to be at Echo Hill!"
},{
  "link": "/memories/before-the-tree-planting-ceremony-a-camper",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Before the tree-planting ceremony, a camper performs in Endi’s honor."
},{
  "link": "/memories/gathering-for-the-first-annual-endicott-olympics",
  "title": "",
  "date": "August 12, 2016",
  "author": null,
  "excerpt": "Gathering for the First Annual Endicott Olympics at Echo Hill Camp."
},{
  "link": "/memories/claudia-and-endicott-halloween-2015-in-sydney",
  "title": "",
  "date": "August 11, 2016",
  "author": null,
  "excerpt": "Claudia and Endicott, Halloween 2015 in Sydney.  This was one of my favourite college events last year. While everyone else..."
},{
  "link": "/memories/allie-duncan-endicott-and-claudia-halloween",
  "title": "",
  "date": "August 11, 2016",
  "author": null,
  "excerpt": "Allie, Duncan, Endicott and Claudia. Halloween 2015 in Sydney "
},{
  "link": "/memories/endicott-halloween-2015-in-sydney",
  "title": "",
  "date": "August 11, 2016",
  "author": null,
  "excerpt": "Endicott Halloween 2015 in Sydney "
},{
  "link": "/memories/endi-your-dad-and-i-are-at-the-cabin-this",
  "title": "",
  "date": "July 24, 2016",
  "author": null,
  "excerpt": "Endi,  Your dad and I are at the cabin this weekend and as always, your presence is with us every..."
},{
  "link": "/memories/147563391988",
  "title": "",
  "date": "July 17, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/147556640668",
  "title": "",
  "date": "July 17, 2016",
  "author": null,
  "excerpt": "Dear Endi, First of all, I miss you. Secondly, I’m writing to you from the beach in Wilmington and it’s..."
},{
  "link": "/memories/endi-what-would-i-do-differently-if-you-were",
  "title": "",
  "date": "July 12, 2016",
  "author": null,
  "excerpt": "Endi. What would I do differently if you were here? Would I call you? Make an effort to spend time..."
},{
  "link": "/memories/glory-days",
  "title": "",
  "date": "July 12, 2016",
  "author": null,
  "excerpt": "Glory Days"
},{
  "link": "/memories/i-wanted-to-share-an-email-i-sent-to-liz-because-i",
  "title": "",
  "date": "July 10, 2016",
  "author": null,
  "excerpt": "I wanted to share an email I sent to Liz because I believe this is the case for anyone who..."
},{
  "link": "/memories/when-prom-came-around-i-was-so-nervous-youd-show",
  "title": "",
  "date": "July 7, 2016",
  "author": null,
  "excerpt": "When prom came around I was so nervous you’d show up to my house barefoot, or without a shirt on…..."
},{
  "link": "/memories/we-met-each-other-in-7th-grade-and-i-gave-you-my",
  "title": "",
  "date": "July 7, 2016",
  "author": null,
  "excerpt": "We met each other in 7th grade and I gave you my number a few weeks later. One night we..."
},{
  "link": "/memories/146971516303",
  "title": "",
  "date": "July 5, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146971514178",
  "title": "",
  "date": "July 5, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/endis-cabin-in-the-woods",
  "title": "",
  "date": "July 5, 2016",
  "author": null,
  "excerpt": "Endi’s cabin in the woods"
},{
  "link": "/memories/i-miss-you",
  "title": "I Miss You",
  "date": "July 5, 2016",
  "author": null,
  "excerpt": "Growing up in the neighborhood that I did I had one friend my age, Kevin Graine, and when I heard..."
},{
  "link": "/memories/mom-with-hannah-endicott-and-holden-new-years",
  "title": "",
  "date": "July 3, 2016",
  "author": null,
  "excerpt": "Mom with Hannah, Endicott and Holden, New Year’s Eve 2015, Bermuda"
},{
  "link": "/memories/some-of-our-favorite-memories-of-endi-are-from",
  "title": "",
  "date": "July 2, 2016",
  "author": null,
  "excerpt": "Some of our favorite memories of Endi are from Flag Football. The first photo of Endi and Charlie is from..."
},{
  "link": "/memories/146816777173",
  "title": "",
  "date": "July 2, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146816774498",
  "title": "",
  "date": "July 2, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146816771558",
  "title": "",
  "date": "July 2, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146816768753",
  "title": "",
  "date": "July 2, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/a-number-of-people-have-asked-about-gifts-that",
  "title": "",
  "date": "July 1, 2016",
  "author": null,
  "excerpt": "A number of people have asked about gifts that could be made in Endi’s (Endo’s) honor. For Liz, Hannah, Holden,..."
},{
  "link": "/memories/146776327753",
  "title": "",
  "date": "July 1, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/to-all-who-knew-endi",
  "title": "To All Who Knew Endi",
  "date": "July 1, 2016",
  "author": null,
  "excerpt": "And for a brief moment, the world stood still.  That stillness was a symbol to us that Endi had left..."
},{
  "link": "/memories/oh-my-sweet-lizzie-im-so-very-sorry-for-your",
  "title": "",
  "date": "June 30, 2016",
  "author": null,
  "excerpt": "Oh my sweet Lizzie, I’m so very sorry for your loss. I remember we were both pregnant with our third..."
},{
  "link": "/memories/endicott-and-gabriel-with-the-dortmund-giants",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "Endicott and Gabriel with the Dortmund Giants Football Team, Summer 2013"
},{
  "link": "/memories/endicott-and-gabriel-germany-summer-2013",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "Endicott and Gabriel, Germany, Summer 2013"
},{
  "link": "/memories/for-lizzie-and-family",
  "title": "For Lizzie and Family",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "“O Mary, Mother of God, be unto us indeed a Mother; pity the fears and sorrows of your children in..."
},{
  "link": "/memories/homecoming-2013-sara",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "Homecoming 2013\n\n-Sara"
},{
  "link": "/memories/it-was-the-end-of-the-day-i-was-walking-to-my",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "It was the end of the day &amp; I was walking to my car and I found a note on..."
},{
  "link": "/memories/endi-and-i-at-senior-year-homecoming-2013-he-was",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "Endi and I at senior year homecoming 2013. He was the best date. \n-Sara"
},{
  "link": "/memories/146677991588",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677986828",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677982508",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677978388",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677974018",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677969838",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677965493",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677959883",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677954868",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677950293",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677944913",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146677940013",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146655497793",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146655494038",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146655489538",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/146655484948",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/i-will-miss-endicott-for-the-rest-of-my-life",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "I will miss Endicott for the rest of my life. He was my best friend for many years and will..."
},{
  "link": "/memories/we-were-so-sorry-to-hear-about-the-loss-of-endo-i",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "We were so sorry to hear about the loss of Endo. I still remember him laughing and telling me about..."
},{
  "link": "/memories/we-like-all-who-knew-endi-have-been-struggling",
  "title": "",
  "date": "June 29, 2016",
  "author": null,
  "excerpt": "We, like all who knew Endi have been struggling with his loss. We keep trying to remember every detail about his too..."
},{
  "link": "/memories/im-not-sure-what-to-say-about-this-except-wow",
  "title": "",
  "date": "June 23, 2016",
  "author": null,
  "excerpt": "I’m not sure what to say about this except wow. Olja and I were laughing through our tears the other..."
},{
  "link": "/memories/i-wanted-to-post-this-not-only-for-everyone-to-see",
  "title": "",
  "date": "June 23, 2016",
  "author": null,
  "excerpt": "I wanted to post this not only for everyone to see but to let Sam know I have always looked..."
},{
  "link": "/memories/tipton-lane-always-getting-the-flex-on-love",
  "title": "",
  "date": "June 23, 2016",
  "author": null,
  "excerpt": "Tipton Lane… always getting the flex on…\n\nlove, Don"
},{
  "link": "/memories/this-is-from-one-of-our-many-visits-to-the",
  "title": "",
  "date": "June 23, 2016",
  "author": null,
  "excerpt": "This is from one of our many visits to the Ackerman house. Such sweet, sweet boys!\n\nlove, Don"
},{
  "link": "/memories/three-years-ago-today-i-became-friends-with-endi",
  "title": "",
  "date": "June 23, 2016",
  "author": null,
  "excerpt": "Three years ago today I became friends with Endi on Facebook. We only had one short and nonsense convo and..."
},{
  "link": "/memories/sam-and-liz-i-am-so-so-sorry-for-you-both-yet",
  "title": "",
  "date": "June 22, 2016",
  "author": null,
  "excerpt": "Sam and Liz, I am so, so sorry for you both, yet heartened by the reflections expressed here. Endi sounds..."
},{
  "link": "/memories/146319070598",
  "title": "",
  "date": "June 22, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/his-second-day-in-australia-in-august-2014",
  "title": "",
  "date": "June 22, 2016",
  "author": null,
  "excerpt": "His second day in Australia in August 2014"
},{
  "link": "/memories/this-is-my-favourite-video-of-endo-bronte-and-i",
  "title": "",
  "date": "June 22, 2016",
  "author": null,
  "excerpt": "This is my favourite video of Endo!  Bronte and I have been watching it non-stop and can’t help laughing.  It..."
},{
  "link": "/memories/dear-ackerman-family-of-course-and-as-usual-no",
  "title": "",
  "date": "June 22, 2016",
  "author": null,
  "excerpt": "Dear Ackerman family, Of course and as usual, no words express our sorrow we feel at this time for your..."
},{
  "link": "/memories/the-only-time-we-met-endicott-was-at-his-high",
  "title": "",
  "date": "June 22, 2016",
  "author": null,
  "excerpt": "The only time we met Endicott was at his high school graduation party at your home.  From that brief visit,..."
},{
  "link": "/memories/endi-there-is-no-way-to-tell-you-how-sorry-i-am",
  "title": "",
  "date": "June 21, 2016",
  "author": null,
  "excerpt": "Endi, There is no way to tell you how sorry I am that this happened to you. I hope you..."
},{
  "link": "/memories/oh-baby-my-baby-how-i-miss-you-what-i-would",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Oh, baby.  My baby.  How I miss you.  What I would give to see your face, to hold you in..."
},{
  "link": "/memories/hannah-said-something-while-she-was-here-she-said",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Hannah said something while she was here. She said the more she was getting to know Endi better, and the..."
},{
  "link": "/memories/endi-ackermans-highlights",
  "title": "ENDI ACKERMAN's Highlights",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "ENDI ACKERMAN’s Highlights For Endi’s Australian friends who never saw him play American football, here is a taste: http://www.hudl.com/athlete/1268504/endi-ackerman Sam..."
},{
  "link": "/memories/you-were-a-blessing-endicott",
  "title": "You were a blessing Endicott",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "In 2013, I was that lucky mother who hosted this lovely handsome Endicott during the exchange program to Germany. Gabriel..."
},{
  "link": "/memories/my-condolences",
  "title": "My condolences",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Dearest Sam, Liz and children, My heart is broken over the loss of Endicott; and there are no words that..."
},{
  "link": "/memories/endi-and-django-in-w-virginia",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Endi and Django in W. Virginia"
},{
  "link": "/memories/always-always-always-just-so-sweet",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "always always always… just so sweet"
},{
  "link": "/memories/endi-was-always-trying-make-other-people-happy",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Endi was always trying make other people happy"
},{
  "link": "/memories/endi-was-always-looking-after-little-django-he",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Endi was always looking after little Django… he was so sweet with him."
},{
  "link": "/memories/we-are-heartbroken-a-thousand-times-over",
  "title": "We are heartbroken a thousand times over",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "We are heartbroken for the world because Endi had so much to share that he won’t get a chance to..."
},{
  "link": "/memories/no-one-compares-to-you-endo-kira-x",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "No one compares to you Endo\n\nKira x "
},{
  "link": "/memories/never-witnessed-you-unhappy-kira-x",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Never witnessed you unhappy\n\nKira x "
},{
  "link": "/memories/loved-your-presence-kira-x",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Loved your presence. \n\nKira x "
},{
  "link": "/memories/chelsea-duncan-claudia-endicott-the-race-at",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Chelsea, Duncan, Claudia, Endicott. The Race at Randwick Stadium Sydney 2015 "
},{
  "link": "/memories/duncan-and-endicott-the-race-at-randwick-stadium",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Duncan and Endicott. The Race at Randwick Stadium Sydney 2015 "
},{
  "link": "/memories/endicott-and-claudia-the-races-at-randwick",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Endicott and Claudia. The Race’s at Randwick Stadium Sydney 2015 "
},{
  "link": "/memories/holden-ackerman-speaking-at-robinson-vigil",
  "title": "",
  "date": "June 20, 2016",
  "author": null,
  "excerpt": "Holden Ackerman speaking at Robinson vigil."
},{
  "link": "/memories/sam-ackerman-speaking-at-robinson-vigil",
  "title": "",
  "date": "June 19, 2016",
  "author": null,
  "excerpt": "&lt;/source&gt;\n\nSam Ackerman speaking at Robinson vigil."
},{
  "link": "/memories/sweetest-little-kid",
  "title": "Sweetest Little Kid",
  "date": "June 19, 2016",
  "author": null,
  "excerpt": " I remember Endi as a sweet, dear little boy.  He grew up to be an amazing man.  When I look..."
},{
  "link": "/memories/craver-christmas-2008",
  "title": "Craver Christmas 2008",
  "date": "June 19, 2016",
  "author": null,
  "excerpt": "Memories of a beautiful smile and an amazing young man."
},{
  "link": "/memories/endicott-was-my-godson-i-was-only-a-freshman-in",
  "title": "",
  "date": "June 19, 2016",
  "author": null,
  "excerpt": "Endicott was my godson.  I was only a freshman in high school when he was baptized and remember thinking what..."
},{
  "link": "/memories/endi-we-knew-all-of-your-life-not-as-well-as",
  "title": "",
  "date": "June 18, 2016",
  "author": null,
  "excerpt": "Endi. We knew all of your life. Not as well as many, but on those fun occasions when we were..."
},{
  "link": "/memories/endicott-his-cit-summer-at-echo-hill",
  "title": "Endicott his CIT summer at Echo Hill",
  "date": "June 18, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/endicott-echo-hill-camp-summer-2005",
  "title": "Endicott - Echo Hill Camp Summer 2005",
  "date": "June 18, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/i-dont-know-if-duncan-will-post-on-here-in-his",
  "title": "",
  "date": "June 17, 2016",
  "author": null,
  "excerpt": "I don’t know if Duncan will post on here in his own words but I wanted to share my view..."
},{
  "link": "/memories/endo-and-i-in-our-2nd-week-in-sydney-of-course",
  "title": "",
  "date": "June 17, 2016",
  "author": null,
  "excerpt": "Endo and I in our 2nd week in Sydney, of course, at Bondi Beach.  This was the first time Endo,..."
},{
  "link": "/memories/endicott-helping-me-move-out-claudia",
  "title": "",
  "date": "June 17, 2016",
  "author": null,
  "excerpt": "Endicott “helping” me move out. \n\nClaudia "
},{
  "link": "/memories/endi-i-was-able-to-sit-down-with-mama-bear-today",
  "title": "",
  "date": "June 16, 2016",
  "author": null,
  "excerpt": "Endi, I was able to sit down with Mama Bear today for the first time. We talked about how you..."
},{
  "link": "/memories/my-dearest-liz-after-years-of-hearing-amazing",
  "title": "",
  "date": "June 16, 2016",
  "author": null,
  "excerpt": "My dearest Liz.  After years of hearing amazing stories about your children, I finally had the pleasure of meeting Endi..."
},{
  "link": "/memories/christmas-2013",
  "title": "",
  "date": "June 16, 2016",
  "author": null,
  "excerpt": "Christmas 2013 ❤️❤️"
},{
  "link": "/memories/endi-bear-with-me-because-i-am-writing-this-at",
  "title": "",
  "date": "June 16, 2016",
  "author": null,
  "excerpt": "Endi- Bear with me because I am writing this at 1:47 in the AM. I am here now at your..."
},{
  "link": "/memories/me-lets-find-you-a-crocodile-since-youre",
  "title": "",
  "date": "June 16, 2016",
  "author": null,
  "excerpt": "Me: Let’s find you a crocodile, since you’re leaving me for Australia! Endicott: No I want the dragon, it’s way..."
},{
  "link": "/memories/twenty-years-from-now-you-will-be-more",
  "title": "",
  "date": "June 15, 2016",
  "author": null,
  "excerpt": "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you..."
},{
  "link": "/memories/lizzie-this-one-is-for-you-we-love-you-tammi",
  "title": "",
  "date": "June 15, 2016",
  "author": null,
  "excerpt": "Lizzie - this one is for you!!! We love you, Tammi and Mom Linda XOXO"
},{
  "link": "/memories/although-i-never-met-endicott-i-feel-like-i-knew",
  "title": "",
  "date": "June 15, 2016",
  "author": null,
  "excerpt": "Although I never met Endicott, I feel like I knew him because of all the sweet things Liz always said..."
},{
  "link": "/memories/i-have-met-endi-only-once-but-felt-this-quote-was",
  "title": "",
  "date": "June 15, 2016",
  "author": null,
  "excerpt": "I have met Endi only once, but felt this quote was consistent to way he lived his life.  I’ve had..."
},{
  "link": "/memories/to-endi-i-still-remember-that-night-we-met-in",
  "title": "",
  "date": "June 15, 2016",
  "author": null,
  "excerpt": "To Endi I still remember that night we met in Canada two years ago. You were walking down the hotel..."
},{
  "link": "/memories/not-many-football-players-also-went-for-the-ib",
  "title": "",
  "date": "June 15, 2016",
  "author": null,
  "excerpt": "Not many football players also went for the IB Diploma. He was just as smart as athletic while also being..."
},{
  "link": "/memories/i-cannot-tell-you-the-last-time-i-saw-endi-but-i",
  "title": "",
  "date": "June 15, 2016",
  "author": null,
  "excerpt": "I cannot tell you the last time I saw Endi, but I can tell you how absolutely fascinated I am..."
},{
  "link": "/memories/145936470218",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/jellyfish-sting-so-big-it-would-have-killed-a",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "“Jellyfish sting so big it would have killed a lesser man”\n    @the_endicott"
},{
  "link": "/memories/145936215478",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145936213468",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145936211118",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/winter-skinnydipping-in-west-virginia-january",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "Winter skinnydipping in West Virginia. January, 2016"
},{
  "link": "/memories/145936197178",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/if-you-spend-some-time-walking-around-barefoot",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "“If you spend some time walking around barefoot you come to the saddening realization of how little of the time..."
},{
  "link": "/memories/i-do-not-have-pictures-of-endi-i-have-never-met",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "I do not have pictures of Endi. I have never met him. But I know him through the intense love..."
},{
  "link": "/memories/145926475923",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145926473538",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145926471218",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/in-the-past-few-days-i-tried-to-remember-how-i-met",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "In the past few days I tried to remember how I met Endi for the first time. I thought it..."
},{
  "link": "/memories/remembering-endi",
  "title": "Remembering Endi",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "So, posting all those photos was the easy part. This part, not so easy. We love this boy. Though we..."
},{
  "link": "/memories/davids-bar-mitzvah",
  "title": "David's Bar Mitzvah",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "I had so very many photos of Endi at David’s Bar Mitzvah. Even though David had almost 70 kids there,..."
},{
  "link": "/memories/davids-birthday",
  "title": "David's Birthday",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "For David’s 11th or 12th birthday (not sure which), he wanted Endi and John Tolbert to join us in going..."
},{
  "link": "/memories/a-bunch-of-photos-of-endi-culled-from-many-many",
  "title": "A bunch of photos of Endi culled from many, many other photos",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "This first one is one of my all-time favorites. It’s from a an overnight cub scout trip where we all..."
},{
  "link": "/memories/145914476778",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/my-thoughts-and-prayers-are-with-friends-and",
  "title": "My thoughts and prayers are with friends and family of Endicott Samuel Ackerman",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "Perhaps they are not stars but rather openings in Heaven where the love of our lost ones shines down to..."
},{
  "link": "/memories/if-there-was-one-thing-about-endicott-it-was-that",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "If there was one thing about Endicott it was that there was no one else like him. He was a..."
},{
  "link": "/memories/i-have-sooo-many-photos-of-you-to-choose-from-and",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "I have sooo many photos of you to choose from and I had the best pic of us that really..."
},{
  "link": "/memories/endicott-bront%C3%AB-and-claudia-st-johns-college",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "Endicott, Brontë and Claudia\nSt John’s College Formal \n\nWe love you Endo x "
},{
  "link": "/memories/dear-endi-i-remember-the-days-when-we-were",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "Dear Endi,   I remember the days when we were kids playing outside in our backyards together in our pools..."
},{
  "link": "/memories/float-on-by-modest-mouse-claudia",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "Float On by Modest Mouse. \n\nClaudia"
},{
  "link": "/memories/this-photo-was-taken-in-summer-2015-duncan-endo",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "This photo was taken in summer 2015. Duncan, Endo and I had spent the evening drinking at my Mums apartment...."
},{
  "link": "/memories/nathan-endicott-and-tom-st-johns-formal-2016-in",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "Nathan, Endicott and Tom. \nSt Johns Formal 2016 in Sydney\n\nClaudia"
},{
  "link": "/memories/elise-endicott-and-claudia-st-johns-formal-2016",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "Elise, Endicott and Claudia. \nSt Johns Formal 2016 in Sydney \n\nClaudia"
},{
  "link": "/memories/endicott-elise-and-allie-st-johns-formal-2016-in",
  "title": "",
  "date": "June 14, 2016",
  "author": null,
  "excerpt": "Endicott, Elise and Allie \nSt Johns Formal 2016 in Sydney\n\nClaudia"
},{
  "link": "/memories/145880901548",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145880898748",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/good-night-you-king-of-maine-you-prince-of-new",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "“Good night, you King of Maine, you Prince of New England.” Wilbur Larch, The Cider House Rules by John Irving..."
},{
  "link": "/memories/this-picture-i-found-of-you-on-my-twitter-account",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "This picture I found of you on my Twitter account speaks for itself. You were fearless, ambitious, and simply just..."
},{
  "link": "/memories/growing-up-with-endi",
  "title": "Growing up with Endi",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "They say….. You can always tell where a person has been by the tears and the smiles left behind.   Endi..."
},{
  "link": "/memories/loved-forever",
  "title": "loved forever",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Oh Endi    From the moment you were born you challenged us. You inspired us. You made us laugh. You..."
},{
  "link": "/memories/christmas-2013-cousins",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Christmas 2013. Cousins."
},{
  "link": "/memories/endi-and-family-early-2000",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Endi and family early 2000"
},{
  "link": "/memories/145864555113",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145861275738",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/endicott-i-met-you-earlier-this-year-at-manly",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Endicott, I met you earlier this year at Manly beach through a mutual friend of ours. We all spent a..."
},{
  "link": "/memories/zoe-and-endicott-listen-out-in-sydney-claudia",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Zoe and Endicott. \nListen Out in Sydney\n\nClaudia Lowe"
},{
  "link": "/memories/chelsea-duncan-and-endicott-listen-out-in",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Chelsea, Duncan and Endicott. \nListen Out in Sydney\n\nClaudia Lowe"
},{
  "link": "/memories/duncan-zoe-endicott-claudia-and-chelsea-at",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Duncan, Zoe, Endicott, Claudia and Chelsea.\n At Sancta Sophia College Before Listen Out In Sydney. \n\nClaudia Lowe"
},{
  "link": "/memories/145861247768",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846978708",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846945963",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846903978",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846891473",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846887123",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846886193",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846881918",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846881053",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/endis-namesake",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Endi’s namesake"
},{
  "link": "/memories/145846169223",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846164783",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145846158783",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145845909998",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145845907868",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145845904538",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145845772938",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145845768933",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145845767208",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/submitted-by-andrew-iooss",
  "title": "",
  "date": "June 13, 2016",
  "author": null,
  "excerpt": "Submitted by Andrew Iooss"
},{
  "link": "/memories/145811838683",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145811786398",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145811661143",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145811615033",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145811575533",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145811509968",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145811486878",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791674298",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791540753",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791531443",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791518943",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791505238",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791410253",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791370863",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791340913",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791319493",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791274128",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791157433",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791089393",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791069243",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791042363",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145791014498",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790997753",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790972838",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790952953",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790932623",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790878663",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790835783",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790759173",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790345318",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145790007358",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145789986383",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145789895638",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/145789642548",
  "title": "",
  "date": "June 12, 2016",
  "author": null,
  "excerpt": ""
},{
  "link": "/memories/wild-and-wonderful",
  "title": "",
  "date": "January 14, 2016",
  "author": null,
  "excerpt": "“the wild and wonderful mountains of west virginia”"
},{
  "link": "/memories/145789471683",
  "title": "",
  "date": "July 6, 2015",
  "author": null,
  "excerpt": "⛵️"
}]

// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p><br>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><div class="result-body"><a href="'+store[ref].link+'" class="post-title">'+store[ref].date+' - '+store[ref].author+'</a><p>'+store[ref].excerpt+'</p><br></div></div>';
      resultdiv.append(searchitem);
    }
  });
});
