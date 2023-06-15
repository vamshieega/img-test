import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'img-test';


  async downloadImage(imageSrc: any, nameOfDownload: string) {
    console.log(imageSrc);
    console.log("len : ", imageSrc.length);
    console.log(typeof (imageSrc));

    const response = await fetch(imageSrc);
    console.log(response)
    const blobImage = await response.blob();
    console.log(blobImage)
    const href = URL.createObjectURL(blobImage);
    console.log(href)
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
  }

  imageDownload(url: string) {
    this.downloadImage(url, "fileName",).then(() => {
      console.log('The image has been downloaded');
    }).catch(err => {
      console.log('Error downloading image: ', err);
    });

  }

}
