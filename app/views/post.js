import count from "ghost/utils/word-counter";

export default Ember.View.extend({
  wordCount: function(){
    return count(this.get('context.markdown'));
  }.property("context.markdown")
});