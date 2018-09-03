import sqlite3

bywhat = input("Kodla arama için 1, İsimle Arama için 2 yazıp enter'a basın.: ")
searchprompt = input("Aramak istediğiniz veri: ")

file_ = sqlite3.connect("data.sqlite")
crs = file_.cursor()

if str(bywhat) == "1":
    place = "Program"

else:
    place = "Program Adı"

k = crs.execute("SELECT * FROM \"osymmaxmintablo4\" WHERE \"{}\" LIKE \"%{}%\";".format(place, searchprompt))
data_ = crs.fetchall()
file_.close()

try:
    for i in range(len(data_)):
        print("""
    Program Kodu: {}
    Program Adı: {}
    Puan Türü: {}
    Genel Kontejan: {}
    Yerleşen: {}
    En Küçük Puan: {}
    En Büyük Puan: {}
    OB Kontejanı: {}
    OB Yerleşen: {}
    OBK En Küçük Puan: {}
    OBK En Büyük Puan: {}
        """.format(*data_[i]))
        input("{}/{}, devam etmek için enter'a basın. Çıkmak için CTRL+C'ye".format(
            (i + 1), len(data_)))
except KeyboardInterrupt:
    exit()
