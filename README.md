# ATM Exercise Refactoring

###### This README file is a companion to the ToDo List Exercise completed during Week 14 of the Professional Certificate in Coding Cohort. 

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#description">Description</a></li>
    <li><a href="#steps-to-create">Steps to Create</a></li>
    <li><a href="#how-to-run">How to Run</a></li>
    <li><a href="#roadmap-of-future-improvements">Roadmap of Future Improvements</a></li>
    <li><a href="#learning-insights">Learning Insights</a></li>
    <li><a href="#license-information">License Information</a></li>
  </ul>
</details>

## Description
The goal of this project is to take the ATM Exercise and refactor. The steps to complete this project follow:

## Steps to Create 
* Complete ATM exercise
* Review files (index.html, style.css, atm-improvements.jsx) and look for ways to refactor
* Edit existing atm-improvements.jsx by:
- Add a popup alert to atm-improvements.jsx that warns if you are trying to withdraw more money than your available balance
- Rename atm-improvements.jsx to atm-func-implementation.jsx to show what the code is doing
- Move ATM declaration component to a new file called atm-func-declaration.jsx
- Update index.html so there are two script tags (atm-func-declaration.jsx and atm-func-implementation.jsx)


## How to Run
* To run, open ___index.html___.
* To add money to your account:
- Select __Deposit__ from the drop-down menu:
- Enter the *Deposit* amount in the input box
- Click *Submit* button
- Verify __Account Balance__ is correct
* To get money from your account:
- Select __Cash Back__ from the drop-down menu:
- Enter the *Cash Back* amount in the input box
- - If your Cash Back request exceeds your account balance, you will get an *insufficient funds* alert
- Click *Submit* button
- Verify __Account Balance__ is correct

## Roadmap of Future Improvements
* Add some additional styling to improve UI:
- When selecting __Cash Back__, change the dollar amount color to red
- After clicking *Submit*, reset the input box to blank


## Learning Insights

Adding a variable to React state to track whether the transaction is valid or not will be helpful in future projects.


## License Information
[This ATM project is licensed under the MIT License](https://github.com/wkbw/atm-refactoring/main/LICENSE).


