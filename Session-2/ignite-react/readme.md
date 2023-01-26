# Ignite React App

Steps performed

1. Create a project/app folder.

2. Create `index.html` and add bare minimum HTML5 document.

3. Do `npm init`.

4. Install "parcel" - `npm install -D parcel`.

5. Execute your app using `npx parcel index.html`, check output in your browser.

6. Install "react" & "react-dom" `npm install react react-dom`.

7. Create `app.js` and write Hello World in React.

8. Import `app.js` at the bottom of `index.html`, check output in your browser.
   "parcel" automatically reloads the app after every change.

9. Build failed issue and its resolution.
   Issue:
   `Browser scripts cannot have imports or exports.`

   Resolution/Fix:
   Add the type="module" attribute to the <script> tag.

   Refer: https://parceljs.org/languages/javascript/#classic-scripts

10. HMR - Hot Module Reloading
    "parcel" automatically reloads your app after every change.
    It keeps track of file changes and whenever it happens it reloads the app.

    File watcher alogorithm - written in C++ is used behind the scenes.

11. Observe that ".parcel-cache" and "dist" folders are created.

12. `npx parcel index.html` - creates a development build inside "dist" folder.
    `npx parcel build index.html` - it will create production build inside "dist" folder.
    But we get an error in build - `Target "main" declares an output file path of "index.js" which does not match the compiled bundle type "html".`

    Fix - we need to remove "main" entry from the package.json file.
    After this build will be successful.

    Observe "dist" folder for the production build.

13. `npm parcel index.html --https` - allows to use HTTPS protocol.



http://localhost:1234/

