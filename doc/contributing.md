# Contributing
Initially, this file is just a guide to setup this project locally.

To start with, clone this repo, then install the required dependencies
```shell script
# do some magic cloning here
$ npm install
```

Bam! You're pretty much done.

To include your changes in any local pages, run `npm link` in this project, and then
in your other project run `npm link @unicefnz/eslint-config` to point the dependency
back to your development version.

> Keep in mind that any time you modify dependencies, this link is broken and will
> have to be setup bound again.

Happy hacking!
