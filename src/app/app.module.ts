import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {firebaseConfig} from './firebase.config'; 
import { FirebaseService } from './services/firebase-service.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ModalService } from './services/modal.service';
import {FormsModule}  from '@angular/forms';

const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'home',component: HomeComponent},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    FormsModule
  ],
  
  entryComponents: [AddCategoryComponent],
  providers: [FirebaseService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
