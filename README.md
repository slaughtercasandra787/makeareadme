<!-- const path = require('path');

const licenseInfo = {
    'MIT': {
        badgeUrl: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        licenseLink: 'https://opensource.org/licenses/MIT'
    },
    'Apache': {
        badgeUrl: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
        licenseLink: 'https://www.apache.org/licenses/LICENSE-2.0'
    },
    'GPL': {
        badgeUrl: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        licenseLink: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    'BSD': {
        badgeUrl: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
        licenseLink: 'https://opensource.org/licenses/BSD-3-Clause'
    }
};

function renderLicenseBadge(license) {
    const badgeUrl = licenseInfo[license] ? licenseInfo[license].badgeUrl : '';
    return badgeUrl ? `![License Badge](${badgeUrl})` : '';
}

function renderLicenseLink(license) {
    const licenseLink = licenseInfo[license] ? licenseInfo[license].licenseLink : '';
    return licenseLink ? `[${license} License](${licenseLink})` : '';
}

function renderLicenseSection(license) {
    if (license) {
        return `
## License

This project is licensed under the ${renderLicenseLink(license)}.  
${renderLicenseBadge(license)}
`;
    } else {
        return '';
    }
}function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
  
This project is licensed under the [${license} license](https://opensource.org/licenses/${license}).`;
}

const fs = require('fs');

// Function to render license badge
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let badgeUrl;
  switch (license.toLowerCase()) {
    case 'mit':
      badgeUrl = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'apache':
      badgeUrl = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    case 'gpl':
      badgeUrl = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    default:
      badgeUrl = '';
  }
  return badgeUrl ? `![License Badge](${badgeUrl})` : '';
}

// Function to render license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  let licenseLink;
  switch (license.toLowerCase()) {
    case 'mit':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'gpl':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      licenseLink = '';
  }
  return licenseLink ? `[${license} License](${licenseLink})` : '';
}

// Function to render license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
  
This project is licensed under the ${license} license. For more details, please see the ${renderLicenseLink(license)}.`;
}

// Function to generate markdown for README
function generateMarkdown(results) {
  return `# ${results.title}
${renderLicenseBadge(results.license)}

## Description

${results.description}

## Table of Contents

- [Installation Instructions](#Installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${results.installation}

## Usage

${results.usage}

${renderLicenseSection(results.license)}

## Contributing`;
}

module.exports = generateMarkdown; -->
