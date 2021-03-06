//控制页面字体大小
(function (doc, win) {
			    var docEl = doc.documentElement,
			        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			        recalc = function () {
			            var clientWidth = docEl.clientWidth;
			            if (clientWidth >= 720) {
			                clientWidth = 720;
			            }
			            if (!clientWidth) return;
			            docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
			        };
			    if (!doc.addEventListener) return;
			    win.addEventListener(resizeEvt, recalc, false);
			    doc.addEventListener('DOMContentLoaded', recalc, false);
			})(document, window);