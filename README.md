# React Event & State Practice

React의 **컴포넌트 구조**, **사용자 이벤트 처리**, **상태 관리**, **컴포넌트 간 데이터 전달**을 이해하기 위해 만든 학습 프로젝트입니다.

마우스 위치를 추적하고 클릭한 지점을 화면에 표시하는 기능과, 할 일을 추가·완료 표시·삭제하는 Todo List를 구현했습니다. 기능을 역할별 컴포넌트로 나누고 부모와 자식 컴포넌트가 `props`와 콜백 함수를 통해 소통하는 흐름을 익히는 데 초점을 두었습니다.

## 주요 기능

### 마우스 이벤트 실습

- 영역 안에서 움직이는 마우스의 상대 좌표 표시
- 영역을 벗어나면 좌표 초기화
- 클릭한 위치에 원형 마커 생성
- 여러 클릭 위치를 배열 상태로 저장하고 목록 렌더링

### Todo List

- 입력값을 상태로 관리하는 제어 컴포넌트 구현
- 빈 입력값 등록 방지
- 새로운 할 일 추가
- 체크박스를 통한 완료 스타일 표시
- 선택한 할 일 삭제

## 컴포넌트 구조

```text
App
├─ Header
├─ Main
│  ├─ MouseTracker
│  └─ TodoList
│     ├─ TodoListInput
│     └─ TodoListItems
└─ Footer
```

| 컴포넌트 | 역할 |
| --- | --- |
| `App` | 애플리케이션의 최상위 레이아웃 구성 |
| `Header` | 프로젝트 제목 영역 표시 |
| `Main` | 마우스 이벤트와 Todo List 기능 배치 |
| `MouseTracker` | 마우스 이동·이탈·클릭 이벤트 처리 및 좌표 상태 관리 |
| `TodoList` | 할 일 목록 상태 관리와 추가·삭제 로직 담당 |
| `TodoListInput` | 입력값 상태 관리 및 부모 컴포넌트에 새 할 일 전달 |
| `TodoListItems` | 할 일 목록 렌더링, 완료 표시 및 삭제 이벤트 전달 |
| `Footer` | 하단 레이아웃을 위한 컴포넌트 |

## 폴더 구조

```text
src/
├─ assets/
│  ├─ hero.png
│  ├─ react.svg
│  └─ vite.svg
├─ components/
│  ├─ Footer.css
│  ├─ Footer.jsx
│  ├─ Header.css
│  ├─ Header.jsx
│  ├─ Main.css
│  ├─ Main.jsx
│  ├─ MouseTracker.jsx
│  ├─ TodoList.jsx
│  ├─ TodoListInput.jsx
│  └─ TodoListItems.jsx
├─ App.css
├─ App.jsx
└─ main.jsx
```

## 학습 포인트

- UI를 역할에 따라 작은 컴포넌트로 분리하는 방법
- `useState`를 활용한 문자열, 객체, 배열 상태 관리
- `onChange`, `onClick`, `onMouseMove`, `onMouseLeave` 이벤트 처리
- `getBoundingClientRect()`를 이용해 요소 내부의 상대 좌표 계산
- 부모가 상태를 관리하고 자식에게 데이터와 콜백을 전달하는 단방향 데이터 흐름
- `map()`을 이용한 목록 렌더링과 `filter()`를 이용한 항목 삭제
- 상태 배열을 직접 수정하지 않고 새 배열로 갱신하는 불변성 유지
- 조건부 클래스 이름을 이용한 완료 상태 스타일링

## 기술 스택

- React 19
- JavaScript (ES Modules)
- Vite 8
- CSS
- ESLint

## 실행 방법

### 1. 저장소 복제

```bash
git clone <repository-url>
cd ch5-task
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

터미널에 표시되는 로컬 주소를 브라우저에서 열어 확인합니다.

## 사용 가능한 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 배포용 파일 생성 |
| `npm run lint` | ESLint 코드 검사 |
| `npm run preview` | 빌드 결과 미리보기 |

## 개선 계획

이 프로젝트는 React의 기본 동작을 학습하는 과정에서 제작했습니다. 다음 단계에서는 아래 내용을 개선할 예정입니다.

- Todo 항목을 문자열이 아닌 고유 ID와 완료 상태를 가진 객체로 관리
- 각 Todo의 체크 상태를 독립적으로 변경하는 토글 기능 구현
- 배열 인덱스 대신 고유 ID를 React `key`와 삭제 기준으로 사용
- Enter 키 등록과 입력값 공백 검사 추가
- 빈 `Footer` 컴포넌트에 실제 정보 추가하거나 불필요한 경우 제거
- 마우스 좌표 계산 로직을 재사용 가능한 커스텀 훅으로 분리
- 반응형 레이아웃과 접근성 속성 보완
- 컴포넌트 동작을 검증하는 테스트 코드 작성

## 프로젝트 목적

완성된 서비스 개발보다 React 애플리케이션이 컴포넌트 단위로 구성되는 방식과, 사용자 이벤트로 발생한 상태 변화가 화면에 반영되는 과정을 직접 구현하며 이해하는 것을 목표로 했습니다.
