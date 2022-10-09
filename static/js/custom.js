$(document).on("click", ".importer4AjaxData .importer4Ajax", function() {
    var url = $(this).attr('href');
    var id = $(this).data('id');
    $("div").remove("#importer4AjaxData-" + id);
    $.ajax({
        type: "POST",
        url: url,
        success: function(data) {
            $(".tx-wss-importer4-" + id + " .listitem:last").after(data).show().fadeIn("slow");
        },
    });
    return false;
});