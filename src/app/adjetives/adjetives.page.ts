import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-adjetives',
  templateUrl: './adjetives.page.html',
  styleUrls: ['./adjetives.page.scss'],
})
export class AdjetivesPage implements OnInit {

  constructor(private apiService: ApiService) { }
  adjetives: any[] = [];
  adjetive:  any = [];
  isModalOpen = false;
  currentPage: number = 1;
  totalPages: number=1;
  modelValue:string ="";

  ngOnInit() {
    this.fetchAdjetives();
  }
  async canDismiss(data?: any, role?: string) {
    console.log("click modal");
    return role !== 'gesture';
  }
  setOpen(isOpen: boolean, adejtiveR:any[] = []) {
    this.isModalOpen = isOpen;
    this.adjetive=adejtiveR;
    
    console.log('View verb:', this.adjetive);
  } 


  fetchAdjetives(page: number = 1) {
    this.apiService.getAdjetives(page).subscribe( 
      //console
      response => {
        this.adjetives = response.data.data; // Accede a la lista de adjetivos 
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
        console.log(this.adjetives);
      },
      error => {
        console.log("error en la API ");
        console.error('Error fetching data', error);
      }
    );
  }

  loadNextPage() {
    if (this.currentPage < this.totalPages) {
      this.fetchAdjetives(this.currentPage + 1);
    }
  }

  loadPreviousPage() {
    if (this.currentPage > 1) {
      this.fetchAdjetives(this.currentPage - 1);
    }
  }

  onModelChange(value: string){
    if (value.length >=2) {
      console.log('Model value changed: search adejtive  ', value);
      this.getAdejtiveSearch(value);
      
    } else {
      console.log('Model value changed: does not search adejtive  ', value);
      this.fetchAdjetives();
    }

  }
  getAdejtiveSearch(adj:string =''){
    this.apiService.getSearchAdjetives(adj).subscribe(
      response=>{
        this.adjetives= response.data
        this.currentPage=0;
        this.totalPages=0;
        console.log(this.adjetives);

      },error => {
        console.error('Error data search adjetive ');

      }

    );
  }

}
