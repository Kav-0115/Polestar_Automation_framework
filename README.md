# Polestar_framework

A Webdriver IO project with a BDD framework using Typescript  to automate tests for demo website https://www.polestar.com/. Ensure you have Webdriver IO, Typescript installed, a compatible browser driver, a testing framework, and a reporting library.
The project is designed to automate tests for the dev website [Polestar](https://www.polestar.com/).

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- Git installed on your machine
- Compatible browser installed (e.g., Chrome)
- Visual Studio Code or any preferred code editor installed

### Installation
1. Clone the repository:
   bash
   git clone hhttps://github.com/Kav-0115/Polestar_Automation_framework cd Polestar_Automation_framework
   

2. Install dependencies:
   bash
   npm install
   

## Test Execution

To execute the automated tests, run the following command:
bash
- npm run wdio
To execute the automated tests with specific tag, run the following command:
- npm run test '@tag'

## Change Username, Password and Customer Details whenever need
If you want to run some scenario for specific username and password 
a. create .env file in root location by following the .env_sample file
b. update which field you think you want to update
c. run the script using the above command

## Test Scenarios

### Welcome Scenarios
- Verify user land on polestar application 
- Verify Learn more action in US region 

### API Service validations 
- Get API GET request for Global website
- Get API GET request for Backend URL

## Reporting

The project uses Allure for reporting. To view the generated report, run:
bash
- npm run report
- Note: You want find the applogs file inside logs folder to debug better in case of failure


## Folder Structure

- `features`: Contains the Gherkin feature files.
- `step-definitions`: Contains the TypeScript files with step definitions.
- `pages`: Contains the TypeScript files representing page objects.
- `utils`: Contains all helper functions and logger
- `data`: contains all the data which need to be updated at any point of time
- `wdio.conf.ts` contains wdio config details
