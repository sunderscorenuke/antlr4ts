import { Python3Listener } from './Python3Listener';
export default class PlainPython3Listener implements Python3Listener {
    Res: any;
    constructor(res: any);
    enterSingle_input(ctx: any): void;
    enterExpr_stmt(ctx: any): void;
    enterComp_if(ctx: any): void;
    enterIf_stmt(ctx: any): void;
}
