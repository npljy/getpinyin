const {getInitialsPY, getFullPY} = require('./dist/index')

// import pinyin from './index'

const s = getInitialsPY('聂澎')
console.log(s)
const f = getFullPY('聂澎')
console.log(f)