# Casino War (card game)

## The Deal
The deck is divided evenly, with each player receiving 26 cards, dealt one at a time. 

## The Play
Each player turns up a card at the same time and the player with the higher card takes both cards and adds them to the bottom of their stack.

If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.

## How to Keep Score
The game ends when one player has won all the cards.

## Technologies Used:

- CSS
- Adobe Photoshop
- HTML
- JQuery
- Javascript

## Approach:
For this game I wanted to start with the aesthetics first because I figured it wouldn't take me long. I designed a custom casino game board and background image specifically for my casino war game. Before I started my javascript I thought, a deck of cards has 52 cards, four suits and 14 values when you add in the King, Queen, Jack and Ace. So the first thing I tried to figure out was how to make a deck of cards. I initially thought the best way to make my cards was to start off with a card object. Then I thought maybe I could start of with arrays. When it was all said and done I used both approached to hold my card attributes. Once my deck was finished I needed to shuffle my deck and then deal the cards. To accomplish this I used functions to make the cards, shuffle the cards and deal the cards. War wouldn't be War with out WAR being declared. I used another function to simulate war and that that left only one more function I needed to write and that was to check who won the game. Once my game was functional I added a little bit of CSS to make my game complete

## Challenges:
Positioning my cards, buttons and other elements of my board took a lot of trial and error. I was able to figure it out thanks to help from my instructors(Nando,Bruno). Another challenge was actually getting three cards to show once WAR was declared. For some reason once WAR was declared I only saw one card printed. I figured out that when I built the function to show the cards I gave it a position of center and I wanted to move the WAR cards 40px. Turns out you can't move something 40px center so I switched the position to left and BOOM, I finally could see the cards. That caused my cards to shift to the left of the page which caused another problem. I needed to find a way to get my cards back aligned in the center of my board. I simply gave my cards enough margin to move right back into place.

## Screen Shots

![](https://raw.githubusercontent.com/krock07/krock07.github.io/master/Casino_war_project/img/20652-%5BConverted%5D.jpg)

![](https://raw.githubusercontent.com/krock07/krock07.github.io/master/Casino_war_project/img/casino-War.jpg)
## Game Link
[Casino War](krock07.github.io/Casino_war_project/)








