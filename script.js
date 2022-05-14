$('a[href*=#]').click(function(){return false;});

var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
	wrap: $('#people'),
	people: [ 
		{name: '', age: "Bấm vào trái tim bên dưới đi :3", img: "./0.jpg"},
		{name: '', age: "Hé nhô pạn Linh", img: "./1.jpg"},
		{name: '', age: "Mìn làm cái trò mèo này vào ngày 14/5/2022", img: "./2.jpeg"},
		{name: '', age: `Và hôm nay là ngày ${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`, img: "./3.jpg"},
		{name: '', age: 'Đây là trang web mìn làm riêng cho cậu đóa!', img: "./5.jpg"},
		{name: '', age: 'Cậu có thích khum?', img: "./4.jpg"},
		{name: '', age: 'Lưu ý!!!', img: "./10.jpg"},
		{name: '', age: 'Cậu sắp bước vào khu vực cấm rồi đó!!!', img: "./7.jpg"},
		{name: '', age: 'Mìn yêu cầu cậu dừng lại!!!', img: "./6.jpeg"},
		{name: '', age: 'Nếu không cậu sẽ gặp thiên thần đáng êu của mìn đóa!!!', img: "./3.jpg"},
		{name: '', age: '', img: "./l1.jpg"},
		{name: '', age: '', img: "./l3.jpg"},
		{name: '', age: '', img: "./l4.jpg"},
		{name: '', age: '', img: "./l5.jpg"}
	],
	counter : 0,
	add: function(){
		if (this.counter < this.people.length){
			var random = this.people[this.counter];
			if (random.age == ""){
				this.wrap.append("<div class='person'><img alt='" + random.name + "' src='" + random.img + "' /></div>");
			}else{
				this.wrap.append("<div class='person'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + "Duy said: " + "</strong> " + random.age + "</span></div>");
			}
			this.counter ++;

		}
		else{
			console.log('quá giới hạn');
		}
		// var random = this.people[Math.floor(Math.random() * this.people.length)];
	}
};

var App = {
	yesButton: $('.button.yes .trigger'),
	noButton: $('.button.no .trigger'),
	blocked: false,
	like: function(liked){
		var animate = liked ? 'animateYes' : 'animateNo';
		var self = this;
		if(!this.blocked){
		  this.blocked = true;
		  	$('.person').eq(0).addClass(animate).one(animationEndEvent, function(){
	   			$(this).remove();
				Person.add();
				self.blocked = false;
			});
		}
	}
};

var Phone = {
	wrap: $('#phone'),
	clock: $('.clock'),
	updateClock: function(){
		var date = new Date();
		var hours = date.getHours();
		var min = date.getMinutes();
     hours = (hours < 10 ? "0" : "") + hours;
		min = (min < 10 ? "0" : "") + min;
		var str = hours + ":" + min;
		this.clock.text(str);
	}
}
  
App.yesButton.on('mousedown', function(){
	App.like(true);
	console.log('ok');
});

App.noButton.on('mousedown', function(){
	App.like(false);
});

$(document).ready(function(){
  Phone.updateClock(); 
  setInterval('Phone.updateClock()', 1000);
  Person.add();
  Person.add();
  Person.add();
  Person.add();
});