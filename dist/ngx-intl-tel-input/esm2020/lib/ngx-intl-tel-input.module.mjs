import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/dropdown";
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
export class NgxIntlTelInputModule {
}
NgxIntlTelInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxIntlTelInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxIntlTelInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.5", ngImport: i0, type: NgxIntlTelInputModule, declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i1.BsDropdownModule], exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective] });
NgxIntlTelInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxIntlTelInputModule, imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        dropdownModuleForRoot] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxIntlTelInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        dropdownModuleForRoot,
                    ],
                    exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1pbnRsLXRlbC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBRTFFLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUEwQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQVl2RyxNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO21IQUFyQixxQkFBcUIsaUJBVGxCLHdCQUF3QixFQUFFLDhCQUE4QixhQUV0RSxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQixrQ0FHVix3QkFBd0IsRUFBRSw4QkFBOEI7bUhBRXRELHFCQUFxQixZQVBoQyxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixxQkFBcUI7MkZBSVYscUJBQXFCO2tCQVZqQyxRQUFRO21CQUFDO29CQUNULFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixDQUFDO29CQUN4RSxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIscUJBQXFCO3FCQUNwQjtvQkFDRixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQztpQkFDbkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCc0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kcm9wZG93bic7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9uYXRpdmUtZWxlbWVudC1pbmplY3Rvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4SW50bFRlbElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtaW50bC10ZWwtaW5wdXQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTW9kdWxlRm9yUm9vdDogTW9kdWxlV2l0aFByb3ZpZGVyczxCc0Ryb3Bkb3duTW9kdWxlPiA9IEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRkcm9wZG93bk1vZHVsZUZvclJvb3QsXG4gIF0sXG5cdGV4cG9ydHM6IFtOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEludGxUZWxJbnB1dE1vZHVsZSB7XG5cbn1cbiJdfQ==