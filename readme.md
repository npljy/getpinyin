# 根据汉字获取拼音

**练习项目**使用 `Github Actions` 自动发布到 npm

## 安装

```js
npm install getPinyin --save
```

## 引用

```js
import { getFirstPY, getFullPY } from 'getPinyin'
```

```js
const { getFirstPY, getFullPY } = require('getPinyin')
```

## 使用

```js
console.log(getFirstPY('国')) // g
console.log(getFirstPY('中国')) // zg
console.log(getFullPY('国')) // guo
console.log(getFullPY('中国')) // zhongguo
```
