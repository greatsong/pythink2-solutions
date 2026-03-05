# 🏰 Boss World — 종합 도전 해설

> 지금까지 배운 모든 개념(변수, 입력, 연산, 조건문, 반복문)을 종합적으로 활용합니다.
> 여러 개념을 **결합하여** 문제를 해결하는 경험을 통해, 프로그래밍적 사고의 통합력을 키웁니다.

---

## 🧩 숫자 분류기 (r22)

> 정수를 입력받아 세 가지 관점에서 분류하세요: (1) 양수/음수/영, (2) 홀수/짝수, (3) 한 자리/두 자리/세 자리 이상.
>
> **난이도**: ⭐⭐ | **진단 초점**: L2, L3 | **전략**: decomposition, pattern

### 풀이 1: 독립적 분류 블록 (decomposition)

=== "코드"
    ```python
    num = int(input("정수를 입력하세요: "))

    # 1. 부호 분류
    if num > 0:
        print("양수입니다")
    elif num < 0:
        print("음수입니다")
    else:
        print("영(0)입니다")

    # 2. 홀짝 분류
    if num % 2 == 0:
        print("짝수입니다")
    else:
        print("홀수입니다")

    # 3. 자릿수 분류
    abs_num = abs(num)
    if abs_num < 10:
        print("한 자리 수입니다")
    elif abs_num < 100:
        print("두 자리 수입니다")
    else:
        print("세 자리 이상입니다")
    ```

=== "핵심 아이디어"
    - 하나의 입력에 대해 **세 가지 독립적 관점**으로 분류합니다.
    - 각 분류는 별개의 if 블록으로, 서로 영향을 주지 않습니다.
    - `abs()` 함수: 절댓값을 반환하여, 음수에서도 자릿수를 올바르게 판단합니다.
    - **decomposition(분해)**: 복잡한 문제를 세 개의 독립적 하위 문제로 나눕니다.

### 풀이 2: 조건 표현식 활용 (pattern)

=== "코드"
    ```python
    num = int(input("정수를 입력하세요: "))

    # 1. 부호
    sign = "양수" if num > 0 else ("음수" if num < 0 else "영(0)")
    print(f"{sign}입니다")

    # 2. 홀짝
    parity = "짝수" if num % 2 == 0 else "홀수"
    print(f"{parity}입니다")

    # 3. 자릿수
    abs_num = abs(num)
    digits = "한 자리" if abs_num < 10 else ("두 자리" if abs_num < 100 else "세 자리 이상")
    print(f"{digits} 수입니다")
    ```

=== "비교"
    - 조건 표현식(삼항 연산자)으로 각 분류를 한 줄에 표현합니다.
    - 코드가 짧지만, 중첩된 조건 표현식은 가독성이 떨어집니다.
    - 결과를 변수에 저장한 후 출력하는 패턴입니다.

### 접근법 비교

| 전략 | 코드 길이 | 가독성 | 확장성 | 추천 대상 |
|------|----------|--------|--------|----------|
| decomposition (독립 블록) | 17줄 | ★★★★★ | ★★★★★ | 모든 학생 (권장) |
| pattern (조건 표현식) | 10줄 | ★★★ | ★★★ | 심화 탐구형 학생 |

### ⚠️ 학생들이 자주 하는 실수

!!! danger "실수: elif 끝에 콜론 누락 (아키타입: syntax-stuck)"
    **❌ 잘못된 코드:**
    ```python
    if num > 0:
        print("양수입니다")
    elif num < 0
        print("음수입니다")
    ```
    **✅ 올바른 코드:**
    ```python
    if num > 0:
        print("양수입니다")
    elif num < 0:
        print("음수입니다")
    ```
    **원인**: `if`에는 콜론을 붙이면서 `elif`에는 빠뜨리는 실수가 빈번합니다.

!!! danger "실수: str과 int 비교 (아키타입: eager-beginner)"
    **❌ 잘못된 코드:**
    ```python
    num = input("정수를 입력하세요: ")
    if num > 0:  # TypeError!
        print("양수입니다")
    ```
    **✅ 올바른 코드:**
    ```python
    num = int(input("정수를 입력하세요: "))
    if num > 0:
        print("양수입니다")
    ```
    **원인**: `input()`의 반환값은 문자열입니다. `"5" > 0`은 `TypeError`를 발생시킵니다.

!!! danger "실수: abs() 미사용으로 음수 자릿수 오류 (아키타입: validation-weak)"
    **❌ 잘못된 코드:**
    ```python
    if num < 10:           # -50은 10보다 작으므로 "한 자리"?!
        print("한 자리 수입니다")
    elif num < 100:
        print("두 자리 수입니다")
    ```
    **✅ 올바른 코드:**
    ```python
    abs_num = abs(num)
    if abs_num < 10:
        print("한 자리 수입니다")
    elif abs_num < 100:
        print("두 자리 수입니다")
    ```
    **원인**: 음수(-50)는 10보다 작으므로, `abs()`를 사용하지 않으면 "한 자리 수"로 잘못 분류됩니다.

