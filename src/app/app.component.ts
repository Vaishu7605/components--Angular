import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';


//class
class Vaishu {
  constructor() {
    console.log("this is Vaishnavi class")
  }
}

class Navi {
  constructor() {
    console.log("this is Navi!!!")
  }
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
  viewProviders: [Vaishu, Navi]
})
export class AppComponent {
  title = 'NG';
  // @HostListener('click', ['$event'])
  // show() { alert('hello') }
  // @HostListener('window:keydown', ['$event'])
  // show() { alert('hello') }
  // @HostListener('window:click', ['$event'])
  // show() { prompt('above 18 years') }
  @HostListener('window:click', ['$event'])
  show() { confirm('above 18 years') }
  constructor(private __Vaishu: Vaishu, private __Navi: Navi) {
    console.log('This is app component')
  }
}
