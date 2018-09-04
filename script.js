var SQL= window.SQL;
var form = document.getElementById("theform");
var selection = form.selection;
var entry_ = form.entry_
var button = form.button_;
var printOut = document.getElementById("ocelot");
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
      printOut.innerHTML = <p>"Aramanızın İlk Beş Sonucu:"<\p> <p>contents[0].values[0];<\p> <p>contents[0].values[1];<\p> <p>contents[0].values[2];<\p> <p>contents[0].values[3];<\p> <p>contents[0].values[4];<\p>
      something = contents;
    };
xhr.send();
}
