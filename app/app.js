import Resolver from 'resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'ghost', // TODO: loaded via config
  Resolver: Resolver['default']
});


// needed to add body class depending on current route
Ember.Route.reopen({
  activate: function() {
    var cssClasses = this.get('classNames'),
        rootElement = this.router.namespace.get('rootElement');
    
    if (cssClasses) {
      Ember.$(rootElement).addClass(cssClasses);
    }
  },
  deactivate: function() {
    var cssClasses = this.get('classNames'),
        rootElement = this.router.namespace.get('rootElement');

    Ember.$(rootElement).removeClass(cssClasses);
  }
});

export default App;
