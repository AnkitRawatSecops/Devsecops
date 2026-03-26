// 1. Simple GET request using Fetch API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
fetchData("https://jsonplaceholder.typicode.com/posts/1");


// 2. POST request with data
async function postData(url, payload) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    
    const data = await response.json();
    console.log("Response:", data);
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

// Example usage
postData("https://jsonplaceholder.typicode.com/posts", {
  title: "My Post",
  body: "This is a test post",
  userId: 1,
});


// 3. GET request with query parameters
async function fetchWithParams(baseUrl, params) {
  const url = new URL(baseUrl);
  
  // Add query parameters
  Object.keys(params).forEach(key => {
    url.searchParams.append(key, params[key]);
  });
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage
fetchWithParams("https://jsonplaceholder.typicode.com/posts", {
  userId: 1,
  _limit: 5,
});


// 4. Using XMLHttpRequest (older method)
function getDataXHR(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log("Data:", JSON.parse(xhr.responseText));
    } else {
      console.error("Error:", xhr.status);
    }
  };
  
  xhr.onerror = function() {
    console.error("Request failed");
  };
  
  xhr.send();
}

// Example usage
getDataXHR("https://jsonplaceholder.typicode.com/users/1");