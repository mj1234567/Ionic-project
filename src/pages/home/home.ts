import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];
  public reorderEnabled =false;
  constructor(public navCtrl: NavController, private alertController : AlertController, ) {

  }

  changeOrder($event){
    reorderArray(this.todos, $event);
  }

  toggleReorder(){
    this.reorderEnabled = !this.reorderEnabled;
  }

  openTodoPopUp(){
    let alert = this.alertController.create({
      title : "Add a todo",
      message : "Enter your todo",
      inputs:[
        {
          label:"Name",
          type:"text",
          name : "addTodoInput"
        }
      ],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"Add Todo",
          handler :(data)=>{
            let text = data.addTodoInput;
            this.todos.push(text);
          }
        }
      ]
    }
      

    );
    alert.present();
  }

}
