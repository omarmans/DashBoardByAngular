import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-uploads',
  templateUrl: './latest-uploads.component.html',
  styleUrls: ['./latest-uploads.component.scss'],
})
export class LatestUploadsComponent {
  latestUploads = [
    {
      fileName: 'my-file.pdf',
      fileImage: 'pdf.svg',
      uploader: 'Mans',
      fileSize: '2.9mb',
    },
    {
      fileName: 'My-Video-File.avi',
      fileImage: 'avi.svg',
      uploader: 'Admin',
      fileSize: '4.9mb',
    },
    {
      fileName: 'My-Psd-File.psd',
      fileImage: 'psd.svg',
      uploader: 'Osama',
      fileSize: '4.5mb',
    },
    {
      fileName: 'My-Zip-File.zip',
      fileImage: 'zip.svg',
      uploader: 'User',
      fileSize: '8.9mb',
    },
    {
      fileName: 'My-DLL-File.dll',
      fileImage: 'dll.svg',
      uploader: 'Admin',
      fileSize: '4.9mb',
    },
    {
      fileName: 'My-Eps-File.eps',
      fileImage: 'eps.svg',
      uploader: 'Designer',
      fileSize: '8.9mb',
    },
  ];

  downloadFile(fileImage: string): void {
    const link = document.createElement('a');
    link.href = 'assets/DATA&IMGS/page1/uploads/' + fileImage;
    link.download = fileImage;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
