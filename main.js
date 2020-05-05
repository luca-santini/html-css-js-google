$(document).ready(function() {

    // intercetto il click sulla a
    $('#menu-cliccabile').click(function() {
        // recupero il tag ul con classe dropdown successivo
        var sottomenu = $(this).next('.dropdown');
        // funzione jquery per mostrare il menu al posto dell'if
        sottomenu.toggle();
    // if(sottomenu.is(':visible')) {
    //     // se sì => ho cliccato la stessa voce per chiuderlo
    //     sottomenu.hide();
    // } else {
    //     // visualizzo il menu dropdown
    //     sottomenu.show();
    // }
});

});
