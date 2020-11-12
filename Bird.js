class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.blueimage = loadImage("sounds/bluebird.png");
    this.yellowimage = loadImage("sounds/yellowbird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
    this.Visiblity = 255
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if (this.body.velocity.x > 10 && this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    for(var i = 0; i < this.trajectory.length; i++) {
      push();
      this.Visiblity = this.Visiblity - 0.3;
      tint(255, this.Visiblity);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
  displayred() {
  var angle = this.body.angle
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate (angle)
  imageMode (CENTER)
  image(this.image,0,0,this.width,this.height)
  pop ();
  }
  displayyellow() {
    var angle = this.body.angle
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate (angle)
    imageMode (CENTER)
    image(this.yellowimage,0,0,this.width,this.height)
    pop ();
  }
  displayblue() {
    var angle = this.body.angle
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate (angle)
    imageMode (CENTER)
    image(this.blueimage,0,0,this.width,this.height)
    pop ();
  }
  }
  

