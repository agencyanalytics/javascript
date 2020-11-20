module.exports = {
	'parser':        'babel-eslint',
	'env':           {
		'browser': true,
		'es6':     true,
		'node':    true,
	},
	'settings':      {
		'react': {
			'pragma':  'React',
			'version': 'detect',
		},
	},
	'extends':       [],
	'globals':       {
		'Atomics':           'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion':  2015,
		'sourceType':   'module'
	},
	'plugins':       [
		'jsx-a11y',
		'react',
		'jsdoc'
	],
	'rules':         {
		'jsdoc/require-jsdoc':                     ['error'],
		'jsdoc/newline-after-description':         ['error', 'always'],
		'jsdoc/require-param-type':                ['error'],
		'jsdoc/require-param-name':                ['error'],
		'jsdoc/require-param':                     ['error'],
		'jsdoc/require-description':               ['error', {exemptedBy: ['inheritDoc'], checkConstructors: false}],
		'jsx-a11y/alt-text':                       ['error'],
		'jsx-a11y/anchor-is-valid':                ['off'],
		'jsx-a11y/img-redundant-alt':              ['error'],
		'jsx-a11y/label-has-associated-control':   ['off'],
		'jsx-a11y/no-static-element-interactions': ['off'],
		'jsx-a11y/no-distracting-elements':        ['error'],
		'react/jsx-uses-react':                    ['error'],
		'react/jsx-uses-vars':                     ['error'],
		'react/jsx-curly-newline':                 ['error', {multiline: 'require', singleline: 'consistent'}],
		'react/jsx-closing-bracket-location':      ['error', 'after-props'],
		'react/jsx-filename-extension':            ['off'],
		'react/jsx-indent':                        ['error', 'tab'],
		'react/jsx-indent-props':                  ['error', 'tab'],
		'react/jsx-key':                           ['error'],
		'react/jsx-max-props-per-line':            ['error', {'maximum': 3, 'when': 'always'}],
		'react/jsx-fragments':                     ['off', 'syntax'],
		'react/jsx-curly-spacing':                 ['error', 'never'],
		'react/jsx-equals-spacing':                ['error', 'never'],
		'react/jsx-boolean-value':                 ['off', 'always'],
		'react/jsx-no-comment-textnodes':          ['error'],
		'react/jsx-no-duplicate-props':            ['error'],
		'react/jsx-no-target-blank':               ['error'],
		'react/jsx-no-useless-fragment':           ['error'],
		'react/jsx-pascal-case':                   ['error'],
		'react/jsx-props-no-multi-spaces':         ['error'],
		'react/jsx-no-bind':                       ['error', {'allowArrowFunctions': true}],
		'react/boolean-prop-naming':               ['off', {'rule': '^(is|has)[A-Z]([A-Za-z0-9]?)+'}],
		'react/jsx-handler-names':                 ['off', {
			'eventHandlerPrefix':     'handle',
			'eventHandlerPropPrefix': 'on'
		}],
		'react/jsx-wrap-multilines':               ['error', {
			'declaration': 'parens-new-line',
			'assignment':  'parens-new-line',
			'return':      'parens-new-line',
			'arrow':       'ignore',
			'condition':   'parens-new-line',
			'logical':     'ignore',
			'prop':        'parens-new-line'
		}],
		'react/jsx-tag-spacing':                   [
			'error',
			{
				'closingSlash':      'never',
				'beforeSelfClosing': 'never',
				'afterOpening':      'never',
				'beforeClosing':     'allow'
			}
		],
		'key-spacing':                             [
			'error',
			{
				'singleLine': {
					'beforeColon': false,
					'afterColon':  true
				},
				'multiLine':  {
					'beforeColon': false,
					'align':       'value'
				}
			},
		],
		'react/forbid-elements':                   [
			'error',
			{
				'forbid': [
					'font',
					'bgsound',
					'center',
					's',
					'b',
					'strike',
					'u',
					'basefont',
					'dir',
					'menu',
					'noframes',
					'applet',
					'acronym',
					'frame',
					'plaintext',
					'hgroup'
				]
			}
		],
		'react/sort-comp':                         ['off'],
		'react/no-multi-comp':                     ['off'],
		'react/no-string-refs':                    ['error'],
		'react/no-this-in-sfc':                    ['error'],
		'react/no-typos':                          ['error'],
		'react/no-unescaped-entities':             ['error'],
		'react/no-unsafe':                         ['error'],
		'react/no-unused-prop-types':              ['error'],
		'react/no-unused-state':                   ['error'],
		'react/prefer-es6-class':                  ['error'],
		'react/prop-types':                        ['error'],
		'react/self-closing-comp':                 ['error'],
		'react/react-in-jsx-scope':                ['error'],
		'react/require-default-props':             ['off'],
		'react/require-render-return':             ['error'],
		'react/no-children-prop':                  ['error'],
		'react/no-danger':                         ['error'],
		'react/no-array-index-key':                ['error'],
		'react/default-props-match-prop-types':    ['error'],
		'react/destructuring-assignment':          ['error', 'never'],
		'indent':                                  [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'jsx-quotes':                              ['error', 'prefer-single'],
		'linebreak-style':                         ['off', 'unix'],
		'quotes':                                  ['error', 'single'],
		'brace-style':                             ['error', '1tbs', {'allowSingleLine': true}],
		'semi':                                    ['error', 'always', {'omitLastInOneLineBlock': true}],
		'getter-return':                           ['error'],
		'no-constant-condition':                   ['error'],
		'no-cond-assign':                          ['error'],
		'no-dupe-keys':                            ['error'],
		'no-duplicate-case':                       ['error'],
		'no-extra-semi':                           ['error'],
		'no-irregular-whitespace':                 ['error'],
		'no-obj-calls':                            ['error'],
		'no-prototype-builtins':                   ['error'],
		'no-sparse-arrays':                        ['error'],
		'no-unreachable':                          ['error'],
		'no-unsafe-finally':                       ['error'],
		'no-unsafe-negation':                      ['error'],
		'require-atomic-updates':                  ['error'],
		'use-isnan':                               ['error'],
		'valid-typeof':                            ['error'],
		'default-case':                            ['error'],
		'dot-location':                            ['error', 'property'],
		'dot-notation':                            ['error'],
		'eqeqeq':                                  ['error', 'always'],
		'no-alert':                                ['off'],
		'no-caller':                               ['error'],
		'no-case-declarations':                    ['error'],
		'no-constructor-return':                   ['error'],
		'no-eval':                                 ['error'],
		'no-implied-eval':                         ['error'],
		'no-extend-native':                        ['error'],
		'no-extra-bind':                           ['error'],
		'no-floating-decimal':                     ['error'],
		'no-labels':                               ['error'],
		'no-multi-spaces':                         ['off'],
		'no-new':                                  ['error'],
		'no-octal':                                ['error'],
		'no-proto':                                ['error'],
		'no-redeclare':                            ['error'],
		'no-return-assign':                        ['error'],
		'no-script-url':                           ['error'],
		'no-self-assign':                          ['error'],
		'no-self-compare':                         ['error'],
		'no-useless-catch':                        ['error'],
		'no-useless-concat':                       ['error'],
		'no-useless-escape':                       ['error'],
		'no-with':                                 ['error'],
		'require-await':                           ['error'],
		'yoda':                                    ['error', 'never', {'exceptRange': true}],
		'no-delete-var':                           ['error'],
		'no-shadow':                               ['error'],
		'no-shadow-restricted-names':              ['error'],
		'no-unused-vars':                          ['error', {'argsIgnorePattern': '_'}],
		'array-bracket-newline':                   ['error', 'consistent'],
		'constructor-super':                       ['error'],
		'no-class-assign':                         ['error'],
		'no-const-assign':                         ['error'],
		'no-dupe-class-members':                   ['error'],
		'no-new-symbol':                           ['error'],
		'no-useless-constructor':                  ['error'],
		'no-var':                                  ['error'],
		'no-useless-rename':                       ['error'],
		'prefer-arrow-callback':                   ['error'],
		'prefer-const':                            ['error'],
		'prefer-spread':                           ['error'],
		'rest-spread-spacing':                     ['error', 'never'],
		'no-restricted-globals':                   [
			'error',
			{
				'name':    'event',
				'message': 'Use local event instead.'
			}
		]
	}
};
