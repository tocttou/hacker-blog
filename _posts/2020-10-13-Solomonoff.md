---
title: The Solomonoff Prior is Malign
published: true
---

Cross posted from [LessWrong](https://www.lesswrong.com/posts/Tr7tAyt5zZpdTwTQK/the-solomonoff-prior-is-malign).

This argument came to my attention from [this post](https://ordinaryideas.wordpress.com/2016/11/30/what-does-the-universal-prior-actually-look-like/) by Paul Christiano. I also found [this clarification](https://www.lesswrong.com/posts/jP3vRbtvDtBtgvkeb/clarifying-consequentialists-in-the-solomonoff-prior) helpful. I found [these counter-arguments](https://www.lesswrong.com/posts/Ecxevhvx85Y4eyFcu/weak-arguments-against-the-universal-prior-being-malign) stimulating and have included some discussion of them.

Very little of this content is original. My contributions consist of fleshing out arguments and constructing examples.

Thank you to Beth Barnes and Thomas Kwa for helpful discussion and comments.


# What is the Solomonoff prior?

The Solomonoff prior is intended to answer the question "what is the probability of X?" for any X, where X is a finite string over some finite alphabet. The Solomonoff prior is defined by taking the set of all Turing machines (TMs) which output strings when run with no input and weighting them proportional to $$2^{-K}$$, where $$K$$ is the description length of the TM (informally its size in bits).

The Solomonoff prior says the probability of a string is the sum over all the weights of all TMs that print that string.

One reason to care about the Solomonoff prior is that we can use it to do a form of idealized induction. If you have seen 0101 and want to predict the next bit, you can use the Solomonoff prior to get the probability of 01010 and 01011. Normalizing gives you the chances of seeing 1 versus 0, conditioned on seeing 0101. In general, any process that assigns probabilities to all strings in a consistent way can be used to do induction in this way.

[This post](https://www.lesswrong.com/posts/Kyc5dFDzBg4WccrbK/an-intuitive-explanation-of-solomonoff-induction#All_Algorithms) provides more information about Solomonoff Induction.


# Why is it malign?

Imagine that you wrote a programming language called python^10 that works as follows: First, it takes all alpha-numeric chars that are not in literals and checks if they're repeated 10 times sequentially. If they're not, they get deleted. If they are, they get replaced by a single copy. Second, it runs this new program through a python interpreter.

Hello world in python^10:

`ppppppppprrrrrrrrrriiiiiiiiiinnnnnnnnnntttttttttt('Hello, world!')`


Luckily, python has an `exec` function that executes literals as code. This lets us write a shorter hello world:

`eeeeeeeeexxxxxxxxxxeeeeeeeeeecccccccccc("print('Hello, world!')")`


It's probably easy to see that for nearly every program, the shortest way to write it in python^10 is to write it in python and run it with `exec`. If we didn't have `exec`, for sufficiently complicated programs, the shortest way to write them would be to specify an interpreter for a different language in python^10 and write it in that language instead.

As this example shows, the answer to "what's the shortest program that does X?" might involve using some roundabout method (in this case we used `exec`). If python^10 has some security properties that python didn't have, then the shortest program in python^10 that accomplished any given task would not have these security properties because they would all pass through `exec`. In general, if you can access alternative ‘modes’ (in this case python), the shortest programs that output any given string might go through one of those modes, possibly introducing malign behavior.

Let's say that I'm trying to predict what a human types next using the Solomonoff prior. Many programs predict the human:

1. Simulate the human and their local surroundings. Run the simulation forward and check what gets typed.
2. Simulate the entire Earth. Run the simulation forward and check what that particular human types.
3. Simulate the entire universe from the beginning of time. Run the simulation forward and check what that particular human types.
4. Simulate an entirely different universe that has reason to simulate this universe. Output what the human types in the simulation of our universe.

Which one is the simplest? One property of the Solmonoff prior is that it doesn't care about how long the TMs take to run, only how large they are. This results in an unintuitive notion of "simplicity"; a program that does something $$2^{10}$$ times might be simpler than a program that does the same thing $$2^9 - 1$$ times because the number $$2^{10}$$ is easier to specify than $$2^9 - 1$$.

In our example, it seems likely that "simulate the entire universe" is simpler than "simulate Earth" or "simulate part of Earth" because the initial conditions of the universe are simpler than the initial conditions of Earth. There is some additional complexity in picking out the specific human you care about. Since the local simulation is built around that human this will be easier in the local simulation than the universe simulation. However, in aggregate, it seems possible that "simulate the universe, pick out the typing" is the shortest program that predicts what your human will do next. Even so, "pick out the typing" is likely to be a very complicated procedure, making your total complexity quite high.

Whether simulating a different universe that simulates our universe is simpler depends a lot on the properties of that other universe. If that other universe is simpler than our universe, then we might run into an `exec` situation, where it's simpler to run that other universe and specify the human in their simulation of our universe.

This is troubling because that other universe might contain beings with different values than our own. If it's true that simulating that universe is the simplest way to predict our human, then some non-trivial fraction of our prediction might be controlled by a simulation in another universe. If these beings want us to act in certain ways, they have an incentive to alter their simulation to change our predictions.

At its core, this is the main argument why the Solomonoff prior is malign: a lot of the programs will contain agents with preferences, these agents will seek to influence the Solomonoff prior, and they will be able to do so effectively.


## How many other universes?

The Solomonoff prior is running all possible Turing machines. How many of them are going to simulate universes? The answer is probably "quite a lot".

It seems like specifying a lawful universe can be done with very few bits. Conway's Game of Life is very simple and can lead to very rich outcomes. Additionally, it seems quite likely that agents with preferences (consequentialists) will appear somewhere inside this universe. One reason to think this is that evolution is a relatively simple mathematical regularity that seems likely to appear in many universes.

If the universe has a hospitable structure, due to [instrumental convergence](https://www.wikiwand.com/en/Instrumental_convergence) these agents with preferences will expand their influence. As the universe runs for longer and longer, the agents will gradually control more and more.

In addition to specifying how to simulate the universe, the TM must specify an output channel. In the case of Game of Life, this might be a particular cell sampled at a particular frequency. Other examples include whether or not a particular pattern is present in a particular region, or the parity of the total number of cells.

In summary, specifying lawful universes that give rise to consequentialists requires a very simple program. Therefore, the predictions generated by the Solomonoff prior will have some influential components comprised of simulated consequentialists.


## How would they influence the Solomonoff prior?

Consequentialists that find themselves in universes can reason about the fundamental laws that govern their universe. If they find that their universe has relatively simple physics, they will know that their behavior contributes to the Solomonoff prior. To gain access to more resources in other universes, these consequentialists might seek to act in ways that influence the Solomonoff prior.

A contrived example of a decision other beings would want to manipulate is "what program should be written and executed next?" Beings in other universes would have an incentive to get us to write programs that were aligned with their values. A particularly interesting scenario is one in which they write themselves into existence, allowing them to effectively "break into" our universe.

For example, somewhere in the Solomonoff prior there is a program that goes something like: "Simulate this universe. Starting from the year 2100, every hour output '1' if there's a cubic meter of iron on the Moon, else output '0'."  By controlling the presence/absence of a cubic meter of iron on the Moon, we would be able to influence the output of this particular facet of the Solomonoff prior.

This example is a very complicated program and thus will not have much weight in the Solomonoff prior. However, by reasoning over the complexity of possible output channels for their universe, consequentialists would be able to identify output channels that weigh heavily in the Solomonoff prior. For example, if I was in the Game of Life, I might reason that sampling cells that were living in the initial conditions of the universe is simpler than sampling other cells. Additionally, sampling cells and reporting their outputs directly is simpler than sampling cells and reversing their values. Therefore, I might choose to control regions close to the initial live cells of the universe for purposes of exerting influence over the Solomonoff prior.

Additionally, consequentialists can send across many plausible channels at once, focus efforts on channels that are easy to control, send through channels that would not unduly decrease their values for other reasons, etc. Since the proportional weight in the Solomonoff prior drops off exponentially with respect to complexity, it’s possible only very small regions of space would need to be used to achieve a large fraction of the maximum possible influence.


## How much influence will they have?

A simple application of the [no free lunch](https://www.wikiwand.com/en/No_free_lunch_theorem) theorem shows that there is no way of making predictions that is better than the Solomonoff prior across all possible distributions over all possible strings. Thus, agents that are influencing the Solomonoff prior cannot be good at predicting, and thus gain influence, in all possible worlds.

In practice, this is irrelevant because consequentialists do not want to achieve equal predictive accuracy in all worlds; they only care about worlds in which being predictive results in increased influence. If I'm exerting control over the Solomonoff prior, I only care about influencing it in ways that might affect material consequences in other universes. For example, I do not care about gaining influence in universes inhospitable to life. Thus I will be able to trade off predictive power in universes I don't care about for predictive power in universes I do care about. This means that I should restrict my attention to all universes that have resources and the Solomonoff prior is being used to make important decisions, weighting appropriately.

Another interesting thing about the Solomonoff prior is it is actually a collection of priors. The "length" of a TM is defined relative to some universal TM. For any particular TM, it's length with respect to different universal TMs will vary; thus, there are versions of the Solomonoff prior that give more or less weight to any given TM. (Note that you can simulate universal TMs with universal TMs, so the difference across all programs will be bounded by a constant factor. However, this constant factor can be large, so the difference in relative weight between different Solomonoff priors can also be large).

In particular, this suggests a good strategy for consequentialists: find a universe that is using a version of the Solomonoff prior that has a very short description of the particular universe the consequentialists find themselves in.

The combined strategy is thus to take a distribution over all decisions informed by the Solomonoff prior, weight them by how much influence can be gained and the version of the prior being used, and read off a sequence of bits that will cause some of these decisions to result in a preferred outcome.

The question of how much influence any given universe of consequentialists will have is difficult to answer. One way of quantifying this is to think about how many “universes they don't care about” they're trading off for “universes they do care about” (really we should be thinking in terms of sequences, but I find reasoning about universes to be easier).

Since the consequentialists care about exerting maximum influence, we can approximate them as not caring about universes that don't use a version of the Solomonoff prior that gives them a large weight. This can be operationalized as only caring about universes that use universal TM in a particular set for their Solomonoff prior. What is the probability that a particular universe uses a universal TM from that set? I am not sure, but 1/million to 1/billion seems reasonable. This suggests a universe of consequentialists will only care about 1/million to 1/billion universes, which means they can devote a million/billion times the predictive power to universes they care about. This is sometimes called the “anthropic update”. ([This post](https://www.lesswrong.com/posts/peebMuCuscjkNvTnE/clarifying-the-malignity-of-the-universal-prior-the-lexical) contains more discussion about this particular argument.)

Additionally, we might think about which decisions the consequentialists would care about. If a particular decision using the Solomonoff prior is important, consequentialists are going to care more about that decision than other decisions. Conservatively, perhaps 1/1000 decisions are "important" in this sense, giving another 1000x relative weighting.

After you condition on a decision being important and using a particular version of the Solomonoff prior, it thus seems quite likely that a non-trivial fraction of your prior is being controlled by consequentialists.

An intuition pump is that this argument is closer to an existence claim than a for-all claim. The Solomonoff prior is malign if there *exists* a simple universe of consequentialists that wants to influence our universe. This universe need not be simple in an absolute sense, only simple relative to the other TMs that could equal it in predictive power. Even if most consequentialists are too complicated or not interested, it seems likely that there is at least one universe that is.


## Example


### Complexity of Consequentialists

How many bits does it take to specify a universe that can give rise to consequentialists? I do not know, but it seems like Conway’s Game of Life might provide a reasonable lower bound. 

Luckily, the [code golf community](https://codegolf.stackexchange.com/) has spent some amount of effort optimizing for program size. How many bytes would you guess it takes to specify Game of Life? Well, it depends on the universal TM. Possible answers include [6](https://codegolf.stackexchange.com/questions/3434/shortest-game-of-life/204279#204279), [32](https://codegolf.stackexchange.com/a/204279), [39](https://codegolf.stackexchange.com/a/12733), or [96](https://codegolf.stackexchange.com/a/51975).

Since universes of consequentialists can “cheat” by concentrating their predictive efforts onto universal TMs in which they are particularly simple, we’ll take the minimum. Additionally, my friend who’s into code golf (he wrote the 96-byte solution!) says that the 6-byte answer actually contains closer to 4 bytes of information.

To specify an initial configuration that can give rise to consequentialists we will need to provide more information. The [smallest infinite growth pattern](https://www.conwaylife.com/wiki/Infinite_growth) in Game of Life has been shown to need 10 cells. Another reference point is that a self-replicator with 12 cells exists in [HighLife](https://conwaylife.com/wiki/OCA:HighLife), a Game of Life variant. I’m not an expert, but I think an initial configuration that gives rise to intelligent life can be specified in an 8x8 bounding box, giving a total of 8 bytes.

Finally, we need to specify a sampling procedure that consequentialists can gain control of. Something like “read &lt;cell> every &lt;large number> time ticks” suffices. By assumption, the cell being sampled takes almost no information to specify. We can also choose whatever large number is easiest to specify (the [busy beaver](https://www.wikiwand.com/en/Busy_beaver) numbers come to mind). In total, I don’t think this will take more than 2 bytes.

Summing up, Game of Life + initial configuration + sampling method takes maybe 16 bytes, so a reasonable range for the complexity of a universe of consequentialists might be 10-1000 bytes. That doesn’t seem like very many, especially relative to the amount of information we’ll be conditioning the Solomonoff prior on if we ever use it to make an important decision. 


### Complexity of Conditioning

When we’re using the Solomonoff prior to make an important decision, the observations we’ll condition on include information that:

1. We’re using the Solomonoff prior
2. We’re making an important decision
3. We’re using some particular universal TM

How much information will this include? Many programs will not simulate universes. Many universes exist that do not have observers. Among universes with observers, some will not develop the Solomonoff prior. These observers will make many decisions. Very few of these decisions will be important. Even fewer of these decisions are made with the Solomonoff prior. Even fewer will use the particular version of the Solomonoff prior that gets used.

It seems reasonable to say that this is at least a megabyte of raw information, or about a million bytes. (I acknowledge some cart-horse issues here.)

This means that after you condition your Solomonoff prior, you’ll be left with programs that are at least a million bytes. As our Game of Life example shows, it only takes maybe 10-1000 of these bytes to specify a universe that gives rise to consequentialists. You have approximately a million bytes left to specify more properties of the universe that will make it more likely the consequentialists will want to exert influence over the Solomonoff prior for the purpose of influencing this particular decision.


# Why might this argument be wrong?


## Inaccessible Channels


### Argument

Most of the universe is outside of humanity's light-cone. This might suggest that most "simple" ways to sample from our universe are currently outside our influence, meaning that the only portions of the Solomonoff prior we can control are going to have an extremely low weight.

In general, it might be the case that for any universe, consequentialists inside that universe are going to have difficulty controlling simple output channels. For example, in Game of Life, a simple way to read information might sample a cell particular cell starting at t=0. However, consequentialists in Game of Life will not appear until a much later time and will be unable to control a large initial chunk of that output channel.


### Counter-argument

[Paul Christiano](https://www.lesswrong.com/posts/Ecxevhvx85Y4eyFcu/weak-arguments-against-the-universal-prior-being-malign?commentId=BtF3BcEbuH9Wjvmhe) points out that the general form of this argument also applies to other TMs that compose of your Solomonoff prior. For example, when predicting what I'll type next, you would "want" to simulate me and predict what I would type starting at some time T. However, this is a pretty complicated way of sampling. The fact that simple sampling procedures are less predictive doesn't _asymmetrically_ penalize consequentialists. The consequentialists universe and sampling method only have to be simple relative to other programs that are equally good at predicting.

One might also note that large numbers can be produced with relatively few bits, so "sample starting at &lt;large number>" is not much more complicated than "sample starting at 0".


## Speedy Channels


### Argument

There are many simple ways of sampling from universes very quickly. For example, in Game of Life, one can sample a cell every time-tick. It seems feasible for consequentialists to simulate Earth in the Game of Life, but not feasible to simulate Earth such that they can alter a specific cell every time tick per the simulation.


### Counter-argument

Consequentialists in the Game of Life could simply simulate Earth, compute the predictions, then later broadcast them along very fast sampling channels. However, it might be the case that building a machine that alters a cell arbitrarily every time tick is impossible. In our universe, there might be sample procedures that physics does not permit us to exert arbitrary control over, e.g. due to speed of light limitations. If this is the case, consequentialists will direct efforts towards the simplest channel they can control.


## Computational Burden


### Argument

Determining how to properly influence the Solomonoff prior requires massive computation resources devoted to simulating other universes and how they're going to use the Solomonoff prior. While the Solomonoff prior does not penalize extremely long run-times, from the perspective of the consequentialists doing the simulating, run-times will matter. In particular, consequentialists will likely be able to use compute to achieve things they value (like we are capable of doing). Therefore, it would be extremely costly to exert influence over the Solomonoff prior, potentially to the point where consequentialists will choose not to do so.


### Counter-argument

The computational burden of predicting the use of the Solomonoff in other universes is an empirical question. Since it's a relatively fixed cost and there are many other universes, consequentialists might reason that the marginal influence over these other universes is worth the compute. Issues might arise if the use of the Solomonoff prior in other universes is very sensitive to precise historical data, which would require a very precise simulation to influence, increasing the computational burden.

Additionally, some universes will find themselves with more computing power than other universes. Universes with a lot of computing power might find it relatively easy to predict the use of the Solomonoff prior in simpler universes and subsequently exert influence over them.


## Malign implies complex


### Argument

A predictor that correctly predicts the first N bits of a sequence then switches to being malign will be strictly more complicated than a predictor that doesn't switch to being malign. Therefore, while consequentialists in other universes might have _some_ influence over the Solomonoff prior, they will be dominated by non-malign predictors.


### Counter-argument

This argument makes a mistaken assumption that the malign influence on the Solomonoff prior is in the form of programs that have their "malignness" as part of the program. The argument given suggests that simulated consequentialists will have an instrumental reason to be powerful predictors. These simulated consequentialists have reasoned about the Solomonoff prior and are executing the strategy of "be good at predicting, then exert malign influence", but this strategy is not hardcoded so exerting malign influence does not add complexity.


## Canceling Influence


### Argument

If it's true that many consequentialists are trying to influence the Solomonoff prior, then one might expect the influence to cancel out. It's improbable that all the consequentialists have the same preferences; on average, there should be an equal number of consequentialists trying to influence any given decision in any given direction. Since the consequentialists themselves can reason thus, they will realize that the expected amount of influence is extremely low, so they will not attempt to exert influence at all. Even if some of the consequentialists try to exert influence anyway, we should expect the influence of these consequentialists to cancel out also.


### Counter-argument

Since the weight of a civilization of consequentialists in the Solomonoff prior is penalized exponentially with respect to complexity, it might be the case that for any given version of the Solomonoff prior, most of the influence is dominated by one simple universe. Different values of consequentialists imply that they care about different decisions, so for any given decision, it might be that very few universes of consequentialists are both simple enough that they have enough influence and care about that decision.

Even if for any given decision, there are always 100 universes with equal influence and differing preferences, there are strategies that they might use to exert influence anyway. One simple strategy is for each universe to exert influence with a 1% chance, giving every universe 1/100 of the resources in expectation. If the resources accessible are vast enough, then this might be a good deal for the consequentialists. Consequentialists would not defect against each other for the reasons that motivate [functional decision theory](https://arxiv.org/pdf/1710.05060.pdf).

More exotic solutions to this coordination problem include [acausal trade](https://www.nickbostrom.com/papers/porosity.pdf) amongst universes of different consequentialists to form collectives that exert influence in a particular direction.

Be warned that this leads to [much weirdness](https://slatestarcodex.com/2018/04/01/the-hour-i-first-believed/).


# Conclusion

The Solomonoff prior is very strange. Agents that make decisions using the Solomonoff prior are likely to be subject to influence from consequentialists in simulated universes. Since it is difficult to compute the Solomonoff prior, this fact might not be relevant in the real world.

However, Paul Christiano [applies roughly the same argument](https://www.lesswrong.com/posts/roA83jDvq7F2epnHK/better-priors-as-a-safety-problem) to claim that the implicit prior used in neural networks is also likely to generalize catastrophically. (See [Learning the prior](https://www.lesswrong.com/posts/SL9mKhgdmDKXmxwE4/learning-the-prior) for a potential way to tackle this problem).


# Addendum

Warning: highly experimental interesting speculation.


## Unimportant Decisions

Consequentialists have a clear motive to exert influence over important decisions. What about unimportant decisions?

The general form of the above argument says: "for any given prediction task, the programs that do best are disproportionately likely to be consequentialists that _want_ to do well at the task". For important decisions, many consequentialists would instrumentally want to do well at the task. However, for unimportant decisions, there might be consequentialists that want to make good predictions. These consequentialists would still be able to concentrate efforts on versions of the Solomonoff prior that weighted them especially high, so they might outperform other programs in the long run.

It's unclear to me whether or not this behavior would be malign. One reason why it might be malign is that these consequentialists that care about predictions would want to make our universe more predictable. However, while I am relatively confident that arguments about instrumental convergence should hold, speculating about possible preferences of simulated consequentialists seems likely to produce errors in reasoning.


## Hail mary

[Paul Christiano](https://ordinaryideas.wordpress.com/2016/11/30/what-does-the-universal-prior-actually-look-like/) suggests that humanity was desperate enough to want to throw a "[hail mary](https://www.nickbostrom.com/papers/porosity.pdf)", one way to do this is to use the Solomonoff prior to construct a utility function that will control the entire future. Since this is a very important decision, we expect consequentialists in the Solomonoff prior to care about influencing this decision. Therefore, the resulting utility function is likely to represent some simulated universe.

If arguments about [acausal trade](https://wiki.lesswrong.com/wiki/Acausal_trade) and value handshakes hold, then the resulting utility function might contain some fraction of human values. Again, this leads to [much weirdness](https://slatestarcodex.com/2018/04/01/the-hour-i-first-believed/) in [many ways](https://www.lesswrong.com/posts/3kN79EuT27trGexsq/when-is-unaligned-ai-morally-valuable#Do_any_AIs_deserve_our_sympathy_).


## Speed prior

One reason that the Solomonoff prior contains simulated consequentialists is that its notion of complexity does not penalize runtime complexity, so very simple programs are allowed to perform massive amounts of computation. The [speed prior](https://www.wikiwand.com/en/Speed_prior) attempts to resolve this issue by penalizing programs by an additional logarithm of the amount of time for which it's run.

The speed prior might reduce the relative weighting of universes with consequentialists because such programs have to be run for a very long time before they start producing reasonable predictions. The consequentialists have to gain control of their universe, understand their fundamental laws of physics, simulate other universes, then manipulate the speed prior. This might all take a very long time, causing consequentialists to be dominated by other programs.

In general, penalizing slowness might cause programs to "waste" less time on simulating consequentialists, devoting more computation towards performing the prediction task. However, it still might be the case that a universe that has very fast consequentialists might still end up dominating.

Evan Hubinger also provides [an argument](https://www.lesswrong.com/posts/fM5ZWGDbnjb7ThNKJ/are-minimal-circuits-deceptive) that even very fast programs are possibly malign. The key insight is that even though your program needs to be fast, it can be running programs that are themselves less fast. For example, one possible fast way to solve a classification problem is to search to find a neural network, then use that network for inference. However, if you wanted your search to find a fast neural network, then the search itself might take longer, resulting in a net increase in speed. Thus, time "waste" can manifest in programs that were explicitly optimized to not "waste" time. This "wasted" time could potentially be used for malign optimization, in this case for gaining influence over the speed prior.


## Randomized prior

A potential way to reduce the influence consequentialists have on a decision made by the Solomonoff prior is to randomize the particular version of the prior that gets used. For example, we might make the particular universal TM we use dependent on very precise historical data. Thus, it would be very costly for consequentialists to simulate this history, and thus costly to predict which form of the Solomonoff prior we used.

If consequentialists can’t predict which Solomonoff prior we are going to use, no particular civilization of consequentialists will have the large advantage conferred by the anthropic update. Therefore, one might hope that all civilizations of consequentialists will not care about that particular decision.

This argument makes a couple of assumptions. First, it assumes that simulating very precise histories is difficult; it might not be difficult for all universes. Second, it assumes that the universes through which influence is spread cannot coordinate, which might be possible for through [acausal means](https://wiki.lesswrong.com/wiki/Acausal_trade). 


## Symmetry considerations

The way that humanity reasons is evidence for the way that consequentialists in other universes will reason. If humanity reasons that the Solomonoff prior is malign and therefore is unwilling to use it to make decisions, then consequentialists in other universes might do likewise. These universes would not use the Solomonoff prior to make decisions.

The resulting state is that everyone is worried about the Solomonoff prior being malign, so no one uses it. This means that no universe will want to use resources trying to influence the Solomonoff prior; they aren’t influencing anything.

This symmetry obviously breaks if there are universes that do not realize that the Solomonoff prior is malign or cannot coordinate to avoid its use. One possible way this might happen is if a universe had access to extremely large amounts of compute (from the subjective experience of the consequentialists). In this universe, the moment someone discovered the Solomonoff prior, it might be feasible to start making decisions based on a close approximation.


## Recursion

Universes that use the Solomonoff prior to make important decisions might be taken over by consequentialists in other universes. A natural thing for these consequentialists to do is to use their position in this new universe to also exert influence on the Solomonoff prior. As consequentialists take over more universes, they have more universes through which to influence the Solomonoff prior, allowing them to take over more universes.

In the limit, it might be that for any fixed version of the Solomonoff prior, most of the influence is wielded by the simplest consequentialists according to that prior. However, since complexity is penalized exponentially, gaining control of additional universes does not increase your relative influence over the prior by that much. I think this cumulative recursive effect might be quite strong, or might amount to nothing. 