$(document).ready(function() {

    // intercetto il click sulla a
    $('#menu-cliccabile').click(function() {
        // recupero il tag ul con classe dropdown successivo
        var sottomenu = $(this).next('.dropdown');
        // funzione jquery per mostrare il menu al posto dell'if
        sottomenu.toggle();
});

});
