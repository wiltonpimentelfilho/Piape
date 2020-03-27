var initial_setup = function() {
    // Popover
    $('[data-toggle="popover"]').popover();

    // modal
    $("#btnModal1").click(function() { $("#modal-1").modal(); });
    $("#carouselExampleIndicators").carousel();

    // Objects
    refresh_objects_listeners();
    AOS.init();
}

var load_page = function(url) {
    $("#content-viewer").load(url, function() {
        initial_setup();
    });
}

$(document).ready(function() {
    load_page("pages/example_page.html");
});