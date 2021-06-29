// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '') {
    return `![](https://img.shields.io/badge/license-${license.replace(/ /g, "%20")}-blue?style=flat-square)`;
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0 License':
      link='https://opensource.org/licenses/Apache-2.0';
      break;
  case 'BSD 2-clause License':
      link='https://opensource.org/licenses/BSD-2-Clause';
      break;
  case 'BSD 3-clause License':
      link='https://opensource.org/licenses/BSD-3-Clause';
      break;
  case 'GPL License 3.0':
      link='https://opensource.org/licenses/GPL-3.0' 
      break;
  case 'MIT License':
      link='https://opensource.org/licenses/MIT';
      break;
  case 'Mozilla Public License 2.0':
      link='https://opensource.org/licenses/MPL-2.0';
      break;
  default:
      link='';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license === '') ? '' : `\n## License
  This project is licensed under the ${license}.\n<p>&nbsp</p>` 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  <p>&nbsp</p>

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  <p>&nbsp</p>

  ## Installation
  To install the required dependencies, run the following command:
  
  ${data.installation}
  <p>&nbsp</p>

  ## Usage
  ${data.usage}
  <p>&nbsp</p>

  ## Contributing
  ${data.contributions}
  <p>&nbsp</p>
  
  ${renderLicenseSection(data.license)}

  ## Tests
  To run tests, use the following command:
  ${data.tests}
  <p>&nbsp</p>

  ## Questions
  If you have any questions, contact me via email at: ${data.email}.
  To view more of my work visit my Github at: [${data.github}](https://github.com/${data.github}/).
`};

module.exports = generateMarkdown;