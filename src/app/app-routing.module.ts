import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';


const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: 'listar-categoria', component: ListarCategoriaComponent },
  { path: 'crear-categoria', component: CrearCategoriaComponent },
  { path: 'editar-categoria/:id', component: CrearCategoriaComponent },
  { path: '**', redirectTo: '' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
