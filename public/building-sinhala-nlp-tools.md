# Building Sinhala NLP Tools

*May 15, 2024 · 8 min read*

Sinhala is a low-resource language, meaning NLP projects have unique challenges.

## Dataset Collection

I collected datasets from multiple sources, including Sinhala Wikipedia, news articles, and subtitles.

## Tokenizer

I trained a SentencePiece tokenizer with a Unigram model and 32k vocabulary. This tokenizer performed better than existing multilingual models for Sinhala.

## Model Training

Next, I trained a GPT-2 style model (~105M parameters) on the tokenized dataset. It generated Sinhala text with high fidelity after 3 epochs.

![Micromouse](../public/blog/micromouse.jpeg)

## Conclusion

Using custom tokenizers and small-scale models, it’s possible to achieve high-quality NLP for Sinhala.
