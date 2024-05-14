import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './composant/login/login.component';
import { RegistreComponent } from './composant/registre/registre.component';
import { MarketComponent } from './composant/market/market.component';
import { CategorieComponent } from './composant/categorie/categorie.component';
import { HeaderComponent } from './composant/header/header.component';
import { SidebarComponent } from './composant/sidebar/sidebar.component';
import { LangueComponent } from './composant/langue/langue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCategorieComponent } from './composant/categorie/add-categorie/add-categorie.component';
import { CommandeComponent } from './composant/commande/commande.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { EvenementComponent } from './composant/evenement/evenement.component';
import { FeedbackComponent } from './composant/feedback/feedback.component';
import { AddEvenementComponent } from './composant/evenement/add-evenement/add-evenement.component';
import { ArticleComponent } from './composant/article/article.component';
import { UsersComponent } from './composant/users/users.component';
import { AddUserComponent } from './composant/users/add-user/add-user.component';
import { AddArticleComponent } from './composant/article/add-article/add-article.component';
import { AddCommandeComponent } from './composant/commande/add-commande/add-commande.component';
import { AddFeedbackComponent } from './composant/feedback/add-feedback/add-feedback.component';
import { PersoMenuComponent } from './composant/perso-menu/perso-menu.component';
import { HomeComponent } from './composant/home/home.component';
import { EditCategorieComponent } from './composant/categorie/edit-categorie/edit-categorie.component';
import { AddMarketComponent } from './composant/market/add-market/add-market.component';
import { MenuComponent } from './composant/menu/menu.component';
import { CategorieMenuComponent } from './composant/categorie-menu/categorie-menu.component';
import { ArticleMenuComponent } from './composant/article-menu/article-menu.component';
import { SelectMenuComponent } from './composant/select-menu/select-menu.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { SousCategorieComponent } from './composant/categorie/sous-categorie/sous-categorie.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    MarketComponent,
    CategorieComponent,
    HeaderComponent,
    SidebarComponent,
    LangueComponent,
    AddCategorieComponent,
    CommandeComponent,
    EvenementComponent,
    FeedbackComponent,
    AddEvenementComponent,
    ArticleComponent,
    UsersComponent,
    AddUserComponent,
    AddArticleComponent,
    AddCommandeComponent,
    AddFeedbackComponent,
    PersoMenuComponent,
    HomeComponent,
    EditCategorieComponent,
    AddMarketComponent,
    MenuComponent,
    CategorieMenuComponent,
    ArticleMenuComponent,
    SelectMenuComponent,
    UsermenuComponent,
    SousCategorieComponent,
  
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
  HttpClientModule ,
  BrowserAnimationsModule, 
  MatTableModule, 
  MatSortModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,   
  MatDialogModule, 
  MatSelectModule,
  MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
