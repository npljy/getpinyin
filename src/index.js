import pinyin from '../lib/pinyin'
export default {
  getFirstPY (word) {
    if (!word || typeof word !== 'string') return word
    const words = word.split('')
    let res = []
    words.forEach(e => {
      for (const py in pinyin) {
        if (pinyin[py].indexOf(e) !== -1) {
          res.push(py)
        }
      }
    })
    if (res.length === 0) return null
    res.length = words.length
    res = res.map(e => e.slice(0, 1))
    return res.join('')
  },
  
  getFullPY (word) {
    if (!word || typeof word !== 'string') return word
    const words = word.split('')
    const res = []
    words.forEach(e => {
      for (const py in pinyin) {
        if (pinyin[py].indexOf(e) !== -1) {
          res.push(py)
        }
      }
    })
    if (res.length === 0) return null
    res.length = words.length
    return res.join('')
  }
  
}
