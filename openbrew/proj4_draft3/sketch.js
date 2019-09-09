var blob;
var url = "https://api.openbrewerydb.org/breweries?by_state&page=1'&per_page=40";

function preload() {
  loadJSON(url, 'json', dloaded, dfail);
  img1 = loadImage('assets/beer4.png');
  img2 = loadImage('assets/beer6.png');
  img3 = loadImage('assets/beershare.png');
  img4 = loadImage('assets/beersign.png');
  img5 = loadImage('assets/threekegs.png');
  img6 = loadImage('assets/hops.png');
}

function dloaded(thedata) {
  blob = thedata;
  console.log(blob);
}

function dfail(thedata) {
  console.log("ERROR with Data-");
  console.log(thedata);
}

function setup() {
  createCanvas(1040, 1060);
  background(50);

  push();
    translate(40, 100);
    objEllipseGraph(blob);
  pop();
}

function objEllipseGraph(beer) {

  var colCounter = 0;
  var rowCounter = 0;
  var yoffset = 250;

  for (var i = 0; i < beer.length; i++) {
    console.log(beer[i]);
    var temp = beer[i].brewery_type;
    console.log("switch ------------------" + temp);

    switch(temp) {
      case "micro":
        fill(255, 0, 255);
        text(beer[i].name, (colCounter*100), (rowCounter * yoffset) + 10, 50);
        text(beer[i].city, (colCounter*100), (rowCounter * yoffset) + 140);
        text("micro-brewery", (colCounter*100), (rowCounter * yoffset) + 160, 50);
        image(img1, (colCounter*100), (rowCounter * yoffset) - 60, img1.width / 9, img1.height / 9);
      break;

      case "regional":
        fill(255, 255, 0);
        text(beer[i].name, (colCounter*100), (rowCounter * yoffset) + 10, 50);
        text(beer[i].city, (colCounter*100), (rowCounter * yoffset) + 140);
        text("regional-brewery", (colCounter*100), (rowCounter * yoffset) + 160, 50);
        image(img2, (colCounter*100), (rowCounter * yoffset) - 60, img2.width / 9, img2.height / 9);
      break;

      case "brewpub":
        fill(0, 255, 255);
        text(beer[i].name, (colCounter*100), (rowCounter * yoffset) + 10, 50);
        text(beer[i].city, (colCounter*100), (rowCounter * yoffset) + 140);
        text("brewpub", (colCounter*100), (rowCounter * yoffset) + 160, 50);
        image(img3, (colCounter*100), (rowCounter * yoffset) - 60, img3.width / 9, img3.height / 9);
      break;

      case "proprietor":
        fill(255, 0, 0);
        text(beer[i].name, (colCounter*100), (rowCounter * yoffset) + 10, 50);
        text(beer[i].city, (colCounter*100), (rowCounter * yoffset) + 140);
        text("proprietor", (colCounter*100), (rowCounter * yoffset) + 160, 50);
        image(img4, (colCounter*100), (rowCounter * yoffset) - 60, img4.width / 9, img4.height / 9);
      break;

      case "contract":
        fill(0, 0, 255);
        text(beer[i].name, (colCounter*100), (rowCounter * yoffset) + 10, 50);
        text(beer[i].city, (colCounter*100), (rowCounter * yoffset) + 140);
        text("contract", (colCounter*100), (rowCounter * yoffset) + 160, 50);
        image(img5, (colCounter*100), (rowCounter * yoffset) - 60, img5.width / 9, img5.height / 9);
      break;

      default:
        fill(0, 255, 0);
        text(beer[i].name, (colCounter*100), (rowCounter * yoffset) + 10, 50);
        text(beer[i].city, (colCounter*100), (rowCounter * yoffset) + 140);
        text("planning", (colCounter*100), (rowCounter * yoffset) + 160, 50);
        image(img6, (colCounter*100), (rowCounter * yoffset) - 60, img6.width / 9, img6.height / 9);
    }

    if (colCounter > 8) {
      colCounter = 0;
      rowCounter++;
    } else {
      colCounter++;
    }
  }
}
