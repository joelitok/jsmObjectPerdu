import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Objets perdus',
      url: '/list',
      icon: 'search'
    }
  ,
  {
    title: 'Objets retrouvés',
    url: '/objetsretrouves',
    icon: 'key'
  }
,
  {
    title: 'A propos..',
    url: '/apropos',
    icon: 'people'
  },
  {
    title: 'Exit',
    url: 'exit',
    icon: 'power'
  }
  ];

  subscription:boolean;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
  
    this.initializeApp(); 
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 
}
 
