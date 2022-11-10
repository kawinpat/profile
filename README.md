# profile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Config deployment (Don't forget to adapt your deploy.sh)
```
chmod +x deploy.sh
```

### Generate SSH Key for deployment
```
ssh-key -t ed25519 -C [your github email]

Then bring your generate SSH Key to set in the menu SSH and GPG keys on your github account setting.

Or use this URL -> https://github.com/settings/keys
```

### Add "deploy": "sh deploy.sh" in script in your package.json. *****
### And run this command to deploy
```
npm run deploy
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
