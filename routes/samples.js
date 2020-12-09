const express = require('express');
const router = express.Router();

/* サンプルAPI① 
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', (req, res, next) => {
  let param = {"値":"これはサンプルAPIです。"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

/* サンプルAPI② 
 * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/hello', (req, res, next) => {
  let param = {"result":"Hello World !"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

/* サンプルAPI③ 
 * http://localhost:3000/samples/hello/(任意の文字列) にGETメソッドのリクエストを投げると、
 * JSON形式で(任意の文字列)を返す。
 */
router.get('/hello/:place', (req, res, next) => {
  let param = {"result":"Hello "+ req.params.place + " !","shop name":req.query.shop};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

/* サンプルAPI④ 
 * http://localhost:3000/samples にPOSTメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.post('/', (req, res, next) => {
  let param = {"値":"POSTメソッドのリクエストを受け付けました","bodyの値":req.body.card};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;