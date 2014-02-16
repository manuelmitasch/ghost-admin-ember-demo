import ajax from "ghost/utils/ajax";

export default Ember.Route.extend({
  model: function() {
    return ajax("/ghost/api/v0.1/posts");
  }
});


