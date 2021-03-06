

(function(ext) {
    var i = 0;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.AddText = function(added, id, placeX, placeY){
        const myPlaceX = placeX
        const myPlaceY = placeY    
        const paragraph = document.createElement('p') // Creates a <p> element
        paragraph.id = id // Set the id attribute
        paragraph.style.left = myPlaceX + 'px'
        paragraph.style.top = myPlaceY + 'px' // Set the CSS in the style attribute
        paragraph.innerHTML = added // Set the html inside of the <p> element
        document.body.appendChild(paragraph) // Add the <p> element to the <body>
        i++;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'Include text: %s with id: %s x: %n y: %n', 'AddText', "Hello World!", "Hello", "0", "0"],
            [' ', 'Change font of id: %s to: %m.fonts', 'FontChange', 1, 'Sans Serif'],
        ],
        menus: {
            fonts: ['Sans Serif', 'Serif', 'Comic Sans'],
        },
    };

    // Register the extension
    ScratchExtensions.register('DOM Scratch', descriptor, ext);
})({});
