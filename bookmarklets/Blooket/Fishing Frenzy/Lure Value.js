var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.alert = iframe.contentWindow.alert;
window.prompt = iframe.contentWindow.prompt;
var hack = Object.values(document.querySelector('#app%20%3E%20div%20%3E%20div'))[1].children[1]._owner.stateNode; % 20 % 20
var % 20 lure % 20 = % 20 parseInt(prompt('Lure%20value?%20(1%20to%205)')) % 20 - % 201; % 20 hack.setState({
	% 20 % 20 % 20 % 20 % 20 lure: % 20 lure % 20
}); % 20 alert( % 60 Lure % 20 set % 20 to % 20 $ {
	lure % 20 + % 201
}! % 60);
