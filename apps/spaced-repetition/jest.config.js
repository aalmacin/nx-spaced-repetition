module.exports = {
  name: "spaced-repetition",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/spaced-repetition/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
