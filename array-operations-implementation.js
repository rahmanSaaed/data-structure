class OurArray {
    // Resize the array by creating a new one with the specified size and copying the contents
    resize(source, newSize) {
      if (newSize <= 0 || !source || source.length === newSize) return;
      debugger;
      let newArray = new Array(newSize);
      for (let i = 0; i <=  newSize - 1; i++) {
        newArray[i] = source[i];
      }
      
      return newArray;
    }
  
    // Get the element at a specific index in the array
    getAt(source, index) {
      if (index < 0 || index >= source.length) return null;
      return source[index];
    }
  }
  
  // Main function to test the array resizing and access
  function main() {
    let arr = [4654, 921, 762];
    let our = new OurArray();
  
    // Resize the array to 5 elements
    arr = our.resize(arr, 5);
    console.log(arr); // Output: [ 4654, 921, 762, undefined, undefined ]
    console.log("length", arr.length);
    // Get the element at index 1
    let item = our.getAt(arr, 1);
    console.log(item); // Output: 921
    console.log(arr[1]); // Output: 921
  }
  
  main();