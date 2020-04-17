import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http:HttpClient) { }

    postBankAccount(formData:any){
      return this.http.post(environment.apiBaseURL +'/BankAccount',formData);
    }

    putBankAccount(formData :any){
      return this.http.put(environment.apiBaseURL +'/BankAccount/'+formData.bankAccountID,formData);
    }

    deleteBankAccount(id:any){
      return this.http.delete(environment.apiBaseURL +'/BankAccount/' + id);
    }

    getBankAccountList(){
      return this.http.get(environment.apiBaseURL +'/BankAccount');
    }
}
