import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationService } from './application-model/services/navigation.service';
import { FooterComponent } from './view-model/general/footer/footer.component';
import { HeaderComponent } from './view-model/general/header/header.component';
import { RegistrationPasswordComponent } from './view-model/general/inputs/password-with-indications/registration-password.component';
import { LoaderLayoutComponent } from './view-model/general/layouts/loader-layout/loader-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    LoaderLayoutComponent,
    RegistrationPasswordComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
