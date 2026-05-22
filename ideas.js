/* =========================================================
   IDEAS — your data lives here. This is the only file you edit.

   HOW TO ADD AN IDEA
   ------------------
   Copy the block below, paste it into the IDEAS array, fill it in.

     {
       title:    "The name of the idea",
       claim:    "One sentence that states it. The index should read on its own.",
       category: "Film & Story",          // must match one of CATEGORIES below
       date:     "2026-05-20",            // YYYY-MM-DD — shown under the note, also sorts newest first
       body:     `Write the note here, in your own voice.

       Leave a blank line between paragraphs and they render as separate paragraphs.
       Keep it short. The point first.`
     },

   That's it. Save the file, refresh the page. Newest ideas sort to the top of
   each category. To remove the example, delete its block. To add a category,
   add its name to CATEGORIES (order here = order on the page).
   ========================================================= */

const CATEGORIES = [
  "Product, Marketing & Growth",
  "Film, Storytelling, Creative",
  "Learning",
  "Work"
];

const IDEAS = [

  /* ---- EXAMPLE — delete this block once you've written your own ---- */
  {
    title: "Who is in Charge?",
    category: "Work",
    date: "2026-05-20",
    body: `
    In the weeks leading up to shooting "I Fall to Pieces", my newly-appointed cinematographer was a staunch advocate of us shooting the film in ultra-widescreen (aspect ratio 2.39:1). I preferred widescreen (1.85:1).
    Weeks before the shoot turned into days before the shoot, and while I had explained that the epic, panoramic ultra-wide was ill-fitting for a domestic drama, he did not budge.
    
    In 1966, on the set of Mike Nichols' Who's Afraid of Virginia Woolf?, Nichols, the first-time film director, and producer-writer Ernest Lehman disagreed about whether or not Richard Burton's character should wear glasses. Nichols: for. Lehman: against.
    Lehman asked "Well, what happens if we get very close to shooting and we still disagree? And you think he should wear glasses and I don't?"
    
    And Nichols said, "Well, I'll kill you."
    
    I told this story to my cinematographer and he never mentioned ultra-wide again.`
  },

   {
    title: "Kill Your Darlings",
    category: "Film, Storytelling, Creative",
    date: "2026-05-20",
    body: `David Mamet: "A good writer gets better only by learning to cut, to remove the ornamental, the descriptive, the narrative, and especially the deeply felt and meaningful... The story remains."
    
    Ernest Hemingway: "Write the story, take out all the good lines, and see if it still works."
    
    Elmore Leonard: "I leave out the parts that readers skip."
    
    Truman Capote: "I believe more in the scissors than I do in the pencil."`
  },

   
  {
    title: "(The) Simpsons Paradox",
    category: "Learning",
    date: "2026-05-21",
    body: `Simpson's Paradox is named after Edward Simpson, a British statistician who formalized it in 1951. Simpson observed that a trend can appear in every subgroup of given data and vanish or reverse when those groups are combined. 
    
    The canonical case is Berkeley admissions in 1973. Women were admitted at lower overall rates than men. But when researchers broke the data down by department, women were in fact admitted at equal or higher rates in almost every one.
    The paradox arose because women applied disproportionately to the competitive departments - the ones with overall lower acceptance rates for everyone. The aggregate had obscured the conclusions drawn from the subgroups.
    
    "The Simpsons" is an animated American sitcom that started in 1989, is still running as of this writing, is the reason I clicked on Simpson's Paradox earlier this evening, and is a show that's grown a reputation of supposedly being able to predict the future.
    From rather low-hanging fruit (FIFA corruption in 2014, the Trump presidency) to some genuinely impressive (NSA surveillance, FaceTime, Bengt R. Holstrom winning the Nobel Prize).
    It is an uncanny list, albeit with a large denominator.
    
    Across all 800+ episodes, with an average of 8.5 to 12 jokes per minute, the show has produced something in the range of 75,000 to 85,000 discrete jokes. Of those, a few dozen have landed close enough to reality to get screenshotted and shared. 
    That is a hit rate of ~0.1%, indistinguishable from chance, coming from writers' rooms throwing enough at the wall that some of it eventually sticks to something that hasn't happened yet, but probably will.
    
    Simpson's Paradox is about what disappears when you aggregate: the truth inside the subgroups is made opaque by the combined picture. "The Simpsons" Paradox is the opposite failure: what disappears when you refuse to aggregate, or rather the handful of bullseyes that wash out the 80,000 misses.
    
    We are, as it turns out, inconsistent aggregators. We zoom out when zooming in would help, and zoom in when zooming out would. The Berkeley data looks discriminatory in the aggregate and isn't. "The Simpsons" looks prophetic in the highlight reel and, in fact, isn't.
    
    ("The Simpsons" is my favorite show, by the way)`
  }

   

];
