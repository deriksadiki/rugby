import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import arr from '../login/login';
import {LoginPage} from '../login/login'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  team;
  Hscore = 0;
  Ascore = 0;
  trackTeam=[];
  trackScore = [];


  homename = arr[0];
  awayname = arr[1];

  set(pr){
    this.team = pr;
  }

len;

  Addtry =  function(){

    if (this.team == 1){
      this.Hscore = this.Hscore + 5;
      this.trackTeam.push(1)
      this.trackScore.push("try");
    }
    else{
      this.Ascore = this.Ascore + 5;
      this.trackTeam.push(2)
      this.trackScore.push("try");
    }
  }

  Penalty(){
    if (this.team == 1){

      this.Hscore = this.Hscore + 3;
      this.trackTeam.push(1)
      this.trackScore.push("Penalty");
    }
    else{
      this.Ascore = this.Ascore + 3;
      this.trackTeam.push(2)
      this.trackScore.push("Penalty");
    }
  }

  Conversion(){
    if (this.team == 1){

      this.Hscore = this.Hscore + 2;
      this.trackTeam.push(1)
      this.trackScore.push("Conversion");
    }
    else{
      this.Ascore = this.Ascore + 2;
      this.trackTeam.push(2)
      this.trackScore.push("Conversion");
    }
  }
  undotry(){
    if (this.team == 1){

      for (var x = 0; x < this.trackScore.length; x++){
        if (this.trackTeam[x] == 1 && this.trackScore[x] == "try")
        {
           this.Hscore = this.Hscore - 5;
           this.trackScore.splice(x,1);
           this.trackTeam.splice(x,1);
           break;
        }
        else if (x == this.trackScore.length - 1)
        {
            const alert = this.alertCtrl.create({
              title: "No try has been added on the team",
              buttons: [{ text:'OK'}]
            });
            alert.present();
        }
      }
      if (this.Hscore < 0)
      this.Hscore = 0;
    }
    else{
      for (var x = 0; x < this.trackScore.length; x++){
        if (this.trackTeam[x] == 2 && this.trackScore[x] == "try")
        {
          this.Ascore = this.Ascore - 5;
          this.trackScore.splice(x,1);
           this.trackTeam.splice(x,1);
           break;
        }
        else if (x == this.trackScore.length - 1)
        {
          const alert = this.alertCtrl.create({
            title: "No try has been added on the team",
            buttons: [{ text:'OK'}]
          });
          alert.present();
        
        }
      if ( this.Ascore < 0)
      this.Ascore = 0;
    }
  }
}
  unPenalty(){
    if (this.team == 1){
      for (var x = 0; x < this.trackScore.length; x++){
        if (this.trackTeam[x] == 1 && this.trackScore[x] == "Penalty")
        {
          this.Hscore = this.Hscore - 3;
          this.trackScore.splice(x,1);
           this.trackTeam.splice(x,1);
           break;
        }
        else if (x == this.trackScore.length - 1)
        {
          const alert = this.alertCtrl.create({
            title: "No Penalty has been added on the team",
            buttons: [{ text:'OK'}]
          });
          alert.present();
        
        }
      }
  
      if (this.Hscore < 0)
      this.Hscore = 0;
    }
    else{
      for (var x = 0; x < this.trackScore.length; x++){
        if (this.trackTeam[x] == 2 && this.trackScore[x] == "Penalty")
        {
          this.Ascore = this.Ascore - 3;
          this.trackScore.splice(x,1);
           this.trackTeam.splice(x,1);
           break;
        }
        else if (x == this.trackScore.length - 1)
        {
          const alert = this.alertCtrl.create({
            title: "No Penalty has been added on the team",
            buttons: [{ text:'OK'}]
          });
          alert.present();
        
        }
      }
      if ( this.Ascore < 0)
      this.Ascore = 0;
    }
  }

  undoConversion(){
    if (this.team == 1){
      for (var x = 0; x < this.trackScore.length; x++){
        if (this.trackTeam[x] == 1 && this.trackScore[x] == "Conversion")
        {
          this.Hscore = this.Hscore - 2;
          this.trackScore.splice(x,1);
           this.trackTeam.splice(x,1);
           break;
        }
        else if (x == this.trackScore.length - 1)
        {
          const alert = this.alertCtrl.create({
            title: "No Conversionhas been added on the team",
            buttons: [{ text:'OK'}]
          });
          alert.present();
        }
      }
      if (this.Hscore < 0)
      this.Hscore = 0;
    }
    else{
      for (var x = 0; x < this.trackScore.length; x++){
        if (this.trackTeam[x] == 2 && this.trackScore[x] == "Conversion")
        {
          this.Ascore = this.Ascore - 2;
          this.trackScore.splice(x,1);
           this.trackTeam.splice(x,1);
           break;
        }
        else if (x == this.trackScore.length - 1)
        {
          const alert = this.alertCtrl.create({
            title: "No Conversionhas been added on the team",
            buttons: [{ text:'OK'}]
          });
          alert.present();
        }
      }

      if ( this.Ascore< 0)
      this.Ascore= 0;
    }
  }
  resert(){
    this.Ascore= 0;
    this.Hscore = 0;
    this.homename = "Team A";
    this.awayname = "Team B";
    this.navCtrl.push(LoginPage);
  }
}
