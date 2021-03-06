import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';
import { HttpClient , HttpHeaders, HttpRequest} from '@angular/common/http';
import { GenericResponse } from 'src/app/models/GenericResponse';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private SERVER_URL = Constants.SERVER_URL;


  constructor( private http: HttpClient) { }

  public getNewColor() {
    return this.http.get<GenericResponse<any>>(`${this.SERVER_URL}`);
  }
}
