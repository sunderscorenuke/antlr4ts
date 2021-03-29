// import { createServer } from 'http';
// import antlr4 from 'antlr4';
// const { CommonTokenStream, InputStream } = antlr4ts;
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { Python3Lexer } from './Python3Lexer';
import { Python3Parser } from './Python3Parser';
import PlainPython3Listener from './PlainPython3Listener';
import { ParseTreeWalker } from "antlr4ts/tree";
let input = new ANTLRInputStream("print 'Hello World!'");
let res = console.log;
// var input = "a = 10";
// var chars = new InputStream(input, true)   
var lexer = new Python3Lexer(input);
var tokens = new CommonTokenStream(lexer);
var parser = new Python3Parser(tokens);
// parser.buildParseTrees = true;   
var tree = parser.single_input();
const listener = new PlainPython3Listener(res);
ParseTreeWalker.DEFAULT.walk(listener, tree);
// import { HTMLParserListener, HtmlElementContext } from "html-antlr4";
// class EnterHtmlElementListener implements HTMLParserListener {
//   enterHtmlElement(context: HtmlElementContext) {
//     console.log(`Element start line number ${context._start.line}`);
//     // ...
//   }
//   // other enterX functions...
// }
// Create the listener
// const listener: HTMLParserListener = new EnterHtmlElementListener();
// Use the entry point for listeners
// ParseTreeWalker.DEFAULT.walk(listener_, tree);
// import { HTMLParserListener, HtmlElementContext } from "html-antlr4";
// import { ParseTreeWalker } from "antlr4ts/tree";
// class EnterHtmlElementListener implements HTMLParserListener {
//   enterHtmlElement(context: HtmlElementContext) {
//     console.log(`Element start line number ${context._start.line}`);
//     // ...
//   }
//   // other enterX functions...
// }
// // Create the listener
// // const listener: HTMLParserListener = new EnterHtmlElementListener();
// // Use the entry point for listeners
// ParseTreeWalker.DEFAULT.walk(listener, tree);
//# sourceMappingURL=antlr.js.map