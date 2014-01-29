meteor-session-amplify
======================

> A Meteor Session object extension that stores the value in Amplify's local storage when set() is called. It automatically inherit all the reactive properties of Meteor Session.

## Install
<pre><code>mrt add session-amplify</code></pre>

## Usage
Just replace all your Session.set/get calls with SessionAmplify.set/get calls. When set() is called, the parent Session method is called, as well as amplify.store(). When the "subclass" is first created, it loads everything that is in amplify's store inside its keys, so that they can be retrieved right away with get().

> *Solution implemented by [sebastien-b](http://stackoverflow.com/users/250457/sebastien-b "sebastien-b") and mentioned in [stackoverflow](http://stackoverflow.com/questions/11705825/persistent-sessions-in-meteor "stackoverflow").*
