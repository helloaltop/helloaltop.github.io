"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3851],{5106:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"internet-of-things/menampilakan-text-di-lcd","title":"Menampilkan Text di LCDD","description":"[!NOTE]","source":"@site/docs/internet-of-things/1. menampilakan-text-di-lcd.md","sourceDirName":"internet-of-things","slug":"/internet-of-things/menampilakan-text-di-lcd","permalink":"/docs/internet-of-things/menampilakan-text-di-lcd","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/internet-of-things/1. menampilakan-text-di-lcd.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Internet of Things","permalink":"/docs/category/internet-of-things"},"next":{"title":"Create a Document","permalink":"/docs/internet-of-things/create-a-document"}}');var r=a(4848),t=a(8453);const d={sidebar_position:1},l="Menampilkan Text di LCDD",s={},o=[{value:"\u2699\ufe0f Komponen yang Diperlukan",id:"\ufe0f-komponen-yang-diperlukan",level:2},{value:"\ud83d\udca1 Software dan Librari yang digunakan",id:"-software-dan-librari-yang-digunakan",level:2},{value:"\u231b\ufe0f Tahapan Pengerjaan",id:"\ufe0f-tahapan-pengerjaan",level:2},{value:"Jalankan Kode berikut di Arduino IDE setelah merangkai alat",id:"jalankan-kode-berikut-di-arduino-ide-setelah-merangkai-alat",level:3},{value:"Setelah berhasil upload, buka serial monitor untuk melihat hasil nya. 0x27 adakah alamat i2c nya. Copy dan paste alamat tersebut nanti di Kode Program Utama",id:"setelah-berhasil-upload-buka-serial-monitor-untuk-melihat-hasil-nya-0x27-adakah-alamat-i2c-nya-copy-dan-paste-alamat-tersebut-nanti-di-kode-program-utama",level:3},{value:"\ud83c\udd98 Troubleshoot",id:"-troubleshoot",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components},{Details:a}=e;return a||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"menampilkan-text-di-lcdd",children:"Menampilkan Text di LCDD"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"[!NOTE]\nHalo semuanya, kali ini kita akan belajar menampilkan text di LCD 16x2 I2C menggunakan Arduino UNO. Di sini saya menggunakan Arduino UNO R4, namun kalian bisa menggunakan yang versi sebelumnya R3."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"fn do_something() {\n    let y = 13;\n    let z = 11;\n}\n\nfn main() {\n    let x = 24;\n    do_something();\n    let a = 4;\n    let b = 18;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\ufe0f-komponen-yang-diperlukan",children:"\u2699\ufe0f Komponen yang Diperlukan"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"No"}),(0,r.jsx)(e.th,{children:"Komponen"}),(0,r.jsx)(e.th,{children:"Jumlah"}),(0,r.jsx)(e.th,{children:"Deskripsi"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Arduino UNO"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://shope.ee/2LA9ZZRSl4?share_channel_code=2",children:"link"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"Kabel JUmper Male to Female"}),(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://shope.ee/5V7BLyRKg1?share_channel_code=2",children:"link"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"LCD 16x2 I2C"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://shope.ee/20XJBdpQrD?share_channel_code=2",children:"link"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"-software-dan-librari-yang-digunakan",children:"\ud83d\udca1 Software dan Librari yang digunakan"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"No"}),(0,r.jsx)(e.th,{children:"Komponen"}),(0,r.jsx)(e.th,{children:"Deskripsi"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Arduino IDE"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://www.arduino.cc/en/software",children:"Download"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"Librari LiquidCrystal_I2C"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://downloads.arduino.cc/libraries/github.com/marcoschwartz/LiquidCrystal_I2C-1.1.2.zip?_gl=1*hwesa7*_ga*MjkyMTI4NTA4LjE2OTc5NDMyNjE.*_ga_NEXN8H46L5*MTcwODMxMjkyNy40NS4xLjE3MDgzMTMwNjguMC4wLjA.*_fplc*b3N1eGVMdnRIQSUyQlREUjV1YjVpQ1A5VXZsU3YweE1aWmlyU2h0MjhFOUNLZW9xaW01MkdHcVdpNGVOdVhWaGhPNnRFJTJCSlZKWHFwSzFMcjRzJTJGZ0FvZnNqNmVlWnlIQXpjSngxZGd0MUlnMXNWdzB6MndjcXRDUlBpWGhrWVZBJTNEJTNE",children:"Download"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\ufe0f-tahapan-pengerjaan",children:"\u231b\ufe0f Tahapan Pengerjaan"}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"1\ufe0f\u20e3 Rangkai Alat seperti gambar berikut"}),(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"LCD I2C"}),(0,r.jsx)(e.th,{children:"Arduino UNO"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"VCC"}),(0,r.jsx)(e.td,{children:"5V"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GND"}),(0,r.jsx)(e.td,{children:"GND"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SDA"}),(0,r.jsx)(e.td,{children:"A4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SCL"}),(0,r.jsx)(e.td,{children:"A5"})]})]})]}),(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://github.com/altopacademy/Menampilkan-Text-di-LCD-16x2-I2C-dengan-Arduino-UNO/assets/48623013/f5e8e3f7-fded-4d0d-9084-83b9bb0939e9",alt:"Fantastic Jarv-Vihelmo (1)"})})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"2\ufe0f\u20e3 Mendapatkan Alamat i2c dari LCD"}),(0,r.jsx)(e.h3,{id:"jalankan-kode-berikut-di-arduino-ide-setelah-merangkai-alat",children:"Jalankan Kode berikut di Arduino IDE setelah merangkai alat"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-C++",children:'#include <Wire.h>\n\nvoid setup() {\nWire.begin();\nSerial.begin(115200);\nSerial.println("\\nI2C Scanner");\n}\n\nvoid loop() {\nbyte error, address;\nint nDevices;\nSerial.println("Scanning...");\nnDevices = 0;\nfor(address = 1; address < 127; address++ ) {\n  Wire.beginTransmission(address);\n  error = Wire.endTransmission();\n  if (error == 0) {\n    Serial.print("I2C device found at address 0x");\n    if (address<16) {\n      Serial.print("0");\n    }\n    Serial.println(address,HEX);\n    nDevices++;\n  }\n  else if (error==4) {\n    Serial.print("Unknow error at address 0x");\n    if (address<16) {\n      Serial.print("0");\n    }\n    Serial.println(address,HEX);\n  }    \n}\nif (nDevices == 0) {\n  Serial.println("No I2C devices found\\n");\n}\nelse {\n  Serial.println("done\\n");\n}\ndelay(5000);          \n}\n'})}),(0,r.jsx)(e.h3,{id:"setelah-berhasil-upload-buka-serial-monitor-untuk-melihat-hasil-nya-0x27-adakah-alamat-i2c-nya-copy-dan-paste-alamat-tersebut-nanti-di-kode-program-utama",children:"Setelah berhasil upload, buka serial monitor untuk melihat hasil nya. 0x27 adakah alamat i2c nya. Copy dan paste alamat tersebut nanti di Kode Program Utama"}),(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://github.com/altopacademy/Menampilkan-Text-di-LCD-16x2-I2C-dengan-Arduino-UNO/assets/48623013/bce8a980-e0d6-47a5-9916-db648087d6cc",alt:"Screenshot 2024-02-19 at 12 25 22"})})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"3\ufe0f\u20e3 Install Library LiquidCrystal_i2c "}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Download Librari LiquidCrystal di atas"}),"\n",(0,r.jsx)(e.li,{children:"Masuk ke software Arduino IDE, pilih Sketch > Include Library > add .ZIP Library"}),"\n",(0,r.jsx)(e.li,{}),"\n"]}),(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://github.com/altopacademy/Menampilkan-Text-di-LCD-16x2-I2C-dengan-Arduino-UNO/assets/48623013/8441bcdf-02bc-484c-887a-0226a1717a41",alt:"Screenshot 2024-02-19 at 11 28 19"})}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Pilih File zip yang sudah kamu download di langkah 1"}),"\n",(0,r.jsx)(e.li,{children:'Klik Open dan jika berhasil akan muncul tulisan " Library installed "'}),"\n"]})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"4\ufe0f\u20e3 Tulis Kode Utama berikut di Arduino IDE"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-C++",children:'#include <LiquidCrystal_I2C.h>\nLiquidCrystal_I2C lcd(0x27, 16, 2);  \n\nvoid setup(){\nlcd.init();                    \nlcd.backlight();\n}\n\nvoid loop(){\nlcd.setCursor(0, 0);\nlcd.print("Selamat pagii");\ndelay(1000);\nlcd.clear();\nlcd.setCursor(1,1);\nlcd.print("Semangat senin !!");\ndelay(1000);\nlcd.clear(); \n}\n'})})]}),"\n",(0,r.jsx)(a,{children:(0,r.jsx)("summary",{children:"5\ufe0f\u20e3 Upload Kode yang sudah kamu tulis di Arduino IDE"})}),"\n",(0,r.jsx)(e.h2,{id:"-troubleshoot",children:"\ud83c\udd98 Troubleshoot"}),"\n",(0,r.jsx)(e.p,{children:"Jika Kode tidak berjalan atau eror atau tidak muncul apa apa di LCD, pastikan mengecek beberapa hal berikut"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Library LiquidCrystall sudah di install"}),"\n",(0,r.jsx)(e.li,{children:"Kabel SDA dan SCL tidak terbalik"}),"\n",(0,r.jsx)(e.li,{children:"Putar kekanan atau kekiri Potensiometer berwarna biru yang ada dibelakang LCD"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>d,x:()=>l});var i=a(6540);const r={},t=i.createContext(r);function d(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);