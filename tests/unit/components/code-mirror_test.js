import { test , moduleForComponent } from 'ghost/tests/helpers/module_for';

moduleForComponent('code-mirror', "Unit - code-mirror component");

test("Codemirror div exists", function(){
  ok(this.$().next().is(".CodeMirror"));
});

test("Test value binding - set value from component", function(){
  var component = this.subject(),
      codemirror = component.get('codemirror'),  
      newValue = '123';

  Ember.run(function(){
    component.set('value', newValue);
  });

  equal(component.get('value'), newValue, "new value set correctly");

  // => not working:
  // typeof codemirror === undefined => why is codemirror undefined?
  equal(component.get('value'), codemirror.getDoc().getValue(), 'new value equal on component + codemirror');
});