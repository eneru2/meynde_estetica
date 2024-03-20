import { ResolveFn } from '@angular/router';
import TreatmentsList from './stores/treatments-list';

export const treatmentsResolver: ResolveFn<any> = (route, state) => {  
  
  const hello = () => TreatmentsList.map((item) => {
    let hey:boolean = false
    return hey
  });

  return true
};

