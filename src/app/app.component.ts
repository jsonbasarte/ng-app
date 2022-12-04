import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FinanceDialog } from './dialog/finance-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'my-app'

  openDialog() {
    const dialogRef = this.dialog.open(FinanceDialog, {
      width: '800px',
    })
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }
}
