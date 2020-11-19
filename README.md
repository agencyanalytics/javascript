
Using These Packages
--------------------

In your project's package.json, file, you'll need to add this preinstall script:

```
	...
	"preinstall": "npm install agencyanalytics/javascript#main/setting-up-basics",
	...

```

We have to preinstall the repo because we also install subdirectories of the repo, so the repo needs to exist in node_modules before that happens.

You'll then need to add these dependencies:

```
	...
	"eslint-config-agencyanalytics": "file:node_modules/agencyanalytics-javascript/packages/eslint-config-agencyanalytics",
	"stylelint-config-agencyanalytics": "file:node_modules/agencyanalytics-javascript/packages/stylelint-config-agencyanalytics",
	...

```

To use the eslint config, create a .eslintrc.js file with these contents:

```
module.exports = {
	'extends': ['eslint-config-agencyanalytics']
};

```

To use the stylelint config, create a .stylelintrc.js file with these contents:

```
module.exports = {
	'extends': ['stylelint-config-agencyanalytics']
};

```

Your .eslintignore and .stylelinteignore files will have to be configured locally in your project, they are not configured in this repository.
