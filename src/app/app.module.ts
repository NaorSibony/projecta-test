import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagement } from './application-model/app-management/user-management';
import { UserManager } from './application-model/app-manager/user-manager';
import { UserRepository } from './application-model/app-repository/user-repository';
import { FooterComponent } from './view-model/general/footer/footer.component';
import { HeaderComponent } from './view-model/general/header/header.component';
import { HeaderService } from './view-model/general/header/header.service';
import { LoaderLayoutComponent } from './view-model/general/layouts/loader-layout/loader-layout.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, routingComponents, LoaderLayoutComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [HeaderService, UserManagement, UserManager, UserRepository],
  bootstrap: [AppComponent]
})
export class AppModule {}
