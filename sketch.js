const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit;
var rope;
var fruit_con;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,680,600,20);
  rope = new Rope(7, {x:245,y:30});

  //01. criar opções fisicas da fruta
  
  //02.criar corpo da fruta posições x 300,y 300,largura 20
  
  //03.adicionar fruta ao composite

  //04. ligar a fruta em seu composite com constraint

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  ground.show();
  rope.show();

  ellipse(fruit.position.x,fruit.position.y,30,30);
}
