import axios from 'axios'

export const getAllArticles = () => {
  return axios.get('https://antariess-ncnews.herokuapp.com/api/articles')
    .then(res => {
      return res.data.articles
    })
    .catch(console.log)
}

export const getArticleById = (id) => {
  return axios.get(`https://antariess-ncnews.herokuapp.com/api/articles/${id}`)
    .then(res => {
      return Promise.all([res.data.article, axios.get(`https://antariess-ncnews.herokuapp.com/api/articles/${id}/comments`)])
    })
    .catch(console.log)
}

export const getArticlesByTopic = (slug) => {
  return axios.get(`https://antariess-ncnews.herokuapp.com/api/topics/${slug}/articles`)
    .then(res => res.data.articles)
    .catch(console.log)
}

export const fetchAllTopics = () => {
  return axios.get(`https://antariess-ncnews.herokuapp.com/api/topics`)
    .then(res => res.data.topics)
    .catch(console.log)
}

export const getUserInfo = (username) => {
   return axios.get(`https://antariess-ncnews.herokuapp.com/api/users/${username}`)
    .then(res => res.data.user)
    .catch(console.log)
}