import { Routes } from '@angular/router';
import { authGuard } from './auth.guard'; // Adjust the path if needed
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
    { path: '', component: HomeComponent },
];
