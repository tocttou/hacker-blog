---
title: The First Sample Gives the Most Information

published: true
---

*I originally heard this point made by Ben Pace in Episode 126 of* [*the Bayesian Conspiracy Podcast*](http://www.thebayesianconspiracy.com/2020/12/126-lesswrong-2-0-and-books/)*. Ben claimed that he learned this from the book* [*How to Measure Anything*](https://hubbardresearch.com/publications/how-to-measure-anything-book/)*, but I think I identified the relevant section, and this point wasn't made explicitly.*

Suppose that I came up to you and asked you for a 90% confidence interval for the weight of a wazlot. I'm guessing you would not really know where to start. However, suppose that I randomly sampled a wazlot and told you it weighed 142 grams. I'm guessing you would now have a much better idea of your 90% confidence interval (although you still wouldn't have *that* good a guess at the width). 

In general, if you are very ignorant about something, the first instance of that thing will tell you what domain you're operating in. If you have no idea how much something weighs, knowing the weight tells you the reasonable orders of magnitude are. Things that sometimes weigh 142 grams don't typically also sometimes weigh 12 solar masses. Similarly, things that take 5 minutes don't typically also take 5 days, and things that are 5 cm long aren't typically also 5 km long.

For more abstract concepts, having a single sample allows you to locate the concept in [concept space](https://www.lesswrong.com/posts/82eMd5KLiJ5Z6rTrr/superexponential-conceptspace-and-simple-words) by anchoring it to [thing space](https://www.lesswrong.com/posts/WBw8dDkAWohFjWQSk/the-cluster-structure-of-thingspace). "Redness" cannot be properly understood until it is known that "apples are red". "Functions" are incomprehensible until you know "adding one to a number" is a function. "Resources" are vague until you learn that "money is a resource".

In reality, the first sample often gives you *more* information than a random sample. If I ask a friend for an example of a snack, they're not going to randomly sample a snack and tell me about it; they're probably going to pick a snack that is at the center of the space of all snacks, like potato chips. 

From an information-theoretic perspective, the expected amount of information gained from the first sample must be the highest. If the sampling process is independently and identically distributed, the 2nd sample is expected to be more predictable given knowledge of the first sample. There is some chance that the first sample is misleading, but the probability that it's misleading goes down the more misleading the sample is, so you don't *expect* the first sample to be misleading. If your very ignorant, your best guess for the mean of a distribution is pretty close to the mean of the samples you have, even if you only have one.

This is one perspective on why asking for examples is so powerful; they typically give you the first sample, which contains the most information. 