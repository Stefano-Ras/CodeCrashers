function recursive(i) {
    if(i > 0) {
        console.log(i);
        recursive(i - 1);
    }
}

recursive(10);

let employees = {
	design: [{
		name: 'Ruud',
		salary: 1200
	}, {
		name: 'Nancy',
		salary: 2100
	}],
	development: {
		frontend: {
			angular: [{
				name: 'Mika',
				salary: 1900
			}, {
				name: 'Jeffrey',
				salary: 1900				
			}],
			react: [{
				name: 'Julio',
				salary: 2400
			}]
		},
		backend: [{
			name: 'Aron',
			salary: 2600
		}]
	},
	seo: [{
		name: 'Alex',
		salary: 1800
	}]	
};

function salaries(i, employees) {
    let sum = 0;
    if(sum < 13900) {
        sum = sum + i;
        console.log(i);
    } else {
        console.log("Totaal van alle salarissen: " + sum);
    }
}

salaries(employees.salary);
