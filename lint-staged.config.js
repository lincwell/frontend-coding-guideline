const micromatch = require("micromatch");

/**
 * @type {import('lint-staged').Config}
 */
module.exports = {
  "*": ["prettier --write --ignore-unknown"],

  "*.md": (files) => {
    const match = micromatch.not(files, [
      "**/node_modules/**/*",
      "**/.github/**/*",
    ]);

    return `doctoc ${match.join(" ")}`;
  },
};
