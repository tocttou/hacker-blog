---
title: "Intermittent Distillations #3"
---

# Mundane solutions to exotic problems (Paul Christiano)

[Mundane solutions to exotic problems](https://www.alignmentforum.org/posts/d5m3G3ov5phZu7FX3/mundane-solutions-to-exotic-problems)


## Summary

Thinking about AI safety often leads to considering exotic problems: models purposefully altering their gradients, agents hiding their capabilities to defect when an opportunity arises, or humans being vulnerable to side-channel attacks. These exotic problems might seem like they require exotic solutions. However, the author points out that the origin of these exotic problems is the models themselves having exotic capabilities. If one is able to train a model to use whatever capabilities it has for a good purpose, then if the model gains exotic capabilities, it'll also be able to use those to avoid exotic problems.

As an analogy, if one hires a mercenary to help them when a war, they might be worried that the mercenary develops some weapon that means they are no longer motivated by your money. Since the mercenary has different goals than their employer, the employer must be worried about the incentive structure that they set up being broken. However, if one has a soldier that is fundamentally loyal, one is not at all worried about this soldier developing a powerful weapon, since their loyalty ensures they'll use this new exotic capability in service of your goals. If it turns out that the weapon requires special containment procedures, the soldiers' loyalty will ensure that they'll use their weapons expertise to help you contain it.


## Opinion

This framing on capabilities redirecting is similar to framings provided in [The strategy-stealing assumption](https://ai-alignment.com/the-strategy-stealing-assumption-a26b8b1ed334) and [Universaliity Unwrapped](https://www.alignmentforum.org/posts/farherQcqFQXqRcvv/universality-unwrapped). Empirically, it's taken me a while to understand the author's framing of "build an overseer that 'knows' everything the model knows" as a sufficient solution to the alignment problem, but I think it makes sense to me now.

However, I still don't really understand why the author thinks this is a tractable problem. To be fair, I'm not sure why people think value learning is tractable either. I'd blame this on my lack of understanding more than anything.

Elsewhere, the author has said their goal is to provide a clean solution to the alignment problem. I think this post gives intuition for why the messiness that sometimes appears at the surface of AI safety problems might be solvable with some deep solution. 


# Low-stakes alignment (Paul Christiano)

[Low-stakes alignment](https://www.alignmentforum.org/posts/TPan9sQFuPP6jgEJo/low-stakes-alignment)


## Summary

A model is operating in a _low-stakes_ setting if the potential negative impact of any of its decisions are bounded at some pretty low amount. In particular, this implies that we only care about the long-run average behavior of the model. For example, a standard concern in AI safety is that the model seizes control of its reward channel. If it was possible to do this quickly, the model would have taken an action with large negative-impact, so it wouldn't be in a low-stakes setting.

In particular, one is not concerned with distributional shift in low-stakes settings. Since each particular decision only has potentially small negative impact, we can simply train our model in an online setting, suffering from bad performance for a while until the model eventually learns the new distribution. If the individual decisions don't matter, then the overall cost of this transition period is low.

Therefore, in low-stakes settings, the primary concern is that of outer alignment. If one has an objective that is both easy to optimize and will produce good behavior in the limit of optimization, training the model in a low-stakes setting will produce an aligned model without catastrophe (assuming the model is powerful enough to learn the objective). To see why this is the case, having an outer-aligned objective means the model is aligned in the limit. Since the setting is low stakes, the potential negative impact of the model during training falls short of catastrophe.

The author claims that one can separate alignment roughly into a solution that works in this low-stakes setting, and a way of making settings actually low-stakes in practice, i.e., ensure catastrophes are handled appropriately.

One might also think that the low-stakes setting is not where the primary danger comes from, and so trying to provide a solution to only the low-stakes setting does not represent much progress. The author claims that the low-stakes setting contains a lot of risk in worlds where humans don't understand how models are making decisions. For example, humans might not understand the dynamics that allow Earth to sustain life, and so this might get gradually eroded over the course of thousands of decisions.

Finally, the author formalizes the argument for why assuming low-stakes + outer alignment is sufficient to solve the alignment problem, which I will not summarize.


## Opinion

I'm generally a fan of breaking off concrete subproblems to work on. I also think that the author's breakdown of the alignment problem is likely to be better than my own. However, I'm slightly skeptical that the low-stakes setting is a good way of slicing up the space. In particular, I have some sense that in order to ensure the setting is actually low-stakes, the objective will need to include [mechanistic incentives](https://www.alignmentforum.org/posts/BKM8uQS6QdJPZLqCr/towards-a-mechanistic-understanding-of-corrigibility), which has implications for the regret bounds one wants to employ.

I also think that in this breakdown, ensuring that the setting is low-stakes is the harder of the two problems. I think that if we have a method to ensure that a model never produces a catastrophe, we can probably add average case guarantees without too much additional difficulty. As an analogy, it feels like we've split the problem of making a self-driving car into "goes where you want it to go" and "doesn't crash", where "doesn't crash" is clearly the harder of the two problems. Admittedly, the point where this intuition likely goes awry is in competitiveness concerns. More specifically, that there will be objectives that are easier to optimize for that produce slow-moving disaster, as illustrated in [Another (outer) alignment failure story](https://www.lesswrong.com/posts/AyNHoTWWAJ5eb99ji/another-outer-alignment-failure-story).

The counter-argument to my position is that figuring out how to make our models not do bad things over a long period of time is going to provide insight into how to make models not do really bad things in a short amount of time. I sort of buy this for some ways of going about the low-stakes setting.


# Updating the Lottery Ticket Hypothesis (John Wentworth)

[Updating the Lottery Ticket Hypothesis](https://www.alignmentforum.org/posts/i9p5KWNWcthccsxqm/updating-the-lottery-ticket-hypothesis)


## Summary

Suppose you have some neural network that uses parameters $\theta$ to map $x$ to $y$. We can represent this as $y = f(x, \theta)$, and our goal is to find $\theta$ to make this equation true. If the network is initialized with $\theta_0$, SGD finds some $\Delta\theta$ such that $y = f(x, \theta_0 + \Delta\theta)$. Taking linear approximation, the right hand side of this equation is approximately equal to $f(x, \theta_0) + \Delta\theta \frac{df}{d\theta}(x, \theta_0)$. We call this the parameter tangent space.

Theoretically, you would expect $f(x, \theta_0 + \Delta\theta)$ to be more expressive than $f(x, \theta_0) + \Delta\theta \frac{df}{d\theta}(x, \theta_0)$. Empirically, this is not the case and the linear approximation works quite well.

The lottery ticket hypothesis is another theory for how neural networks work and it claims that during initialization, there exists a subnetwork that can solve the task. When training happens, that particular sub-network gets reinforced and other networks get dampened.

The author connects the parameter tangent space to the lottery ticket hypothesis by claiming that, since the linear approximation is basically the same as the full space in practice, SGD is really searching over the tangent space instead of the full space. Thus the tangent space is our set of "lottery tickets."


## Opinion

The original lottery ticket hypothesis claims that the lottery tickets and subnetworks during initialization. The author objects to this claim because modern neural networks aren't big enough to include e.g. dog detectors. So the true lottery ticket space must be bigger than the subnetworks at initialization.

If Mingard et al are correct that the thing SGD is doing is basically randomly sampling a high performing neural network in the tangent space, then calling the tangent space the "set of lottery tickets" seems like a strict upgrade to the mental model provided by the lottery ticket hypothesis.

However, I remain pretty skeptical of the lottery ticket hypothesis as capturing something fundamental about how neural networks learn. In the simplest version, you can take a Taylor expansion of some exponential function, then identify the "subnetwork" of the first few terms and claim that it has approximately the same accuracy. I'm not sure you would have expected that there wouldn't be an extremely skewed distribution of "how much does this neuron matter" in the first place, which suggests that you ought to be able to find high-performing subnetworks for basically everything?

I'm currently treating the phenomenon as a curious bit of evidence: we can find subnetworks that we can train to basically the same performance as the original network; what's up with that?


# Formal Solution to the Inner Alignment Problem (Michael Cohen)

[Formal Solution to the Inner Alignment Problem](https://www.alignmentforum.org/posts/CnruhwFGQBThvgJiX/formal-solution-to-the-inner-alignment-problem)


## Summary

(Thanks to Beth Barnes and William Saunders for valuable discussion. I also found comments by Paul Christiano and Evan Hubinger interesting.)

Suppose that you wanted to do imitation learning. Naively, you could just train an imitative model until it reached zero loss, then deploy your imitation. However, this provides no guards against deceptively aligned mesa-optimizers.

Instead, what you could do is take a weighted mixture of different models. If some of the models are deceptively aligned mesa-optimizers, then their influence will be proportionally less of the mixture, so the imitation given by the mixture might be less catastrophic. However, this process only gives you as much alignment as the average model is aligned. If the average model is deceptive, you're out of luck.

What if we wanted the mixture to be as aligned as the most aligned model in the set? Since we don't know which of the models is most aligned, our solution is to not do anything unless _all_ of the models approve of the action. Translating to the probabilistic imitative setting, this means that we create a new distribution by taking the minimum over all of our models. In other words, we take an action with some probability if _all_ of the models give that action at least that probability.

The resulting "min distribution" will not sum to one. The solution to this is to get additional information from the target-of-imitation with the remaining probability. This sampling method has the nice property that you will sample from the target-of-imitation more if the models are in large disagreement (since the min-probs will tend to be low and the sum will be much less than 1), and sample from the target-of-imitation less if the models tend to agree.

This setup has as a free parameter the number of models over which you're taking the minimum. The authors propose that the set is the top-k models sorted by posterior probability after doing Bayesian updates, with the models being rebalanced every time a query is made to the target-of-imitation.

_Note that I didn't read the paper, only the blog posts + talked to some people about it._


## Opinion

I think it's a bit strong to call this a "solution to the inner alignment problem." I think it makes some potentially interesting progress, but doesn't solve the problem.

In particular, I think the training processes we're likely to use for different models are going to produce results that are highly correlated. If all (most?) models in your top-k are deceptive, then either you're going to take catastrophic actions or have to query the target-of-imitation an extremely large number of times.

To the extent that you're training processes produce uncorrelated models, then they're probably pretty different training processes. To get ten models over which to take the top-k will then require like 10x the compute, which seems prohibitive.

Trying to answer the question of "how can I create 10 uncorrelated models that fit the data with basically the same amount of compute as one model?" might be fruitful. I vaguely suspect that you might be able to get N uncorrelated models with log(N) compute if you were particularly clever. Perhaps an easier question to start with is how to get uncorrelated models with SGD at all.

I am generally interested in the technique of "top-k + online update" as a potentially fairly general way to turn normal training setups into something like online setups that get a bit of marginal safety. This trick is similar to the MAP trick discussed [here](https://markxu.com/itermittent-distallations-1#asymptotically-unambitious-artificial-general-intelligence-michael-cohen), which is not surprising given both results have the same author.


# Report on Semi-informative Priors (Tom Davidson)

[Report on Semi-informative Priors](https://www.openphilanthropy.org/blog/report-semi-informative-priors)


## Summary

How can we predict the probability of AGI happening by a certain year? One approach is to simply look at the evidence and give a guess, but this is vulnerable to various cognitive biases. A potentially better approach is to reason about various methods of making predictions _in general_ and make predictions using those methods. This post discusses a particular way of making predictions that balances various considerations about how much one ought to update on evidence.

One way of making predictions is using the _outside-view_, which involves trying to find appropriate reference classes and extrapolating. Another way of making predictions is using the _inside-view_, which involves considering information particular to your case. These are not binary categories – instead, you should imagine a sliding scale of "how much evidence particular to the situation should I use?", with the outside-view on one end and the inside-view on the other.

In practice, one way of making a prediction using the outside-view is to employ an _uninformative prior_, a starting point of making a prediction that assumes minimal information about the situation at hand. One can then update the prior with information that one has about the specifics at hand. The question of how strongly one updates determines where one falls on the inside/outside view spectrum.

In particular, a common uninformative prior is the Laplace prior, which assumes that the event you care about has a fixed probability of occurring per trial. The Laplace prior corresponds to a uniform prior over all possible probabilities p of that event occurring per trial. Upon observing the event happen M out of N trials, the Laplace prior gives as its "best guess" of the value of p (M + 1)/(N + 2). One can think of this as just taking the empirical frequency while starting with the assumption that the event happened in one trial and didn't happen in one trial.

However, this approach is unsatisfactory. In particular, the Laplace prior predicts that the first trial of an event is likely to happen with 1/2 chance, which seems absurdly high for the chance that AGI gets created in the first year.

The modification the author makes is to make an independent guess at the _first trial probability_, which aims to answer the question "before humanity had started trying to make AGI, what probability would you have given to them succeeding in the first trial?" where "trial" can vary, but is typically one year. In essence, this modifies the Laplace prior by replacing the assumption of one failed trial with an estimate as to a more reasonable number of failed trials. For example, since creating AGI seems like a very hard thing to do, we might assume that there had been many failures instead of just one.

To estimate the first trial probability, the author considers multiple reference classes, the most important of which is "highly ambitious but feasible technology that a serious STEM field is trying to develop", which includes technologies like heavier-than-air flight, DNA-sequencing, and atomic energy. The author concludes that the first trial probability is likely somewhere between 1/100 and 1/1000, with a point estimate of around 1/300.

To finish the framework, we need to answer two more questions: "what's a trial?" and "when did trials start happening?"

The former question is answered with "a year", "a 'year' of researcher growth" and "a 'year' of compute increase." The latter question is generally answered with "1956", which is the year of the Dartmouth Summer Research Project on Artificial Intelligence, widely considered to be the founding event of AI as a field.

If one assumes a first trial probability of 1/300, a trial time of one year, and a start time of 1956, this framework yields a probability of AGI by 2036 of 4%. The post includes many tables showing which assumptions yield which results. [This tool](https://aipriors.com/) allows you to input your own parameters and see what you get.


## Opinion

If you're a Bayesian agent, it's impossible that learning more information hurts you. From this perspective, the main reason why you don't want to use more than the maximal amount of evidence is because you're not a Bayesian agent, which is, admittedly, a pretty good reason. Even so, it always feels like attempts to improve predictions by purposefully limiting the amount of information you get are taking the wrong approach of trying to navigate around biases instead of just debiasing yourself.

As an analogy, one of my ML professors once commented that he wasn't a fan of stopping training early to avoid overfitting because if your learning algorithm could even get worse with more training it wasn't a very good learning algorithm. I feel similarly about approaches to predictions that ignore specific information. If the process you're using to make predictions could possibly get worse with more information, it probably isn't a very good method of making predictions.

This is not to say that I don't think outside-view approaches aren't _useful_, I'm just not really a fan. I think they can be useful if you can't debias yourself enough to make predictions using all the information that is skewed. In the same sense, if you don't have a better learning algorithm, doing early stopping is better than not doing it.

I don't have that much to say about the particular approach the author used – it seems quite reasonable.


# Multi-Prize Lottery Ticket Hypothesis: Finding Accurate Binary Neural Networks by Pruning A Randomly Weighted Network

[Multi-Prize Lottery Ticket Hypothesis: Finding Accurate Binary Neural Networks by Pruning A Randomly Weighted Network](https://arxiv.org/abs/2103.09377)


## Summary

The multi-prize lottery ticket hypothesis is that in a sufficiently large neural network, there exist lottery tickets (subnetworks) that win multiple prizes. Those prizes are:

*   The subnetwork achieves comparable accuracy to the trained network.
*   The subnetwork achieves this accuracy without training
*   The subnetwork is robust to quantization.

The authors prove a quantitative bound for how large a network has to be before there is a high chance of such a ticket existing. They also exhibit an algorithm for finding such tickets and demonstrate SOTA results on binary network accuracy.


## Opinion

"Multi-prize" is a really weird way to describe a lottery ticket. I would prefer "strong lottery ticket hypothesis" or something like that.

My main issue with this result is that it feels like combinatorial sleight of hand. Basically, there is some definition of "sufficiently large" that gives you all three "prizes" for free because you can just pick whatever network you want. As an analogy, the infinitely large random graph contains every possible finite subgraph with probability 1, but you wouldn't really say a very large random graph has "lottery tickets". Well, you might, but it wouldn't be very meaningful.

I looked at the proof a bit to see if they were doing anything clever. As far as I can tell, the answer is "no" and they're just using basic probability bounds to ensure the existence of subnetworks. I also suspect that the results are with binary networks because they're much easier to prove things about. But basically, the result is akin to "if we get a large enough random graph, we can be sure that all possible graphs over n nodes are subgraphs of this random graph." This is basically very obvious and not interesting.

The interesting bit might be the algorithm they exhibit to find such binary neural networks, which allows you to train these networks more efficiently. If you want to deploy a powerful model on limited compute, one way of doing that is to train a really large model, then compress it somehow. Binarizing the weights seems like a reasonable way to go about that.