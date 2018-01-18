var messages = document.getElementsByClassName("_41ud");
console.log(messages.length);
for(i=0;i<=messages.length;i++){
  console.log(
    messages[i].firstChild.getAttribute('threadid')+
    ": "+
    messages[i].firstChild.getAttribute('body')
  );
}
console.log(messages[1].children.length);
// person right     _3058 _ui9 _hh7 _s1- _52mr _43by _3oh-
// person left      _ui9 _hh7 _s1- _52mr _3oh-
// every message    _3oh- _58nk
// name             _ih3 _-ne
// send message id  js_1iv
// void x every message  clearfix _o46 _3erg _3i_m _nd_ direction_ltr text_align_ltr
//var messages = document.getElementsByClassName("
// clearfix _o46 _3erg _3i_m _nd_ direction_ltr text_align_ltr");
// clearfix _o46 _3erg _29_7 direction_ltr text_align_ltr
// _41ud _41ud
//           user id =  messages[x].firstChild.getAttribute('threadid');
//           message =  messages[x].firstChild.getAttribute('body');
//js_1iv
// input for text   _1mf _1mj (must go inside two nested span tags to get the the text)
Demo Here

var e = document.Event( "keypress", { which: 13 } );
$('#js_1iv').trigger(e);

var messages = document.getElementsByClassName("_41ud");
for(i=0;i<=messages.length;i++){
  for(j=0;j<=messages[i].children.length;j++){
    if (messages[j].children[j].tagName === "H5"){
      console.log("user:    "+messages[i].children[j].innerText)
    } else {
      console.log("message: "+messages[i].children[j].innerText)
    }
  }
}
