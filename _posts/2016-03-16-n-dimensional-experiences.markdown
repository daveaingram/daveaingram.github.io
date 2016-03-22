---
layout:     post
title:      "n-Dimensional Experiences"
subtitle:   "Why Personalization is hard, and what to do about it"
date:       2016-03-22 09:00:00
author:     "Dave Ingram"
header-img: "img/listen-wikipedia.png"
---

My motto of late has become "personalization is hard." This tends to raise eyebrows coming from the product manager of a personalization product, especially when I'm in meetings with prospects or customers. It's true though. Personalization is hard. But the statement isn't meant to discourage, and I remain a strong advocate that personalized experiences are the way of the future. Albert Einstein is quoted as saying:

> If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.

Following that logic, let's spend a few minutes thinking about why personalization is hard.

## The Limits of a 3D World
We live our physical lives in 3 dimensions. Not a profound statement, but it leads to some fairly strong limitations. We often look at 2-dimensional data in the form of line charts or bar graphs. Creative individuals have devised creative ways to move past this limitation by showing more dimensions in color, shape and size, and by using software to render 3D models. Even animation and [sound](http://listen.hatnote.com/) (including pitch, timbre and duration) can be used. At best, this gets us to about 10 dimensions, but then the limits of human focus and short term memory step in to block us from even getting this far.

Building personalized digital experiences is problematic, precisely because it brings us into a high dimensional space which becomes very hard to visualize and understand. Let's pick just a few of these:
- Language
- Region
- Device
- Age
- Gender
- Past Purchase
- Time of Day
- Day of Week
- Season
- Last Few Page Views
- Current Mood

Uh oh, that's already 11. So even with the most sophisticated data visualizations we can imagine, we're already beyond the scope of holding all the possibilities in mind. Fortunately, we are not without options. The remainder of this post will explore a few of the ways we can handle this problem.

## Black Box Algorithms
Mathematicians and Data Scientists deal with extremely high dimensional data sets all the time. Here we're discussing more than 10, which is already hard, but with the right algorithms and the speed of computers, we can run computations with literally millions of dimensions.

These algorithms can be extremely effective in making predictions about the future, but they can also be deceptive and lead to a variety of troubles. To take an extreme example, one of the major factors of the financial crisis of 2008 was [software working in a very high dimensional space](http://www.theguardian.com/technology/2008/oct/16/computing-software-financial-crisis), to the point where the humans building and using the software didn't discover the errors until it was too late.

## Dimensionality Reduction
In order to understand what happens inside of the black boxes described above, a range of techniques exist to reduce the number of dimensions used in calculations and to discover the most important or influential dimensions in any data set. Some techniques, such as [Principal Component Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) do very little to aid human intuition, and are used much more for simplifying computation. On the other hand, many machine learning and statistical techniques such as [Linear Regression](https://en.wikipedia.org/wiki/Linear_regression), can produce--as a part of their output--information which tells us which variables used in a learned model were the most relevant in predicting whatever outcome we were trying to predict.

These latter techniques, in the hands of a skilled Data Scientist or used properly in the right software can inform us which of the hundreds of dimensions that _could_ be used in Personalization really _should_ be used.

## Higher Dimensional UIs
For Personalization software in particular, understanding what happens on a website or other experience in all of these different dimensions is a big challenge. I can easily toggle my website between its different languages, or even just have different sites for different languages. This is easy enough. But if I segment my visitors across several dimensions as well, I need preview and management capabilities in order to understand what can be happening at any given time in any area.

In the near future I'll be posting a lot more about the new User Interface coming out with the latest version of [Acquia Lift](www.acquia.com/Acquia-Lift). While of course technically still a 2D UI, we've used a mental model of allowing the user to zoom in, zoom out, and swipe side to side to work with a much larger canvas. A marketer can select any area that contains personalization, "zoom in", and switch between the different variations. In the next moment, the user can "impersonate" a site visitor of a particular segment and see all of those personalized areas update with a preview of what will be shown by the decision engine. While not quite the UI used by Tom Cruise in Minority Report, it's probably the closest thing that I've ever used to that model. Anyway, stay tuned for updates on that front.

## Conclusion
Regardless of the techniques or software used to help manage it, the reality is that the digital experiences we create today are no longer 2D. This is not a solved problem, but it's a fun one to work on, and I look forward to seeing all of the different ways that organizations approach it.
