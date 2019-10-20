<h1>Flip Card Memory Game</h1>

<p>This memory game was created for my second milestone project, and the idea behind it is that it would work in conjunction with
the retro gaming website that I created for my initial project. With the memory game working as part of the site, I believe that a greater
user engagement can be created - be it reminding existing retro gamers of older characters, or engaging younger players with no prior
knowledge of retro gaming.</p>
<p>As acknowledged in my previous project, Games Revisited is very much a niche website. By adding more accessible content such as this meory game, it
is my hope that a broader audience can be engaged as well as the pre-existing audience.</p>
<h2>UX</h2>
<p>The main goal of creating this memory game was to add further connectivity between users on the retro gaming site. The characters
in the current version of the game are all easily recognisable Nintendo characters, as a way to hopefully appeal to younger users - perhaps
the children of the typical visitor of a retro gaming site. My hope is that this would create greater visibility for the original site
by adding a sort of gateway for more casual or younger gaming fans.</p>
<ul>
<li>I am a fan of retro gaming, who would like to play a fun game with my kids to show them gaming characters from my past, perhaps getting them interested in older games.</li>
<li>I am a fan of retro gaming who would like to discover games i haven’t played before in a fun and casual manner.</li>
<li>I’m a big fan of gaming, but am unfamiliar with older games, and I’d like to find out more.</li>
<li>I’m a frequent visitor of Games Revisited, and would like to see a little more fun and interactivity implemented in the site.</li>
<li>I would like to play a fun and interactive game to help me improve my memory</li>
</ul>
<h2>Features</h2>
<h3>Existing Features</h3>
<p>The Revisitor features a hero image to act as a landing page. On this page the user will find the game title,
three buttons they can click to select their difficulty, and a div containing the rules of the game, and the difference in each version.
In my original wireframes, a form was included for the user to enter their username. This was removed, as ultimately there didn't seem to be any real reason
in having it in the game without a scoring system in place.</p>
<p>In the main game, the user will find a title at the top of the screen and the game grid itself - including cards with flip functionality provided
by a js function calling for a CSS class on click. Below the game grid itself are three small alerts created with Bootstrap. One contains the number
of clicks of the board, the centre contains a restart button to return the user to the front page, and the rightmost alert displays the current
chosen difficulty. Depending on the difficulty, the user will also find a countdown timer inbetween the title and the game grid - 60 seconds for 
medium difficulty and 30 seconds for hard difficulty.</p>
<p>Regardless of the outcome of the game, the user will be greeted by a modal. The modal is called either when the player has run out of time,
of when the player has succesfully completed the game. The message in the modal is different dependent on the outcome. Closing the modal resets the game backto the title page.</p>
<p>From a design perspective, the game looks quite different from the original wireframes. The original wireframes called for a right centred
grid, with a timer on the left. On trialling this using VS code, the screen became very cluttered and often caused the grid itself to break.
As a results, the timer was moved about the grid. Additionally, a restart button was added to take the user back to the start page, as well as a flip 
counter as a primitive way of keeping a score. This was added with the potential of being used with a user name to create a high score grid as
a future additional feature.</p>
<h3>Features Left To Implement</h3>
<ul>
<li>Username : Left out of this version of the project, in future I would like to implement a scoreboard that can save user scores in local storage</li>
<li>Hyperlinks : I'd like to fully integrate this project with the original Games Revisited project. As well as a live version of the site, I think it would be beneficial to add a version of this game in the actual GR site</li>
<li>Super Hard Mode : I'd like to make a version of the game with more images in the grid, but was unable to do so as it created too much clutter on mobile devices.</li>
<li>Retro Mode : I had the idea to make a version of the game that including lesser known retro game characters. This could be used in conjunction with the GR site, and have the images hyperlinked to take the user to the specific game page for that character.</li>
</ul>




