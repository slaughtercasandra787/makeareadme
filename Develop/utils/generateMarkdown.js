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
const renderLicenseBadge = (licence) => {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    // Add more cases for other licenses as needed
    default:
      return '';
  }
};

const renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    // Add more cases for other licenses as needed
    default:
      return '';
  }
};

const generateMarkdown = ({ results, licenseInfo }) => {
  const badgeUrl = renderLicenseBadge(licenseInfo.license);
  const licenseLink = renderLicenseLink(licenseInfo.license);

  return `# ${results.title}
${badgeUrl}
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
This project is licensed under the [${licenseInfo.license} License](${licenseLink}).
![License Badge](${badgeUrl})

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




// class License {
//   constructor(name, badgeUrl, linkUrl) {
//       this.name = name;
//       this.badgeUrl = badgeUrl;
//       this.linkUrl = linkUrl;
//   }
// }

// const licenses = {
//   MIT: new License('MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg', 'https://opensource.org/licenses/MIT'),
//   Apache: new License('Apache 2.0', 'https://img.shields.io/badge/License-Apache%202.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0'),
//   // Add more licenses as needed
// };

// const renderLicenseBadge = (licenseName) => {
//   const license = licenses[licenseName];
//   return license ? `[![License: ${license.name}](${license.badgeUrl})](${license.linkUrl})` : '';
// };

// const renderLicenseLink = (licenseName) => {
//   const license = licenses[licenseName];
//   return license ? `[${license.name} License](${license.linkUrl})` : '';
// };

// const generateMarkdown = ({ results, licenseInfo }) => {
//   const badgeUrl = renderLicenseBadge(licenseInfo.license);
//   const licenseLink = renderLicenseLink(licenseInfo.license);

//   return `# ${results.title}
// ${badgeUrl}
// ## Description
// ${results.description}
// ## Table of Contents
// - [Installation Instructions](#Installation-instructions)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)

// ## Installation
// ${results.installation}

// ## Usage
// ${results.usage}

// ## License
// This project is licensed under the ${licenseLink}.
// ${badgeUrl}

// ## Contributing
// ${results.contributing}

// ## Tests
// ${results.tests}

// ## Questions
// For questions or inquiries, please contact me via:
// - GitHub: [${results.github}](https://github.com/${results.github})
// - Email: ${results.email}
// `;
// };

// module.exports = generateMarkdown;

// // Function to render license badge
// // TODO: Create a function to generate markdown for README
// const generateMarkdown = ({results, licenseInfo})
// function generateMarkdown(results) {
//   return `# ${results.title}

// [License Badge](${badgeUrl})

// ## Description

// ${results.description}

// ## Table of Contents

// - [Installation Instructions ](#Installation-instructions)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)

// ## Installation

// ${results.installation}

// ## Usage


// ${results.usage}

// ## License

// This project is licensed under the [${license} License](${licenseLink}).  
// ![License Badge](${badgeUrl})

// ## Contributing

// ${results.contributing}

// ## Tests

// ${results.tests}

// ## Questions

// For questions or inquiries, please contact me via:

// - GitHub: [${results.github}](https://github.com/${results.github})
// - Email: ${results.email}
// `;
// }

// module.exports = generateMarkdown;
