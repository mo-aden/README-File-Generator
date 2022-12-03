// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NONE") {
    return `[License](#License)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE") {
    return `## License
    This Application is licensed under ${license}`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}

  ## Description 
  ${data.description}


  ## Table of Contents

  * [Installation](#Installation)
  * [Testing](#Testing) 
  * [License](#License)
  * [Questions](#Questions)

  
  ## Installation
  Enter this command ${data.installation} to install dependencies.


  ## Testing
  Run this command to test/run the application = ${data.usage} 




  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}\n



  ## Questions

  Please visit this GitHub link to see more on how this application is built [GitHub/${data.GitHub}](https://github.com/${data.GitHub})\n


  For additional information, please reach out to me in this email address ${data.email}.

`;
}

module.exports = generateMarkdown;
