# Landing page project

## Installation

To install npm packages run the following commands

-   Run `npm install` to install the project dependencies.

### Run the development server:

-   Run `npm run dev` or `nuxt dev` to start the development server.
    -   Open http://localhost:3000/

## Linting

-   `npm run format-check` - checks for formatting errors.
-   `npm run format` - auto-formats all files.
-   `npm run lint` - checks for Typescript errors.
-   `npm run spell-check` - checks for spelling errors (EN or DE).
-   `npm run type-check` - checks for Typescript types.

### Spell-checking

CSpell is a library used for spell checking the code. It checks against English and some technical dictionaries (e.g. Typescript).

Custom words, that we consider correct, but are not part of any dictionary in use are added to a custom file - `custom.dic`.

Please keep all words in the `custom.dic` file sorted in alphabetical order, lower case. One word per line.

### Committing

There is a "linter" check running before each commit. All the above standards must be respected, in order to commit.

## Troubleshooting

On rare occasions, you might encounter an error related to `.nuxt` folder. <br />
Such an example is missing a specific property in `nuxt.config.ts` after installing a new nuxt module.

To fix this, manually run:

```bash
nuxt prepare
```

Although this should not be necessary because `nuxt prepare` is run automatically after `npm install` (see `postinstall` script)

## How to update dependencies

### Minor version updates

Update packages to the latest safe version as follows:

1. Run `npm outdated` to check for outdated packages.
2. Run `npm update` to update _all_ the outdated packages.
    - If you want to update _only_ a specific package, run `npm update <package-name>`.
3. Run `npm outdated` again to check if there are still outdated packages.

### Major version updates

Major version updates should be done with caution, as they may introduce breaking changes.

You can do so by using the `@latest`. e.g. `npm install <packagename>@latest`

### Alternative

As an alternative, you can also use [npm-check-updates](https://github.com/raineorshine/npm-check-updates).
