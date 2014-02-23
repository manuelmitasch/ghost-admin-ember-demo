/* global ic */
import { test , moduleFor } from 'ghost/tests/helpers/module_for';
import PostsRoute from 'ghost/routes/posts';

moduleFor('route:posts', "Unit - PostsRoute", {
  setup: function(){
    ic.ajax.defineFixture('/ghost/api/v0.1/posts', {
      response: [{
        "posts": [
          {
            "id": 2,
            "uuid": "4dc16b9e-bf90-44c9-97c5-40a0a81e8297",
            "title": "Ghost Ember Demo Post",
          }
        ]
      }],
      jqXHR: {},
      textStatus: 'success'
    });

  },
});


test("it exists", function(){
  ok(this.subject() instanceof PostsRoute);
});

test("model", function(){
  expect(1);
  
  var expectedResult = ic.ajax.lookupFixture('/ghost/api/v0.1/posts').response;
  var route = this.subject();

  Ember.run(function() {
    route.model().then(function(model) {
      deepEqual(model, expectedResult, "Route model should match exptected");
    });
  });
});
