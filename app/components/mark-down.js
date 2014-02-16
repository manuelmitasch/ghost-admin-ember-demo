/* global Showdown */
var showdown = new Showdown.converter();

export default Ember.Component.extend({
  html: function() {
    return showdown.makeHtml(this.get('markdown'));
  }.property('markdown')
});


