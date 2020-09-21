# Los Angeles Dodgers manager tool (Lineup creator)

Sorry Dave Roberts, you have been replaced and new manager is whoever uses this app. This is a fun app that allows you to build the perfect lineup for the current Dodger game. You will be able to view player stats and set the best lineup for the current matchup. 


## The Details:

This app is built using a RoR backend and a Vanilla JS frontend. The Database used is Sqlite and the seed data is retreived through the MySportsFeeds API. 


### Backend: Rails 
I used Rails to build an API that my front end can pull from. Using the data seeded in from another API, the front end send fetch requests to the Rails API which displays and saved data back into the database. 

### Frontend: Vanilla JS
I went ahead used Vanilla JS to create requests to the DB when the DOM content is loaded, then create objects with the data so not to slow down with cobtinual fetch requests. 


* Ruby version - Rails 6.0.3.2

* System dependencies

* Configuration

* Database creation 

* Database initialization

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
