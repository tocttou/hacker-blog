---
title: An Intuitive Guide to Garrabrant Induction
---

*Crossposted from the [AI Alignment Forum](https://alignmentforum.org/posts/y5GftLezdozEHdXkL/an-intuitive-guide-to-garrabrant-induction). May contain more technical jargon than usual.*

This post is a high-level summary of the core insights and arguments in [Logical Induction](https://intelligence.org/files/LogicalInduction.pdf), a MIRI paper from 2016. It’s intended for people without much mathematical training. Numbers in [brackets] indicate the section of the paper from which I am drawing. 

A brief note on naming: Solomonoff exhibited an uncomputable algorithm that does idealized induction, which we call [Solomonoff induction](https://www.lesswrong.com/posts/Kyc5dFDzBg4WccrbK/an-intuitive-explanation-of-solomonoff-induction). Garrabrant exhibited a computable algorithm that does logical induction, which we have named Garrabrant induction. 

Thanks to Mauricio Baker for helpful comments. My editor is Justis Mills. Graphics are done by Sabrina Chwalek.


# Introduction [1]

Suppose I run a computer program. What does it output? You don’t know the code, so it could do basically anything. You’re missing key information to resolve the question. However, even if you did know the source code, you might still be ignorant about what it would _do_. You have all the necessary information per se, and a perfect reasoner could solve it instantly, but it might take an unrealistic amount of effort for _you_ to interpret it correctly.

The former kind of uncertainty is _empirical_. You have to look at the world and make observations about the source code of the program, how my computer interprets the code, etc. Other examples of empirical uncertainty: not knowing what the weather is, not knowing what time it is, not knowing the name of your friend, etc.

The latter kind of uncertainty is _logical_. Even after you’ve looked at the program and seen the source code, you still might not know what the source code will output. For instance, suppose you saw that the program printed the 173,498th digit of $$pi$$. You know what the program will do, but you don’t know the results of that process. Other examples of logical uncertainty: not knowing if 19483 is prime, not knowing whether 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 is even, not knowing if 1/1/2000 was a Monday, etc. The bottleneck in these cases isn’t missing data, but rather missing _computation_ - you haven’t yet exerted the required energy to figure it out, and it might not always be worth it with the tools at your disposal.

Let us call the process of “properly” managing logical uncertainty _logical induction_ and reasoners that employ logical induction _logical inductors_.


## Bayesian Insufficiency

Naively, one might assume that Bayesian reasoning, a general method for handling empirical uncertainty, might extend itself naturally to logical uncertainty. However, this is not the case. Imagine that I have two boxes. Suppose that you know I’m either going to place either one blue ball into each or one red ball into each. Your beliefs about what color ball is in each of the boxes are now linked; if you see a blue ball in one of the boxes, you know that the other box contains a blue ball. 

Now imagine that I give one of the boxes to my friend Alice and the other box to my friend Bob. You know that Alice really likes matching; if she gets a blue ball, she’ll wear blue clothes, if she gets a red ball, she’ll wear red clothes. You also know that Bob really likes traveling; if he gets a blue ball, he’ll go to the ocean, if he gets a red ball, he’ll go to the desert. Since your beliefs about the color of balls Alice and Bob received are linked, your beliefs about where Bob travels and what color Alice wears are also linked. If you see Alice wearing blue, it’s more likely she got a blue ball than a red ball, which means Bob also probably got a blue ball, which means Bob went to the ocean. Suppose that Bob has friends Carol and Dave. Carol likes the ocean, so Bob goes to the ocean with Carol, and Dave likes the desert, so Bob goes to the desert with Dave. Now your beliefs about what Alice is wearing are linked to your beliefs about the locations of Carol and Dave.

Proper Bayesian reasoners immediately realize all of these connections. When they see Alice wearing red, a Bayesian reasoner realizes that this implies that Bob also got a red ball, which implies that Bob likely went to the desert, which implies that Dave likely went with him to the desert.

The fundamental problem is that the Bayesian framework assumes logical omniscience: that we can always perform any computation or feat of logic at no cost. A Bayesian reasoner maintains a list of all possible hypotheses, then updates all of them according to Bayes’ rule upon encountering new evidence. Knowing how a hypothesis interacts with a piece of definite evidence requires logical deduction, but bounded reasoners have finite resources with which to deduce. 

If we want to work in a bounded setting, Bayesian reasoning fails for complicated updates. Can we construct an analog of Bayesian reasoning for a bounded reasoner? 


# The Logical Induction Criterion [3]

A reasoner is a logical inductor if it satisfies the _logical induction criterion_, which states that it cannot be exploited by an efficiently computable trading algorithm. We will motivate this criterion and unpack what this means.


## Dutch Books

A _[Dutch book](https://en.wikipedia.org/wiki/Dutch_book)_ is a series of bets that will yield a sure loss (or sure gain on the other side). For example, if I put my \$2 against your \$1 that a coin will be heads, and my \$2 against your \$1 that a coin will be tails, then no matter the outcome of the coin flip, I will be down \$1. A reasoner is _Dutch-bookable_ if there exists a Dutch book where all of its bets look fair from that reasoner’s perspective. A [theorem of De Finetti](https://link.springer.com/article/10.1007/s11229-020-02825-7#:~:text=The%20coherence%20theorem%20is%20one,the%20theory%20of%20subjective%20probability.&text=The%20idea%20of%20deriving%20probabilities,1931%2C%201937%2C%201974) shows that, under certain assumptions, a reasoner is not Dutch-bookable if and only if its beliefs satisfy the axioms of probability theory, which makes it a Bayesian reasoner.

As a simple example, suppose I violate the axiom that $$P(\text{Heads}) + P(\text{Not Heads}) = 1$$ by having $$P(\text{Not Heads}) = P(\text{Heads}) = \frac{1}{3}$$. Given my stated probabilities, I think a 2:1 bet that the coin is $$\text{Heads}$$ is fair and a 2:1 bet that the coin is $$\text{Not Heads}$$ is fair; this combination of bets that is guaranteed to lose me \$1, making me Dutch-bookable. Generalizing this point, it is possible to construct a Dutch book anytime the probability I assign to a set of mutually exclusive and exhaustive events does not sum to exactly 1.

Being universally not Dutch-bookable is a very difficult requirement to satisfy for a bounded reasoner. The reasoner must consider all sequences of bets it would accept and ensure that none of those lead to a sure loss, including sequences that contain tricky logical implications between various beliefs. However, this stringent setup supposes that all Dutch books are equally easy to find.

With bounded computational power, it is impossible to construct an ideal Bayesian reasoner. However, it is possible for a reasoner to _approximately_ satisfy the [probability theory axioms](https://en.wikipedia.org/wiki/Probability_axioms), making these reasoners arbitrarily difficult to Dutch book. Intuitively, we might want to relax the binary condition of “Dutch-bookable” into a more quantitative measure: in practice, how difficult is it to Dutch book our reasoner? Reasoners that are difficult to Dutch book might be “more Bayesian” than reasoners that are easy to Dutch book.

In essence, this is the solution proposed by Garrabrant et al.: a reasoner is a logical inductor if a Dutch book cannot be _efficiently computed_. Here, “efficiently computable” means “computable in [polynomial time](https://en.wikipedia.org/wiki/Time_complexity).”[^poly] What the Dutch book must be efficiently computable with respect to will be fleshed out in later sections.

[^poly]: This definition is not sensitive to the precise definition of “efficiently computable.” Polynomials are used for their desirable closure properties, but other definitions will also yield logical inductors that satisfy more relaxed/strict versions of the same properties with high/lower runtime complexity.


## Deductive Processes [3.2]

An empirical inductor that is observing the world eventually learns to better predict its observations. Abstractly, the empirical inductor is being fed a stream of empirical evidence, which we will call an _observation process_, and learns to predict it. For example, an inductor that observed the sun rising every day so far would learn to predict that the sun would rise the next day. We desire that empirical inductors outpace their underlying observation process by predicting what it will show, giving high probabilities to evidence it observes, and low probabilities to evidence it does not observe. Examples of observation processes are a video feed of the world, various high-level features of a video game, and an 18th-century romance novel. Solomonoff induction is an example of an ideal empirical inductor. 

![An empirical inductor](https://markxu.com/assets/empirical_inductor.jpeg)

A logical inductor that is observing logical statements eventually learns to predict other statements. Abstractly, the logical inductor is being fed a stream of logical evidence, which we will call a _deductive process_, and learns to predict it. For example, an inductor that observed that all non-two primes were odd would learn to predict that the next prime they discovered will also be odd. We desire that logical inductors outpace the deductive process by predicting what they will prove, giving high probabilities to things that get proved true, and low probabilities to things that get proved false. Examples of deductive processes are peer-reviewed publications, brute-force generated proofs, and the consensus of a mathematical community. We will construct an ideal logical inductor in a later section.

![A logical inductor](https://markxu.com/assets/logical_inductor.jpeg)

As the above hints at, induction is performed relative to some evidence stream. At best, one can hope for an inductor that can quickly learn a wide variety of evidence streams; [no free lunch](https://en.wikipedia.org/wiki/No_free_lunch_in_search_and_optimization) theorems show that it is impossible to construct an inductor that can learn _all_ evidence streams. Therefore, reasoners can only be empirical inductors relative to some observation process and can only be logical inductors relative to some deductive process.

Notice also that all observation processes yield discrete observations – a single frame of video, a vector of floats, or a single word. Similarly, deductive processes must yield discrete sets of true statements. For convenience, we will imagine that each day, our deductive process yields everything that has been shown to be true/false up until that day.

The central example of a deductive process we will use is Peano Prover, a computer program that yields theorems of Peano Arithmetic (PA) by giving all theorems provable in one character on day one, all theorems provable in two characters on day two, all theorems provable in three characters on day three, etc. This deductive process is _complete_ – it will eventually prove all provable theorems of PA. This logical inductor can thus be thought of as someone who on day $$n$$ knows all PA-theorems provable in $$\leq n$$ characters and must manage their uncertainty about theorems that have not yet been proved.


## Markets [3.1]

Normal markets involve trading assets like food, stocks, and oil. Under some assumptions, the price of each asset should be approximately equal to its intrinsic value summed over time with the appropriate discount rate. If the price was lower than this, people could make money buying the asset. If the price was higher, people could make money selling. The price will thus tend towards its “true value” in some sense.

Prediction markets involve trading assets whose values are artificially tied to future events. For example, I might create an asset that is artificially worth \$1 if the sky is blue on January 1st 2025 and \$0 otherwise. Suppose I think that this event will happen with 80% chance. To me, the value of this asset is $$0.8 * \$1 = \$0.8$$, so I will buy the asset if it’s worth less than \$0.8 and sell if it’s worth more. If there are many people trading this asset, the price will roughly be equal to the weighted average of the subjective probabilities of all the individual traders.

A simple conception of markets has traders all trading with each other. If I want to buy an asset for some price, I have to find another trader willing to sell at that price. This form of pairwise trading works at small scales but is very inefficient as the number of traders grows. At large scales, markets often contain _market makers_, individual traders with lots of money that are willing to both buy and sell many different assets. These market makers will buy assets at a price lower than they’re willing to sell them at, pocketing the difference as profit. For example, I might be willing to buy an ounce of gold for \$1000 and sell for \$1010. Assuming that approximately as many people buy from me as sell to me, I will always make a slight profit.

We will force logical inductors to be market makers for prediction assets over all mathematical statements, with the value of the prediction assets being determined by a complete deductive process, as described above. If our deductive process says a statement is true, the logical inductor is obligated to buy that statement at \$1. If our deductive process says a statement is false, the logical inductor is obligated to sell that statement at \$0. In contrast to market makers in the real world, we will treat the probabilities our logical inductor places on various statements as the price they’re willing to both buy and sell at.

In this framework, a Dutch book is not a one-time sequence of traders that yields guaranteed profit for the trader, but rather a _trading strategy_ that consistently generates such sequences, yielding the trader unbounded returns over time. A logical inductor can be thought of as a market maker for which a trading strategy that efficiently generates Dutch books cannot be found.


## Traders [3.4]

In real markets, traders look at the world and the history of an asset, then do some thinking and decide how much to buy or sell. If, however, we are making a market over logical sentences as decided by some fixed deductive process, the “world” is simply the history of market prices. As such, traders look at the history of prices assigned to some sentence, do some thinking, then decide how much to buy or sell.

More precisely, a trading strategy for day $$n$$ is a particularly nice (including continuous) function from the market’s price history up to day $$n$$ to the set of all finite buy or sell orders.[^nice] For example, a trading strategy might say to buy shares 3 of “$$1 + 1 = 2$$” on odd numbered days, or to buy 6 of the cheaper of “$$1 + 2 = 3$$” and “$$2 + 1 = 3$$”. A trader is a function that takes in some integer $$n$$ and gives a trading strategy for day $$n$$. Trading strategies can be conditional, subject to the niceness constraint.

We call a trader _efficiently computable_ if the runtime of the trader is polynomial in $$n$$. That is, each day our traders have access to the market history and get to do more computation to analyze data and find patterns, but the amount of computation they get must be polynomial in the length of the market history.

[^nice]: What is meant by nice is described in Definition 3.4.3.

We can think of our reasoner as trading against all efficiently computable traders. Each day, the reasoner assigns probabilities to logical sentences and the traders trade against the logical inductor. From the reasoner’s perspective, it only makes fair trades. Clever trading strategies will buy (sell) sentences that are shown by the deductive process to be true (false).

Since the reasoner is bounded, on any given day it will be Dutch-bookable. We desire our reasoner to eventually correct all Dutch books that efficiently computable trading algorithms can find against it. In particular, we desire our reasoner does not expose itself to _unbounded_ expected losses from any given efficiently computable trading algorithm. 


## Exploitation [3.5]

Logically omniscient Bayesian reasoners do not take sequences of bets that result in a sure loss. In other words, they do not take sequences of bets that lose them money in all worlds consistent with the (empirical) evidence. Since logically omniscient Bayesian reasoners would take arbitrarily scaled-up versions of bets, this condition is equivalent to the condition that Bayesian reasoners do not expose themselves to guaranteed unbounded loss.

We seek to extend this notion to computationally bounded reasoners. We will do this by first developing a notion of what it means for a world to be consistent with a set of logical evidence, then relaxing “guaranteed unbounded loss” to “expected unbounded loss.” We will call an reasoner _exploitable_ if it’s vulnerable to unbounded loss, and _unexploitable_ otherwise (all relative to some fixed deductive process).

Bayesian reasoners induct over observation processes by maintaining a set of all empirical universes and eliminating those that contradict the empirical evidence. Naively, our logical inductor will induct over deductive processes by maintaining a set of all logical universes and eliminating those that are inconsistent with logical evidence.

This formulation has issues. Suppose that on day 1, the deductive process gives you the axioms of Peano arithmetic. This immediately rules out all logical universes that are inconsistent with the PA axioms. More specifically, it rules out all worlds that contain one of EVEN := “the 173,498th digit of $$pi$$ is even” and ODD := “the 173,498th digit of $$pi$$ is odd.” The problem is that determining whether a given logical universe is consistent requires determining how every logical statement connects to every other, which is computationally infeasible.

Instead, we relax the notion of “inconsistent with logical evidence” from logical consistency to _propositional consistency_. Instead of calling a logical universe inconsistent when it asserts two statements whose _contents_ contradict, e.g. EVEN and ODD, we call a universe inconsistent when it asserts two statements whose _form_ contradicts, e.g., EVEN and not EVEN. To know the former is inconsistent requires knowing “EVEN implies not ODD” while knowing the latter is inconsistent only requires knowing basic logical facts. Some propositionally consistent worlds will be logically inconsistent, but this is fine. Importantly, since propositional consistency is a syntactic property, our reasoner can use its bounded computation to determine whether or not a given logical world is propositionally consistent with the output of a deductive process.

More precisely, we will call a world propositionally consistent with a set of statements if the true assignments in that world agree with logical connectives, i.e., A is true if and only if not A is false, A and B is true if and only if A is true and B is true, etc. In this framework, we can imagine starting with the set of all worlds that are internally propositionally equivalent, then eliminating worlds each successive day as the deductive process yields more logical truths. A trader _exploits_ the market (relative to a deductive process) if there is a sequence of worlds, one for each day, that are propositionally consistent with the deductive process in which the trader makes unboundedly large sums of money (without there also being a sequence in which the trader loses an unbounded amount of money). For example, if, every day, the trader purchases a sentence for \$0.50 that will be output by the deductive process 10 days later, the trader effectively earns \$0.50 every day, which is unbounded in the limit, while only staking a maximum of \$5.

The logical induction criterion says that there does not exist such a trader that can exploit the market our reasoner makes over logical sentences. More precisely, a market is said to satisfy the logical induction criterion relative to a deductive process if there is no efficiently computable trader that exploits the market relative to the deductive process. Such a market is said to be a logical inductor over the deductive process.

**The main result of Garrabrant et al. is an algorithm that can price logical sentences in a way that satisfies the logical induction criterion over any deductive process.**


# Selected Properties of Logical Inductors [4]

The efficient market hypothesis states that stock prices reflect all available information. If true, this hypothesis implies that consistently making money off the stock market is impossible; large hedge funds have already exploited any statistical irregularities in stock prices and it is extremely difficult to make money without insider knowledge. For instance, stock prices are higher on Thursdays, this will be discovered by large hedge funds, who will buy on Wednesday and sell on Thursday until stock prices are no longer higher on Thursdays.

If a market satisfies the logical induction criterion (relative to some deductive process), all polynomial-time strategies that make money consistently will eventually cease to work. In particular, if a logical inductor ever fails to learn a polynomial-time method of identifying patterns in logic, a trader can exploit this pattern to make unbounded profits. For instance, if every 139th digit of $$\pi$$ turns out to be 7, a trader could buy sentences that stated the 139th, 278th, 417th, etc. digits were 7. If it were always possible for the trader to buy these sentences at some fixed amount less than \$1, the trader would make unbounded profits. Thus, the logical inductor must price all these sentences at ~\$1 in the limit. In general, logical inductors eventually learn all polynomial-time methods for identifying patterns in logic.

We will go over some of the properties that logical inductors possess. For all of these properties, we will argue that logical inductors possess them by exhibiting trading strategies that would generate unbounded profits if the property didn’t hold. Some of these trading strategies will not be continuous, but can be relaxed into continuous forms. 

For the following, we will use Peano Prover as our deductive process.

The fact that many desirable properties follow from the logical induction criteria suggests that this criterion captures a portion of what it means to do good reasoning.


## Convergence and Coherence [4.1]

In the limit, the prices of a logical inductor describe a belief state which is fully logically consistent and represents a probability distribution over all consistent worlds.

Imagine that there exists a sentence such that the prices a logical inductor assigns to that sentence do not converge. If the prices do not converge, then they must [oscillate](https://en.wikipedia.org/wiki/Oscillation_(mathematics)) infinitely around some point. A trader could exploit the logical inductor by buying the sentence at a high point on the oscillation and selling at a low one. Since the oscillation never ceases, the trader can earn unbounded profits. Therefore, the prices a logical inductor assigns to any given sentence must converge.

Imagine that the limiting probabilities assigned to sentences by our logical inductor are not coherent. By a [theorem of Gaifman](https://link.springer.com/article/10.1007/BF02759729), coherence is equivalent to assigning probability 1 to provable sentences, probability 0 to disprovable sentences, and a third condition we won’t cover. Suppose that the limiting probability our logical inductor assigns to a provable sentence is $$\varepsilon$$ less than 1. Since the sentence is provable, our deductive process will eventually output the sentence, obligating our logical inductor to buy it for \$1. Thus, a trader who buys one share of the sentence for \$$$1-\varepsilon$$ and sells it for \$1 will make \$$$\varepsilon$$ profit, which can be done daily to achieve unbounded profits in the limit. By assumption, our logical inductor is unexploitable, so it must assign probability 1 to provable sentences. A similar argument shows that our logical inductor must assign probability 0 to false sentences.

These properties justify interpreting logical inductor market prices as probabilities. However, there are other ways to assign probabilities to logical sentences. The main desirable property of logical inductors is that their beliefs become approximately consistent quickly, outpacing the underlying deductive process.


## Timely Learning [4.2]

Reasoners that mimic the underlying deductive process will also assign probability 1 to provable statements. The real trick is to assign probabilities in a manner that outpaces the underlying deductive process.

Call a sequence of theorems _efficiently computable_ if there exists a polynomial-time program that can enumerate the theorems. Imagine an efficiently computable sequence of theorems, each of which is progressively harder to prove. More specifically, the first statement takes 1 character, the second takes 10 characters, the third takes 100 characters, the fourth takes 1000 characters, etc. Since Peano Prover’s speed is tied to the number of characters required for proof, one might imagine that we will have to wait until around the $$10^n$$th day until the probabilities our logical inductor assigns to the $$n$$th theorem approach 1. However, our logical inductor will actually learn much faster, eventually converging to assigning probabilities close to 1 to the $$n$$th theorem on the $$n$$th day.

To see this, suppose that on day $$n$$, our logical inductor always assigns probability less than $$1 - \varepsilon$$ to the $$n$$th theorem in our sequence, a feasible trading strategy because our sequence of theorems is efficiently computable. A trader that buys theorem $$n$$ on day $$n$$ will always make $$\varepsilon$$ profit. If $$\varepsilon$$ is bounded away from $$0$$, then this trader will exploit the market. Thus $$\varepsilon$$ must go to zero and our logical inductor will converge to assigning probability ~1 to the $$n$$th theorem by the $$n$$th day.

In general, for any efficiently computable sequence of sentences, we shall say our logical inductor assigns some sequence of probabilities to this sequence of sentences in a _timely manner_ if it converges to assigning the $$n$$th probability to $$n$$th sentence by day $$n$$. The result above shows that our logical inductor assigns the sequence of all 1s to any efficiently computable sequence of theorems in a timely manner.

Considering the probability assigned to the $$n$$th sentence on the $$n$$th day is arbitrary; we might hope that a good reasoner would learn faster than that. Luckily, our logical inductor does! If a sequence of sentences is efficiently computable, then we can break it up into two efficiently computable sequences, one enumerating the even sentences and the other enumerating the odd sentences. Since our logical inductor learns _any_ efficiently computable sequence in a timely manner, it will learn both of these faster subsequences, implying that it will eventually learn to assign “accurate” probabilities to the $$2n$$th sentence of the original sequence on the $$n$$th day. Similar constructions show that our logical inductor will eventually learn to assign “accurate” probabilities to the $$P(n)$$th sentence of the original sequence on the $$n$$th day, where $$P$$ is any polynomial.


## Learning Statistical Patterns [4.4]

If a Bayesian reasoner encounters a truly random sequence, it will eventually learn to assign probabilities that correspond to high-level statistical patterns.[^randomness] For example, if a Bayesian reasoner encounters a truly random fair coin, it will eventually learn to predict heads with ½ chance and tails with ½ chance.

[^randomness]: The reasoner must have access to randomness. 

We will show that logical inductors also learn appropriate statistical summaries of “random” processes. For example, a good reasoner thinking about the $$10^{124987692}$$th digit of $$\pi$$ should assign ~10% chance to it being a 7, assuming no efficient method of predicting that digit exists. However, for computationally unbounded reasoners, there is no such thing as a “random” logical sentence, as the $$10^{124987692}$$th digit of $$\pi$$ is either 7 or not 7. We thus define randomness relative to the amount of computation our logical inductor has. More specifically, we define a sequence to be _pseudorandom_ (relative to our logical inductor) if there is no efficiently computable way to pick out a subsequence that is true with higher frequency than the sequence as a whole.

Suppose that we have an efficiently computable sequence that is pseudorandom with probability $$p$$. Our logical inductor will learn to assign $$p$$ to this sequence in a timely manner.

To see this, suppose that our logical inductor infinitely often assigned probability at least some fixed $$\varepsilon$$ away from $$p$$ to the $$n$$th sentence of this pseudorandom sequence on the $$n$$th day. A trader could buy that sentence if the probability was less than $$p$$ and sell the sentence if the probability was greater than $$p$$, making $$\varepsilon$$ profit in expectation. Such a trader would make unbounded profits, exploiting our logical inductor. Thus, our logical inductor eventually converges to assigning probability $$p$$ to the $$n$$th sentence of the pseudorandom sequence on the $$n$$th day.


## Learning Logical Relationships [4.5]

Convergence and coherence properties of logical inductors guarantee that the limiting probabilities assigned to sentences accurately reflect logical relationships. For instance, if our deductive process proves that “A xor B” is true (A or B is true, but not both), then the limiting probabilities will satisfy $$P(A) + P(B) = 1$$.

This limiting behavior ensures our logical inductor will learn to respect logical relationships amongst sentences eventually. Our logical inductor will do better; it will learn to respect logical relationships in a timely manner. For example, recalling that EVEN := “the 173,498th digit of $$\pi$$ is even” and ODD := “the 173,498th digit of $$\pi$$ is odd”, our logical inductor quickly learns to assign probabilities for EVEN and ODD that sum to one.

Suppose that we have an efficiently computable sequence of pairs of mutually exclusive and exhaustive sentences (our deductive process proves that exactly one sentence in each pair is true). Our logical inductor will learn to assign probabilities that sum to 1 to the $$n$$th pair by the $$n$$th day.

To see this, suppose that the sum of probabilities assigned to the $$n$$th pair is some fixed $$\varepsilon$$ greater or less than 1 on the $$n$$th day. A trader can buy one of each sentence if the probabilities are higher and sell one of each sentence if the probabilities are lower. This trader makes $$\varepsilon$$ profit off of this sequence of trades. If the trader can make this trade infinitely many times, our logical inductor is exploitable. Thus, the sum of probabilities assigned to the $$n$$th pair on the $$n$$th day converges to 1.


## Non-Dogmatism [4.6]

[Cromwell’s rule](https://en.wikipedia.org/wiki/Cromwell%27s_rule) says that a reasoner ought not assign probabilities 0 or 1 except to statements that are logically true or false. One justification for this rule is that a Bayesian reasoner can never update away from such extreme probabilities, so can thus never change their minds if those probabilities were assigned in error. Logical inductors _can_ update away from probabilities 0 and 1, so the argument for Cromwell’s rule does not extend to logical inductors.

In fact, logical inductors do not satisfy Cromwell’s rule. To see this, note that the logical induction criterion requires that the logical inductor does not lose unbounded amounts of money. However, it does not prohibit the logical inductor from losing any _finite_ amount of money. Since traders can only buy/sell a finite amount each day, a logical inductor can be arbitrarily wrong on an arbitrary, but finite, number of days and still only lose a finite amount of money. More specifically, a logical inductor will stay a logical inductor under arbitrary perturbation of its probabilities on any finite number of days. For example, if we forced a logical inductor to believe all statements with probability 1 on day 104, it would remain a logical inductor.

However, there is a sense in which logical inductors are non-dogmatic. If a theorem is not proven to be true, i.e., it is never output by our deductive process, then our logical inductor will assign it probability strictly less than 1. If a theorem is not proven to be false, i.e., its negation is never output by our deductive process, then our logical inductor will assign it probability strictly greater than 0. 

To see this, suppose that our logical inductor assigns limiting probability 0 to a statement that cannot be proven to be false. Consider a trader that watches this statement and buys when the price is \$0.50, \$0.25, \$0.125, \$0.0625, …, purchasing an infinite number of copies with only \$1. Since the statement cannot be proven to be false, there will always exist a world propositionally consistent with the deductive process in which it is true. In that world, the trader makes \$1 + \$1 + \$1 + …, exploiting our logical inductor. Thus our logical inductor must assign a limiting probability bounded away from 0. A similar argument shows that a logical inductor that assigns limiting probability 1 to a statement that cannot be proven true can also be exploited.


# Construction [5]

The primary contribution of Garrabrant et al. is a computable algorithm that assigns probabilities to logical statements that satisfies the logical induction criterion. We call this algorithm Garrabrant induction. We will sketch its construction.

To begin, we will show that for any given trader, Garrabrant induction can set prices such that this trader makes as little money as it wants. This result will be achieved by setting prices such that the trader does not want to buy or sell except for buying at ~\$1 and selling at ~\$0. In our setup, we require our trader’s “how much do I want to buy?” function to be continuous, intrepreting buying a negative amount as selling. Since there exists some price our trader wants to buy at and some price our trader wants to sell at, this function must cross zero at some point. Thus there must be some price where the trader is not interested in buying or selling. The general form of this argument is known as [Brower’s fixed point theorem](https://en.wikipedia.org/wiki/Brouwer_fixed-point_theorem) and we use it to guarantee such a set of prices can be found across all the assets the trader is interested in trading.[^brute]

[^brute]: The astute reader may notice that Brower’s fixed point theorem is non-constructive. We find the fixed point by brute force searching over all rational numbers. See [5.1.2] for details.

Next, we will construct a _trading firm_, a single trader that exploits Garrabrant induction if and only if there exists _any_ trader that exploits Garrabrant induction. First, fix some enumeration of all possible trading strategies that might lose at most \$1. Note that since we can scale trading strategies up or down multiplicatively, any trading strategy with bounded loss can be easily converted to a strategy that loses at most \$1.[^computable] Our trading firm starts with only the first trader in this enumeration. On each day, the firm will hire the next trader, adding their strategy to the firm’s strategy linearly. However, since the firm had finite capital, it will give each successive trader half the amount of money it gave the previous trader.[^firm] For example, on the third day, the trading firm’s strategy is 1/2 of the 1st trader, 1/4th of the 2nd, and 1/8th of the 3rd. In general, the trading strategy on the $$n$$th day will be an exponentially decreasing weighted sum of the trading strategies of the first $$n$$ traders.

[^computable]: It is not obvious that the set of trading strategies with bounded loss can be computably enumerated. See [5.2] for more details on how this is done. 

[^firm]: This description is simplified. See [5.3] for more details. 

Suppose that Garrabrant induction was exploitable, i.e., there existed some efficiently computable trading strategy that could potentially obtain unbounded profits with bounded loss. By construction, this trader will be the $$n$$th trader in our enumeration of bounded loss traders we used to construct our trading firm. Assume that all other trading strategies in the enumeration all lose \$1, the worst they could possibly do. Since the trading firm is an exponentially decreasing sum of strategies, the firm as a whole will lose at most \$1. However, its potential profit is at least $$\frac1{2^n}$$ times the potential profit of the $$n$$th trader. Since an unbounded amount divided by a constant is still unbounded, our trading firm is able to exploit Garrabrant induction.

Taking the contrapositive of the above result, if the trading firm _does not_ exploit Garrabrant induction, then there does not exist _any_ efficiently computable trader that exploits Garrabrant induction, i.e., Garrabrant induction is unexploitable.

We then pit Garrabrant induction against our trading firm. More specifically, we define probabilities for our logical inductor so that on the $$n$$th day, the trading firm's strategy makes at most $$\frac1{2^n}$$.[^recursive] It is easy to see that these probabilities make the logical inductor unexploitable. If it were exploitable, there would be a trader that could exploit it, which means that the trading firm would exploit it. However, the trading firm makes at most $$\sum_{n = 1}^\infty \frac1{2^n} = 1$$ dollar, so this is impossible.

[^recursive]: Since the trading strategy depends on the market’s price history, this definition is recursive.

This algorithm is computable. The market prices at which a trader can make at most a small amount of money can be found by brute force search over all rational numbers enumerated by the [Farey sequence](https://www.wikiwand.com/en/Farey_sequence). Since trading strategies must be computable, they can only care about prices up to a certain precision, guaranteeing that this search is computable. The trading firm’s strategy each day is a finite sum from a computable sequence and is thus computable.


# Conclusion [7]

We have presented the _logical induction criterion_ as a relaxed form of Dutch book justifications for Bayesianism and have argued that reasoners that satisfy this criterion (_logical inductors_) possess many desirable properties. We have also sketched the construction of Garrabrant induction, a computable logical induction algorithm. We now expand on interesting takeaways from the logical induction framework. We conclude with a discussion of open questions.


## Ensemble methods [7.2]

The logical induction algorithm developed above is general. If we run it over a deductive system that outputs sentences of Peano arithmetic, the algorithm will develop accurate beliefs about Peano arithmetic. If we instead run it over a deductive system that outputs sentences of set theory, the algorithm will develop accurate beliefs about set theory. Our logical induction algorithm is thus similar to [Solomonoff induction](https://www.lesswrong.com/tag/solomonoff-induction) – it is able to induct over a wide range of deductive processes, much as Solomonoff’s algorithm can induct over a wide range of observation processes.

The similarities run deeper. Solomonoff induction works by maintaining a set of experts (all possible computer programs) and discarding those that fail to accurately predict the observation process. What Solomonoff induction predicts is a weighted average of what each of the remaining experts predicts. Garrabrant induction works by maintaining a set of experts (all efficiently computable traders) and discarding those that lose sufficiently large amounts of money (roughly). What Garrabrant induction predicts is a weighted average of what each remaining expert predicts.

Additionally, Garrabrant induction is also not meant to be used in practice, although it is at least computable. The hope is that the methods employed by Garrabrant induction can be relaxed and approximated to yield algorithms that are practically useful for logical prediction tasks.


## Small experts [7.2]

A key difference between Garrabrant and Solomonoff induction is in what the methods expect from their “experts.” Solomonoff induction expects each expert to model the entire world and predict everything from the motion of the moon to the arc of a single apple falling from a tree. The “master algorithm” then rewards experts for accuracy and penalizes them for complexity. Importantly, the “master algorithm” in Solomonoff induction is not making predictions, merely aggregating expert opinion.

In contrast, the experts in Garrabrant induction can specialize by choosing particular classes of sentences to trade and not touching anything else. The “master algorithm” makes predictions, which are then corrected by the specialized experts. For example, one expert might specialize in making sure the probabilities of sentences and their negations sum to at least one. Experts are (extremely roughly) rewarded in proportion to how much money they make and penalized in proportion to how much money they lose. 

In Solomonoff induction, we imagine starting with the set of all possible worlds and pruning those that do not match the evidence. In Garrabrant induction, we imagine starting with naive guesses, then consulting a series of experts, each of which contributes a small piece of logical knowledge – each trader says “look, I don’t know what you’re trying to predict, but I do know that this bit doesn’t make sense.” By aggregating all these pieces of knowledge, Garrabrant induction builds a model that satisfies many different relationships, even if any individual expert is only tracking a simple pattern.


## Variations [7.3]

Solomonoff induction uses all computable worlds as its experts; however, the underlying logic (Bayesian updating) is more general than that. Instead of using all computable worlds, we can instead use all polynomials, decision trees, or functions representable by a one billion parameter neural network. Of course, these reduced forms of Solomonoff induction would not work as well, but the method of induction would remain unchanged.

Similarly, Garrabrant induction employs polynomial-time traders as its experts; however, the underlying logic of trading and markets is more general than that. Instead of using polynomial time traders, we can instead use linear-time traders, constant time traders, or traders representable by a one billion parameter neural network. Of course, these reduced forms of Garrabrant induction would not work as well, but the method of induction would remain unchanged.

In fact, Garrabrant induction is not even specific to the domain of logic. Imagine a deductive process that, on the $$n$$th day outputted the first $$n$$ frames of the image of some video camera: “the (0, 0) pixel is red”, “the (0, 1) pixel is blue”, “the third column is green”, etc. Garrabrant induction would eventually learn to predict patterns in the camera feed.


## Open Questions [7.4]

While Garrabrant induction has a large number of desirable properties, there are some that escape. 


### Decision Rationality

When humans do reasoning, they are often able to devote thinking time to specific questions. For example, I might be curious about the weather tomorrow in New York and perform reasoning with that specific goal, increasing the accuracy of that prediction faster than other predictions. We might desire that a logical inductor have a similar property – that we can tell it to reason about one sentence in particular and have it efficiently allocate resources to that task.

Garrabrant induction does not do anything of this sort, nor are there obvious modifications that can be made to incorporate this ability. In other terms, Garrabrant induction does not “think about what to think about.” We can imagine Garrabrant induction being but one tool in a larger reasoner’s toolkit, with the reasoner sometimes deciding that the best use of resources is to train the Garrabrant inductor. At the moment, however, this is purely speculative.


### Logical Counterpossibilities

If you ask a mathematician what would happen if [Fermat’s last theorem](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem) was false, they might answer that this would imply the existence of non-modular elliptic curves. However, Fermat’s last theorem has been proven true, so by the [principle of explosion](https://en.wikipedia.org/wiki/Principle_of_explosion), assuming Fermat’s last theorem is false should imply all other mathematical statements, whether they are true or false. The first sort of answer seems more reasonable, and indeed, mathematicians regularly reason about these logical counterpossibilities. One might hope that logical inductors would naturally extend themselves to assigning coherent probabilities to logical counterpossibilities.

The logical induction criterion requires that, in the limit, all logical inductors assign probability 0 to Fermat’s last theorem being false. Conditioning on an event with probability 0 is ill-defined, so we have no formal guarantee that these conditional probabilities are well-behaved. So far, a satisfactory treatment of the counterpossibility probabilities of logical inductors has proven elusive.

For more on why logical counterpossibilities are important for designing robust decision-making algorithms, see [Embedded Agency](https://www.lesswrong.com/posts/i3BTagvt3HbPMx6PN/embedded-agency-full-text-version#2_1__Action_counterfactuals).