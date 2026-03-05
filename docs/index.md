# 🔐 문제해결편

!!! warning "교사 전용 자료"
    이 자료는 **교사 전용**입니다. 학생에게 공유하지 마세요.

> **생각하는 힘을 키우는 파이썬 기초 with pythink2 (문제해결편)**

pythink2 로드맵 23개 문제의 풀이와 교수 전략을 담고 있습니다.

## 사용 안내

각 문제마다 다음 내용을 제공합니다:

- **다양한 풀이** — 전략별 모범 답안 (brute_force, pattern, math, decomposition 등)
- **접근법 비교** — 언제 어떤 전략이 적합한지, 코드 길이·가독성·확장성 기준 비교표
- **학생 오답 패턴** — sim-student 12 아키타입 기반의 실제 오답 사례
- **교사 코칭 포인트** — 사고 수준(L0~L3) 판단법과 피드백 방향

## 목차

| 월드 | 문제 ID | 문제 제목 | 난이도 | 핵심 전략 | 페이지 |
|------|---------|----------|--------|----------|--------|
| **World 1 — 출력의 세계** | r01 | 안녕, 세상아! | ⭐ | pattern | [바로가기](world1-print.md#-안녕-세상아-r01) |
| | r02 | 자기소개 카드 | ⭐ | brute_force, pattern | [바로가기](world1-print.md#-자기소개-카드-r02) |
| | r03 | 나만의 명함 | ⭐ | pattern | [바로가기](world1-print.md#-나만의-명함-r03) |
| **World 2 — 변수 마을** | r04 | 보물 상자에 담기 | ⭐ | pattern | [바로가기](world2-variable.md#-보물-상자에-담기-r04) |
| | r05 | 마법의 컵 바꾸기 | ⭐⭐ | pattern, brute_force | [바로가기](world2-variable.md#-마법의-컵-바꾸기-r05) |
| | r06 | 용돈 계산기 | ⭐ | math, decomposition | [바로가기](world2-variable.md#-용돈-계산기-r06) |
| **World 3 — 입력 항구** | r07 | 인사하는 프로그램 | ⭐ | pattern | [바로가기](world3-input.md#-인사하는-프로그램-r07) |
| | r08 | 태어난 해 맞추기 | ⭐ | math | [바로가기](world3-input.md#-태어난-해-맞추기-r08) |
| | r09 | 피자 주문서 | ⭐ | decomposition | [바로가기](world3-input.md#-피자-주문서-r09) |
| **World 4 — 연산 공장** | r10 | 사칙연산 계산기 | ⭐ | pattern | [바로가기](world4-operator.md#-사칙연산-계산기-r10) |
| | r11 | 시간 변환기 | ⭐ | math | [바로가기](world4-operator.md#-시간-변환기-r11) |
| | r12 | BMI 계산기 | ⭐⭐ | math, decomposition | [바로가기](world4-operator.md#-bmi-계산기-r12) |
| **World 5a — 조건문 갈림길** | r13 | 성인 확인 | ⭐ | pattern | [바로가기](world5a-condition.md#-성인-확인-r13) |
| | r14 | 홀짝 판별기 | ⭐ | math, pattern | [바로가기](world5a-condition.md#-홀짝-판별기-r14) |
| | r15 | 성적표 등급 | ⭐⭐ | pattern | [바로가기](world5a-condition.md#-성적표-등급-r15) |
| **World 5b — 문자열 숲** | r16 | 글자 뽑기 기계 | ⭐ | pattern | [바로가기](world5b-string.md#-글자-뽑기-기계-r16) |
| | r17 | 비밀 메시지 변환기 | ⭐ | pattern | [바로가기](world5b-string.md#-비밀-메시지-변환기-r17) |
| | r18 | 단어 자르기 도구 | ⭐⭐ | pattern | [바로가기](world5b-string.md#-단어-자르기-도구-r18) |
| **World 6 — 반복문 놀이터** | r19 | 구구단 한 단 | ⭐ | pattern | [바로가기](world6-loop.md#-구구단-한-단-r19) |
| | r20 | 카운트다운 타이머 | ⭐ | pattern, brute_force | [바로가기](world6-loop.md#-카운트다운-타이머-r20) |
| | r21 | 별 직사각형 | ⭐⭐ | pattern, brute_force | [바로가기](world6-loop.md#-별-직사각형-r21) |
| **Boss World** | r22 | 숫자 분류기 | ⭐⭐ | decomposition, pattern | [바로가기](world7-boss.md#-숫자-분류기-r22) |
| | r23 | 점수 분석기 | ⭐⭐ | brute_force, decomposition | [바로가기](world7-boss.md#-점수-분석기-r23) |

## 전략 범례

| 전략 | 설명 | 아이콘 |
|------|------|--------|
| `pattern` | 파이썬 문법/관용구를 활용한 간결한 풀이 | :material-lightning-bolt: |
| `brute_force` | 하나씩 직접 나열하는 직관적 풀이 | :material-hammer: |
| `math` | 수학적 공식/연산을 활용한 풀이 | :material-calculator: |
| `decomposition` | 문제를 작은 단위로 분해하여 풀이 | :material-puzzle: |

## 아키타입 범례

sim-student 12종 아키타입 중, 오답 패턴에서 자주 등장하는 유형:

| 아키타입 | 설명 | 주요 오류 유형 |
|---------|------|---------------|
| `syntax-stuck` | 문법에서 계속 막히는 학생 | 콜론, 괄호, 따옴표 누락 |
| `strategy-biased` | 한 가지 접근법만 고집하는 학생 | 비효율적 풀이, 확장성 부족 |
| `validation-weak` | 검증 없이 제출하는 학생 | 경계값 오류, 부분 정답 |
| `ai-dependent` | AI 코치에 지나치게 의존하는 학생 | 복붙 오류, 맥락 이해 부족 |
| `eager-beginner` | 열정적이지만 기초가 부족한 학생 | 개념 혼동, 불완전한 구현 |
| `struggling-failure` | 반복 실패로 자신감이 낮은 학생 | 기본 문법 오류 반복 |
