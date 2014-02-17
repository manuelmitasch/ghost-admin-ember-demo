import count from "ghost/utils/word-counter";

export default Ember.ObjectController.extend({
  wordCount: function(){
    return count(this.get('markdown'));
  }.property("markdown"),
});