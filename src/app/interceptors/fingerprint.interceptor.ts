import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { from, switchMap } from 'rxjs';
import { FingerPrintService } from '../services/fingerprint.service';

export const fingerprintInterceptor: HttpInterceptorFn = (req, next) => {
  const fingerprintService = inject(FingerPrintService);

  return from(fingerprintService.getDeviceId()).pipe(
    switchMap((deviceId) => {
      const clonedReq = req.clone({
        setHeaders: {
          'X-DEVICE-ID': deviceId || '',
        },
      });

      return next(clonedReq);
    })
  );
};