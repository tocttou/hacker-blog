---
title: Three Things I've Learned About Bayes' Rule
published: true

---

[Bayes' Rule](https://arbital.com/p/bayes_rule/) is important to me in the same way that [decision theory](https://plato.stanford.edu/entries/decision-theory/) is important to me. It is a theoretical idea, a description of perfection that I perpetually attempt to approximate.

As such, I spend a reasonable amount of time comparing my thought processes to the Bayesian updates that they approximate. Here are three situations where my initial thinking went astray.

(Bayes' Rule is much easier to understand in terms of ratios. Buck explains why [here](http://shlegeris.com/2019/12/01/bayes).)

# Update Multiple Hypotheses

I tend to tell stories about evidence that cause me to under-update. For example, suppose I think I'm good at essay writing, but I am struggling to write a particular essay. The story I tell myself is, "I guess this essay was harder than I thought." This story might be accurate, but it ignores that struggling is also evidence that I'm worse at writing than I thought. (This error might be described as over-proliferating [buckets](https://www.lesswrong.com/posts/EEv9JeuY5xfuDDSgF/flinching-away-from-truth-is-often-about-protecting-the).)

If you have two parameters in your model of reality and you make an observation, you have learned something about both parameters. If you are surprised by your observation and are more confident about one of the parameters, the bulk of your surprise is probably explained by the parameter you're less sure about. However, by Probabilistic Law, **all** evidence gives you information about **all** parameters. 

[Eliezer Yudkowsky](https://www.lesswrong.com/posts/BEtzRE2M5m9YEAQpX/there-s-no-fire-alarm-for-artificial-general-intelligence):

> If you can do something impressive-sounding with AI in 1974, then that is because that thing turned out to be doable in some cheap cheaty way, not because 1974 was so amazingly great at AI.

In 1974, if you solved an impressive-sounding problem with AI, you were actually discovering that that problem was easier than expected. But you are also discovering that 1974 AI was slightly more powerful than you thought. (In practice, sufficiently minor updates are not worth making.)

One of the consequences is that everything you do is always giving you evidence about your abilities. Thus it is said: "if everywhere you go smells like shit, maybe it's time to check your shoes."

# Strong Evidence is Common

Whenever I'm explicitly doing Bayes' Rule, I tend to estimate the strength of evidence between 1:100 and 100:1. This might be a good strategy because of a meta-prior: "if I'm confused enough to be doing Bayes explicitly, then the evidence probably isn't that strong." However, many situations involve evidence much much stronger than 1:100. 

One time, someone asked me what my name was. I said, "Mark Xu." Afterward, they probably believed my name was "Mark Xu." I'm guessing they would have happily accepted a bet at 20:1 odds that my driver's license would say "Mark Xu" on it.

The prior odds that someone's name is "Mark Xu" are generously 1:1,000,000. Posterior odds of 20:1 implies that the odds ratio of me saying "Mark Xu" is 20,000,000:1, or roughly 24 bits of evidence. That's **a lot** of evidence.

Seeing a Wikipedia page say "X is the capital of Y" is tremendous evidence that X is the capital of Y. Someone telling you "I can juggle" is massive evidence that they can juggle. Putting an expression into Mathematica and getting Z is enormous evidence that the expression evaluates to Z. Vast odds ratios lurk behind many encounters.

One of the consequences is that running through Bayes' Rule explicitly might produce a bias towards middling values. Extraordinary claims require extraordinary evidence, but extraordinary evidence might be more common than you think.

# Conditioning is Critical

I once read a story about someone (let's call them Jane) trying to determine whether two people were courting. Jane observed the pair both going to a museum and having dinner. Jane estimated the prior odds that these people were courting at 1:20 and the odds ratios of "going to a museum" and "having dinner" to both be 10:1, arriving at a posterior of 100:20, or 5:1. The pair turned out to be siblings.

In theory, it is not a mistake to assign a high probability to a given false statement; it does suggest, however, that a mistake was made. Jane made a mistake in reasoning --- subtle but damning. The first odds ratio Jane estimated was for "the pair went to a museum." The second ratio Jane estimated should **not** have been for "the pair went to dinner"; it should have been for "the pair went to dinner, given that they had already gone to the museum." The mistake Jane made was forgetting to condition when considering dependent pieces of evidence properly.

Here's a verbal explanation of why this makes sense. Seeing the pair at a museum tells you "the pair have some relationship." Most people do not have any relationship, which strongly affects the probability that the pair is courting. However, seeing the pair having dinner only tells you the type of relationship the pair has involves dining together. Many relationships involve dining together, so this is only mildly suggestive of courtship. Jane's mistake was seeing the pair at dinner and "finding out" that the pair were in a relationship a second time.

One of the consequences is that considering pieces of evidence separately might result in double-counting, causing overconfidence. If you have pieces of evidence that are all individually surprising, they will likely become much less surprising if you consider them together.