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
    title: "placeholder text",
    category: "Learning",
    date: "2026-05-20",
    body: `placeholder text`
  }

   

];
