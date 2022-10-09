$(document).on("click", ".importer2AjaxData .importer2Ajax", function() {
    var url = $(this).attr('href');
    var id = $(this).data('id');
    $("div").remove("#importer2AjaxData-" + id);
    $.ajax({
        type: "POST",
        url: url,
        success: function(data) {
            $(".tx-wss-importer2-" + id + " .listitem:last").after(data).show().fadeIn("slow");
        },
    });
    return false;
});