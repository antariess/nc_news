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
    .then(res => res.data.article)
    .catch(console.log)
}

export const fetchCommentsByArticleId = (id) => {
  return axios.get(`https://antariess-ncnews.herokuapp.com/api/articles/${id}/comments`)
    .then(res => res.data.comments)
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

export const upvoteComment = (commentId, direction) => {
  return axios.put(`https://antariess-ncnews.herokuapp.com/api/comments/${commentId}?vote=${direction}`)
    .then(res => res.data.comment)
}

export const upvoteArticle = (articleID, direction) => {
  return axios.put(`https://antariess-ncnews.herokuapp.com/api/articles/${articleID}?vote=${direction}`)
    .then(res => res.data.article)
}