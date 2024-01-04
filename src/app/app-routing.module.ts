import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { Test1Component } from './components/testCard/test1.component';
import { AddComponent } from './components/challenges/add/add.component';
import { SubtractComponent } from './components/challenges/subtract/subtract.component';
import { DivideComponent } from './components/challenges/divide/divide.component';
import { DifferentialComponent } from './components/challenges/differential/differential.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'test1', component: Test1Component },
    { path: 'add', component: AddComponent },
    { path: 'subtract', component: SubtractComponent },
    { path: 'divide', component: DivideComponent },
    { path: 'differential', component: DifferentialComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
