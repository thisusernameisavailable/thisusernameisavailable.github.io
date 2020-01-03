// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

(function(ext) {
    var i = 0;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.AddText = function(added, id){
        document.write ("<p id=\"" + id + "\" style=\"top: -9990px\">" + added + "</p>");
        showPage(editorId);
        i++;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'Include text: %s with id: %s', 'AddText', "Hello World!", "hello"],
            [' ', 'Change font of id: %s to: %m.fonts', 'FontChange', 1, 'Sans Serif'],
        ],
        menus: {
            fonts: ['Sans Serif', 'Serif', 'Comic Sans'],
        },
    };

    // Register the extension
    ScratchExtensions.register('DOM Scratch', descriptor, ext);
})({});
