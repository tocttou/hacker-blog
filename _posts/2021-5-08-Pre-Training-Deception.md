---
title: Pre-Training + Fine-Tuning Favors Deception
---

*Crossposted from the [AI Alignment Forum](https://alignmentforum.org/posts/rZTjsKy4Jvu6krWJt/pre-training-fine-tuning-favors-deception). May contain more technical jargon than usual.*

Thanks to Evan Hubinger for helpful comments and discussion.

Currently, to obtain models useful for some task X, models are pre-trained on some task Y, then fine-tuned on task X. For example, to obtain a model that can summarize articles, a large language model is first pre-trained on predicting common crawl, then fine-tuned on article summarization. Given the empirical success of this paradigm and the difficulty of obtained labeled data, I loosely expect this trend to continue.

I will argue that compared to the paradigm of training a model on X directly, training on Y then fine-tuning on X increases the chance of deceptive alignment. More specifically, I will argue that fine-tuning a deceptive model will produce a deceptive model and fine-tuning a non-deceptive model is more likely to produce a deceptive model than training from scratch.

From Does SGD Produce Deceptive Alignment?:

> More specifically, we can single out three types of models that optimize for the base objective:
>
> * internally aligned models optimize for the base objective because it is equal to the model's terminal objective
> * corrigibly aligned models optimize for the base objective because their terminal objective is a robust pointer to a model of the base objective. Note that these are called corrigible because they are amenable to corrections of the model of the base objective (though not necessarily corrections to their pointer).
> * deceptively aligned models optimize for the base objective for instrumental reasons

Assume that pre-training has produced a model that optimizes for the pre-training loss and is one of the above types. The arguments are weaker if pre-training is imperfect. If the model is not one of the above types, then these arguments do not apply.

We can analyze the three cases separately:

* If pre-training has produced an internally aligned model, then we are beginning fine-tuning with a mesa-optimizer that has a misaligned proxy objective. The probability of fine-tuning producing deception is controlled by how far the pre-training loss is from the fine-tuning loss and how far the current capabilities are from deception. 
* If pre-training has produced a corrigibly aligned model, then we begin fine-tuning with a mesa-optimizer that has a misaligned pointer. The probability of fine-tuning producing deception is controlled by how easy it is to shift the pointer and how far the current capabilities are from deception.
* If pre-training has produced a deceptively aligned model, then fine-tuning will begin with a deceptively aligned model. The probability of deception is controlled by how easy it is for the model to start instrumentally optimizing for the fine-tuning objective.

In the first case, changing an internal objective from the pre-training loss to the fine-tuning loss seems about as difficult as learning the fine-tuning loss from scratch. Since the model starts highly capable, deception has a strict advantage here. For example, suppose a model was pre-trained on prediction and fine-tuned on approval. Since the pre-training data is vast, the model will already understand human approval. Performing well on the fine-tuning loss is thus likely to involve routing capabilities through the understanding the model already has, instead of reincorporating human approval into the model’s internal objective.

In the second case, in order for fine-tuning to produce a corrigibly aligned model, the pointer must be changed from the pre-training loss to the fine-tuning loss. In order for fine-tuning to produce a deceptively aligned model, the model must understand the objective it’s being trained on, which also requires a pointer.

During normal training, the amount of optimization power the model can apply to a task slowly increases, while the amount of optimization power SGD can apply remains roughly constant. Since we are starting pre-training with an already capable model, this gap starts out wider than if we were training from scratch. Since deceptive models can build pointers at runtime, they will thus be able to apply more optimization power to pointer construction than SGD. As a result, the model will become deceptive faster than it can become corrigible. However, the model also begins with a detailed world model, enabling SGD to start building a pointer to the fine-tuning loss earlier than if we were training from scratch. Since deception cannot happen until the model has a detailed world model, this consideration is not more compelling when fine-tuning versus training from scratch. 

In the third case, in order for fine-tuning to produce an internally or corrigibly aligned model, fine-tuning must align the model faster than the model can figure out the fine-tuning objective. Since the model was deceptive during pre-training, it already understands most of the training setup. In particular, it probably understood that it was being pre-trained and predicted that it would subsequently get fine-tuned, thus making fine-tuning overwhelmingly likely to produce a deceptive model. There are considerations about the type of deceptive alignment one gets during pre-training that I have ignored. See Mesa-Search vs Mesa-Control for further discussion. 

The above arguments assume that pre-training + fine-tuning and training on the fine-tuning task directly produce models that are equally capable. This assumption is likely false. In particular, one probably will not have enough data to achieve high capabilities at the desired task. If the desired task is something like imitative amplification, suboptimal capabilities might produce an imperfect approximation of HCH, which might be catastrophic even if HCH is benign. There are other reasons why pre-training is beneficial for alignment which I will not discuss.

Overall, holding constant the capabilities of the resulting model, pre-training + fine-tuning increases the probability of deceptive alignment. It is still possible that pre-training is net-beneficial for alignment. Exploring ways of doing pre-training that dodge the arguments for deceptive alignment is a potentially fruitful avenue of research.