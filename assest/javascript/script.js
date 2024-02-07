
$(document).ready(function () {

    (function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init('NSwmsB3VXO2-z7mQR');
    });
    $("#show").click(function () {
        $("body").css("overflow", "hidden")
        $(".sidebar").css("display", "flex");
    });

    $("#hide").click(function () {
        $("body").css("overflow", "")
        $(".sidebar").css("display", "none")
    })

    $(".menubtn").click(function () {
        $("body").css("overflow", "")
        $(".sidebar").css("display", "none")

    })
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-500px";
        }
        prevScrollpos = currentScrollPos;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".animated")[0].classList.add("fadeInTop");
                document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
                document.querySelectorAll(".animated")[2].classList.add("fadeInTop");
                document.querySelectorAll(".animated")[3].classList.add("fadeInTop");
                document.querySelectorAll(".animated")[4].classList.add("fadeInTop");
                document.querySelectorAll(".animated")[5].classList.add("fadeInTop");
            }
        })
    })
    observer.observe(document.querySelector(".container"));
});