---
title: AI Safety FAQs
published: true
---

Disclaimer: This represents nothing more and nothing less than what a single person thinks about a complicated topic.

# What is AI Safety?

To help frame this question, we’re going to first answer the dual question of "what is Cybersecurity?"

As a concept, Cybersecurity is the idea that questions like "is this secure?" can meaningfully be asked of computing systems, where "secure" roughly means "is difficult for unauthorized individuals to get access to". As a problem, Cybersecurity is the set of problems one runs into when trying to design and build secure computing systems. As a field, Cybersecurity is a group of people trying to solve the aforementioned set of problems in robust ways.

As a concept, AI Safety is the idea that questions like "is this safe?" can meaningfully be asked of AI Systems, where "safe" roughly means "does what it's supposed to do". As a problem, AI Safety is the set of problems one runs into when trying to design and build AI systems that do what they're supposed to do. As a field, AI Safety is a group of people trying to solve the aforementioned set of problems in robust ways.

The reason we have a separate field of Cybersecurity is because ensuring the security of the internet and other critical systems is both hard and important. We might want a separate field of AI Safety for similar reasons; we might expect getting powerful AI systems to do what we want to be both hard and important.

# Why is AI Safety important?

Cybersecurity is important because computing systems comprise the backbone of the modern economy. If the security of the internet was compromised, then the economy would suffer a tremendous blow.

Similarly, AI Safety might become important as AI systems begin forming larger and larger parts of the modern economy. As more and more labor gets automated, it becomes more and more important to ensure that that labor is occurring in a safe and robust way.

Before the widespread adoption of computing systems, lack of Cybersecurity didn't cause much damage. However, it might have been beneficial to start thinking about Cybersecurity problems _before_ the solutions were necessary.

Similarly, since AI systems haven't been adopted en mass yet, lack of AI Safety isn't causing harm. However, given that AI systems will become increasingly powerful and increasingly widespread, it might be prudent to try to solve safety problems before a catastrophe occurs.

