import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationService } from '../services/notification-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss'],
})
export class AddAnnouncementFormComponent {
  title:string
  author:string
  message:string
  categorySelected:string
  image:string
  listOfCategories: Category[] = [
    { id: '1', name: 'Courses' },
    { id: '2', name: 'General' },
    { id: '3', name: 'Labs' },
  ];

  announcementId: string;

  constructor(
    private announcementService: AnnouncementService, 
    private notificationService: NotificationService, 
    private router: Router){}
  onSubmit() {  
    const announcement: Announcement = {
      id: undefined,
      title: this.title,
      author: this.author,
      message: this.message,
      categoryId: this.categorySelected,
      image: this.image,
    };
      
      this.announcementService.addAnnouncement(announcement).subscribe((createdAnnouncement) => {
        this.notificationService.sendMessage('BroadcastMessage', [createdAnnouncement]);
      });
  }
}
