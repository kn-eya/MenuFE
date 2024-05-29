import { HomeComponent } from './composant/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './composant/login/login.component';
import { RegistreComponent } from './composant/registre/registre.component';
import { CategorieComponent } from './composant/categorie/categorie.component';
import { MarketComponent } from './composant/market/market.component';

import { LangueComponent } from './composant/langue/langue.component';
import { AppComponent } from './app.component';
import { AddCategorieComponent } from './composant/categorie/add-categorie/add-categorie.component';
import { CommandeComponent } from './composant/commande/commande.component';
import { ArticleComponent } from './composant/article/article.component';
import { FeedbackComponent } from './composant/feedback/feedback.component';
import { EvenementComponent } from './composant/evenement/evenement.component';
import { AddEvenementComponent } from './composant/evenement/add-evenement/add-evenement.component';
import { AddUserComponent } from './composant/users/add-user/add-user.component';
import { UsersComponent } from './composant/users/users.component';
import { AddArticleComponent } from './composant/article/add-article/add-article.component';
import { PersoMenuComponent } from './composant/perso-menu/perso-menu.component';
import { AddMarketComponent } from './composant/market/add-market/add-market.component';
import { MenuComponent } from './composant/menu/menu.component';
import { SelectMenuComponent } from './composant/select-menu/select-menu.component';
import { EditCategorieComponent } from './composant/categorie/edit-categorie/edit-categorie.component';
import { SousCategorieComponent } from './composant/categorie/sous-categorie/sous-categorie.component';
import { AddCommandeComponent } from './composant/commande/add-commande/add-commande.component';



const routes: Routes=[
   {
  path: '', component:LoginComponent
  
}, 
{
  path: 'home',component:HomeComponent
}
,
{
  path: 'registre',
 component:RegistreComponent
  
}, 
{
  path: 'Categorie',
 component:CategorieComponent
  
},{
  path: 'SousCategorie',
 component:SousCategorieComponent
  
},

{
  path: 'market',
 component:MarketComponent
  
},
{
  path: 'langue',
 component:LangueComponent
  
},{
  path: 'addcategorie',
 component:AddCategorieComponent
  
},{
  path: 'Commande',
 component:CommandeComponent
  
},{
  path: 'adCommande',
 component:AddCommandeComponent
  
},{
  path: 'Article',
 component:ArticleComponent
  
},{
  path: 'addArticle',
 component:AddArticleComponent
  
},{
  path: 'feedback',
 component:FeedbackComponent
  
},{
  path: 'Evenement',
 component:EvenementComponent
  
},{
  path: 'addEvenement',
 component:AddEvenementComponent
  
},{
  path: 'adduser',
 component:AddUserComponent
  
},{
  path: 'user',
 component:UsersComponent
  
},{
  path: 'perso',
 component:PersoMenuComponent
  
},{
  path: 'addMarket',
 component:AddMarketComponent
  

  
}
,{
  path: 'Menu',
 component:MenuComponent
}
,{
  path: 'selectMarket',
 component:SelectMenuComponent
},{
  path: 'EditCategory',
 component:EditCategorieComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
