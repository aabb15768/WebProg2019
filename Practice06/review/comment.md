<h1 style="text-align:center">Ric's Webprogramming Practice 05<br>comment</h1>
===

## 1. 完成度: 85%
* 有5%是因為沒有comment，註解與程式碼是一樣重要，而不可或缺的一部份。
* 有10%是因為這樣設計程式架構失去了react跟react_router的意義（底下建議改進的地方說明）。

## 2. Coding Quality: 95%
* Coding Quality比完成度高的原因是，程式碼的品質很好，淺顯易懂，但是沒有註解，故扣5%。

## 3. 正確性: 100%
* 以網站的呈現，和作業的要求來看，正確性100%。

## 4. 值得學習的地方
* 程式碼寫得很整潔，網站設計的風格很簡潔好看。

## 5.建議改進的地方
* 不應該用main來分別呈現每一個component，例如：當route到別的網址時，header的部分會重新刷新，不應該每一個component開頭都放header的code，應該放在main裡面，router設定應該是設定不同呈現的部分
* 如果這樣寫code當程式碼量增加的時候，會增加維護困難和debug不容易，例如當header要吃一個新的props的時候，要分別去每一個compenent重新新增，如果是放在main，只需要改一次。
* 以上兩點不止在header發生，footer等等也是，以及未來可能會加其他的component，這樣設計會發生同樣的狀況。