!!! danger "실수: 영(0) 처리 누락 (아키타입: validation-weak)"
    **❌ 잘못된 코드:**
    ```python
    if num > 0:
        print("양수입니다")
    else:
        print("음수입니다")  # 0도 음수?!
    ```
    **✅ 올바른 코드:**
    ```python
    if num > 0:
        print("양수입니다")
    elif num < 0:
        print("음수입니다")
    else:
        print("영(0)입니다")
    ```
    **원인**: 0은 양수도 음수도 아닙니다. 세 가지 경우(양수/음수/영)를 모두 처리해야 합니다.

### 🎯 교사 코칭 포인트

!!! info "사고 수준 판단"
    - **L0 (실행)**: 다양한 수(양수, 음수, 0, 한 자리, 세 자리)를 입력하여 결과를 확인할 수 있는가?
    - **L1 (이해)**: 세 가지 분류가 왜 **독립적**인지 설명할 수 있는가?
    - **L2 (적용)**: 네 번째 분류(예: 소수 판별)를 추가할 수 있는가?
    - **L3 (전략)**: 문제를 독립 블록으로 분해하는 전략을 다른 문제에도 적용할 수 있는가?

!!! tip "decomposition 교수 전략"
    이 문제는 **decomposition(분해적 사고)**의 핵심 교수 기회입니다.
    "이 문제를 한 번에 풀려고 하지 말고, 세 개의 작은 문제로 나눠볼까요?"
    각 블록을 따로 완성한 후 합치는 과정을 경험시키세요.

!!! warning "테스트 케이스 필수 확인"
    이 문제는 **경계값 테스트**가 특히 중요합니다.
    반드시 확인해야 할 입력값: `0`, `-1`, `1`, `-50`, `99`, `100`, `-100`

---

## 🧩 점수 분석기 (r23)

> 학생 수(n)를 입력받고, n명의 점수를 입력받아 최고점, 최저점, 평균, 합격자 수(60점 이상)를 출력하세요.
>
> **난이도**: ⭐⭐ | **진단 초점**: L2, L3 | **전략**: brute_force, decomposition

### 풀이 1: 변수 추적 방식 (brute_force)

=== "코드"
    ```python
    n = int(input("학생 수: "))

    total = 0
    max_score = 0
    min_score = 100
    pass_count = 0

    for i in range(n):
        score = int(input(f"{i+1}번 학생 점수: "))
        total += score
        if score > max_score:
            max_score = score
        if score < min_score:
            min_score = score
        if score >= 60:
            pass_count += 1

    avg = round(total / n, 1)

    print(f"최고점: {max_score}")
    print(f"최저점: {min_score}")
    print(f"평균: {avg}")
    print(f"합격자: {pass_count}명")
    ```

=== "핵심 아이디어"
    - **반복문 + 조건문 + 변수 추적**의 종합 문제입니다.
    - 누적 합계(`total`), 최댓값(`max_score`), 최솟값(`min_score`), 카운터(`pass_count`) 4개의 추적 변수를 사용합니다.
    - 최댓값 초기값은 가능한 최솟값(0), 최솟값 초기값은 가능한 최댓값(100)으로 설정합니다.
    - 모든 입력이 끝난 후 평균을 계산합니다.

### 풀이 2: 리스트 활용 (decomposition)

=== "코드"
    ```python
    n = int(input("학생 수: "))

    # 1단계: 모든 점수 입력받기
    scores = []
    for i in range(n):
        score = int(input(f"{i+1}번 학생 점수: "))
        scores.append(score)

    # 2단계: 분석
    max_score = max(scores)
    min_score = min(scores)
    avg = round(sum(scores) / n, 1)
    pass_count = 0
    for s in scores:
        if s >= 60:
            pass_count += 1

    # 3단계: 출력
    print(f"최고점: {max_score}")
    print(f"최저점: {min_score}")
    print(f"평균: {avg}")
    print(f"합격자: {pass_count}명")
    ```

=== "비교"
    - 먼저 모든 데이터를 **리스트에 저장**한 후, 분석 단계를 별도로 수행합니다.
    - `max()`, `min()`, `sum()` 내장 함수를 활용하여 코드가 간결합니다.
    - **입력 → 저장 → 분석 → 출력** 4단계로 명확히 분리됩니다.
    - 단, 아직 리스트를 배우지 않은 학생에게는 풀이 1을 권장합니다.

### 접근법 비교

