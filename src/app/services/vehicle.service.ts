import {computed, Injectable, signal} from '@angular/core';
import {httpResource, HttpResponse} from '@angular/common/http';

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface VehicleResponse {
  count: number;
  next: string;
  previous: string;
  results: Vehicle[];
}

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  private vehicleUrl = 'https://swapi.py4e.com/api/vehicles/';

  vehicleModels = signal<string[]>([
    'landspeeder', 'airspeeder', 'bomber', 'transport','crawler','skyhopper','starfighter','barge'
  ]);
  selectedModel = signal<string>('');

  // Use httpResource (resource APIs) only for retrieval operation of data - uses switchMap style of execution; existing HTTP request is canceled when a new one is issued;
  // resource() if you want to use the JS fetch method and work with promises
  // rxResource if you want to work with observables - useful for additional processing like mapping: mergeMap, forkJoin etc
  // httpResource() if you have requests specified with a URL, or complex requests that require defining a request object
  private vehiclesResource = httpResource<VehicleResponse>(() => (
      {
        url: this.vehicleUrl,
        params: {
          search: this.selectedModel()
        }
      }
    )
  );

  vehicles = computed(() => this.vehiclesResource.value()?.results ?? [] as Vehicle[]);
  error = computed(() => this.vehiclesResource.error());
  isLoading = this.vehiclesResource.isLoading;
}
