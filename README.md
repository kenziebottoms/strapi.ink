![](https://img.shields.io/badge/updated-12/18/19-green.svg)
![](https://img.shields.io/badge/react-v16.8.6-61DAFB.svg)
![](https://img.shields.io/badge/npm-v10.16.3-C12026.svg)
![](https://img.shields.io/badge/node-v12.7.0-006E00.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then shaved down for Kenzie's personal use. It got rid of the service worker, the CSS, and the test class.

## Deployment

```bash
git checkout dev
npm run deploy
git checkout gh-pages
cp -r build/* .
rm -rf build
git checkout dev CNAME
git branch -D master
git checkout -b master
git add .
git commit -m "deploy ${mm/dd/yy}"
git push origin master --force
```