# Exercise 1, bring in [node-inspector](https://www.npmjs.com/package/node-inspector) debug tool into project

Note, please do not install it as a global dependency. In order to use this depencency in our project only in development enviroment, we will list it in the according section of package.json, then run the npm install again, and we'll use this as a development only feature.

```bash
./node_modules/node-inspector/bin/node-debug.js ./node_modules/gulp/bin/gulp.js --gulpfile ./gulpfile.js/tasks/default.js
```

## Trace back using the tool which tasks will be executed for default/development environment
