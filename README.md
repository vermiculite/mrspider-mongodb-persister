# mrspider-mongodb-persister

Middleware for [mrspider](https://github.com/vermiculite/mrspider) typically used at the end of a middleware chain for saving the results of a crawl to a mongoDb database. [mrspider-validator](https://github.com/vermiculite/mrspider-validator) is typically used before this to mark the page as valid or not to avoid storing rubbish in the database.

## Install

`npm i -S mrspider-mongodb-persister`

#Usage
```js
var mrspider = require('mrspider');
var mrspiderMongoPersister = require('mrspider-mongodb-persister');
var spider = mrspider();
var mongoPersister = mrspiderMongoPersister({
  url: 'mongodb://db1.example.net',
  collection: 'crawlResults'
});

spider.use(mongoPersister);

```
