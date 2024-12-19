// Ini Javascript
// untuk cek sudah terkoneksi atau belum -> console.log("Hello World!");
console.log("Javascript berhasil tersambung");

showBanner();

//Fungsi untuk memvalidasi dari Javascript
function validateForm() {
    console.log("Validate form executed");
    const usernameInput = document.getElementById("username-input").value;
    console.log(usernameInput);

//Fungsi untuk validasi nama user jika tidak kosong    
    if (usernameInput == "") {
        alert("Inputan tidak boleh kosong");
    } else {
        document.getElementById("username-result").innerHTML = usernameInput;
    }

    console.log("validateForm executed");
    }

function showBanner() {
    const imageList = document.getElementsByClassName("banner-img")
    console.log (imageList);

    //Hide semua banner
        for (let i = 0; i < imageList.length; i++) {
        imageList.style.display = "none";
        }

    //Show 1 banner sesuai posisi yang diinginkan
    imageList(i).style.display = "block";
}
//document.getElementById("submit-btn").addEventListener;