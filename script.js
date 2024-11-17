function PlaySound(path)
{

  var audioElem = new Audio();
  audioElem.src = path;
  audioElem.loop = true;
  audioElem.play();
  
}
