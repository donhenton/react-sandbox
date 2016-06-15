ReactStarter
====

Use this as a starting point for working on chapters of the [Learn and Understand React JS](https://www.udemy.com/learn-and-understand-reactjs/) course on Udemy.com.
Taken from https://github.com/StephenGrider Udemy class.

See also [Learn and Understand React JS](https://www.udemy.com/learn-and-understand-reactjs/) course on Udemy.com.
---

### Running locally

* create a folder under src called conf
* add conf.js with the following: 

```
module.exports = function () {
    
    
    return   { "clientID":"<imgur client id>", "client_secret": "<imgur_client_secret" }
}
```

* this folder is NOT checked into source
* run gulp for the default build and launch job 
* app runs at http://localhost:8000


