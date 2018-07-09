import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage } from '../home/home'
import { variable } from '@angular/compiler/src/output/output_ast';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  start  (home,away){
    if (home != away){
      const alert = this.alertCtrl.create({
        title: "Are You Sure these are the teams you want?",
        subTitle: home + ' VS ' + away,
        buttons:[
          {
            text: 'OK',
            handler: data =>
            {
              arr[0] = home;
              arr[1] = away; 
              this.navCtrl.push(HomePage );
            }
          },
          {
            text: 'Cancel',
          }
        ]
      });
    
   alert.present();
    }
    else{
      const alert = this.alertCtrl.create({
        title: "Sorry! you cannot have two teams with the same names!",
        buttons:[{
          text: 'Ok'
        }]
      });
      alert.present();
    }
  }
}

var arr = [];
export default arr;

