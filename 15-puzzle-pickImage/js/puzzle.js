"use strict"; //this activates strict mode

//globally declared variables
var gamePiece;
var notify;
var timer;
var spaceY;
var spaceX;

window.onload = function () {
  startGame();

  $(function () {
    $("#overall").hide();
  });

  // var puzzleArea = document.getElementById('puzzlearea');
  // gamePiece = puzzleArea.getElementsByTagName('div'); retrieve element within puzzlearea

  // for (var i=0; i<gamePiece.length; i++) {//applies features to each puzzle piece

  // 	gamePiece[i].className = 'puzzlepiece'; setting up the puzzle piece code
  // 	gamePiece[i].style.left = (i%4*100)+'px'; calculates the position for puzzle pieces from the left of the screen
  // 	gamePiece[i].style.top = (parseInt(i/4)*100) + 'px'; calculates the position for puzzle pieces from the top of the screen
  // 	gamePiece[i].style.backgroundPosition= '-' + gamePiece[i].style.left + ' ' + '-' + gamePiece[i].style.top;
  //  calculates the position of the background picture so in moves in relation to the puzzle pieces
  // 	gamePiece[i].onmouseover = function() {//aplies features when mouse moves over puzzle pieces

  // 		if (checkMove(parseInt(this.innerHTML))) {//checks whenever a move is made
  // 			this.style.border = "1px solid red"; changes to red when a puzzle piece is near an empty space
  // 			this.style.color = "#006600"; text color changes to green when a puzzle piece is near an empty space
  // 			this.style.textDecoration = "underline"; underlines the number of the puzzle piece piece
  // 		    sets the image for the puzzle's background
  //             this.style.backgroundImage="url('./puzzle.jpg')";
  // 		}
  // 	};

  // 	gamePiece[i].onmouseout = function() {//activates whenever mouse moves out of puzzle piece
  // 	 this.style.border = "2px solid black"; reverts to its original size border
  // 		this.style.color = "#000000"; reverts to original text color
  // 		this.style.textDecoration = "none"; reverts to original text state
  // 	};

  // 	gamePiece[i].onclick = function() {//activates when mouse clicks on a puzzle piece

  // 		if (checkMove(parseInt(this.innerHTML))) {//checks whether or not the puzzle piece can move into an empty space
  // 			swap(this.innerHTML-1); moves into an empty space if true

  // 			if (finish()) {//checks when the all the 15 pieces are in its right space
  // 				win(); alerts the player that they have won the game
  // 			}
  // 			return;
  // 		}
  // 	};
  // }

  // var shuffle = document.getElementById('shufflebutton'); initializes the shuffle button

  // spaceX = '300px';
  // spaceY = '300px';

  // shuffle.onclick = function() {//activates whenever the shuffle button is clicked

  // 	for (var i=0; i<300; i++) {

  // 		var rand = parseInt(Math.random()* 100) %4; generates a random number for shuffling each piece

  // 		if (rand == 0){

  // 			var temp = up(spaceX, spaceY);
  // 			if ( temp != -1){
  // 				swap(temp);
  // 			}
  // 		}

  // 		if (rand == 1){

  // 			var temp = down(spaceX, spaceY);
  // 			if ( temp != -1) {
  // 				swap(temp);
  // 			}
  // 		}

  // 		if (rand == 2){
  // 			var temp = left(spaceX, spaceY);

  // 			if ( temp != -1){
  // 				swap(temp);
  // 			}
  // 		}

  // 		if (rand == 3){

  // 			var temp = right(spaceX, spaceY);

  // 			if (temp != -1){
  // 				swap(temp);
  // 			}
  // 		}
  // 	}
  // };
};

