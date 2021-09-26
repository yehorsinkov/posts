import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { components } from './components';

@Directive({
  selector: '[dynamicField]'
})
export class CustomFormDirective implements OnInit {
  @Input() public config: any;
	@Input() public group: FormGroup;
  public component: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    const currentFormComponent = components[this.config.type];
    const myDynamicComponentFactory = this.resolver.resolveComponentFactory<any>(currentFormComponent);
		this.component = this.viewContainerRef.createComponent(myDynamicComponentFactory);
		this.component.instance.config = this.config;
		this.component.instance.group = this.group;
    console.log(' My myDynamicComponentFactory is - ', myDynamicComponentFactory);
    console.log(' My component is - ',this.component);
  }
}