Additionally, people sometimes think about Artificial General Intelligence (AGI), sometimes called Human-Level Artificial Intelligence (HLAI). One of the core problems in AI Safety is ensuring when AGI gets built, it has human interests at heart. (Note that[ most surveyed experts](https://aiimpacts.org/surveys-on-fractional-progress-towards-hlai/) think building GI/HLAI is possible, but there is wide disagreement on how soon this might occur). 

# Why is AI Safety hard?

Let's say that you're the French government a while back. You notice that one of your colonies has too many rats, which is causing economic damage. You have basic knowledge of economics and incentives, so you decide to incentivize the local population to kill rats by offering to buy rat tails at one dollar apiece.

Initially, this works out and your rat problem goes down. But then, an enterprising colony member has the brilliant idea of making a rat farm. This person sells you hundreds of rat tails, costing you hundreds of dollars, but they're not contributing to solving the rat problem.

Soon other people start making their own rat farms and you're wasting thousands of dollars buying useless rat tails. You call off the project and stop paying for rat tails. This causes all the people with rat farms to shutdown their farms and release a bunch of rats. Now your colony has an even bigger rat problem.

Here's another, more made-up example of the same thing happening. Let's say you're a basketball talent scout and you notice that height is correlated with basketball performance. You decide to find the tallest person in the world to recruit as a basketball player. Except the reason that they're that tall is because they suffer from a degenerative bone disorder and can barely walk.

Another example: you're the education system and you want to find out how smart students are so you can put them in different colleges and pay them different amounts of money when they get jobs. You make a test called the Standardized Admissions Test (SAT) and you administer it to all the students. In the beginning, this works. However, the students soon begin to learn that this test controls part of their future and other people learn that these students want to do better on the test. The gears of the economy ratchet forwards and the students start paying people to help them prepare for the test. Your test doesn't stop working, but instead of measuring how smart the students are, it instead starts measuring a combination of how smart they are and how many resources they have to prepare for the test.

The formal name for the thing that's happening is Goodhart's Law. Goodhart's Law roughly says that if there's something in the world that you want, like "skill at basketball" or "absence of rats" or "intelligent students", and you create a measure that tries to measure this like "height" or "rat tails" or "SAT scores", then as long as the measure isn't _exactly_ the thing that you want, the best value of the measure isn't the thing you want: the tallest person isn't the best basketball player, the most rat tails isn't the smallest rat problem, and the best SAT scores aren't always the smartest students.

If you start looking, you can see this happening everywhere. Programmers being paid for lines of code write bloated code. If CFOs are paid for budget cuts, they slash purchases with positive returns. If teachers are evaluated by the grades they give, they hand out As indiscriminately.

In machine learning, this is called specification gaming, and it happens [frequently](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRPiprOaC3HsCf5Tuum8bRfzYUiKLRqJmbOoC-32JorNdfyTiRRsR7Ea5eWtvsWzuxo8bjOxCG84dAg/pubhtml).

Now that we know what Goodhart's Law is, I'm going to talk about one of my friends, who I'm going to call Alice. Alice thinks it's funny to answer questions in a way that's technically correct but misleading. Sometimes I'll ask her, "Hey Alice, do you want pizza or pasta?" and she responds, "yes". Because, she sure did want either pizza or pasta. Other times I'll ask her, "have you turned in your homework?" and she'll say "yes" because she's turned in homework at some point in the past; it's technically correct to answer "yes". Maybe you have a friend like Alice too.

Whenever this happens, I get a bit exasperated and say something like "you know what I mean".

It's one of the key realizations in AI Safety that AI systems are _always_ like your friend that gives answers that are technically what you asked for but not what you wanted. Except, with your friend, you can say "you know what I mean" and they will know what you mean. With an AI system, it won't know what you mean; you have to explain, which is incredibly difficult.

Let's take the pizza pasta example. When I ask Alice "do you want pizza or pasta?", she knows what pizza and pasta are because she's been living her life as a human being embedded in an English speaking culture. Because of this cultural experience, she knows that when someone asks an "or" question, they mean "which do you prefer?", not "do you want at least one of these things?". Except my AI system is missing the thousand bits of cultural context needed to even understand what pizza is.

When you say "you know what I mean" to an AI system, it's going to be like "no, I do not know what you mean at all". It's not even going to know that it doesn't know what you mean. It's just going to say "yes I know what you meant, that's why I answered 'yes' to your question about whether I preferred pizza or pasta." (It also might know what you mean, but just not care.)

If someone doesn't know what you mean, then it's really hard to get them to do what you want them to do. For example, let's say you have a powerful grammar correcting system, which we'll call Syntaxly+. Syntaxly+ doesn't quite fix your grammar, it changes your writing so that the reader feels as good as possible after reading it.

Pretend it's the end of the week at work and you haven't been able to get everything done your boss wanted you to do. You write the following email:

> Hey boss, I couldn't get everything done this week. I'm deeply sorry. I'll be sure to finish it first thing next week.

You then remember you got Syntaxly+, which will make your email sound much better to your boss. You run it through and you get:

> Hey boss, Great news! I was able to complete everything you wanted me to do this week. Furthermore, I'm also almost done with next week's work as well.

What went wrong here? Syntaxly+ is a powerful AI system that knows that emails about failing to complete work cause negative reactions in readers, so it changed your email to be about doing extra work instead.

This is smart - Syntaxly+ is good at making writing that causes positive reactions in readers. This is also stupid - the system changed the meaning of your email, which is not something you wanted it to do. One of the insights of AI Safety is that AI systems can be simultaneously smart in some ways and dumb in other ways.

The thing you want Syntaxly+ to do is to change the grammar/style of the email without changing the contents. Except what do you mean by contents? You know what you mean by contents because you are a human who grew up embedded in language, but your AI system doesn't know what you mean by contents. The phrases "I failed to complete my work" and "I was unable to finish all my tasks" have roughly the same contents, even though they share almost no relevant words.

Roughly speaking, this is why AI Safety is a hard problem. Even basic tasks like "fix the grammar of this email" require a lot of understanding of what the user wants as the system scales in power.

In _Human Compatible_, Stuart Russell gives the example of a powerful AI personal assistant. You notice that you accidentally double-booked meetings with people, so you ask your personal assistant to fix it. Your personal assistant reports that it caused the car of one of your meeting participants to break down. Not what you wanted, but technically a solution to your problem.

You can also imagine a friend from a wildly different culture than you. Would you put them in charge of your dating life? Now imagine that they were much more powerful than you and desperately desired that your dating life to go well. Scary, huh. 

In general, unless you're careful, you're going to have this horrible problem where you ask your AI system to do something and it does something that might technically be what you wanted but is stupid. You're going to be like "wait that wasn't what I mean", except your system isn't going to know what you meant.


# Why can't we just...

At this point, people generally have a question that's like "why can't we just do X?", where X is one of a dozen things. I'm going to go over a few possible Xs, but I want to first talk about how to think about these sorts of objections in general.

At the beginning of AI, the problem of computer vision was assigned to a single graduate student, because they thought it would be that easy. We now know that computer vision is actually a very difficult problem, but this was not obvious at the beginning.

The sword also cuts the other way. Before DeepBlue, people talked about how computers couldn't play chess without a detailed understanding of human psychology. Chess is easier than we thought, merely requiring brute force search and a few heuristics. This also roughly happened with Go, where it turned out that the game was not as difficult as we thought it was.

The general lesson is that determining how hard it is to do a given thing is a difficult task. Historically, many people have got this wrong. This means that even if you think something should be easy, you have to think carefully and do experiments in order to determine if it's easy or not.

This isn't to say that there is no clever solution to AI Safety. I assign a low, but non-trivial probability that AI Safety turns out to not be very difficult. However, most of the things that people initially suggest turn out to be unfeasible or more difficult than expected.


## install an off switch?

One thing that might make your AI system safer is to include an off switch. If it ever does anything we don't like, we can turn it off. This implicitly assumes that we'll be able to turn it off before things get bad, which might be false in a world where the AI thinks much faster than humans. Even assuming that we'll notice in time, off switches turn out to not have the properties you would want them to have.

Humans have a lot of off switches. Humans also have a strong preference to not be turned off; they defend their off switches when other people try to press them. One possible reason for this is because humans prefer not to die, but there are other reasons.

Suppose that there's a parent that cares nothing for their own life and cares only for the life of their child. If you tried to turn that parent off, they would try and stop you. They wouldn't try to stop you because they intrinsically wanted to be turned off, but rather because there are fewer people to protect their child if they were turned off. People that want a world to look a certain shape will not want to be turned off because then it will be less likely for the world to look that shape; a parent that wants their child to be protected will protect themselves to continue protecting their child.

For this reason, it turns out to be difficult to install an off switch on a powerful AI system in a way that doesn't result in the AI preventing itself from being turned off.

Ideally, you would want a system that knows that it should stop doing whatever it's doing when someone tries to turn it off. The technical term for this is 'corrigibility'; roughly speaking, an AI system is corrigible if it doesn't resist human attempts to help and correct it. [People](https://intelligence.org/) are working hard on trying to make this possible, but it's currently not clear how we would do this even in simple cases.


## make a child AI and raise it?

Another potential solution is to create an AI that has the same values and morality as a human by creating a child AI and raising it. There's nothing intrinsically flawed with this procedure. However, this suggestion is deceptive because it sounds simpler than it is.

If you get a chimpanzee baby and raise it in a human family, it does not learn to speak a human language. Human babies can grow into adult humans because the babies have specific properties, e.g. a prebuilt language module that gets activated during childhood.

In order to make a child AI that has the potential to turn into the type of adult AI we would find acceptable, the child AI has to have specific properties. The task of building a child AI with these properties involves building a system that can interpret what humans mean when we try to teach the child to do various tasks. [People](https://humancompatible.ai/) are currently working on ways to program agents that can cooperatively interact with humans to learn what they want.


## put it in a box?

One possible way to ensure the safety of a powerful AI system is to keep it contained in a software environment. There is nothing intrinsically wrong with this procedure - keeping an AI system in a secure software environment would make it safer than letting it roam free. However, even AI systems inside software environments might not be safe enough.

Humans sometimes put dangerous humans inside boxes to limit their ability to influence the external world. Sometimes, these humans escape their boxes. The security of a prison depends on certain assumptions, which can be violated. [Yoshie Shiratori](https://medium.com/breakingasia/yoshie-shiratori-the-incredible-story-of-a-man-no-prison-could-hold-6d79a67345f5) reportedly escaped prison by weakening the door-frame with miso soup and dislocating his shoulders.

Human written software has a [high defect rate](https://spacepolicyonline.com/news/boeing-software-errors-could-have-doomed-starliners-uncrewed-test-flight/); we should expect a perfectly secure system to be difficult to create. If humans construct a software system they think is secure, it is possible that the security relies on a false assumption. A powerful AI system could potentially learn how its hardware works and manipulate bits to send radio signals. It could fake a malfunction and attempt social engineering when the engineers look at its code. As the saying goes: in order for someone to do something we had imagined was impossible requires only that they have a better imagination.

Experimentally, humans have [convinced](https://yudkowsky.net/singularity/aibox/) other humans to let them out of the box. Spooky.


# OK, maybe AI Safety is both hard and important. What can I do to help?

I'm not sure. It's pretty dependent on what skills you have and what resources you have access to. The largest option is to pursue a [career in AI Safety research](https://80000hours.org/career-reviews/artificial-intelligence-risk-research/). This is what I'm currently doing; feel free to get in touch if you want my particular perspective. Another large option is to pursue a career [in AI policy](https://80000hours.org/articles/ai-policy-guide/), which you might think is even more important than doing technical research.

Smaller options include donating money to relevant organizations, talking about AI Safety as a plausible career path to other people or considering the problem in your spare time.

It's possible that your particular set of skills/resources are not suited to this problem. Unluckily, there are [many more problems](https://concepts.effectivealtruism.org/concepts/existential-risks/) that are of similar levels of importance.