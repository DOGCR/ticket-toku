(function ($) {

    "use strict"; // Start of use strict


    var wovn_sts = false;

    $(document).ready(function () {

        $('.footer_copy_wrapper').find('.text-xxs-regular').html('© Copyright Mori Building Co., Ltd. 2024 All Rights Reserved.');

        $('.footer_menu_list_item.display-none.w-inline-block').find('.text-xxs-regular').addClass('text-small-regular-15');
        $('.footer_menu_list_item.display-none.w-inline-block').find('.text-xxs-regular').removeClass('text-xxs-regular');
        $('.footer_menu_list_item.display-none.w-inline-block').attr('href', '/about/partners/index.html');
        $('.footer_menu_list_item.display-none.w-inline-block').removeClass('display-none');

        $.each($('a.footer_company_item'), function (i, val) {

            var url = $(this).attr('href');
            if (url == "https://project.azabudai-hills.com/") {
                $(this).attr('href', 'https://www.azabudai-hills.com/');
            }

        });

        $.each($('a.footer_menu_list_item'), function (i, val) {

            var url = $(this).attr('href');
            if (url == "../index.html") {
                $(this).attr('href', '/about/index.html');
            }

        });





        $(document).on('click', 'a.wovn-switch', function (e) {
            e.preventDefault();

            //Remove Language Menu Selected
            $('#wovn-languages a.wovn-switch').removeClass('selected');
            $('.wovn-languages a.wovn-switch').removeClass('selected');

            //全文検索 Remove SearchBox Active
            $('.mf_finder_searchBox_form').removeClass('mf-search-box_active');

            //Get Click Language
            var val = $(this).attr('data-stt-changelang');
            if (val == "") {
                return false;
            }

            //Remove Storage Language
            window.localStorage.removeItem('__azabudai______hills.____language');

            //Set Click Language
            window.localStorage.setItem('__azabudai______hills.____language', val);

            //Language==JA
            if (val == "ja") {

                //Set Current Language
                $(".current_language").html("JP");

                //Set Language Menu Selected
                $('#wovn-languages a.wovn-switch:eq(0)').addClass('selected');
                $('.wovn-languages a.wovn-switch:eq(0)').addClass('selected');
                $('.wovn-languages a.wovn-switch').removeClass('azabudai_selected');
                $('.wovn-languages a.wovn-switch:eq(3)').addClass('azabudai_selected');
                //全文検索 Set SearchBox Active
                $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');

                //Change Wovn Language
                //WOVN.io.changeLang('ja');

            }

            //Language==EN
            if (val == "en") {

                //Set Current Language
                $(".current_language").html("EN");

                //Set Language Menu Selected
                $('#wovn-languages a.wovn-switch:eq(1)').addClass('selected');
                $('.wovn-languages a.wovn-switch:eq(1)').addClass('selected');
                $('.wovn-languages a.wovn-switch').removeClass('azabudai_selected');
                $('.wovn-languages a.wovn-switch:eq(1)').addClass('azabudai_selected');
                if (!wovn_sts) {
                    //全文検索 Set SearchBox Active
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');
                } else {
                    //全文検索 Set SearchBox Active
                    $('.mf_finder_searchBox_form:eq(1)').addClass('mf-search-box_active');
                }

                //Change Wovn Language
                //WOVN.io.changeLang('en');

            }

            //Language==ZH-CHS
            if (val == "zh-CN") {

                //Set Current Language
                $(".current_language").html("简体");

                //Set Language Menu Selected
                $('#wovn-languages a.wovn-switch:eq(2)').addClass('selected');
                $('.wovn-languages a.wovn-switch:eq(2)').addClass('selected');
                $('.wovn-languages a.wovn-switch').removeClass('azabudai_selected');
                $('.wovn-languages a.wovn-switch:eq(2)').addClass('azabudai_selected');
                if (!wovn_sts) {
                    //全文検索 Set SearchBox Active
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');
                } else {
                    //全文検索 Set SearchBox Active
                    $('.mf_finder_searchBox_form:eq(2)').addClass('mf-search-box_active');
                }

                //Change Wovn Language
                //WOVN.io.changeLang('zh-CHS');

            }

            //Language==ZH-CHT
            if (val == "zh-TW") {

                //Set Current Language
                $(".current_language").html("繁體");

                //Set Language Menu Selected
                $('#wovn-languages a.wovn-switch:eq(3)').addClass('selected');
                $('.wovn-languages a.wovn-switch:eq(3)').addClass('selected');
                $('.wovn-languages a.wovn-switch').removeClass('azabudai_selected');
                $('.wovn-languages a.wovn-switch:eq(3)').addClass('azabudai_selected');
                if (!wovn_sts) {
                    //全文検索 Set SearchBox Active
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');
                } else {
                    //全文検索 Set SearchBox Active
                    $('.mf_finder_searchBox_form:eq(3)').addClass('mf-search-box_active');
                }

                //Change Wovn Language
                //WOVN.io.changeLang('zh-CHT');

            }

            //Language==KO
            if (val == "ko") {

                //Set Current Language
                $(".current_language").html("한국어");

                //Set Language Menu Selected
                $('#wovn-languages a.wovn-switch:eq(4)').addClass('selected');
                $('.wovn-languages a.wovn-switch:eq(4)').addClass('selected');
                $('.wovn-languages a.wovn-switch').removeClass('azabudai_selected');
                $('.wovn-languages a.wovn-switch:eq(4)').addClass('azabudai_selected');

                if (!wovn_sts) {
                    //全文検索 Set SearchBox Active
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');
                } else {
                    //全文検索 Set SearchBox Active
                    $('.mf_finder_searchBox_form:eq(4)').addClass('mf-search-box_active');
                }

                //Change Wovn Language
                //WOVN.io.changeLang('ko');

            }

            $('.nav_main.w-nav-menu').trigger('click');

            //return false;
        });


        $('#wovn_ja').attr('data-value', '');
        $('#wovn_en').attr('data-value', '');
        $('#wovn_zh_chs').attr('data-value', '');
        $('#wovn_zh_cht').attr('data-value', '');
        $('#wovn_ko').attr('data-value', '');
        $('#wovn_ja_sp').attr('data-value', '');
        $('#wovn_en_sp').attr('data-value', '');
        $('#wovn_zh_chs_sp').attr('data-value', '');
        $('#wovn_zh_cht_sp').attr('data-value', '');
        $('#wovn_ko_sp').attr('data-value', '');

    });

    /*
    $(window).on('load', function () {

        // 現在のURLを取得
        var currentUrl = window.location.href;
        // URLからドメイン部分を取り除く
        var urlWithoutDomain = window.location.pathname;
        // パスの最後に「index.html」を追加
        if (!urlWithoutDomain.includes('index.html')) {
            var newUrl = urlWithoutDomain + (urlWithoutDomain.endsWith('/') ? '' : '/') + 'index.html';
        } else {
            var newUrl = urlWithoutDomain;
        }

        $('a.azabudai_nav_main_menu_link.w-inline-block.w--current').each(function () {
            var _url = $(this).attr('href');
            if (_url != newUrl) {
                $(this).removeClass('w--current');
            }
        });

        $('a.azabudai_nav_main_menu_link.w-inline-block.w--current').css('color', '#00875f');


    });
    */
    window.addEventListener('load', function () {
        if (!wovn_sts) {
            //get Storage            
            var woven_languages = window.localStorage.getItem('__azabudai______hills.____language');
            if (woven_languages) {

                //sp
                $('.wovn-languages-mobile .switch-languages>a').removeClass('selected');

                //PC
                $('#wovn-languages a.wovn-switch').removeClass('selected');

                //全文検索
                $('.mf_finder_searchBox_form').removeClass('mf-search-box_active');

                if (woven_languages == "ja") {
                    $(".current_language").html("JP");
                    $('#wovn-languages a.wovn-switch:eq(0)').addClass('selected');
                    $('.wovn-languages-mobile .switch-languages>a:eq(0)').addClass('selected');

                    //全文検索
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');

                    //WOVN.io.changeLang('ja');
                }
                if (woven_languages == "en") {
                    $(".current_language").html("EN");
                    $('#wovn-languages a.wovn-switch:eq(1)').addClass('selected');
                    $('.wovn-languages-mobile .switch-languages>a:eq(1)').addClass('selected');

                    //全文検索
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');

                    //WOVN.io.changeLang('en');
                }
                if (woven_languages == "zh-CN") {
                    $(".current_language").html("简体");
                    $('#wovn-languages a.wovn-switch:eq(2)').addClass('selected');
                    $('.wovn-languages-mobile .switch-languages>a:eq(2)').addClass('selected');

                    //全文検索
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');

                    //WOVN.io.changeLang('zh-CHS');
                }
                if (woven_languages == "zh-TW") {
                    $(".current_language").html("繁體");
                    $('#wovn-languages a.wovn-switch:eq(3)').addClass('selected');
                    $('.wovn-languages-mobile .switch-languages>a:eq(3)').addClass('selected');

                    //全文検索
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');

                    //WOVN.io.changeLang('zh-CHT');
                }
                if (woven_languages == "ko") {
                    $(".current_language").html("한국어");
                    $('#wovn-languages a.wovn-switch:eq(4)').addClass('selected');
                    $('.wovn-languages-mobile .switch-languages>a:eq(4)').addClass('selected');

                    //全文検索
                    $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');

                    //WOVN.io.changeLang('ko');
                }
            } else {
                //Remove Storage
                window.localStorage.removeItem('__azabudai______hills.____language');
                woven_languages = "ja";
                window.localStorage.setItem('__azabudai______hills.____language', woven_languages);

                //SP
                $('.wovn-languages-mobile .switch-languages>a').removeClass('selected');
                //PC
                $('#wovn-languages a.wovn-switch').removeClass('selected');

                //全文検索
                $('.mf_finder_searchBox_form').removeClass('mf-search-box_active');

                $(".current_language").html("JP");
                $('#wovn-languages a.wovn-switch:eq(0)').addClass('selected');
                $('.wovn-languages-mobile .switch-languages>a.wovn-switch:eq(0)').addClass('selected');

                //全文検索
                $('.mf_finder_searchBox_form:eq(0)').addClass('mf-search-box_active');

                //WOVN.io.changeLang('ja');
            }

            $('#wovn-languages').css('display', '');
            $('#woven-box .nav_mb_menu_list_dd_wrapper.wovn-languages').css('display', '');

        }
    });
})(jQuery); // End of use strict