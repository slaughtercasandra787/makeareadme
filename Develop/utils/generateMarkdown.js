// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}const path = require('path');   
// const fs = require('fs');


const licenseInfo =  {
  'MIT': {
      badgeUrl: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      licenseLink: 'https://opensource.org/licenses/MIT'
  },
  'Apache_2.0': {
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
  },
  'None': {
      badgeUrl: '',
      licenseLink: ''
  }
};


const renderLicenseBadge = (license) =>{
if (license !== 'None' ) {
  return `[![License](${licenseInfo[license].badgeUrl})]`;
  }
  return '';
};

const renderLicenseLink = (license) => {
  if (license !== 'None' ) {
    return `[![License](${licenseInfo[license].licenseLink})]`;
    }
    return '';
};

// Function to render badge section
const renderBadgeSection = (license) => {
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
};



const generateMarkdown = (results) => {
  return `# ${results.title}
  ${renderBadgeSection(results.license)}
  ## Title
  ${results.title}
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

## License
This project is licensed under the ${results.license}

## Contributing
${results.contributing}

## Tests
${results.tests}

## Questions
For questions or inquiries, please contact me via:
- GitHub: [${results.github}](https://github.com/${results.github})
- Email: ${results.email}
`
};

module.exports = generateMarkdown;



