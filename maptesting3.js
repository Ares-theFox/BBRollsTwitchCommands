const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let mapselected = "test";
if (urlParams.has('map')) {
	mapselected = urlParams.get('map');
	console.log(urlParams.get('map'));
}

console.log("ffffffffffffff")

const mapUrls = {
	"28_turns_later": {
		"prettyname": "28 Turns Later",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/28%20Turns%20Later.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/28%20Turns%20Later%20blizzard%20pattern.png",
		"totalBlizzards": 4
	},
	"classic": {
		"prettyname": "Classic",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Classic.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Classic%20blizzard%20pattern.png",
		"totalBlizzards": 3
	},
	"classic_frozen": {
		"prettyname": "Classic Frozen",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Classic%20Frozen.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Classic%20Frozen%20blizzard%20pattern.png",
		"totalBlizzards": 3
	},
	"greece": {
		"prettyname": "Greece",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Greece.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Greece%20blizzard%20pattern.png",
		"totalBlizzards": 6
	},
	"italy": {
		"prettyname": "Italy",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Italy.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Italy%20blizzard%20pattern.png",
		"totalBlizzards": 2
	},
	"orbital_objectives": {
		"prettyname": "Orbital Objectives",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Orbital%20Objectives.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/Orbital%20Objectives%20blizzard%20pattern.png",
		"totalBlizzards": 4
	},
	"united_states": {
		"prettyname": "United States",
		"baseurl": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/United%20States.png",
		"blizzardPatternImage": "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/United%20States%20blizzard%20pattern.png",
		"totalBlizzards": 3
	},
}

let imgElement = document.getElementById("map");
imgElement.src = mapUrls[mapselected].baseurl;

let title = document.getElementById("mapnametitle");
title.textContent = mapUrls[mapselected].prettyname;

document.title = mapUrls[mapselected].prettyname;

  let zoom = 1;
  document.getElementById("zoomInButton").addEventListener("click", function () {
    zoom += 0.1;
    document.body.style.zoom = zoom;
  });
  document.getElementById("zoomOutButton").addEventListener("click", function () {
    zoom -= 0.1;
    document.body.style.zoom = zoom;
  });
	
  document.getElementById("resetButton").addEventListener("click", function () {
    location.reload();
  });

// Get the button element
var mapDirectoryButton = document.getElementById("mapDirectoryButton");

// Add an event listener to the button that listens for the "click" event
mapDirectoryButton.addEventListener("click", function() {
  // Open the URL in a new tab when the button is clicked
  window.open("https://ares-thefox.github.io/Risk-Dynamic-Zombie-Pathing/testingpage3.html", "_blank");
});

var images = [
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox1.PNG",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox2.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox3.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox4.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox5.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox6.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox7.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox8.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox9.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox10.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox11.png",
  "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Disconnection-Maps/main/ready_fox12.png"
];

// Preload the blizzard pattern
var blizzardPatternImage = new Image();
blizzardPatternImage.src = mapUrls[mapselected].blizzardPatternImage;

window.onload = function() {
  var img = document.querySelector("header img");
  var randomIndex = Math.floor(Math.random() * images.length);
  img.src = images[randomIndex];
};

// Set initial variables
var colorLegend = mapUrls[mapselected].prettyname;
var csvData = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/" + colorLegend + "%20Zombie%20File.csv";
var SVG = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/" + colorLegend + "%20Paths.svg";
var BlizzardPattern = blizzardPatternImage.src;
var totalBlizzards = mapUrls[mapselected].totalBlizzards;
let blizzardArray = [];
let history = [];
let zombieNodes = [];
const colorDictionary = {
  1: "#ff0000",
  2: "#18c500",
  3: "#006cff",
  4: "#ffff00",
  5: "#ffffff",
  6: "#000000"
};
const colorDarktionary = {
 1: "#000000",
 2: "#000000",
 3: "#000000",
 4: "#000000",
 5: "#000000",
 6: "#ffffff"
};

// Button functions
function button_AddBlizzards() {
  addBlizzards();
}
function button_StopEditing() {
  stopEditing();
}
function button_Undo() {
  undo();
}
function button_AddZombie() {
  AddZombieFunction();
}

const buttons = ["blizzardButton", "eraserButton", "stopButton", "addZombie"];