function startGame(image) {
  $(function () {
    $("#overall").show();
  });

  console.log(image);
  var puzzleArea = document.getElementById("puzzlearea");
  gamePiece = puzzleArea.getElementsByTagName("div"); //retrieve element within puzzlearea

  //var myImage = './puzzle.jpg';
  var myImage2 = "./p.jpg";
  for (var i = 0; i < gamePiece.length; i++) {
    //applies features to each puzzle piece

    gamePiece[i].className = "puzzlepiece"; //setting up the puzzle piece code
    gamePiece[i].style.left = (i % 4) * 100 + "px"; //calculates the position for puzzle pieces from the left of the screen
    gamePiece[i].style.top = parseInt(i / 4) * 100 + "px"; //calculates the position for puzzle pieces from the top of the screen
    gamePiece[i].style.backgroundPosition = "-" + gamePiece[i].style.left + " " + "-" + gamePiece[i].style.top;
    //calculates the position of the background picture so in moves in relation to the puzzle pieces
    gamePiece[i].onmouseover = function () {
      //aplies features when mouse moves over puzzle pieces

      if (checkMove(parseInt(this.innerHTML))) {
        //checks whenever a move is made
        this.style.border = "1px solid red"; //changes to red when a puzzle piece is near an empty space
        this.style.color = "#006600"; //text color changes to green when a puzzle piece is near an empty space
        this.style.textDecoration = "underline"; //underlines the number of the puzzle piece piece
        //sets the image for the puzzle's background
        this.style.backgroundImage = "url(" + image + ")";
        //$('#myBanner').css("background", "url("+bgImg+")");
      }
    };

    gamePiece[i].onmouseout = function () {
      //activates whenever mouse moves out of puzzle piece
      //this.style.border = "2px solid black"; reverts to its original size border
      this.style.color = "#000000"; //reverts to original text color
      this.style.textDecoration = "none"; //reverts to original text state
    };

    gamePiece[i].onclick = function () {
      //activates when mouse clicks on a puzzle piece

      if (checkMove(parseInt(this.innerHTML))) {
        //checks whether or not the puzzle piece can move into an empty space
        swap(this.innerHTML - 1); //moves into an empty space if true

        if (finish()) {
          //checks when the all the 15 pieces are in its right space
          win(); //alerts the player that they have won the game
        }
        return;
      }
    };
  }

  var shuffle = document.getElementById("shufflebutton"); //initializes the shuffle button

  spaceX = "300px";
  spaceY = "300px";

  shuffle.onclick = function () {
    //activates whenever the shuffle button is clicked

    for (var i = 0; i < 300; i++) {
      var rand = parseInt(Math.random() * 100) % 4; //generates a random number for shuffling each piece

      if (rand == 0) {
        var temp = up(spaceX, spaceY);
        if (temp != -1) {
          swap(temp);
        }
      }

      if (rand == 1) {
        var temp = down(spaceX, spaceY);
        if (temp != -1) {
          swap(temp);
        }
      }

      if (rand == 2) {
        var temp = left(spaceX, spaceY);

        if (temp != -1) {
          swap(temp);
        }
      }

      if (rand == 3) {
        var temp = right(spaceX, spaceY);

        if (temp != -1) {
          swap(temp);
        }
	  }
	  
	}
	audio();
  };
}
function audio() {
	var audio = new Audio();
	audio.src = "mict.mp3";
	audio.play();
	audio.volume(2.2);
	audio.loop(true);
  }
function checkMove(position) {
  // returns true whenever a piece can be moved into an empty space

  if (left(spaceX, spaceY) == position - 1) {
    return true;
  }

  if (down(spaceX, spaceY) == position - 1) {
    return true;
  }

  if (up(spaceX, spaceY) == position - 1) {
    return true;
  }

  if (right(spaceX, spaceY) == position - 1) {
    return true;
  }
}

