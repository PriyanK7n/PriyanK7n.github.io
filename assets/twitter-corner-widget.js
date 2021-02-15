function twitterWidgetUsername() {
	if (document.currentScript.hasAttribute("data-username")) {
		return document.currentScript.getAttribute("data-username");
	}
	return "";
}
function twitterWidgetColor() {
	if (document.currentScript.hasAttribute("data-color")) {
		if (document.currentScript.getAttribute("data-color") != "") {
			return document.currentScript.getAttribute("data-color");
		}
	}
	return "#1da1f2";
}
var paths =
	'<path d="M0,0 L250,250 L250,0 Z"></path><path fill="white" id="twitter-bird-body" d="m113.916 115.568c30.019 30.019 71.308 21.567 92.876 0 .706-.707 1.409-1.41 2.062-2.158a46.962 46.962 0 0 0 16.591-.305 46.071 46.071 0 0 1-11.942-6.806 23.162 23.162 0 0 0 16.202-1.852 46.256 46.256 0 0 1-14.325-6.402 23.103 23.103 0 0 0-42.699-12.929 60 60 0 0 1-45.531 15.493 46.314 46.314 0 0 1-27.269-13.269 46.985 46.985 0 0 1-3.65-4.12 65.345 65.345 0 0 0 17.698 32.335"/><path fill="white" id="twitter-bird-wing1" d="m172.681 85.116a65.529 65.529 0 0 1-16.584-50.689 23.099 23.099 0 0 0-16.734 26.84 22.909 22.909 0 0 1-5.365-9.45c-.067.067-.137.137-.207.207a23.09 23.09 0 0 0-2.905 29.092 23.045 23.045 0 0 1-7.65-7.089 23.108 23.108 0 0 0 3.914 26.582 46.314 46.314 0 0 0 45.531-15.493"/><path fill="white" id="twitter-bird-wing2" d="m172.681 85.116a65.529 65.529 0 0 1-16.584-50.689 23.099 23.099 0 0 0-16.734 26.84 22.909 22.909 0 0 1-5.365-9.45c-.067.067-.137.137-.207.207a23.09 23.09 0 0 0-2.905 29.092 23.045 23.045 0 0 1-7.65-7.089 23.108 23.108 0 0 0 3.914 26.582 46.314 46.314 0 0 0 45.531-15.493"/>';
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.id = "twitter-corner-logo";
svg.setAttribute("width", "80");
svg.setAttribute("height", "80");
svg.setAttribute("viewBox", "0 0 250 250");
svg.setAttribute("style", "fill: " + twitterWidgetColor() + "; position: fixed; top: 0; border: 0; right: 0; z-index: 100000");
svg.setAttribute("aria-hidden", "true");
svg.innerHTML = paths;
var a = document.createElement("a");
a.setAttribute("href", "https://www.twitter.com/" + twitterWidgetUsername());
if (document.currentScript.hasAttribute("data-gtag")) {
	a.setAttribute("onmouseover", "gtag('event', 'hover',{ 'event_category': 'corner-widget' });");
	a.setAttribute("onclick", "gtag('event', 'click',{ 'event_category': 'corner-widget' });");
}
a.appendChild(svg);
let style = document.createElement("style");
style.innerHTML = `svg#twitter-corner-logo:hover #twitter-bird-wing1 {
    transform-origin: center;
    animation: flap 0.4s ease-out 3 alternate;
}
svg#twitter-corner-logo:hover #twitter-bird-wing2 {
    transform-origin: center;
    animation: flap 0.4s ease-in 3 alternate;
}
@keyframes flap {
    50% {
        transform: scaleY(-1) rotate(90deg) translate(-18px, 0px);
    }
}`;
document.currentScript.parentElement.insertBefore(a, document.currentScript);
document.currentScript.parentElement.insertBefore(style, document.currentScript);
