# Git 명령어

## 1. git init 
git을 사용할 수 있도록 폴더를 초기화 한다.

## 2. git remote add origin <git주소>
github에 있는 원격저장소와 로컬을 연결한다. 

## 3. git branch <branch이름>
git에 브랜치를 만든다.

버전의 큰 줄기의 브랜치는 master 나 main.
그곳에서 가지치기를 하듯이 브랜치를 만든다.

## 4. git add . / <파일이름>
git add . 은 변경한 모든 파일울 git한다. 

'.' 대신에 파일이름을 쓰면 그 파일만 add 된다.

## 5. git commit -m "message"
메시지를 포함해서 git을 커밋한다. 

## 6. git push origin <branch이름>
commit을 github repo로 올린다. 

## 7. git checkout <branc이름>
브랜치를 옮긴다.

### * 원격과 로컬이 연결 된 후 git push까지의 과정
git add . => git commit -m "message" => git push orign <branch이름>

