## Middleware 實作練習 
- 目標:伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡，資訊包括：時間戳記 (time-stamps) -以當地時間 (台北) ，顯示請求的 HTTP 方法、URL以及total time


### prerequisites
- Node.js: v10.15.0
- Express: v4.17.1



### installation and execution
- 將專案clone到本地端

git clone https://github.com/SophiaCheng66/Middleware1.git 

- 進入到專案資料夾後，安裝packages

cd  Middleware1  npm install
  
- 透過nodemon啟動專案

npm run dev或npm start


- 在terminal可以看到 This app is running on 3000
 ，開啟瀏覽器在網址列輸入localhost:3000
 
 
 
