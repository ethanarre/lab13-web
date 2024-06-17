import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  url = 'http://localhost:4000/api/productos'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  guardarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  obtenerProducto(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }
}