# ĐỒ ÁN HỌC TẬP - WEBSITE BÁN QUẦN ÁO MANGO 
## THỰC HIỆN BỞI: Bích Ngân và Minh Anh
<hr>
<br>

### Mô tả
<hr>
Website Mango được phát triển với 2 phần. Một phần dành cho khách hàng đùng để xem sản phầm và đặt hàng, một phần dành cho chủ cửa hàng dùng để quản lý sản phẩm và nhân đơn đặt hàng.

### Hướng dẫn cài đặt
<hr>

#### Trước khi thực hiện các bước run dự án bạn cần phải cài đặt các môi trường bên dưới cho máy tính:
* [NodeJs](https://nodejs.org/en) - V18 trở lên
* [Xampp](https://www.apachefriends.org/download.html) - dùng để chạy MySql

#### Sau khi cài đặt môi trường > Mở source code bằng Visual Studio Code và chạy các lệnh bên dưới
1. Cài đặt dependencies cho server
```
npm install
```
2. Run server
```
npm start
```
(*) npm start sẽ run nodemon. Cài nodemon trước khi run

Sau khi run server, truy cập vào địa chỉ bên dưới để vào website:
```
Website cho khách hàng: http://localhost:3000
Website cho chủ cửa hàng: http://localhost:3000/admin
```

### Kiến trúc và công nghệ
<hr>

#### Kiến trúc :
<br>

![Kiến trúc website](./architecture//web_architecture.png)

* Website sử dụng kiến monolithic (kiến trúc khối). 
* Website chia ra 2 side là Frontend và Backend. Frontend và Backend giao tiếp với nhau thông qua API.
* Cả 2 trang dành cho khách hàng và chủa cửa hàng đề dùng Client Side Render (CRD)

#### Công nghệ sử dụng :
Front end:
<br>
<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> 
<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> 
</a> 

Back end:

<br>
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
</a>   
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> 
</a> 

Database:

<br>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> 
</a> 

Quản lý mã nguồn:

<br>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
</a> 