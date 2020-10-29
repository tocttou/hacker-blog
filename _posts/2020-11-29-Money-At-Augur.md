---
title: Expected Money at Augur
published: true
---
A contract that pays out $1 if Trump loses is currently available for about 65 cents on Augur. If you think Trump has an 80% chance to lose, this means you can approximately 1.2x your money in about a month. This is a good deal. The Kelly Criterion says you should bet approximately 1/3rd of your wealth if your utility is log(money). You probably should not do this.

I currently expect this inefficiency to remain for at least a few more days, so you don’t have to be _that_ fast. Probably not worth it to be slow either. [Beware Trivial Inconveniences](https://www.lesswrong.com/posts/reitXJgJXFzKpdKyd/beware-trivial-inconveniences). 

How to execute the trade:

1. Get DAI into [MetaMask](https://metamask.io/)
    1. Not exactly sure how to best get DAI, easy way is to buy directly but that has fees
        1. Transferring from crypto you already have is best
        2. [https://bitvavo.com](https://bitvavo.com) has first 1k with no fees and low fees afterwards
    2. If you expect the price of the contract to remain stable, then you can bank transfer into e.g. coinbase pro, trade DAI, then transfer to metamask
        1. Your beliefs about how quickly this inefficiency gets corrected control how fast you want to be
2. Use [https://foundry.finance/](https://foundry.finance/) to convert DAI -> each of {trump yes, trump no, invalid}
    1. Note you will need to confirm two transactions with MetaMask to mint. The first is to approve the spending of your DAI, and the second is the actual minting transaction. (The second transaction pop-up will show up after the first transaction is confirmed. Otherwise, you can just click the button again after the first transaction is confirmed.)
    2. The main reason to do this is so you get “invalid” contracts, which will pay out if the market resolves as “invalid”, giving you insurance against the Augur market resolving as “invalid”
    3. You’ll get them as ERC1155 first. You need to exchange to ERC20 by clicking Wrap Shares. Once again this will take two transactions.
3. Use [https://catnip.exchange/](https://catnip.exchange/) to exchange “trump yes” for “trump no” at approximately 2:3 ratio
    1. Once again, you’ll need two transactions. The first to approve spending your shares, and the second to actually trade.
    2. Might make sense to unwrap shares after trading, in case catnip is a scam or broken. It seems like it’s currently working as advertised, unwrapped ERC1155 token balances can be confirmed using the [ShareToken read contract](https://etherscan.io/address/0x9e4799ff2023819b1272eee430eadf510eDF85f0#readContract) (#8balanceOfMarketOutcome, outcome units are 0/1/2 for invalid/no/yes). After market resolution those unwrapped tokens can be claimed using [ShareToken write contract](https://etherscan.io/address/0x9e4799ff2023819b1272eee430eadf510eDF85f0#writeContract) (#4claimTradingProceeds)
    3. [https://pools.balancer.exchange/#/pool/0x6b74fb4e4b3b177b8e95ba9fa4c3a3121d22fbfb/swaps](https://pools.balancer.exchange/#/pool/0x6b74fb4e4b3b177b8e95ba9fa4c3a3121d22fbfb/swaps) is the balancer pool used
    4. [https://www.augur.markets/#!/market?id=0x1EBb89156091EB0d59603C18379C03A5c84D7355](https://www.augur.markets/#!/market?id=0x1EBb89156091EB0d59603C18379C03A5c84D7355) is the Augur market

Reasons why this is stupid

1. EMH means Nate Silver is wrong
    1. Other prediction markets say similar things to catnip
        1. This might be a point in favor of inefficiency because [predictit isn't efficient](https://www.lesswrong.com/posts/c3iQryHA4tnAvPZEv/limits-of-current-us-prediction-markets-predictit-case-study\)
2. [https://catnip.exchange](https://catnip.exchange) might be buggy/untrustworthy
3. Need to trust this thing called “smart contracts”
    1. Depends on the smart contract. In general, I think they are fine, but sometimes they can have issues that can drain funds. Augur in particular has been vetted pretty well, but foundary and catnip probably have been vetted less.
4. The price of DAI might be correlated with who wins the election
    1. DAI is specifically engineered to be worth 1 USD
    2. You might think USD is correlated with who wins the election in a way that makes the market currently “believe” that trump is actually at 60% to lose
        1. This seems very improbable to me
5. Tying up liquidity is bad
    1. Only if you don’t have additional savings.
    2. Plus you can always liquidate (back to DAI)
6. Maybe balancer pools don’t make any sense
    1. [https://docs.balancer.finance/getting-started/faq](https://docs.balancer.finance/getting-started/faq)
    2. [https://balancer.finance/whitepaper/](https://balancer.finance/whitepaper/) 
7. This is a 3 step process, the maximum number of steps for anything to work is around 2
    1. E.g. you could copy your crypto wallet address wrong and send money into the void, accidentally trade no’s for yes’s, etc.
    2. Actually it seems closer to a ~15 step process, which is a reason for inefficiency but also a reason for caution
    3. There are going to be around $20 of fees
