var fileNames = new Array();
$.ajax({
  url: "assets/images/galery/",
  success: function(data){
     $(data).find("li").each(function(){
         console.log($(this).attr("href"));
        if(openFile($(this).attr("href"))){
            fileNames.push($(this).attr("href"));
        }           
     });
  }
}); 
console.log(fileNames);
function openFile(file) {
    console.log(file);
    var extension = file.substr( (file.lastIndexOf('.') +1) );
    switch(extension) {
        case 'jpg':
        case 'png':
        case 'gif':   // the alert ended with pdf instead of gif.
        case 'zip':
        case 'rar':
        case 'pdf':
        case 'php':
        case 'doc':
        case 'docx':
        case 'xls':
        case 'xlsx':
            return true;
        default:
            return false;
    }
};