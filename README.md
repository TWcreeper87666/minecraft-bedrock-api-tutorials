# 腳本 API 基礎教學
全部都是個人經驗，非喜勿噴

## BEHAVIOR PACK
- change uuid https://www.uuidgenerator.net/
- 設定 > 創作者 > 啟用內容記錄 GUI
- GUI 原木級別選擇資訊的話，可以看到 console.log 的內容
- 建議不要開啟內容紀錄檔，之前忘記清硬碟被塞爆💀
- /reload 重新載入腳本

## API
- API 使用方法請到官方網站查詢，有穩定版跟實驗版 https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server?view=minecraft-bedrock-stable
- 請同步修改 manifest.json 跟 npm 套件版本
- beforeEvents 的 chatSend 什麼時候才能到穩定版啦😭

## VSC
- npm 套件請確保與行為包 manifest.json 裡面的版本相符，不然可能會有一些不能用、可以用但沒出現的問題
https://www.npmjs.com/package/@minecraft/server?activeTab=versions
- npm install @minecraft/server
- npm install @minecraft/server-ui

- npm install typescript
  
## JS
- basic usage
- know async/ await/ then
- parseInt/ parseFloat
- JSON.stringify/ JSON.parse
- Math
- Map, Set, List
- Template Literal `${}`
- try catch
- ?. ?? 

## TS
- some type like Record<>
- tsc/ tsc -w

## VSC
- ctrl + 左鍵 : 移至定義
- alt + I : 觸發建議(我從 ctrl 改成 alt, 因為會跟 AI 衝突)
- ctrl + / : 單行註解
- shift + alt + A : 多行註解
- alt + 左右方向鍵 : 返回／前往游標歷史位置
- ctrl + 左右方向鍵 : 遇到單字可以一次跳過
- shift + alt + F : 程式碼格式化
- alt + 上下鍵 : 移動整行程式碼