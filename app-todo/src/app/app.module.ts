import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** config ng-zorro-antd i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import es from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import { NZ_I18N, en_US, es_ES } from 'ng-zorro-antd/i18n';
registerLocaleData(en);
registerLocaleData(es);


// MODULES
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // MODULES
    NzStatisticModule,
    NzButtonModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/todo' },
    {
      provide: NZ_I18N,
      useFactory: () => {
        const localId = inject(LOCALE_ID);
        switch (localId) {
          case 'en':
            return en_US;
          /** keep the same with angular.json/i18n/locales configuration **/
          case 'es':
            return es_ES;
          default:
            return es_ES;
        }
      }
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
