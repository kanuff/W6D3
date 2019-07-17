const APIUtil = require("./api_utl")

class UsersSearch {
  constructor(el){
    this.$el = $(el);
    this.$input = this.$el.find("input[type=text]");
    this.$ul = this.$el.find("ul");

    this.$el.on("input", this.handleInput.bind(this))
  }






  handleInput(e){
    e.preventDefault();
    APIUtil.searchUsers(this.$input.val(), (response) =>{
      console.log(response);
    })
    debugger
  }
}


module.exports = UsersSearch;