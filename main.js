let actual=new Date();
let month=actual.setMonth();
if(0<=month&&month<=3)
{
	console.log("Fall");
}
else if(4<=month&&month<=7)
{
	console.log("Summer");
}
else
{
	console.log("Winter");
}