#


p5 = new P5()

shape(200, 0.001, ()=>p5.mouseX/p5.width/2+0.01).modulateRepeat(noise(100,0.1).scale(3*0.8,1,5)).blend(o0, 0.3).mult(osc(10, 0.1, 1).color(3.5, 3.0, 3.0)).blend(o0).blend(o0, 0.7).out(o0)

p5.width

src(o0).add(src(s0).repeat(5,5).modulateScrollY(noise(()=> 2,0.0a2))).out(o2)
render(o2)

p5 = new P5()
s0.init({src: p5.canvas})
p5.hide()
p5.draw = ()=>{
  p5.background(0, 0, 0);
  p5.fill(255,255,255,100);
  p5.textSize(255);
  text = "projects"
  p5.text(text,width/2,height/2);
}
src(s0).repeat(5,5).modulateRotate(noise(2)).out()



shape(2, 0.001, 0.05+0.05).modulateScrollY(noise(4,0.2).scale(100*0.01*0.8,1,5))
.blend(o0, 0.3).mult(osc(10, 0.8, 1)
.color(3.5, 3.0, 3.0)).contrast(1).blend(o0)
.diff(src(s0).modulateScrollY(noise(()=>ccActual[12]*0.02, 0.2)))
.modulate(voronoi(()=>cc[14]*5,1))
.blend(o0).posterize(5)
.out(o0)



p5.remove()
p5 = new P5()
s0.init({src: p5.canvas})
p5.hide()
p5.draw = ()=>{
  p5.background(0, 0, 0);
  p5.fill(255,255,255,100);
  p5.textSize(255);
  text = "resume"
  p5.text(text,width/2,height/2);
}
src(s0).repeat(5,5).modulateScale(osc(10)).out()

solid().out()



//////wavey colours
shape(2).modulateScrollY(noise(0.3,0.01))
  .color(Math.random(),Math.random(),Math.random())
  .scale(0.5+0.1).diff(osc(100,0.01).luma()
  .modulate(noise(1))).diff(solid(1,1,1
  )).modulate(osc(10)).invert().out()


// zam
shape(2).modulateScrollY(noise(0.3,0.7))
  .color(Math.random(),Math.random(),Math.random())
  .scale(()=>cc[0]*0.5+0.1).diff(src(o0).rotate(1,-1)).out()

  voronoi(3).modulate(noise(()=>cc[0]*5+2)).color(50,10)
    .colorama().posterize(2).diff(solid(1,1,1)).out()


  hush()

  ////////amina likey

  shape(()=>cc[0]*5+2).modulate(noise(2))
    .add(osc(1,0.5,0.5).modulate(noise(1)).diff(solid(1,1,1)).modulateRepeat(osc(0.2)))
    .posterize(4).modulateRepeat(shape(()=>cc[0]*20)).out()



  //////wavey colours
  shape(2).modulateScrollY(noise(0.3,0.2))
    .color(Math.random(),Math.random(),Math.random())
    .scale(()=>cc[0]*1.5).diff(osc(3,0.5,7).thresh()
    .modulate(noise(2)).mult(solid(Math.random(),Math.random(),Math.random()))).diff(solid(1,1,1
    )).modulate(osc(10)).
    modulateScale(osc(1)).out()

  shape(5,.5,.5).modulate(noise(3,.1),.5).color(1,.3,.4)
    .mult(osc(10,.1,()=>cc[1]+0.4*2)).rotate(1,-.1).colorama()
    .diff(solid(1,.9,.531)).posterize(15).kaleid(()=> cc[0]*5)
    .blend(o1,0).out(o1)

  src(o1).modulateRepeat(noise(3)).modulateScale(o0)
    .blend(o0).blend(o0).blend(o0).blend(o0).out()

  // zam
  shape(2).modulateScrollY(noise(0.3,0.7))
    .color(Math.random(),Math.random(),Math.random())
    .scale(()=>cc[0]*0.5+0.1).diff(src(o0).rotate(1,-1)).out()

  shape(2,.6,.3).color(80,5,20).modulateRepeat(osc(1))
    .modulate(noise(2)).invert().posterize(15).out(o0)

  ///i like colour pallletetetet
  osc(.7,1,0.9).blend(shape(()=>cc[0]*5,0.2,.5).mask(osc())
      .rotate(1,-1),0.4)
    .color(1,.3,.4).colorama(.4).posterize(2).diff(solid(1,1,1)).rotate(0.1,-.01).out()
