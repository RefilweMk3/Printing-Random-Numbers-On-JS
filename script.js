var I;
var text = "";
{
  let i = 0;
  while (i<15){
    text+= "The values inside the block: "+ i +"<br><br>";
    i++;
  }
  document.getElementById("demo").innerHTML = text;
}

document.write("The value of i outside the block is: "+i);