// Load the CSVs and push to tableData
let tableData;
let tableDataClone;
Papa.parse(
  csvData,
  {
    download: true,
    header: true,
    complete: function (results) {
      // Assign parsed data to tableData
      tableData = results.data;
      // Remove zero-width space character from tableData
      for (let i = 0; i < tableData.length; i++) {
	for (let key in tableData[i]) {
	  if (tableData[i].hasOwnProperty(key)) {
	    tableData[i][key] = tableData[i][key].replace(/\u200B/g, "");
	  }
	}
      }
      // Filter the input data
      let filteredTableData = [];
      for (let i = 0; i < tableData.length; i++) {
          let row = tableData[i];
          if (typeof row === 'object' && row.hasOwnProperty('Territory') && row.hasOwnProperty('Connections')) {
              if (typeof row['Territory'] === 'string' && typeof row['Connections'] === 'string') {
	    	  row['Ownership'] = "None";
	    	  row['Ownership Color'] = null;
	    	  row['Ownership Border Color'] = "#808080";
	    	  filteredTableData.push(row);
              }
          }
      }
      // Assign filtered data to tableData and create a clone
      tableData = filteredTableData;
      tableDataClone = JSON.parse(JSON.stringify(tableData));
      onRequestComplete();
    },
  }
);

// Preload CSVs before generating the map
var requestsCompleted = 0;
function onRequestComplete() {
  requestsCompleted++;
  if (requestsCompleted === 2) {
    // Both requests have completed, so call the generateMap function
    generateMap();
  }
}

// Load the SVG
let paths;
let svgElement;
var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  SVG
);
xhr.onload = function () {
  if (xhr.status === 200) {
    var svg = xhr.responseText;
    var rangeElement = document.getElementById("range");
    rangeElement.innerHTML = svg;
    svgElement = rangeElement.querySelector("svg");
    paths = svgElement.querySelectorAll("path");
    paths.forEach(function (path) {
      path.setAttribute("fill", "transparent");
      path.setAttribute("stroke-opacity", "0");
    });
    // Call the onRequestComplete function to indicate that this request has completed
    onRequestComplete();
  }
};
xhr.send();

// Function to update button text
function updateButtonText() {
  // Update "Add Blizzards" button text
  if (totalBlizzards - blizzardArray.length <= 0) {
    document.getElementById("blizzardButton").innerHTML = "Added all Blizzards";
  } else {
    document.getElementById("blizzardButton").innerHTML = "Add Blizzards (" + (totalBlizzards - blizzardArray.length) + " left)";
  }
}

// FUNCTION: stop editing
function stopEditing() {
  // Set the regular background color to white
  document.getElementById("stopButton").style.backgroundColor = "white";
  
  // Set the hover background color to white
  var styleElement = document.createElement("style");
  styleElement.id = "stopButtonHoverStyle";
  styleElement.textContent = "#stopButton:hover { background-color: white !important; }";
  
  document.head.appendChild(styleElement);
  
  return;
}

// Function to change stroke color and width upon mouseover
const highlightStroke = function(element) {
  element.style.setProperty("stroke", "white", "important");
  element.style.setProperty("stroke-width", "3", "important");
}

// Function to reset stroke color and width according to the selected centrality measure
const resetStroke = function(element, tableData) {
  let border_color = tableData.find(row => row['Territory'] === element.id)['Ownership Border Color'];
  element.style.setProperty("stroke", border_color, "important");
  element.style.setProperty("stroke-width", "2", "important");
}

// Function to define color, border color, and text for function generateMap
function getColorAndTextContent(tableData, i) {
  var color = tableData[i]["Ownership Color"];
  var border_color = tableData[i]["Ownership Border Color"];
  var textContent = tableData[i]["Priority"];
  return {color, border_color, textContent};
}

