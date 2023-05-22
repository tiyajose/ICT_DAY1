function reverseName(name) {
    // Split the name into an array of characters
    var nameArray = name.split('');
  
    // Reverse the array
    var reversedArray = nameArray.reverse();
  
    // Join the characters back into a string
    var reversedName = reversedArray.join('');
  
    return reversedName;
  }
  
  // Example usage
  var name = 'John';
  var reversedName = reverseName(name);
  console.log(reversedName); // Outputs 'nhoJ'
  