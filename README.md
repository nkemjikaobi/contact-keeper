LIVE URL:  https://deric-contact-keeper.herokuapp.com/

<h1>Contact Keeper</h1>
<p>This is a project for users to store contacts</p>
<p>Contacts are associated to a single user i.e An unauthorized user can't read or write another users contact</p>
<p>Satisfies the CRUD functionalites</p>

A Contact Keeper built with NODEJS, EXPRESS, REACT and MONGODB
<p>CONTEXT API was used for STATE MANAGEMENT across COMPONENTS</p>

<h1>Clone The Repository</h1>
<code><pre>git clone https://github.com/nkemjikaobi/contact-keeper.git</pre></code>

<h1>CD into the project</h1>
<code><pre>cd contact-keeper</pre></code>

<h1>Running the Project.</h1>
Install dependencies with <code><pre>npm install</pre></code>

* Add your database URI and JWT secret in the config folder { either **production.json** or **default.json** } depending on your environment

* Run <code><pre>npm run dev</pre></code> { this will concurrently run the server and the client side }

* Routes for the API endpoints can be found in the **routes** folder 
* The models for the users and contacts can be found in the **models** folder 

* Authentication and Authorization were implemented using JWT token.

* Passwords are being hashed with bcryptjs

* CONFIG is used to store our environment variables

* Check all dependencies and devdependecies used in **package.json**

<h1>Next steps</h1>
Visit http://localhost:3000
<p>Register a new user and start storing contacts</p>
