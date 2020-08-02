# Generate-Okta-Token-Node
A little nodejs script that generates a JWT token for Okta users.



Makes sure to generate an ssh key with:
```
ssh-keygen -t rsa -C "[you_email]" 
```

then "wake up" the ssh agent:
```
eval `ssh-agent -s`
```

and add your key:
```
ssh-add ~/.ssh/id_rsa
```


# If SSH With Github Isn't Working
When trying to clone this project you may get errore that "the authenticity cannot be verified". 

In that case, use this command:
```
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

^ Thanks to joshmoore for the answer is this thread: https://github.com/ome/devspace/issues/38

