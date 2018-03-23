webpackJsonp([0xe7bf3a54589d],{460:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I spend a lot of my time talking and thinking about personalization. If you\nknow that data driven personalization and experimentation is something you\nshould be doing but don\'t really know where to start or how to get there, then\nyou\'re decidedly in the majority. Most organizations are doing a fairly good\njob of collecting a lot of data, a smaller number are excelling at understanding\nthe data. Very few are activating that data in real time.</p>\n<p>In this post I aim to lay out six steps that go from the very beginning to\nusing data like the best of them.</p>\n<h2 id="1-get-the-data"><a href="#1-get-the-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Get the Data</h2>\n<p>That sounds easy enough, right? You are probably collecting mountains of data\nalready in the form of web analytics, CRM, email marketing, POS, and more.\nThat\'s a great start, but there might be a missing step. If all of that data\nis living in separate silos, it\'s going to be quite difficult to gain the\nlevel of insight that you really need.</p>\n<p>There are a lot of great tools on the market that help solve this problem. The\n(somewhat) new <a href="https://support.google.com/analytics/answer/2790010?hl=en">Universal Analytics</a> from Google is a great place to start. There are also a myriad of Business\nIntelligence tools out there focussed on the problem from different angles\nsuch as <a href="http://looker.com">Looker</a>, <a href="http://domo.com">Domo</a> and\n<a href="http://gooddata.com">GoodData</a> just to name a few.</p>\n<p>A major consideration here is getting all the data into a consistent format\nthat makes sense when you query between these different sources. Depending\non your tool, you will either need to do that before pushing the data into\nthe system, or the tool may have data cleaning capabilities. If you have a\nlot of data to clean up, you might consider a tool like\n<a href="http://paxata.com">Paxata</a> or <a href="http://alteryx.com">Alteryx</a> to make that a\nlot easier.</p>\n<h2 id="2-understand-the-data"><a href="#2-understand-the-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Understand the Data</h2>\n<p>Now that you have data, what do you do with it? This is probably the hardest\nquestion of this whole post, and the one where organizations are most likely\nto go wrong. Having loads of data often leads people to find "truths" that\naren\'t there. Spurious correlations run rampant in business and in life, and\nif you don\'t take the time to dig deeper, you may be in trouble down the line.</p>\n<p>Truly understanding your data, and understanding it well, is going to take time.\nIf you are fortunate enough to have a full BI team in your organization, then\nyou can ask lots of deep questions. If you\'re new to this and are working\nwithin a smaller team, take your time and look at the data from a lot of\ndifferent directions. Slice, sort and pivot the data in as many ways you can\nthink of until you start to see the patterns like <a href="http://vignette4.wikia.nocookie.net/matrix/images/d/dc/Cypher_Talks_with_Neo.png/revision/latest?cb=20130215031028">Cypher reading the Matrix</a>.</p>\n<h2 id="3-run-some-experiments"><a href="#3-run-some-experiments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Run some experiments</h2>\n<p>Perhaps the very best way to gain knowledge about your visitors, or just about\nanything for that matter, is through scientific experimentation. On the web,\nwe typically call this an A/B test, but your mindset should be that of a\nscientist seeking to gain insight. This mindset has implications that not\nall practitioners of A/B testing tools will follow.</p>\n<p>Here\'s what I mean: You can run an experiment on your home page to see whether\n"Free" converts better than "Get it today" or an orange button beats a blue\nbutton. You can start that experiment, and wait until your tool says you have\na "winner" (more on this dangerous topic in a future blog post). Once you have\ndecided the blue beats the orange, you can implement that on your button and\nmove on. What have you just learned? That your visitors like the color blue?\nMaybe. It is very unlikely that you\'ve learned enough at this point if you\ndidn\'t start with a well formed hypothesis.</p>\n<p>Let\'s say you\'re interested in increasing clicks on a call to action (CTA) on\nyour home page. Rather than simply making changes, start by stating some\nassumptions and some possible changes that might effect users behavior. Is the\nbutton you want them to click on sufficiently visible? What else might be\ncompeting for its attention? If your visitor does notice the button, is it\nclearly communicating what will happen when they click on it? Do they have any\nreason to be nervous about what will happen? If you can answer these questions\nfirst, then you can move to changes that you could make that, if your hypothesis\nis correct, would improve your conversions.</p>\n<p>Now you\'re ready to run an experiment, but don\'t just stop at one. If you think\nthe button isn\'t visible enough, try changing its color in one experiment,\nmaking it bigger in another, and making something else <em>smaller</em> in another.\nIf you\'re right that people were missing the button before, then you should\nsee significant results with each one of these changes. If you don\'t see those\nresults, then you\'ve also learned a valuable lesson: It\'s not about visibility.\nYou can now safely move on to changing wording or other messaging that might\nbe creating friction in order to improve the results, and you may have even\nlearned some valuable lessons about your visitors themselves.</p>\n<h2 id="4-segment-and-target-your-audience"><a href="#4-segment-and-target-your-audience" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Segment and target your audience</h2>\n<p>Now I\'m going to let you in on a little secret: Not all your visitors are the\nsame. Of course, you already knew that. If you stop and think about it, there\nprobably aren\'t many things more obvious. But due to technical limitations of\nthe past and lack of resources in the present, we often think about our visitors\nas one big homogenous group and give them all the same content.</p>\n<p>Really great websites in the past have addressed this problem through great\ninformation architecture, allowing all the different visitors to quickly\nfind the content that they are looking for. Really great websites of the\npresent do that as well, but they go a step further by personalizing a web site\nto the needs and desires of the current visitor, in the present moment.</p>\n<p>More than just serving your visitor\'s needs though, segmentation allows you\nto dive deeper into understanding. So once you\'ve built a segment, say drilling\ndown to geography, past behavior or device type, go and run more experiments\nwithin that segment and refine the experience for each group.</p>\n<h2 id="5-repeat-steps-1-through-4"><a href="#5-repeat-steps-1-through-4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. Repeat steps 1 through 4</h2>\n<p>If you\'ve ever thought personalization or A/B testing were tools you installed\non your site, you were mistaken. Personalization is a mindset; a process; a\nway of life. Ok, maybe not a way of life .. but it\'s most definitely a process\nand one that takes time and iteration.</p>\n<p>Don\'t loose heart though, small experiments and small personalization can have\nhuge impact on your bottom line. Focus on learning, refining, and always\nmoving forward, and the return on investment of your time and resources will\nbe well worth it.</p>\n<h2 id="6-trusting-the-machine"><a href="#6-trusting-the-machine" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6. Trusting the machine</h2>\n<p>A lot of buzz in the personalization space centers around machine learning and\nautomated content recommendation techniques a la Facebook, Netflix and Google\nadvertising. I find this area of research to be incredibly exciting and in the\nright situations believe it can be incredibly powerful. I want to give a few\ncaveats here before the excitement runs away.</p>\n<p>First of all, machine learning carries with it a trade-off. On one hand, you\ncan have complex blended models that are incredibly accurate in predicting user\nbehavior. On the other hand, you can have predictions that are easy to\ninterpret. Sometimes you can have a nice blend, but the algorithms used by\nthe best prediction algorithms will teach you very little about the behavior\nof your users, or how to plan your next piece of content.</p>\n<p>Second, how many times have you been frustrated with the inaccuracy of a\nrecommendation from Netflix or Facebook? If you\'re anything like me, it\'s\nrather frequent. Now, not many organizations have a data team on par with\nthese, so if you expect that switching on a black box recommendation algorithm\nwill instantly give your site through the roof conversion rates, you will\nlikely have a bad day when the data comes in.</p>\n<p>That said, if you have a large amount of great content and a lot of different\nkinds of visitors, then a manual process of segmentation and targeting for\neach type of visitor can quickly become impractical. If that is the case,\nthen you should be looking at automated recommendation software, of which there\nare some really great options out there. Automated recommendations should always\nbe used in tandem with a solid practice of data collection, understanding and\nexperimentation though, so that you don\'t miss out on the evolutionary process\nthat your site can take described in the rest of this post.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusion</h2>\n<p>You can do great things with data. Whether you\'re just starting to think about\npersonalization or have been doing it for a decade, there are always ways of\nimproving. Focus on the process and the learnings that you can achieve from\nusing these tools. Ask good questions. Dive deep into the data. And above all,\nhave fun!</p>',timeToRead:6,excerpt:"I spend a lot of my time talking and thinking about personalization. If you\nknow that data driven personalization and experimentation is…",frontmatter:{title:"Six Degrees of Personalization",cover:"images/post-bg-02.jpg",date:"2015-05-09T12:00:00.000Z",category:"Tech",tags:["Personalization","Marketing"],author:"Dave Ingram"},fields:{slug:"/six-degrees-of-personalization"}},prev:{excerpt:'The other day my niece asked me what the steps are of the scientific method.\nI responded with "form a hypothesis…',frontmatter:{title:"Marketing Science",cover:"images/post-bg-03.jpg",date:"2015-07-31T09:00:00.000Z"},fields:{slug:"/marketing-science"}},next:{excerpt:"For anyone who has programmed, those two words--Hello World--mean an awful lot.\nThey mean taking the first steps…",frontmatter:{title:"Hello World",cover:"images/post-bg-06.jpg",date:"2015-04-05T12:00:00.000Z"},fields:{slug:"/hello-world"}},authors:{edges:[{node:{id:"dave",name:"Dave Ingram",image:"https://pbs.twimg.com/profile_images/849782721455034369/V8w-smRV_400x400.jpg",url:"http://daveingram.us/",bio:"Loves to learn, loves to solve problems."}}]}},pathContext:{slug:"/six-degrees-of-personalization",total:9,prev:"/marketing-science",next:"/hello-world"}}}});
//# sourceMappingURL=path---six-degrees-of-personalization-d89e49d17a7c24f6949c.js.map