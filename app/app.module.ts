// 用來為每個module 定義 metadata。
import { NgModule }     from "@angular/core";

// 註冊一些灌建應用服務的provider，包涵一些通用的指令，如Ngif , NgFor，所以這些
// 指令在任何modules template是可以使用的。
import { BrowserModule }    from "@angular/platform-browser";

import { AppComponent }     from "./app.component";
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
