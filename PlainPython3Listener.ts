// import antlr4 from 'antlr4ts';
import {Python3Lexer} from './Python3Lexer';
import {Python3Parser} from './Python3Parser';
import {Python3Listener}  from './Python3Listener';

export default class PlainPython3Listener implements Python3Listener {    
    Res: any;
    constructor(res:any) {
      this.Res = res;
	}
    
    enterSingle_input(ctx:any) {
        console.log("A good start" + ctx);
      }

      enterExpr_stmt(ctx:any){
        console.log("Entered expressions");
      }

      
      enterComp_if(ctx:any){
        console.log("Entered compound if")
      }

      enterIf_stmt(ctx: any) {
        console.log("Detected if" + ctx);
      };
    
      // enterName(ctx) {          
    //     this.Res.write("<strong>");    
    // }
    
    // exitName(ctx) {      
    //     this.Res.write(ctx.WORD().getText());
    //     this.Res.write("</strong> ");
    // }
    
    // enterColor(ctx) {     
    //     var color = ctx.WORD().getText();             
    //     ctx.text = '<span style="color: ' + color + '">';
    // }
    
    // exitColor(ctx) {         
    //     ctx.text += ctx.message().text;    
    //     ctx.text += '</span>';
    // }
    
    // exitEmoticon(ctx) {      
    //     var emoticon = ctx.getText();        
        
    //     if(emoticon == ':-)' || emoticon == ':)')
    //     {        
    //         ctx.text = "🙂";
    //     }
        
    //     if(emoticon == ':-(' || emoticon == ':(')
    //     {          
    //         ctx.text = "🙁";
    //     }
    // }
    
    // exitMessage(ctx) {                
    //     var text = '';
    
    //     for (var index = 0; index <  ctx.children.length; index++ ) {
    //         if(ctx.children[index].text != null)
    //             text += ctx.children[index].text;
    //         else
    //             text += ctx.children[index].getText();
    //     }
    
    //     if(ctx.parentCtx instanceof ChatParser.LineContext == false)
    //     {
    //         ctx.text = text;        
    //     }    
    //     else
    //     {
    //         this.Res.write(text);
    //         this.Res.write("</p>");
    //     }
    // }
    
    // enterCommand(ctx) {          
    //     if(ctx.SAYS() != null)
    //         this.Res.write(ctx.SAYS().getText() + ':' + '<p>');
    
    //     if(ctx.SHOUTS() != null)
    //         this.Res.write(ctx.SHOUTS().getText() + ':' + '<p style="text-transform: uppercase">');
    // }
}