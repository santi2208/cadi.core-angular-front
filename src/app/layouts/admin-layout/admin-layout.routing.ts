import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AccountGridComponent } from '../../components/account-grid/account-grid.component';
import { MovementsGridComponent } from '../../components/movements-grid/movements-grid.component';
import { AccountBalanceGridComponent } from '../../components/account-balance-grid/account-balance-grid.component';
import { AccountPeriodBalanceGridComponent } from '../../components/account-period-balance-grid/account-period-balance-grid.component';
import { ImportMovementComponent } from '../../components/import-movement/import-movement.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'account-grid',   component: AccountGridComponent },
    { path: 'movement-grid', component: MovementsGridComponent },
    { path: 'account-balance-grid', component: AccountBalanceGridComponent },
    { path: 'account-period-balance-grid', component: AccountPeriodBalanceGridComponent },
    { path: 'import-movement', component: ImportMovementComponent },
];
