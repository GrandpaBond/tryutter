class vox {
part1:soundExpression.Sound;
part2:soundExpression.Sound;
part3:soundExpression.Sound;
}

let myVox=new vox;
myVox.part1.volume = 50
music.playSoundEffect((myVox.part1.src as SoundExpression), SoundExpressionPlayMode.UntilDone);
