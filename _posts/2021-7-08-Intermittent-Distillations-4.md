---
title: "Intermittent Distillations #4"

---

# The Semiconductor Supply Chain: Assessing National Competitiveness (Saif M. Khan, Alexander Mann, Dahlia Peterson)

[The Semiconductor Supply Chain: Assessing National Competitiveness](https://cset.georgetown.edu/wp-content/uploads/The-Semiconductor-Supply-Chain-Issue-Brief.pdf)

## Summary

This report analyzes the current supply chain for semiconductors. It particularly focuses on which portions of the supply chain are controlled by US and its allies and China. Some key insights: 

- The US semiconductor industry is estimated to contribute 39 percent of the total value of the global semiconductor supply chain.
- The semiconductor supply chain is incredibly complicated. The production of a single chip requires more than 1,000 steps and passes through borders more than 70 times throughout production. 
- MD is currently the only company with expertise in designing both high-end GPUs and high-end CPUs.
- TSMC controls 54% of the logic foundry market, with a larger share for leading edge production, e.g., state-of-the-art 5 nm node chips.
- Revenue per wafer for TSMC is rapidly increasing, while other foundries are seeing declines.
- The Netherlands has a monopoly on extreme ultraviolet (EUV) scanners, equipment needed to make the most advanced chips.
- The Netherlands and Japan have a monopoly on argon floride (ArF) immersion scanners, needed to make the second most advanced chips.
- The US has a monopoly on full-spectrum electronic design automation (EDA) software needed to design semiconductors.
- Japan, Taiwan, Germany and South Korea manufacture the state-of-the-art 300 mm wafers used for 99.7 percent of the world's chip manufacturing. This manufacturing process requires large amounts of tacit know-how. 
- China controls the largest share of manufacturing for most natural materials. The US and its allies have a sizable share in all materials except for low-grade gallium, tungsten and magnesium. 
- China controls ~2/3rds of the world's silicon production, but the US and allies have reserves. 

The report also analyzes US competitiveness at very detailed levels of the supply chain, which I didn't read that carefully. Tables:

![img](https://lh4.googleusercontent.com/VRBoFAOwfEg7y4f-xWwAwHnPYX0wrvpAnUqcCyKvVlsuZ18UxLa6M_nTEMpXGUsHsVUv08-wI5y8vZOir3Xo6cvRLyixTVC1Rx_XbM2uqUlydiz-apuPDwVeXwygaBRz_rx8bECO) 

![img](https://lh5.googleusercontent.com/ZN0a2LZLQ9kiRKeK7oMTRo-BYzDGVFX8pqu3TJTrdhDL6kH8CyVYbPC-6cqGgzIQhHncCqCk4U0BmHM6mqLHwWRYfjJcgbD49afdjtjoFenUcPMcp-4xWYZARJmd5Oh7jXoikzkb) 

![img](https://tva1.sinaimg.cn/large/008i3skNgy1gsa86rxceqj30u00y478x.jpg) 

## Opinion

One perspective on the economy is that it's running a vast, distributed computation to allocate supply to demand in a relatively efficient manner. Examining the details on one of the supply chains underpinning a half a trillion dollar industry is relatively awe-inspiring. The only thing I'm currently aware of that is as complicated as computer hardware is computer software, which is sort of cheating. As AI becomes more advanced, control of semiconductor production becomes a strategic resource. However, there are multiple monopolies/sort of monopolies at every point. Each of these monopolies has a relatively large amount of bargaining power under many reasonable models. This situation puts the world in an interesting place. One concrete thing that I didn't consider before reading this report is the relevance of design software to semiconductor manufacturing. In retrospect, it seems pretty clear that the design of complicated things, e.g., video games, buildings, semiconductors, and animations, require complicated software with companies dedicated to building it. Lacking this software could constitute a meaningful bottleneck to being able to produce complicated artifacts. The asymmetry between manufacturing software and hardware is that software is easier to acquire through illegal means, whereas a EUV scanner has “100,000 parts, 3,000 cables, 40,000 bolts and 2 kilometers of hosing,” making it prohibitive to steal.

# Intelligence Explosion Microeconomics (Eliezer Yudkowsky)

[Intelligence Explosion Microeconomics](https://intelligence.org/files/IEM.pdf)

## Summary

Takeaways I found interesting: Evolutionary history strongly suggests that there are linear or superlinear returns to increased cognitive investment. Various lines of evidence, e.g. brain size of humans compared to chimps, look linear with respect to time. The last common ancestor of humans and chimps was only about 10 million years ago. 400,000 generations isn't enough time for mutations with low fitness increases to reach fixation, so the timelines are inconsistent with rapidly diminishing cognitive returns. If intelligence is a product of software capabilities and hardware capabilities, a series of recursive software improvements (in terms of percentile gains) can converge to a finite amount or go to infinity depending on the amount of hardware present. In economics, [Jevon's paradox](https://en.wikipedia.org/wiki/Jevons_paradox) is the observation that increasing the efficiency of coal use might increase the demand for coal. Similarly, algorithmic improvements in AI might increase how profitable AI is, resulting in increased spending on computers. 

## Opinion

I knew most of the stuff in this paper already, but the presentation was clean and the arguments were well laid-out. I wish I had read it instead of the [AI-FOOM debate](https://intelligence.org/ai-foom-debate/), although the latter was likely more entertaining.

# Artificial Intelligence and Economic Growth (Philippe Aghion, Benjamin F. Jones & Charles I. Jones)

[Artificial Intelligence and Economic Growth](https://www.nber.org/papers/w23928)

## Summary

The authors speculate on how economic growth might be affected by artificial intelligence by considering two main themes. The first theme is modeling artificial intelligence as a continuation of the natural historical processes that have automated various parts of the economy for the last 200 years. This theme allows historical data to be used to inform future speculation.The second theme is to constrain growth by considering Barmol's "cost disease", the observation that sectors that experience productivity growth see their share of the GDP declining, while sectors with slow growth see their share of GDP increasing. To quote the authors, "as a consequence, economic growth may be constrained not by what we do well but rather by what is essential and yet hard to improve." The author's model a situation in which the economy has two inputs, labor and capital, and work is divided into various tasks. Tasks can be automated, in which case they take a unit of captial to finish, or unautomated, in which case they take a unit of labor. In this model, as the fraction of tasks that are automated increases, the capital share, i.e. the amount of GDP going to people who are investing money as opposed to time, goes up. However, as the captial share rises, captial begins to accumulate, which results in an excess of automated goods (since they can be produced with only capital). This surplus results in the value of automated goods declining relative to nonautomated goods, resulting in "cost disease" type effects. As more sectors are automated, this increases the share of automated capital. However, since these sectors grow faster, the price declines. Implicit in this model is low elasticity of substitution between automated and nonautomated goods, i.e. as more goods become automated, it requires even more automated goods to replace the remaining nonautomated goods. This rate increases fast enough that even with infinite automated goods, there still remains some amount of goods that are nonautomated. This general process produces overall balanced growth because nonautomated goods provide a constraint the overall speed of the economy. Other models are then presented and analyzed, with the general trend being elasticity of substitution being an important parameter.

## Opinion

I'm not really sure of what to think of predicting AI growth with economic tools. I think they're useful because they allow you to answer questions like, "What happens if we model AI as a continuation of historical automation?".However, I am unsure if this is the correct question to be answering. I also enjoyed the discussion of how cost disease type effects can prevent extremely explosive growth even if one good cannot be automated. I'm pretty skeptical that there will exist such a good. I don't have data to back this up, but I have a vague sense that historically when people have claimed that X cannot be automated away for fundamental reasons, they've been mostly wrong. The most plausible story to me seems like regulation won't be fast enough to keep up with the pace of automation and instead of getting e.g. automated doctors, we get AI systems that do all the work for the doctor but the doctor has to be the one that gives the treatment. In the short term, these regulatory hurdles might be enough produce balanced growth for a period before growth becomes explosive.As a counterpoint, historical trends suggest rapid adoption.[ Brookings](https://www.brookings.edu/blog/future-development/2020/01/17/whoever-leads-in-artificial-intelligence-in-2030-will-rule-the-world-until-2100/):

![img](https://tva1.sinaimg.cn/large/008i3skNgy1gsa86twr73j30nn0cz74d.jpg) 

# Are Ideas Getting Harder to Find? (Nicholas Bloom, Charles I. Jones, John Van Reenen, and Michael Webb)

[Are Ideas Getting Harder to Find?](https://web.stanford.edu/~chadj/IdeaPF.pdf)

## Summary

The authors model technological progress as a product of the number of researchers and productivity per researcher. They typically define technological progress such that constant progress leads to exponential growth in the economy, with the logic being that ideas can spread throughout the entire economy without cost. For example, an idea that causes a percentage decrease in the size of a transistor will result in a percentage increase in the number of transistors per some unit area. In areas such as medicine, the authors measure technological progress as a linear change in life expectancy. 

The authors measure the number of researchers by taking aggregate R&D spending and deflating it by the average researcher wage. In addition to controlling for the effects of researcher wage increase, assuming roughly that labs will optimally allocate capital between high/low skilled researchers and lab equipment, dividing the by the average researcher wage allows for relatively fair comparisons between these different types of spending. They also consider other measures of research such as the number of clinical trials or the number of published papers in an area. In general, research efforts are increasing exponentially. In semiconductors, the research effort has risen by 18 since 1971. Between 1969 and 2009, corn and soybeans seed efficiency research both rose by more than a factor of 23.

The authors measure total technological progress across many domains by looking at transistors, crop yield per unit area, and life expectancy. The first two exhibit steady exponential growth (constant percentage), while life expectancy historically exhibits linear growth. Estimating the rate of technological progress and the effective number of researchers lets the authors calculate productivity. The results are quite clear: it's declining. For a representative example, transistors per unit area has been basically increasing at a constant 35% per year for the past 50 years, but research effort has risen by 18, which means it's currently 18x harder to maintain the same rate of growth as it was in 1971. This pattern appears to varying degrees in other fields. Table 7 summarizes:

![img](https://tva1.sinaimg.cn/large/008i3skNgy1gsa872ab78j30y10u0dv7.jpg) 

The authors also calculate a $$\beta$$ parameter that measures the extent to which successive doublings in production are more difficult. For example, the economy has $$\beta=3$$, so each successive doubling of the economy requires 3x the aggregate research input (in this case R&D spending). However, semiconductors have $$\beta=0.2$$, so each successive doubling only requires 0.2 of a doubling of inputs. The reason why semiconductor research has undergone such a large productivity decrease is because it has undergone so many doublings.

## Opinion

Yep, it sure seems like research productivity is declining. Why? I recently read [Intelligence Explosion Microeconomics](https://intelligence.org/files/IEM.pdf), so I'm tempted to say something like "Research is a product of serial causal depth of thinking, you find the easiest innovations first, and the later ones are going to be exponentially harder." I don't quite think this is true and I'm not sure what it would imply if it were true, but I suspect that low-hanging-fruit being picked is probably the main reason. I've heard "duplicate work" mentioned as another possible reason, but I'm not as compelled because good ideas getting duplicated doesn't seem to happen often enough to explain such large decreases in productivity. I enjoyed reading about how the authors thought about measuring the various inputs and outputs of their equations, e.g. how they would measure "total research" and "technological progress." I wouldn't be surprised if they got something very wrong, but their results have been applied to many areas so I would be surprised if the qualitative trends were wrong. I'm sort of surprised that growth theory is said to assume constant research productivity. The sort of basic observations that R&D spending has increased but economic growth has remained roughly the same seems to imply the obvious conclusion that productivity is declining. The corresponding counterargument surveyed by the paper that productivity within domains remains constant but aggregate productivity is declining seems sort of also clearly false if you think about any industry. My suspicion is that the falseness of this assumption has been obvious for a while, but people thought it might be a reasonable approximation or no one had bothered to get the data to falsify it until the authors. There's some argument that since economics research (and other theoretical stuff) has no clear way for it to make money, it's not going to be as efficient as semiconductor research, so fruit hangs lower, this paper being one such example. I suspect this observation to be relatively sophomoric compared to analyses of "research economies" that have definitely been done by some people.

# Statistical Basis for Predicting Technological Progress (Béla Nagy, J. Doyne Farmer, Quan M. Bui, Jessika E. Trancik)

[Statistical Basis for Predicting Technological Progress](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0052669)

## Summary

How will technological development happen in the future? The authors compile a dataset of production versus unit cost for 62 technologies and hindcast a variety of prediction rules to determine which functional form tends to relate production and unit cost. They find that Wright's law, which predicts unit cost is some constant fraction of cumulitive production, is most predictive, with Moore's law slightly after.Another way to interpret Wright's law is the prediction that unit cost will be exponentially decreasing and cumulative production will be exponentially increasing, with the ratio between the exponents being a constant. Moore's law, on the other hand, only predicts that unit cost will decrease exponentially without positing a relation between production and cost. Wright's law is often interpreted to imply "learning by doing," with the thought being most technological advances (decrease in unit costs) come from attempting to scale up manufacturing. The authors conclude by commenting that their dataset doesn't contain enough technologies that don't grow exponentially to strongly distinguish between Moore's law and Wright's law.

## Opinion

From the perspective of thinking about broad strokes technological progress, Wright's law seems like a strict upgrade to Moore's law. However, Wright's law still leaves unanswered the question "Why is cumulative production increasing exponentially?" Also, given that production is increasing extremely rapidly for most technologies, total cumulative production is only a few years or decades of current production levels. For example, if production grows by 50% a year and we're at 150 units per year right now, the past few years will have been 100 units, 67 units, 45 units, etc., which is a convergent geometric series that will sum to 450, 3 years of current production (see that 3 = 1/(1 - (1/1.5))). Thus, even if current technological production stagnates, we should expect cumulative production to continue growing quickly. If Wright's law holds, this will correspond to a large decrease in unit cost.

# Experience curves, large populations, and the long run (Carl Shulman)

[Experience curves, large populations, and the long run](http://reflectivedisequilibrium.blogspot.com/2020/05/experience-curves-large-populations-and.html)

## Summary

An experience curve predicts unit cost will fall a constant percent every time cumulative production doubles. Experience curves have empiricallly good at predicting technological progress across a variety of domains. For information technologies, experience curves predict an approximate halving of unit cost for each doubling of cumulitive production. There are enough resources on Earth to sustain many doublings of cumulative production. For example, solar panel production could be scaled up 1000x, which is 10 doublings. According to [Nagy et al.](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0052669), this would result in a 10x decrease in unit costs. For information technologies, whose production has been rising exponentially, a thousand years at current production levels would result in a 100x increase in cumulative production, which implies a 100x decrease in unit costs. Furthermore, Earth only captures about a billionth of the share of solar energy. [Fact check: the Earth is 150 billion meters from the Sun and is about 6 million meter radius. The area of space 150 billion m from the sun is about 10^22, while the area occupied by the Earth is about 10^12, a difference of 10^10, which is about a billion.] This theoretically gives another 9 orders of magnitude (OOM) for growth in cumulative production across many technologies. Space also exists and has many resources, giving many more OOMs. All this suggests if humanity does eventually use these resources, Wright's law implies we will run into the physical limits of technological progress. 

## Opinion

It's often useful to answer questions like "if we just take the existing trends and extrapolate them, what does that predict?" For example, [Roodman](https://www.openphilanthropy.org/blog/modeling-human-trajectory) uses historical GWP data to predict that humanity reaches a singularity in 2047. The point of the exercise is not to find out when humanity will reach a singularity, but rather determine how strong one's arguments have to be in either direction. For example, people who claim that AGI will cause a singularity around 2050 are making a prediction in line with historical super-exponential economic growth. Those who claim this won't happen are thus claiming that Roodman's extrapolation is overoptimistic. Similarly, using simple models relating technological progress to cumulative production predicts that we'll hit technological limits before we exhaust the amount of easily available resources. This is interesting because then people who claim that we won't either have to defy the increase in cumulative production or the relation between cumulitive production and unit cost.I'm tempted to say something like "burden of proof", but I don't think that's really how arguments should work. The point is that doing such analyses lets discussion drop more easily to object-level disputes about whether particular models are accurate or not or the value of particular parameters, which I think are often more productive.