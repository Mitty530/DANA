jQuery(document).ready((function(s){var e,a;function n(i){var e=l(i);if(i.parents(".cd-headline").hasClass("type")){var a=i.parent(".cd-words-wrapper");a.addClass("selected").removeClass("waiting"),setTimeout((function(){a.removeClass("selected"),i.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")}),500),setTimeout((function(){t(e,150)}),1300)}else if(i.parents(".cd-headline").hasClass("letters")){var o=i.children("i").length>=e.children("i").length;!function i(e,a,t,d){e.removeClass("in").addClass("out"),e.is(":last-child")?t&&setTimeout((function(){n(l(a))}),2500):setTimeout((function(){i(e.next(),a,t,d)}),d);if(e.is(":last-child")&&s("html").hasClass("no-csstransitions")){var o=l(a);r(a,o)}}(i.find("i").eq(0),i,o,50),d(e.find("i").eq(0),e,o,50)}else i.parents(".cd-headline").hasClass("clip")?i.parents(".cd-words-wrapper").animate({width:"2px"},600,(function(){r(i,e),t(e)})):i.parents(".cd-headline").hasClass("loading-bar")?(i.parents(".cd-words-wrapper").removeClass("is-loading"),r(i,e),setTimeout((function(){n(e)}),3800),setTimeout((function(){i.parents(".cd-words-wrapper").addClass("is-loading")}),800)):(r(i,e),setTimeout((function(){n(e)}),2500))}function t(s,i){s.parents(".cd-headline").hasClass("type")?(d(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},600,(function(){setTimeout((function(){n(s)}),1500)}))}function d(s,i,e,a){s.addClass("in").removeClass("out"),s.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout((function(){i.parents(".cd-words-wrapper").addClass("waiting")}),200),e||setTimeout((function(){n(i)}),2500)):setTimeout((function(){d(s.next(),i,e,a)}),a)}function l(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()}function r(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}s(".cd-headline.letters").find("b").each((function(){var e=s(this),a=e.text().split(""),n=e.hasClass("is-visible");for(i in a)e.parents(".rotate-2").length>0&&(a[i]="<em>"+a[i]+"</em>"),a[i]=n?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var t=a.join("");e.html(t).css("opacity",1)})),e=s(".cd-headline"),a=2500,e.each((function(){var i=s(this);if(i.hasClass("loading-bar"))a=3800,setTimeout((function(){i.find(".cd-words-wrapper").addClass("is-loading")}),800);else if(i.hasClass("clip")){var e=i.find(".cd-words-wrapper"),t=e.width()+10;e.css("width",t)}else if(!i.hasClass("type")){var d=i.find(".cd-words-wrapper b"),l=0;d.each((function(){var i=s(this).width();i>l&&(l=i)})),i.find(".cd-words-wrapper").css("width",l)}setTimeout((function(){n(i.find(".is-visible").eq(0))}),a)}))}));