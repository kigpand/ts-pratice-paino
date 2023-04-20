import Keyboard from "./keyboard";

type KeyboardType = "Do" | "Re" | "Me" | "Pa" | "Sol" | "Ra" | "Si" | "HDo";

export default class Paino {
  private Do: Keyboard;

  constructor() {
    this.Do = new Keyboard("Do", "Do");
  }

  onPlay(name: KeyboardType) {
    if (name === "Do") {
      this.Do.play();
    }
  }
}
