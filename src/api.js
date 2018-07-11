import axios from 'axios'

export const getAllArticles = (cb) => {
  axios.get('https://antariess-ncnews.herokuapp.com/api/articles')
    .then(res => {
      cb(res.data.articles)
    })
    .catch(console.log)
}

export const getArticleById = (cb, url) => {
  axios.get(`https://antariess-ncnews.herokuapp.com/api${url}`)
    .then(res => {
      cb(res.data.article)
    })
    .catch(console.log)
}