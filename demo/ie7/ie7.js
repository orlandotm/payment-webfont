/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'solo\'">' + entity + '</span>' + html;
	}
	var icons = {
		'solo-trust-e': '&#xe612;',
		'solo-amazon': '&#xe613;',
		'solo-jcb': '&#xe610;',
		'solo-google-wallet': '&#xe611;',
		'solo-stripe': '&#xe60d;',
		'solo-square': '&#xe60e;',
		'solo-ogone': '&#xe60f;',
		'solo-verisign': '&#xe60c;',
		'solo-diners': '&#xe609;',
		'solo-discover': '&#xe60a;',
		'solo-logo': '&#xe619;',
		'solo-american-express': '&#xe607;',
		'solo-paypal': '&#xe604;',
		'solo-maestro': '&#xe605;',
		'solo-mastercard': '&#xe602;',
		'solo-visa': '&#xe601;',
		'solo-visa-electron': '&#xe606;',
		'solo-postepay': '&#xe608;',
		'solo-cartasi': '&#xe60b;',
		'solo-unionpay': '&#xe603;',
		'solo-ec': '&#xe600;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/solo-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
