/* global moment */
export default Ember.Handlebars.makeBoundHelper(function(timeago) {
  return moment(timeago).fromNow();
});
