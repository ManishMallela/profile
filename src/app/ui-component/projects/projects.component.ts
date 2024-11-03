import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  items = [
    {
      title: 'Tablue Wrapper Application for Client',
      image: 'assets/images/download.jpg',
      description: `I worked as a full-stack developer on a client portal project aimed at streamlining access to and management of Tableau reports. This portal allows clients to log in, view their reports, publish them, and perform actions like review, approval, or decline. The project involved an Angular frontend and a Java backend, with AWS infrastructure supporting the system. Key AWS services included S3 for storage, ECS and ECR for containerized applications, Secrets Manager for secure credential handling, and MySQL RDS for database management.

In this project, I made significant contributions to signage functionalities and gained valuable experience with web development tools and cloud services. This project was a great opportunity to deepen my skills across the full stack, leveraging AWS services to build a secure and scalable solution for client reporting needs.`,
    },
    {
      title:
        'Cloud Transformation: Migrating Data Analytics to AWS and Snowflake',
      image: 'assets/images/download.jpg',
      description: `In our second project, we assisted a client in migrating their existing data analyst application from on-premises infrastructure to AWS, along with transitioning their data from Teradata to Snowflake. As part of this migration, we containerized the Angular application using Docker and updated it to the latest Angular version. Additionally, we modified all Node.js backend services to ensure compatibility with Snowflake and various AWS services.

This project not only enhanced the application’s scalability and performance but also provided a modernized data processing environment for the client.

`,
    },
    {
      title:
        'Efficient Data Compliance: Automated PGP File Handling and Archiving',
      image: 'assets/images/cognizant.png',
      description: `In this project, I developed a backend Java application for clients designed to read and analyze encrypted PGP files. The application archives the processed files in S3 Glacier, ensuring compliance with customer communications, including emails and SMS messages.

A key feature of this project was the development of a backend robot that tracks the number of files being decrypted. It includes a robust mechanism for retrying failed file decryption attempts and is designed to schedule jobs to run three times a day, ensuring timely processing of data.`,
    },
  ];
  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    // Start autoplay on component initialization
    this.startAutoplay();
  }

  ngOnDestroy() {
    // Clear the interval when component is destroyed
    this.clearAutoplay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  startAutoplay() {
    this.intervalId = setInterval(() => this.nextSlide(), 3000); // Change slide every 3 seconds
  }

  clearAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
