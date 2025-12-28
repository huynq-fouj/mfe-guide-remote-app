import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { fingerprintInterceptor } from './interceptors/fingerprint.interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { provideHotToastConfig } from '@ngxpert/hot-toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        fingerprintInterceptor,
        errorHandlerInterceptor
      ])
    ),
    provideHotToastConfig({
      duration: 3000,
      position: 'top-right'
    })
  ]
};
