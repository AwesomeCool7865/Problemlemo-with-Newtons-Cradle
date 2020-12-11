class Bob {
    constructor(x) {
      var options = {
          'restitution':0.04,
          'friction':0.5,
          'density':1.2
          
      }
      this.body = Bodies.circle(x, 700, 40 ,options);

      this.radius= 40

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill ('white');
      rectMode(CENTER);
      rect( 0, 0, this.radius, this.radius);
      pop();
    }
  };
  