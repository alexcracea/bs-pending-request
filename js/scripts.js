function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
};

readTextFile("js/some-json.json", function(text){
  var data = JSON.parse(text);
  for (var i = 0; i< data.length; i++) {
    document.write(data[i].id);
    document.write('\t');
    document.write(data[i].number);
    document.write('<br>');
  }
});