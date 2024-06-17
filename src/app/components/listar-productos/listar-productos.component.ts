import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {

  listProductos: Producto[] = [];
  nuevoProducto: Producto = {
    nombre: '',
    categoria: '',
    ubicacion: '',
    precio: 0
  };
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

  
}