// Function to add blizzard pattern and snowflake image
function executeBlizzards(path, svgElement, BlizzardPattern, tableData) {
  // Create a clipPath element and set its id
  var clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
  clipPath.setAttribute("id", "clip-" + path.id);

  // Clone the clicked path and append it to the clipPath
  var clonedPath = path.cloneNode(true);
  clipPath.appendChild(clonedPath);

  // Append the clipPath to the defs element
  var defs = svgElement.querySelector("defs") || svgElement.insertBefore(
    document.createElementNS("http://www.w3.org/2000/svg", "defs"),
    svgElement.firstChild
  );
  defs.appendChild(clipPath);

  // Create an image element and set its attributes
  var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", BlizzardPattern);
  image.setAttribute("width", "100%");
  image.setAttribute("height", "100%");
  image.setAttribute("clip-path", "url(#clip-" + path.id + ")");
  image.setAttribute("pointer-events", "none");

  // Append the image to the SVG
  svgElement.appendChild(image);

  // Move the image behind the path element
  svgElement.insertBefore(image, svgElement.firstChild);

  // Create an image element and set its attributes
  var snowflakeImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
  snowflakeImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/snowflake.png");

  // Set a custom attribute to store the id of the clicked path
  snowflakeImage.setAttribute("data-path-id", path.id);

  // Find matching row in CSV data
  var coordinates = tableData.find(function (row) {
    return row["Territory"] === path.id;
  });

  // Get coordinates from CSV data
  var x = coordinates["Pixel Pair 1"];
  var y = coordinates["Pixel Pair 2"];

  // Set pointer-events attribute of the image element to none
  snowflakeImage.setAttribute("pointer-events", "none");

  // Append the image to the SVG
  svgElement.appendChild(snowflakeImage);

  // Add an event listener to the image element to update its x and y attributes after it has been loaded
  snowflakeImage.addEventListener("load", function() {
    // Get the bounding box of the image element
    var bbox = snowflakeImage.getBBox();

    // Update the x and y attributes of the image element to center it over the clicked area
    snowflakeImage.setAttribute("x", x - bbox.width / 2);
    snowflakeImage.setAttribute("y", y - bbox.height / 2);
    
    return {image, snowflakeImage};
});

// Set path styles
path.style.setProperty("fill", "transparent", "important");
path.style.setProperty("stroke", "white", "important");
path.style.setProperty("stroke-width", "1", "important");
}
	
// Function to handle user-added blizzards
function addBlizzards() {
  document.getElementById("stopButton").innerHTML = "Stop Adding Blizzards";
  document.getElementById("stopButton").style.backgroundColor = "#4caf50";
  
  var styleElement = document.createElement("style");
  styleElement.id = "stopButtonHoverStyle";
  styleElement.textContent = "#stopButton:hover { background-color: #3e8e41 !important; }";
  document.head.appendChild(styleElement);

  let shouldReturn = false;
	
  const buttonClick = function () {
    shouldReturn = true;
  };

  buttons.forEach(button => {
    document.getElementById(button).addEventListener("click", buttonClick);
  });

  // Check if size of blizzardArray is greater than or equal to totalBlizzards
  if (blizzardArray.length >= totalBlizzards) {
    // Return early from the function
    return;
  }

  // Define mouseover, mouseout, and click event handlers
  const mouseoverHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (!blizzardArray.includes(this.id)) {
      highlightStroke(this);
    }
  };
	
  const mouseoutHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (!blizzardArray.includes(this.id)) {
      resetStroke(this, tableData);
    }
  };
	
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (!blizzardArray.includes(this.id)) {
      zombieNodes = zombieNodes.filter(id => id !== this.id);   
      blizzardArray.push(this.id);
      history.push({ type: 'addBlizzard', pathId: this.id });
	    
      // Check if size of blizzardArray is greater than or equal to totalBlizzards
      if (blizzardArray.length >= totalBlizzards) {
        // Remove existing event listeners from elements in paths array
        paths.forEach(function (path) {
          path.removeEventListener("mouseover", mouseoverHandler);
          path.removeEventListener("mouseout", mouseoutHandler);
          path.removeEventListener("click", clickHandler);
        });

        document.getElementById("stopButton").innerHTML = "Stop Editing";
	document.getElementById("stopButton").style.backgroundColor = "white"
	      
	var styleElement = document.createElement("style");
	styleElement.id = "stopButtonHoverStyle";
	styleElement.textContent = "#stopButton:hover { background-color: white !important; }";
	document.head.appendChild(styleElement);

        generateMap();
        return;
      }

      // Execute generateMap function
      generateMap();
    }
  };

  // Add event listeners to elements in paths array
  paths.forEach(function (path) {
    path.addEventListener("mouseover", mouseoverHandler);
    path.addEventListener("mouseout", mouseoutHandler);
    path.addEventListener("click", clickHandler);
  });
}

