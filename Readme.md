# Dictionary Portuguese App
> Dictionary with meaning of portuguese words.
> Live demo [_here_](https://erick-programmer.github.io/Dictionary-Portuguese-API-App/dictionary.html). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Dictionary in Portuguese app created with HTML, CSS and Javascript.
- With project pretending to found words meaning in portuguese.
- Purpose this project is helping people that don't knowledge portugueses words.
- Trough of the creation of this project, i should to show that is possible to provide valuable information with technologies.
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->

## Technologies Used

- API Dictionary - Dicionário Aberto API.
    - https://api.dicionario-aberto.net/index.html


- HTML  - version 5 

    - in html was used to organization semantic (header, main and footer tags);
    - forms tag to words insertion in portuguese;
    - Input (button) tag for word meanings generations.
    - div element for each one elements within of the tags that need of stylization;

- CSS  - version 3 

    - in CSS techlopgy was used .class and #ids to organization and elements design. 
    - in Body was used padding, margin and concepts de box sizing;
    - for header and footer, its was used div element as base received colorization.
    - in main tag was implement concepts of display flex, justify content and align itens for Formulary centralization. 
    - at the formulary received concepts of design simple, as well display grid, padding for elements (labels) and spaces as inputs, area (div element) to received words meaning. 

- Javascript  - version ES6+

    - in javascript was used concepts of functions, alerts (isNaN and operator for when to write words in portuguese, in whitespace don't used numbers or leave empty spaces);
    - asynchronous function and awaits for the data return API and will work with this data through loops and arrays methods to process this data.
    - and will return the results (handle DOM elements) searched in the dictionary.

- jQuery  - version 3.7.0

    - jQuery was used to treat the received file into JSON, which contained the array element in xml. 
    - using parseHTML(), find(), text() and .this object, this datas was to move for um new array.
    - in new array to string and function join() so that it can be used in the dictionary.
 


## Screenshots
<!-- If you have screenshots you'd like to share, include them here. -->
![Example screenshot](./img/screenshot.png)
## Project Status
Project is: _in progress_ . 


## Room for Improvement

Room for improvement:
- Responsible design for web browsers of mobile devices.
- Use others meanings that API provide.

To do:
- Responsible design for mobile application.
- Space for others meanings that API provide.

## Contact
Created by [@Erick-Programmer](https://github.com/Erick-Programmer) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->