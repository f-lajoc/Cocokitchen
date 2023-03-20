# Cokokitchen 
simple website with nav bar and hamburger menu, login page and forget password that generates OTP

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Video](#video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
    - [Troubles](#troubles)
  - [What I learned and used](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Website with home page, login, forget password and navigation bar.

### Video 

<img src="images/initial.png" width="300px">


### Links

- Solution URL: [https://github.com/f-lajoc/Cocokitchen] 
- Live Site URL: [https://f-lajoc.github.io/Cocokitchen/]

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- JavaScript
- Media query

### Troubles

I mostly had issues with css styling

- Font-awesome bars and times was not working, it took me days to debug that it was introduced in a version -[<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">] and the color was also blending with the background, so it doesn't work till i used the correct version and style it

- Creating hamburger menu was another headache, i hadn't done it before, so this was my first time creating it

-The forget password,i wanted to make it send the otp to email but after using my knowledge so far and research, i figured I'll need framework to do that, at first i created it as a form with submit button that shows the otp on click, but submit button refreshes the page in nanoseconds so the otp barely displayed, after brainstorming on possible ways to make it work, I'll also need framework to not make the submit button submit immediately... so i later resorted to this

- I had to separate my JavaScript for each page, cause in line 6 of forget password js file, the addEventListener, i keep getting -Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')- but it works so i left the debugging but it hundred the execution of the index js which i didn't realize for awhile, had me questioning my knowledge on JavaScript, before i resorted to sepaating them solving my problem

- Then some other minor issues like image on text, avatar images, that Google search solved

### What I learned and used

I understand z-index is to stack poditioned elements, through this project, i used it in the hamburger menu to cover the home page using JavaScript style.

From the knowledge I have now, i used some JavaScript I've learnt like

- variable declaration
- function
- querySelector
- eventListener
- iteration statement
- Math.floor and Math.random
- fetching DOM
- JavaScript style

### Continued development

I should learn some CSS part I'm yet to master side by side with JavaScript 
- Flex
- Grid
- Transition
- Animation
- Responsives
Hopefully bootstrap

### Useful resources
- [https://youtu.be/1iS0r238G4g] - helped with the hamburger menu
- [https://css-tricks.com] - Flexbox
- [https://www.google.com]- Random search when I thought of how i want the page to look like
- [https://w3schools.com] - Avatar image, Font awesome link and more

## Author

- Twitter - [@lajoc__](https://www.twitter.com/lajoc__)
- Instagram - [@lajoc_devs](https://www.instagram.com/lajoc_devs)
- Codepen - [@lajoc__](https://codepen.io/lajoc__/pen/bGvYWjR)

## Acknowledgments
- Ayobami - for giving me the task