// FUNCTION: Eraser
function eraser() {
  // Immediately return if the blizzard array is empty
  if (blizzardArray.length === 0 && zombieNodes.length === 0) {
    return;
  }

  document.getElementById("stopButton").innerHTML = "Stop Erasing";
  document.getElementById("stopButton").style.backgroundColor = "#4caf50";

  var styleElement = document.createElement("style");
  styleElement.id = "stopButtonHoverStyle";
  styleElement.textContent = "#stopButton:hover { background-color: #3e8e41 !important; }";
  document.head.appendChild(styleElement);

  let shouldReturn = false;
	
  const buttonClick = function () {
    shouldReturn = true;
  };

  buttons.forEach(button => {
    document.getElementById(button).addEventListener("click", buttonClick);
  });
	
  // Define mouseover, mouseout, and click event handlers
  const mouseoverHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (blizzardArray.includes(this.id) || zombieNodes.includes(this.id)) {
      this.style.setProperty("stroke", "#ff1111", "important");
      this.style.setProperty("stroke-width", "4", "important");
    }
  };

  const mouseoutHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (blizzardArray.includes(this.id)) {
      this.style.setProperty("stroke", "white", "important");
      this.style.setProperty("stroke-width", "1", "important");
    } else if (zombieNodes.includes(this.id)) {
      this.style.setProperty("stroke", "#20A220", "important");
      this.style.setProperty("stroke-width", "2", "important");
    }
  };

  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (blizzardArray.includes(this.id)) {
      blizzardArray = blizzardArray.filter((path) => path !== this.id);
      history.push({ type: 'eraseBlizzard', pathId: this.id });
      generateMap();
    } else if (zombieNodes.includes(this.id)) {
      zombieNodes = zombieNodes.filter((path) => path !== this.id);
      generateMap();
    }

    // Check if size of blizzardArray is greater than or equal to totalBlizzards
    if (blizzardArray.length === 0 && zombieNodes.length === 0) {
      // Remove existing event listeners from elements in paths array
      paths.forEach(function (path) {
        path.removeEventListener("mouseover", mouseoverHandler);
        path.removeEventListener("mouseout", mouseoutHandler);
        path.removeEventListener("click", clickHandler);
      });

      document.getElementById("stopButton").innerHTML = "Stop Editing";
      document.getElementById("stopButton").style.backgroundColor = "white";

      var styleElement = document.createElement("style");
      styleElement.id = "stopButtonHoverStyle";
      styleElement.textContent = "#stopButton:hover { background-color: white !important; }";
      document.head.appendChild(styleElement);

      return;
    }
  };

  // Add event listeners to elements in paths array
  paths.forEach(function (path) {
    path.addEventListener("mouseover", mouseoverHandler);
    path.addEventListener("mouseout", mouseoutHandler);
    path.addEventListener("click", clickHandler);
  });
}

// FUNCTION: undo
function undo() {
  // Check if the history array is not empty
  if (history.length > 0) {
    // Get the last action from the history array
    let lastAction = history.pop();

    // Check the type of the last action
    if (lastAction.type === 'addBlizzard') {
      // Remove the last blizzard from the blizzardArray
      blizzardArray.pop();
      generateMap();
    } else if (lastAction.type === 'eraseBlizzard') {
      // Add the erased path back to the blizzard array
      blizzardArray.push(lastAction.pathId);
      generateMap();
    }
  }
}

// Add an event listener for the keydown event to the document object
document.addEventListener('keydown', function(event) {
  // Check if the ctrlKey property is true and if the key property is equal to 'z'
  if (event.ctrlKey && event.key === 'z') {
    // Call the undo function
    undo();
  }
});

