$(document).on("click", ".importer3AjaxData .importer3Ajax", function() {
    var url = $(this).attr('href');
    var id = $(this).data('id');
    $("div").remove("#importer3AjaxData-" + id);
    $.ajax({
        type: "POST",
        url: url,
        success: function(data) {
            $(".tx-wss-importer3-" + id + " .listitem:last").after(data).show().fadeIn("slow");
        },
    });
    return false;
});