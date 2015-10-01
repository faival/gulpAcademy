# *Hands on NPM*, branch npmHandsOn.

This exercise will expose the basics of Node Package Manager, here after refered as *NPM*.

[package.json interactive guide](http://browsenpm.org/package.json)
[package.json npm docs](https://docs.npmjs.com/files/package.json)


#### A) Trace back using the tools which tasks will be executed for default/development environment

#### B) Which is going to be the order of execution of such tasks, which parallel and which sequential?

[gulp-sequence](https://www.npmjs.com/package/gulp-sequence)

#### C) Which files will be removed on each execution of the default task? Which files will never be removed?

#### D) Where can I find/modify the configuration of general tasks.

#### E) Change the name of the generated sass file _icons.sass to something else at runtime without modifying the src code. Verify the result.


#### F) Why is the output of the *generateIconSass.js* writing a file under *src/* and not under *public/* (the target build folder)?

#### G) Compare the tasks `clean` and `css`, why one is using the *callback mechanism* and the other one the *return stream mechanism*?

[Gulp Asyn Tasks support](https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support)


