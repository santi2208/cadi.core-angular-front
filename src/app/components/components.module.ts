import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountGridComponent } from './account-grid/account-grid.component';
import { MovementsGridComponent } from './movements-grid/movements-grid.component';
import { AccountBalanceGridComponent } from './account-balance-grid/account-balance-grid.component';
import { AccountPeriodBalanceGridComponent } from './account-period-balance-grid/account-period-balance-grid.component';
import { ImportMovementComponent } from './import-movement/import-movement.component';
import { ImportLinesComponent } from './import-lines/import-lines.component';
import { ApproveBatchButtonComponent } from './approve-batch-button/approve-batch-button.component';
import { GenerateMovementsButtonComponent } from './generate-movements-button/generate-movements-button.component';
import { BatchesGridComponent } from './batches-grid/batches-grid.component';
import { PeriodsGridComponent } from './periods-grid/periods-grid.component';
import { BatchDetailModalComponent } from './batch-detail-modal/batch-detail-modal.component';
import { LoginComponent } from '../login/login.component';
// import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule
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
    ImportLinesComponent,
    ApproveBatchButtonComponent,
    GenerateMovementsButtonComponent,
    BatchesGridComponent,
    PeriodsGridComponent,
    BatchDetailModalComponent,
    LoginComponent
    // ,SpinnerComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
