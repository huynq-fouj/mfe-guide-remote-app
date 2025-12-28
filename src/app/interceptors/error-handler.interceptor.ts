import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toast = inject(HotToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Đã xảy ra lỗi không xác định.';

        if (error.error && typeof error.error === 'object') {
            if (error.error.message) {
            errorMessage = error.error.message;
            } else if (error.error.detail) {
            errorMessage = error.error.detail;
            }
        }
      
        if (error) {
            switch (error.status) {
            case 401:
                localStorage.removeItem('authenticationToken');
                sessionStorage.removeItem('authenticationToken');
                
                router.navigate(['/login']); 
                break;
            }
        }

        toast.error(errorMessage)

        return throwError(() => error);
    })
  );
};