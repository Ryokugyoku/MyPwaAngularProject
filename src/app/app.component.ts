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
  title = $localize`サーバ管理用WEBページβ`;

  constructor(private location: Location) {}

  ngOnInit(): void {
    const defaultLang = 'en'; // デフォルト言語
    this.location.go(`/${defaultLang}`);
  }
}
