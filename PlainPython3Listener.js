import antlr4 from "antlr4";
import Python3Lexer from "./Python3Lexer.js";
import Python3Parser from "./Python3Parser.js";
import Python3Listener from "./Python3Listener.js";

export default class PlainPython3Listener extends Python3Listener {
  constructor(res) {
    super();
    this.Res = res;
  }

  enterSingle_input(ctx) {
    this.Res.write("A good start" + ctx);
  }
}
