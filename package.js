Package.describe({
  summary: "A Meteor Session object extension that stores the value in Amplify's local storage when set() is called. It automatically inherit all the reactive properties of Meteor Session."
});

Package.on_use(function (api, where) {
  api.use(['underscore', 'amplify', 'session'], 'client');

  api.add_files(['session_extension.js'], 'client');
  
  if (api.export) 
    api.export('SessionAmplify');  
});
