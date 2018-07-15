import axios from 'axios'

export const getAllArticles = () => {
  return axios.get('https://antariess-ncnews.herokuapp.com/api/articles')
    
}

export const getArticleById = (id) => {
  return axios.get(`https://antariess-ncnews.herokuapp.com/api/articles/${id}`)
    // .then(res => res.data.article)
    // .catch(console.log)
}

export const fetchCommentsByArticleId = (id) => {
  return axios.get(`https://antariess-ncnews.herokuapp.com/api/articles/${id}/comments`)
    .then(res => res.data.comments)
    .catch(console.log)
}


export const getArticlesByTopic = (slug) => {
  return axios.get(`https://antariess-ncnews.herokuapp.com/api/topics/${slug}/articles`)
}

export const fetchAllTopics = () => {
  return axios.get(`https://antariess-ncnews.herokuapp.com/api/topics`)
}

export const getUserInfo = (username) => {
   return axios.get(`https://antariess-ncnews.herokuapp.com/api/users/${username}`)
}

export const upvoteComment = (commentId, direction) => {
  return axios.put(`https://antariess-ncnews.herokuapp.com/api/comments/${commentId}?vote=${direction}`)
    .then(res => res.data.comment)
}

export const upvoteArticle = (articleID, direction) => {
  return axios.put(`https://antariess-ncnews.herokuapp.com/api/articles/${articleID}?vote=${direction}`)
    .then(res => res.data.article)
}

export const newArticle = (slug, article) => {
  console.log(slug, article)
  return axios.post(`https://antariess-ncnews.herokuapp.com/api/topics/${slug}/articles`, article)
    .then(res => res.data.newArticle)
    .catch(console.log)
}

export const newComment = (articleId, comment) => {
  return axios.post(`https://antariess-ncnews.herokuapp.com/api/articles/${articleId}/comments`, comment)
    .then(res => {
      return res.data.comment
    })
    .catch(console.log)
}

export const deleteComment = (commentId) => {
  return axios.delete(`https://antariess-ncnews.herokuapp.com/api/comments/${commentId}`)
    .then(console.log)
    .catch(console.log)
}