// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
function solution(n) {
    var answer = 0;
    let number = n;
    let index = 1;
    if(n < 0){
        return false
    }
    if(n > 3000){
        return false
    }
    while(index <= number){
        if(number % index === 0){
            answer+=index
        }
                index += 1
    }
    return answer;
}