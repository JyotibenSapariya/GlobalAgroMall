"made-in-china.com"!=document.domain&&(document.domain="made-in-china.com");var ifr=document.getElementsByTagName("iframe"),receiveHandle=function(a){a=a.data.split(/[\*x]/);ifr[0].width=a[0];ifr[0].height=a[1];setTimeout(function(){artDialog&&artDialog.list.popupDialog&&artDialog.list.popupDialog._reset()},0)};window.addEventListener?window.addEventListener("message",receiveHandle,!1):window.attachEvent("onmessage",receiveHandle);
function showPoploginArtdialog(a,b,c){a="https://login.made-in-china.com/sign-in-popup/?currentPage\x3d"+encodeURIComponent(a);b&&(a=a+"\x26"+b);c&&"1"==c&&(a+="\x26isForSupplier\x3d1");b="\x3ciframe frameborder\x3d'0' src\x3d'"+a+"' scrolling\x3d'no' width\x3d'430' height\x3d'350'\x3e\x3c/iframe\x3e";window.postMessage||(b="\x3ciframe frameborder\x3d'0' src\x3d'"+a+" width\x3d'430' height\x3d'350'\x3e\x3c/iframe\x3e");new artDialog({id:"popupDialog",cancel:!1,title:!1,lock:!0,opacity:0.4,content:b})}
function closePopupDialog(){artDialog.get("popupDialog").close()}(function(){var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";a.href="//www.micstatic.com/gb/js/business/popLogin/showPopLogin.css";document.getElementsByTagName("head")[0].appendChild(a)})();