

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/LeandervanAarde/nhl)
![GitHub watchers](https://img.shields.io/github/watchers/LeandervanAarde/nhl)
![GitHub language count](https://img.shields.io/github/languages/count/LeandervanAarde/nhl)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/LeandervanAarde/nhl)
![GitHub dependancies](https://img.shields.io/depfu/dependencies/github/LeandervanAarde/nhl)

<!-- LeandervanAarde/nhl -->

<!-- HEADER SECTION -->
<h3 align="center" style="padding:0;margin:0;">Leander van Aarde</h3>
<h5 align="center" style="padding:0;margin:0;">200211</h5>
<h6 align="center">DV200 - Term 1 React | 2022</h6>
</br>
<p align="center">

  <a href="https://github.com/LeandervanAarde/nhl">
    <img src="public/Assets/Logo.svg" alt="Logo" width="140">
  </a>
  
  <h3 align="center">Chel | NHL</h3>

  <p align="center">
    This is a project built through React and chartsjs to showcase the statistics of all NHL players and teams active and retired in the NHL
    <br/>
    <i> This does exclude the Goalies of the NHL</i>
    <br />
    <p align="center"> Find the link to the NHL API <a href="https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md#team-stats"> here</a> </p>
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/LeandervanAarde/nhl/issues">Report Bug</a>
    ·
    <a href="https://github.com/LeandervanAarde/nhl/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
* [Project Description](#project-description)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Prerequisites](#prerequisites)
* [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
* [Ideation](#ideation)
* [Wireframes](#wireframes)
* [Custom UI](#user-flow)
* [Development Process](#development-process)
* [Implementation Process](#implementation-process)
* [Highlights](#highlights)
* [Challenges](#challenges)
* [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
* [Mockups](#mockups)
* [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1][image1]

### Project Description

Welcome to CHEL! CHEL is a web based application that tracks the statistics of NHL players and Teams. On this application users are 
able to view the top Teams in the league, a range of player statistics being compared and teams being compared. You are also able to track the performance of these players over the course of their careers in categories. Live scores are updated daily to give users the latest scores on the most exciting games from the past 24 hours. 

### Built With
* Css
* [React](https://reactjs.org/)
* [Chartsjs](https://www.chartjs.org/)
* [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Axios](https://axios-http.com/docs/intro)
* [<model-viewer>](https://modelviewer.dev/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

To get a copied file of this repository, follow the steps below to get it installed on your local machine. 

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/LeandervanAarde/nhl.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/LeandervanAarde/nhl.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

4. No API keys are required


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
![image2](https://raw.githubusercontent.com/MikeMaynard14/termoneexample/main/src/assets/mockup.jpg)

### Get up to date statistics of NHL players!

Through the use of the NHL-API we were able to get the most relevant and up-to-date data of the NHL!

![image3][image3]
### Compare players through chartsjs! 

The implementation of chartjs allows users to compare data of player and teams in order to get a visual idea of where players stand in the NHL

![image4][image4]
### Up to date scores
See the latest and most up to date scores of 2 recent games

![image5][image5]


<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project. <br>
In this project I had started the conceptual process through identifying the correct API, once I had identified the API that I could use and extract a sufficient amount of data from, I had gone on to find inspiration from other web applications/ websites. This would entail looking at how other websites approached data visualisation and finding an overall design and colour scheme.
<br> 
Throughout the concept ideation I would also be learning more about react and the implementation of react so that I could identify what I could use and what not. 

### Ideation

![image5](https://drive.google.com/uc?export=view&id=1FkDDCFdbAgA_YZNAQofmj6QswcYzr0mt)
<br>
![image6][image6]

### Wireframes
 In ordder to get the best result and most user-centered design that I could produce, I had to create wireframes. Giving me the opportunity to identify any problems with the design earlier on and thus saving time during the development process.
![image7](https://drive.google.com/uc?export=view&id=1KtPLYfFAE1i60t74tVP3uhXAGANK4bkM)
![image8](https://drive.google.com/uc?export=view&id=1uGaJs6NrIscBs15BjXAB35AaHelw1JiX)
![image9](https://drive.google.com/uc?export=view&id=1MxgcNI2FIrKrRUuhaOxtd6aNQJ0XdUfs)
### Custom UI
  In order to make a users experience more pleasureable, I have added a 3D model of a puck through the implementation of the model-viewer cdn. This makes a users experience more pleasureable considering that it's something interesting that's not generally seen withina web application. 
![Gif10](https://drive.google.com/uc?export=view&id=1lIcZ_CbVNAnp-7NbmVQTLBJHZa1AtlTH)

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilized React `Charts.JS` dependency for Data visualization
* Implemented Routing with `React-Router v6`.
* API End Point: link Here 
* `Plugin` for this.
* ETC.

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* What was good about this project, what did you learn.
* What aspects did you enjoy.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Bugs.
* Bugs.


#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* Name of Skill Explored.
* Explain your understanding and execution of above skill.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Future 1.
* Future 2.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image9][image9]
<br>
![image10][image10]

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)


See the [open issues](https://github.com/MikeMaynard14/termoneexample/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Your Name & Surname** - [MikeMaynard14](https://github.com/MikeMaynard14)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Your Name & Surname** - [email@address](mailto:email@address) - [@instagram_handle](https://www.instagram.com/instagram_handle/) 
* **Project Link** - https://github.com/MikeMaynard14/termoneexample

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)

