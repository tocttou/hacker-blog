---
title: Transparency Trichotomy
---

*Crossposted from the [AI Alignment Forum](https://alignmentforum.org/posts/cgJ447adbMAeoKTSt/transparency-trichotomy). May contain more technical jargon than usual.*

# Introduction

In [Relaxed Adversarial Training for Inner Alignment](https://www.alignmentforum.org/posts/9Dy5YRaoCxH9zuJqa/relaxed-adversarial-training-for-inner-alignment#The_core_problem__transparency), Evan presents a trichotomy of ways to understand a model M:

1. **Transparency via inspection:** use transparency tools to understand M via inspecting the trained model.
2. **Transparency via training:** incentivize M to be as transparent as possible as part of the training process.
3. **Transparency via architecture:** structure M's architecture such that it is inherently more transparent.

For each type of transparency, we will analyze them on dimensions that influence how effectively we can use them to align powerful systems:

1. **Scalability** asks how easily the transparency method scales to more parameters, compute, data, training steps, etc. Factors that influence scalability include reliance on human judgment, the ability to automate with compute, and how easily the human judgment required can be distributed.
2. **Gameability** asks the extent to which optimizing an interpretability tool makes it less valuable. Easily gameable tools can be rendered useless by SGD or [deceptively aligned](https://www.alignmentforum.org/posts/ocWqg2Pf2br4jMmKA/does-sgd-produce-deceptive-alignment) mesa-optimizers. Factors that influence gameability include how frequently the transparency tool is deployed, how much the tool relies on human judgment, and how it is used.
3. **Quality** asks about the level and type of understanding the transparency tool can give you about how the model works. Factors that influence quality include reliance on human judgment, the smallest unit at which the tool can operate, and how sharp the resulting predictions are.


# Transparency via inspection

Transparency via inspection seeks to understand and predict a model's behavior via looking at it directly. Currently, this means looking at the weights of a neural network and trying to obtain information. A prototypical example of inspection transparency is Olah et al.'s [Circuits thread](https://distill.pub/2020/circuits/).

**Scalability.** Inspection transparency primarily functions by having humans look at the weights of a neural network and make various judgment calls. For instance, the authors of [An Overview of Early Vision in InceptionV1](https://distill.pub/2020/circuits/early-vision/) look at the first layer of InceptionV1 and determine that 28 of the 64 features correspond to [Gabor filters](https://www.wikiwand.com/en/Gabor_filter). As such, current inspection transparency requires large amounts of human labor, making it scale poorly with parameter count (unless labor can be automated). Current inspection transparency tools often use dataset examples to determine the function of particular neurons, so these tools might scale with increased data.

It's possible that once neural networks are better understood, inspection transparency can be mostly automated, with human judgment only required for edge cases. Additionally, Filan et al.'s [Pruned Neural Networks are Surprisingly Modular](https://arxiv.org/abs/2003.04881) suggests that inspection transparency might scale softer than expected.

**Gameability.** Since inspection transparency requires many human judgment calls, it is approximately as gameable as human judgment. To this extent, inspection transparency tools can be gamed insofar as there is something applying optimization power to game them. We postulate that the most likely source of this optimization power is a [deceptively aligned](https://www.alignmentforum.org/posts/ocWqg2Pf2br4jMmKA/does-sgd-produce-deceptive-alignment) mesa-optimizer. In particular, inspection transparency tools that easily scale are more likely to be proxy measures, making them more gameable.

To decrease the chances of getting gamed, one can try to sanitize the training data to remove information that would make such gaming possible. The extreme end of sanitization is Garrabrant and Kumar's suggestion that [human models be avoided](https://intelligence.org/2019/02/22/thoughts-on-human-models/), which can concretely be implemented in [STEM AI](https://www.lesswrong.com/posts/fRsjBseRuvRhMPPE5/an-overview-of-11-proposals-for-building-safe-advanced-ai#6__STEM_AI). 

If one is less concerned about deceptive alignment, inspection transparency tools might provide an independent check against [proxy pseudo-alignment](https://www.lesswrong.com/s/r9tYkB2a8Fp4DN8yB/p/pL56xPoniLvtMDQ4J#3_1__Pseudo_alignment) by, e.g., verifying that a classifier relies on features that a human would consider robust.

**Quality.** The amount of information we could gain about a neural network by looking at it depends on how hard you look. The amount of information such tools will give us depends on how obfuscated the information is, how hard we are willing to look, and how efficiently inspection transparency tools convert effort to information. 

The quality of inspection transparency is primarily an empirical question and cannot be easily answered right now.


# Transparency via training

Transparency via training seeks to provide a gradient to the model during the training process, making it more understandable and predictable. Work that gestures in this direction is Wu et al.'s [Tree Regularization of Deep Models for Interpretability](https://arxiv.org/abs/1711.06178). However, tree regularization does not increase interpretability, for reasons explained by [Alex Flint](https://www.lesswrong.com/posts/r3NHPD3dLFNk9QE2Y/search-versus-design-1#Wu_et_al___Beyond_Sparsity__Tree_Regularization_of_Deep_Models_for_Interpretability_14_).

**Scalability.** We can think of training transparency as regularizing a neural network to make it more interpretable. Provided the transparency loss does not depend on the model being a particular size, it should scale with compute, data, model parameters, and training steps. If the transparency gradient is difficult to compute, training transparency may become infeasible as parameter number increases. 

Human labor is required to design the training transparency tool. How complex that design problem is primarily an empirical question. 

[The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) suggests that training transparency will do the bulk of making large models more transparent.

**Gameability.** Training transparency is as gameable as the metric upon which you're training. There are two sources of optimization power being applied to game the metric: the training process (outer-loop optimization) and the (potentially nonexistent) mesa-optimizer (inner-loop optimization). 

Training transparency is trying to optimize a transparency metric, likely with a local search process like SGD. Since the transparency metric being used is likely imperfect, this will fall prey to [Goodhart's Law](https://www.lesswrong.com/tag/goodhart-s-law). However, we think outer-loop optimization pressures are weaker, so training transparency is less likely to be gamed in an undesirable way. We can further reduce these pressures by using a transparency metric that is relatively easy to satisfy, e.g., presence or absence of relatively broad properties.

If the transparency metric being trained doesn't discourage deceptive alignment, as in [relaxed adversarial training](https://www.alignmentforum.org/posts/9Dy5YRaoCxH9zuJqa/relaxed-adversarial-training-for-inner-alignment), the transparency metric will also be subject to inner-loop optimization pressures.[^subtle] More specifically, a deceptively aligned mesa-optimizer might use [gradient hacking](https://www.lesswrong.com/posts/uXH4r6MmKPedk8rMA/gradient-hacking) to cause the "tails to come apart" of the transparency metric it is being trained upon. We expect inner-loop optimization pressures to be stronger than outer-loop optimization pressures. However, we do not know how difficult it will be for inner-loop optimization pressures to be applied to the transparency metric, making comparison difficult.

[^subtle]: There is subtlety in what properties your transparency metric needs to satisfy to effectively rule out deceptive alignment that we will not discuss here.

**Quality.** To train on a transparency metric, it has to be expressable as a differentiable function. Given that this metric has to be human-designed and avoid extreme forms of Goodhart's law, it will likely be relatively simple. This requirement means that training transparency will likely only confer a weak understanding of a model, perhaps the presence or absence of specific simple properties, but not strong predictive power. One way around this is to use [relaxed adversarial training](https://www.alignmentforum.org/posts/9Dy5YRaoCxH9zuJqa/relaxed-adversarial-training-for-inner-alignment) to recursively train on a fuzzy transparency metric. 

It might be possible that simple transparency metrics can produce sharp predictions about neural networks given certain capability assumptions. Since this question is primarily empirical, we will refrain from too much speculation.


# Transparency via architecture

Transparency via architecture seeks to create models with intrinsically interpretable architectures. For instance, a [decision tree](https://www.wikiwand.com/en/Decision_tree) might be more interpretable than a neural network. Rudin's [Stop Explaining Black-Box Machine Learning Models for High Stakes Decisions and Use Interpretable Models Instead](https://arxiv.org/abs/1811.10154) largely argues for architectural transparency.

**Scalability.** The [Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) says ML will use methods that best leverage computation. The question, then, is not whether there exist transparent architectures that scale with compute/data, but rather whether such architectures exist that are competitive with the current paradigm, namely black-box deep neural networks. As of now, there are no transparency architectures that can compete with black-box approaches.

[MuZero](https://deepmind.com/blog/article/muzero-mastering-go-chess-shogi-and-atari-without-rules) deploys a [Monte Carlo tree search](https://www.wikiwand.com/en/Monte_Carlo_tree_search) guided by neural networks. Such a search is partially human interpretable, so this dual architecture represents an improvement from black-box approaches. In general, it might be possible to structure training in a modular way that takes advantage of state-of-the-art machine learning capabilities while still aiding human interpretability. This method, however, still leaves parts of the model uninterpretable, which might be problematic. Such a modular structure might also force particular problem decompositions. If such decompositions are suboptimal, the dual architecture might be less competitive. If such decompositions are challenging to learn, then such architectures might be more competitive.

**Gameability.** Architectures that appear transparent might only do so when the optimization power being applied is low. For example, electronic circuits might be considered an interpretable architecture; however, Thompson's [An evolved circuit, intrinsic in silicon, entwined with physics](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.50.9691&rep=rep1&type=pdf) results in a circuit with a disconnected, yet necessary, logic gate that exploited unforeseen physical interactions. More concretely, MuZero's architecture contains a suggestively named "value net," however, our current training methods give us no guarantees that this neural network is _only_ calculating the value of a state. In the worse case, the network that calculates state value is a deceptively aligned mesa-optimizer.

More generally, human interpretable architectures might become less interpretable as the architecture scales. For instance, single decision trees might be relatively easily interpreted with five variables, but with 5 million, the problem becomes daunting. For architectural interpretability to survive [Goodhart's Curse](https://arbital.com/p/goodharts_curse/), the _best_ performing model in a given architecture must be interpretable, not just the average model. 

**Quality.** The quality of architectural transparency relies on how transparent the architecture is. Since the architecture must be interpretable _in general_, we find it unlikely that architectural transparency will result in a solid understanding of the resulting model without large capabilities decrease. 


# Interactions

The transparency trichotomy is a broad categorization of transparency tools that we can use synergistically.

**Recursive oversight.** Recursive alignment schemes such as iterated amplification might allow a model to be overseen by a more powerful overseer during training. This overseer can use transparency tools to ensure the model has specific safety properties.

In particular, if oversight is done with a model of a human, this allows for training transparency to be done with inspection transparency tools, potentially circumventing the design difficulty of training transparency. If oversight is not done with a model, there might still be methods of eliciting gradients that make this cross-fertilization possible.

Note that since inspection transparency tools are likely highly gameable, we are relying on the recursive structure to refine the inspection process iteratively. 

**Inspection/Training.** We can train models in ways that make them easier to inspect. For instance, Filan et al.'s [Clusterability in Neural Networks](https://arxiv.org/abs/2103.03386) explores ways of training neural networks to be more clusterable. Clusterable neural networks might make inspection transparency more factorizable, thus making it a more scalable solution. Additionally, Olah et al.'s [Zoom In](https://distill.pub/2020/circuits/zoom-in/) notes that training networks to not exhibit polysemanticity might advance the circuits agenda. A technique similar to [Deep Reinforcement Learning from Human Preferences](https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/) could also be used to learn a model of inspection transparency that can then provide a training signal.

Instead of training networks to be inspectable, we can also inspect networks to determine training objectives. In particular, we can use inspection transparency tools to uncover a high-level understanding and then devise a training signal that makes the network conform to this understanding. For example, we can regularize model components proportionally to how little we understand them, which might produce perfectly interpretable models in the limit of training.

**Inspection/Architecture.** We can also use architectural transparency to make inspection transparency easier. For instance, architectures designed to have particular components perform particular functions might both allow for inspection transparency tools to be applied to smaller, more specialized networks and guide inspection transparency. For instance, if an architecture with a planning component and a value component, the planning component can be inspected for [value neutrality](https://www.alignmentforum.org/posts/jGB7Pd5q8ivBor8Ee/impact-measurement-and-value-neutrality-verification-1). If the architecture includes a separable world model, it can be inspected to ensure it doesn't have undesirable properties.

**Training/Architecture.** Similarly, architectures can be coupled with training transparency objectives to ensure the particular black-box components of the architecture function as intended. For instance, if an architecture has a planning component and a value component, we can train the planning component to be [value-neutral](https://www.alignmentforum.org/posts/jGB7Pd5q8ivBor8Ee/impact-measurement-and-value-neutrality-verification-1). Similarly, we could train the value component to be [corrigible](https://www.alignmentforum.org/posts/BKM8uQS6QdJPZLqCr/towards-a-mechanistic-understanding-of-corrigibility). In general, coupling training transparency with architectural transparency allows the training transparency to be more precisely targeted to specific functions. 