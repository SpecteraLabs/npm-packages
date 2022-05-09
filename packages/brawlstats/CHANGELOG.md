# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.2](https://github.com/SpecteraLabs/npm-packages/compare/brawlstats@3.1.1...brawlstats@3.1.2) (2022-05-09)


### Bug Fixes

* remove umd bundle and reduce space ([0452853](https://github.com/SpecteraLabs/npm-packages/commit/0452853566810a24879ce9e3c8c0192c95a2f07c))





## [3.1.1](https://github.com/SpecteraLabs/npm-packages/compare/brawlstats@3.1.0...brawlstats@3.1.1) (2022-05-08)

**Note:** Version bump only for package brawlstats





# [3.1.0](https://github.com/SpecteraLabs/npm-packages/compare/brawlstats@3.0.1...brawlstats@3.1.0) (2022-05-08)


### Bug Fixes

* A bug which never let the cache work ([077f7f8](https://github.com/SpecteraLabs/npm-packages/commit/077f7f8a6b37edcf42f157feeb380a216674a7c9))
* **deps:** update all non-major dependencies ([f4909b7](https://github.com/SpecteraLabs/npm-packages/commit/f4909b70c44899dbbb802714434db4b48cc7b288))


### Features

* export managers and types ([6e38447](https://github.com/SpecteraLabs/npm-packages/commit/6e38447aa5099e9739562ecd0495d4ddc4795de9))





## [3.0.1](https://github.com/SpecteraLabs/npm-packages/compare/brawlstats@3.0.0...brawlstats@3.0.1) (2022-04-14)


### Bug Fixes

* export more types for typescript users ([1718876](https://github.com/SpecteraLabs/npm-packages/commit/17188769a58397c82018e54dacb2dac2d0c952b9))
* remove colorette from dependency ([9a6d94d](https://github.com/SpecteraLabs/npm-packages/commit/9a6d94d3384e45f50020472ace61798dfd33f0b3))





# [3.0.0](https://github.com/SpecteraLabs/npm-packages/compare/brawlstats@2.1.1...brawlstats@3.0.0) (2022-04-13)


### Features

* add leaderdboards ([21602d2](https://github.com/SpecteraLabs/npm-packages/commit/21602d210e46e0c3104853b33b2e57e87df51502))
* add managers inside Client ([de26ab5](https://github.com/SpecteraLabs/npm-packages/commit/de26ab5d1d0a014fe7a5125b74ea1f59a75511c9))
* add structures and managers ([7d1e421](https://github.com/SpecteraLabs/npm-packages/commit/7d1e421b5cd1c8ae94a02ee9472f756028cc809c))
* add support for battlelogs and better output ([8742299](https://github.com/SpecteraLabs/npm-packages/commit/87422996d4c0f6516f2598ef1337a3759e4ba3f3))


### Reverts

* Revert "Revert "feat(brawlstats): v3"" ([fff7b6f](https://github.com/SpecteraLabs/npm-packages/commit/fff7b6f7e872a779a132e393a2d7d698c4ee20cf))


### BREAKING CHANGES

* the methods Client#get* are removed now





## [2.1.1](https://github.com/SpecteraLabs/brawlstats/compare/brawlstats@2.1.0...brawlstats@2.1.1) (2022-04-01)


### Bug Fixes

* export dts ([436d4a9](https://github.com/SpecteraLabs/brawlstats/commit/436d4a908e07a76f04db513769e24013b6bfa987))





# [2.1.0](https://github.com/SpecteraLabs/brawlstats/compare/brawlstats@2.0.0...brawlstats@2.1.0) (2022-04-01)


### Bug Fixes

* issues with esm files ([3a96325](https://github.com/SpecteraLabs/brawlstats/commit/3a96325ac80a5cd2e01e22c735f8559111be5231))


### Features

* add support for iife bundles ([910b461](https://github.com/SpecteraLabs/brawlstats/commit/910b4619d907b1381ca35ab964f2d933c51431da))


### Performance Improvements

* remove unnecessary consolelog ([62cfe73](https://github.com/SpecteraLabs/brawlstats/commit/62cfe7306f211f62aaebe42e41ac64b385568734))





# 2.0.0 (2022-03-18)


### Features

* add events ([58de69f](https://github.com/SpecteraLabs/brawlstats/commit/58de69f1fc94e565fabd2c81ab1d4ca3dc3ac460))
* add tests and logger ([a84be02](https://github.com/SpecteraLabs/brawlstats/commit/a84be02ed8b7f8bd5e15b790778f25bbc7375708))


### Performance Improvements

* export more structures ([966c07e](https://github.com/SpecteraLabs/brawlstats/commit/966c07edbccdd790977a896fdc21cb9de34a8004))


### BREAKING CHANGES

* **brawlstats:** This removes the logger from the lib
