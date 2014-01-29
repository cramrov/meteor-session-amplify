/* ---------------------------------------------------- +/

## SessionAmplify ##

A Meteor Session object extension that stores the value in Amplify's local storage when set() is called. 
It automatically inherit all the reactive properties of Meteor Session.

/+ ---------------------------------------------------- */

SessionAmplify = _.extend({}, Session, {
  keys: _.object(_.map(amplify.store(), function(value, key) {
    return [key, JSON.stringify(value)]
  })),
  set: function (key, value) {
    Session.set.apply(this, arguments);
    amplify.store(key, value);
  },
});
