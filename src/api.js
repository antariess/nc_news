import axios from 'axios'

export const getAllArticles = (cb) => {
  axios.get('https://antariess-ncnews.herokuapp.com/api/articles')
    .then(res => {
      cb(res.data.articles)
    })
    .catch(console.log)
}

export const getArticleById = (cb, id) => {
  axios.get(`https://antariess-ncnews.herokuapp.com/api/articles/${id}`)
    .then(res => {
      return Promise.all([res.data.article, axios.get(`https://antariess-ncnews.herokuapp.com/api/articles/${id}/comments`)])
    })
    .then(([article, {data:{comments}}]) => {
      cb(article, comments)
    })
    .catch(console.log)
}
