window.onload = function() {

    alert("loaded");

    var layoutManager = new LayoutManager(document.getElementsByTagName("main")[0]);

    document.getElementByID("home").onclick = function(){
        loadPage("home", layoutManager);    
    };
};
