import { Component, OnInit } from '@angular/core';
import { HeroesService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private heroesService: HeroesService) {}

  async ngOnInit(): Promise<void> {
    const heroes = await this.heroesService.ApiV1HeroesGet().toPromise();
    console.info(heroes);
  }
}
