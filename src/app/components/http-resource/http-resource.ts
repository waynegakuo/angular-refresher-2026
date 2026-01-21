import {Component, inject} from '@angular/core';
import {VehicleService} from '../../services/vehicle.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-http-resource',
  imports: [
    FormsModule
  ],
  templateUrl: './http-resource.html',
  styleUrl: './http-resource.scss',
})
export class HttpResource {
  vehicleService = inject(VehicleService);

  // Signals supporting for template
  vehicleModels = this.vehicleService.vehicleModels;
  selectedModel = this.vehicleService.selectedModel;
  vehicles = this.vehicleService.vehicles;
  errorMessage = this.vehicleService.error;
  isLoading = this.vehicleService.isLoading;
}
