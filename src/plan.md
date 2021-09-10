# components:-
 - Navbar component.
 - Image overlay component.
 - Button component.
 - Bookmark button
 - Product header card.
 - Header description component.
 - Pleadge card.
 - Product edition card.


 # Remaining work items:
- Solve the problem of the screen turning black when you have double pop-ups
- create a state to control the pleadge data.
- preserve the state.

# What needs to be a state:-
- the prop figure that is passed to the FigureInformaiton component.
- progress data {passed as now to the progress component prop}.
- items left data ins the pleadgeComponent.
- amount data in the pleadgeComponent.




# How is the state connected and where it should be placed:
- Connections:
    - when a user enters a pleadge amount, the following should happen:
        - The amount of items left should decrease by 1;
        - The amount of backed money should increase by the pleadge amount.
        - The number of packers should increase by 1;
        - The progress bar should increase based on a percentage.
    - The same should happen when a user clicks on the select reward button inside of each product card(a thank you pop up should appear aswell).

# Current Task:-
 - I'm trying to have a state that will control the totla amount of money pleadged & the total number of packers.
 - I also need to be able to update the state that control the default pleadge amount for each item based on a user input




