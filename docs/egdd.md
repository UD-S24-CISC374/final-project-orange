# Cross the Pond

## Elevator Pitch

This game is about a frog who is separated from its mother and is trying to find its way back to her. Frog will cross a pond with lily pads with numbers on them and will try to find the smallest possible path if all lilypad numbers are added up. There will be different levels with increasing difficulty.

## Influences (Brief)

-   Duck Life:

    -   Medium: Game
    -   Explanation: This is more of an artistic influence. That game is about training a duck to compete in races. The duck is cute and does pass more and more hard levels which is similar to this game

-   Animal Planet:
    -   Medium: Television
    -   Explanation: This often shows baby animals being separated from their parents. This game wants to adopt the concept of this to give the user a sense of urgency and will to complete the game.

## Core Gameplay Mechanics (Brief)

_Give a very high-level description of any core gameplay mechanics_

-   Select a lilypad to move the frog to it by clicking the mouse.
-   Frog must move to the other side of the pond with the shortest path to complete a level.
-   Child and mother frog will celebrate if united through the shortest path.
-   Player frog will have to restart level if not the shortest path is taken.
-   After completing all the levels, you will see a thank you from the mom for reuniting her with the child frog.

# Learning Aspects

Players are learning about taking the shortest path
This involves problem-solving and critical thinking
Can help players develop these skills in an engaging and interactive way
By learning this concept in a game, players can better understand its importance in the real world

## Learning Domains

Dijkstra’s Algorithm

## Target Audiences

Introductory Computer Science Students

## Target Contexts

This would be assigned as practice after learning about Dijkstra’s algorithm.
There will be some ribbet (frog noise) and splashing audio, so should be used outside of class.

## Learning Objectives

_Remember, Learning Objectives are NOT simply topics. They are statements of observable behavior that a learner can do after the learning experience. You cannot observe someone "understanding" or "knowing" something._

-   By the end of the game, players will be able to correctly traverse a graph to find the shortest possible path.
-   By the end of the game, players will be able to determine if there is no shortest path, i.e. a tie in shortest path.

## Prerequisite Knowledge

_What do they need to know prior to trying this game?_

-   Prior to the game, players need to be able to define Dijkstra’s algorithm.
-   Prior to the game, players need to be able to add basic numbers.
-   Prior to the game, players need to be able to correctly know when to use Dijkstra’s algorithm.

## Assessment Measures

Students will be given a pre and post test with multiple questions of varying difficulty for using Dijkstra’s algorithm.

# What sets this project apart?

_Give some reasons why this game is not like every other game out there. Whether the learning objective is unique, the gameplay mechanics are new, or what. You should persuade the reader that your game is novel and worthy of development. Consider arguments that would be persuasive to a Venture Capitalist, Teacher, or Researcher. These might be focused on learning needs, too._

-   This game adds a fun spin to learning Dijkstra’s algorithm which will make students want to use it.
-   This game will make it hard to get the right answer by guessing, so it is better than just practicing multiple choice questions
-   This game replicates graph traversal in an interesting and engaging way with rewards if done correctly.

# Player Interaction Patterns and Modes

Navigation: Players will navigate the frog through the pond
Selection: Players will need to select which lily pad the frog should hop to next
Decision-Making: Players will need to make strategic decisions about which path to take making sure they are taking the shortest path

## Player Interaction Pattern

This game is for one person who will click the mouse or touch their screen.

## Player Modes

_Your game has one or more player modes. Describe each discrete mode, considering things like menus too. Generally describe the transitions between modes too._

-   Single Player: You will advance through levels until you reach the end of the game.

# Gameplay Objectives

-   Reunite frog with its mother:
    -   Description: When the frog is united with its mother it will be happy.
-   Get to the next level:
    -   Description: Select the shortest path in order to cross the pond
-   Pass all levels and complete game:
    -   Description: Get through all the levels to complete the game

# Procedures/Actions

You can click connecting lilypads to select them and create a path.

# Rules

You can restart levels with 5 tries on each level
If you don’t select the shortest path, the frog will cry and lose 1 try.
If you use up all 5 tries, you will have to restart the game.
The correct answer will never be shown
There is no time constraint

# Objects/Entities

There is a frog, a pong, lily pads, a path.

## Core Gameplay Mechanics (Detailed)

-   Navigation: Navigation involves guiding the frog through the pond by selecting lily pads to hop onto. Players control the frog's movement by selecting a lilypad to move the frog to it by clicking the mouse. Players must strategize their path through the pond to reach the mother frog while minimizing the total sum of numbers on the lily pads they hop on. This mechanic challenges players to think strategically about their route and make decisions that will lead them to go to the next level.

-   Decision-making: Requiring players to look at the numbers on each lily pad and choose the path with the lowest total sum. As players progress through levels, they will have to make harder decisions with more challenges because the numbers will be higher on the lily pads,. Players must carefully consider their options and consider the consequences of their choices to find the shortest route. This encourages critical thinking and problem-solving skills as players navigate through the pond and make strategic decisions to progress towards the mother frog.

