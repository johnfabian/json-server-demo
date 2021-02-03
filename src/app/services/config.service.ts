import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  isDebug: boolean = !environment.production;

  baseUrl: string = environment.apiBaseUrl;

  productsUrl: string = `${this.baseUrl}/products`;
  
  commentsUrl: string = `${this.baseUrl}/comments`;


}
