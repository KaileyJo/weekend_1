$(document).ready(function() {
	var empArray = [];
	var combinedSalary = 0;
	var monthlyExpenses = 0;
	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#employeeForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		$('#employeeForm').find('input[type=text]').val('');
		appendDom(values);

		combinedSalary += Number(values.empSalary);
		monthlyExpenses = combinedSalary/12;

		allSalaries(values);

		$('button').on('click', function () {
			$(this).parentsUntil('#container').remove('div');
		});

	});

	function appendDom(empInfo) {
		$('#container').append('<div></div>');
		var $el = $('#container').children().last();

		$el.append('<p class= "inline">' + empInfo.empFirstName + '     ' + '</p>');
		$el.append('<p class= "inline">' + empInfo.empLastName + '     ' + '</p>');
		$el.append('<p class= "inline">' + empInfo.empID + '     ' + '</p>');
		$el.append('<p class= "inline">' + empInfo.jobTitle + '     ' + '</p>');
		$el.append('<p class= "inline">' + empInfo.empSalary + '     ' + '</p>');
		$('div p').last().addClass('salary');
	}

	function allSalaries(empInfo) {
		var $el = $('#container div').children().last();
		$el.append('<p>' + '</p>');
		$el.append('<p class= "inline">' + 'Monthly Salary Expenses: ' + monthlyExpenses + '     ' + '</p>');
		$el.append('<button class= "inline">' + 'Delete Employee' + '</button>');
		$el.append('<p>' + '</p>');
		$('button').last().parentsUntil('#container').addClass(empInfo.empFirstName);
	}








});