import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserJPH {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-http-jsonplaceholder',
  templateUrl: './http-jsonplaceholder.component.html',
  styleUrls: ['./http-jsonplaceholder.component.scss'],
})
export class HttpJsonplaceholderComponent implements OnInit {
  httpAddressJPH = 'https://jsonplaceholder.typicode.com';
  usersJPH: UserJPH[];
  // idForm = '';
  // nameForm = '';
  // emailForm = '';

  isLoaded = false;
  errorMessage = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoaded = false;
    this.httpClient.get<UserJPH[]>(`${this.httpAddressJPH}/users`).subscribe(
      (users) => {
        this.usersJPH = users;
        this.isLoaded = true;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