function Notify() {
  //notifies the user

  notify--; //decrements the value of

  if (notify == 0) {
    //if the value reaches the end then

    var body = document.getElementsByTagName("body"); //retrieves body element in html

    body[0].style.backgroundImage = "none"; //reverts to original page background

    swal({
		title: "Good job!",
		text: "You're a Winner!", 
		icon: "success", 
		button: {
		  text:"Okay",
		}
  
	  }); //tells the user that they have won the game

	  confetti(); // Calls the fuction confetti on lines 

    var para = document.getElementsByClassName("explanation");
    para[0].style.visibility = "visible"; //reverts visiblity to its original state

    return;
  } else if (notify % 2) {
    var body = document.getElementsByTagName("body");

    body[0].style.backgroundImage = "url('p.jpeg')";
    //sets background pic to show user that they had completed the puzzle
  }

  timer = setTimeout(Notify, 200); //notifies the user for 2 secs
}

function win() {
  //notifies user that they have won
  var body = document.getElementsByTagName("body");

  //body[0].style.backgroundImage= "url('http://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_go/boxart.jpg')";
  body[0].style.backgroundImage = "url('p.jpeg')";
  notify = 10; //initializes notify variable

  timer = setTimeout(Notify, 200);

  var para = document.getElementsByClassName("explanation");
  para[0].style.visibility = "hidden"; //hides text when user is being notified
}

function finish() {
  //checks when the game reaches its end

  var flag = true;

  for (var i = 0; i < gamePiece.length; i++) {
    //for each puzzle piece

    var top = parseInt(gamePiece[i].style.top);
    var left = parseInt(gamePiece[i].style.left);

    if (left != (i % 4) * 100 || top != parseInt(i / 4) * 100) {
      //checks if each piece matches its left and top position
      flag = false;
      break;
    }
  }
  return flag;
}

function left(x, y) {
  //calculates how far to the left a puzzlepiece should position

  var cordX = parseInt(x);
  var cordY = parseInt(y);

  if (cordX > 0) {
    for (var i = 0; i < gamePiece.length; i++) {
      if (parseInt(gamePiece[i].style.left) + 100 == cordX && parseInt(gamePiece[i].style.top) == cordY) {
        return i;
      }
    }
  } else {
    return -1;
  }
}

function right(x, y) {
  //calculates how far to the right a puzzlepiece should position

  var cordX = parseInt(x);
  var cordY = parseInt(y);

  if (cordX < 300) {
    for (var i = 0; i < gamePiece.length; i++) {
      if (parseInt(gamePiece[i].style.left) - 100 == cordX && parseInt(gamePiece[i].style.top) == cordY) {
        return i;
      }
    }
  } else {
    return -1;
  }
}

function up(x, y) {
  //calculates how far up a puzzlepiece should position

  var cordX = parseInt(x);
  var cordY = parseInt(y);

  if (cordY > 0) {
    for (var i = 0; i < gamePiece.length; i++) {
      if (parseInt(gamePiece[i].style.top) + 100 == cordY && parseInt(gamePiece[i].style.left) == cordX) {
        return i;
      }
    }
  } else {
    return -1;
  }
}

function down(x, y) {
  //calculates how far down a puzzlepiece should position

  var cordX = parseInt(x);
  var cordY = parseInt(y);

  if (cordY < 300) {
    for (var i = 0; i < gamePiece.length; i++) {
      if (parseInt(gamePiece[i].style.top) - 100 == cordY && parseInt(gamePiece[i].style.left) == cordX) {
        return i;
      }
    }
  } else {
    return -1;
  }
}

