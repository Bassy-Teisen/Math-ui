import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './components/testCard/test1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AddComponent } from './components/challenges/add/add.component';
import { SubtractComponent } from './components/challenges/subtract/subtract.component';
import { DivideComponent } from './components/challenges/divide/divide.component';
import { DifferentialComponent } from './components/challenges/differential/differential.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        Test1Component,
        AddComponent,
        SubtractComponent,
        DivideComponent,
        DifferentialComponent,
        LeaderboardComponent,
    ],
    imports: [
        HttpClientModule,
        TableModule,
        BrowserModule,
        ButtonModule,
        AppRoutingModule,
        CardModule,
        ReactiveFormsModule,
        InputTextModule,
        KeyFilterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
