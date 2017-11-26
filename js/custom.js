function IconRollOver(item, loc, message) {
    
    var itemChange = document.getElementById(item);
    var itemTextHolder = itemChange.innerHTML;
    var itemNewMessage = message;
    var location = document.getElementById(loc);

    function setup() {
        location.addEventListener('mouseover', function() {
            itemChange.innerHTML = itemNewMessage;
        }, false);
        location.addEventListener('mouseleave', function() {
            itemChange.innerHTML = itemTextHolder;
        }, false);
    };
    setup();
};

var code = new IconRollOver('code', 'jobCont1', "HTML5/CSS3, PHP, JS, Python, Java, Wordpress, SQL");
var git = new IconRollOver('open', 'jobCont2', "<a href='http://www.github.com/jtimko'>http://www.github.com/jtimko</a>");
var youtube = new IconRollOver('youtube', 'jobCont3', "<a href='https://www.youtube.com/channel/UChrNX9DEuX74mc1EJwbgWWA'>https://www.youtube.com/channel/UChrNX9DEuX74mc1EJwbgWWA</a>");
var adventure = new IconRollOver('adventure', 'jobCont4', "<a href='https://www.instagram.com/soloxdead'>https://www.instagram.com/soloxdead</a>");