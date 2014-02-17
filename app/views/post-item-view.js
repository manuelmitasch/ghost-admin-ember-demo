import itemView from 'ghost/views/item-view';

export default itemView.extend({
  openEditor: function() {
    this.get('controller').transitionToRoute("editor", this.get('post'));
  }.on("doubleClick")
});