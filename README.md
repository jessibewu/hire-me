# Hire Me

## Table of Contents

- [Project Description](#Project-Description)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Technologies Used](#Technologies-Used)
- [Installation](#Installation)
- [Screenshot](#Screenshot)
- [Links](#Links)

## Project Description

This application is a job search engine which has Google Maps integrated​, as current or existing job search engines do not have such feature. It will provide job seekers direct access to the location of jobs they are searching for​.

As a client, I can register myself into the portal. Then I can login into the portal and search for jobs based on my location. I can save jobs and also apply to jobs. Furthermore these jobs would be displayed on the My Jobs page where you can see the number of applied and saved jobs. You have the ability to remove saved jobs as well.

The application has been deployed on Heroku.

## User Story

AS a job seeker
I WANT to search for a job by its location and by job title
SO THAT I can apply for the jobs that suit my need

## Acceptance Criteria

```
GIVEN a job search portal
WHEN I click register
THEN I was asked to provide first name, last name, email and password
WHEN I click log in
THEN I was asked to provide email and password
WHEN I type a job title in search box
THEN a list of jobs will return and appear on the map
WHEN I click on each job item
THEN I can view the title, company name, location, job description, job types
WHEN I click the save button
THEN this job will be added in the saved jobs of my profile
WHEN I click the apply button
THEN the job will be added in the applied jobs of my profile
WHEN I click on my profile
THEN I get a summary of how many jobs are saved and applied for
```

## Technologies Used

 - Material UI
 - React
 - Google Maps
 - Javascript
 - Heroku
 - EmailJS
 - MongoDB
 - GraphQL
 - JWT

## Installation
- Download or clone the repository 
- Run npm install
- Type "npm run dev"

File Structure Overview:

<img src="./frontend/src/assets/file-structure.png" width="250">

## Screenshot

![HOME](./frontend/src/assets/home.png)
![MYJOBS](./frontend/src/assets/MyJobs.png)
![ContactUs](./frontend/src/assets/ContactUs.png)

## Links

URL of the deployed application: 

https://enigmatic-headland-23847.herokuapp.com/
