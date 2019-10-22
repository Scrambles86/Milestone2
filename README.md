<h1>Flip Card Memory Game</h1>

<p>This memory game was created for my second milestone project, and the idea behind it is that it would work in conjunction with
the retro gaming website that I created for my initial project. With the memory game working as part of the site, I believe that a greater
user engagement can be created - be it reminding existing retro gamers of older characters, or engaging younger players with no prior
knowledge of retro gaming.</p>
<p>As acknowledged in my previous project, Games Revisited is very much a niche website. By adding more accessible content such as this meory game, it
is my hope that a broader audience can be engaged as well as the pre-existing audience.</p>
<h2>UX</h2>
<h3>User Stories</h3>
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
<h3>Wireframes</h3>
<li><a href="https://imgur.com/jTF7MO5" target-"_blank">Landing Page</a></li>
<li><a href="https://imgur.com/hZAeM13" target=_"blank">Landing Page - Mobile</a></li>
<li><a href="https://imgur.com/ZXD5vSZ" target=_"blank">Landing Page - Tablet</a></li>
<li><a href="https://imgur.com/ZKswXcg" target=_"blank">Full Game - Easy</a></li>
<li><a href="https://imgur.com/NAdVBpE" target=_"blank">Full Game Mobile - Easy</a></li>
<li><a href="https://imgur.com/LipehTv" target=_"blank">Full Game Tablet - Easy</a></li>
<li><a href="https://imgur.com/2MsUFOe" target=_"blank">Full Game - Medium/Hard</a></li>
<li><a href="https://imgur.com/aJwFNN7" target=_"blank">Full Game Tablet - Medium/Hard</a></li>
<li><a href="https://imgur.com/mjuCoOx" target=_"blank">Full Game Mobile - Medium/Hard</a></li>
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
<h3>Javascript Features</h3>
<ul>
<li>The global variables set cards and timer to zero. Additionally there is a pairTotal of 6, to let the game know that the maximum number of pairs that can be added into the array is 6.</li>
<li>Check for match looks in the memory game class for two cards that match the same data framework. If they match the function calls the trueMacth funtion, if they don't it calls the unFlip function. A timeout of 1 second is set to removed the locked class after 1 second. This is to stop the cards from being clicked too fast, potentially breaking the game.</li>
<li>The trueMatch function checks to see if the amount of matched pairs is equal to the final pair total. If it is, it calls the win-game modal from css and html.</li>
<li>The correct match function first listen for an onclick of the card, which calls the css flip class and adds a pair to the pair counter</li>
<li>The flipCard function adds one to the flip attempts in the game, adds the class of flip from css to the flipped card, and calls the board lock function. It holds the first card in place until a second card has been flipped, where it then calls the check for match function</li>
<li>The unflipCards function locks the board and removes the class of flip from cards that dont match. It does this in .8 of a second to keep the flow of the game quick.</li>
<li>The shuffle function was taken from Marina Ferriera's memory game on <a href="https://github.com/code-sketch/memory-game/" target="_blank">github</a>. The function shuffles the 12 images randomly and is wrapped in extra parenthesis, which calls the function at game start.</li>
<li>The difficulty select function first hides the main game and shows the hero image. It then uses a switch to call the chosen difficulty, hiding the hero image and showing the main game.</li>
<li>The set timer function sets a countdown to start on whatever time has been placed in the html. It has been called to not appear at all on easy mode, and to show the game over modal when the timer reaches zero.</li>
</ul>
<h2>Technologies Used</h2>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a></li>
<li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
<li><a href="https://www.javascript.com/" target="_blank">Javascript</a></li>
<li><a href="https://cdnjs.com/libraries/jquery/" target="_blank">JQuery</a></li>
<li><a href="https://fonts.google.com/" target="_blank">Google Fonts</a></li>

</ul>
<h2>Testing</h2>
<ul>
<li>The Revisitor has been tested on Mozilla Firefox and Google Chrome internet browsers, with no differences between the two, full functionality, and no issues with the design or Bootstrap. These tests took place on a 15" Macbook Pro in full screen.</li>
<li>Tests have taken place on modern ipads, iphones and Samsung devices. There were some issues with clipping on the iphone5, but only with title, the game remains fully functional.</li>
<li>The code has been tested in both an <a href="https://validator.w3.org/">HTML validator</a> and a <a href="https://jigsaw.w3.org/css-validator/">CSS Validator</a>, returning no major issues.</li>
<li>All JS and JQuery functions work in all browsers and on all devices</li>
</ul>
<h2>Deployment</h2>
<p>To deploy The Revisitor from <a href="https://scrambles86.github.io/Milestone2/" target="_blank">Github</a>.</p>
<ul>
<li>Login to Github</li>
<li>Select the 'Repositories' tab</li>
<li>Select the repository for 'Milestone2'</li>
<li>From Settings, scroll to find 'github pages'</li>
<li>Under Source, find the drop down menu</li>
<li>From the drop down menu, select 'Master Branch'</li>
<li>Once the page has refreshed, scroll back down to where you were to find the newly created url</li>
</ul>
<p>To run The Revisitor locally</p>
<ul>
<li>In the same Github repo, click the green button marked 'Clone or download'</li>
<li>Select the image 'Copy To Clipboard'</li>
<li>Open a Git Terminal</li>
<li>Type in your directory location in the bash</li>
<li>Type in 'git clone' and paste in the copied url</li>
</ul>
<p>The deployment version of the site can be found <a href="https://github.com/Scrambles86/Milestone2" target="_blank">here</a>.</p>
<p>There are no difference between the development version and the deployed version, and there are no special requirements for running the code locally.</p>
<h2>Credits</h2>
<h3>Acknowledgements</h3>
<p>All images on the site were taken from pexels and Google Images, and are copyright and intellectual property of Nintendo. This game is intended for education purposes only.</p>
<p>The shuffle function and the data-framework model were designed by <a href="https://marina-ferreira.github.io/" target="_blank">Marina Ferriera</a></p>
<p>Huge thank you to Simen Daehlin for all his help and continued support. I found learning JS to be a particular struggle, and his support has never waivered, and he is always positve in his feedback.</p>
<p>Equally big thank you to my friends Dave Lovejoy, Olivia Kane and Ed Smith, all of whom have had a big part in guiding me through this project, keeping me focused and keeping me sane.</p>





