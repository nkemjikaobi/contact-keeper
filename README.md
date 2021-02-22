LIVE URL:  https://deric-contact-keeper.herokuapp.com/

Contact Keeper

A Contact Keeper built with NODEJS, EXPRESS, REACT and MONGODB

Add your database URI and JWT secret in the config folder { either **production.json** or **default.json** } depending on your environment

Running the Project.
Install dependencies with npm install

Run npm run dev { this will concurrently run the server and the client side }

Routes for the API endpoints can be found in the **routes** folder 
The models for the users and contacts can be found in the **models** folder 

Authentication and Authorization were implemented using JWT token.

Passwords are being hashed with bcryptjs

CONFIG is used to store our environment variables

Check all dependencies and devdependecies used in **package.json**

Next steps
Visit http://localhost:3000
Register a new user and start storing contacts
