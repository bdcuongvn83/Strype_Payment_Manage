# Strype_Payment_Manage

# Features:
This is a small project that enables payment processing via Stripe.

1- Website 
## 1. Layout
![image](https://github.com/user-attachments/assets/602c1d37-104d-437f-a69c-72e1afde927d)

![image](https://github.com/user-attachments/assets/45f5c7de-ccb2-4f0a-8b2e-ba29c81b47da)

## 2. Flow Layout Product Management:

![image](https://github.com/user-attachments/assets/4928a9c2-0ea4-4bfb-a6fb-30bfd9058738)

Refer more detail from strype document :https://docs.stripe.com/payments/paymentintents/lifecycle  
## 3. Demo

Installation Guide


## Install node.js
1. https://nodejs.org/en/download
Node v22.11.0 (LTS)

## BackEnd:

1. clone this repository, move to folder backend
2. Open cmd in backend
3. npm install (install node.js firstly)

## FrondEnd:
1. clone this repository, move to folder frondend 
2. Open cmd in backend
3. npm install (install node.js firstly)

## Strype register
[https://dashboard.stripe.com/](https://dashboard.stripe.com/)
1. After register account, setup with mode TestMode, not activate account.
2. Get public-key and secretkey from menu strype's APIs key.
![image](https://github.com/user-attachments/assets/dfe7b3d1-6af1-47bd-b224-2bbd940cec37)

3. Edit public key to frondend: file stripe-frondend\App.tsx

Need update your public key from strype API  
![image](https://github.com/user-attachments/assets/0312be58-ced2-48ec-a2a2-5e231b80932c)
   
4. Edit secret key to backend: file. stripe-back-end\.env
Need update your secret key from strype API  
![image](https://github.com/user-attachments/assets/ad5a648c-fde4-42b8-beab-b5c27079d8b8)


## How to run

1. Firstly, run backend.
From cmd, move to folder backend
npm run start:dev
(run option start:dev, help us when change source code, source code will aumatically be builded.
(run with port 3000)
2. Run frondend
npm start
(run with port )
3. Open browser, run url:
http://localhost:5173
4. using data test below:
![image](https://github.com/user-attachments/assets/836cfb84-93a2-4412-8c12-9aa410ae6fd8)

## Contributions  
Contributions are welcome! Please open an issue or submit a pull request.  

## structure source code:

### Backend structure:

![image](https://github.com/user-attachments/assets/5798bed1-4940-4006-a2db-c550ddd4b41c)


### Frondend structure:

![image](https://github.com/user-attachments/assets/9354255d-a8e6-477c-9b20-27e36411ca1c)


Author: [DUC CUONG BUI] Project: [school manage aspnetcore] GitHub Repository: [Repository URL] License: GPL License  

GPL-3.0 License  

Copyright (C) [2025] [DUC CUONG BUI]  

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.  

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
  
You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.  

