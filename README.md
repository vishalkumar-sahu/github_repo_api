# Getting Started with Github_repo_api

Develop a single page application using Angular/React/Vue to display the list of GitHub  repositories. You can use the below sample API to get the repo list 

## Repo data 
Open [https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc &page=1&per_page=10 ](https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc &page=1&per_page=10 ) tp see dataset.

### Show basic details of the repo like:

1) Repo name: (name/full_name) 
2) Description: (description) 
3) Owner name: (owner.login) 
4) Stars count: (stargazers_count) 
5) Number of forks: (forks_count) 
6) Language: (language) 

#### Functionalities to be implemented 
1) On click of the card/item the user should be redirected to the GitHub repository  page 
2) Pagination - User should be able to view the repo list in a paginated manner, List  of options to be implemented 
 1) Page number 
 2) Page size 
 3) Next page 
 4) Previous page 
3) Search based on language and name 
4) Sorting (Ascending and Descending): 
1) Sort by stars 
2) Sort by Name 