| 전략 | 코드 길이 | 가독성 | 확장성 | 추천 대상 |
|------|----------|--------|--------|----------|
| brute_force (변수 추적) | 18줄 | ★★★★ | ★★★ | 반복문+조건문만 배운 학생 |
| decomposition (리스트) | 17줄 | ★★★★★ | ★★★★★ | 리스트를 아는 학생 |

### ⚠️ 학생들이 자주 하는 실수

!!! danger "실수: 최댓값/최솟값 초기값 오류 (아키타입: eager-beginner)"
    **❌ 잘못된 코드:**
    ```python
    max_score = 100  # 초기값이 이미 최대!
    min_score = 0    # 초기값이 이미 최소!
    ```
    **✅ 올바른 코드:**
    ```python
    max_score = 0    # 가능한 최솟값으로 초기화
    min_score = 100  # 가능한 최댓값으로 초기화
    ```
    **원인**: 직관적으로 "최댓값은 100, 최솟값은 0"으로 초기화하지만, 이러면 입력값이 초기값을 넘지 못해 갱신이 일어나지 않습니다.

!!! danger "실수: 평균 계산에서 정수 나눗셈 사용 (아키타입: validation-weak)"
    **❌ 잘못된 코드:**
    ```python
    avg = total // n  # 정수 나눗셈 → 소수점 버려짐
    ```
    **✅ 올바른 코드:**
    ```python
    avg = round(total / n, 1)
    ```
    **원인**: `//`는 정수 나눗셈이므로 소수점이 사라집니다. 평균은 소수점이 필요하므로 `/`를 사용해야 합니다.

!!! danger "실수: 합격 조건 오류 — > 대신 >= 사용 (아키타입: validation-weak)"
    **❌ 잘못된 코드:**
    ```python
    if score > 60:  # 60점은 불합격!
        pass_count += 1
    ```
    **✅ 올바른 코드:**
    ```python
    if score >= 60:  # 60점도 합격
        pass_count += 1
    ```
    **원인**: "60점 이상"은 60점을 포함합니다. `>`(초과)와 `>=`(이상)의 경계값 차이입니다.

!!! danger "실수: 누적 변수 초기화 누락 (아키타입: struggling-failure)"
    **❌ 잘못된 코드:**
    ```python
    for i in range(n):
        score = int(input(f"{i+1}번 학생 점수: "))
        total += score  # NameError! total이 정의되지 않음
    ```
    **✅ 올바른 코드:**
    ```python
    total = 0  # 반드시 초기화!
    for i in range(n):
        score = int(input(f"{i+1}번 학생 점수: "))
        total += score
    ```
    **원인**: `total += score`는 `total = total + score`이므로, `total`이 미리 정의되어 있어야 합니다.

!!! danger "실수: n=0일 때 ZeroDivisionError (아키타입: careful-thinker)"
    **❌ 잘못된 코드:**
    ```python
    avg = round(total / n, 1)  # n=0이면 ZeroDivisionError!
    ```
    **✅ 올바른 코드:**
    ```python
    if n > 0:
        avg = round(total / n, 1)
    else:
        avg = 0
    ```
    **원인**: 학생 수가 0이면 나눗셈이 불가합니다. 실제로 이런 입력이 들어올 가능성은 낮지만, 방어 코딩 습관을 기르기 좋은 포인트입니다.

### 🎯 교사 코칭 포인트

!!! info "사고 수준 판단"
    - **L0 (실행)**: 3명의 점수를 입력하여 결과를 확인할 수 있는가?
    - **L1 (이해)**: 누적 변수(`total`, `pass_count`)가 어떻게 동작하는지 한 단계씩 추적할 수 있는가?
    - **L2 (적용)**: 합격률(pass_count/n*100), 표준편차 등을 추가할 수 있는가?
    - **L3 (전략)**: 변수 추적 방식과 리스트 방식의 장단점을 비교하고, 데이터 크기에 따른 선택 기준을 제시할 수 있는가?

!!! tip "Boss 문제 교수 전략"
    이 문제는 **여러 개념의 통합**이 핵심입니다.
    한 번에 전체를 구현하게 하지 말고, 다음 순서를 추천합니다:

    1. 먼저 점수 입력 + 합계만 구현
    2. 최고점/최저점 추가
    3. 합격자 수 추가
    4. 출력 형식 다듬기

    이 **점진적 구현** 전략은 decomposition 사고력의 핵심입니다.

!!! tip "토론 유도: '더 좋은 초기값은?'"
    "max_score = 0 대신, 첫 번째 입력값을 초기값으로 쓰면 어떨까요?"
    ```python
    first = int(input("1번 학생 점수: "))
    max_score = first
    min_score = first
    total = first
    ```
    이 토론은 **알고리즘 설계**에 대한 깊은 사고를 유도합니다.
