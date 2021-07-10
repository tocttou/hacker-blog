---
title: Defusing AGI Danger
published: True
---

*Crossposted from the [AI Alignment Forum](https://alignmentforum.org/posts/BSrfDWpHgFpzGRwJS/defusing-agi-danger). May contain more technical jargon than usual.*

This represents thinking about AGI safety done under mentorship by Evan Hubinger. Thanks also to Buck Shlegeris, Noa Nabeshima, Thomas Kwa, Sydney Von Arx and Jack Ryan for helpful discussion and comments.

# tl;dr

A common perspective to take with respect to AI safety to try and construct a story in which artificial general intelligence (AGI) goes right. I have recently acquired another perspective that I find helpful, which is AGI safety as disrupting stories for why AGI will go poorly. I will start by presenting an analogy to convey intuition, then apply this perspective to concrete examples of current alignment strategies.

# Introduction

Suppose you have a bomb that is about to explode. Your task is to make sure no one gets hurt. How might you reason about how to do this?

One way to do this is [backward chaining](https://www.lesswrong.com/posts/argvWNNHZAz2MeM8C/how-to-dissolve-it#Backward_Chaining), or backchaining, which involves identifying a sub-goal that, if achieved, will accomplish your main goal. This process is then recursively applied to generate a concrete next action.

Applied to the situation at hand, I might identify that defusing the bomb would prevent everyone from getting hurt. However, I do not know how to defuse a bomb. A sub-goal that would help me defuse a bomb is learning about bombs, which might suggest that I take a class on bomb-defusal. This is not helpful because I do not have time to take such a class. In general, backchaining might fail when there are many possible ways to accomplish a goal because it might cause you to fixate on one possible path.

Suppose that instead I ask “why do I think the bomb explosion will go poorly?”. The answer I get seems much more useful: the bomb will throw lots of little bits everywhere and those bits will hit people. This gives me two possible subquestions to ask: “why will the bomb throw bits everywhere?” and “why will those bits hit people?”. Answering the second question: the people are close by and there is nothing stopping the bits. Again, this yields two possible recursive subquestions. Notice how this framing forces me to consider many possible paths towards solving my goal simultaneously.

The point of the second perspective is to construct a specific story for why the bomb explosion will hurt people. The goal is to eventually arrive at something that looks like “the timer will hit zero, which will activate this diode, allowing electricity to flow from the battery into the explosive. This will cause the bomb to explode, flinging bits of metal at high velocities. Since there are people close to the bomb and there is nothing in the way, these bits of metal will hit the people, hurting them”. If the story is complete, if it includes the full reason why the current situation might result in people getting hurt, then violating any step of the story should make the current situation safe. 

In this case, one is left with a number of possible solutions:

*   Make the timer not hit zero
*   Make the diode never activate
*   Break the circuit, now allowing electricity to flow into the explosive
*   Move the people farther away
*   Put something in-between the bomb and the people
*   Make the people bits-of-metal-proof

Asking for a story of danger is a mental move that encourages specificity instead of abstraction. It is easier to be specific about something you expect to happen as opposed to conditioning on things that might happen and searching for explanations. Once one has generated a specific story of danger, the only remaining task is to violate one of its assumptions. 

# Applied to AGI Safety

You think that there is something called “AGI” that is going to cause bad things to happen. Your task is to make bad things not happen. How might you start reasoning about this?

Instead of backchaining, we can try to disrupt the current forward chain that leads to a bad outcome. Instead of asking yourself “how do I make AGI go well?”, it might be more useful to ask yourself “why do I think AGI will go poorly?” [^1]

[^1]: For the interested, [this](https://intelligence.org/2017/12/01/miris-2017-fundraiser/#3) is a good example of backchaining applied to AI safety.

Note that what follows is one particular way to break down one particular argument. I encourage people to consider other arguments for danger and other possible breakdowns. 

We will consider, as example, the argument laid out by [Richard Ngo](https://www.alignmentforum.org/s/mzgtmmTKKn5MuCzFJ):

1. We’ll build AIs which are much more intelligent than humans; that is, much better than humans at using generalisable cognitive skills to understand the world.
2. Those AGIs will be autonomous agents which pursue long-term, large-scale goals, because goal-directedness is reinforced in many training environments, and because those goals will sometimes generalise to be larger in scope.
3. Those goals will by default be misaligned with what we want, because our desires are complex and nuanced, and our existing tools for shaping the goals of AIs are inadequate.
4. The development of autonomous misaligned AGIs would lead to them gaining control of humanity’s future, via their superhuman intelligence, technology and coordination - depending on the speed of AI development, the transparency of AI systems, how constrained they are during deployment, and how well humans can cooperate politically and economically.

Despite the relatively high level of specificity compared to previous arguments, this argument is still underspecified in a number of places (what’s goal-directedness? What’s a cognitive skill? Why are our existing tools inadequate? What is generalization?). This is not a slight against Richard; most of these questions do not have answers (yet).

While we could recursively expand all parts of this argument, there are simplifications we can make. The goal of constructing a specific story for danger is to identify the easiest parts to violate. Therefore, we can save effort by only recursively expanding the parts of the argument that are most likely to be false.[^expand]

[^expand]: Technically, we want to expand the parts of the argument such that we think additional labor can most shift if from being “true” to “false”. Just expanding things that might be false seems like a good proxy.

Argument (1) seems likely to be true because of the strong economic incentives at play. Strategies that are oriented around preventing the creation of AGI seem incredibly unlikely to succeed. I think the only plausible scenario in which AGI is not developed is because humanity has suffered a large setback (up to and including extinction) for a different reason.

Argument (2) seems relatively uncertain. We currently have a poor understanding of agency and goal-directed behavior. It seems plausible that goal-directedness tends to be reinforced during training, but far from completely determined. It is also not obvious that those goals will generalize to be larger in scope; in particular, there is large uncertainty over the difficulty of _preventing_ this generalization.

Argument (3) seems relatively likely, although still far from determined. I am confident that [human values are complicated](https://www.lesswrong.com/tag/complexity-of-value). I am uncertain whether or not developing tools that enable better goal shaping is tractable, although I am not very optimistic.

Argument (4) seems relatively likely to be true because of the economic incentives at play. In particular, there seems to be a strong incentive to deploy opaque AI systems quickly and broadly. However, in cases where achieving domain generality for AI systems is difficult, deployment might remain relatively narrow. If opaque AI systems tend to behave strangely when deployed, there might be an incentive to increase transparency.

This suggests that further specifying arguments (2) and (3) is likely to be most fruitful.

## (2)  AGIs will be autonomous agents...

> Those AGIs will be autonomous agents which pursue long-term, large-scale goals, because goal-directedness is reinforced in many training environments, and because those goals will sometimes generalise to be larger in scope.

We can expand this argument into:

*   2a. Goal-directedness is reinforced in many training environments.
*   2b. Goals will generalize to be large in scope.
*   2c. Therefore, AGIs will have goals with large scope.

Recursing on (2a): Why is goal-directedness reinforced in many training environments?

*   2a1. Training environments tend to reinforce behaviors that accomplish a given task well.
*   2a2. Goal-directedness is useful for many tasks.

We now have a pair of research questions:

*   2a1*. How can we construct training environments with incentives that result in not-goal-directed agents?
*   2a2*. What are tasks for which goal-directedness is not useful?

Notice that this process of breaking down questions has slightly missed the forest for the trees. In particular, “construct a combination of task and training environment that produces not-goal-directed agents” sufficiently defuses argument (2a) but doesn’t directly answer (2a1*) or (2a2*). In practice, we might expect some research agendas to partially defuse the story for AGI danger in multiple places, such that the entire story no longer holds. However, it still might be useful to analyze the degree of defusal various pieces undergo.

Trying to recurse on (2b), I don’t have a very good answer to “why will goals generalize to be large in scope?”, so let’s call research question 2b* “how can we prevent goals from generalizing to be large in scope?”

## (3) AGI goals will be misaligned with what we want...

> Those goals will by default be misaligned with what we want, because our desires are complex and nuanced, and our existing tools for shaping the goals of AIs are inadequate.

We can expand this argument into:

*   3a. Human values are complex.
*   3b. It is extremely difficult to instill complex goals in AIs.
*   3c. Therefore, AGI goals will be misaligned with human values. 

Interrogating why human values are complex is not likely to yield actionable interventions, so I will not do it.

Recursing on (3b): Why is it difficult to instill complex goals in AIs?

*   3b1. Complex goals are hard to instill without small imperfections.
*   3b2. Any imperfection will result in misalignment.

This leaves us with a pair of research questions:

*   3b1*. How can we make it easier to instill complex goals in AIs?
*   3b2*. How can we make alignment robust to goal specification imperfection?

Further, note that (3a) and (3b) only imply that our AIs will not have human goals. This potentially leaves us with the additional avenue of 3c*: Are there simple goals that produce aligned agents?

# Applied to Agendas

Specifying a story for AGI danger has allowed us to identify six research questions, answers to which would potentially weaken the story for danger, which should be equivalent to increasing the chance of safety. We can roughly attempt to pair each of these research questions with current AI Safety research that attempts to address it.

*   2a1*. How can we construct training environments with incentives that result in not-goal-directed agents? [Relaxed adversarial training](https://www.alignmentforum.org/posts/9Dy5YRaoCxH9zuJqa/relaxed-adversarial-training-for-inner-alignment) for [myopia](https://www.alignmentforum.org/tag/myopia). 
*   2a2*. What are tasks for which goal-directedness is not useful? Predicting data is possibly such a task, which gives you [Microscope AI](https://www.lesswrong.com/posts/fRsjBseRuvRhMPPE5/an-overview-of-11-proposals-for-building-safe-advanced-ai#5__Microscope_AI). Predicting science in particular gives you [STEM AI](https://www.lesswrong.com/posts/fRsjBseRuvRhMPPE5/an-overview-of-11-proposals-for-building-safe-advanced-ai#6__STEM_AI).
*   2b*. How can we prevent goals from generalizing to be large in scope? [Impact measures](https://www.alignmentforum.org/tag/impact-measures) or [myopia](https://www.alignmentforum.org/tag/myopia).
*   3b1*. How can we make it easier to instill complex goals in AIs? [Value Learning. ](https://www.alignmentforum.org/tag/value-learning)
*   3b2*. How can we make alignment robust to goal specification imperfection? [Corrigibility.](https://www.alignmentforum.org/tag/corrigibility)
*   3c*. Are there simple goals that are aligned with human values? [Imitating humans.](https://www.alignmentforum.org/posts/33EKjmAdKFn3pbKPJ/outer-alignment-and-imitative-amplification#The_case_for_imitative_amplification)

In addition to thinking of part of AI Safety research as trying to address specific questions, we can consider how alignment proposals interact with the set of questions as a whole.

For example, [AI Safety via debate](https://www.alignmentforum.org/tag/debate-ai-safety-technique-1) might be safe because “win a debate” might be aligned with human values (3c*) and not generalize to be large in scope (2b*). 

There is also work that doesn’t fit within this picture. Much of the work done on the [Agent Foundations](https://intelligence.org/files/TechnicalAgenda.pdf) agenda, for instance, seeks to better understand assumptions about agency made by traditional stories for danger. One could think of this work as trying to create the pieces that will enable strong arguments for safety instead of trying to defuse arguments for danger.


# Pitfalls


## Vague danger scenarios

Many disagreements about the probability of existential risk due to AGI involve different intuitions about what the default scenario is going to be. Some people suspect that if we don’t have an ironclad reason to suspect AGI will go well, it will almost certainly go poorly.[^rocket] Other people think that the first thing we try has a reasonable chance of going fairly well.[^rohin] One can imagine a spectrum with “disaster by default” on one side and “alignment by default” on the other. To the extent that one is closer to “disaster by default”, trying to defuse specific arguments for AGI danger seems like it's missing the forest for the trees, analogous to trying to improve computer security by not allowing users to use “password” as their password. To the extent that one is closer to “alignment by default”, trying to defuse specific arguments seems quite useful, closer to conducting a fault analysis on a hypothetical airplane crash.

[^rocket]: See [The Rocket Alignment Problem](https://intelligence.org/2018/10/03/rocket-alignment/) for an example of such an argument.

[^rohin]: Rohin Shah puts about 30% on “the first thing we try just works and we don’t even need to solve any sort of alignment problem” in [AI Alignment Podcast: An Overview of Technical AI Alignment in 2018 and 2019 with Buck Shlegeris and Rohin Shah](https://futureoflife.org/2020/04/15/an-overview-of-technical-ai-alignment-in-2018-and-2019-with-buck-shlegeris-and-rohin-shah/).

If one believes that AGI will be misaligned by default, there is no particular reason why defusing specific arguments for AGI danger should make you more confident that AGI will be safe. In theory, every argument that gets defused should make you marginally more confident, but this update can be very small. Imagine someone presenting you with a 1000 line computer program. You tell them there’s a bug in their code, and they report back to you that they checked lines 1-10 and there was no bug. Are you _more_ confident there isn’t a bug? Yes. Are you _confident_ that there isn’t a bug? No. In these situations, backchaining to the desired outcome is more useful than breaking chains that lead to undesirable outcomes. 


## False narratives

One should believe defusing arguments for danger is useful only insofar as those arguments are [cruxes](https://www.lesswrong.com/tag/double-crux) for their belief that AGI is an existential risk. However, believing an argument is a crux does not guarantee that the argument has captured the true causal reason for why AGI is an existential risk. One can imagine being persuaded by a flawed argument, then working to defuse that argument in ways that are useless given the flaw.

For example, an argument for AGI danger might involve a [ghost in the machine](https://www.lesswrong.com/posts/cnYHFNBF3kZEyx24v/ghosts-in-the-machine) that modifies its own code to remove constraints. If that argument is a crux for someone, they might devote effort into designing safeguards against AGIs modifying their own source code. This seems unlikely to reduce the chances of AGI induced existential risk, but it does diffuse that particular argument for AGI danger.

In general, the confidence one should draw from research that aims at defusing arguments for danger should be proportional to the confidence that that particular argument captures the true reasons for danger. In practice, I suspect that most research is supported by multiple perspectives, including backchaining and argument diffusal.

# Conclusion

One way to think about AI Safety is as answering the question “how can I make AGI go well?” Considering this perspective carefully might allow you to backchain to a promising research agenda. 

Another way of thinking about AI Safety is as answering the question “how can I prevent AGI from going poorly?” Since it is easier to be specific about AGI going poorly compared to AGI going well, this might be a useful perspective to consider and generate research directions.

Relying purely on this perspective is dangerous. Defusing arguments for danger is more convincing the more one anticipates alignment by default and correspondingly less convincing if one anticipates disaster by default. Additionally, one should be careful to weigh by the confidence they have in the argument.

Overall, I think that defusing arguments for AGI danger is a useful perspective to take on AGI safety research. Much existing research does not fit cleaning into this perspective. Nevertheless, considering research from this angle has given me a clearer picture of how the entire space fits together.