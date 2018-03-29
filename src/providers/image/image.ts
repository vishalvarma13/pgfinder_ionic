import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ImageProvider {

  public cameraImage: String;

  
  constructor(public http: Http, private _CAMERA : Camera) {
    console.log('Hello ImageProvider Provider');
  }

  selectImage() : Promise<any>
  {
     return new Promise(resolve =>
     {
        let cameraOptions : CameraOptions = {
            sourceType         : this._CAMERA.PictureSourceType.PHOTOLIBRARY,
            destinationType    : this._CAMERA.DestinationType.DATA_URL,
            quality            : 100,
            targetWidth        : 320,
            targetHeight       : 240,
            encodingType       : this._CAMERA.EncodingType.JPEG,
            correctOrientation : true
        };

        this._CAMERA.getPicture(cameraOptions)
        .then((data) =>
        {
           this.cameraImage 	= "data:image/jpeg;base64," + data;
           resolve(this.cameraImage);
        });


     });
  }

}
