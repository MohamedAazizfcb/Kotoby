import { Routes } from '@angular/router';
import { appRoutes } from './core/domain/domain.module';
import { LoginComponent } from './features/authentication/login/presentation/login-component/login.component';
import { RegisterComponent } from './features/authentication/register/presentation/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: appRoutes.login.route,
        pathMatch: 'full',
    },

    {
        path: appRoutes.login.route,
        component: LoginComponent,
        // canActivate: [AuthGuard, PrivGuard],
        // data: {action: privsEnum.home},
    },

    {
        path: appRoutes.register.route,
        component: RegisterComponent,
        // canActivate: [AuthGuard, PrivGuard],
        // data: {action: privsEnum.home},
    },

    {
        path: '**',
        redirectTo: appRoutes.register.route,
        pathMatch: 'full'
    },
];
