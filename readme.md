# uRested

uRested is a JavaScript API around the [Umbaco REST API](https://github.com/umbraco/umbracorestapi) that was annonced at CodeGarden 15.

# Why?

While the HAL spec is what is being followed and it's fairly discoverable there is still quite a bit of boilerplate code that needs to be written to follow the links, make the AJAX calls, expose responses, etc.

The aim is to have a simple API that sits over the top the exposed API.

# Tech

This API is meant to be agnostic of any tech that isn't in browsers and not tied to any framework so it relies on:

* [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for AJAX
* [babel](http://babeljs.io/) so it can be written in ES6

# Demo

There's a full demo in the `demo` folder, setup the Umbraco instance in there and then run the node application to test it out.