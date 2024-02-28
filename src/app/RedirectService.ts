import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class RedirectService {

    constructor(private location: Location, private translate: TranslateService) {}

    redirectToLangauge() {
        const currentUrl = this.location.path();
        const browserLang = this.translate.getBrowserLang();
        const redirectUrl = `/${browserLang}${currentUrl}`;
        this.location.go(redirectUrl);
    }
}