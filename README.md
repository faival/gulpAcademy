# Exercise 1, bring in [node-inspector](https://www.npmjs.com/package/node-inspector) debug tool into project and start debugging!

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

#### C) Which files are going to be removed on clean task? Which files will never be removed

 ["public/rev-manifest.json", "public/javascripts/**/*.{js,map}", "public/stylesheets/**/*.{sass,scss,css,map}", "public/**/*.{html,json,map}", "public/images/**/*.{jpg,png,svg,gif,map}", "public/fonts/**/*.{woff2,woff,eot,ttf,svg,map}", "public/fonts/**/*.{woff2,woff,eot,ttf,svg,map}", "public/images/**/*.{svg,map}", "!node_modules/**/*", "!src/**/*"]


#### D) Where can I find/modify the configuration of general tasks

gulpfile.js/config.js


#### E) Change the name of the generated sass file _icons.sass to something else at runtime without modifying the src code.

- place breakpoint in gulpfile.js/tasks/iconFont/index.js

- overwritte value of property sassOutputName of settings object



