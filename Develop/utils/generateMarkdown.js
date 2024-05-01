// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
const fs = require('fs');

// Function to render license badge
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let badgeUrl;
  switch (license.toLowerCase()) {
    case 'MIT':
      badgeUrl='https://img.shields.io/badge/License-MIT-yellow.svg';
      'https://opensource.org/licenses/MIT';
      break;
    case 'Apache':
      badgeUrl='https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'GPL':
      badgeUrl='https://img.shields.io/badge/License-GPLv3-blue.svg';
      licenseLink= 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      badgeUrl = '';
  }
  // return `[![License](${badgeUrl})](https://opensource.org/licenses/${license})`;
}
function renderLicenseBadge(license) {
  const badgeUrl = licenseInfo[license] ? licenseInfo[license].badgeUrl : '';
  return badgeUrl ? `![License Badge](${badgeUrl})` : '';
}

function renderLicenseLink(license) {
  const licenseLink = licenseInfo[license] ? licenseInfo[license].licenseLink : '';
  return licenseLink ? `[${license} License](${licenseLink})` : '';
// Function to render license section of README
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(results) {
  return `# ${results.title}
  ${renderLicenseBadge(results.license)}

## Description

${results.description}

## Table of Contents

- [Installation Instructions ](#Installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${results.installation}

## Usage


${results.usage}

## License

${renderLicenseBadge(results.license)}
${renderLicenseSection(results.license)}

## Contributing

${results.contributing}

## Tests

${results.tests}

## Questions

For questions or inquiries, please contact me via:

- GitHub: [${results.github}](https://github.com/${results.github})
- Email: ${results.email}
`;
}

module.exports = generateMarkdown;
