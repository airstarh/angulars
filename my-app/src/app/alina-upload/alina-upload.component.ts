import { Component, OnInit } from '@angular/core';

import {
    Ng4FilesStatus,
    Ng4FilesSelected,
    Ng4FilesService,
    Ng4FilesConfig,
} from '../ng4-files';

@Component({
  selector: 'app-alina-upload',
  templateUrl: './alina-upload.component.html',
  styleUrls: ['./alina-upload.component.css']
})
export class AlinaUploadComponent implements OnInit {

    public selectedFiles;

    constructor(
        private ng4FilesService: Ng4FilesService
    ) {}

    ngOnInit() {
        this.ng4FilesService.addConfig(this.configImage, 'my-image-config');
        this.ng4FilesService.addConfig(this.configVideo, 'my-video-config');
    }

    private configImage: Ng4FilesConfig = {
        acceptExtensions: ['jpg', 'jpeg'],
        maxFilesCount: 5,
        totalFilesSize: 101200000,
        maxFileSize: 500000
    };

    private configVideo: Ng4FilesConfig = {
        acceptExtensions: ['mp4', 'avi'],
        maxFilesCount: 1
    };

    public filesSelect(selectedFiles: Ng4FilesSelected): void {
        if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
            this.selectedFiles = selectedFiles.status;
            return;
        }

        // Handle error statuses here

        this.selectedFiles = Array.from(selectedFiles.files).map(file => file.name);
    }
}
