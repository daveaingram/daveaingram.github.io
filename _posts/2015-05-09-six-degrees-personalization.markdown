---
layout:     post
title:      "Six Degrees of Personalization"
subtitle:   "One step at a time"
date:       2015-05-09 12:00:00
author:     "Dave Ingram"
header-img: "img/post-bg-02.jpg"
---

I spend a lot of my time talking and thinking about personalization. If you
know that data driven personalization and experimentation is something you
should be doing but don't really know where to start or how to get there, then
you're decidedly in the majority. Most organizations are doing a fairly good
job of collecting a lot of data, a smaller number are excelling at understanding
the data. Very few are activating that data in real time.

In this post I aim to lay out six steps that go from the very beginning to
using data like the best of them.

## 1. Get the Data
That sounds easy enough, right? You are probably collecting mountains of data
already in the form of web analytics, CRM, email marketing, POS, and more.
That's a great start, but there might be a missing step. If all of that data
is living in separate silos, it's going to be quite difficult to gain the
level of insight that you really need.

There are a lot of great tools on the market that help solve this problem. The
(somewhat) new [Universal Analytics](https://support.google.com/analytics/answer/2790010?hl=en) from Google is a great place to start. There are also a myriad of Business
Intelligence tools out there focussed on the problem from different angles
such as [Looker](http://looker.com), [Domo](http://domo.com) and
[GoodData](http://gooddata.com) just to name a few.

A major consideration here is getting all the data into a consistent format
that makes sense when you query between these different sources. Depending
on your tool, you will either need to do that before pushing the data into
the system, or the tool may have data cleaning capabilities. If you have a
lot of data to clean up, you might consider a tool like
[Paxata](http://paxata.com) or [Alteryx](http://alteryx.com) to make that a
lot easier.

## 2. Understand the Data
Now that you have data, what do you do with it? This is probably the hardest
question of this whole post, and the one where organizations are most likely
to go wrong. Having loads of data often leads people to find "truths" that
aren't there. Spurious correlations run rampant in business and in life, and
if you don't take the time to dig deeper, you may be in trouble down the line.

Truly understanding your data, and understanding it well, is going to take time.
If you are fortunate enough to have a full BI team in your organization, then
you can ask lots of deep questions. If you're new to this and are working
within a smaller team, take your time and look at the data from a lot of
different directions. Slice, sort and pivot the data in as many ways you can
think of until you start to see the patterns like [Cypher reading the Matrix](http://vignette4.wikia.nocookie.net/matrix/images/d/dc/Cypher_Talks_with_Neo.png/revision/latest?cb=20130215031028).

## 3. Run some experiments
Perhaps the very best way to gain knowledge about your visitors, or just about
anything for that matter, is through scientific experimentation. On the web,
we typically call this an A/B test, but your mindset should be that of a
scientist seeking to gain insight. This mindset has implications that not
all practitioners of A/B testing tools will follow.

Here's what I mean: You can run an experiment on your home page to see whether
"Free" converts better than "Get it today" or an orange button beats a blue
button. You can start that experiment, and wait until your tool says you have
a "winner" (more on this dangerous topic in a future blog post). Once you have
decided the blue beats the orange, you can implement that on your button and
move on. What have you just learned? That your visitors like the color blue?
Maybe. It is very unlikely that you've learned enough at this point if you
didn't start with a well formed hypothesis.

Let's say you're interested in increasing clicks on a call to action (CTA) on
your home page. Rather than simply making changes, start by stating some
assumptions and some possible changes that might effect users behavior. Is the
button you want them to click on sufficiently visible? What else might be
competing for its attention? If your visitor does notice the button, is it
clearly communicating what will happen when they click on it? Do they have any
reason to be nervous about what will happen? If you can answer these questions
first, then you can move to changes that you could make that, if your hypothesis
is correct, would improve your conversions.

Now you're ready to run an experiment, but don't just stop at one. If you think
the button isn't visible enough, try changing its color in one experiment,
making it bigger in another, and making something else _smaller_ in another.
If you're right that people were missing the button before, then you should
see significant results with each one of these changes. If you don't see those
results, then you've also learned a valuable lesson: It's not about visibility.
You can now safely move on to changing wording or other messaging that might
be creating friction in order to improve the results, and you may have even
learned some valuable lessons about your visitors themselves.

## 4. Segment and target your audience
Now I'm going to let you in on a little secret: Not all your visitors are the
same. Of course, you already knew that. If you stop and think about it, there
probably aren't many things more obvious. But due to technical limitations of
the past and lack of resources in the present, we often think about our visitors
as one big homogenous group and give them all the same content.

Really great websites in the past have addressed this problem through great
information architecture, allowing all the different visitors to quickly
find the content that they are looking for. Really great websites of the
present do that as well, but they go a step further by personalizing a web site
to the needs and desires of the current visitor, in the present moment.

More than just serving your visitor's needs though, segmentation allows you
to dive deeper into understanding. So once you've built a segment, say drilling
down to geography, past behavior or device type, go and run more experiments
within that segment and refine the experience for each group.

## 5. Repeat steps 1 through 4
If you've ever thought personalization or A/B testing were tools you installed
on your site, you were mistaken. Personalization is a mindset; a process; a
way of life. Ok, maybe not a way of life .. but it's most definitely a process
and one that takes time and iteration.

Don't loose heart though, small experiments and small personalization can have
huge impact on your bottom line. Focus on learning, refining, and always
moving forward, and the return on investment of your time and resources will
be well worth it.

## 6. Trusting the machine
A lot of buzz in the personalization space centers around machine learning and
automated content recommendation techniques a la Facebook, Netflix and Google
advertising. I find this area of research to be incredibly exciting and in the
right situations believe it can be incredibly powerful. I want to give a few
caveats here before the excitement runs away.

First of all, machine learning carries with it a trade-off. On one hand, you
can have complex blended models that are incredibly accurate in predicting user
behavior. On the other hand, you can have predictions that are easy to
interpret. Sometimes you can have a nice blend, but the algorithms used by
the best prediction algorithms will teach you very little about the behavior
of your users, or how to plan your next piece of content.

Second, how many times have you been frustrated with the inaccuracy of a
recommendation from Netflix or Facebook? If you're anything like me, it's
rather frequent. Now, not many organizations have a data team on par with
these, so if you expect that switching on a black box recommendation algorithm
will instantly give your site through the roof conversion rates, you will
likely have a bad day when the data comes in.

That said, if you have a large amount of great content and a lot of different
kinds of visitors, then a manual process of segmentation and targeting for
each type of visitor can quickly become impractical. If that is the case,
then you should be looking at automated recommendation software, of which there
are some really great options out there. Automated recommendations should always
be used in tandem with a solid practice of data collection, understanding and
experimentation though, so that you don't miss out on the evolutionary process
that your site can take described in the rest of this post.

## Conclusion
You can do great things with data. Whether you're just starting to think about
personalization or have been doing it for a decade, there are always ways of
improving. Focus on the process and the learnings that you can achieve from
using these tools. Ask good questions. Dive deep into the data. And above all,
have fun!
