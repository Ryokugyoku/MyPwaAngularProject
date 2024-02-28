import {Component,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { Location } from '@angular/common';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  protected _selectedLanguage : string = "";
  title = $localize`サーバ管理用WEBページβ`
  constructor(private readonly location: Location) {}

  ngOnInit() {
    const lang = navigator.language.split('-')[0];
    if (lang === 'en') {
      // 何もしない
    } else {
      this.location.go('/ja');
    }
  }

}

