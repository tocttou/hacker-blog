---
title: Making Markets Over Beliefs
---

Betting is an excellent way to improve the accuracy of your beliefs. For example:

> Me: "I think Alice is 5'11."
>
> Friend: "I'll bet you \$5 1:1 that it's higher."

Translated, my friend means they're willing to agree to a deal where I pay them \$5 if Alice is taller than 5'11" and they pay me \$5 if she's shorter or equal to 5'11". However, if Alice turns out to be 6'5", it feels like I will have lost the bet "more" than if Alice was 6'0". Similarly, if Alice turns out to be 5'1", it feels like my friend lost the bet "more" than if Alice was 5'10". Market making is an alternative to better that captures these intuitions. For example:

> Me: "I think Alice is 5'11"."
>
> Friend: "Buy."

Translated, my friend means they would buy an asset that resolved to the price of Alice's height in inches for 5 * 12 + 11 = \$59. If Alice turns out to be 6'5" (65 inches), I owe them \$65 - \$59 = \$6. However, if Alice turns out to be 5'0" (60 inches), I only owe then \$1. You might think of "buying" as claiming the value is too low and "selling" as claiming the value is too high.

I've been slightly cheated in both of the above examples. In the first example, I gave my best guess at Alice's height. If my friend's best guess is higher than mine, the height we should bet on is the average of our guesses. In the second example, my best guess at Alice's height is not the price at which I would sell the asset. If I thought Alice's height was 58-61 inches, I might be willing to buy the "Alice's height in inches" asset at \$58 and sell it for \$61, allowing me to roughly express my confidence interval and allowing my friend to bet on either side.

The above example dealt with a numeric quantity. This technique can be extended to probabilities by simply making a market over an asset whose value is \$1 if some binary event happens and \$0 if it doesn't, as is standard in prediction markets. In this case, the prices I offered would roughly correspond to my subjective probabilities. If I thought a coin was 50% likely to be heads, I might be willing to buy the "coin is heads" asset for \$0.45 and sell for\ $0.55. This process is equivalent to saying I would bet at 9:11 one way and 11:9 the other. [^information]

[^information]: Technically, the market I should make corresponds to what I think other people's probabilities are likely to be given they can see my market. I might give a wider market because only people that think they're getting a good deal with trade with me.

Similarly to how the amount you bet specifies how confident you are in a belief, the number of assets you're willing to buy/sell will correspond to how confident you are in your bound. For instance, if I had previously measured Alice's height, I might be willing to buy/sell 100 of the "Alice's height in inches" asset; if I was only guessing, I might only be willing to buy/sell 1 asset.

When you make binary bets, the loser pays the winner a fixed amount. When you make markets, the loser pays the winner an amount linearly proportional to the amount by which they lost, weighted by confidence.

A way to make market making more efficient is to use trading jargon. From Jane Street's [interview guide](https://www.janestreet.com/static/pdfs/trading-interview.pdf?utm_source=web&utm_medium=pdf&utm_campaign=probability_markets_guide):

> When you want to effect a trade, you'll need to specify the 
>
> 1. thing you want to trade (which is often implied by the context, so let's ignore this for now) 
> 2. **direction** - whether you want to buy it or sell it 
> 3. **price** at which you're willing to transact, and 
> 4. **quantity** - how many shares/contracts/etc.; also called **size** 
>
> If you want to buy something, like a stock or a contract, you can say or otherwise indicate a **bid** to buy. If you want to sell, it's an **offer** to sell. 
>
> If you want to try to buy 10 widgets for a price of $2 each, say "I'm **2 bid for 10**." 
>
> If you want to try to sell 10 widgets for a price of $4 each, say "I have **10 at 4**." 
>
> Now, if you're happy to do both of the above, you can say both phrases, but it's much more common to say "I'm **2 at 4, 10 up**." Note that this requires you to be willing to buy or sell for the same quantity; if you have different quantities depending on direction, then you'll have to say the bid and offer separately. 
>
> ...
>
> Once an order is created, someone else can trade against it, by saying **"sold"** to **hit** (sell) to your bid, or **"take 'em"** to **lift** (buy) your offer. Saying "sold" or "take 'em" trades against the entire quantity available. To trade only 5 (or any **partial** amount) of the available 10 widgets, say "I **buy 5"** or "I **sell 5."**

You can also make markets over functions of attributes to account for different distributions. Height is normally distributed, so a linear payout makes sense. However, the amount of time my homework takes might be power-law distributed. In this case, I might make a market over the base-10 logarithm of how long the task takes in minutes.

Similar to how giving confidence intervals is often more informative than making point predictions, making markets is often more informative than making singular bets.