import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private readonly _selectedLanguage: string = '';
  title = $localize`サーバ管理用WEBページβ`;

  constructor(private readonly location: Location) {}

  ngOnInit(): void {
    const supportedLanguages = ['en', 'ja'];
    const lang = navigator.language.split('-')[0];
    const redirectLang = supportedLanguages.includes(lang) ? lang : 'en-US';
    setTimeout(() => this.location.go('/' + redirectLang), 100);
  }
}
