import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApplicationConfigService } from '../services/application-config.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const applicationConfigService = inject(ApplicationConfigService);

  const serverApiUrl = applicationConfigService.getEndpointFor('');
  if (!req.url || (req.url.startsWith('http') && !(serverApiUrl && req.url.startsWith(serverApiUrl)))) {
    return next(req);
  }

  const languageKey = localStorage.getItem('jhi-locale');
  
  const token = localStorage.getItem('authenticationToken') || sessionStorage.getItem('authenticationToken');

  if (token && !req.url.includes('/client/common/authenticate')) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Web-Version': '0.0.2',
        Platform: 'web',
        'Accept-Language': languageKey ? languageKey : 'vi',
      },
    });
    return next(clonedReq);
  }

  return next(req);
};