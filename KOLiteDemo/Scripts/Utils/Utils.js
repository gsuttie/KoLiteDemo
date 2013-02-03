
PostJSON = function (url, data, callback, complete) {
    return $.ajax({
        type: "POST",
        url: url,
        data: ko.toJSON(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: callback,
        complete: function (result) {
            var msg;
            msg = $.parseJSON(result.responseText);
            if (!(msg instanceof Array)) {
                if (result.responseText.indexOf("Message") !== -1) {
                }
            }
        }
    });
};