import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/application-model/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  get headerTitle(): string {
    return this.navigationService.headerTitle;
  }
}
