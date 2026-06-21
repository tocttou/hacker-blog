---
title: Using SSH Keys to authenticate a headless Ubuntu machine to Github
published: true
---

In this post, I will explain how to authenticate a Ubuntu machine to Github using SSH keys.

### 1. Set up SSH key on Ubuntu

Run these commands in the terminal:
```
ssh-keygen -t ed25519 -C "your_email@example.com"
```
Optionally change default location or add passphrase.

Make sure the ssh-agent is running:
```
eval "$(ssh-agent -s)"
```
Add your private key to the ssh-agent:
```
ssh-add ~/.ssh/id_ed25519
```
Print out your public key:
```
cat ~/.ssh/id_ed25519.pub
```
### 2. Add your SSH key to Github
Sign into your Github account and navigate to Settings > SSH and GPG keys. [https://github.com/settings/keys](https://github.com/settings/keys)

Click New SSH key, give it a name and paste it in.
![add-ssh-key-github](/assets/images/add-ssh-key-github.png)

For more details, see [Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)