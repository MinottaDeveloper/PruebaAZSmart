// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    $("#btn_autor").click((event) => {
        event.preventDefault();


        if ($("#autor_name").val() != "" && $("#autor_date").val() != "" && $("#autor_city").val() != "") {

            data = {
                name: $("#autor_name").val(),
                date: $("#autor_date").val(),
                city: $("#autor_city").val()
            }



            console.log(data);

        } else {
            alert("Por favor completo todos los campos obligatorios*");
        }
    });

    $("#btn_book").click((event) => {
        event.preventDefault();


        if ($("#book_title").val() != "" && $("#book_date").val() != "" && $("#book_theme").val() != "" && $("#book_num_pages").val() != "" && $("#book_autor").val() != "") {

            data = {
                title: $("#book_title").val(),
                date: $("#book_date").val(),
                theme: $("#book_theme").val(),
                pages: $("#book_num_pages").val(),
                autor: $("#book_autor").val()

            }



            console.log(data);

        } else {
            alert("Por favor completo todos los campos obligatorios*");
        }
    });
});
