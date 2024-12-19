// Ini Javascript
console.log('Javascript berhasil tersambung');

let indexSlide = 0;

nextSlide();

// Fungsi untuk memvalidasi
function validateForm() {
    const usernameInput = document.getElementById('username-input').value;
    console.log(usernameInput);

    // Validasi jika nama user tidak kosong
    if (usernameInput == '') {
        alert('Inputan tidak boleh kosong');
    } else {
        document.getElementById('username-result').innerHTML = usernameInput;
    }

    console.log('validateForm executed');
}

function nextSlide() {
    showBanner(indexSlide += 1);
}

function showBanner(n) {
    const imageList = document.getElementsByClassName('banner-img');

    console.log(imageList);
    console.log(imageList.length);
    console.log(n);
    if (n > imageList.length - 1) indexSlide = 0;


    // Hide semua banner
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    // Show 1 Banner sesuai Posisi yang diinginkan
    imageList[indexSlide].style.display = "block";
}

// Automate banned slide
setInterval(nextSlide, 3000);


media only screen and (max-width: 480pcx) {
    .main-header {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
}
    .main-container {
        display: flex;
        gap: 24px;
        flex-direction: column;
    form{
        padding-top: 32px;
        padding-bottom: 32px;
    }
}