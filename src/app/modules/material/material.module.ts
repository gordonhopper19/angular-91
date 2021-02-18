import { NgModule } from "@angular/core";

import { CdkTableModule } from "@angular/cdk/table";
import { A11yModule } from "@angular/cdk/a11y";
import { BidiModule } from "@angular/cdk/bidi";
import { OverlayModule } from "@angular/cdk/overlay";
import { PlatformModule } from "@angular/cdk/platform";
import { ObserversModule } from "@angular/cdk/observers";
import { PortalModule } from "@angular/cdk/portal";
import { MatButtonModule } from "@angular/material/button";
import {
  MatNativeDateModule,
  MatPseudoCheckboxModule,
  MatRippleModule
} from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSlideToggleModule } from "@angular/material/typings";

@NgModule({
  exports: [
    // Material Modules
    // MatAutocompleteModule,
    MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    MatPseudoCheckboxModule,
    // MatChipsModule,
    // MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    // MatExpansionModule,
    MatFormFieldModule,
    // MatGridListModule,
    // MatIconModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    MatRippleModule,
    // MatSelectModule,
    // MatSidenavModule,
    MatSlideToggleModule,
    // MatSliderModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTabsModule,
    // MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    // MatStepperModule,
    CdkTableModule,
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule
  ],
  providers: []
})
export class MaterialModule {}
