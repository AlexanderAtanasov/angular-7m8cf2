import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'file-button',
  templateUrl: './file-button.html',
})
export class FileButton {
  runWorkflowWithFile(event: any): void {
    const selectedFile = event.target.files[0];
    const params = new HttpParams().set('filename', selectedFile.name);
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      event.target.value = '';
    });
    fileReader.readAsArrayBuffer(selectedFile);
  }
}
