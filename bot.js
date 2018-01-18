var bot = new RiveScript;
var fail_log = [];

var button = document.getElementById("submit");
var text  = document.getElementById("text");
var output = document.getElementById("output");

//load Rive files
bot.loadFile([
	"/home/rob/Desktop/chatbot/brain/begin.rive",
	"/home/rob/Desktop/chatbot/brain/main.rive",
], loading_done, loading_error);

function loading_done (batch_num) {
	bot.sortReplies();
	var reply = bot.reply("local-user", "introduction");
	addMessage('bot',reply)
}
function loading_error (error) {
	console.log("Error when loading files: " + error);
}


//add message to html
function addMessage(who,string) {
	var chat = document.getElementById('chat');
	chat.innerHTML += '<div class="msg_wrap"><div class="message msg_'+who+'">'+string+'</div></div>';
	//scrolls page down to show new message
	window.scrollTo(0,document.body.scrollHeight);
}

function sendMessage(string) {
	var reply = bot.reply("local-user",string);
	addMessage('user',string);
	addMessage('bot',reply);
	if (reply === "Same.") {
		fail_log.push(string);
	}
}

//send message when submit button clicked
button.onclick = function() {
  var message = text.value;
  text.value = "";
  sendMessage(message);
};
//send message when enter is pressed
window.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
		var message = text.value;
		//if input box isn't emtpy when enter is pressed
		if(message!=="" && key === 13){
			text.value = "";
		  sendMessage(message);
		}
});
