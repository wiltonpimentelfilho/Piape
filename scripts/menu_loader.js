// CONFIGURACOES
let max_level       = $(".menu-item").length;
let current_level   = 1;
let page_name       = "topicos/pagina";
let load_page_function = function(){
    let next_page = page_name + current_level + ".html";
    $("#conteudo").empty();
    $("#conteudo").load(next_page,function(){
        refresh_objects();
    }); 
    $("#backward_arrow").show();
    $("#forward_arrow").show();
    if(current_level == 1){
        $("#backward_arrow").hide();
    }
    if(current_level == max_level){
        $("#forward_arrow").hide();
    }
    $('#sidebar').removeClass('active');
};
let open_menu = function(){
    $('#sidebar').addClass('active'); 
    $('#outside-invisible-area').addClass('active'); 
};
let close_menu = function(){
    $('#sidebar').removeClass('active');
    $('#outside-invisible-area').removeClass('active'); 
}




$( document ).ready(function() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
    $("#backward_arrow").hide();
    /*$("#conteudo").load("topicos/pagina1.html");*/
    $("#conteudo").load(); 

    
    $("#backward_arrow").on("click", function(){
        current_level = current_level>1?current_level-1:1;
        load_page_function();
    });

    $("#forward_arrow").on("click", function(){
        current_level = current_level<max_level?current_level+1:max_level;
        load_page_function();
    });

    $(".menu-item").each(function(index,element){
        $(element).on("click", function(){
            current_level = index+1;
            load_page_function();
        })
    });

    $('#botao-menu').on('click', function () {
        open_menu();
    });

    $('#dismiss').on('click', function () {
        close_menu();
    });
    
    $("#outside-invisible-area").on('click', function () {
        close_menu();
    });
});


