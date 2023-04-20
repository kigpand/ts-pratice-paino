export default class Keyboard {
  name: string;
  music: string;

  constructor(name: string, music: string) {
    this.name = name;
    this.music = music;
  }

  play() {
    console.log("play");
  }
}
