import PostController from 'ghost/controllers/post';
import { moduleFor, test } from 'ghost/tests/helpers/module_for';

moduleFor('controller:post', 'Unit - PostController');


test('isDraft property', function(){
  var controller = this.subject();

  Ember.run(function () {
    controller.set('model', {
        "id": 1,
        "title": "Welcome to Ghost",
        "status": "draft"
    });
  });

  equal(controller.get('isDraft'), true, "isDraft should be true");

  Ember.run(function () {
    controller.set('model', {
        "id": 1,
        "title": "Welcome to Ghost",
        "status": "published"
    });
  });

  equal(controller.get('isDraft'), false, "isDraft should be false");
});


test('isPublished property', function(){
  var controller = this.subject();

  Ember.run(function () {
    controller.set('model', {
        "id": 1,
        "title": "Welcome to Ghost",
        "status": "draft"
    });
  });

  equal(controller.get('isPublished'), false, "isPublished should be false");

  Ember.run(function () {
    controller.set('model', {
        "id": 1,
        "title": "Welcome to Ghost",
        "status": "published"
    });
  });

  equal(controller.get('isPublished'), true, "isPublished should be true");
});