function swap(position) {
  //moves the puzzle piece by switching position with an empty space

  var temp = gamePiece[position].style.top;

  gamePiece[position].style.top = spaceY;
  spaceY = temp;
  temp = gamePiece[position].style.left;
  gamePiece[position].style.left = spaceX;
  spaceX = temp;
}
function confetti() {
	"use strict";
  
	// If set to true, the user must press
	// UP UP DOWN ODWN LEFT RIGHT LEFT RIGHT A B
	// to trigger the confetti with a random color theme.
	// Otherwise the confetti constantly falls.
	var onlyOnKonami = false;
  
	$(function () {
	  // Globals
	  var $window = $(window),
		random = Math.random,
		cos = Math.cos,
		sin = Math.sin,
		PI = Math.PI,
		PI2 = PI * 2,
		timer = undefined,
		frame = undefined,
		confetti = [];
  
	  // Settings
	  var konami = [
		  38,
		  38,
		  40,
		  40,
		  37,
		  39,
		  37,
		  39,
		  66,
		  65
		],
		pointer = 0;
  
	  var particles = 150,
		spread = 40,
		sizeMin = 3,
		sizeMax = 12 - sizeMin,
		eccentricity = 10,
		deviation = 100,
		dxThetaMin = -0.1,
		dxThetaMax = -dxThetaMin - dxThetaMin,
		dyMin = 0.13,
		dyMax = 0.18,
		dThetaMin = 0.4,
		dThetaMax = 0.7 - dThetaMin;
  
	  var colorThemes = [
		function () {
		  return color((200 * random()) | 0, (200 * random()) | 0, (200 * random()) | 0);
		},
		function () {
		  var black = (200 * random()) | 0;
		  return color(200, black, black);
		},
		function () {
		  var black = (200 * random()) | 0;
		  return color(black, 200, black);
		},
		function () {
		  var black = (200 * random()) | 0;
		  return color(black, black, 200);
		},
		function () {
		  return color(200, 100, (200 * random()) | 0);
		},
		function () {
		  return color((200 * random()) | 0, 200, 200);
		},
		function () {
		  var black = (256 * random()) | 0;
		  return color(black, black, black);
		},
		function () {
		  return colorThemes[
			random() < 0.5
			  ? 1
			  : 2
		  ]();
		},
		function () {
		  return colorThemes[
			random() < 0.5
			  ? 3
			  : 5
		  ]();
		},
		function () {
		  return colorThemes[
			random() < 0.5
			  ? 2
			  : 4
		  ]();
		}
	  ];
  
	  function color(r, g, b) {
		return "rgb(" + r + "," + g + "," + b + ")";
	  }
  
	  // Cosine interpolation
	  function interpolation(a, b, t) {
		return (1 - cos(PI * t)) / 2 * (b - a) + a;
	  }
  
	  // Create a 1D Maximal Poisson Disc over [0, 1]
	  var radius = 1 / eccentricity,
		radius2 = radius + radius;
  
	  function createPoisson() {
		// domain is the set of points which are still available to pick from
		// D = union{ [d_i, d_i+1] | i is even }
		var domain = [
			radius, 1 - radius
		  ],
		  measure = 1 - radius2,
		  spline = [0, 1];
		while (measure) {
		  var dart = measure * random(),
			i,
			l,
			interval,
			a,
			b,
			c,
			d;
  
		  // Find where dart lies
		  for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
			(a = domain[i]),
			(b = domain[i + 1]),
			(interval = b - a);
			if (dart < measure + interval) {
			  spline.push((dart += a - measure));
			  break;
			}
			measure += interval;
		  }
		  (c = dart - radius),
		  (d = dart + radius);
  
		  // Update the domain
		  for (i = domain.length - 1; i > 0; i -= 2) {
			(l = i - 1),
			(a = domain[l]),
			(b = domain[i]);
			// c---d          c---d  Do nothing
			//   c-----d  c-----d    Move interior
			//   c--------------d    Delete interval
			//         c--d          Split interval
			//       a------b
			if (a >= c && a < d) 
			  if (b > d) 
				domain[l] = d; // Move interior (Left case)
			  else 
				domain.splice(l, 2)// Delete interval;;;
			  else if (a < c && b > c) 
				if (b <= d) 
				  domain[i] = c; // Move interior (Right case)
				else 
				  domain.splice(i, 0, c, d); // Split interval
				}
			  
		  // Re-measure the domain
		  for (i = 0, l = domain.length, measure = 0; i < l; i += 2) 
			measure += domain[i + 1] - domain[i];
		  }
		
		return spline.sort();
	  }
  
	  // Create the overarching container
	  var container = document.createElement("div");
	  container.style.position = "fixed";
	  container.style.top = "0";
	  container.style.left = "0";
	  container.style.width = "100%";
	  container.style.height = "0";
	  container.style.overflow = "visible";
	  container.style.zIndex = "9999";
  
	  // Confetto constructor
	  function Confetto(theme) {
		this.frame = 0;
		this.outer = document.createElement("div");
		this.inner = document.createElement("div");
		this.outer.appendChild(this.inner);
  
		var outerStyle = this.outer.style,
		  innerStyle = this.inner.style;
		outerStyle.position = "absolute";
		outerStyle.width = sizeMin + sizeMax * random() + "px";
		outerStyle.height = sizeMin + sizeMax * random() + "px";
		innerStyle.width = "100%";
		innerStyle.height = "100%";
		innerStyle.backgroundColor = theme();
  
		outerStyle.perspective = "50px";
		outerStyle.transform = "rotate(" + 360 * random() + "deg)";
		this.axis = "rotate3D(" + cos(360 * random()) + "," + cos(360 * random()) + ",0,";
		this.theta = 360 * random();
		this.dTheta = dThetaMin + dThetaMax * random();
		innerStyle.transform = this.axis + this.theta + "deg)";
  
		this.x = $window.width() * random();
		this.y = -deviation;
		this.dx = sin(dxThetaMin + dxThetaMax * random());
		this.dy = dyMin + dyMax * random();
		outerStyle.left = this.x + "px";
		outerStyle.top = this.y + "px";
  
		// Create the periodic spline
		this.splineX = createPoisson();
		this.splineY = [];
		for (var i = 1, l = this.splineX.length - 1; i < l; ++i) 
		  this.splineY[i] = deviation * random();
		this.splineY[0] = this.splineY[l] = deviation * random();
  
		this.update = function (height, delta) {
		  this.frame += delta;
		  this.x += this.dx * delta;
		  this.y += this.dy * delta;
		  this.theta += this.dTheta * delta;
  
		  // Compute spline and convert to polar
		  var phi = (this.frame % 7777) / 7777,
			i = 0,
			j = 1;
		  while (phi >= this.splineX[j]) 
			i = j++;
		  var rho = interpolation(this.splineY[i], this.splineY[j], (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i]));
		  phi *= PI2;
  
		  outerStyle.left = this.x + rho * cos(phi) + "px";
		  outerStyle.top = this.y + rho * sin(phi) + "px";
		  innerStyle.transform = this.axis + this.theta + "deg)";
		  return this.y > height + deviation;
		};
	  }
  
	  function poof() {
		if (!frame) {
		  // Append the container
		  document.body.appendChild(container);
  
		  // Add confetti
		  var theme = colorThemes[
			  onlyOnKonami
				? (colorThemes.length * random()) | 0
				: 0
			],
			count = 0;
		  (function addConfetto() {
			if (onlyOnKonami && ++count > particles) 
			  return (timer = undefined);
			
			var confetto = new Confetto(theme);
			confetti.push(confetto);
			container.appendChild(confetto.outer);
			timer = setTimeout(addConfetto, spread * random());
		  })(0);
  
		  // Start the loop
		  var prev = undefined;
		  requestAnimationFrame(function loop(timestamp) {
			var delta = prev
			  ? timestamp - prev
			  : 0;
			prev = timestamp;
			var height = $window.height();
  
			for (var i = confetti.length - 1; i >= 0; --i) {
			  if (confetti[i].update(height, delta)) {
				container.removeChild(confetti[i].outer);
				confetti.splice(i, 1);
			  }
			}
  
			if (timer || confetti.length) 
			  return (frame = requestAnimationFrame(loop));
			
			// Cleanup
			document.body.removeChild(container);
			frame = undefined;
		  });
		}
	  }
  
	  $window.keydown(function (event) {
		pointer = konami[pointer] === event.which
		  ? pointer + 1
		  : + (event.which === konami[0]);
		if (pointer === konami.length) {
		  pointer = 0;
		  poof();
		}
	  });
  
	  if (!onlyOnKonami) 
		poof();
	  }
	);
  }
