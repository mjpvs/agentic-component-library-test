export default {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'docs', scope: 'README', release: 'patch' },
          { type: 'build', scope: 'deps', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'revert', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features', hidden: false },
            { type: 'fix', section: 'Bug Fixes', hidden: false },
            { type: 'perf', section: 'Performance', hidden: false },
            { type: 'refactor', section: 'Refactoring', hidden: false },
            { type: 'docs', section: 'Documentation', hidden: false },
            { type: 'test', section: 'Tests', hidden: false },
            { type: 'build', section: 'Build System', hidden: false },
            { type: 'ci', section: 'CI/CD', hidden: false },
            { type: 'chore', section: 'Maintenance', hidden: true },
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'npm run build:tokens && npm run build',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github',
  ],
};
