// HW1
// 1)реализовать метод, принимающий строку и возвращающий является ли она палиндромом

const isPalindrome = (str: string): any => {
	let strReverse = str.split('').reverse().join('');
	return strReverse === str ? 'yes' : 'no';
};
console.log(isPalindrome('level'));

// 2)реализовать метод который принимает число натуральное(int >0)и выдает массив чисел Фибоначчи до заданного числа
// fn(2) => [1,1]
// fn(4) => [1,1,2,3]

const fn = (int: number): any => {
	let nums: number[] = [];
	let prev = 0,
		next = 1;
	for (let i = 0; i < int; i++) {
		if (int > 0) {
			let current = next;
			next = prev + next;
			prev = current;
		}
		nums.push(prev);
	}
	return nums;
};
console.log(fn(4));
