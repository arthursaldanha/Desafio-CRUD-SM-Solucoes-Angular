import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Router } from "@angular/router";
import { Customer } from "../customer.model";

@Component({
  selector: "app-customer-create",
  templateUrl: "./customer-create.component.html",
  styleUrls: ["./customer-create.component.css"],
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer = {
    first_name: "",
    email: "",
  };

  constructor(
    private customerCreate: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createUser(): void {
    this.customerCreate.create(this.customer).subscribe(() => {
      this.customerCreate.showMessage("sucesso!");
      this.router.navigate(["/customers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/customers"]);
  }
}
