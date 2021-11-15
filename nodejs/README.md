### node js installation and running api servers

These are the following steps for installing and running api servers on node js:

1. Install node js and npm

   ```
   sudo apt install nodejs
   sudo apt install npm

   ```

2. Create 1api and 2api directories, and intiazlize node projects:

   ```
   mkdir 1api 2api
   ```

   **In both of the directories run the commands respectfully:**

   ```
   npm init -y
   ```

   Install express and pm2:

   ```
   npm install express
   npm install pm2
   ```

3. Create pm2 configuration file named **process.config.js** with following properties:

   ```

       module.exports = {
       apps: [
           {
           script: "index.js",
           instances: "4",
           exec_mode: "cluster",
           },
       ],
       };
   ```

Where **exec_mode= cluster**, means the pm2 will run the server in maximul available CPU cores and
**instances = 4** means it will be limited to 4 cores ro 4 worker threads.

4.  Specifying the port on which node js app runs:

        The port of the node js app has to configured from the app's code iteself:

        ```
        app.listen(6080, () => {
             console.log(`Server listening on port 6080`);
         });

        ```

5. Testing node js app with ```node``` command:
    The app can be tested by running the follwing command:

        ```
            node index.js
        ```
        where index.js is the entrypoint to our node js app's code. 

6. Starting and stopping our apps with pm2: 

    Apps can be run with pm2 with the following command: 
        ``` 
        pm2 start process.config.js
        
        ```

    Running pm2 process can be stopped using: 

        ```
        pm2 stop process.config.js

        ```