# Setting Linux/Mac machine and iPad for Python programming (via Jupyter notebooks)

On the Linux/Mac (remote server) machines I set up Jupyter notebooks as follows:

First, I create the configuration file via: `jupyter notebook --generate-config`

Next, In `~/.jupyter/jupyter_notebook_config.py` change

```python

c.NotebookApp.ip = '0.0.0.0'
c.NotebookApp.allow_origin = '*'
c.NotebookApp.port = SET YOUR PORT
c.NotebookApp.open_browser = False
```

Set password using:
```
jupyter notebook password 
```

Run notebook as:
```bash
nohup jupyter notebook& 
```

On the client end (iPad in this case), I use one of the following two ways to access remote Jupyter instances:

* Using the Juno Connect app
Juno connectly nicely saves all the configuration and can do the necessary port forwarding

* Using Safari and opening the remote Jupyter URL
Just open the remote URL with the set port number. I use my workplace recommended VPN client to get into my workplace network and access non-public IP based servers.