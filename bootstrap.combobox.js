$(function () {
    $.fn.combobox = function (options) {
        var $ul = $('<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu"></ul>');
        for (var i in options.data) {
            $ul.append('<li class="comboboxItem"><a tabindex="-1" href="javascript:">' + options.data[i] + '</a></li>');
        }
        var $dropmenu = $('<div class="dropdown"></div>');
        var $div = $('<div class="input-append" data-toggle="dropdown"></div>');
        var $caret = $('<span class="add-on" style="cursor:pointer"><i class="caret" style="cursor:pointer"></i></span>');

        this.each(function () {
            var self = this;
            $(this).wrap($div).after($caret.clone(true));
            $(this).closest(".input-append").wrap($dropmenu).after($ul.clone(true));
            $(this).closest(".dropdown").find("li a").on("click", function () {
                self.value = $(this).text();
            })
        });
        return this;
    }
});