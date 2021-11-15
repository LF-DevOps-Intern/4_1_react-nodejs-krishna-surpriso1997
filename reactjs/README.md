### React app Creation and running on port 3001

These steps are taken to create a react app and run on port 3001:

1. Create a new react app with the command :
```
npx create-react-app devops-intern
```

2. Change the text in srrc/App.js to **Hello React Js** 


3. Create a file .env  and following line in the file:

```
PORT=3001
```
Setting the port in .env file because react js picks up port from **.env**  file 


4. Running the app using: 
```
npm start 
```

**npm start** command is present in the script block of **package.json** file