# Ric's Webprogramming Homework 1
## 一、專案簡介
* 這是一個讓你可以新增、刪除、標記自己工作事項（todo-item）到工作清單（todo-list）的簡易網站。
## 二、功能介紹
1. 將未完成的事項(todo-item)寫入"What needs to be done?"的input field裡面，並按下enter，就可以新增todo-item到todo-list裡面。
2. 新增的todo-item左邊有灰色圈圈可以點擊，點擊後圈圈會變成綠色，todo-item的text也會被劃一條線，作為與未完成事項的區隔（並將此動作稱為標記，第八項會提到）。
3. 左邊顯示綠色圈圈，text被畫一條線的已完成todo-item或是未完成的todo-item都可以點擊右邊的'X'button來進行刪除。
4. 新增第一筆todo-item後，隱藏的欄位todo-footer就會顯示出來，相對的，如果todo-list為空的話，todo-footer會再被隱藏起來。
5. todo-footer左下角會顯示未完成的todo-item數量。
6. todo-footer中間有三個button可以選擇，分別是all：顯示所有todo-item、Active：顯示所有未完成todo-item、Completed：顯示所有已完成todo-item。
7. 當有至少一筆已完成todo-item時，todo-footer右下角會有clear completed的按鈕可以按，用來清除所有已完成todo-item。
8. 按下active或是completed button時，進行標記會保有原本active和completed的特性，例如在active狀態下將一個todo-item標記成已完成，會消失在清單下（因為該item在active不應該出現），反之在completed狀態下反標記todo-item為未完成，也會消失在清單上。
