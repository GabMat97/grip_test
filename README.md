
# Grip Technical test



## Run Locally

Clone the project

```bash
  git clone https://github.com/GabMat97/grip_test.git
```


Install dependencies

```bash
  npm install
```

Open Q1 answer with the following command

```bash
  open index.html
```
Q2 Q3 Q4 are all enclosed within the index.js file. You can verify these are working by running the tests using Jest with the following command. 

```bash
  npm run test
```

Alternatively, if there is a dependency issue or a version disparity with your local machine, please move over the records array inside index.test.js over to index.js and uncomment lines 56 and 57. You can now run these manually with the following command. 

```bash
  node index.js
```
That being said, my project does have a number of limitations regarding its functionality. Firstly, it assumes user actions are either "start" or "stop". Any other action will make the function not work as intended. However, new actions can be added in the initial CONST array. Additionally, it assumes the user is not able to "start" with 2 of the same device names without stopping one of them first. This is because the filter method on line 92 takes out all the device names that are part of the array. Finally, the last assumption pertains to the value of date_actioned and that it is never negative. 


