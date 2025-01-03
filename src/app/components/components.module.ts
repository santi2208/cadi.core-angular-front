import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountGridComponent } from './account-grid/account-grid.component';
import { MovementsGridComponent } from './movements-grid/movements-grid.component';
import { AccountBalanceGridComponent } from './account-balance-grid/account-balance-grid.component';
import { AccountPeriodBalanceGridComponent } from './account-period-balance-grid/account-period-balance-grid.component';
import { ImportMovementComponent } from './import-movement/import-movement.component';
import { ImportLinesComponent } from './import-lines/import-lines.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatSlideToggleModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AccountGridComponent,
    MovementsGridComponent,
    AccountBalanceGridComponent,
    AccountPeriodBalanceGridComponent,
    ImportMovementComponent,
    ImportLinesComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
