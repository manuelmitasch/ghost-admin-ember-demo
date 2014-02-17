/* global CodeMirror*/
export default Ember.TextArea.extend({  
  initCodemirror: function() {      
    // create codemirror
    this.codeMirror = CodeMirror.fromTextArea(this.get('element'), {
      lineWrapping: true
    });

    this.codeMirror.component = this; 

    // propagate changes to value property
    this.codeMirror.on("change", function(cm, that) { 
      var curValue = cm.getDoc().getValue();
      cm.component.set('value', cm.getDoc().getValue()); 
    });             

    // on scroll update scrollPosition property
    this.codeMirror.on("scroll", function(cm, that) {
      var scrollInfo = cm.getScrollInfo(),
          percentage = scrollInfo.top/scrollInfo.height;
          console.log(scrollInfo.top + " :: " + scrollInfo.height + " :: " + percentage);

      // throttle scroll info updates
      Ember.run.throttle(cm.component, function () { this.set('scrollPosition', percentage); }, 50);
    });

  }.on("didInsertElement")

});