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

When removing depencencies, needed from our package to run, node will complain, showing a stack trace of the problem in the logs of the script that we just executed.

Afer this: 
  * recover package.json to include again `"gulp": "^3.9.0",` devDependency again
  * run `npm install` again
  * run `npm run gulp`

#### B) Provide a script that prints the package.json configuration of the project into the CLI before installation.

- [npm-scripts](https://docs.npmjs.com/misc/scripts)

- [how to print contents of a file](http://lmgtfy.com/?q=Redirecting+the+content+of+a+file+to+the+command+%22echo%22)

#### C) Generate a myGulp.js script at the root of the project.
The script should output some logs in the command line, like "Hello world Scripting!".

* Note that to make a .js file executable by node we'll have to add the following at the top of the file `#! /usr/bin/env node`
[node command line tool](http://javascriptplayground.com/blog/2012/08/writing-a-command-line-node-tool/)

* Set a bin property under package.json that will generate an executable script under /Users/your_user_name/.nvm/v0.10.30/bin after performing a global installation of your package.

[bin property of package.json](https://docs.npmjs.com/files/package.json#bin)