-   Feedback: Giving feedback is really important to the player experience in the frog game. We will be providing immediate feedback through visual, audio, and animation features. When players select an incorrect path, the frog responds with visual cues such as a crying face and 1 less try and a sad sound effect. When players choose the correct path, the frog displays a happy face and progresses towards the mother frog with a happy sound effect. This system helps players understand the consequences of their actions and learn from their mistakes.

## Feedback

_Explicitly describe what visual/audio/animation indicators there are that give players feedback on their progress towards their gameplay objectives (and ideally the learning objectives)._

_Describe what longer-term feedback you detect and give that guides the player in their learning and lets them know how they are doing in regards to the learning objectives._

Tries Remaining: A counter displays the number of tries remaining, giving players visual feedback on how many attempts they have left to find the shortest path.
Level Completion: When the player completes a level, the mother frog has a happy face to show that the player can move on to the next level
When you don’t select the shortest path the frog will cry and you will lose one try. When the frog cries the player will know that they have selected the wrong path. A sad sound will also play
If the frog is reunited with their mother a happy face will show on the screen with a happy sound

# Story and Gameplay

## Presentation of Rules

_Briefly describe how the player will learn the gameplay mechanics. Avoid using walls of text, since people will not read them. Think instead of natural ways of teaching mechanics iteratively and slowly._

Before the player starts the game there will be a rules button that the player can click on and a screen will show up with short simple rules

However if the player doesn’t click that the player will learn by visual cues and prompts. The player will quickly understand that if they do not select the shortest path the mother and the frog will be sad and have sad faces, indicating to the player that they made an incorrect choice. The immediate visual feedback helps players understand the importance of selecting the shortest path. The game will also provide audio feedback when the player advances to the next level or loses the level. This audio reminds the player of the visual feedback and emphasizes to the player that their choice was not correct. By seeing the reactions of the frogs and paying attention to the audio and visual cues, players will develop an understanding of the gameplay rules and mechanics.

## Presentation of Content

_Briefly describe how the player will be taught the core material they are meant to learn. Avoid using walls of text, since people will not read them. Think instead of natural ways of teaching material iteratively and slowly._

The player will first start with easy levels where they can get a hang of the game. We will have a button describing the objective of the game to allow the player to understand why having the shortest path is really important. As players navigate the pond and make decisions, the game provides immediate feedback on the consequences of their actions. If players don’t select the shortest path, the frog will cry and it will allow the player to learn they aren’t playing the game right. This gradual increase in levels allows players to build upon their knowledge and skills. Players learn through trial and error. Players get 5 tries on each level so they will always have a second chance to correct their mistakes.

## Story (Brief) & ## Storyboarding

_The Summary or TL;DR version of below_

_Go into as much detail as needs be to visually convey the Dynamics of your game. Be detailed. Create storyboards and freeze frame images that concisely capture important key elements of your game. You are strongly recommended to sketch pictures on paper and embed them here. Be sure make it clear how previously-described mechanics come through in the dynamics._

The frog's happy expression and the highlighted lily pad provide visual cues indicating the correct path. The player faces a pond with lily pads numbered 3, 6, 2, and 5. By selecting lily pads with lower numbers, the player can minimize the total sum and progress towards winning the level. When the player selects an incorrect path, the frog displays a crying face and with a sad sound effect. The crying effect and the sound effect signal to the player that they need to rethink their strategy. Players learn through trial and error, experimenting with different paths and strategies to find the shortest route. Each attempt provides valuable feedback, allowing players to change their approach and improve their performance.

![assets/BasicGameOutline.png](Basic Game Design)

# Assets Needed

## Aesthetics

_Give a sense of the aesthetics of your game, the spirit and atmosphere. Use descriptive, evocative words that can help the reader understand the emotional response of your game._

The game's visuals will have vibrant colors, a pond with lots of plants like colorful flowers and lily pads. It will be a sunny game with clouds at the top. Even if the player loses they will be encouraged to try to play again

## Graphical

-   Characters List
    -   Frog (Player): Needs to have a happy face when they win, needs to have a sad face when they lose
    -   Mother Frog: Needs to have a happy face when they are reuinted, needs to have a sad face when they are far apart
-   Textures: N/A
-   Environment Art/Textures:
    -   Background: The background should be a sunny day with clouds and greenery

## Audio

_Game region/phase/time are ways of designating a particularly important place in the game._

-   Music List (Ambient sound)
    -   A calming sound game that represents a pond on a sunny day with birds chirping https://www.youtube.com/watch?v=9f-ZO_G2pBQ&ab_channel=OpticStream360

_Game Interactions are things that trigger SFX, like character movement, hitting a spiky enemy, collecting a coin._

-   Sound List (SFX)
    -   _Win _: https://www.youtube.com/watch?v=oKSQF18keVU&ab_channel=KJJourney
    -   _Lose_: https://www.youtube.com/watch?v=_asNhzXq72w&ab_channel=GamingSoundFX

# Metadata

-   Template created by Austin Cory Bart <acbart@udel.edu>, Mark Sheriff, Alec Markarian, and Benjamin Stanley.
-   Version 0.0.3
