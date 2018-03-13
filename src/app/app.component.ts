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
    const url = `${this.appRoot}/post`;
    const params = new HttpParams()
      .set('foo', 'moo')
      .set('limit', '25');
    this.http.post(url, {moo: 'foo', goo: 'loo'}, {params}).subscribe(res => console.log(res)
    );
  }

  // To perform a PUT request we just call the put function. It works in exactly the same was as the post function above:
  doPUT() {
    console.log('PUT');
    const url = `${this.appRoot}/put`;
    const params = new HttpParams();
    params.set('foo', 'moo');
    params.set('limit', '25');
    this.http.put(url, {moo: 'foo', goo: 'loo'}, {params}).subscribe(res => console.log(res));
  }

  // tslint:disable-next-line:max-line-length
  // To perform a DELETE request we just call the delete function. The format of the function is exactly the same as the get function above, we can even pass in query params like so:
  doDELETE() {
    console.log('DELETE');
    const url = `${this.appRoot}/delete`;
    const params = new HttpParams()
          .set('logNamespace', 'logNamespace')
          .set('foo', 'moo');
    this.http.delete(url, {params: params}).subscribe( res => {
      this.result = res;
      console.log(res);
    });
  }

  //   If you prefer to work with promises over observables it’s easy to convert between the two.

  // We just call .toPromise() on the observable that gets returned and this will convert it into a promise instead, like so:
  doGETAsPromise() {
    console.log('GET AS PROMISE');
    const url = `${this.appRoot}/get`;
    this.http.get(url)
        .toPromise()
        .then(res => console.log(res)
        );
  }

  // We can simulate errors from our test server just by performing a GET on a POST endpoint, like so:
  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    const url = `${this.appRoot}/post`;
    this.http.get(url)
      .toPromise()
      .then(res => console.log(res),
            msg => console.error(`${msg.status}  ${msg.statusText}`)
    );
  }


  // And in the case of an observable it looks like so:
  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    const url = `${this.appRoot}/post`;
    this.http.get(url).subscribe(
      res => console.log(res),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');
  }
}
