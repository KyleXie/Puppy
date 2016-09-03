import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {

    public data;

    constructor(private http: Http) {}

    loadPeople() {
        if (this.data) {
            // 如果数据已经加载
            return Promise.resolve(this.data);
        }

        // 没有数据, 则访问接口获取
        return new Promise(resolve => {
            this.http.get('https://randomuser.me/api/?results=5')
              .map(res => res.json())
              .subscribe(data => {
                  this.data = data.results;
                  resolve(this.data);
              });
        });
      }

    removePerson(person) {
        // 访问删除接口
    }

}

