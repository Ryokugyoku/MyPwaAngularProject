import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {$localize} from "@angular/localize/init";
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent{
  get selectedLanguage(): string {
    return this._selectedLanguage;
  }

  set selectedLanguage(value: string) {
    this._selectedLanguage = value;
  }
  protected _selectedLanguage : string = "";
  title = $localize`サーバ管理用WEBページβ`
  changeLanguage() {
    $localize.locale = this.selectedLanguage;
    window.location.reload();
  }

}

