System.register("byservice/FriendList", ["angular2/angular2", "angular2/di", "FriendsService"], function($__export) {
  "use strict";
  var __moduleName = "byservice/FriendList";
  var Component,
      View,
      For,
      Inject,
      FriendsService,
      FriendList;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      For = $__m.For;
    }, function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      FriendsService = $__m.FriendsService;
    }],
    execute: function() {
      FriendList = (function() {
        function FriendList(friendsService) {
          this.friendsService = friendsService;
          this.init();
        }
        return ($traceurRuntime.createClass)(FriendList, {
          init: function() {
            var $__0 = this;
            this.friendsService.getAll().then((function(items) {
              $__0.friends = items;
            }));
          },
          delete: function(item) {
            this.friendsService.remove(item);
          }
        }, {});
      }());
      $__export("FriendList", FriendList);
      Object.defineProperty(FriendList, "annotations", {get: function() {
          return [new Component({selector: 'friend-list'}), new View({
            templateUrl: "byservice/friend_list.html",
            directives: [For]
          })];
        }});
      Object.defineProperty(FriendList, "parameters", {get: function() {
          return [[FriendsService, new Inject(FriendsService)]];
        }});
    }
  };
});
