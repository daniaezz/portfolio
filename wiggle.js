#


p5 = new P5()

shape(2, 0.001, ()=>p5.mouseX/p5.width/2+0.01).modulateScrollY(noise(()=> 1*4,0.2).scale(3*0.8,1,5)).blend(o0, 0.3).mult(osc(10, 0.1, 1).color(3.5, 3.0, 3.0)).blend(o0).blend(o0, 0.7).out(o0)

p5.width
