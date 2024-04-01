import { Injectable } from '@angular/core';
import TreatmentsList from '../stores/treatments-list';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  constructor() {}
  filterOut(treatmentType:string, query?:string) {
    if (query) {
      return TreatmentsList
      .filter((item) => {
        if(treatmentType == "todos" || item.type == treatmentType){
          switch(item.name.toLowerCase().includes(query) || 
          item.description?.toLowerCase().includes(query) || 
          item.searchTerm.toLowerCase().includes(query)){
            case true:
              return item
            case false:
              return
          }
        } else return
      })
      .sort((a,b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        } 
        return 0
      }) 
    } else return TreatmentsList
      .filter((item) => {
        if(treatmentType == "todos" || item.type == treatmentType){
          return item
        } else return
      })
  }
  
  searchProducts(treatmentType:string, userInput?:string) {    
    if (userInput) {
        const query = userInput.toLowerCase() || ""
        return this.filterOut(treatmentType, query)      
    } else {
      return this.filterOut(treatmentType)
    }
  }
}