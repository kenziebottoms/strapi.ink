This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then shaved down for Kenzie's personal use. It got rid of the service worker, the CSS, and the test class.

## Deployment

```bash
git checkout dev
npm run deploy
git checkout gh-pages
```

Move everything in the `build` folder to the root; overwrite if necessary.

```bash
git checkout dev CNAME
git branch -D master
git checkout -b master
git push origin master --force
```