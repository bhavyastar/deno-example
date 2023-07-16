// function capitalize(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }

// function hello(name) {
//   return "Hello " + capitalize(name);
// }

// console.log(hello("john"));
// console.log(hello("Sarah"));
// console.log(hello("kai"));
// const jsonResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
// const jsonData = await jsonResponse.json();
// console.log("User Data:", jsonData);

// // Fetch data from the Chuck Norris Jokes API
// const textResponse = await fetch("https://api.chucknorris.io/jokes/random");
// const textData = await textResponse.json();
// console.log("Chuck Norris Joke:", textData.value);

// // Handling errors
// try {
//   await fetch("https://does.not.exist/");
// } catch (error) {
//   console.log("Error:", error.message);
// }
const jsonResponse = await fetch("https://api.github.com/users/denoland");
const jsonData = await jsonResponse.json();
console.log(jsonData);

/**
 * Output: HTML Data
 */
const textResponse = await fetch("https://deno.land/");
const textData = await textResponse.text();
console.log(textData);

/**
 * Output: Error Message
 */
try {
  await fetch("https://does.not.exist/");
} catch (error) {
  console.log(error);
}