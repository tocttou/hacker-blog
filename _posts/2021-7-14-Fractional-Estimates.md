*Crossposted from the [AI Alignment Forum](https://alignmentforum.org/posts/h3ejmEeNniDNFXTgp/fractional-progress-estimates-for-ai-timelines-and-implied). May contain more technical jargon than usual.*

_This post was written by Mark Xu based on interviews with Carl Shulman. It was paid for by Open Philanthropy but is not representative of their views. A draft was sent to Robin Hanson for review but received no response._

# Summary

* Robin Hanson estimates the time until human-level AI by surveying experts about the percentage progress to human-level that has happened in their particular subfield in the last 20 years, and dividing the number of years by the percentage progress.
* Such surveys look back on a period of extremely rapid growth of compute from both hardware improvements and more recently skyrocketing spending.
* Hanson favors using estimates from subsets of researchers with lower progress estimates to infer AI timelines requiring centuries worth of recent growth, implying truly extraordinary _sustained_ compute growth is necessary to surpass human performance.
* Extrapolated compute levels are very large to astronomically large compared to the neural computation that took place in evolution on Earth, and thus likely far overestimate AI requirements and timelines.

# Introduction

Suppose that you start with \$$$1$$ that grows at 10% per year. At this rate, it will take ~241 years to get \$$$10$$ billion (\$$$10^{10}$$). When will you think that you’re ten percent of the way there?

You might say that you’re ten percent of the way to \$$$10$$ billion when you have \$$$1$$ billion. However, since your money is growing exponentially, it takes 217 years to go from \$$$1$$ to \$$$1$$ billion and only 24 more to go from \$$$1$$ billion to \$$$10$$ billion, even though the latter gap is larger in absolute terms. If you tried to guess when you would have \$$$10$$ billion by taking 10x the amount of time to \$$$1$$ billion, you would guess 2174 years, off by a factor of nine.

Instead, you might say you’re ten percent of the way to \$$$10^{10}$$ when you have \$$$10^1$$, equally spacing the percentile markers along the exponent and measuring progress in terms of log(wealth). Since your money is growing perfectly exponentially, multiplying the number of years it takes to go from \$$$1$$ to \$$$10$$ by ten will produce the correct amount of time it will take to go from \$$$1$$ to \$$$10^{10}$$.

When employing linear extrapolations, choosing a suitable metric that better tracks progress, like log wealth over wealth for investment, can make an enormous difference to forecast accuracy.

# Hanson’s AI timelines estimation methodology

Hanson’s preferred method for estimating AI timelines begins with asking experts what percentage of the way to human level performance the field has come in the last _n_ years, and whether progress has been stable, slowing, or accelerating. In Hanson’s [convenience sample](https://www.overcomingbias.com/2012/08/ai-progress-estimate.html) of his AI acquaintances he reports typical answers of 5-10% of stable progress over 20 years, and gives a similar estimate himself. He then produces an estimate for human-level performance by dividing the 20 year period by the % of progress to produce estimates of 200-400 years. [Age of Em](https://ageofem.com/):

> At the rate of progress seen by AI researchers in their subfields over the last 20 years, it would take about two to four centuries for half of these AI subfields to reach human level abilities. As achieving a human level AI probably requires human level abilities in most AI subfields, a broadly capable human level AI probably needs even longer than two to four centuries.

Before we engage with the substance of this estimate, we should note that a larger more systematic recent survey using this methodology gives much shorter timeline estimates and more reports of acceleration, as summarized by [AI impacts](https://aiimpacts.org/surveys-on-fractional-progress-towards-hlai/):

>
> * 372 years (2392), based on responses collected in Robin Hanson’s informal 2012-2017 survey.
> * 36 years (2056), based on all responses collected in the 2016 Expert Survey on Progress in AI.
> * 142 years (2162), based on the subset of responses to the 2016 Expert Survey on Progress in AI who had been in their subfield for at least 20 years.
> * 32 years (2052), based on the subset of responses to the 2016 Expert Survey on Progress in AI about progress in deep learning or machine learning as a whole rather than narrow subfields.
>
>     ...67% of respondents of the 2016 expert survey on AI and 44% of respondents who answered from Hanson’s informal survey said that progress was accelerating.


Directly [asking researchers for their timelines estimates](https://aiimpacts.org/ai-timeline-surveys/) also gives much shorter estimates than using the above methodology on Hanson’s informal survey. Overall we think responses to these sorts of surveys are generally not very considered, so we will focus on the object-level henceforth.

# Inputs to AI research have grown enormously in the past

William Nordhaus [reports](https://www.cambridge.org/core/journals/journal-of-economic-history/article/two-centuries-of-productivity-growth-in-computing/856EC5947A5857296D3328FA154BA3A3):

> First, there has been a phenomenal increase in computer power over the twentieth century. Depending upon the standard used, computer performance has improved since manual computing by a factor between 1.7 trillion and 76 trillion. Second, there was a major break in the trend around World War II. Third, this study develops estimates of the growth in computer power relying on performance rather than components; the price declines using performance-based measures are markedly larger than those reported in the official statistics.

Computation available for AI has grown enormously in the decades before these surveys. If, for example, 5-10% progress is attributed to 20 years in which computation for AI research increased 1000x, then Hanson’s extrapolation method would seem to be making predictions about years _of similarly explosive growth in compute inputs_ until human level AI performance.

We have a number of metrics showing this massive input growth:

* [AI Impacts](https://aiimpacts.org/trends-in-the-cost-of-computing/) estimates that, since the 1940s, $$/FLOPS fell by 10x every 7.7 years, around 35% a year.
* [AI Impacts](https://aiimpacts.org/recent-trend-in-the-cost-of-computing/) estimates that, from 2011 to 2017, $$/FLOPS fell by 10x every 10-16 years, around 15% to 25% a year.
* [Bloom et al.](https://www.aeaweb.org/articles?id=10.1257/aer.20180338) estimate that semiconductor R&D efforts have grown by a factor of 18 from 1971 to 2020, around 6.8% a year.
* [Amodei and Hernandez](https://openai.com/blog/ai-and-compute/) estimate that, from 2012 to 2018, the amount of compute used in the largest AI training runs increased 10x every 11.2 months, around 1180% a year.
* [AI Index Report](https://aiindex.stanford.edu/wp-content/uploads/2021/03/2021-AI-Index-Report_Master.pdf) estimates that global corporate investment in AI was $$68 billion in 2020, up from $$13 billion in 2015, an average increase of 39% a year.
* [The World Bank](https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG) estimates that world GDP has grown an average of 3.5% a year from 1961 to 2019.
* [Besiroglu](https://static1.squarespace.com/static/5fb98ea9a787c521ab066091/t/5fba5c3ddb275d51d91825eb/1606048834827/AreModels.pdf) estimates that, from 2012 to 2020, the effective number of researchers in ML rose by 10x every 4-8 years, around 33% to 78% a year.

# Extrapolating past input growth yields ludicrously high estimates of the resource requirements for human level AI performance

Hanson’s survey was conducted in 2012, so we must use trends from the two decades prior when extrapolating. We conservatively ignore the major historical growth in spending on AI compute as a fraction of the economy, and especially the surge in investment in large models that drove [Amodei and Hernandez](https://openai.com/blog/ai-and-compute/)’s finding of annual 10x growth in compute used in the largest deep learning models over several years. Accounting for that would yield even more extreme estimates in the extrapolation.

Extrapolating world GDP’s historical 3.5% growth for 372 years yields a 10^5x increase in the amount of money spent on the largest training run. Extrapolating the historic 10x fall in $$/FLOP every 7.7 years for 372 years yields a 10^48x increase in the amount of compute that can be purchased for that much money (we recognize that this extrapolation goes past physical limits). Together, 372 years of world GDP growth and Moore’s law yields a 10^53x increase in the amount of available compute for a single training run. Assuming GPT-3 represents the current frontier at [10^23 floating point operations (FLOP)](https://lambdalabs.com/blog/demystifying-gpt-3/), multiplying suggests that 10^76 FLOP of compute will be available for the largest training run in 2393.

10^76 FLOP is vast relative to the evolutionary process that produce animal and human intelligence on Earth, and ludicrous overkill for existing machine learning methods to train models vastly larger than human brains:[^anthropics]

* [Cotra (2020)](https://docs.google.com/document/d/1k7qzzn14jgE-Gbf0CON7_Py6tQUp2QNodr_8VAoDGnY/edit#) estimates the total amount of computation done in animal nervous systems over the course of our evolution was 10^41 FLOP. 10^76 FLOP is enough to run evolution almost a trillion trillion trillion times.
    * One illustration of this is that for non-reversible computers, the thermodynamic [Landauer limit](https://en.wikipedia.org/wiki/Landauer%27s_principle) means that 10^76 FLOP would require vastly more energy than has been captured by all living things in the history of Earth. [Landauer's principle](https://en.wikipedia.org/wiki/Landauer%27s_principle) requires that non-reversible computers at 310 Kelvin need more than [3 x 10^-21 J](https://www.wolframalpha.com/input/?i=310+kelvin+*+boltzmann%27s+constant+*+ln2) for each bit-erasure. [Carlsmith (2020)](https://www.openphilanthropy.org/brain-computation-report#FromBitErasuresToFlops) tentatively suggests ~1 bit-erasure per FLOP, suggesting 10^51 J are needed to perform 10^76 FLOP. About [10^17 J/s](http://www.yourturn.ca/solar/solar-power/how-much-power-does-the-sun-give-us/) of sunlight strikes the earth, so 10^34 s ~ [10^20 times the age of the universe](https://www.wolframalpha.com/input/?i=10%5E34+seconds+in+years) of 100% efficient maximum-coverage terrestrial solar energy is needed to power 10^76 FLOP of irreversible computing. 
* [Carlsmith (2020)](https://www.openphilanthropy.org/blog/new-report-brain-computation) estimates “it [is] more likely than not that 10^15 FLOP/s is enough to perform tasks as well as the human brain”. 10^76 FLOP is enough to sustain a 10^61:1 training compute:inference compute ratio.
    * Roughly approximating [Cotra (2020)](https://www.alignmentforum.org/posts/KrJfoZzpSDpnrv9va/draft-report-on-ai-timelines)’s estimates, models can be trained with one datapoint per parameter and each parameter requires 10 inference FLOPs, suggesting 10^76 FLOP is enough to train a model with 10^25 parameters.
* [Extrapolating scaling laws](https://www.alignmentforum.org/posts/k2SNji3jXaLGhBeYP/extrapolating-gpt-n-performance) in model performance yields enormous improvements, and historically tasks with previously flat or zero performance have yielded as models became capable enough to solve the problem at all.

[^anthropics]: We don’t think that anthropic distortions conceal large amounts of additional difficulty because of evolutionary timings and convergent evolution, combined with already existing computer hardware and software’s demonstrated capabilities. See [Shulman and Bostrom (2012)](https://www.nickbostrom.com/aievolution.pdf) for more details. 

Some of Hanson’s writing suggests he is indeed endorsing these sorts of requirements. E.g. in one [post](https://www.overcomingbias.com/2016/08/researcher-returns-diminish.html) he writes:

> For example, at [past rates](http://www.overcomingbias.com/2012/08/ai-progress-estimate.html) of [usual artificial intelligence (UAI)] progress it should take two to four centuries to reach human level abilities in the typical UAI subfield, and thus even longer in most subfields. Since the world economy now doubles roughly every fifteen years, that comes to twenty doublings in three centuries. If ems show up halfway from now to full human level usual AI, there’d still be ten economic doublings to go, which would then take ten months if the economy doubled monthly. Which is definitely faster UAI progress...Thus we should expect many doublings of the em era after ems and before human level UAI

This seems to be saying that the timeline estimates he is using are indeed based on input growth rather than serial time, and so AGI requires multiplying log input growth (referred to as doublings above) of the 20 year past periods many fold. 

# Conclusion

So on the object-level we can reject such estimates of the resource requirements for human-level performance.  If extrapolating survey responses about fractional progress per Hanson yields such absurdities, we should instead believe that respondents’ subjective progress estimates will accelerate as a function of resource inputs. In particular, that they would be end-loaded, putting higher weight on final orders of magnitude in input growth. This position is supported by the enormous differences in cognitive capabilities between humans and chimpanzees despite less than an order of magnitude difference in the quantity of brain tissue. It seems likely that ‘chimpanzee AI’ would be rated as a lot less than 90% progress towards human level performance, but chimpanzees only appeared after 99%+ of the timespan of evolution, and 90%+ of the growth in brain size.

This view also reconciles better with the survey evidence reporting acceleration and direct timeline estimates much shorter than Hanson’s.

For the more recent survey estimate of 142 years of progress with the above assumptions the result is 10^43 FLOP (more with incorporation of past growth in spending), which is more arguable but still extremely high, suggesting evolutionary levels of compute without any of the obvious advantages of intentional human design providing major efficiencies, and with scaling much worse than observed for deep learning today.

The aggregate and deep learning linear extrapolation results of several decades still suffer a version of this problem, primarily because of the unsustainably rapid growth of expenditures, e.g. [it](https://aiimpacts.org/interpreting-ai-compute-trends/) [is](https://aiimpacts.org/reinterpreting-ai-and-compute/) [impossible](https://www.lesswrong.com/posts/wfpdejMWog4vEDLDg/ai-and-compute-trend-isn-t-predictive-of-what-is-happening) to maintain annual 10x growth in compute for the largest models for 30 years. While they report much more rapid progress and acceleration than the Hanson survey respondents, we would still expect more acceleration in subjective progress estimates as we come closer to across-the-board superhuman performance.