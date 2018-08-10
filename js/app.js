// ------------------ parent class AllSprites ----------------------
class AllSprites {
  constructor(sprite, x, y, speed) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// ------------------ children of AllSprites ----------------------
class Enemy extends AllSprites {
  constructor(sprite, x, y, speed) {
    super(sprite, x, y, speed);
    this.x -= 100; // make Enemy ease in naturally from left side
  }
  render() {
    super.render();
  }

  update(timeDelta) {
    this.x += this.speed * timeDelta; // this ensure the game run at same speed for all computer

    // when enemies go off canvas, reset position to start from left to right and increase speed
    if (this.x > 505) {
      this.x = -101;
      this.speed += 25;
    }
    // TODO: add collision checking
  }
}

class Player extends AllSprites {
  constructor(sprite, x, y, speed) {
    super(sprite, x, y, speed);
  }
  render() {
    super.render();
  }

  update() {
    // TODO: prevent player from going off the edges
    // TODO: player wins when reaches the top edge
  }

  handleInput(keyPress) {
    // do something when user click up down left right
  }
}

// Instantiate your Enemy
const allEnemies = [];
const enemy = new Enemy('images/enemy-bug.png', 0, Math.random() * 184 + 50, Math.random() * 256);
allEnemies.push(enemy);

// Place the player object in a variable called player
const player = new Player('images/char-boy.png', 200, 380, 50);

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
