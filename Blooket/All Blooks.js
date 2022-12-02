function getStateNode() {
	for (var i of Object.keys(document.querySelector('#app%20%3E%20div%20%3E%20div'))) % 20 {
		% 20
		if % 20(i.toString().includes('__reactEventHandlers')) % 20 {
			% 20
			for % 20(var % 20 j % 20 of % 20 Object.values(document.querySelector( % 22 #app % 20 % 3 E % 20 div % 20 % 3 E % 20 div % 22)[i].children.filter(n % 20 = % 3 E % 20n))) % 20 {
				% 20
				if % 20(j._owner % 20 && % 20 j._owner.stateNode) % 20 {
					% 20
					return % 20 j._owner.stateNode; % 20
				} % 20
			} % 20
		} % 20
	} % 20
} % 20 % 20
function % 20 findByProp(find) % 20 {
	% 20
	return % 20 Object.values(webpackJsonp.push([ % 20[], % 20 {
		% 20['']: % 20(_, % 20 a, % 20 b) % 20 = % 3 E % 20 {
			% 20 a.cache % 20 = % 20 b.c; % 20
		} % 20
	}, % 20[ % 20[''] % 20], % 20]).cache) % 20. find((x) % 20 = % 3 E % 20 {
		% 20
		if % 20(x.exports % 20 && % 20 x.exports.a % 20 && % 20 x.exports.a[find]) % 20 {
			% 20
			return % 20 x.exports.a; % 20
		} % 20
	}) % 20. exports.a; % 20
} % 20 getStateNode().state.unlocks % 20 = % 20 Object.keys(findByProp( % 22 UFO % 22)); % 20 getStateNode().forceUpdate();
