import { Ubication } from 'src/app/models/ubication';
import { Component, OnInit } from '@angular/core';
import { RecyclingCenterService } from 'src/app/services/recycling-center.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecyclingCenter } from 'src/app/models/RecyclingCenter';
import { UbicationService } from 'src/app/services/ubication.service';

@Component({
  selector: 'app-crear-recycling-center',
  templateUrl: './crear-recycling-center.component.html',
  styleUrls: ['./crear-recycling-center.component.css']
})
export class CrearRecyclingCenterComponent implements OnInit {
  form: FormGroup= new FormGroup({});;
  recyclingCenter: RecyclingCenter = new RecyclingCenter();
  mensaje: string = '';
  listaUbicacion: Ubication[] = [];
  edicion: boolean = false;
  tipoCiudad: { value: string; viewValue: string }[] = [
    { value: 'Miraflores', viewValue: 'Miraflores' },
    { value: 'San Isidro', viewValue: 'San Isidro' },
    { value: 'Barranco', viewValue: 'Barranco' },
    { value: 'San Borja', viewValue: 'San Borja' },
    { value: 'Surco', viewValue: 'Surco' },
    { value: 'La Molina', viewValue: 'La Molina' },
    { value: 'Lince', viewValue: 'Lince' },
    { value: 'Chorrillos', viewValue: 'Chorrillos' },
  ];

  constructor(
    private rS: RecyclingCenterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private uS: UbicationService
  ) {
    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idRecyclingCenter:[''],
      nameRecyclingCenter: ['', Validators.required],
      licenseRecyclingCenter: ['', Validators.required],
      openinghourRecyclingCenter: [0, [Validators.required]],
      closingtimeRecyclingCenter: [0, [Validators.required]],
      idUbication: [0, Validators.required],
      addressUbication:['', Validators.required],
      cityUbication:['', Validators.required],
      contactUbication:[0, Validators.required],
      typeUbication:['', Validators.required],
      descUbication:['', Validators.required],
    });

  }

  onSubmit() {
    if (this.form.valid) {
      let newUbication: Ubication = {
        idUbication: 0,
        ubicationDate: new Date(),
        addressUbication: this.form.get('addressUbication')?.value,
        cityUbication: this.form.get('cityUbication')?.value,
        contactUbication: this.form.get('contactUbication')?.value,
        typeUbication: this.form.get('typeUbication')?.value,
        descUbication: this.form.get('descUbication')?.value,
      };

       
      this.uS.insert(newUbication).subscribe({
        next: (createdUbication: Ubication) => {
          this.uS.list().subscribe({
            next: (ubications: Ubication[]) => {
              const lastUbication = ubications[ubications.length - 1];
              this.addRecyclingCenter(lastUbication);
            },
            error: (error) => {
              console.error('Error al obtener las ubicaciones', error);
            }
          });
        },
        error: (error) => {
          console.error('Error al insertar la ubicación', error);
        }
      });
     
      /*this.recyclingCenter.nameRecyclingCenter=this.form.value.nameRecyclingCenter;
      this.recyclingCenter.licenseRecyclingCenter=this.form.value.licenseRecyclingCenter;
      this.recyclingCenter.openinghourRecyclingCenter=this.form.value.openinghourRecyclingCenter;
      this.recyclingCenter.closingtimeRecyclingCenter=this.form.value.closingtimeRecyclingCenter;

      
        
      this.uS.insert(newUbication).subscribe({
        next: (createdUbication: Ubication) => {
          // Asignar la ubicación creada al centro de reciclaje
          this.recyclingCenter.idUbication = createdUbication;
          // Luego guardar el centro de reciclaje
          this.rS.insert(this.recyclingCenter).subscribe(
            () => {

              this.router.navigate(['/ubications']);
            },
            (error) => {
              console.error('Error al insertar el centro de reciclaje', error);
            }
          );
          
        },
        
        error: (error) => {
          console.error('Error al insertar la ubicación', error);
        }
      
      });
      

      console.log(this.recyclingCenter.idUbication.idUbication)

*/
      
    }
  }
  addRecyclingCenter(ubication: Ubication) {
    this.recyclingCenter.nameRecyclingCenter = this.form.value.nameRecyclingCenter;
    this.recyclingCenter.licenseRecyclingCenter = this.form.value.licenseRecyclingCenter;
    this.recyclingCenter.openinghourRecyclingCenter = this.form.value.openinghourRecyclingCenter;
    this.recyclingCenter.closingtimeRecyclingCenter = this.form.value.closingtimeRecyclingCenter;
    this.recyclingCenter.idUbication = ubication;
  
    this.rS.insert(this.recyclingCenter).subscribe(
      () => {
        console.log('Recycling Center inserted successfully.');
        this.router.navigate(['/ubications']);
      },
      (error) => {
        console.error('Error al insertar el centro de reciclaje', error);
      }
    );
  }
  
}


