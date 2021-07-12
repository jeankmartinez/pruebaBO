import { Component } from '@angular/core';
import { ApiService } from './servicios/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banco de Occidente';

  data_cliente: any = {
    nit:"",
    nombre:"",
    capa:"",
    segmento:"",
    gerenteRelacion:""
  }

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.obtener().subscribe(data=>{
      console.log(data);
    });
  }
  public obtener(){
    return this.apiService.getCustomers();
  }
}

