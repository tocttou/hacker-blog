---
title: How to Construct Bets
published: true
katex: true
---

Suppose I think event $$E$$ is going to happen with 50% chance and my friend thinks that it's going to happen with 70% chance. Clearly, we should [bet](https://markxu.com/bets) on it, but how do we do that?

Simple algebraic manipulations suffice to show that a fair bet assuming $$E$$ happens at 60% chance (3:2 odds) will have the same expected value for me and my friend. I pay my friend \$2 if $$E$$ happens and my friend pays me \$3 of it doesn't happen.

Assume I think $$E$$ happens with probability $p$ and my friend thinks it happens with probability $$q$$. Let my friend pay me $$r$$ if $$E$$ happens and let me pay them $$1-r$$ if it does not happen. My expected value is $$pr - (1 - p)(1 - r)= -1 + p + r$$. Their expected value is $$(1-r)(1-q) - rq = 1 - q - r$$. Equating the two gives $$r = \frac{2 - (q + p)}{2} = 1 - \frac{q + p}{2}$$, e.g. a fair bet assuming that $E$ happens with $$\frac{q + p}{2}$$ chance.

Something slightly confusing happens when both probabilities are small. If I think something happens with 0.5% and my friend thinks it happens with 1.5%, then we should both agree to a fair bet assuming the event happens with 1% chance. But who pays who what? The "easy" way to do it is to just calculate expected values; for one combination, the expected value is negative for both players. The easier way is to just remember that the person with the higher probability gets money if the event happens. In this case, my friend has a higher probability, so they'll get \$99 if the event happens and lose \$1 if it doesn't, for an expected value of \$0.50. 

An interesting observation is that if both people have low probabilities, the person with the higher probability is likely to "lose" the bet, where "losing" is having to pay money. This suggests that a person having won many bets does not mean much if you don't know the betting odds. For example, I can have a 0.1% chance on something whose true probability is 1% and win an expected 99 bets before I lose one.[^1]

This means that unless you bet very frequently, it seems inadvisable to make bets against people where the odds are too extreme; you will be richer in expectation, but have also have a poor betting record in expectation. Bets seem most useful when one person thinks an event is more than 50% likely to happen and another person thinks it's less than 50%.

[^1]: Let $$N$$ be the number of times I bet assuming I stop after I lose once. Note that $$\mathbb E[N] = 1 + 0.99 \mathbb E [N] \implies N = 100$$.