// Function to add zombies
function AddZombieFunction(color) {
  document.getElementById("stopButton").innerHTML = "Stop Adding Zombies"
  document.getElementById("stopButton").style.backgroundColor = "#4caf50";
  
  var styleElement = document.createElement("style");
  styleElement.id = "stopButtonHoverStyle";
  styleElement.textContent = "#stopButton:hover { background-color: #3e8e41 !important; }";
  document.head.appendChild(styleElement);

  let shouldReturn = false;
	
  const buttonClick = function () {
    shouldReturn = true;
  };

  buttons.forEach(button => {
    document.getElementById(button).addEventListener("click", buttonClick);
  });

  // Define mouseover, mouseout, and click event handlers
  const mouseoverHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (!blizzardArray.includes(this.id)) {
      highlightStroke(this);
    }
  };
	
  const mouseoutHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (!blizzardArray.includes(this.id)) {
      resetStroke(this, tableData);
    }
  };
	
  const clickHandler = function () {
    if (shouldReturn) {
      return;
    }
    if (!blizzardArray.includes(this.id)) {
      zombieNodes.push(this.id);
	    
      // Execute generateMap function
      generateMap();
    }
  };

  // Add event listeners to elements in paths array
  paths.forEach(function (path) {
    path.addEventListener("mouseover", mouseoverHandler);
    path.addEventListener("mouseout", mouseoutHandler);
    path.addEventListener("click", clickHandler);
  });
}

// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
	
// Generate the map
function generateMap() {
  // Update buttons
  updateButtonText();
     // Remove all clipPaths
	// Select all clipPath elements
	var clipPaths = svgElement.querySelectorAll('clipPath');
	// Loop through each clipPath and remove it
	clipPaths.forEach(function(clipPath) {
	  clipPath.parentNode.removeChild(clipPath);
	});
     // Remove all images
	// Select all image elements
	var images = svgElement.querySelectorAll('image');
	// Loop through each image and remove it
	images.forEach(function(image) {
	  image.parentNode.removeChild(image);
	});
  // Reset tableData to its original values
  tableData = JSON.parse(JSON.stringify(tableDataClone));
  // Remove existing text elements
  svgElement.querySelectorAll("text").forEach((text) => text.remove());
	
  	// Remove everything contained in the blizzard array
	tableData.forEach((row) => {
	  if (blizzardArray.includes(row["Territory"])) {
	    row["Blizzard"] = 1;
	    row["Connections"] = "";
	  } else {
	    row["Blizzard"] = 0;
	    if (row["Connections"]) {
	      let values = row["Connections"].split(",");
	      values = values.filter((value) => !blizzardArray.includes(value));
	      row["Connections"] = values.join(",");
	    }
	  }
	});

    // Calculate new columns
    tableData.forEach((row) => {
	  // zombie color
	  if (zombieNodes.includes(row.Territory)) {
	    row.Ownership = 'Zombie';
	    row["Ownership Color"] = "#33FF33";
	    row["Ownership Border Color"] = "#20A220";
	  }
  });

  // Set font size of indirect connections
  var fontSizeInput = document.getElementById("fontSizeInput");
  fontSizeInput.addEventListener("input", function () {
    if (this.value > 100) {
      this.value = 100;
    } else if (this.value < 1) {
      this.value = 1;
    }
  });
  fontSizeInput.addEventListener("input", function() {
    debouncedGenerateMap();
  });

  // Color in the map and add indirect connections
  paths.forEach(function (path) {
    var pathId = path.getAttribute("id");
    for (var i = 0; i < tableData.length; i++) {
      if (tableData[i]["Territory"] === pathId) {
        // Color in the map
        if (tableData[i]["Blizzard"] === 0) {
	  var {color, border_color, textContent} = getColorAndTextContent(tableData, i);
          path.style.setProperty("fill", color, "important");
          path.setAttribute("stroke-opacity", "100");
          path.style.setProperty("stroke", border_color, "important");
          path.style.setProperty("stroke-width", "2", "important");
        } else if (tableData[i]["Blizzard"] === 1) {
          executeBlizzards(path, svgElement, BlizzardPattern, tableData);
	}

        // Add text to the specified location from tableData
        if (tableData[i]["Blizzard"] === 0) {
          // Find matching row in CSV data
          var coordinates = tableData.find(function (row) {
            return row["Territory"] === pathId;
          });

          // Get coordinates from CSV data
          var x = coordinates["Pixel Pair 1"];
          var y = coordinates["Pixel Pair 2"];

          var text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
          );
          text.setAttribute("x", x);
          text.setAttribute("y", y);
	  text.setAttribute("pointer-events", "none");
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("alignment-baseline", "middle");
          text.setAttribute("font-size", fontSizeInput.value);
          text.setAttribute("font-weight", "bold");
	  text.setAttribute("fill", "black");
	  text.textContent = textContent;
		
          // Adjust x and y coordinates to position midpoint of text at specified coordinates
          var bbox = text.getBBox();
          text.setAttribute("x", x - bbox.width / 2);
          text.setAttribute("y", y - bbox.height / 2);

          svgElement.appendChild(text);
        }
        break;
      }
    }
  });
	// Get the base image element & define base URL
	var baseImage = document.getElementById("map");
	var baseURL = "https://raw.githubusercontent.com/Ares-theFox/Risk-Dynamic-Zombie-Pathing/main/";
	baseImage.src = baseURL + colorLegend + ".png";

