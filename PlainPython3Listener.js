"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlainPython3Listener {
    constructor(res) {
        this.Res = res;
    }
    enterSingle_input(ctx) {
        console.log("A good start" + ctx);
    }
    enterExpr_stmt(ctx) {
        console.log("Entered expressions");
    }
    enterComp_if(ctx) {
        console.log("Entered compound if");
    }
    enterIf_stmt(ctx) {
        console.log("Detected if" + ctx);
    }
    ;
}
exports.default = PlainPython3Listener;
//# sourceMappingURL=PlainPython3Listener.js.map