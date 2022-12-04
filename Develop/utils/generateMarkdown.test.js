const generateMarkdown = require("./generateMarkdown");

test("test render license badge function", function () {
  expect(generateMarkdown(renderLicenseBadge()).isEqual(true));
});
