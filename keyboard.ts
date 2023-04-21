import { KeyboardType } from "./common/type";

export default class Keyboard {
  name: KeyboardType;
  music: string;

  constructor(name: KeyboardType, music: string) {
    this.name = name;
    this.music = music;
  }

  play() {
    console.log(`${this.name}`);
  }
}
