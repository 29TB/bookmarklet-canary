krazete: ! function() {
		var d = {
				menu: document.createElement("div"),
				limit: document.createElement("input"),
				gap: document.createElement("input"),
				sag: document.createElement("input"),
				fov: document.createElement("input"),
				flo: document.createElement("input"),
				off: document.createElement("input"),
				non: document.createElement("input"),
				end: document.createElement("input"),
				tgl: document.createElement("input"),
				cssStatic: document.createElement("style"),
				cssDynamic: document.createElement("style"),
				orientation: {
					yaw: 0,
					pitch: 0,
					roll: 0
				},
				mouseMove: function(e) {
					d.orientation.yaw = 180 * -Math.cos(Math.PI * e.clientX / innerWidth) * d.limit.value, d.orientation.pitch = 180 * Math.cos(Math.PI * e.clientY / innerHeight) * d.limit.value, d.updateBody()
				},
				gyroMove: function(e) {
					innerWidth > innerHeight ? (d.orientation.yaw = -(e.alpha + e.beta), d.orientation.pitch = e.gamma - 90 * Math.sign(90 - Math.abs(e.beta))) : (d.orientation.yaw = -(e.alpha + e.gamma), d.orientation.pitch = e.beta - 90), d.updateBody()
				},
				updateOrigin: function(e) {
					document.body.style.transformOrigin = innerWidth / 2 + pageXOffset + % 22 px % 20 % 22 + (innerHeight / 2 + pageYOffset) + % 22 px % 22
				},
				updateBody: function() {
					document.body.style.transform = % 22 perspective( % 22 + Math.pow(2, d.fov.value) + % 22 px) % 20 translateZ(- % 22 + d.gap.value + % 22 px) % 20 rotateX( % 22 + d.orientation.pitch + % 22 deg) % 20 rotateY( % 22 + d.orientation.yaw + % 22 deg) % 22
				},
				updateCSS: function() {
					if (d.non.checked) d.cssDynamic.innerHTML = % 22 % 22;
					else % 20
					if (d.off.checked) d.cssDynamic.innerHTML = % 22 * % 20 {
						% 20 transform - style: % 20 preserve - 3 d; % 20
					} % 22;
					else {
						for (var % 20 e = 0; document.querySelector( % 22 body % 22 + % 22 % 20 % 3 E % 20 * % 22. repeat(e)); e++);
						var % 20 t = d.gap.value / e, n = -Math.PI * d.sag.value / e;
						d.cssDynamic.innerHTML = `%20*%20{%20transform:%20translateZ(${t}px)%20rotateX(${n}rad);%20transform-style:%20preserve-3d;%20transition:%20transform%201s;%20outline:%201px%20solid%20rgba(0,%200,%200,%200.0625);%20${d.flo.checked?%22overflow:%20visible%20!important;%22:%22%22}%20}%20*:hover%20{%20transform:%20translateZ(${2*t}px)%20rotateX(${2*n}rad);%20${d.flo.checked?%22%22:%22overflow:%20visible;%22}%20}%20`
					}
				},
				toggle: function() {
					% 22 active % 22 == d.menu.className ? d.menu.removeAttribute( % 22 class % 22) : d.menu.className = % 22 active % 22
				},
				quit: function() {
					window.removeEventListener( % 22 deviceorientation % 22, d.gyroMove), window.removeEventListener( % 22 mousemove % 22, d.mouseMove), window.removeEventListener( % 22 scroll % 22, d.updateOrigin), window.addEventListener( % 22 resize % 22, d.updateOrigin), d.menu.remove(), d.cssStatic.remove(), d.cssDynamic.remove(), document.body.removeAttribute( % 22 style % 22)
				},
				newRange: function(e, t, n, o, i, a, r) {
					d.menu.appendChild(e), e.type = % 22 range % 22, e.min = n, e.max = i, e.step = o, e.value = a, e.addEventListener( % 22 input % 22, r), d.menu.appendChild(document.createElement( % 22 span % 22)).innerHTML = t, d.menu.appendChild(document.createElement( % 22 br % 22))
				},
				newCheckbox: function(e, t, n) {
					d.menu.appendChild(e), e.type = % 22 checkbox % 22, e.addEventListener( % 22 click % 22, n), d.menu.appendChild(document.createElement( % 22 span % 22)).innerHTML = t, d.menu.appendChild(document.createElement( % 22 br % 22))
				},
				newButton: function(e, t, n) {
					d.menu.appendChild(e), e.type = % 22 button % 22, e.value = t, e.addEventListener( % 22 click % 22, n)
				},
				init: function() {
						document.body.parentNode.appendChild(d.menu).id = % 22 tri - menu % 22, d.newRange(d.limit, % 22 limit % 22, 0, .03125, 1, .125, d.updateBody), d.newRange(d.gap, % 22 gap % 20 / % 20 distance % 22, 0, 32, 512, 128, function() {
							d.updateCSS(), d.updateBody()
						}), d.newRange(d.sag, % 22 sag % 22, -.25, .03125, .25, 0, d.updateCSS), d.newRange(d.fov, % 22 field % 20 of % 20 view % 22, 7, 1, 13, 10, d.updateBody), d.newCheckbox(d.flo, % 22 force % 20 overflow % 22, d.updateCSS), d.flo.setAttribute( % 22 checked % 22, % 22 % 22), d.newCheckbox(d.off, % 22 flatten % 20 layers % 22, d.updateCSS), d.newCheckbox(d.non, % 22 flatten % 20 everything % 22, d.updateCSS), d.newButton(d.end, % 22 Quit % 22, d.quit), d.newButton(d.tgl, % 22 % E2 % 89 % A1 % 22, d.toggle), d.tgl.id = % 22 tri - toggle % 22, d.menu.appendChild(d.cssStatic).innerHTML = `%20html,%20body%20{%20transition-property:%20none;%20height:%20100%25;%20width:%20100%25;%20}%20html,%20html:hover,%20#tri-menu,%20#tri-menu%20%3E%20*,%20#tri-menu%20%3E%20*:hover%20{%20transform:%20none;%20outline:%20none;%20overflow:%20auto%20!important;%20float:%20none;%20}%20#tri-menu%20{%20position:%20fixed;%20top:%200;%20left:%200;%20background:%20rgba(0,%200,%200,%200.5);%20color:%20white;%20border:%201px%20solid%20rgba(255,%20255,%20255,%200.5);;%20border-radius:%200%200%2016px%200;%20padding:%208px;%20transform:%20translate(-100%25,%20-100%25)%20translate(32px,%2032px);%20}%20#tri-menu.active%20{%20transform:%20none;%20}%20#tri-toggle%20{%20position:%20absolute;%20bottom:%200;%20right:%200;%20height:%2032px;%20width:%2032px;%20background:%20transparent;%20color:%20white;%20border:%20none;%20cursor:%20pointer;%20}%20#tri-menu.active%20%3E%20#tri-toggle%20{%20background:%20white;%20color:%20black;%20border-radius:%208px%200%200%200;%20}%20%60,d.menu.appendChild(d.cssDynamic),d.updateCSS(),window.addEventListener(%22deviceorientation%22,d.gyroMove),window.addEventListener(%22mousemove%22,d.mouseMove),window.addEventListener(%22scroll%22,d.updateOrigin),window.addEventListener(%22resize%22,d.updateOrigin),window.scrollBy(0,1)}};d.init()}();
