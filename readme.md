# 根据汉字获取拼音

使用 `Github Actions` 自动发布到 npm

## npm地址

[https://www.npmjs.com/package/getpinyin](https://www.npmjs.com/package/getpinyin)

## 安装

```js
npm install getpinyin --save
```

## 引用

```js
import { getFirstPY, getFullPY } from 'getpinyin'
```

```js
const { getFirstPY, getFullPY } = require('getpinyin')
```

## 使用

```js
console.log(getFirstPY('国')) // g
console.log(getFirstPY('中国')) // zg
console.log(getFullPY('国')) // guo
console.log(getFullPY('中国')) // zhongguo
```

## 注意

没有对多音字进行处理
