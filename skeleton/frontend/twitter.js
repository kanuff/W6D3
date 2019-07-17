const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");


$(() => {

  const $followButtons = $(".follow-toggle");
  $followButtons.each( (index, button) => {
    new FollowToggle(button);
  })

  const $search = $(".users-search");
  $search.each ( (index, search) => {
    new UsersSearch(search)
  })




})