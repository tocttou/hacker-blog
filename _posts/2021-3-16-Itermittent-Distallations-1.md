---
title: "Intermittent Distillations #1"
---

This is my low-budget version of Rohin's [Alignment Newsletter](https://rohinshah.com/alignment-newsletter/).


# A critique of pure learning and what artificial neural networks can learn from animal brains (Anthony M. Zador)

[A critique of pure learning and what artificial neural networks can learn from animal brains](https://www.nature.com/articles/s41467-019-11786-6) 

## Summary

This paper points out that human learning algorithm must rely on nearly all unsupervised data because humans don't live that long before they become intelligent. The authors also point out that many animals, potentially including humans, are remarkably functional after only a very short time being alive. This result suggests that there are parts of animal behavior that are not learned. This observation aligns with Yann Lecun's metaphor: "If intelligence is a cake, the bulk of the cake is unsupervised learning, the icing on the cake is supervised learning, and the cherry on the cake is reinforcement learning."

Since the genome contains finite information (only about 1.5Gb in humans), there is a tradeoff between having lots of innate and fixed behaviors and having many learned and adaptable behaviors. Animals in relatively rigid environments might benefit from having lots of innate and fixed behaviors, whereas animals in adaptive environments might benefit more from learning. Additionally, animals that must be functional early to survive might favor innate behaviors, whereas animals with time to learn can achieve higher peak performance.

The authors also suggest that the genome's finite information might form a "genomic bottleneck" that serves as a regularizer, potentially improving generalization performance.


## Opinion

I agree with the observation that most humans seem to learn based on unsupervised data, although I think there are denser forms of "labels" in reality than the authors claim. For example, babies can get reinforcement from their parent's facial expressions, which potentially gives them a considerable number of labeled examples.

I have already read (although I forget the source) that babies preferentially look at things with two dark spots above a single dark spot because these patterns are likely to be faces. If true, this instinct suggests that in addition to "innate behaviors", animals also have "innate learning heuristics" that direct them to places to get high-quality training data.

I am unconvinced by the claim that the size of the genome serves as a meaningful bottleneck. There doesn't seem to have been that much evolutionary pressure for the genome to get larger, so it doesn't seem like it has served as a meaningful bottleneck.

I am relatively sympathetic to arguments that the speed at which humans learn things suggests that there exists efficient architectures and/or learning algorithms. Further discussion is available [here](https://www.lesswrong.com/posts/ixZLTmFfnKRbaStA5/book-review-a-thousand-brains-by-jeff-hawkins).

Disappointingly, the paper concludes by claiming that artificial general intelligence will "constrained to match human capacities so tightly that only a machine structured similarly to a brain can achieve it", which seems pretty false to me.


# Learning Normativity: A Research Agenda (Abram Demski)

[Learning Normativity: A Research Agenda](https://www.alignmentforum.org/posts/2JGu9yxiJkoGdQR4s/learning-normativity-a-research-agenda)

[Alignment Newsletter Summary](https://mailchi.mp/c8b57f25d787/an-133building-machines-that-can-cooperate-with-humans-institutions-or-other-machines) 


## Summary

What is the "correct usage" of language? There are more "correct" ways of using language, but no human speaks perfectly. However, humans can often learn how to speak language by being taught by humans who use language imperfectly in a way that lets them speak better than their teachers. The fact that this process is possible suggests that humans learn from data that contains mistakes without learning the mistakes. The author calls the rules that govern the use of language "norms" and proposes that learning these norms is an alignment method.  

If something is learning from feedback, you want to be able to give it feedback about how it's learning from the feedback, how it's learning how to learn from the feedback, etc. When does this end? The author suggests a fixed point, where adding the N+1th level of feedback would not change the process anymore. The particular way that the author proposes this is done is with quantilizers. This amounts to learning to take 90th percentile actions using a 90th percentile learning process and a 90th percentile loss-function, which was learned using a 90th percentile meta-learning process with a 90th percentile loss-function, etc. The way the learning happens is by taking initial distributions, recursively quantilizing them until you reach a fixed point, then propagating feedback about the fixed-point back up to the initial distributions that generated that fixed point.   


## Opinion:

The discussion on norms was interesting. Norms seem pretty different from imitation because you can learn to do better than your teacher, but I'm not sure how "norms" aren't just different than quantilization. I also am not quite sure that norms are different than values. They aren't quite a utility function that can be unboundedly maximized without disaster, but most human goals are formulated in a way that looks more like norms than a utility function. Maybe this is part of the point of the post.

The post also contains a list of desiderata that I found interesting, although I disagree about how desirable some of them are in practice. In particular, I'm not sure systems need to learn at all levels because we can probably get some sense of the safety of the top level. 

The proposal also is definitely not training competitive, although I'm sure it wasn't meant to be.


# Scaling Laws for Transfer (Danny Hernandez)

[[2102.01293] Scaling Laws for Transfer](https://arxiv.org/abs/2102.01293) 

[Alignment Newsletter Summary](https://mailchi.mp/9887edab4e73/an-137-quantifying-the-benefits-of-pretraining-on-downstream-task-performance) 


## Summary

The way that large ML models get trained is generally by first pretraining on massive amounts of data, then fine-tuning them with task-specific data. This paper investigates how much the pre-training helps the model by framing in terms of "effective data transferred", e.g. how much more fine-tuning data would have been needed to get the same performance without pretraining. For instance, if you would need 1 Gb of data to achieve performance 10 on some task, but I only need 0.1 Gb to achieve performance 10 if I pre-train first, then pre-training is equivalent to 0.9 Gb of task-specific performance. The paper uses pre-training on natural language and fine-tuning on python code to investigate how effective data transferred scales with fine-tuning size and model parameters. It assumed the model is trained on basically infinite pre-training data

The authors find a simple scaling law that governs the effective amount of data that gets transferred: $$D_{T}=\text { effective data transferred }=k\left(D_{F}\right)^{\alpha}(N)^{\beta}$$, where $$\alpha$$ can be interpreted as the overlap between the pre-training distribution and the fine-tuning distribution and $$\beta$$ can be interpreted as how well the architecture generalizes to the fine-tuning distribution. For their natural language to python experiments, the authors find $$\beta = 0.38$$ and $$\alpha = 0.18$$. Since $$\beta \approx 2 \alpha$$, increasing the model size by 10 times is roughly equivalent to getting 100x the fine-tuning data. In the low data regime, the effective data transferred is far greater than the size of the fine-tuning set.

The authors also discuss ossification, a phenomenon in which pre-training hurts performance, which happens with the model is small and the fine-tuning dataset size is large


## Opinion

These results roughly match my picture of how models are going to get better at doing tasks. Compute can be used to do pre-training on vast amounts of data. These models will then be fine-tuned on a variety of tasks. If these scaling laws roughly hold, I suspect that it will be far more efficient per dollar to get a larger pre-trained model than to get task-specific data.

These results also roughly match my intuition that fine-tuning is basically letting the model locate the particular task in all the stuff it's already learned. There's some connection to the lottery ticket hypothesis, in that one can think of pre-training as collecting a set of very good lottery tickets. Fine-tuning would then be picking the particular lottery ticket you want to deploy. Increasing the model's size allows pre-training to collect a larger set of useful lottery tickets, so the resulting performance will lower. Ossification occurs the when a model isn't big enough to have a lottery ticket useful for the particular fine-tuning task and the fine-tuning size is large enough to "create" a lottery ticket from a randomly initialized model. Pre-training into fine-tuning in that regime thus requires the unlearning of lottery tickets learned during pre-training, making overall performance worse. 

It's also interesting to note that "how effectively does pre-training transfer" gives a process to answer vague questions like "is English more similar to French than it is to German?"


# Occam's razor is insufficient to infer the preferences of irrational agents (Stuart Armstrong and Sören Mindermann)

[[1712.05812] Occam's razor is insufficient to infer the preferences of irrational agents](https://arxiv.org/abs/1712.05812) 


## Summary

A potential way to create aligned AI is to observe human behavior and infer human values using inverse reinforcement learning (IRL). However, humans are irrational, so this inference has to decompose human actions in terms of a value function and a planning algorithm. Previous attempts to model human irrationality involve assuming noise in the planning algorithm. While this yields better experimental results on some datasets, it has been shown that humans are irrational in systematic ways, which the noise assumption fails to model.

A simple application of a No Free Lunch theorem shows that there are infinite ways to decompose any policy into a planning algorithm and value function. One way to see this is to realize that "do the best thing", "do the second best thing", "do the third best thing", etc. are all valid planning algorithms. Value functions can be constructed that make any particular sequence of actions the Nth best sequence, giving you many decompositions for any policy.

A more complicated No Free Lunch theorem shows that, for any policy, there exists a decomposition of the human policy such that the original policy is half as bad as the worse possible policy with respect to the value function generated by the decomposition of the human policy. This result implies that it is impossible to "hedge" against your uncertainty enough to avoid catastrophe if you don't have a distribution over possible human policies.

Normally, No Free Lunch theorems are rendered irrelevant by simplicity priors. However, simplicity priors cannot solve the unidentifiable decomposition problem. First, since any decomposition of a policy is a code for that policy, the complexity of the decomposition is lower-bounded by the complexity of the policy. Second, we construct three possible decompositions:

*   The planning algorithm always gives the human policy, and the value function is the 0 function.
*   The planning algorithm is myopic argmax and the value function is 1 iff the human policy would take that action else 0.
*   The planning algorithm is myopia argmin and the value function is -1 iff the human policy would take that action else 0.

Since converting a policy to a planning algorithm, argmax, argmin, converting a policy to a value function, and the constant zero function are all things that a "reasonable" programming language would be able to accomplish easily, these three possible decompositions have complexity close to the human policy. Since the complexity of the human policy is a lower-bound for the complexity of the decomposition, these decompositions are approximately as simple as the simplest possible decomposition, which means simplicity priors will have a difficult time distinguishing between "correct" decompositions and the degenerate decompositions constructed above.

Finally, the authors argue that the "real" decomposition of the human policy is very complicated because it must encode the unique nuances of human biases and cultural variation in values and irrationality.


## Opinion

The informal arguments in this paper are strong enough for me to basically believe that a simplicity prior will not be sufficient for back-inferring human preferences from the human policy. A similar argument extends to the speed prior, so adding that adjustment won't help either. 

The authors are careful to note that there are other ways to do inference that can dodge some of these problems. Notably, humans seem to make inferences about other humans all the time using what the authors call normative assumptions, which I take to mean something like a "human prior." Imitative Generalisation Is an alignment proposal that aims to learn this "human prior", which seems like it can be straightforwardly adapted to value learning.

Appendix C gives an interesting example of narrowing down which planning algorithm an agent is using by looking at the source code. This example gestures at the broader pattern of doing a mechanistic decomposition of the human policy, instead of just a behavioral one. I have written about a related topic in [Towards a Mechanistic Understanding of Goal-Directedness](https://www.alignmentforum.org/posts/nTiAyxFybZ7jgtWvn/towards-a-mechanistic-understanding-of-goal-directedness).

Overall, I view this class of objection as one of the core problems in value-learning-based approaches. I am optimistic about research that aims to deal with this objection directly and pessimistic about research that assumes a solution.


# The case for aligning narrowly superhuman models (Ajeya Cotra)

[The case for aligning narrowly superhuman models](https://www.lesswrong.com/posts/PZtsoaoSLpKjjbMqM/the-case-for-aligning-narrowly-superhuman-models)

[Alignment Newsletter Summary](https://mailchi.mp/9887edab4e73/an-137-quantifying-the-benefits-of-pretraining-on-downstream-task-performance) 


## Summary

One subcomponent of AI safety is differential capability improvements. AI safety research should make it comparatively easier to do things safely than not safely. For example, in [What failure looks like](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like), Paul Christiano describes a world that becomes complicated faster than humans gain increased ability to understand the world, resulting in human values "going out with a whimper." Differential capabilities research might aim to increase human ability to understand an increasingly complex world, reducing the probability of human values being lost.

One potentially tractable way of doing differential capabilities research is to get models that "know" how to do tasks better than humans to exert their full efforts in doing them. For instance, GPT-3 "knows" how to give better medical advice than most humans, but there might not be prompts that finagle GPT-3 into using all of its knowledge to give advice. We might say, then, that GPT-3 "knows" how to give the advice, but only "wants" to complete the next token. Aligning GPT-3, then, would consist of getting it to "want" to give good medical advice. Work that might be considered to be going in this direction is Learning to Summarize with Human Feedback.

Another strong reason why this type of work might be valuable is that it's a concrete instance of a problem in prosaic alignment that has short feedback loops. In general, AI safety as a field lacks feedback loops because the systems we're trying to align don't exist yet. Working on aligning models that have latent superhuman capabilities might serve as a "testing ground" for researchers to get practical experience at alignment.

The author goes over other potential reasons this work might be valuable and discusses a number of objections that I have not covered.


## Opinion

Thinking of parts of alignment as differential capabilities is a perspective I acquired fairly recently. I'm not yet sure how useful and valuable it is, as it is only really valuable in worlds where inner alignment is not a large problem. I am, however, very sympathetic to the claim that there is valuable information to be learned from getting experience aligning existing models.

I think that inner alignment is the core problem in AI safety, so I'm excited about alignment work that tries to address this problem directly. Not all forms of the work the author describes seem to do this, but some forms of it will likely give insight into "what GPT-3 is thinking", which I think is critical.

I'm also excited about how relatively "mainstream" this work could potentially be, as well as the breadth of potential projects it could generate. I'm cautious that these types of projects will be done in a way that is robustly useful. More specifically, I'm worried that methods of extracting latent capabilities in GPT-3 won't scale to GPT-4. I'm also cautious that this sort of work could increase excitement about capabilities, leading to more investment and deployment of powerful AI systems before we have developed working alignment technology. 

Overall, however, I agree with the author that shifting parts of current ML research to aligning narrowly superhuman models would likely be net-positive for AI safety as a whole.


# Asymptotically Unambitious Artificial General Intelligence (Michael Cohen)

[[1905.12186] Asymptotically Unambitious Artificial General Intelligence](https://arxiv.org/abs/1905.12186) 

[Alignment Newsletter Summary (previous version)](https://mailchi.mp/3e2f43012b07/an-54-boxing-a-finite-horizon-ai-system-to-keep-it-unambitious) 


## Summary

This paper constructs a myopic unbounded agent in a box that will not try to take over the world, i.e. is "asymptotically unambitious." The rough intuition is that boxed myopic AI (BoMAI) will only value what happens inside the box, causally separating the rest of the world from its reward. This proceeds roughly as follows:

*   Box the agent such that there are only causal pathways to reward inside the box.
*   Give the agent a prior that gives considerable weight to hypotheses with causal pathways to reward only inside the box.
*   Make the agent an optimal learner.

Since the agent is an optimal learner and the prior has a relatively large weight on the correct hypothesis, the agent will learn a correct reward model. Since the correct model does not involve causal pathways outside the box, the agent will not try to take over the world.

The paper has a bunch of math justifying these claims that is not that important. There is also an appendix that attempts to construct a box that is causally disconnected from the environment, which I find amusing, if not really relevant.


## Opinion

I find interesting the idea of achieving safety via causal separation from the rest of the world. Achieving literal causal separation from the environment is likely to be prohibitively difficult, although the general strategy of getting the AI to only value things inside a "box" seems promising. I'm particularly intrigued with non-physical boxes, as it seems related to myopia.

I'm also intrigued by the idea of an agent that reasons according to the maximum aposteriori (MAP) world model. I currently suspect that a clean definition of myopia that avoids these problems will require eliminating parts of the agent’s uncertainty, which applying the MAP trick seems to accomplish quite nicely. Obviously, there are problems with this, such as if the agent thinks the most probable world is one that involves potentially undesirable properties, but it does seem to restrict the influence of said worlds to the case where they are the maximum probability. Relatedly, one reason that the Solomonoff prior is malign because counts all possible worlds - taking the MAP world might make it less malign.

There is a bunch of math in the paper. As usual with results like this, the math is not that interesting. Parts of the theorems amount to "if we assume that models that involve &lt;property> require increased space, and we penalize space, then we won't get models with &lt;property>." This is obviously doable and not that interesting as a result. There is something to be learned about the cleanest way to formalize these assumptions and go through the corresponding proofs, but I think nearly all interesting insights the intuitions behind the math, as opposed to the math itself.