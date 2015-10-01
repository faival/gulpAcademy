# The gulpAcademy, getting to know NPM, Node, and gulp using the [gulp-starter](https://github.com/vigetlabs/gulp-starter) project.

![Gulp Starter](src/images/gulp-starter-logo.png)


# *Debugging gulp tasks*, branch gulpDebug.

This exercise will force you to debug this big gulp project. During the exercise concepts like *sequence of tasks*, *live debugging*, *target vs. src I/O operations*, *streams vs callbacks* and *configuration* will be exposed.

Bring in [node-inspector](https://www.npmjs.com/package/node-inspector) debug tool into project and start debugging!

Note, please **do not** install it as a global dependency. In order to use this depencency, only in our development enviroment, we will list it in the according section of package.json. Then we will run the `npm install` command again, and we'll use this as a **development only** feature.

```bash
./node_modules/node-inspector/bin/node-debug.js ./node_modules/gulp/bin/gulp.js --gulpfile ./gulpfile.js
```

You can also use [gulp-util](https://www.npmjs.com/package/gulp-util), and [gulp-debug](https://www.npmjs.com/package/gulp-debug) along the source code of the tasks to produce usefull logs and discover what are the tasks doing...


#### A) Trace back using the tools which tasks will be executed for default/development environment

#### B) Which is going to be the order of execution of such tasks, which parallel and which sequential?

[gulp-sequence](https://www.npmjs.com/package/gulp-sequence)

#### C) Which files will be removed on each execution of the default task? Which files will never be removed?

#### D) Where can I find/modify the configuration of general tasks.

#### E) Change the name of the generated sass file _icons.sass to something else at runtime without modifying the src code. Verify the result.


#### F) Why is the output of the *generateIconSass.js* writing a file under *src/* and not under *public/* (the target build folder)?

#### G) Compare the tasks `clean` and `css`, why one is using the *callback mechanism* and the other one the *return stream mechanism*?

[Gulp Asyn Tasks support](https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support)


