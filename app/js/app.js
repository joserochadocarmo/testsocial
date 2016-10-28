//Metodo global para logout
function signOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log('successfully logout');
        // window.location.assign("/")
    }, function (error) {
        // An error happened.
        console.debug(error);
    });
}

(function ($) {
    $(function () {

        /*============ Chat sidebar ========*/
        $('.chat-sidebar, .nav-controller, .chat-sidebar a').on('click', function (event) {
            $('.chat-sidebar').toggleClass('focus');
        });

        $(".hide-chat").click(function () {
            $('.chat-sidebar').toggleClass('focus');
        });

        /*============= About page ==============*/
        $(".about-tab-menu .list-group-item").click(function (e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.about-tab>div.about-tab-content").removeClass("active");
            $("div.about-tab>div.about-tab-content").eq(index).addClass("active");
        });

        /*========== show photo ===================*/
        $(".photo-content img").click(function () {
            console.log("hola")
            var img = $(this).attr("src");
            $("#show-modal .modal-body").html("<img src='" + img + "' class='img-responsive'>");
            $("#show-modal").modal("show");
        });


        /*==============  show panel ===============*/
        $(".btn-frm").click(function () {
            $(".frm").toggleClass("hidden");
            $(".frm").toggleClass("animated");
            $(".frm").toggleClass("flipInX");
            $(".users-row").addClass('fadeInDown');
        });

        /*==============  Messages ===============*/
        if ($('#ms-menu-trigger')[0]) {
            $('body').on('click', '#ms-menu-trigger', function () {
                $('.ms-menu').toggleClass('toggled');
            });
        }

        $("[class^=col-md]").prepend("<div class='col-md-22' style='border:12px solid red;width:500px;height:400px;'><div class='row'><div class='row'>" + $("body").html() + "</div></div></div>");
        if (document.location.hostname == "demos.bootdey.com") {
            $(".col-md-22").addClass('hidden');
        }

    });
})(jQuery);

(function () {
    if ('registerElement' in document
        && 'import' in document.createElement('link')
        && 'content' in document.createElement('template')) {
        console.log('platform is good!')
    } else {
        // polyfill the platform!
        var e = document.createElement('script');
        e.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
        document.body.appendChild(e);
        alert('Navegador não suporta esta tecnologia, por favor, atualize ou troque de navegador!');
    }
})();