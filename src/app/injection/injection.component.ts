import { Component, Inject, OnInit } from '@angular/core';
import { PageConfig, PAGE_CONFIG } from './config/page-config';
import { AnotherGreetingService } from './services/another-greeting.service';
import { FirstService } from './services/first.service';
import { GreetingService } from './services/greeting.service';
import { SecondService } from './services/second.service';
import { ThirdService } from './services/third.service';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.sass'],
})
export class InjectionComponent implements OnInit {
  public title = '';
  constructor(
    private fs: FirstService,
    private greetingService: GreetingService,
    private gs: AnotherGreetingService,
    @Inject(PAGE_CONFIG) pageConfig: PageConfig,
  ) { 
    this.title = pageConfig.title;
  }

  ngOnInit(): void {
    console.log(this.fs.info('fsdafsdf'));
    console.log(this.title);

    console.log(this.greetingService.getMessage());
    console.log(this.gs.getMessage());
    
    
    // console.log(this.sec.getSumInfo());
    // console.log(this.sec.getSecondInfo());
  } 
}
