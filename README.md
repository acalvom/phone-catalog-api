# ☁️	REST API 〰️ Phone Catalog
> Back-End Rest API for the application Phone Catalog    
> Made by Andrea Calvo Moreno
>
> This repository contains the back-end code of the "Phone Catalog" application.
>"build" directory is generated in the REACT project and it contains the interface served as static files. 


## 🎯 Minimum requirements
   - REST API implemented in Node.js
   - End-Points GET /phones *(more details in [End Points documentation](#end-points-documentation))* 
   
## ➕ API improvements:
   - Add more End-Points: 
       * GET phone by ID
       * DELETE phone by ID
       * POST new phone 
       * GET image by filename 
       * DELETE image by filename 
   - Use of packages: 
        - Multer for uploading images to DB
        - Express for routes handling
        - Nodemon for automatic "index.js" file reloading
        - Custom favicon
   - Implement a middleware for Express routes management & Split Routes and Controllers 
   - Unit & Integration End-Points tests with Mocha & Chai suite
   - Persistence layer with MySQL database


## ⚙️ Used Technologies
▪️`Git` `GitHub` 
▪️`Node.js` `Express`  
▪️`Multer` `Nodemon` 
▪️`MySQL` `phpMyAdmin` `JawsDB` 

## 📋 End Points Documentation
#### 🟢 GET phones
<table>
  <tr>
    <th>End-Point</th>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/phones</td>
    <td>Show all the phones in the DB</td>
  </tr>
  </table>
<table>
  <tr>
    <th>Responses</th>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>OK</td>
    <td>200</td>
    <td>An array with all the phones is returned in the response body</td>
  </tr>
  <tr>
    <td>NOTFOUND</td>
    <td>404</td>
    <td>No phones stored in the DB</td>
  </tr>
</table>

#### ⚪ GET phone by id
<table>
  <tr>
    <th>End-Point</th>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/phones/:id</td>
    <td>Show all the information from a single phone by its id</td>
  </tr>
  </table>
<table>
    <tr>
      <th>Parameters</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>id*</td>
      <td>int</td>
      <td>Primary and unique identifier</td>
    </tr>
   </table>  
<table>
  <tr>
    <th>Responses</th>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>OK</td>
    <td>200</td>
    <td>The phone information is returned in the response body</td>
  </tr>
  <tr>
    <td>NOTFOUND</td>
    <td>404</td>
    <td>No phone found in the DB with this id</td>
  </tr>
</table>

#### 🔴 DELETE phone by id
<table>
  <tr>
    <th>End-Point</th>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/phones/:id</td>
    <td>Delete a phone by its id</td>
  </tr>
  </table>
<table>
    <tr>
      <th>Parameters</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>id*</td>
      <td>int</td>
      <td>Primary and unique identifier</td>
    </tr>
   </table>
<table>
  <tr>
    <th>Responses</th>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>NO CONTENT</td>
    <td>204</td>
    <td>The phone has been successfully deleted</td>
  </tr>
  <tr>
    <td>NOTFOUND</td>
    <td>404</td>
    <td>No phone found in the DB with this id</td>
  </tr>
</table>

#### 🔵 POST phone
<table>
  <tr>
    <th>End-Point</th>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/add</td>
    <td>Add new phone in the DB</td>
  </tr>
  </table>
<table>
  <tr>
    <th>Parameters</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>id*</td>
    <td>int</td>
    <td>Primary and unique identifier</td>
  </tr>
  <tr>
    <td>name*</td>
    <td>string</td>
    <td>Phone name</td>
  </tr>
  <tr>
    <td>manufacturer*</td>
    <td>string</td>
    <td>Phone manufacturer</td>
  </tr>
  <tr>
    <td>description*</td>
    <td>string</td>
    <td>Phone description</td>
  </tr>
  <tr>
    <td>color*</td>
    <td>string</td>
    <td>Phone color</td>
  </tr>
  <tr>
    <td>price*</td>
    <td>decimal</td>
    <td>Phone price</td>
  </tr>
  <tr>
    <td>screen</td>
    <td>string</td>
    <td>Phone screen</td>
  </tr>
  <tr>
    <td>processor</td>
    <td>string</td>
    <td>Phone processor</td>
  </tr>
  <tr>
    <td>ram*</td>
    <td>int</td>
    <td>Phone RAM</td>
  </tr>
  <tr>
    <td>imageFileName*</td>
    <td>string</td>
    <td>Phone image filename</td>
  </tr>
  <tr>
  <td>imageEncryptedFileName</td>
    <td>string</td>
    <td>Phone image filename encrypted</td>
  </tr>
  <tr>
  <td>imageFilePath</td>
    <td>string</td>
    <td>Phone image path in back-end</td>
  </tr>
  </table>
<table>
  <tr>
    <th>Responses</th>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>CREATED</td>
    <td>201</td>
    <td>Phone created successfully</td>
  </tr>
  <tr>
    <td>BADREQUEST</td>
    <td>400</td>
    <td>Empty body</td>
  </tr>
  <tr>
    <td>SERVERERROR</td>
    <td>500</td>
    <td>Error in the server</td>
  </tr>
</table>

#### 🟤 GET image by filename
<table>
  <tr>
    <th>End-Point</th>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/uploads/:filename</td>
    <td>Response with an image path</td>
  </tr>
  </table>
<table>
    <tr>
      <th>Parameters</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>id*</td>
      <td>int</td>
      <td>Primary and unique identifier</td>
    </tr>
   </table>  
<table>
  <tr>
    <th>Responses</th>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>OK</td>
    <td>200</td>
    <td>Image path sent</td>
  </tr>
  <tr>
    <td>NOTFOUND</td>
    <td>400</td>
    <td>Error while requesting the image</td>
  </tr>
</table>
 
#### 🟠 DELETE image by filename
<table>
  <tr>
    <th>End-Point</th>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/uploads/:filename</td>
    <td>Deletes an image from Back-End</td>
  </tr>
  </table>
<table>
    <tr>
      <th>Parameters</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>id*</td>
      <td>int</td>
      <td>Primary and unique identifier</td>
    </tr>
   </table>  
<table>
  <tr>
    <th>Responses</th>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>OK</td>
    <td>200</td>
    <td>Image deleted successfully</td>
  </tr>
  <tr>
    <td>NOTFOUND</td>
    <td>400</td>
    <td>Error while deleting the image</td>
  </tr>
</table>

## :octocat: Repositories  
🔗 [Node.js REST API - Back-End](https://github.com/acalvom/phone-catalog-api) 
🔗 [Phone Catalog Management](https://github.com/acalvom/phone-catalog-board)   

## 🏁 Project set-up

```sh
> cd <folder path>
> git clone https://github.com/acalvom/phone-catalog-api
> cd phone-catalog-api
> phone-catalog-api> npm install
```

#### 📝 Create MySQL database with info:
```sh
"host": 'localhost',
"user": 'phone-catalog',
"password": 'dcsl',
"database": 'phone-catalog'
```
#### ⚙️Start MySQL engine
#### ▶️Run REST API: `> nodemon index.js` 
#### 🖥️ Open app: Open the browser in  [http://localhost:8000](http://localhost:8000)
#### ✅ Execute Mocha-Chai tests: `> npm test`
