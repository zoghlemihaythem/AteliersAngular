import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponent,
    ArticleComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AddProduitComponent,
    TemplateDrivenFormComponent,
    TodoListComponent,
    UsersComponent,
    
   
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
