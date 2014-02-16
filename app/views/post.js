export default = Ember.View.extend({
  wordCount: function(){
    return this.get('context.markdown').split(' ').length; // TODO: too dumb word count
  }.property("context.markdown")
});