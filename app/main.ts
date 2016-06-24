import {Boostrap} from 'angular2/platform/browsers';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [])
  .then(success => console.log('Bootstrap success'))
  .catch(error => console.log(error));
