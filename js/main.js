!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e){$(".nav_listing .listing_item.clickable_listing_item").click(function(){$(".active_listing_item").removeClass("active_listing_item"),$(this).addClass("active_listing_item")}),function(){var t=$(".dropdown-menu.header-dropdowm-menu"),e=$(".dropdown-menu.header-dropdowm-menu a"),i=$(".main__header .right_part .dropdown button"),o=$(".btn.dropdown-toggle.header-btn:first-child span"),n=$(".dropdown-menu.first-widget-dropdown-menu"),a=$(".dropdown-menu.first-widget-dropdown-menu a"),r=$(".entry_dropdown button"),s=$(".entry_dropdown button span");i.click(function(){t.toggle()}),e.each(function(e){$(this).on("click",function(){o.text($(this).text()),t.toggle()})}),r.click(function(){n.toggle()}),a.each(function(t){$(this).on("click",function(){s.text($(this).text()),n.toggle()})})}(),function(){var t=$(".tabs_item_container .tabs_item"),e=$(".widget"),i=$(".messenger_widget");t.click(function(){$(".active_tab").removeClass("active_tab"),$(this).addClass("active_tab"),$(this).hasClass("messenger_tab")?(e.hide(),i.show(),i.addClass("fadeInUp")):(e.show(),e.addClass("fadeInUp"),i.hide())}),$(function(t){t("[contenteditable]").focusout(function(){var e=t(this);e.text().trim().length||e.empty()})})}(),function(){var t=$(".left_part_item_container .container_item .item_dropdown"),e=$(".left_part_item_container .container_item .item_search");t.hover(function(){$(this).find("img").attr("src","img/ui/dropdown_arrow_white.png")},function(){$(this).find("img").attr("src","img/ui/dropdown_arrow.png")}),t.focus(function(){$(this).find("img").attr("src","img/ui/dropdown_arrow_white.png")},function(){$(this).find("img").attr("src","img/ui/dropdown_arrow.png")}),e.hover(function(){$(this).find("img").attr("src","img/ui/zoom_icon_white.png")},function(){$(this).find("img").attr("src","img/ui/zoom_icon.png")}),e.focus(function(){$(this).find("img").attr("src","img/ui/zoom_icon_white.png")},function(){$(this).find("img").attr("src","img/ui/zoom_icon.png")})}(),function(){var t=$(".first_item_block_wrapper .container_item .item_dropdown"),e=$(".first_item_block_wrapper .container_subitem"),i=$(".second_item_block_wrapper .container_item .item_dropdown"),o=$(".second_item_block_wrapper .container_subitem"),n=$(".third_item_block_wrapper .container_item .item_dropdown"),a=$(".third_item_block_wrapper .container_subitem"),r=$(".fourth_item_block_wrapper .container_item .item_dropdown"),s=$(".fourth_item_block_wrapper .container_subitem"),_=$(".fifth_item_block_wrapper .container_item .item_dropdown"),c=$(".fifth_item_block_wrapper .container_subitem"),l=$(".sixth_item_block_wrapper .container_item .item_dropdown"),p=$(".sixth_item_block_wrapper .container_subitem"),m=$(".seventh_item_block_wrapper .container_item .item_dropdown"),h=$(".seventh_item_block_wrapper .container_subitem"),d=$(".eighth_item_block_wrapper .container_item .item_dropdown"),u=$(".eighth_item_block_wrapper .container_subitem"),f=$(".ninth_item_block_wrapper .container_item .item_dropdown"),g=$(".ninth_item_block_wrapper .container_subitem"),w=$(".tenth_item_block_wrapper .container_item .item_dropdown"),b=$(".tenth_item_block_wrapper .container_subitem");t.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),e.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),i.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),o.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),n.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),a.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),r.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),s.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),_.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),c.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),l.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),p.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),m.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),h.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),d.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),u.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),f.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),g.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})}),w.each(function(t){$(this).on("click",function(){$(this).toggleClass("rotateDropdown"),b.each(function(t){$(this).toggle(),$(this).toggleClass("displayFlex"),$(this).toggleClass("fadeInUp")})})})}(),function(){var t=$(".first_item_block_wrapper .more_avatars_item"),e=$(".second_item_block_wrapper .more_avatars_item"),i=$(".third_item_block_wrapper .more_avatars_item"),o=$(".fourth_item_block_wrapper .more_avatars_item"),n=$(".fifth_item_block_wrapper .more_avatars_item"),a=$(".sixth_item_block_wrapper .more_avatars_item"),r=$(".seventh_item_block_wrapper .more_avatars_item"),s=$(".eighth_item_block_wrapper .more_avatars_item"),_=$(".ninth_item_block_wrapper .more_avatars_item"),c=$(".tenth_item_block_wrapper .more_avatars_item"),l=$(".first_item_block_wrapper .subitem_avatars > div").size(),p=$(".second_item_block_wrapper .subitem_avatars > div").size(),m=$(".third_item_block_wrapper .subitem_avatars > div").size(),h=$(".fourth_item_block_wrapper .subitem_avatars > div").size(),d=$(".fifth_item_block_wrapper .subitem_avatars > div").size(),u=$(".sixth_item_block_wrapper .subitem_avatars > div").size(),f=$(".seventh_item_block_wrapper .subitem_avatars > div").size(),g=$(".eighth_item_block_wrapper .subitem_avatars > div").size(),w=$(".ninth_item_block_wrapper .subitem_avatars > div").size(),b=$(".tenth_item_block_wrapper .subitem_avatars > div").size(),v=3,k=3,C=3,x=3,y=3,j=3,z=3,F=3,I=3,U=3;$(document).ready(function(){v=3,k=3,C=3,x=3,y=3,j=3,z=3,F=3,I=3,U=3,$(".first_item_block_wrapper .subitem_avatars > div:lt("+v+")").show(),$(".second_item_block_wrapper .subitem_avatars > div:lt("+k+")").show(),$(".third_item_block_wrapper .subitem_avatars > div:lt("+C+")").show(),$(".fourth_item_block_wrapper .subitem_avatars > div:lt("+x+")").show(),$(".fifth_item_block_wrapper .subitem_avatars > div:lt("+y+")").show(),$(".sixth_item_block_wrapper .subitem_avatars > div:lt("+j+")").show(),$(".seventh_item_block_wrapper .subitem_avatars > div:lt("+z+")").show(),$(".eighth_item_block_wrapper .subitem_avatars > div:lt("+F+")").show(),$(".ninth_item_block_wrapper .subitem_avatars > div:lt("+I+")").show(),$(".tenth_item_block_wrapper .subitem_avatars > div:lt("+U+")").show(),t.click(function(){v=v+3<=l?v+3:l,$(".first_item_block_wrapper .subitem_avatars > div:lt("+v+")").show(),v==l&&t.hide()}),e.click(function(){k=k+3<=p?k+3:p,$(".second_item_block_wrapper .subitem_avatars > div:lt("+k+")").show(),k==p&&e.hide()}),i.click(function(){C=C+3<=m?C+3:m,$(".third_item_block_wrapper .subitem_avatars > div:lt("+C+")").show(),C==m&&i.hide()}),o.click(function(){x=x+3<=h?x+3:h,$(".fourth_item_block_wrapper .subitem_avatars > div:lt("+x+")").show(),x==h&&o.hide()}),n.click(function(){y=y+3<=d?y+3:d,$(".fifth_item_block_wrapper .subitem_avatars > div:lt("+y+")").show(),y==d&&n.hide()}),a.click(function(){j=j+3<=u?j+3:u,$(".sixth_item_block_wrapper .subitem_avatars > div:lt("+j+")").show(),j==u&&a.hide()}),r.click(function(){z=z+3<=f?z+3:f,$(".seventh_item_block_wrapper .subitem_avatars > div:lt("+z+")").show(),z==f&&r.hide()}),s.click(function(){F=F+3<=g?F+3:g,$(".eighth_item_block_wrapper .subitem_avatars > div:lt("+F+")").show(),F==g&&s.hide()}),_.click(function(){I=I+3<=w?I+3:w,$(".ninth_item_block_wrapper .subitem_avatars > div:lt("+I+")").show(),I==w&&_.hide()}),c.click(function(){U=U+3<=b?U+3:b,$(".tenth_item_block_wrapper .subitem_avatars > div:lt("+U+")").show(),U==b&&c.hide()})})}(),function(){var t=$("#add_project"),e=$(".eighth_item_block_wrapper .container_item"),i=$(".ninth_item_block_wrapper .container_item"),o=$(".tenth_item_block_wrapper .container_item"),n=$(".entry_dropdown button span");t.click(function(){"Project_1"===n.text()?(e.show(),e.addClass("displayFlex"),$("html, body").animate({scrollTop:$("#eighth_project").offset().top},1e3)):"Project_2"===n.text()?(i.show(),i.addClass("displayFlex"),$("html, body").animate({scrollTop:$("#ninth_project").offset().top},1e3)):"Project_3"===n.text()&&(o.show(),o.addClass("displayFlex"),$("html, body").animate({scrollTop:$("#tenth_project").offset().top},1e3))})}()}]);