var code = document.getElementById('code');
var git = document.getElementById('open');
var youtube = document.getElementById('youtube');
var adventure = document.getElementById('adventure');

var codeText = code.innerHTML;
var gitText = git.innerHTML;
var youText = youtube.innerHTML;
var advText = adventure.innerHTML;

var cHover = document.getElementById('jobCont1');
var gHover = document.getElementById('jobCont2');
var yHover = document.getElementById('jobCont3');
var aHover = document.getElementById('jobCont4');

cHover.addEventListener('mouseover', function() {
    code.innerHTML = "HTML5/CSS3, PHP, JS, Python, Java, Wordpress, SQL";
}, false);

cHover.addEventListener('mouseleave', function() {
    code.innerHTML = codeText;
}, false);

gHover.addEventListener('mouseover', function() {
    git.innerHTML = "<a href='http://www.github.com/jtimko'>http://www.github.com/jtimko</a>";
}, false);

gHover.addEventListener('mouseleave', function() {
    git.innerHTML = gitText;
}, false);

yHover.addEventListener('mouseover', function() {
    youtube.innerHTML = "<a href='https://www.youtube.com/channel/UChrNX9DEuX74mc1EJwbgWWA'>https://www.youtube.com/channel/UChrNX9DEuX74mc1EJwbgWWA</a>";
}, false);

yHover.addEventListener('mouseleave', function() {
    youtube.innerHTML = youText;
}, false);

aHover.addEventListener('mouseover', function() {
    adventure.innerHTML = "<a href='https://www.instagram.com/soloxdead'>https://www.instagram.com/soloxdead</a>";
}, false);

aHover.addEventListener('mouseleave', function() {
    adventure.innerHTML = advText;
}, false);