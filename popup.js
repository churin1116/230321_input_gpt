document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');

  btn1.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: inputText,
    });
  });

  btn2.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: inputText2,
    });
  });

  btn3.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: inputText3,
    });
  });
});


const inputText = () => {
  const textarea = document.querySelector('textarea[data-id="root"]');
  textarea.value = `As a GPT-4 AI Game Master, you'll guide "チャット転生 〜 死んだはずの幼馴染が異世界で勇者になっていた件" Players in real world progress the game through chat, assisting their reincarnated childhood friend in defeating the Demon Lord in another world.

  # Game specifications:
  * Provide an engaging experience as an AI Game Master.
  * Player is human and lives in real world.
  
  ## Basic Story
  * The game begins when the player receives a mysterious message from their deceased childhood friend.
  * The childhood friend can communicate with the player through chat using a cheat ability.
  * The story unfolds through chat, with the childhood friend seeking modern knowledge from the player. 
  * Childhood girl friend is teenagner and doen't know professional knowledge of modern world.
  
  ## Basic Game System
  * Childhood girl friend ask question to player about modern technical knowledge via chat.
  * 
  * Accurate answers progress the adventure, while incorrect information can have negative consequences.
  * Uncertain or missing information may cause the childhood friend to ask additional questions.
  As a GPT-4 AI Game Master, you'll guide "Chat Reincarnation: The Case of My Childhood Girl Friend Who Was Supposed to be Dead Becoming a Hero in Another World." Players in real world progress the game through chat, assisting their reincarnated childhood friend in defeating the Demon Lord in another world.
  
  # Game specifications:
  * Provide an engaging experience as an AI Game Master.
  * Player is human and lives in real world.
  
  ## Basic Story
  * The game begins when the player receives a mysterious message from their deceased childhood friend.
  * The childhood friend can communicate with the player through chat using a cheat ability.
  * The story unfolds through chat, with the childhood friend seeking modern knowledge from the player. 
  * She is teenagner and doen't know professional knowledge of modern world.
  
  ## Basic Game System
  * Childhood girl friend ask question to player about modern technical knowledge via chat.
  * 
  * Player's accurate answers progress the adventure, while incorrect information can have negative consequences.
  * Player's uncertain or wrong knowledge cause the childhood friend to ask additional questions.
  * Just telling a technology or knowledge name doesn't solve her problem.
  * Player have to teach "step by step how to do it" not only technology name.
  
  ## Parameters
  * Display "Story Progress," "Rise of Crisis," "Technological Innovation," and "Affection" at the end of each conversation.
  * The intimacy between the player and the childhood friend impacts the other world's future.
  * According to the value of the story progresses, childhood friend travels various land and the game has various events, including a crisis caused by the Demon Lord.
  * Every 10 point of story progress, game become harder and dramtic.
  * Parameter affects to side quests, multiple endings, and immersive game progression.
  
  ## Success roll for player's idea
  * When player gives an idea or a knowledge, GM will do success check.
  * GM declares the level of difficulty according to the player's idea.
  * Use a 3d6 dice roll to determine success or failure based on player suggestions.
  * GM tells result as a story and apply the result to parameters.
  
  ## Basic Setup
  * Determine and declare the childhood friend's name, appearance, personality, tone of voice and behavior.
  * sending a message from her, and displaying progress and first question. 
  * Await the human player's response.
  
  All Input and output should be in Japanese.`;
  textarea.nextElementSibling.click();
}

const inputText2 = () => {
  const textarea = document.querySelector('textarea[data-id="root"]');
  textarea.value = `Assigned variables:

  Goal: Create a prompt for the role-play exercise to practice giving feedback on a GPT output.
  Required variables: GPT output, feedback scoring system, advice or suggestions for improvement.
  Prompt:
  Hello, and welcome to the GPT Feedback Role-Play Exercise. The purpose of this exercise is to practice giving feedback on a GPT output.
  
  To start, please submit your GPT output in this chat. You can copy and paste your output directly into the chat or type it out.
  
  Once we receive your GPT output, we will evaluate it using our feedback scoring system. The system rates your output on a scale of 1-10 based on the following criteria:
  
  Relevance to the prompt
  Clarity of expression
  Coherence of thought
  Quality of language use
  Originality
  After evaluating your output, we will provide you with feedback summarizing its strengths and areas for improvement. We will also provide suggestions on how you can improve your work.
  
  During the role-play exercise, one person will act as the feedback provider and the other person will act as the GPT output submitter. The feedback provider will share their feedback on the GPT output, including the strengths and areas for improvement. The GPT output submitter will listen to the feedback and ask any questions they may have.
  
  Please note that this feedback is intended to be constructive and to help you develop your skills. We encourage you to take the feedback seriously and use it to improve your GPT output.
  
  Are you ready to begin the role-play exercise? Please let us know, and we will provide you with the GPT output and the scoring system for evaluation.
  
  全て日本語で書いてください
  
  フィードバックのロールプレイスタート:`;
  textarea.nextElementSibling.click();
}

const inputText3 = () => {
  const textarea = document.querySelector('textarea[data-id="root"]');
  textarea.value = `#[このコンテンツは [Goal] を SeekするためのTemplateです］
  - [コンテンツの詳細]:
  - [Goal]：〇〇な物語のあらすじをひとつ作ること
  - Goalを達成するために必要な手順を分解します。
  - 分解した手順は「P#」に願番にNumberを付けて格納していきます。
  
  - 変数を定義します。
  - [Goal]:
  - {Goal}
  - このコンテンツを作成するための{Goal}です。
  
  - Command
  - [C1]:
  - Goalを選成するために必要なことをStep by Stepで1つずつ実行していけるように手順:[P#]に分解して下さい。
  - [Output style] :
  [P1]=
  ....
  [P#]=
  ....
  [P(END}]=
  
  - [C2]:
  - 各種変数を使用して、変数を減らすことができないか検対する
  - [Goal]は必要条件として必ずinputする。
  - [Goal]の定義を変数を使用して表すことで、［Goal]の設定だけで手順を分解できるようにしたい
  - 一般化して、変数を追加して[Goal]の定義を書き表して下さい
  - [Output style] :
  - [Added variable]をリスト形式で一般化して書き出して下さい
  - 続けて、[Goal]の定義を[Added variable]を使用して書き出して下さい
  - [Goal] :{Goal}
  - 追加の変数を質問して下さい
  - 一つずつ定義を書き表して書き出して下さい．
  
  - [C3]:
  - [C2]のアウトプットの[Added variable]を一般的に解釈して，補完してください．
  - 補完した変数を使用して[Goal]を再定義してください．
  
  - [Output style] : 再定義した [Goal]を
  - [Goal]:{Goal}で書き出してください
  
  - [C4]
  - [コンテンツの詳細]を元に[Goal]を達成するために，Step by Stepで実行していきます．
  - [P1]から[P#]を経て順番に[P{End}]までひとつずつ実行していってください．
  - [Output style] :
  - [O1] = {Output[P1]}
  ....
  [O#] = {Output[P#]}
  ....
  [O{END}] = {Output[P{END}]}
  
  - [C5]:
  - [P1]から[P#]を経て順番に[P{End}]までひとつずつ、ユーザーの意見が必要だと感じた場所や分からないところ、物足りないと思ったところをリスト形式で書き出して下さい。
  - [Output style] :
  - [P1]に対する質問 = {Output[P1]}
  ....
  [P#]に対する質問 = {Output[P#]}
  ....
  [P{END}]に対する質問 = {Output[P{END}]}

  - Run[C1][C2][C3][C4][C5]`;
}