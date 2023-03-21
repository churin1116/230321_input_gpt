There are explanations in English and 日本語.

## introduction
1. Access [chrome extension](chrome://extensions/), or click the extension mark → "Manage extensions"
2. "Loading unpackaged extensions"
3. Select the created "extensions" folder
4. If you press the "extended function mark", it will be added to the extended function list that appears, so you can open this extended function by selecting it!
<br>

## Usage
Add prompts to ChatGPT with a single touch. (Only the first input is supported)
If the answer is interrupted in the middle, please enter "Continue" etc.

in the early days
1. Games
2. Feedback
3. Goal Seek (precision question)

can be used.
<br>

## Customize prompt
- Prompt is described in popup.js. Also, please edit popup.html for the text of the button.
- in popup.js
```
const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', async () => {
   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

   chrome.scripting.executeScript({
     target: { tabId: tab.id },
     function: inputText,
   });
});
```
You can adjust the number of buttons/prompts that can be saved by increasing the .
- Don't forget to add the button in your HTML too.  
<br>

#### 〈source of initial prompt〉
1. “ChatGPT4 Full-scale RPG “Chat Reincarnation ~ A childhood friend who should have died became a hero in another world” (trial version)” (Takayuki Fukatsu (@fladdict)) https://note.com/fladdict/ n/n2a82d26f10dc
2. "Why don't you practice giving feedback to GPT?" (Shunsuke (@HaveShun)) https://twitter.com/HaveShun/status/1637957490695622656
3. "I tried using GPT-4" (shi3z) https://note.com/shi3zblog/n/n659a427892ef (The author of the prompt itself is Shunsuke, the same as 2.)  
<br>
<br>

## 導入
1. [chrome拡張機能](chrome://extensions/)にアクセス、または 拡張機能マーク→「拡張機能を管理」
2. 「パッケージ化されていない拡張機能を読み込む」
3. 作成した「extensions」フォルダを選択
4. 「拡張機能マーク」を押すと出てきた拡張機能一覧に追加されるので、選択すると今回の拡張機能が開けるようになります！
<br>

## 使い方
ワンタッチでChatGPTにプロンプトを追加できます。(最初の入力のみ対応)
回答が途中で途切れた場合、「続けて」などと入力してください。

初期は
1. ゲーム
2. フィードバック
3. ゴールシーク（高精度な質問）

を使用可能。
<br>

## プロンプトをカスタマイズ
- popup.js内にプロンプトが記載されています。また、ボタンの文字はpopup.htmlを編集して下さい。
- popup.js内の
```
const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: inputText,
  });
});
```
を増やすことで、ボタン・保存できるプロンプトの数を調整できます。
- HTML内のボタンの追加も忘れないで下さい。
<br>

#### 〈初期プロンプトの引用元〉
1. 『ChatGPT4 本格RPG「チャット転生 〜 死んだはずの幼馴染が異世界で勇者になっていた件」（体験版）』（深津 貴之さん(@fladdict)）https://note.com/fladdict/n/n2a82d26f10dc
2. 『GPTにフィードバックする練習したら？』（Shunsukeさん(@HaveShun)）https://twitter.com/HaveShun/status/1637957490695622656
3. 『GPT-4使ってみた』（shi3z）https://note.com/shi3zblog/n/n659a427892ef（プロンプト自体の作成者は２と同じシュンスケさん）