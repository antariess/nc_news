import axios from 'axios'

export const getAllArticles = (cb) => {
  axios.get('https://antariess-ncnews.herokuapp.com/api/articles')
    .then(res => {
      cb(res.data.articles)
    })
    .catch(console.log)
}