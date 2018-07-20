# process.exit() from user code breaks test run

If the user code called in a test runs `process.exit(<code>)`, Jest's behaviour depends on:

- whether one or multiple test files are run
- the order(?) in which the tests are executed

## Demos

Just the exiting test

![](https://thumbs.gfycat.com/TallDarkCavy-size_restricted.gif)

Just the passing test:

![](https://thumbs.gfycat.com/PlaintiveHonoredDairycow-size_restricted.gif)

Both, where the exiting test simply exits

![](https://thumbs.gfycat.com/HardtofindWhirlwindCoati-size_restricted.gif)

Both, where the exiting test causes the run to hang (having changed only the name of the passing test file)

![](https://thumbs.gfycat.com/BelovedIdleIguana-size_restricted.gif)

With the diff from [#6714](https://github.com/facebook/jest/pull/6714/files) applied:

![](https://thumbs.gfycat.com/AngelicVibrantHake-size_restricted.gif)

## Notes

- Running Jest with `--runInBand` makes the runner always exit immediately after `process.exit(1)` is called.
