var html = document.getElementById("iHtml");
          
// Adjusting the iframe height onload event
html.onload = function()
// function execute while load the iframe
{
    // set the height of the iframe as 
    // the height of the iframe content
    html.style.height = 
    (html.contentWindow.document.body.scrollHeight * 0.23) + 'px';

    html.style.width  = 
    html.contentWindow.document.body.scrollWidth+'px';
        
}

var http = document.getElementById("iHttp");
          
// Adjusting the iframe height onload event
http.onload = function()
// function execute while load the iframe
{
    // set the height of the iframe as 
    // the height of the iframe content
    http.style.height = 
    (http.contentWindow.document.body.scrollHeight * 0.18) + 'px';

    http.style.width  = 
    http.contentWindow.document.body.scrollWidth+'px';
        
}

var js = document.getElementById("iJs");
          
// Adjusting the iframe height onload event
js.onload = function()
// function execute while load the iframe
{
    // set the height of the iframe as 
    // the height of the iframe content
    js.style.height = 
    (js.contentWindow.document.body.scrollHeight * 0.15) + 'px';

    js.style.width  = 
    js.contentWindow.document.body.scrollWidth+'px';
        
}
var css = document.getElementById("iCss");
          
// Adjusting the iframe height onload event
css.onload = function()
// function execute while load the iframe
{
    // set the height of the iframe as 
    // the height of the iframe content
    css.style.height = 
    (css.contentWindow.document.body.scrollHeight * 0.1) + 'px';

    css.style.width  = 
    css.contentWindow.document.body.scrollWidth+'px';
        
}