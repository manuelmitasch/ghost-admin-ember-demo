/* global CodeMirror*/
export default Ember.TextArea.extend({  
  initCodemirror: function() {      
    this.codeMirror = CodeMirror.fromTextArea(this.get('element'));
    this.codeMirror.component = this; 
    this.codeMirror.on("change", function(cm, that) { 
      var curValue = cm.getDoc().getValue();
      cm.component.set('value', cm.getDoc().getValue()); 
    });                
  }.on("didInsertElement")
});