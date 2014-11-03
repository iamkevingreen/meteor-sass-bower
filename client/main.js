Meteor.subscribe('words');

Template.body.events({
  "click button": function() {
    Meteor.call("words");
    console.log('click');
  }
})


Template.s3_tester.events({
    "click button.upload": function(){
        var files = $("input.file_bag")[0].files
        S3.upload(files,"/subfolder",function(e,r){
            console.log(r);
        });
    }
})

Template.s3_tester.helpers({
    "files": function(){
        return S3.collection.find();
    }
})
