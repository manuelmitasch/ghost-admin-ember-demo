export default Ember.Route.extend({
  // when index route is activate -> show first post
  activate: function() {
    var firstPost = this.modelFor('posts').posts[0];

    if (firstPost) {
      this.transitionTo('post', firstPost);
    }
  }
});