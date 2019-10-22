export const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET"
  })
    .catch(console.log)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw Error("failed to fetch todos");
    });
};
