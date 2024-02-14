import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'latest';
  list:any[]=[];
  addnote(item:any){
    console.log(item);
    this.list.push({id:this.list.length,name:item});            //id and name is parameter
  }
  removenote(id:any){
    console.log(id)
    this.list=this.list.filter(item=> item.id!==id)
  }
}
