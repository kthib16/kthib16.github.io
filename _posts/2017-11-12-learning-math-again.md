---
layout: post
title: Learning Math Again
thumbnail-path: "img/typing.gif"
---

I used to be a pretty decent student. I got A's in all of my classes and Math was no exception. But then I went to college and became a liberal arts major and out went any math I had picked up in my 22 years of life. Now that I'm learning JavaScript, I'm realizing that I'm using parts of my brain that I haven't used in a long, long time.

&nbsp;

{:.center}
![]({{ site.baseurl }}/img/terminal-typing.gif)

&nbsp;

When I worked on the music playing application BlocJams, I created a sound bar that continuously kept track of a songs progress as the song played. This involved a lot of math in terms of figuring out where the physical player bar was *on* the page, but then I had to figure out a ton of different variables to update this location as the song played.

{% highlight js %}
scope.trackThumb = function() {
  $document.bind('mousemove.thumb', function(event) {
      var percent = calculatePercent(seekBar, event);
      scope.$apply(function() {
          scope.value = percent * scope.max;
          notifyOnChange(scope.value);
      });
  });
{% endhighlight %}

And it wasn't just about learning math all over again. Part of the most difficult part about designing websites is anticipating what the user is doing and how to track that. With BlocJams, I had to update my code based on where the user dragged the seek bar and update the playback of the song to reflect that. This took a lot of logic that I wasn't used to and I'm sure as I go, this will only get harder (I'm practicing with Codewars to try and get back into this type of thinking).

This has probably been the trickiest part of learning different programming languages. For everything else, it's simple enough to Google what exactly array.splice() does, but it's not exactly easy to find the best way to plan for different scenarios. For that it's going to take a lot of trial and error.

But that's much of the fun of programming so far.
