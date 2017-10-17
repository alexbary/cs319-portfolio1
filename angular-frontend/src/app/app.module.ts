import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material';

import { DataService } from "./data/data.service";
import { AuthGuard } from "./auth/auth.guard";
import { AuthenticationService } from "./auth/authentication.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { RecordsComponent } from './records/records.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LobbyComponent } from './lobby/lobby.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'game', component:GameComponent, canActivate: [AuthGuard]},
  {path:'create', component:CreateGameComponent, canActivate: [AuthGuard]},
  {path:'records', component:RecordsComponent, canActivate: [AuthGuard]},
  {path:'lobby', component:LobbyComponent, canActivate: [AuthGuard]},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    GameComponent,
    RecordsComponent,
    NotFoundComponent,
    LobbyComponent,
    CreateGameComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [ 
    DataService, 
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
