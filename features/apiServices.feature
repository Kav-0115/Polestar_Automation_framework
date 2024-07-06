@apiValidation
Feature: API service call for global website 

@globalAPI
Scenario : Get API GET request for Global website
When I get API response in text format for the "<GlobalURL>"
Then I validate the response status code to be 304 for "<GlobalURL>"

Examples:
| GlobalURL                 |
| https://www.polestar.com/ |

@globalAPI
Scenario : Get API GET request for Backend URL
When I get API response in text format for the "<BackendURL>"
Then I validate the response status code to be 200 for "<BackendURL>"

Examples:
| BackendURL                          |
| https://reqres.in/api/users?page=2  |
