import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatMenuModule } from '@angular/material/menu'
import { MatDividerModule } from '@angular/material/divider'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatSelectModule,
  MatTableModule,
  MatMenuModule,
  MatDividerModule,
  MatPaginatorModule,
  MatDialogModule,
  FormsModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
