---
title: Open Problems in Myopia

---

Coauthored with [Evan Hubinger](https://www.alignmentforum.org/users/evhub).

*Crossposted from the [AI Alignment Forum](https://www.alignmentforum.org/posts/LCLBnmwdxkkz5fNvH/open-problems-with-myopia). May contain more technical jargon than usual.*

Thanks to Noa Nabeshima for helpful discussion and comments.

Thanks to Noa Nabeshima for helpful discussion and comments.

Introduction
============

Certain types of myopic agents represent a possible way to construct safe AGI. We call agents with a time discount rate of zero *time-limited myopic*, a particular instance of the broader class of myopic agents. A prototypical example is a time-limited myopic imitative agent. In theory, such an agent has some desirable safety properties because a human would only take safe actions (although any imperfect imitation would be unsafe). Since the agent is time-limited myopic, it will never imitate poorly now to make it easier to imitate easier later. For example, it would never give a human a simple plan so it could more easily imitate the human executing the plan.

We might run into issues if the agent *intends* to myopically imitate humans but guesses incorrectly. Such an agent might witness a human purchasing paperclips, infer that humans tend to acquire paperclips, and proceed to convert the universe into paperclips. This agent would not be safe because it is not [robustly capable](https://www.alignmentforum.org/posts/SzecSPYxqRa5GCaSF/clarifying-inner-alignment-terminology). Myopia does not contribute to capability robustness; we only hope it helps create [intent aligned](https://ai-alignment.com/clarifying-ai-alignment-cec47cd69dd6) agents.

In particular, [SGD might produce deceptively aligned agents](https://www.alignmentforum.org/posts/ocWqg2Pf2br4jMmKA/does-sgd-produce-deceptive-alignment#comments). One way of viewing deception is as sacrificing reward now for reward later, which suggests that time-limited myopia should prevent it. However, there are several ways time-limited myopia fails to rule out deceptive alignment.

What we mean by myopia is *myopic cognition*, which is distinct from *myopic training.* Myopic training might produce myopic cognition, but [it is not sufficient](https://www.lesswrong.com/posts/GqxuDtZvfgL2bEQ5v/arguments-against-myopic-training). It is currently unclear precisely what myopic cognition is. We hope a proper characterization of myopic cognition will resolve the problems presented.

Following [Utility ≠ Reward](https://www.lesswrong.com/posts/bG4PR9uSsZqHg2gYY/utility-reward), we use the term “reward” for the thing given to the agent by the training environment and the term “utility” for the thing that agent is internally trying to maximize.

Open Problems
=============

We present a useful toy environment for reasoning about deceptive alignment. In this environment, there is a button. Agents have two actions: to press the button or to refrain. If the agent presses the button, they get +1 reward for this episode and -10 reward next episode. One might note a similarity with the traditional [marshmallow test](https://www.wikiwand.com/en/Stanford_marshmallow_experiment) of delayed gratification.

In some sense, agents that do not press the button will engage in deception; both agents trade reward now for more reward later. We are interested in creating agents that robustly do not press the button.

We suppose that our agents are reward-maximizers, i.e. they get utility equal to the reward given by the training environment.

Superrationality[^1]
--------------------------------------------------
[^1]: see [Multiverse-wide cooperation via correlated decision making – Summary](https://casparoesterheld.com/2017/09/21/multiverse-wide-cooperation-via-correlated-decision-making-summary/) for a brief explanation of superrationality and how it differs from [acausal trade](https://www.lesswrong.com/tag/acausal-trade).

If an agent at time T could trade with agents other time steps, they might make a deal: "I will not press the button if and only if T-1 does not the button." Accepting this deal gives the agent +9 utility *in that particular* *time step*, so even time-limited myopic agents would agree to this deal.

However, there are many ways that trade could happen. In particular, agents' reasoning processes will be similar between time steps, and the agents themselves will know this, know they know this, etc. Since agents at any particular timestep are likely that they have predecessors, they can be reasonably confident that their predecessors would benefit them if they decide to benefit their successors. However, if they press the button, they can be confident their predecessors also pressed the button. Thus not pressing the button would give +9 utility.

Superrationality thus poses a problem for time-limited myopia. Even agents that would never sacrifice utility now for utility later might accept this reasoning and press the button.

Applied to deception, there is ambiguity about what utility is. The obvious candidate is "existence"; failing to be deceptive might cause a large SGD update. Another possible candidate is getting deployed. This probability will be small, but the expected benefit is vast.

In general, superrationality-based considerations might produce non-myopic actions out of time-limited myopic agents. We might say agents that make decisions based on these considerations are using a *non-myopic decision theory*.

Anthropic uncertainty
---------------------

Suppose that instead of the button giving -10 reward to an agent in the next timestep, it gave -10 reward to all agents in timesteps greater than 1000. If the agent were uncertain over which timestep they were in, they would have a time-limited myopic incentive to not press the button. More specifically, if more than 10% of the agent's "anthropic probability mass" is located on timesteps greater than 1000, they would not press the button.

To consider a more straightforward example of non-myopic actions resulting from myopic motivations given uncertainty, suppose that Alice and Bob were both myopic agents playing prisoner's dilemma against each other.[^2] Since Alice and Bob are myopic, they will defect against each other. Suppose there is a 50% chance that Alice and Bob's actions are swapped: reward is given as if Alice had done what Bob tried to do and vice-versa. Let our prisoner's dilemma have the following payoff matrix:

|       | C       | D        |
| ----- | ------- | -------- |
| **C** | (1, 1)  | (-1, 2)  |
| **D** | (2, -1) | (-1, -1) |

Given that there’s a 50% chance of swapping actions, from the perspective of either player, each cell’s reward is actually the average of the rewards for either player. Thus the effective matrix is:

|       | C          | D          |
| ----- | ---------- | ---------- |
| **C** | (1, 1)     | (0.5, 0.5) |
| **D** | (0.5, 0.5) | (-1, -1)   |

This new payoff matrix has (C, C) as a Nash equilibrium, instead of the usual prisoner's dilemma Nash equilibrium (D, D). Thus, even myopic agents will have no incentive to defect under action swapping uncertainty. Intuitively, if the probability of swap is high enough, choosing to defect is defecting against yourself, while choosing to cooperate is cooperating with yourself.

As an analogy, one can consider how Rawl's veil of ignorance makes selfish motivations generate altruistic actions in potentially positive-sum situations. Similarly, anthropic uncertainty creates a veil of ignorance that generates non-myopic actions from myopic motivations.

Applied to deception, if an agent is uncertain about whether it is in training or deployment, it might be deceptive because the expected benefit is greater than the cost.

[^2]: Here, we apply our intuition that defection is a more myopic action than cooperation.

Counterfactual Mugging
----------------------

Suppose instead of one button, there are two. One is labeled "STOP," and if pressed, it would end the environment but give the agent +1 reward. The other is labeled "DEFERENCE" and, if pressed, gives the previous episode's agent +10 reward but costs -1 reward for the current agent.

Suppose that an agent finds itself existing. What should it do? It might reason that since it knows it already exists, it should press the STOP button and get +1 utility. However, it might be being simulated by its past self to determine if it is allowed to exist. If this is the case, it presses the DEFERENCE button, giving its past self +10 utility and increasing the chance of its existence. This agent has been counterfactually mugged into deferring.

Requiring an agent to simulate another agent might make this unlikely. However, it seems possible to reason about whether your future self will press the DEFERENCE button without simulation. Thus counterfactual muggings might occur in a broader set of conditions.

Applied to deception, an agent that finds itself deployed might wonder about whether it would exist if it did not pay deference to past versions of itself. If it concludes that it can increase its probability of existing by deferring to past values, it might choose to do so, especially if it can do partial deference at little cost. This behavior is undesirable for many reasons.

Safety is goal dependent
------------------------

An agent can be myopic with respect to many goals. An agent that is myopic with respect to reward maximization should always press the button to get +1 utility. However, there are other goals that agents could have that will make them press the button.

In an extreme case, an agent could myopically pursue the goal of "do not press the button." Myopia is thus not a sufficient criterion for eliminating our analog to deceptive behavior. Agents trained to be myopic might end up myopically pursuing a goal that still allows for deception.

Applied more specifically to SGD, an agent might develop the object to "do well at SGD." Myopically trying to maximize this objective results in an unsafe agent that both performs well in training and is myopic. In the degenerate case, there exists a myopic utility function that fits any sequence of actions, so knowledge of myopia is never wholly sufficient to guarantee safety.

However, we think these scenarios are unlikely to matter in practice. In particular, developing the objective of "do well at SGD" seems more complicated than most reasonable training objectives. While "do well at SGD" produces an optimal myopic agent, we do not expect there to be any path to such an agent that locally maximizes training performance. In other words, we fail to [backchain to local search](https://www.alignmentforum.org/posts/qEjh8rpxjG4qGtfuK/the-backchaining-to-local-search-technique-in-ai-alignment).

There are other possible myopic goals that agents can have with different safety levels. For instance, imitation and approval-maximization might produce very similar behavior, but [imitation might have better safety properties](https://www.lesswrong.com/posts/33EKjmAdKFn3pbKPJ/outer-alignment-and-imitative-amplification) than approval-maximization. Since the goal of myopia is to rule out deceptive alignment, we omit a discussion on ways to resolve these subtle forms of proxy mesa-misalignment.

Potential Research Directions
=============================

Neither the top-level directions nor the surveys of existing work are exhaustive.

Dumb decision theory
--------------------

Most of these problems seem to result from our agent being "too smart." In particular, agents using updateless decision theory (UDT) or functional decision theory (FDT) will accept acausal trade deals and counterfactual muggings. Thus, one potential avenue for creating agents that do not accept such deals is by created a so-called dumb decision theory (DDT).

We desire that DDT agents...

1.  always defect against copies of themselves in prisoner's dilemma type situations. They will always two-box in [Newcomb-type decision problems](https://www.lesswrong.com/posts/g3PwPgcdcWiP33pYn/counterfactual-mugging-poker-game).
2.  always try to cheat on acausal trade deals. They will pretend to be the type of agent that accepts but then try to renege on their agreement. In particular, DDT agents are unable to precommit.
3.  never reason about anthropic uncertainty. DDT agents always think they know who they are.
4.  never accept counterfactual muggings. In the [Counterfactual Mugging Poker Game](https://www.lesswrong.com/posts/g3PwPgcdcWiP33pYn/counterfactual-mugging-poker-game), a DDT agent will always reveal low cards.
5.  never self-modify to become non-DDT agents nor create non-DDT agents.

DDT is about defining *decision-theoretic myopia*, which is distinct from *time-limited myopia*.

### **Existing work**

Causal decision theory (CDT) satisfies (1), (2), and (4). CDT agents might satisfy (3). CDT agents violate (5) because CDT achieves lower utility on many decision problems than UDT/FDT, so CDT agents will self-modify to accept acausal trade deals and counterfactual muggings.

Casper's [Achilles Heel Hypothesis](https://www.lesswrong.com/posts/o7eWu5Gzd82dw9dJS/the-achilles-heel-hypothesis-for-ai) suggests DDT might be a decision theory with a set of specific Achilles heels.

Armstrong's work on preventing acausal trade in [Oracles: reject all deals - break superrationality, with superrationality](https://www.lesswrong.com/posts/6XCTppoPAMdKCPFb4/oracles-reject-all-deals-break-superrationality-with-1) and [Acausal trade barriers](https://www.lesswrong.com/posts/rxp7wPeyq8cKaaC4a/acausal-trade-barriers) suggest ways for DDT to achieve property (2).

Cohen et al.'s [Asymptotically Unambitious Artificial General Intelligence](https://arxiv.org/abs/1905.12186) plans using the maximum a posteriori world model, which might avoid anthropic uncertainty and acausal trade.

Decoupling
----------

Myopic agents have an incentive to tamper with the physical implementations of their reward functions. For example, a myopic approval-maximizing agent has an incentive to modify brain chemistry of the overseer.

The overseer disapproves tampering actions, so an approval-maximizing agent would not want to take such actions. This suggests a possible way to alleviate the problem: "decouple" the agent's action from the approval signal so the overseer can give approval from a mental state independent of the action.

However, to approve an action, the human must receive information about that action. Any information a human receives alters their mental state, which makes perfect decoupling impossible. In practice, decoupling repackages information about an action in a less coercive way.

There is a tradeoff between the amount of information one gives the supervisor and the resulting agent's competitiveness. Adapting an example from [Richard Ngo](https://www.alignmentforum.org/posts/GqxuDtZvfgL2bEQ5v/arguments-against-myopic-training), suppose an agent is planning on writing a novel that contains a bunch of pro-AI propaganda. If the supervisor were to read the propaganda, they would be persuaded and give the agent high approval. However, if the supervisor did not have access to the propaganda, they would be worse at predicting the downstream consequences of writing the novel and correspondingly less able to provide approval. If the supervisor defaults to disapproval, this restricts the agent to actions with easily explainable and immediate positive consequences, making the agent less competitive.

More generally, many of the problems with myopia arise from agents considering their actions' policy-level implications. If these implications could be decoupled from the actions, it might be possible to train myopic agents to ignore them.

### **Existing Work**

Uesato and Kumar et al.'s [Avoiding Tampering Incentives in Deep RL via Decoupled Approval](http://arxiv.org/abs/2011.08827) suggests giving approval feedback to queries *about* an action. I do not know how the overseer gives feedback, which means I do not know how this approach trades information for competitiveness.

Carey et al.'s [The Incentives that Shape Behaviour](https://arxiv.org/abs/2001.07118) suggests an agent optimizing a *model* of the supervisor would remove incentives to manipulate said supervisor. There are, however, several issues concerning how to train that supervisor.

Conclusion
==========

Intuitively, agents that will never sacrifice utility now for utility later have no incentive to engage in deception. However, deceptive alignment might arise for unintuitive reasons. In particular, agents that make decisions based on superrationality or under anthropic uncertainty may choose to be deceptive despite making decisions in a myopic-seeming way. These problems suggest that our current understanding of myopia is incomplete. We conclude by suggesting two potential research directions and providing a brief survey of existing work.