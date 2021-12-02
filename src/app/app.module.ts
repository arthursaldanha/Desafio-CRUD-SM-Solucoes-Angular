import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

//*Material-UI
//*@Angular-Material
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerCreateComponent } from "./components/customer/customer-create/customer-create.component";
import { HomeComponent } from "./views/home/home.component";
import { CustomerCrudComponent } from "./views/customer-crud/customer-crud.component";
import { CustomerReadComponent } from "./components/customer/customer-read/customer-read.component";
import { MainNavComponent } from "./components/template/main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCreateComponent,
    HomeComponent,
    CustomerCrudComponent,
    CustomerReadComponent,
    MainNavComponent,
    CustomerUpdateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
