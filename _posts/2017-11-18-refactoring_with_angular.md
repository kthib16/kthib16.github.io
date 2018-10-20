---
layout: post
title: Refactoring with AngularJS
---

When I originally designed BlocJams, I did so using a number of different languages and frameworks. At first, I learned JavaScript to understand the basics of DOM Manipulation and then learned JQuery to flesh out BlocJams. But then I learned yet another framework -- AngularJS -- and reworked my original code inside that framework.

I found Angular to be extremely easy to use and navigate, and while I'm working on projects by myself at the moment I can see how it would make collaboration super easy. If "don't repeat yourself" is a key motto of web development, then Angular is a simple way to put this motto into practice.

Because of service injectors, you can write and use code only when you need it. If that service is needed again, it's easy enough to inject the service inside a different controller which will then have access to the original code without having to write it again or set it in the root scope.

At the same time, Angular's two-way data binding makes it easy to account for what users are doing on the website and incorporate that into your code.

Going forward I can see how useful Angular is to know. 