// NEW CANVAS ELEMENT
function drawArrow(ctx, startX, startY, endX, endY, color) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.stroke();

    var headlen = 10; // length of head in pixels
    var dx = endX - startX;
    var dy = endY - startY;
    var angle = Math.atan2(dy, dx);

    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX - headlen * Math.cos(angle - Math.PI / 6), endY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(endX - headlen * Math.cos(angle + Math.PI / 6), endY - headlen * Math.sin(angle + Math.PI / 6));
  
    ctx.closePath();
  
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  
    ctx.stroke();
    ctx.fill();
}
	
// Remove all existing canvas elements
var existingCanvases = document.getElementsByTagName('canvas');
while(existingCanvases[0]) {
    existingCanvases[0].parentNode.removeChild(existingCanvases[0]);
}

// Create a new canvas element
var canvas = document.createElement('canvas');
canvas.id = 'myCanvas';
canvas.style.position = 'absolute';
canvas.style.zIndex = 1000; // Ensure the canvas is on top
canvas.style.pointerEvents = 'none'; // Add this line to make the canvas clickable
document.body.appendChild(canvas);

baseImage.onload = function() {
  // Set the canvas dimensions to match the image
  canvas.width = baseImage.width;
  canvas.height = baseImage.height;

  // Get a context to draw on
  var ctx = canvas.getContext('2d');

  // Set the line width
  ctx.lineWidth = 2; // Add this line to set the line width

  // Calculate the start and end points for the red arrow
  var startX1 = 865 - (865 - 648) * 0.1;
  var startY1 = 601 - (601 - 87) * 0.1;
  var endX1 = 648 + (865 - 648) * 0.1;
  var endY1 = 87 + (601 - 87) * 0.1;

  // Draw a red arrow
  drawArrow(ctx, startX1, startY1, endX1, endY1, 'red');

   // Calculate the start and end points for the blue arrow with a slight perpendicular offset
   var startX2 = startX1 * 0.05;
   var startY2 = startY1 * 0.05;
   var endX2 = endX1 * 0.05;
   var endY2 = endY1 * 0.05;

   // Draw a blue arrow
   drawArrow(ctx, startX2, startY2, endX2, endY2, 'blue');
};


	
	
	
	
// Create a mapping of node names to indices
let nodeToIndex = {};
let index = 0;
tableData.forEach(row => {
  if (row['Territory'] && !nodeToIndex.hasOwnProperty(row['Territory'])) {
    nodeToIndex[row['Territory']] = index++;
  }
  let neighbors = row['Connections'] ? row['Connections'].split(',') : [];
  neighbors.forEach(neighbor => {
    if (!nodeToIndex.hasOwnProperty(neighbor)) {
      nodeToIndex[neighbor] = index++;
    }
  });
});

// Create a distance matrix with dimensions equal to the number of nodes
let dist = new Array(index);
for (let i = 0; i < index; i++) {
  dist[i] = new Array(index);
  for (let j = 0; j < index; j++) {
    if (i === j) {
      dist[i][j] = 0;
    } else {
      dist[i][j] = Infinity;
    }
  }
}

// Populate the distance matrix with the distances between directly connected nodes
tableData.forEach(row => {
  let x = nodeToIndex[row['Territory']];
  let neighbors = row['Connections'] ? row['Connections'].split(',') : [];
  neighbors.forEach(neighbor => {
    let y = nodeToIndex[neighbor];
    dist[x][y] = 1;
    dist[y][x] = 1;
  });
});

