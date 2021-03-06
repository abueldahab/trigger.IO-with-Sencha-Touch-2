Ext.application({
    name: 'OnNotes',

    requires: [
        'Ext.MessageBox'
    ],
    
    controllers: ["Notes"],

    views: ["NoteListContainer",'NotesList',"NoteEditor"],
    models: ["Note"],
    stores: ["Notes"],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        console.log("Application Started");
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var notesListContainer = {
            xtype: "noteslistcontainer"
        };
        var noteEditor = {
            xtype: "noteeditor"
        };

        Ext.Viewport.add([notesListContainer,noteEditor]);
        //Ext.Viewport.add({xtype: "noteslistcontainer"},{xclass: "noteeditor"});
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
