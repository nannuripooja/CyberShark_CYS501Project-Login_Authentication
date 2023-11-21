import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './routes/password/password.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { ToogleComponent } from './toggle/toggle.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '',component: NavbarComponent},
  {path: 'static',component: ToogleComponent, pathMatch: 'full'},
  {path: 'password',component: PasswordComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register' ,component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})

export class AppRoutingModule { }


@NgModule({
  imports: [
    // ...
    FormsModule
  ],
})
export class AppModule { }