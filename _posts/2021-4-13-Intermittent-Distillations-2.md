---
title: "Intermittent Distillations #2"
---

# Servant of Many Masters: Shifting priorities in Pareto-optimal sequential decision-making (Andrew Critch and Stuart Russell)

[Servant of Many Masters: Shifting priorities in Pareto-optimal sequential decision-making](https://arxiv.org/abs/1711.00363)


## Summary

A policy (over some partially observable Markov decision process (POMDP)) is **Pareto optimal** with respect to two agents with different utility functions if it is not possible to construct a policy that achieves higher utility for one of the agents without doing worse for the other agent. A result by Harsanyi shows that for agents that have the same beliefs, Pareto optimal policies act as if they are maximizing some weighted sum of the two agents' utility functions. However, what if the agents have different beliefs?

Interestingly, if two agents disagree about the world, it is possible to construct policies that are better for both of them _from that agent's perspective_. For example, suppose that Alice and Bob are deciding how to split a cake. Suppose also that the cake is either red or green. Alice believes that the cake is red with 0.9 and Bob believes the cake is green with 0.9. A policy that says "If the cake is red, give it to Alice. If the cake is green, give it to Bob." will be viewed favorably by both of them. In fact, the sum of the utility Alice expects to get and the utility Bob expects to get is greater than can be achieved by any policy maximizing a weighted linear combination of their two utility functions.

Intuitively, when Alice and Bob both agree to the conditional policy, they're betting against each other about empirical facts about the world. More specifically, Alice can be viewed as offering to bet Bob that the cake is red, which Bob readily accepts. In this way, the conditional policy ties the expected utility of the two agents to previously irrelevant facts about their world models, giving them both higher expected utility from their perspectives.

The key result of the paper shows that _all_ Pareto-optimal policies will have an implicit "bet settling" mechanism. One way of thinking about this is that since any difference in empirical beliefs can produce positive-sum bets between agents, a Pareto-optimal policy must implicitly make all such bets between those agents. Loosely speaking, the result shows that any policy that is Pareto-optimal with respect to a collection of agents will maximize a weighted linear combination of "how much does this agent benefit" and "how well did this agent predict empirical observations." Since Harsanyi assumes the agents have the same beliefs about the world, the second component is identical for all agents, so Harsanyi's theorem is a special case of the authors' result.

The result implies that if a contract between parties is designed to be Pareto-optimal, it will tend to "settle bets" amongst empirical beliefs of those parties (provided they have different beliefs.) The authors suggest making this "bet settling" explicit might improve contract efficiency and transparency.


## Opinion

A perspective I've been developing recently is something along the lines of "betting is fundamental." For instance, no Dutch book arguments pin down Bayes' rule as the proper update formula (given [some assumptions](https://www.lesswrong.com/posts/xJyY5QkQvNJpZLJRo/radical-probabilism-1)). If you relax the Dutch books to those that are efficiently computable, you get [Logical Induction](https://arxiv.org/abs/1609.03543) (sorta).

Abram Demski writes in [The Bayesian Tyrant](https://www.lesswrong.com/posts/4tke3ibK9zfnvh9sE/the-bayesian-tyrant):

> It is a truth more fundamental than Bayes' Law that money will flow from the unclever to the clever.

This paper represents another place where betting arises out of seemingly unrelated considerations.

I also appreciate the frequent intuitive motivation of the result.

I have a slight lingering confusion about how the assumption that agents have knowledge about other agents' beliefs interacts with Aumann's Agreement theorem, but I think it works because they don't have common knowledge about each other's rationality? I suspect I might also be misunderstanding the assumption or the theorem here.


# AI Governance: A Research Agenda (Allan Dafoe)

[AI Governance: A Research Agenda](https://www.fhi.ox.ac.uk/wp-content/uploads/GovAI-Agenda.pdf)

[Alignment Newsletter Summary](https://mailchi.mp/469203093ca3/alignment-newsletter-22)


## Summary

This research agenda divides the field of AI Governance into three rough categories: the technical landscape, the political landscape, and ideal governance. The technical landscape roughly seeks to answer questions like "what's technologically feasible?", "how quickly is AI going to develop?", and "what safety strategies are possible?"

The political landscape seeks to answer roughly the same set of questions for governance: what's politically possible? What's the economic/political impact of AI going to be?

Finally, the ideal governance section points out that the previous two sections depend on an understanding of what the "good futures" are going to look like and that we currently don't have a clear picture.

Given that this is already a summary of an entire field, my summary is hopelessly lossy, so I have not made much of an effort to be thorough.


## Opinion

Before reading this, I had a bunch of questions about what the key problems in AI governance were. After reading this, it turns out that the key problems are just the obvious things: what's going to happen? is that going to be good or bad? what do we want to happen? how can we use what we have to get what we want? It's both heartening and disappointing to learn that I wasn't missing anything major.

I expected some sort of broader vision about how the entire landscape fit together, but instead, I just got an endless series of questions. This feeling might be an artifact of how this is a research agenda and so isn't trying to provide answers to questions. If anything, this agenda gave me a much better sense of how tangled the entire field is. Turns out that trying to take actions that have positive consequences a million years down the line is a very difficult problem.

Also, note that I skimmed large portions of this because I was familiar with the problems, so I might have missed key sections that made connections to a broader picture.


# Alignment By Default (John S. Wentworth)

[Alignment By Default](https://www.lesswrong.com/posts/Nwgdq6kHke5LY692J/alignment-by-default)

[Alignment Newsletter Summary](https://mailchi.mp/f064cf0b877f/an-113-checking-the-ethical-intuitions-of-large-language-models)


## Summary

To what extent is AI Alignment going to be a big problem? More specifically, if we just made a powerful AI system by pre-training a model on an extremely large dataset, then fine-tuned it on something like "do the thing the human wants", what are the chances that it's going to be aligned?

A number of results in neural network transparency demonstrate that image classifiers/generators seem to learn abstractions like "curve", "tree" and "dog." Since the data we use to train the AI system contains a lot of information about human values, it is likely that a powerful model will learn "human values" as an abstraction that gives it better predictive power. For example, GPT-N will be able to produce compelling moral philosophy papers, a task that is made easier by having a strong conception of human values.

One might hope, then, that the model would learn human values as a useful abstraction during pre-training, then this concept would get "pointed to" during fine-tuning. However, Goodhart's law virtually guarantees that whatever we fine-tune our model on will not be _maximally_ satisfied by human values, so the hope is that pre-training will create a basin of attraction where human values are a good enough proxy for our training metric (which is itself a proxy for human values), that the model ends up using its proxy of human values as a proxy for our proxy for human values.

If this works, what's next? One key task our AI systems will be used for is to build the next generation of AI systems. If our systems are aligned using a learned abstraction of human values, how useful will they be for this task?

We can roughly outline two approaches for building the next generation of AI systems. The first approach relies on rigorous theory and provable correctness. The second approach relies on experimentation and empirical evidence about generalization capabilities. A system aligned using a proxy as a proxy for a proxy does not seem reliable enough to use for rigorous alignment. However, if we condition upon pre-training conveying a robust abstraction of human values and fine-tuning reliably finding that abstraction, then the second, more approximate approach to AI alignment is a lot more promising. In other words, if systems are aligned by default, the alignment problem is easy, suggesting that even shoddily aligned systems can be used to make additional progress.


## Opinion

The author gives 10% to systems being aligned by default, which is around the same range that I give. I think work like [aligning superhuman models](https://www.alignmentforum.org/posts/pqkdsqd6s6w2HtT9g/intermittent-distillations-1#The_case_for_aligning_narrowly_superhuman_models__Ajeya_Cotra_) will give empirical evidence as to whether pre-training conveys some notion of "human values" to a model and how difficult "pointing to" that abstraction turns out to be.

The point where I think the above story for alignment by default is most likely to go wrong is in "pointing to" human values. In particular, I am concerned that agents will become deceptively aligned faster than they will start using their model of human values as a proxy. See [Does SGD Produce Deceptive Alignment](https://www.alignmentforum.org/posts/ocWqg2Pf2br4jMmKA/does-sgd-produce-deceptive-alignment) for further discussion.

# Zoom In: An Introduction to Circuits (Chris Olah, Nick Cammarata, Ludwig Schubert, Gabriel Goh, Michael Petrov, and Shan Carter)

[Zoom In: An Introduction to Circuits](https://distill.pub/2020/circuits/zoom-in)

[Alignment Newsletter Summary](https://mailchi.mp/cbbf94c4c3b7/an-142the-quest-to-understand-a-network-well-enough-to-reimplement-it-by-hand)

## Summary

The Circuits agenda seeks to understand the functioning of neural networks by analyzing the properties of individual neurons (features), then analyzing how they combine together into algorithms (circuits). This agenda claims that features are the fundamental units of neural networks, they can be understood, and that they combine into circuits that are themselves understandable. Furthermore, the agenda claims that these features and circuits will be universal across networks, e.g. if a circuit is found that appears to detect curves in one vision network, similar circuits will be found in other vision networks. Other motifs that appear in multiple places are the "union motif", where two features are combined by a union operation, and a "mirror motif", where neurons often have mirror images. For instance, a dog detector might be composed of "leftwards facing dog" and "rightwards facing dog" combined with a union operation.


But how do we know that a "curve detector" is really detecting curves? Couldn't it be detecting something else? The authors offer 7 pieces of evidence.

*   If you optimize an image that maximally activates the "curve neuron", it looks like a curve.
*   If you take the dataset examples that maximally activate the "curve neuron", they all have curves in them.
*   If you manually draw curves, they strongly activate the neuron.
*   If you rotate the examples that strongly activate the neuron, the activation looks approximately bell-shaped, which is what you would expect if the activation was how much the curves lined up.
*   If you look at the weights, they look like a curve.
*   If you look at the neurons that are downstream of the "curve neuron", they typically involve curved things, e.g. circles.
*   If we hand-implement a curve detection algorithm that is based on our understanding of the "curve neuron", it detects curves.
*   The authors also explore high/low-frequency detector neurons and naturally occurring symmetries in neural networks in more detail.


## Opinion

I once heard Anna Salamon describe the "the map/territory game", which is a form of 3rd person mental narrational that involves inserting the phrase "whose map was not the territory" after time you said your own name. For example, I might say "Mark, whose map was not the territory, sat at his computer describing the map/territory game." The point of the game is to repeatedly emphasize that your beliefs about the world are not the world itself.

As I was reading the circuits thread, I found myself making similar mental motions. "The authors, whose map is not the territory, write that this set of neurons are high/low-frequency detectors." Are they? Are they really? How do they know?

Overall, I'm impressed by the rigor of the analysis. The evidence isn't quite overwhelming, but it _is_ highly suggestive. I currently think that the ability to understand neural networks will be critical to building aligned systems, so I'm excited about furthering this work.

In terms of the _style_ of this work, I am reminded of a line from Hamming's famous talk [You and Your Research](https://www.youtube.com/watch?v=a1zDuOPkMSw):

> One of the characteristics of successful scientists is having courage. Once you get your courage up and believe that you can do important problems, then you can. If you think you can't, almost surely you are not going to. Courage is one of the things that Shannon had supremely. You have only to think of his major theorem. He wants to create a method of coding, but he doesn't know what to do so he makes a random code. Then he is stuck. And then he asks the impossible question, "What would the average random code do?" He then proves that the average code is arbitrarily good, and that therefore there must be at least one good code. Who but a man of infinite courage could have dared to think those thoughts? That is the characteristic of great scientists; they have courage. They will go forward under incredible circumstances; they think and continue to think.

Imagine wanting to understand neural networks and deciding the best way to do that is to look at the individual weights of the network until you understand exactly what they're doing. Who but a person of infinite courage would have thought that this was possible? And yet it was!


# Thoughts on Human Models (Ramana Kumar and Scott Garrabrant)

[Thoughts on Human Models](https://www.alignmentforum.org/posts/BKjJJH2cRpJcAnP7T/thoughts-on-human-models)

[Alignment Newsletter Summary](https://mailchi.mp/1e757d9b05cb/alignment-newsletter-52)

## Summary

A common way to assess the ability of software engineering candidates is to have them solve simple coding problems. Imagine two candidates, one that knows they're going to be assessed in this way and one that does not. Intuitively, the results of the assessment are more reliable for the candidate that does not know about it. More specifically, the candidate that doesn't know about the assessment is likely to have applied less optimization pressure to doing well on it, so the results are less the result of [adversarial Goodharting](https://www.lesswrong.com/posts/EbFABnst8LsidYs5Y/goodhart-taxonomy#Adversarial_Goodhart). In other words, we want the assessment to provide an _independent check_ on the engineer's performance; if the engineer knows about the check, it is no longer independent.

In machine learning, engineers are careful to maintain a clear separation of the training set and the test set. This separation allows the test set to be used and an independent check for overfitting. If the model was optimized for doing well on the test set, then the check would no longer be independent.

If we're trying to train models to do tasks that humans cannot do easily, we might not have a "test set" in the strictest sense. For example, we might train a predictive model, but we might care about its solution in terms of _human approval_. How can we get an independent check for performance?

Naively, since we're not training on human approval, any check will be independent. However, the relevant question is whether there's _any channel_ by which the model learns about how it's going to be assessed, not just whether the model is being trained on the assessment metric. Since humans are doing the final evaluation, any method by which the model learns how humans tend to behave will contaminate the check, similar to how a software engineering candidate learning about how the interviewer thinks will also contaminate the interview.

In other words, the capability of human modeling makes it easier to deceive human-judgment-based checks in the same way that knowing the contents of the test makes it easier to game. If we want to be confident our AI systems are aligned, we want its capability profile to be as far away from deception as possible, suggesting we should train systems that cannot do human modeling, for example, [STEM AI](https://www.lesswrong.com/posts/fRsjBseRuvRhMPPE5/an-overview-of-11-proposals-for-building-safe-advanced-ai#6__STEM_AI)


## Opinion

I am sympathetic to the view that agents that have no human models will find it very difficult to be deceptive. My main concern is that human models are basically required for models to be performance competitive. For example, the authors mention that it's hard to see how vaguely defined tasks can be automated without some sort of human modeling. Additionally, since the largest datasets are something like "stuff that humans tend to do" it seems very difficult to get large amounts of training data that won't include information that can be used to construct human models.

One can also think of a spectrum of "how much do you restrict the data you give your models?" Having data with information about humans is one extreme, giving the model all of common crawl is the other. Other points on this spectrum are "don't give the model information about itself" and "don't give the model information about deception." However, it seems like if you want data-cleaning to lend any semblance of safety, you have to be on the extreme end. Otherwise, you might as well include as much data as possible for capabilities.