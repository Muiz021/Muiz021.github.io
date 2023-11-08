// swiper
var swiper = new Swiper(".portofolio-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
// end swiper

// scroll navbar
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var scrollLinks = document.querySelectorAll(".scroll-link"); // Menggunakan querySelectorAll untuk mendapatkan semua elemen dengan kelas "scroll-link"
    if (window.scrollY > 50) {
      navbar.classList.add("bg-orange"); // Menambahkan warna oranye saat digulir
      navbar.classList.remove("bg-md-white"); // Menghapus warna putih saat scroll
      scrollLinks.forEach(function (element) {
        element.classList.add("text-white"); // Menambahkan warna putih saat digulir
      });
    } else {
      navbar.classList.remove("bg-orange"); // Menghapus warna oranye saat tidak digulir
      navbar.classList.add("bg-md-white"); // Menambahkan warna putih saat fixed top navbar

      scrollLinks.forEach(function (element) {
        element.classList.remove("text-white"); // Menghapus warna putih saat tidak digulir
      });
    }
  });
// end scroll navbar

// wa api
function redirectToWhatsApp() {
    var phoneNumber = '6281343671284'; // Ganti dengan nomor WhatsApp yang Anda inginkan
    var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber;

    // Redirect ke WhatsApp dalam tab baru
    window.open(url, '_blank');
}
// end wa api