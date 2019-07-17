const APIUtil = require('./api_utl')

class FollowToggle {
  
  constructor(el){
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");

    this.el.on("click", this.handleClick.bind(this));
    this.render(); 

  }

  render(){
    if (this.followState === "processing"){
      this.el.prop("disabled", true);
    } else {
      this.el.prop("dsiabled", false);
    }

    this.el.empty();
    if (this.followState === "unfollowed"){
      this.el.append("Follow!");
    } else if (this.followState === "followed"){
      this.el.append("Unfollow!");
    }
  }


  handleClick(e){
    e.preventDefault();
    if (this.followState === "unfollowed"){
      this.followState = "processing";
      APIUtil.followUser(this.userId)
      .then( ()=>{
        this.followState = "followed";
        this.render();
      })
    } else if (this.followState === "followed") {
      this.followState = "processing";
      APIUtil.unfollowUser(this.userId)
      .then(() => {
        this.followState = "unfollowed";
        this.render();
      });
    }
  }
}

module.exports = FollowToggle;

