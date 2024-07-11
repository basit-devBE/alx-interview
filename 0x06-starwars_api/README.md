# API Requests in JavaScript

This README provides an overview of making API requests in JavaScript.

## Introduction

API (Application Programming Interface) requests allow developers to interact with external services and retrieve data. JavaScript provides several methods and libraries to make API requests.

## XMLHttpRequest

The `XMLHttpRequest` object is a built-in JavaScript object that allows making HTTP requests. It provides methods for sending requests, handling responses, and managing the request lifecycle.

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
    }
};
xhr.send();
```

## Fetch API

The Fetch API is a modern alternative to `XMLHttpRequest`. It provides a more powerful and flexible way to make API requests. It returns a Promise that resolves to the response.

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## Axios

Axios is a popular JavaScript library for making HTTP requests. It provides a simple and intuitive API, supports request cancellation, and handles response data serialization.

```javascript
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

## Conclusion

Making API requests in JavaScript is essential for interacting with external services and retrieving data. Whether you choose to use the built-in `XMLHttpRequest`, the Fetch API, or a library like Axios, understanding how to make API requests is a valuable skill for web developers.
