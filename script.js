//your JS code here. If required.
// Step 1: Create the student object with a name property
const student = {
  name: "John Doe"
};

// Step 2: Write the getKeys() function
function getKeys(obj) {
  return Object.keys(obj);  // Use Object.keys() to get an array of keys
}

// Step 3: Test the function
const keys = getKeys(student);
console.log(keys);  // Expected output: ["name"]

// Check if the returned array contains the "name" key
if (keys.includes("name")) {
  console.log("The 'name' key is present in the object.");
} else {
  console.log("The 'name' key is not present in the object.");
}
