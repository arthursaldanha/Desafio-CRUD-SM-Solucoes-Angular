import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-customer-read",
  templateUrl: "./customer-read.component.html",
  styleUrls: ["./customer-read.component.css"],
})
export class CustomerReadComponent implements OnInit {
  customers: Customer[];
  displayedColumns = ["id", "name", "email", "action"];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.read().subscribe((response: any) => {
      this.customers = response.data;
      console.log(this.customers);
    });
  }
}
