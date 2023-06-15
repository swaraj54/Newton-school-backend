// Function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Function to reverse a string
function reverse(str) {
    return str.split('').reverse().join('');
}

// Export the functions to make them accessible to other modules
module.exports = {
    capitalize: capitalize,
    reverse: reverse
};