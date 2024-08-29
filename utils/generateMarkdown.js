// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache license") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }else if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }else if (license == "Mozilla Public") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }else if (license == "No license") {
    return "";
  }
}
'Apache license', 'ISC', 'MIT', 'Mozilla Public', 'Open Software', 'PostgreSQL', 'No license'
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache license") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license == "ISC") {
    return "https://opensource.org/licenses/ISC";
  }else if (license == "MIT") {
    return "https://opensource.org/licenses/MIT";
  }else if (license == "Mozilla Public") {
    return "https://opensource.org/licenses/MPL-2.0";
  }else if (license == "No license") {
    return "";
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "No license") {
    return "";
  } else {
    return `##Licence
    ${license} ${renderLicenseLink(license)} 
    `;
  }
}

function renderLicensetoc(license) {
  if (license == "No license") {
    return "";
  } else {
    return `[Licence](#licence)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

by ${data.contributers}


## Table of Contents

[Description](#description)

[Useage](#useage)

[Installation](#installation)

[Tests](#tests)

[Contributors](#contributors)

[Links](#links)

[Questions](#questions)

${renderLicensetoc(data.license)}


## Description

${data.description}


## Useage

${data.use}


## Installation

${data.installation}


## Tests

${data.tests}


## Contributing

${data.contributers}


## Links

https://github.com/${data.username}/${data.repo}


## Questions

https://github.com/${data.username}

${data.email}


${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
