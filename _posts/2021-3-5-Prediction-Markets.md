---
title: Revenge of the Prediction Market

---

Recommended reading: [Prediction Markets: Tales from the Election](https://vitalik.ca/general/2021/02/18/election.html)

Suppose I wanted to know the probability of some future event. How might I do this?

One way would be to pay forecasters from the [Good Judgment Project](https://goodjudgment.com/) to forecast the event. These forecasters are generally pretty good at what they do, so this would probably work pretty well. However, this would cost a bit of money, and you would have less than 100 eyes on the problem. Can we do better?

One way would be to use a prediction aggregation platform like [Metaculus](https://www.metaculus.com/questions/), with some tweaks like weighting forecasts by the forecaster's historical accuracy. Ideally, we would want to weight forecasts based on how confident the forecasters were. If we want people working on it full time we might have to add large monetary incentives. Can we do better?

One way would be to use one of humanity's best knowledge aggregation mechanisms: markets. A prediction market works by defining two assets: one worth \$1 if the event happens and \$0 otherwise and another with the opposite behavior. ​\$1 buys you one copy of both assets, which can be traded on the market. Assuming that market participants are profit maximizers, the assets' price should both sum to ​\$1 and be equal to the confidence-weighted aggregate probability given to the event by market participants. To see why this is true if the sum of the price is more than ​\$1, I can buy a copy of both assets for \$1 and sell them both, netting a profit and lowering the price. If the price sums to less than ​\$1, then I can buy both assets and weight for the event to either happen or not happen, netting \$1 in both cases. If my subjective probability is greater than the current price, buying the asset nets me profit in expectation and raises the price. If my subjective probability estimate is lower than the price, buying the other asset nets me profit in expectation and raises the other asset's price. The amount of asset I buy is, roughly speaking, how confident I am in my subjective probability estimate. Thus the equilibrium price of the asset will be the confidence-weighted aggregate subjective probability of market participants.

Prediction markets still have several problems, like not being very good investments compared to other assets for long time-horizons or low probabilities, but at least the incentives align.

So how does this work out in practice? The recent Augur market on the 2020 presidential election has been the largest prediction market to date. On January 10th, an asset that would be worth \$1 if Trump lost the election was trading at ​\$0.87. Even before the election, there was reason to be alive that the market [was priced improperly](https://markxu.com/money-at-augur).

It's hard to describe how I feel about this. On the one hand, the market had pretty high barriers to entry, competed with other crypto assets, and was politically charged; all reasons you wouldn't expect it to be efficient. On the other hand... fuck. How do I say this? Prediction markets were supposed to be the chosen one. Sigh. Instead we just found out that they had their own problems.

The markets get better as time passes. Those good at predicting make money, so they will control a larger share of future markets. Those bad at predicting lose money, so they will control a lesser share of future markets. As time rachets forward, the equilibrium price will become close to the best guess given the available information.

But still. Why does the market, which is shaped by the invisible hand, which is efficient, contain so much inefficiency? Why does the prediction, which is determined by the market, which is efficient, look so stupid? Why do the trades, which are made by traders, who are profit maximizers, lose so much money?