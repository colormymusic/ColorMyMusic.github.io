'use strict';

describe('myApp controllers', function() {

  beforeEach(module('myApp'));

  describe('MailchimpSubscriptionCtrl', function() {
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MailchimpSubscriptionCtrl', {$scope: scope})
    }));

    describe('Managing Lists', function() {
    });
  });
});
