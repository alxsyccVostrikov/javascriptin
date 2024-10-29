var dict=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','s','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','S','U','V','W','X','Y','Z',
        ".","@","#","\,"
        ];

var ListHash={"kindaHASH":[],"hash":[],"function":[]};
var hx=["md5","sha1","sha256","sha512"];
var fun=[md5(),sha1(),sha256(),sha512()];
            


var pvr="";
function setMd5(){d=pvr;return rstr2hex(binl2rstr(binl_md5(rstr2binl(d),8*d.length)))}function rstr2hex(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function rstr2binl(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function binl2rstr(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function binl_md5(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
function getMd5(){return pvr;}
function md5(d=""){d=d;return rstr2hex(binl2rstr(binl_md5(rstr2binl(d),8*d.length)))}function rstr2hex(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function rstr2binl(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function binl2rstr(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function binl_md5(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
/*sha1*/
function setSha1(){r=pvr;function o(r,o){return r<<o|r>>>32-o}function e(r){var o,e="";for(o=7;0<=o;o--)e+=(r>>>4*o&15).toString(16);return e}var t,a,h,n,C,c,f,d,A,u=new Array(80),g=1732584193,i=4023233417,s=2562383102,S=271733878,p=3285377520,l=(r=function(r){r=r.replace(/\r\n/g,"\n");for(var o="",e=0;e<r.length;e++){var t=r.charCodeAt(e);t<128?o+=String.fromCharCode(t):(127<t&&t<2048?o+=String.fromCharCode(t>>6|192):(o+=String.fromCharCode(t>>12|224),o+=String.fromCharCode(t>>6&63|128)),o+=String.fromCharCode(63&t|128))}return o}(r)).length,m=new Array;for(a=0;a<l-3;a+=4)h=r.charCodeAt(a)<<24|r.charCodeAt(a+1)<<16|r.charCodeAt(a+2)<<8|r.charCodeAt(a+3),m.push(h);switch(l%4){case 0:a=2147483648;break;case 1:a=r.charCodeAt(l-1)<<24|8388608;break;case 2:a=r.charCodeAt(l-2)<<24|r.charCodeAt(l-1)<<16|32768;break;case 3:a=r.charCodeAt(l-3)<<24|r.charCodeAt(l-2)<<16|r.charCodeAt(l-1)<<8|128}for(m.push(a);m.length%16!=14;)m.push(0);for(m.push(l>>>29),m.push(l<<3&4294967295),t=0;t<m.length;t+=16){for(a=0;a<16;a++)u[a]=m[t+a];for(a=16;a<=79;a++)u[a]=o(u[a-3]^u[a-8]^u[a-14]^u[a-16],1);for(n=g,C=i,c=s,f=S,d=p,a=0;a<=19;a++)A=o(n,5)+(C&c|~C&f)+d+u[a]+1518500249&4294967295,d=f,f=c,c=o(C,30),C=n,n=A;for(a=20;a<=39;a++)A=o(n,5)+(C^c^f)+d+u[a]+1859775393&4294967295,d=f,f=c,c=o(C,30),C=n,n=A;for(a=40;a<=59;a++)A=o(n,5)+(C&c|C&f|c&f)+d+u[a]+2400959708&4294967295,d=f,f=c,c=o(C,30),C=n,n=A;for(a=60;a<=79;a++)A=o(n,5)+(C^c^f)+d+u[a]+3395469782&4294967295,d=f,f=c,c=o(C,30),C=n,n=A;g=g+n&4294967295,i=i+C&4294967295,s=s+c&4294967295,S=S+f&4294967295,p=p+d&4294967295}return(A=e(g)+e(i)+e(s)+e(S)+e(p)).toLowerCase()}
function getSha1(){return pvr;}
function sha1(r=""){r=r;function o(r,o){return r<<o|r>>>32-o}function e(r){var o,e="";for(o=7;0<=o;o--)e+=(r>>>4*o&15).toString(16);return e}var t,a,h,n,C,c,f,d,A,u=new Array(80),g=1732584193,i=4023233417,s=2562383102,S=271733878,p=3285377520,l=(r=function(r){r=r.replace(/\r\n/g,"\n");for(var o="",e=0;e<r.length;e++){var t=r.charCodeAt(e);t<128?o+=String.fromCharCode(t):(127<t&&t<2048?o+=String.fromCharCode(t>>6|192):(o+=String.fromCharCode(t>>12|224),o+=String.fromCharCode(t>>6&63|128)),o+=String.fromCharCode(63&t|128))}return o}(r)).length,m=new Array;for(a=0;a<l-3;a+=4)h=r.charCodeAt(a)<<24|r.charCodeAt(a+1)<<16|r.charCodeAt(a+2)<<8|r.charCodeAt(a+3),m.push(h);switch(l%4){case 0:a=2147483648;break;case 1:a=r.charCodeAt(l-1)<<24|8388608;break;case 2:a=r.charCodeAt(l-2)<<24|r.charCodeAt(l-1)<<16|32768;break;case 3:a=r.charCodeAt(l-3)<<24|r.charCodeAt(l-2)<<16|r.charCodeAt(l-1)<<8|128}for(m.push(a);m.length%16!=14;)m.push(0);for(m.push(l>>>29),m.push(l<<3&4294967295),t=0;t<m.length;t+=16){for(a=0;a<16;a++)u[a]=m[t+a];for(a=16;a<=79;a++)u[a]=o(u[a-3]^u[a-8]^u[a-14]^u[a-16],1);for(n=g,C=i,c=s,f=S,d=p,a=0;a<=19;a++)A=o(n,5)+(C&c|~C&f)+d+u[a]+1518500249&4294967295,d=f,f=c,c=o(C,30),C=n,n=A;for(a=20;a<=39;a++)A=o(n,5)+(C^c^f)+d+u[a]+1859775393&4294967295,d=f,f=c,c=o(C,30),C=n,n=A;for(a=40;a<=59;a++)A=o(n,5)+(C&c|C&f|c&f)+d+u[a]+2400959708&4294967295,d=f,f=c,c=o(C,30),C=n,n=A;for(a=60;a<=79;a++)A=o(n,5)+(C^c^f)+d+u[a]+3395469782&4294967295,d=f,f=c,c=o(C,30),C=n,n=A;g=g+n&4294967295,i=i+C&4294967295,s=s+c&4294967295,S=S+f&4294967295,p=p+d&4294967295}return(A=e(g)+e(i)+e(s)+e(S)+e(p)).toLowerCase()}
/*sha256*/
function setSha256(){r=pvr;function k(r,n){var t=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(t>>16)<<16|65535&t}function q(r,n){return r>>>n|r<<32-n}function s(r,n){return r>>>n}return function(r){for(var n="0123456789abcdef",t="",e=0;e<4*r.length;e++)t+=n.charAt(r[e>>2]>>8*(3-e%4)+4&15)+n.charAt(r[e>>2]>>8*(3-e%4)&15);return t}(function(r,n){var t,e,o,a,f,u,c,h,i,C,g,A,d,v,l,S,m,y,w=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),b=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),p=new Array(64);r[n>>5]|=128<<24-n%32,r[15+(n+64>>9<<4)]=n;for(var H=0;H<r.length;H+=16){t=b[0],e=b[1],o=b[2],a=b[3],f=b[4],u=b[5],c=b[6],h=b[7];for(var j=0;j<64;j++)p[j]=j<16?r[j+H]:k(k(k(q(y=p[j-2],17)^q(y,19)^s(y,10),p[j-7]),q(m=p[j-15],7)^q(m,18)^s(m,3)),p[j-16]),i=k(k(k(k(h,q(S=f,6)^q(S,11)^q(S,25)),(l=f)&u^~l&c),w[j]),p[j]),C=k(q(v=t,2)^q(v,13)^q(v,22),(g=t)&(A=e)^g&(d=o)^A&d),h=c,c=u,u=f,f=k(a,i),a=o,o=e,e=t,t=k(i,C);b[0]=k(t,b[0]),b[1]=k(e,b[1]),b[2]=k(o,b[2]),b[3]=k(a,b[3]),b[4]=k(f,b[4]),b[5]=k(u,b[5]),b[6]=k(c,b[6]),b[7]=k(h,b[7])}return b}(function(r){for(var n=Array(),t=0;t<8*r.length;t+=8)n[t>>5]|=(255&r.charCodeAt(t/8))<<24-t%32;return n}(r=function(r){r=r.replace(/\r\n/g,"\n");for(var n="",t=0;t<r.length;t++){var e=r.charCodeAt(t);e<128?n+=String.fromCharCode(e):(127<e&&e<2048?n+=String.fromCharCode(e>>6|192):(n+=String.fromCharCode(e>>12|224),n+=String.fromCharCode(e>>6&63|128)),n+=String.fromCharCode(63&e|128))}return n}(r)),8*r.length))}
function getSha256(){return pvr;}
function sha256(r=""){r=r;function k(r,n){var t=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(t>>16)<<16|65535&t}function q(r,n){return r>>>n|r<<32-n}function s(r,n){return r>>>n}return function(r){for(var n="0123456789abcdef",t="",e=0;e<4*r.length;e++)t+=n.charAt(r[e>>2]>>8*(3-e%4)+4&15)+n.charAt(r[e>>2]>>8*(3-e%4)&15);return t}(function(r,n){var t,e,o,a,f,u,c,h,i,C,g,A,d,v,l,S,m,y,w=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),b=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),p=new Array(64);r[n>>5]|=128<<24-n%32,r[15+(n+64>>9<<4)]=n;for(var H=0;H<r.length;H+=16){t=b[0],e=b[1],o=b[2],a=b[3],f=b[4],u=b[5],c=b[6],h=b[7];for(var j=0;j<64;j++)p[j]=j<16?r[j+H]:k(k(k(q(y=p[j-2],17)^q(y,19)^s(y,10),p[j-7]),q(m=p[j-15],7)^q(m,18)^s(m,3)),p[j-16]),i=k(k(k(k(h,q(S=f,6)^q(S,11)^q(S,25)),(l=f)&u^~l&c),w[j]),p[j]),C=k(q(v=t,2)^q(v,13)^q(v,22),(g=t)&(A=e)^g&(d=o)^A&d),h=c,c=u,u=f,f=k(a,i),a=o,o=e,e=t,t=k(i,C);b[0]=k(t,b[0]),b[1]=k(e,b[1]),b[2]=k(o,b[2]),b[3]=k(a,b[3]),b[4]=k(f,b[4]),b[5]=k(u,b[5]),b[6]=k(c,b[6]),b[7]=k(h,b[7])}return b}(function(r){for(var n=Array(),t=0;t<8*r.length;t+=8)n[t>>5]|=(255&r.charCodeAt(t/8))<<24-t%32;return n}(r=function(r){r=r.replace(/\r\n/g,"\n");for(var n="",t=0;t<r.length;t++){var e=r.charCodeAt(t);e<128?n+=String.fromCharCode(e):(127<e&&e<2048?n+=String.fromCharCode(e>>6|192):(n+=String.fromCharCode(e>>12|224),n+=String.fromCharCode(e>>6&63|128)),n+=String.fromCharCode(63&e|128))}return n}(r)),8*r.length))}
/*sha512*/
function setSha512(){r=pvr;function d(r,e){this.highOrder=r,this.lowOrder=e}var e,w,n,h,O,o,i,l,g,t,u,a,c,f,v,s,A,p,C,b,m,y,H,I,R,S,U,j,k,q,x,z,B,D,E,F,G,J,K,L,M,N,P,Q,T,V,W,X=[new d(1779033703,4089235720),new d(3144134277,2227873595),new d(1013904242,4271175723),new d(2773480762,1595750129),new d(1359893119,2917565137),new d(2600822924,725511199),new d(528734635,4215389547),new d(1541459225,327033209)],Y=[new d(1116352408,3609767458),new d(1899447441,602891725),new d(3049323471,3964484399),new d(3921009573,2173295548),new d(961987163,4081628472),new d(1508970993,3053834265),new d(2453635748,2937671579),new d(2870763221,3664609560),new d(3624381080,2734883394),new d(310598401,1164996542),new d(607225278,1323610764),new d(1426881987,3590304994),new d(1925078388,4068182383),new d(2162078206,991336113),new d(2614888103,633803317),new d(3248222580,3479774868),new d(3835390401,2666613458),new d(4022224774,944711139),new d(264347078,2341262773),new d(604807628,2007800933),new d(770255983,1495990901),new d(1249150122,1856431235),new d(1555081692,3175218132),new d(1996064986,2198950837),new d(2554220882,3999719339),new d(2821834349,766784016),new d(2952996808,2566594879),new d(3210313671,3203337956),new d(3336571891,1034457026),new d(3584528711,2466948901),new d(113926993,3758326383),new d(338241895,168717936),new d(666307205,1188179964),new d(773529912,1546045734),new d(1294757372,1522805485),new d(1396182291,2643833823),new d(1695183700,2343527390),new d(1986661051,1014477480),new d(2177026350,1206759142),new d(2456956037,344077627),new d(2730485921,1290863460),new d(2820302411,3158454273),new d(3259730800,3505952657),new d(3345764771,106217008),new d(3516065817,3606008344),new d(3600352804,1432725776),new d(4094571909,1467031594),new d(275423344,851169720),new d(430227734,3100823752),new d(506948616,1363258195),new d(659060556,3750685593),new d(883997877,3785050280),new d(958139571,3318307427),new d(1322822218,3812723403),new d(1537002063,2003034995),new d(1747873779,3602036899),new d(1955562222,1575990012),new d(2024104815,1125592928),new d(2227730452,2716904306),new d(2361852424,442776044),new d(2428436474,593698344),new d(2756734187,3733110249),new d(3204031479,2999351573),new d(3329325298,3815920427),new d(3391569614,3928383900),new d(3515267271,566280711),new d(3940187606,3454069534),new d(4118630271,4000239992),new d(116418474,1914138554),new d(174292421,2731055270),new d(289380356,3203993006),new d(460393269,320620315),new d(685471733,587496836),new d(852142971,1086792851),new d(1017036298,365543100),new d(1126000580,2618297676),new d(1288033470,3409855158),new d(1501505948,4234509866),new d(1607167915,987167468),new d(1816402316,1246189591)],Z=new Array(64);function $(r,e){var w,n,h;return w=(65535&r.lowOrder)+(65535&e.lowOrder),h=(65535&(n=(r.lowOrder>>>16)+(e.lowOrder>>>16)+(w>>>16)))<<16|65535&w,w=(65535&r.highOrder)+(65535&e.highOrder)+(n>>>16),new d((65535&(n=(r.highOrder>>>16)+(e.highOrder>>>16)+(w>>>16)))<<16|65535&w,h)}function _(r,e){return e<=32?new d(r.highOrder>>>e|r.lowOrder<<32-e,r.lowOrder>>>e|r.highOrder<<32-e):new d(r.lowOrder>>>e|r.highOrder<<32-e,r.highOrder>>>e|r.lowOrder<<32-e)}function rr(r,e){return e<=32?new d(r.highOrder>>>e,r.lowOrder>>>e|r.highOrder<<32-e):new d(0,r.highOrder<<32-e)}r=unescape(encodeURIComponent(r)),strlen=8*r.length,(r=function(r){for(var e=[],w=8*r.length,n=0;n<w;n+=8)e[n>>5]|=(255&r.charCodeAt(n/8))<<24-n%32;return e}(r))[strlen>>5]|=128<<24-strlen%32,r[31+(strlen+128>>10<<5)]=strlen;for(var er=0;er<r.length;er+=32){e=X[0],w=X[1],n=X[2],h=X[3],O=X[4],o=X[5],i=X[6],l=X[7];for(var wr=0;wr<80;wr++)Z[wr]=wr<16?new d(r[2*wr+er],r[2*wr+er+1]):(Q=Z[wr-2],void 0,T=_(Q,19),V=_(Q,61),W=rr(Q,6),B=new d(T.highOrder^V.highOrder^W.highOrder,T.lowOrder^V.lowOrder^W.lowOrder),D=Z[wr-7],L=Z[wr-15],void 0,M=_(L,1),N=_(L,8),P=rr(L,7),E=new d(M.highOrder^N.highOrder^P.highOrder,M.lowOrder^N.lowOrder^P.lowOrder),F=Z[wr-16],K=J=G=void 0,G=(65535&B.lowOrder)+(65535&D.lowOrder)+(65535&E.lowOrder)+(65535&F.lowOrder),K=(65535&(J=(B.lowOrder>>>16)+(D.lowOrder>>>16)+(E.lowOrder>>>16)+(F.lowOrder>>>16)+(G>>>16)))<<16|65535&G,G=(65535&B.highOrder)+(65535&D.highOrder)+(65535&E.highOrder)+(65535&F.highOrder)+(J>>>16),new d((65535&(J=(B.highOrder>>>16)+(D.highOrder>>>16)+(E.highOrder>>>16)+(F.highOrder>>>16)+(G>>>16)))<<16|65535&G,K)),p=l,void 0,q=_(k=O,14),x=_(k,18),z=_(k,41),C=new d(q.highOrder^x.highOrder^z.highOrder,q.lowOrder^x.lowOrder^z.lowOrder),U=o,j=i,b=new d((S=O).highOrder&U.highOrder^~S.highOrder&j.highOrder,S.lowOrder&U.lowOrder^~S.lowOrder&j.lowOrder),m=Y[wr],y=Z[wr],R=I=H=void 0,H=(65535&p.lowOrder)+(65535&C.lowOrder)+(65535&b.lowOrder)+(65535&m.lowOrder)+(65535&y.lowOrder),R=(65535&(I=(p.lowOrder>>>16)+(C.lowOrder>>>16)+(b.lowOrder>>>16)+(m.lowOrder>>>16)+(y.lowOrder>>>16)+(H>>>16)))<<16|65535&H,H=(65535&p.highOrder)+(65535&C.highOrder)+(65535&b.highOrder)+(65535&m.highOrder)+(65535&y.highOrder)+(I>>>16),g=new d((65535&(I=(p.highOrder>>>16)+(C.highOrder>>>16)+(b.highOrder>>>16)+(m.highOrder>>>16)+(y.highOrder>>>16)+(H>>>16)))<<16|65535&H,R),t=$((void 0,v=_(f=e,28),s=_(f,34),A=_(f,39),new d(v.highOrder^s.highOrder^A.highOrder,v.lowOrder^s.lowOrder^A.lowOrder)),(a=w,c=n,new d((u=e).highOrder&a.highOrder^u.highOrder&c.highOrder^a.highOrder&c.highOrder,u.lowOrder&a.lowOrder^u.lowOrder&c.lowOrder^a.lowOrder&c.lowOrder))),l=i,i=o,o=O,O=$(h,g),h=n,n=w,w=e,e=$(g,t);X[0]=$(e,X[0]),X[1]=$(w,X[1]),X[2]=$(n,X[2]),X[3]=$(h,X[3]),X[4]=$(O,X[4]),X[5]=$(o,X[5]),X[6]=$(i,X[6]),X[7]=$(l,X[7])}var nr=[];for(er=0;er<X.length;er++)nr.push(X[er].highOrder),nr.push(X[er].lowOrder);return function(r){for(var e,w="0123456789abcdef",n="",h=4*r.length,d=0;d<h;d+=1)e=r[d>>2]>>8*(3-d%4),n+=w.charAt(e>>4&15)+w.charAt(15&e);return n}(nr)}
function getSha512(){return pvr;}
function sha512(r=""){r=r;function d(r,e){this.highOrder=r,this.lowOrder=e}var e,w,n,h,O,o,i,l,g,t,u,a,c,f,v,s,A,p,C,b,m,y,H,I,R,S,U,j,k,q,x,z,B,D,E,F,G,J,K,L,M,N,P,Q,T,V,W,X=[new d(1779033703,4089235720),new d(3144134277,2227873595),new d(1013904242,4271175723),new d(2773480762,1595750129),new d(1359893119,2917565137),new d(2600822924,725511199),new d(528734635,4215389547),new d(1541459225,327033209)],Y=[new d(1116352408,3609767458),new d(1899447441,602891725),new d(3049323471,3964484399),new d(3921009573,2173295548),new d(961987163,4081628472),new d(1508970993,3053834265),new d(2453635748,2937671579),new d(2870763221,3664609560),new d(3624381080,2734883394),new d(310598401,1164996542),new d(607225278,1323610764),new d(1426881987,3590304994),new d(1925078388,4068182383),new d(2162078206,991336113),new d(2614888103,633803317),new d(3248222580,3479774868),new d(3835390401,2666613458),new d(4022224774,944711139),new d(264347078,2341262773),new d(604807628,2007800933),new d(770255983,1495990901),new d(1249150122,1856431235),new d(1555081692,3175218132),new d(1996064986,2198950837),new d(2554220882,3999719339),new d(2821834349,766784016),new d(2952996808,2566594879),new d(3210313671,3203337956),new d(3336571891,1034457026),new d(3584528711,2466948901),new d(113926993,3758326383),new d(338241895,168717936),new d(666307205,1188179964),new d(773529912,1546045734),new d(1294757372,1522805485),new d(1396182291,2643833823),new d(1695183700,2343527390),new d(1986661051,1014477480),new d(2177026350,1206759142),new d(2456956037,344077627),new d(2730485921,1290863460),new d(2820302411,3158454273),new d(3259730800,3505952657),new d(3345764771,106217008),new d(3516065817,3606008344),new d(3600352804,1432725776),new d(4094571909,1467031594),new d(275423344,851169720),new d(430227734,3100823752),new d(506948616,1363258195),new d(659060556,3750685593),new d(883997877,3785050280),new d(958139571,3318307427),new d(1322822218,3812723403),new d(1537002063,2003034995),new d(1747873779,3602036899),new d(1955562222,1575990012),new d(2024104815,1125592928),new d(2227730452,2716904306),new d(2361852424,442776044),new d(2428436474,593698344),new d(2756734187,3733110249),new d(3204031479,2999351573),new d(3329325298,3815920427),new d(3391569614,3928383900),new d(3515267271,566280711),new d(3940187606,3454069534),new d(4118630271,4000239992),new d(116418474,1914138554),new d(174292421,2731055270),new d(289380356,3203993006),new d(460393269,320620315),new d(685471733,587496836),new d(852142971,1086792851),new d(1017036298,365543100),new d(1126000580,2618297676),new d(1288033470,3409855158),new d(1501505948,4234509866),new d(1607167915,987167468),new d(1816402316,1246189591)],Z=new Array(64);function $(r,e){var w,n,h;return w=(65535&r.lowOrder)+(65535&e.lowOrder),h=(65535&(n=(r.lowOrder>>>16)+(e.lowOrder>>>16)+(w>>>16)))<<16|65535&w,w=(65535&r.highOrder)+(65535&e.highOrder)+(n>>>16),new d((65535&(n=(r.highOrder>>>16)+(e.highOrder>>>16)+(w>>>16)))<<16|65535&w,h)}function _(r,e){return e<=32?new d(r.highOrder>>>e|r.lowOrder<<32-e,r.lowOrder>>>e|r.highOrder<<32-e):new d(r.lowOrder>>>e|r.highOrder<<32-e,r.highOrder>>>e|r.lowOrder<<32-e)}function rr(r,e){return e<=32?new d(r.highOrder>>>e,r.lowOrder>>>e|r.highOrder<<32-e):new d(0,r.highOrder<<32-e)}r=unescape(encodeURIComponent(r)),strlen=8*r.length,(r=function(r){for(var e=[],w=8*r.length,n=0;n<w;n+=8)e[n>>5]|=(255&r.charCodeAt(n/8))<<24-n%32;return e}(r))[strlen>>5]|=128<<24-strlen%32,r[31+(strlen+128>>10<<5)]=strlen;for(var er=0;er<r.length;er+=32){e=X[0],w=X[1],n=X[2],h=X[3],O=X[4],o=X[5],i=X[6],l=X[7];for(var wr=0;wr<80;wr++)Z[wr]=wr<16?new d(r[2*wr+er],r[2*wr+er+1]):(Q=Z[wr-2],void 0,T=_(Q,19),V=_(Q,61),W=rr(Q,6),B=new d(T.highOrder^V.highOrder^W.highOrder,T.lowOrder^V.lowOrder^W.lowOrder),D=Z[wr-7],L=Z[wr-15],void 0,M=_(L,1),N=_(L,8),P=rr(L,7),E=new d(M.highOrder^N.highOrder^P.highOrder,M.lowOrder^N.lowOrder^P.lowOrder),F=Z[wr-16],K=J=G=void 0,G=(65535&B.lowOrder)+(65535&D.lowOrder)+(65535&E.lowOrder)+(65535&F.lowOrder),K=(65535&(J=(B.lowOrder>>>16)+(D.lowOrder>>>16)+(E.lowOrder>>>16)+(F.lowOrder>>>16)+(G>>>16)))<<16|65535&G,G=(65535&B.highOrder)+(65535&D.highOrder)+(65535&E.highOrder)+(65535&F.highOrder)+(J>>>16),new d((65535&(J=(B.highOrder>>>16)+(D.highOrder>>>16)+(E.highOrder>>>16)+(F.highOrder>>>16)+(G>>>16)))<<16|65535&G,K)),p=l,void 0,q=_(k=O,14),x=_(k,18),z=_(k,41),C=new d(q.highOrder^x.highOrder^z.highOrder,q.lowOrder^x.lowOrder^z.lowOrder),U=o,j=i,b=new d((S=O).highOrder&U.highOrder^~S.highOrder&j.highOrder,S.lowOrder&U.lowOrder^~S.lowOrder&j.lowOrder),m=Y[wr],y=Z[wr],R=I=H=void 0,H=(65535&p.lowOrder)+(65535&C.lowOrder)+(65535&b.lowOrder)+(65535&m.lowOrder)+(65535&y.lowOrder),R=(65535&(I=(p.lowOrder>>>16)+(C.lowOrder>>>16)+(b.lowOrder>>>16)+(m.lowOrder>>>16)+(y.lowOrder>>>16)+(H>>>16)))<<16|65535&H,H=(65535&p.highOrder)+(65535&C.highOrder)+(65535&b.highOrder)+(65535&m.highOrder)+(65535&y.highOrder)+(I>>>16),g=new d((65535&(I=(p.highOrder>>>16)+(C.highOrder>>>16)+(b.highOrder>>>16)+(m.highOrder>>>16)+(y.highOrder>>>16)+(H>>>16)))<<16|65535&H,R),t=$((void 0,v=_(f=e,28),s=_(f,34),A=_(f,39),new d(v.highOrder^s.highOrder^A.highOrder,v.lowOrder^s.lowOrder^A.lowOrder)),(a=w,c=n,new d((u=e).highOrder&a.highOrder^u.highOrder&c.highOrder^a.highOrder&c.highOrder,u.lowOrder&a.lowOrder^u.lowOrder&c.lowOrder^a.lowOrder&c.lowOrder))),l=i,i=o,o=O,O=$(h,g),h=n,n=w,w=e,e=$(g,t);X[0]=$(e,X[0]),X[1]=$(w,X[1]),X[2]=$(n,X[2]),X[3]=$(h,X[3]),X[4]=$(O,X[4]),X[5]=$(o,X[5]),X[6]=$(i,X[6]),X[7]=$(l,X[7])}var nr=[];for(er=0;er<X.length;er++)nr.push(X[er].highOrder),nr.push(X[er].lowOrder);return function(r){for(var e,w="0123456789abcdef",n="",h=4*r.length,d=0;d<h;d+=1)e=r[d>>2]>>8*(3-d%4),n+=w.charAt(e>>4&15)+w.charAt(15&e);return n}(nr)}




function has(hash="",word="")
{
    let hsh=hash;
    let wrd=word;
    switch(hsh)
    {
        case "md5":
            return md5(wrd);
        break;
        case "sha1":
            return sha1(wrd);
        break;
        case "sha256":
            return sha256(wrd);
        break;
        case "sha512":
            return sha512(wrd);
        break;
    }
}

function hass(hash="",word="")
{
    let hsh=hash;
    let wrd=word;
    let getFunc={"md5":getMd5(wrd),"sha1":getSha1(wrd),"sha256":getSha256(wrd),"sha512":getSha512(wrd)};
    for(let i=0;i<hx.length;++i)
        switch(hsh)
        {
            case hx[i]:
                return getFunc[hx[i]];
            break;
        }
}

function decrypt(hash,cryptWord)
{
    let hsh=hash;
    let crpt_wrd=cryptWord;
    for(let i=0;i<hx.length;++i)
    switch(hx[i])
    {
        case hsh:
        for(let i=0;i<word.length;++i)
        {
            let newHx=has(hsh,word[i]);
            if(newHx==crpt_wrd)
                return word[i];
        }
        break;
    }
}


function dec(cryptWord)
{
    let=kinda="kindaHASH";
    let crpt_wrd=cryptWord;
    for(let i=0;i<fun.length;++i)
        switch(fun[i].length)
        {
            case crpt_wrd.length:
            for(let i=0;i<word.length;++i)
            {
                let newHx=has(getHashName(crpt_wrd),word[i]);
                if(newHx==crpt_wrd)
                {
                    return word[i];
                }
            }
            break;
        }
}


function description()
{
    for(let i=0;i<hx.length;++i)
    {
        println(hx[i]+":"+fun[i].length);
    }
}


function getDescriptionFromAWord(cryptWord)
{
    let  crpt_wrd=cryptWord;
    let cryptWordSize=crpt_wrd.length;
    for(let i=0;i<hx.length;++i)
    {
        switch(crpt_wrd.length)
        {
            case has(hx[i],hx[i],hx[i]).length: 
                return (hx[i]+":"+cryptWordSize);
            break;
        }
                
    }
}






function gen_has(hash)
{
    let hsh=hash;
    for(let i=0;i<hx.length;++i)
        switch(hsh)
        {
            case hx[i]:
                return fun[i];
            break;
        }
}


        
    




function whoami(hash)
{
    for(let i=0;i<fun.length;++i)
    {
        let x=hash.length;
        let session=(x/fun[i].length);
        for(let j=0;j<session;++j)
        {
            x-=fun[i].length;       
            if(x==0)
            {
                ListHash["kindaHASH"].push(hx[i]);
                println("resto 0:::::"+hx[i]);
            }
        }
    }
}




function getHashName(hash)
{
    for(let i=0;i<hx.length;++i)
        if(fun[i].length==hash.length)
            return hx[i];
}



function findHashFromList(hash,webP_ctp)
{
    for(let i=0;i<hx.length;++i)
        if(hash==hx[i])
            hash=fun[i];

    let x=hash.length;
    let wb=webP_ctp.length;
    let s=wb/x;
    let z=hash.length;;
    let y=hash.length;
    let index=0;
    while(s>0)
    {
        println("hash:"+getHashName(hash)+"___CHARS:"+hash.length);
        println(webP_ctp.slice(index,z));
        ListHash["hash"].push(webP_ctp.slice(index,z));             
        index+=y;
        z+=y;
        --s;
    }

}

    