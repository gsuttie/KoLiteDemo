var ViewModel = function() {


    var self = this;
    
    self.address1 = ko.observable().extend({ required: true });;
    self.address2 = ko.observable();
    self.address3 = ko.observable();
    self.address4 = ko.observable();

    self.dirtyFlag = new ko.DirtyFlag([self.address1, self.address2], false);

    self.savePerson = function (complete) {
        var data = "";

        var saveUrl = "/people/save/";

        PostJSON(saveUrl, data, complete);
        
        // Resync Changes
        self.dirtyFlag().reset();
        self.address1("");
        self.address2("");
        self.address3("");
        self.address4("");
    };

    self.isDirty = ko.computed(function () { return self.dirtyFlag().isDirty(); });

    self.saveCommand = ko.asyncCommand({
        execute: function(complete) {
            $.when(self.savePerson(complete));
        }
    });
};

ko.applyBindings(new ViewModel()); // This makes Knockout get to work