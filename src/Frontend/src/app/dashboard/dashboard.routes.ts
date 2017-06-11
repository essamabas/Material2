import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    // Redirection Rountes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'dashboard', redirectTo: 'home', pathMatch: 'full' },
    // Redirection Other Rountes
    { path: '**', redirectTo: '404', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    PageNotFoundComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent
]
