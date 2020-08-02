# Generate-Okta-Token-Node
A little nodejs script that generates a JWT token for Okta users.


## Setup

1. Clone this project:
```
git clone git@github.com:JimLynchCodes/Generate-Okta-Token-Node.git
```

2. Install deps:
```
npm i
```

3. Copy `.env_SAMPLE` to a file named `.env` and edit the values:
```
cp .env_SAMPLE .env
vim .env
```

## Usage

This project can do two different things:

1. Generate a signed JWT token
2. Unpack an existing token

### Generate A Signed JWT Token

This creates a token based on the values in .env and prints the token to the console.

This token can be used to make requests manually or generate valid tokens for other scripts, such as end-to-end endpoint tests.

```
node index-a.js
```

### Unpack an existing token

Pass in a JWT token as a command-line argument, and the "unpacked contents" of the token will be printed to the console.

```
node unpack-token.js eyJ0eXAiOiJKV1QiLCJhbGciOiJ....
```


## SSH Authentication With Git Setup

Jim's Github is setup to only allow SSH cloning.

Be sure to generate an ssh key with:
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


## If Gith Still Isn't Working
When trying to clone this project you may get errore that "the authenticity cannot be verified". 

In that case, use this command:
```
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

^ Thanks to joshmoore for the answer is this thread: https://github.com/ome/devspace/issues/38

