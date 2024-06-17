import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ProductoComponent } from './services/producto/producto.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';
import { CategoriaComponent } from './services/categoria/categoria.component';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    ProductoComponent,
    CrearCategoriaComponent,
    ListarCategoriaComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
