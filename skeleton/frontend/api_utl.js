const APIUtil = {

  followUser: id => {
     return $.ajax({
       type: 'POST',
       url: `/users/${id}/follow`,
       dataType: 'json'
     })
  },


  unfollowUser: id => {
    return $.ajax({
      type: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json'
    })
  },

  searchUsers(queryVal, success){
    debugger
    return $.ajax({
      type: "GET",
      url: '/users/search',
      data: {query: queryVal},
      dataType: 'json',
      success: success,
      error: (err) => {
        console.log(err[0])

        debugger
      }
    })
    debugger
  }

}

module.exports = APIUtil;