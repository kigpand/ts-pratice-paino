import { KeyboardType } from "./common/type";
import { Tool } from "./interface/Tool";
import Keyboard from "./keyboard";

interface Paino extends Tool {
  onPainoPlay: (name: KeyboardType) => void;
}

export default class MusicPlayer implements Paino {
  private Do: Keyboard;
  private Re: Keyboard;
  private Me: Keyboard;
  private Pa: Keyboard;

  constructor() {
    this.Do = new Keyboard("Do", "Do");
    this.Re = new Keyboard("Re", "Re");
    this.Me = new Keyboard("Me", "Me");
    this.Pa = new Keyboard("Pa", "Pa");
  }

  onPainoPlay(name: KeyboardType) {
    if (name === "Do") return this.Do.play();
    if (name === "Re") return this.Re.play();
    throw new Error("request failed");
  }

  play() {
    console.log("play");
  }
}
