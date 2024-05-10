// <!-- Question - 4
// A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.-->

var visitorName = "John Doe";
var product = "T-Shirt";
var quantity = 5;

var message =
  visitorName +
  " ordered " +
  quantity +
  " " +
  product +
  "'s on XYZ Clothing store.";

document.write(message);
