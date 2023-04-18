if it says something about a react-scripts command not being found just do this:


Delete the /node_modules directory and the package-lock.json file using the rm command:

rm -rf node_modules
rm -rf package-lock.json


Install react-scripts using the following command:

npm install react-scripts

Install the dependencies using the following command:

npm install
Start the local server by running the following command:

npm run start
