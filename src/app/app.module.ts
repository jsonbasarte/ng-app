import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from './material.module'
import { FinanceDialog } from './dialog/finance-dialog.component'
@NgModule({
  declarations: [AppComponent, FinanceDialog],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
