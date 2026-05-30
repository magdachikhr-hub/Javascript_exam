//6.1

const output = document.querySelector(".output");

async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );

    const data = await response.json();
    console.log(data);
    data.forEach((post) => {
      output.innerHTML += `<p>${post.body}</p>
  <p>${post.id}</p>
  <p>${post.title}</p>
  <p>${post.userId}</p>`;
    });
  } catch (error) {
    console.log(error);
  }
}

getPost();

//6.2

const userPost = {
  title: "My Test Post",
  body: "This is a test",
  userId: 1,
};

async function postUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userPost),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

postUser();
