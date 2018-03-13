import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appRoot = 'http://httpbin.org';
  result: any = [];

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:max-line-length
  // To perform a GET request we simply call the get function on our http client. This returns an observable which for now we are just going to subscribe to and print the response to the console, like so:
  doGET() {
    console.log('GET');
    const url = `${this.appRoot}/get`;
    // Setup log namespace query parameter
    const params = new HttpParams()
          .set('logNamespace', 'logNamespace')
          .set('foo', 'moo');
    // res is whatever was returned in the body of the HTTP response from the server.
    this.http.get(url, {params: params}).subscribe( res => {
      this.result = res;
      console.log(typeof(this.result));
      console.log(res);
    });
  }

  doPOST() {
    console.log('POST');
  }

  doPUT() {
    console.log('PUT');
  }

  // tslint:disable-next-line:max-line-length
  // To perform a DELETE request we just call the delete function. The format of the function is exactly the same as the get function above, we can even pass in query params like so:
  doDELETE() {
    console.log('DELETE');
    console.log('GET');
    const url = `${this.appRoot}/delete`;
    const params = new HttpParams()
          .set('logNamespace', 'logNamespace')
          .set('foo', 'moo');
    this.http.delete(url, {params: params}).subscribe( res => {
      this.result = res;
      console.log(typeof(this.result));
      console.log(res);
    });
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE');
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
  }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');
  }
}
