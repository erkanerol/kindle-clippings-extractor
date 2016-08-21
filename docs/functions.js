function extractClippings(){
  var leftPanelValue = getLeftPanel().value;
  var bookName = getBookName().value;

  var rightPanel = getRightPanel();
  var centerPanel = getCenterPanel();
  var result = getClippings(leftPanelValue,bookName);
  rightPanel.value = result.extracted;
  centerPanel.value = result.without;
}

function getClippings(text,bookName){
  bookName = bookName.trim();
  var regexString = bookName+" \\((.|\n)*?=====.*";

  re = new RegExp(regexString,"g");
  var m;
  var extracted = ""
  var without = text;
  do {
      m = re.exec(text);
      if (m) {
          extracted += m[0]+"\n";
          without = without.replace(m[0],"");
      }
  } while (m);

  if(extracted.length == 0){
    extracted = "No match!";
  }

  return {"extracted":extracted,"without":without};
}

function clearRightAndCenter(){
  var rightPanel = getRightPanel();
  var centerPanel = getCenterPanel();

  rightPanel.value = "";
  centerPanel.value = "";
}

function getRightPanel(){
  return document.getElementById("right-panel");
};

function getLeftPanel(){
  return document.getElementById("left-panel");
};

function getCenterPanel(){
  return document.getElementById("center-panel");
};

function getBookName(){
  return document.getElementById("book-name");
};
