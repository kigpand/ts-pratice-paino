import MusicPlayer from "./musicPlayer";

function test() {
  const musicPlayer = new MusicPlayer();
  musicPlayer.onPainoPlay("Do");
  musicPlayer.play();
}

test();
