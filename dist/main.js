(()=>{"use strict";function e(t,n){const s=a();return(e=function(e,t){return s[e-=364]})(t,n)}const t=e;!function(t,n){const s=e,o=t();for(;;)try{if(560333==-parseInt(s(366))/1*(parseInt(s(385))/2)+parseInt(s(364))/3*(parseInt(s(376))/4)+-parseInt(s(400))/5*(parseInt(s(379))/6)+-parseInt(s(382))/7*(parseInt(s(392))/8)+-parseInt(s(370))/9*(parseInt(s(393))/10)+parseInt(s(397))/11*(-parseInt(s(373))/12)+-parseInt(s(367))/13*(-parseInt(s(383))/14))break;o.push(o.shift())}catch(e){o.push(o.shift())}}(a);const n=(new Date)[t(381)]()[t(396)](0,10);console[t(399)](n);const s=document.getElementById(t(378)),o=document.getElementById(t(389));let r=0;function a(){const e=["User typed: ","toISOString","294203eODnyc","2198oIogDz","info","340372LIryuh","value","getElementById","keydown","message-status","You are sending messages too quickly!","error","40NsitcZ","10dxZUqz","error: ","play-music-btn","slice","216799cmXYWa","POST","log","470930JXbdDh","stringify","disabled","play","music-player","319287TPtZOr","json","1jKIIFK","98579LBVAac","addEventListener","click","5094441KbTPae","application/json","Your message successfully sent anonymously!","276BMdtXh","textContent","Please enter a message!","36EIPGSX","add","message-input","12TNABbk"];return(a=function(){return e})()}document[t(387)](t(395))[t(368)](t(369),(function(){const e=t;document[e(387)](e(404)).classList[e(377)]("show"),document.querySelector("audio")[e(403)]()})),s[t(368)](t(388),(async function(e){const a=t;if("Enter"===e.key){if(s[a(402)])return;const e=Date.now();if(e-r<2e3)return o.textContent=a(390),setTimeout((function(){o[a(374)]=""}),2e3),r=e,s[a(402)]=!0,void setTimeout((function(){const e=a;o[e(374)]="",s[e(402)]=!1}),2e3);if(""===s[a(386)].trim())return o.textContent=a(375),setTimeout((function(){o[a(374)]=""}),2e3),r=e,s.disabled=!0,void setTimeout((function(){o[a(374)]="",s.disabled=!1}),2e3);console.log(a(380)+s[a(386)]),o[a(374)]="Your message will send shortly";try{const e=await fetch("/api/server",{method:a(398),headers:{"Content-Type":a(371)},body:JSON[a(401)]({message:s[a(386)],date:n})}),t=await e[a(365)]();console[a(384)](t)}catch(e){console[a(391)](a(394)+e)}s[a(386)]="",r=e,s[a(402)]=!0,o[a(374)]=a(372),setTimeout((function(){const e=a;o[e(374)]="",s[e(402)]=!1}),3e3)}}))})();