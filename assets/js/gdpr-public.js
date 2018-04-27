!function(e){"use strict";var r=location.search,n=location.protocol+"//"+location.host+location.pathname;-1!==r.indexOf("notify=1")&&window.history.replaceState({},document.title,n),window.has_consent=function(e){if(Cookies.get("gdpr[consent_types]")&&JSON.parse(Cookies.get("gdpr[consent_types]")).indexOf(e)>-1)return!0;return!1},window.is_allowed_cookie=function(e){if(Cookies.get("gdpr[allowed_cookies]")){JSON.parse(Cookies.get("gdpr[allowed_cookies]"));if(consentArray.indexOf(e)>-1)return!0}return!1},e(function(){Cookies.get("gdpr[privacy_bar]")||e(".gdpr.gdpr-privacy-bar").delay(1e3).slideDown(600),!has_consent("privacy-policy")&&GDPR.is_user_logged_in&&(e(".gdpr-reconsent-modal").show(),e(".wpadminbar").hide()),e(document).on("click",".gdpr.gdpr-privacy-bar .gdpr-agreement",function(){e(".gdpr-privacy-preferences-frm").submit()}),e(document).on("submit",".gdpr-privacy-preferences-frm",function(){Cookies.set("gdpr[privacy_bar]",1)}),e(document).on("click",".gdpr-preferences",function(){e(this).data("type");e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-privacy-preferences .gdpr-wrapper").fadeIn()}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-close, .gdpr-overlay",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-privacy-preferences .gdpr-wrapper").fadeOut()}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-tabs button",function(){var r="."+e(this).data("target");e(".gdpr.gdpr-privacy-preferences .gdpr-tab-content > div").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tab-content "+r).addClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").hasClass("gdpr-mobile-expanded")&&(e(".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").toggle()),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs button").removeClass("gdpr-active"),e(".gdpr-subtabs li button").removeClass("gdpr-active"),e(this).hasClass("gdpr-tab-button")?(e(this).addClass("gdpr-active"),e(this).hasClass("gdpr-cookie-settings")&&e(".gdpr-subtabs").find("li button").first().addClass("gdpr-active")):(e(".gdpr-cookie-settings").addClass("gdpr-active"),e(this).addClass("gdpr-active"))}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button",function(r){e(this).toggleClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").toggle().addClass("gdpr-mobile-expanded")}),e(window).resize(function(){e(window).width()>640&&e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").hasClass("gdpr-mobile-expanded")&&(e(".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").removeClass("gdpr-mobile-expanded").removeAttr("style"))}),e("form.gdpr-add-to-deletion-requests").on("submit",function(r){e(this).hasClass("confirmed")||(r.preventDefault(),e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-delete-confirmation .gdpr-wrapper").css({display:"flex"}).hide().fadeIn())}),e(document).on("click",".gdpr.gdpr-general-confirmation .gdpr-close, .gdpr-overlay, .gdpr-cancel",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-general-confirmation .gdpr-wrapper").fadeOut()}),e(document).on("click",".gdpr.gdpr-delete-confirmation button.gdpr-delete-account",function(){e("form.gdpr-add-to-deletion-requests").addClass("confirmed"),e('form.gdpr-add-to-deletion-requests.confirmed input[type="submit"]').click(),e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-delete-confirmation .gdpr-wrapper").fadeOut()}),e(".gdpr-accept-confirmation").length>0&&(e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-accept-confirmation .gdpr-wrapper").css({display:"flex"}).hide().fadeIn(),e(document).on("click",".gdpr.gdpr-accept-confirmation button.gdpr-ok",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-accept-confirmation .gdpr-wrapper").fadeOut()})),e(document).on("click",".gdpr-agree",function(r){r.preventDefault();e(this);e(".gdpr-consent-buttons").fadeOut(300,function(){e(".gdpr-consent-loading").fadeIn(300)});var n=0;setInterval(function(){e(".gdpr-ellipsis").html();n<3?(e(".gdpr-ellipsis").append("."),n++):(e(".gdpr-ellipsis").html(""),n=0)},600);e.post(GDPR.ajaxurl,{action:"agree_with_terms",nonce:e(this).data("nonce")},function(r){r.success&&e(".gdpr-reconsent-modal").fadeOut(300,function(){e(this).remove(),e(".wpadminbar").show()})})}),e(document).on("click",".gdpr-disagree",function(r){e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-disagree-confirmation .gdpr-wrapper").css({display:"flex"}).hide().fadeIn()}),e(document).on("click",".gdpr-disagree-confirm",function(r){r.preventDefault(),e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-disagree-confirmation .gdpr-wrapper").fadeOut(),e(".gdpr-consent-buttons").fadeOut(300,function(){e(".gdpr-updating").html(GDPR.aborting),e(".gdpr-consent-loading").fadeIn(300)});var n=0;setInterval(function(){e(".gdpr-ellipsis").html();n<3?(e(".gdpr-ellipsis").append("."),n++):(e(".gdpr-ellipsis").html(""),n=0)},600);e.post(GDPR.ajaxurl,{action:"disagree_with_terms",nonce:e(this).data("nonce")},function(e){e.success&&location.reload()})})})}(jQuery),function(e){var r=!1;if("function"==typeof define&&define.amd&&(define(e),r=!0),"object"==typeof exports&&(module.exports=e(),r=!0),!r){var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,r={};e<arguments.length;e++){var n=arguments[e];for(var t in n)r[t]=n[t]}return r}return function r(n){function t(r,d,o){var p;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(o=e({path:"/"},t.defaults,o)).expires){var i=new Date;i.setMilliseconds(i.getMilliseconds()+864e5*o.expires),o.expires=i}o.expires=o.expires?o.expires.toUTCString():"";try{p=JSON.stringify(d),/^[\{\[]/.test(p)&&(d=p)}catch(e){}d=n.write?n.write(d,r):encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=(r=(r=encodeURIComponent(String(r))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var a="";for(var c in o)o[c]&&(a+="; "+c,!0!==o[c]&&(a+="="+o[c]));return document.cookie=r+"="+d+a}r||(p={});for(var s=document.cookie?document.cookie.split("; "):[],g=/(%[0-9A-Z]{2})+/g,l=0;l<s.length;l++){var f=s[l].split("="),u=f.slice(1).join("=");this.json||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var m=f[0].replace(g,decodeURIComponent);if(u=n.read?n.read(u,m):n(u,m)||u.replace(g,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch(e){}if(r===m){p=u;break}r||(p[m]=u)}catch(e){}}return p}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(r,n){t(r,"",e(n,{expires:-1}))},t.withConverter=r,t}(function(){})});