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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
