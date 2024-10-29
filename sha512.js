function sha512(r)
{
	function d(r,e)
	{
		this.highOrder=r,this.lowOrder=e
	}
	var e,w,n,h,O,o,i,l,g,t,u,a,c,f,v,s,A,p,C,b,m,y,H,I,R,S,U,j,k,q,x,z,B,D,E,F,G,J,K,L,M,N,P,Q,T,V,W,X=[new d(1779033703,4089235720),new d(3144134277,2227873595),new d(1013904242,4271175723),new d(2773480762,1595750129),new d(1359893119,2917565137),new d(2600822924,725511199),new d(528734635,4215389547),new d(1541459225,327033209)],Y=[new d(1116352408,3609767458),new d(1899447441,602891725),new d(3049323471,3964484399),new d(3921009573,2173295548),new d(961987163,4081628472),new d(1508970993,3053834265),new d(2453635748,2937671579),new d(2870763221,3664609560),new d(3624381080,2734883394),new d(310598401,1164996542),new d(607225278,1323610764),new d(1426881987,3590304994),new d(1925078388,4068182383),new d(2162078206,991336113),new d(2614888103,633803317),new d(3248222580,3479774868),new d(3835390401,2666613458),new d(4022224774,944711139),new d(264347078,2341262773),new d(604807628,2007800933),new d(770255983,1495990901),new d(1249150122,1856431235),new d(1555081692,3175218132),new d(1996064986,2198950837),new d(2554220882,3999719339),new d(2821834349,766784016),new d(2952996808,2566594879),new d(3210313671,3203337956),new d(3336571891,1034457026),new d(3584528711,2466948901),new d(113926993,3758326383),new d(338241895,168717936),new d(666307205,1188179964),new d(773529912,1546045734),new d(1294757372,1522805485),new d(1396182291,2643833823),new d(1695183700,2343527390),new d(1986661051,1014477480),new d(2177026350,1206759142),new d(2456956037,344077627),new d(2730485921,1290863460),new d(2820302411,3158454273),new d(3259730800,3505952657),new d(3345764771,106217008),new d(3516065817,3606008344),new d(3600352804,1432725776),new d(4094571909,1467031594),new d(275423344,851169720),new d(430227734,3100823752),new d(506948616,1363258195),new d(659060556,3750685593),new d(883997877,3785050280),new d(958139571,3318307427),new d(1322822218,3812723403),new d(1537002063,2003034995),new d(1747873779,3602036899),new d(1955562222,1575990012),new d(2024104815,1125592928),new d(2227730452,2716904306),new d(2361852424,442776044),new d(2428436474,593698344),new d(2756734187,3733110249),new d(3204031479,2999351573),new d(3329325298,3815920427),new d(3391569614,3928383900),new d(3515267271,566280711),new d(3940187606,3454069534),new d(4118630271,4000239992),new d(116418474,1914138554),new d(174292421,2731055270),new d(289380356,3203993006),new d(460393269,320620315),new d(685471733,587496836),new d(852142971,1086792851),new d(1017036298,365543100),new d(1126000580,2618297676),new d(1288033470,3409855158),new d(1501505948,4234509866),new d(1607167915,987167468),new d(1816402316,1246189591)],Z=new Array(64);
	function $(r,e)
	{
		var w,n,h;
		return w=(65535&r.lowOrder)+(65535&e.lowOrder),h=(65535&(n=(r.lowOrder>>>16)+(e.lowOrder>>>16)+(w>>>16)))<<16|65535&w,w=(65535&r.highOrder)+(65535&e.highOrder)+(n>>>16),new d((65535&(n=(r.highOrder>>>16)+(e.highOrder>>>16)+(w>>>16)))<<16|65535&w,h)
	}
	function _(r,e)
	{
		return e<=32?new d(r.highOrder>>>e|r.lowOrder<<32-e,r.lowOrder>>>e|r.highOrder<<32-e):new d(r.lowOrder>>>e|r.highOrder<<32-e,r.highOrder>>>e|r.lowOrder<<32-e)}function rr(r,e)
		{
			return e<=32?new d(r.highOrder>>>e,r.lowOrder>>>e|r.highOrder<<32-e):new d(0,r.highOrder<<32-e)}r=unescape(encodeURIComponent(r)),strlen=8*r.length,(r=function(r)
				{
					for(var e=[],w=8*r.length,n=0;n<w;n+=8)e[n>>5]|=(255&r.charCodeAt(n/8))<<24-n%32;
						return e
				}
				(r))[strlen>>5]|=128<<24-strlen%32,r[31+(strlen+128>>10<<5)]=strlen;
			for(var er=0;er<r.length;er+=32)
				{
					e=X[0],w=X[1],n=X[2],h=X[3],O=X[4],o=X[5],i=X[6],l=X[7];
					for(var wr=0;wr<80;wr++)
						Z[wr]=wr<16?new d(r[2*wr+er],r[2*wr+er+1]):(Q=Z[wr-2],void 0,T=_(Q,19),V=_(Q,61),W=rr(Q,6),B=new d(T.highOrder^V.highOrder^W.highOrder,T.lowOrder^V.lowOrder^W.lowOrder),D=Z[wr-7],L=Z[wr-15],void 0,M=_(L,1),N=_(L,8),P=rr(L,7),E=new d(M.highOrder^N.highOrder^P.highOrder,M.lowOrder^N.lowOrder^P.lowOrder),F=Z[wr-16],K=J=G=void 0,G=(65535&B.lowOrder)+(65535&D.lowOrder)+(65535&E.lowOrder)+(65535&F.lowOrder),K=(65535&(J=(B.lowOrder>>>16)+(D.lowOrder>>>16)+(E.lowOrder>>>16)+(F.lowOrder>>>16)+(G>>>16)))<<16|65535&G,G=(65535&B.highOrder)+(65535&D.highOrder)+(65535&E.highOrder)+(65535&F.highOrder)+(J>>>16),new d((65535&(J=(B.highOrder>>>16)+(D.highOrder>>>16)+(E.highOrder>>>16)+(F.highOrder>>>16)+(G>>>16)))<<16|65535&G,K)),p=l,void 0,q=_(k=O,14),x=_(k,18),z=_(k,41),C=new d(q.highOrder^x.highOrder^z.highOrder,q.lowOrder^x.lowOrder^z.lowOrder),U=o,j=i,b=new d((S=O).highOrder&U.highOrder^~S.highOrder&j.highOrder,S.lowOrder&U.lowOrder^~S.lowOrder&j.lowOrder),m=Y[wr],y=Z[wr],R=I=H=void 0,H=(65535&p.lowOrder)+(65535&C.lowOrder)+(65535&b.lowOrder)+(65535&m.lowOrder)+(65535&y.lowOrder),R=(65535&(I=(p.lowOrder>>>16)+(C.lowOrder>>>16)+(b.lowOrder>>>16)+(m.lowOrder>>>16)+(y.lowOrder>>>16)+(H>>>16)))<<16|65535&H,H=(65535&p.highOrder)+(65535&C.highOrder)+(65535&b.highOrder)+(65535&m.highOrder)+(65535&y.highOrder)+(I>>>16),g=new d((65535&(I=(p.highOrder>>>16)+(C.highOrder>>>16)+(b.highOrder>>>16)+(m.highOrder>>>16)+(y.highOrder>>>16)+(H>>>16)))<<16|65535&H,R),t=$((void 0,v=_(f=e,28),s=_(f,34),A=_(f,39),new d(v.highOrder^s.highOrder^A.highOrder,v.lowOrder^s.lowOrder^A.lowOrder)),(a=w,c=n,new d((u=e).highOrder&a.highOrder^u.highOrder&c.highOrder^a.highOrder&c.highOrder,u.lowOrder&a.lowOrder^u.lowOrder&c.lowOrder^a.lowOrder&c.lowOrder))),l=i,i=o,o=O,O=$(h,g),h=n,n=w,w=e,e=$(g,t);X[0]=$(e,X[0]),X[1]=$(w,X[1]),X[2]=$(n,X[2]),X[3]=$(h,X[3]),X[4]=$(O,X[4]),X[5]=$(o,X[5]),X[6]=$(i,X[6]),X[7]=$(l,X[7])
				}
				var nr=[];
				for(er=0;er<X.length;er++)
					nr.push(X[er].highOrder),nr.push(X[er].lowOrder);
				return function(r)
				{
					for(var e,w="0123456789abcdef",n="",h=4*r.length,d=0;d<h;d+=1)e=r[d>>2]>>8*(3-d%4),n+=w.charAt(e>>4&15)+w.charAt(15&e);
						return n
				}
				(nr)
}