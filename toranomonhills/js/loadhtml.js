(function ($) {
    "use strict"; // Start of use strict
    function loadJS(_url) {
        const add_script = document.createElement('script');
        add_script.src = _url;
        document.body.appendChild(add_script);
    }
    $(function () {
        $('.azabudai-hills-gnav').load('include/header_nav.html');
        $('.azabudai-hills-s-modal').load('include/search_modal.html');
        $('.azabudai-hills-footer').load('include/footer.html');

        setTimeout(function () {

            loadJS('https://azabudai-hills.com/js/azabudaihills.js');
            loadJS('js/lang.js');
            loadJS('https://azabudai-hills.com/assets/json/azabudai_hills_shops.json.js');
            loadJS('https://azabudai-hills.com/assets/json/azabudai_hills_category.json.js');
            loadJS('https://azabudai-hills.com/assets/js/shops_search.js');
            loadJS('https://azabudai-hills.com/js/common.js');
        }, 500);
    });
})(jQuery); // End of use strict