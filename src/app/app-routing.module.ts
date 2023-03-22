import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'',redirectTo:'article',pathMatch:'full'},
  {path:'article',component:ArticleComponent},
  {path:'form',component:TemplateDrivenFormComponent},
  {path:'offre',component:OffresEmploiComponent},
  {path:'addProduit',component:AddProduitComponent},
  {path:'**',component:NotFoundComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
