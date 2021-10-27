# Setting up an iPad for programming

## Setting up the terminal app (a-Shell)


### Configuration

First, after installing a-Shell, I like to set the font size, terminal background and foreground color. Here is how the a-shell app looks like


![]({{ site.baseurl }}/images/A-shell-initial.png "a-shell on the iPad is my favourite app!")

`config -b black -f white -s 20`

### Text editing and bookmarks
Sometimes I like using vim for editing documents and interfacing with WorkingCopy. a-Shell provides vim!

I like to setup a `bookmark` to the WorkingCopy folder so that I can direcly edit files in that location.

I do so by:
writing `pickFolder` in a-Shell and setting it to WorkingCopy folder. Now I can set a bookmark to this location. I do so by: 
`bookmark git` in the current location (set by pickFolder)

![]({{ site.baseurl }}/images/Bookmark-Git.png "Setting Bookmark location to WorkingApp -> git")

### Git
Interestingly, the latest testflight version of a-shell also provides a "Git-like" interface called `libgit2`. Configuring it requires specific steps that I'm writing below. Some of these steps are borrowed from this [nice tutorial](https://devmarketer.io/learn/set-ssh-key-github/) and some are specific to a-shell that I was able to get working courtesy a Twitter discussion with the creator of a-shell. 

![]({{ site.baseurl }}/images/Twitter.png "Twitter discussion with the creator of a-shell")

Now, the steps.

First, we need to create a new ssh key.

We do so by 
```bash
ssh-keygen -t rsa -b 4096 -C "email@domain.com"

```

While configuring I did not setup the passphrase.

The private and public keys are stored in `.ssh` with the name id_rsa 

```bash
$ ls -lah .ssh|grep "id"
-rw-------   1 mobile  mobile   3.3K Jun 14 15:43 id_rsa
-rw-------   1 mobile  mobile   747B Jun 14 15:43 id_rsa.pub
```

Next, I copied the public key in a newly generated ssh key in Github and gave it a name.

Next, I modified `.gitconfig` as follows

```bash
$ cat .gitconfig 
[user]