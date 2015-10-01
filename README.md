# The gulpAcademy, getting to know NPM, Node, and gulp using the [gulp-starter](https://github.com/vigetlabs/gulp-starter) project.

![Gulp Starter](src/images/gulp-starter-logo.png)

# *Hands on NPM*, branch npmHandsOn.

This exercise will expose the basics of Node Package Manager, here after refered as *NPM*. With this exercise concepts like *preinstall*, *postinstall*, *scripts*, *dependencies*, *devdependencies* will be addressed.

* [package.json interactive guide](http://browsenpm.org/package.json)

* [package.json npm docs](https://docs.npmjs.com/files/package.json)


#### A) Removing dependencies from package.json.

If you already run, `npm install`, then run `npm uninstall gulp`.
If you didn't run yet `npm install`, then: 
 * remove the `"gulp": "^3.9.0",` dependency from `devDependencies` property of package.json.
 * reinstall the package with `npm install`
 * run the script gulp from package.json with `npm run gulp`.

What is happening? How can I restore back my package to be able to run the script `npm run gulp`?

#### B) Running a production install 

* run ```for package in `ls node_modules`; do npm uninstall $package; done;```
* run `npm install --production`
* run `npm run gulp`

What is happening? Why I can get the script gulp to work again?
[npm-install](https://docs.npmjs.com/cli/install)


#### C) Provide a script that prints the package.json configuration of the project into the CLI before installation.

- [npm-scripts](https://docs.npmjs.com/misc/scripts)

- [how to print contents of a file](http://lmgtfy.com/?q=Redirecting+the+content+of+a+file+to+the+command+%22echo%22)

#### D) Generate a myGulp.js script at the root of the project.
The script should output some logs in the command line, like "Hello world Scripting!".

* Note that to make a .js file executable by node we'll have to add the following at the top of the file `#! /usr/bin/env node` [node command line tool](http://javascriptplayground.com/blog/2012/08/writing-a-command-line-node-tool/)

* Set a bin property under package.json that will generate an executable script under /Users/your_user_name/.nvm/v0.10.30/bin after performing a global installation of your package. [bin property of package.json](https://docs.npmjs.com/files/package.json#bin)


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


