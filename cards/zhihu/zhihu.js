(function(e){var t=window.laike9mdev?"":"/cards/zhihu/";var r,a=0;var i,n,d,h;function u(t){if(e.querySelectorAll){return e.querySelectorAll("."+t)}var a=e.getElementsByTagName("div");var i=[];for(r=0;r<a.length;r++){if(~a[r].className.split(" ").indexOf(t)){i.push(a[r])}}return i}function s(e,t){return e.getAttribute("data-"+t)}function l(e){if(window.addEventListener){window.addEventListener("message",function(t){if(e.id===t.data.sender){e.height=t.data.height}},false)}}function o(r){var i=s(r,"theme")||"zhihu";cardurl=t+"theme/"+i+".html";var n=s(r,"userhash");if(!n){return}a+=1;var d=s(r,"width");var h=s(r,"height");var u=s(r,"key1")||"answer";var o=s(r,"key2")||"agree";var c=s(r,"key3")||"follower";var v=s(r,"button")||"yes";var f=s(r,"description")||"yes";var m="zhcard-"+n+"-"+a;var y=e.createElement("iframe");y.setAttribute("id",m);y.setAttribute("frameborder",0);y.setAttribute("scrolling",0);y.setAttribute("allowtransparency",true);var g=cardurl+"?userhash="+n+"&identity="+m+"&button="+v+"&description="+f;g+="&key1="+u+"&key2="+o+"&key3="+c;y.src=g;y.width=d||Math.min(r.parentNode.clientWidth||400,400);if(h){y.height=h}l(y);r.parentNode.replaceChild(y,r);return y}var c=u("zhihu-card");for(r=0;r<c.length;r++){o(c[r])}})(document);
