module.exports = {
	extends: ['@commitlint/config-angular', '@commitlint/parse'],
	rules: {
		'scope-case': [2, 'always', 'pascal-case'],
		'type-enum': [2, 'always', ['chore', 'build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']]
	},
	parserPreset: {
		parserOpts: {
			headerPattern: /^(\w*)!?(?:\((.*)\))?: (.*)$/,
			headerCorrespondence: ['type', 'scope', 'subject'],
			revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
			revertCorrespondence: ['header', 'hash']
		}
	}
};