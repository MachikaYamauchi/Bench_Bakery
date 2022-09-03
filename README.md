# Bench Bakery

![GitHub BenchBakery_infinite_pressed](https://user-images.githubusercontent.com/95946408/188254918-60817c17-385d-48e9-b06c-51c399bce37b.gif)

## About the Project
This is a 2-day challenge project to build a full-stack e-commerce site (School Project)

## Description
Bench Bakery is a microservices-based e-commerce web application that helps hungry people to order easily. I built both the front-end and back-end. For the front-end, I created the logo and designed the website to be SEO friendly. For the back-end, I built client-server architecture with REST APIs and stored procedures that connect to MySQL. In this application, the bakery owners can manage the website by CMS. They can add, update and delete a product onto the website.
<br>
[DEMO Site](https://machikayamauchi.me/benchbakery/home)

## Skill & Tools
- Angular
- Node.js
- REST APIs
- MySQL
- Bootstrap
- Figma
- Illustrator
- Agile

## Features
### Front-end
- Display the list of products available on the homepage
- Show clear title, description, stock availability, and price for each of the products
- Product details page connecting from the list (I add the details page after the project was finished.)
  - 3 images for each product with a carousel
  - Quantity section (Upcoming Feature)
  - Add to cart (Upcoming Feature)
- Login to enter the admin page
- Create an admin page so that the bakery owners can add, update and delete a product onto the website
- Sign out from the admin page (I add the sign out after the project finished.)
- Responsive on all screen sizes so that shoppers can access the e-commerce website from any gadget

### Back-end
- All data of listing products on the homepage are needed to be in JSON format with appropriate interfaces defined

### Marketing
- SEO friendly to gain a higher rank in the search results

### Design
- Typography
  - Very relevant to e-commerce websites so that it is easy for online shoppers to read and follow
- Design
  - Satisfy all basic user experience requirements for being easy and intuitive to use

## What I did
### Site Map

### Front-end
- Microservices
  - Connecting the Rest API endpoints from the server to the client

- Subscribe
  - Subscribe the data from the services folder in each component

- ActivatedRoute
  - Connect to the detail page from the products listing on the homepage by using the product id
 
- LocalStorage
  - Enabled to login and sign out from the admin page
  
- Admin page
  - Able to manage front page by adding, updating, deleting, and toggling display
  - For the dashboard layout, use [Bootstrap Examples](https://getbootstrap.com/docs/5.2/examples/dashboard/)

- File Uploading
  - Creating methods to upload image files to the database

- Responsive
  Using [Bootstrap grid system](https://getbootstrap.com/docs/5.2/layout/grid/#example)
  
- Carousel
  On the product details page, I implemented [Bootstrap carousel](https://getbootstrap.com/docs/5.2/components/carousel/#how-it-works)

### Data Structure
![Data_Structure](https://user-images.githubusercontent.com/95946408/188260154-48ccde32-54d3-4cb5-9b7c-e2a708ed95cd.jpg)

### MySQL Stored Procedures
1. Add new product
2. Delete Product
3. Select products which will be displayed on the front page
4. Get all products
5. Get one product selected by product id
6. login
7. Toggle display on the front page
8. Update the product

<img src="https://user-images.githubusercontent.com/95946408/188260640-0342037d-e763-4b5c-a425-bfac4f68eba7.png" width="500px">

### REST API Endpoints
Build REST API Endpoints to create the e-commerce CMS function

<img src="https://user-images.githubusercontent.com/95946408/188286620-8fa19b23-d744-4fe0-acf5-2bdce57625b8.jpg" width="640px">

### Marketing
- Write keywords on the meta tag, title tag, and H1 tag
- Set alt description on the image tag.
- Semantic HTML

### Agile
- T-shirt sizing on each user story to plan the development

## Upcoming Features
- Cart function
- User authentication
- Add product category
- Filter products by the category
- Product search function
- Payment System