// Run the Floyd-Warshall algorithm
for (let k = 0; k < index; k++) {
  for (let i = 0; i < index; i++) {
    for (let j = 0; j < index; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

// Check if there are any pairs of nodes that are not connected
let allNodesConnected = true;
for (let i = 0; i < index; i++) {
  for (let j = i + 1; j < index; j++) {
    // Get the node names corresponding to indices i and j
    let node1 = Object.keys(nodeToIndex).find(key => nodeToIndex[key] === i);
    let node2 = Object.keys(nodeToIndex).find(key => nodeToIndex[key] === j);
    // Check if either node is in the blizzardArray
    if (!blizzardArray.includes(node1) && !blizzardArray.includes(node2)) {
      // Check if the distance between the nodes is Infinity
      if (dist[i][j] === Infinity) {
        allNodesConnected = false;
        break;
      }
    }
  }
}

// Create a mapping of node names to indices for tableDataClone
let nodeToIndexClone = {};
let indexClone = 0;
tableDataClone.forEach(row => {
  if (row['Territory'] && !nodeToIndexClone.hasOwnProperty(row['Territory'])) {
    nodeToIndexClone[row['Territory']] = indexClone++;
  }
  let neighbors = row['Connections'] ? row['Connections'].split(',') : [];
  neighbors.forEach(neighbor => {
    if (!nodeToIndexClone.hasOwnProperty(neighbor)) {
      nodeToIndexClone[neighbor] = indexClone++;
    }
  });
});

// Create a distance matrix with dimensions equal to the number of nodes for tableDataClone
let distClone = new Array(indexClone);
for (let i = 0; i < indexClone; i++) {
  distClone[i] = new Array(indexClone);
  for (let j = 0; j < indexClone; j++) {
    if (i === j) {
      distClone[i][j] = 0;
    } else {
      distClone[i][j] = Infinity;
    }
  }
}

// Populate the distance matrix with the distances between directly connected nodes for tableDataCloneCopy
tableDataClone.forEach(row => {
  let x = nodeToIndexClone[row['Territory']];
  let neighbors = row['Connections'] ? row['Connections'].split(',') : [];
  neighbors.forEach(neighbor => {
    let y = nodeToIndexClone[neighbor];
    distClone[x][y] = 1;
    distClone[y][x] = 1;
  });
});

// Run the Floyd-Warshall algorithm for tableDataCloneCopy
for (let k = 0; k < indexClone; k++) {
  for (let i = 0; i < indexClone; i++) {
    for (let j = 0; j < indexClone; j++) {
      if (distClone[i][k] + distClone[k][j] < distClone[i][j]) {
        distClone[i][j] = distClone[i][k] + distClone[k][j];
      }
    }
  }
}

  // Check for too-small continents
  let continentCounts = {};
  tableData.forEach(row => {
    if (row['Territory'] && row['Continent']) {
      if (!continentCounts.hasOwnProperty(row['Continent'])) {
        continentCounts[row['Continent']] = 0;
      }
      continentCounts[row['Continent']]++;
    }
  });
  let blizzardContinentCounts = {};
  blizzardArray.forEach(path => {
    let row = tableData.find(row => row['Territory'] === path);
    if (row && row['Continent']) {
      if (!blizzardContinentCounts.hasOwnProperty(row['Continent'])) {
        blizzardContinentCounts[row['Continent']] = 0;
      }
      blizzardContinentCounts[row['Continent']]++;
    }
  });
  let continentTooSmall = false;
  for (let continent in continentCounts) {
    if (blizzardContinentCounts.hasOwnProperty(continent) && blizzardContinentCounts[continent] >= continentCounts[continent] - 1) {
      continentTooSmall = true;
      break;
    }
  }
	
  // Update invalid text
  var invalidText = document.getElementById("invalidText");
  if (!allNodesConnected && continentTooSmall) {
    invalidText.textContent = "Invalid Generation: Map disconnected; Continent too small";
  } else if (!allNodesConnected) {
    invalidText.textContent = "Invalid Generation: Map is disconnected";
  } else if (continentTooSmall) {
    invalidText.textContent = "Invalid Generation: Continent too small";
  } else {
    invalidText.textContent = "";
  }
}
	
function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}

const debouncedGenerateMap = debounce(generateMap, 500);
