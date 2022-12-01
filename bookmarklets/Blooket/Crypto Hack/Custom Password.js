var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.prompt = iframe.contentWindow.prompt;
var hack = Object.values(document.querySelector('#app%20%3E%20div%20%3E%20div'))[1].children[1]['_owner'].stateNode; % 20
var % 20 pass % 20 = % 20 prompt( % 22 What % 20 password ? % 22, % 20 % 22 password % 22); % 20 % 20 hack.setState({
	% 20 password: % 20 pass % 20
});
