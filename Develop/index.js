const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Function to prompt user for project information
const promptUser = async () => {
    try {
        return await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of your project:'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description of your project:'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions:'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter usage information:'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project:',
                choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Enter contribution guidelines:'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Enter test instructions:'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub username:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address:'
            }
        ]);
    } catch (err) {
        console.error('Error', err);
    }
};

// Function to generate README content

// Function to write README file


async function init() {
    const answers = await promptUser();
    console.log(answers)
    const results = generateMarkdown(answers)
    fs.writeFile('README.md', results, (err) => {
        err ? console.error(err) : console.log('created!');
    });
}
init();


