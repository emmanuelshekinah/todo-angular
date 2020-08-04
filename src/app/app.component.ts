import { Component } from '@angular/core';
import { HttpService } from './http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todo_list: Object; 
  modalTitle: string = ''
  id: 0;
  title: string = ''
  description: string = ''
  status: 0
  dudate: Date = null;
  
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getAllTodo().subscribe(data => {
      this.todo_list = data.todo
      
    }
  );
  }

  openMyTodo(id){
    
    this.title = ''
    this.description = ''
    this.status = 0
    if(id===0){
      this.id = 0
      this.modalTitle = 'New Todo'
    }else{
      this.id = id
      this.modalTitle = 'Edit Todo'
      this._http.getSingleTodo(id).subscribe(data => {
        
        console.log(data);
        this.title = data.title
        this.description = data.description
        this.status = data.status
      })
    }
   
    

   
  }
}
