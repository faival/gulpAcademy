# Exercise 1, branch gulpDebug.

Bring in [node-inspector](https://www.npmjs.com/package/node-inspector) debug tool into project and start debugging!

Note, please **do not** install it as a global dependency. In order to use this depencency in our project only in development enviroment, we will list it in the according section of package.json. Then we will run the `npm install` command again, and we'll use this as a **development only** feature.

```bash
./node_modules/node-inspector/bin/node-debug.js ./node_modules/gulp/bin/gulp.js --gulpfile ./gulpfile.js
```
#### A) Trace back using the tool which tasks will be executed for default/development environment

- place breakpoint in l.6 of default.js


#### B) Which is going to be the order of execution of such tasks, which parallel and which sequential?

[gulp-sequence](https://www.npmjs.com/package/gulp-sequence)

secuential: 
```
clean > tasks.assetTasks > tasks.codeTasks > watch
```
parallel:
```
 tasks.assetTasks > ["fonts", "iconFont", "images", "svgSprite"]
 tasks.codeTasks > ["html", "css", "webpack:watch"]
```


#### C) Which files will be removed on each execution of the default task? Which files will never be removed?

 ["public/rev-manifest.json", "public/javascripts/**/*.{js,map}", "public/stylesheets/**/*.{sass,scss,css,map}", "public/**/*.{html,json,map}", "public/images/**/*.{jpg,png,svg,gif,map}", "public/fonts/**/*.{woff2,woff,eot,ttf,svg,map}", "public/fonts/**/*.{woff2,woff,eot,ttf,svg,map}", "public/images/**/*.{svg,map}", "!node_modules/**/*", "!src/**/*"]



#### D) Where can I find/modify the configuration of general tasks

gulpfile.js/config.js



#### E) Change the name of the generated sass file _icons.sass to something else at runtime without modifying the src code. Verify the result.

- place breakpoint in l.9 of gulpfile.js/tasks/iconFont/generateIconSass.js

- overwritte value of property sassOutputName of config object



#### F) Why is the output of the *generateIconSass.js* writing a file under src/* and not under public/* (the target build folder) ?

`_icon.sass` is a src file from sass, it will be used/needed by other mixins and sass files to access icon fonts by variable name and place the proper style selectors.



#### G) Compare the tasks `clean` and `css`, why one is using the *callback mechanism* and the other one the *return stream mechanism*

[Gulp Asyn Tasks support](https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support)

- `clean` task is performing an async operation in it's block of code, the callback is called once all async operations have finished. The next task after `clean` will be blocked until this callback is called. 

- `css` is defined in an array of tasks, meaning each one of those can run in parallel, the task is returning the stream of execution, therefore the next task can start without waiting for the `css` task to finish.




