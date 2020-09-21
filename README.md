# Los Angeles Dodgers manager tool (Lineup creator)

Sorry Dave Roberts, you have been replaced and new manager is whoever uses this app. This is a fun app that allows you to build the perfect lineup for the current Dodger game. You will be able to view player stats and set the best lineup for the current matchup. 


## The Details:

This app is built using a RoR backend and a Vanilla JS frontend. The Database used is Sqlite and the seed data is retreived through the MySportsFeeds API. 


### Backend: Rails 
I used Rails to build an API that my front end can pull from. Using the data seeded in from another API, the front end send fetch requests to the Rails API which displays and saved data back into the database. 

### Frontend: Vanilla JS
I went ahead used Vanilla JS to create requests to the DB when the DOM content is loaded, then create objects with the data so not to slow down with continual fetch requests. 

### Getting Started:

* Clone the repository

* cd into the backend folder
```
cd ultimate_mlb_manager_backend
```


* Bundle the gems 
```
bundle instal
```

* Add .env file to backend directory. 

* Add API key to .env file. 

* Run migrations to build tables
```
rake db:migrate
```

* Seed database 
```
rake db:seed
```

* Start up the Rails server
```
rails s
```

* Open index.html in your browser
