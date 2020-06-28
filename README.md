# Movies-Sagas

## Description
This application displays some popular movies at the time with their movie title, poster, and a description of the film.
The user may click on a movie poster to go to a details page that displays the title and description of the selected film.
The user then may click a button that brings them back to the home page or click the edit button to bring them to an edit page. This page allows the user to edit the movie title and/or description of the film or, if they so choose, cancel and make no changes to the film details.
NOTE: Clicking on icon in top right will bring you to an admin page. The page has only placeholders at the moment.

## Screen Shots

![Home Page](/public/images/movie_list.png)
![Details Page Example](/public/images/details.png)
![Edit Page Example](/public/images/edit.png)

## Installations
1. Create database named ```sagas_movies_weekend```
2. Use data in database.sql file to populate tables
3. Open up your editor of choice and run an ```npm install```
4. Run ```npm run server``` in your terminal
5. Run ```npm run client``` in your terminal
6. Once ```npm run client``` finishes it should open up a new broswer tab for you

## Built With
Material UI

## License
MIT

## Stretch Goals
[X]Display the current values in the input (title) and textarea (description) on the Edit Page

 [X]Display all genres on movie list page. 

 []Move sagas and reducers out of  index.js and into separate files

 []Allow the user to refresh the details or edit page. 

 []Allow the user to add a genre to a movie.

 []Allow the user to remove a genre from a movie.
 
 []Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page.

 []Create an Admin page. Add a link from the Home page to the Admin page. The page should initially display a login form (an input for username and an input for password)

## Acknowledgements
Thanks to EDA and cohort mates for helping with this weekend project!

## Support
If you have any questions or issues, please email me at khagler.kh@gmail.com
