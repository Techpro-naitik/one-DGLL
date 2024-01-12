import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  getLiveApiUrl() {
    const formData = new FormData();
    formData.append('_token','jvNUDCVnir5YBvHf34huR88RjUjuRtIWvQd4QJbA')
    formData.append('email','adslfhal')
    formData.append('password','zt7t9USdvPU2KG1Kmm@gmail.com')
    formData.append('captcha','dhiasdhias')

    return this.http.post('https://dgll.nic.in/app/sentotp',formData);
  }

}
