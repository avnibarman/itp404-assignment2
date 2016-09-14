var string = {
name: "string",
pluralize: function(word){
    if (word.substring(word.length - 1) == "y"){
      console.log(word.substring(0,(word.length-1)) + "ies");
    }
    else{
      console.log(word + "s");
    }
}
};