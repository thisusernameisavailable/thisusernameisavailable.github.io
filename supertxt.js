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
        let add = document.createElement('div');
        div.className = "added";
        div.innerHTML = "<p id=" + id + ">" + added + "</p>";
        i++;
  document.body.append(div);
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
    ScratchExtensions.register('No Tether', descriptor, ext);
})({});
