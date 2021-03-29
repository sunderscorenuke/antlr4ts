"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { createServer } from 'http';
// import antlr4 from 'antlr4';
// const { CommonTokenStream, InputStream } = antlr4ts;
const antlr4ts_1 = require("antlr4ts");
const Python3Lexer_1 = require("./Python3Lexer");
const Python3Parser_1 = require("./Python3Parser");
const PlainPython3Listener_1 = __importDefault(require("./PlainPython3Listener"));
const tree_1 = require("antlr4ts/tree");
let input = new antlr4ts_1.ANTLRInputStream("if x==4:\n\tpass\nelse:\npass\n\nprint('Hello World!')\n");
let res = console.log;
// var input = "a = 10";
// var chars = new InputStream(input, true)   
var lexer = new Python3Lexer_1.Python3Lexer(input);
var tokens = new antlr4ts_1.CommonTokenStream(lexer);
var parser = new Python3Parser_1.Python3Parser(tokens);
// parser.buildParseTrees = true;   
var tree = parser.single_input();
const listener = new PlainPython3Listener_1.default(res);
tree_1.ParseTreeWalker.DEFAULT.walk(listener, tree);
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