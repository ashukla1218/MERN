initialize:
    npm init

    to install:
        npm i mongodb
        npm i mongoose
        npm i nodemon
        npm i cors
        npm i express
        npm i jsonwebtoken
        npm i bcrypt
        npm i dotenv

    folder structure:
        |-main.js
        |-.env
        router
            |-authRoutes.js
        controller
            |-authControllers.js
        model
            |-userModel.js
        config
            |-db.js

    procedure:
        1. inside main.js
        --> initialize dotenv
        --> require express, make app, listen to port, port number will come from .env
        --> app.get('/', (req, res)=>{res.send("App is running...")})
        ((npx nodemon app.js --> test if the app is running))

        2.
        --> make the variables for the db connection in .env
        --> make db connection in db.js
        --> require it in main.js
        ((start the app --> Test if the connection is working : there should be no errors and 
        the connection call back should print "-----db connected-----"))

        3. inside authControllers.js
        --> make a signup function and export it
        --> inside signUp function, send response as "in progresss..."

        4. inside authRoutes.js
        --> make a router inside authRoutes.js
        --> add a post handler on '/signUp' route with signUp function from controller
        --> export that router and import it in main.js
        --> attach the router on app at route "/api/v1/auth"
        ((open POSTMAN &  test --> http://localhost:1400/api/v1/auth/signup))

        5. Go to frontend and test the connection
    --> make a hook
    --> which does a simple call of api
    --> use that hook in signUp page on signUp button click
    --> and check if the response is "in progress..."

    6. inside main.js
        --> allow cors

    7. inside frontend 
        --> do validation
        --> send data in body for signUp

    8. inside main.js
        --> app.use(express.json()) (this should be written just after the app variable)

    9. inside authController.js
        (the model is pending)
        --> get the body and verify if the body is coming or not
        ((for debugging use NETWORK Terminal in Developer tools))

    10. inside userModel.js
        --> create a model
            --> email, password, name, createdAt, updatedAt

    11. inside authController.js --> signUp function
        --> for new email --> create a new user and return the id with proper format
            --> {status: 'success', message: 'User created", data: { user: user }}
        --> if email already exists --> send error in proper format
            --> status: 400, and json with status fail and message : 'User already exists'

    12. Make proper UI for Login and SingUp Pages (both page should be separate)