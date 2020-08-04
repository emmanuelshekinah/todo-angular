import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllTodo() {
    return this.http.get('https://my-json-server.typicode.com/emmanuelshekinah/demo/db')
  }
  getSingleTodo(id) {
    return this.http.get('https://my-json-server.typicode.com/emmanuelshekinah/demo/todo/'+id)
  }
}
