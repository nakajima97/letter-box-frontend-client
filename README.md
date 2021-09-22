# アプリ概要

## Letter Box について

顧客が従業員に対して匿名でメッセージを送れるアプリ。  
メッセージをやり取りする機能はないが  
ログイン不要で誰に送るのかがURLに反映される。  
そのため、QRコードを読み取るだけでメッセージを誰に送るのか指定できる。  

## Letter Box を構成する要素

Letter Box は以下4つのリポジトリで構成される

### 客側フロントエンド

顧客がメッセージを伝える際に利用する画面  ※本リポジトリ
https://github.com/yudai-nakajima/letter-box-frontend-client

### 管理画面フロントエンド

従業員がメッセージを確認するための画面
https://github.com/yudai-nakajima/letter-box-frontend-management

### バックエンド

Letter Box のバックエンド
フロントエンドは客側・管理画面と分かれるが、バックエンドは 1 つのみ  
https://github.com/yudai-nakajima/letter-box-backend

### API 仕様書

https://github.com/yudai-nakajima/letter-box-api

# 作成目的
店員に対して気軽にメッセージを送れるアプリがあったら
感謝の気持ちとか伝えやすいよなと思ったため。

# 作成目的
店員に対して感謝を気軽に伝える手段を提供するアプリを開発したいと思ったため

# 使用技術
※本リポジトリで利用している技術のみ記述
- React
- Typescript
- ESLint
- Prettier
- Material UI
- Emotion
- React-Router-Dom
- cypress

# 機能一覧
- メッセージ送信機能
