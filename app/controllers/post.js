export default Ember.ObjectController.extend({
  isPublished: Ember.computed.equal('status', 'published'),
  isDraft: Ember.computed.equal('status', 'draft')
});