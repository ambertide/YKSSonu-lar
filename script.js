var SQL= window.SQL;
var form = document.getElementById("theform");
var selection = form.selection;
var entry_ = form.entry_
var button = form.button_;
var printOut = document.getElementById("rustspottedcat");
var somethin = {};
console.log("hello darkness my old frieeeendd")
button.addEventListener("click", search_);

function search_(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.sqlite', true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function(e) {
      var uInt8Array = new Uint8Array(this.response);
      var db = new SQL.Database(uInt8Array);
      var contents = db.exec("SELECT * FROM osymmaxmintablo4 WHERE `Program Adı` LIKE \"%" + entry_.value + "%\"");
      for (i in contents[0].values) {
        var row = printOut.insertRow(0);
        for (j in contents[0].values[i]) {
          var cell = row.insertCell(j)
          cell.innerHTML = contents[0].values[i][j];
        }
      }
      something = contents;
    };
xhr.send();
}
