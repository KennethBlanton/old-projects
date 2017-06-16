var form = document.querySelector('form');
var Review = function(options) {
	var public = options || {};
	// console.log(options)
	
	public.createText = function() {
		let row = document.createElement('div');
		row.classList.add('row');
		form.appendChild(row);
		console.log(options);
		for (var i = 0; i <= options.textArray.length-1; i++) {
			let field = document.createElement('div');
			field.classList.add('input-field', 'col', 's6');
			let input = document.createElement('input');
			input.setAttribute('id', options.textArray[i]);
			input.setAttribute('type', 'text');
			input.classList.add('validate');
			let label = document.createElement('label');
			label.setAttribute('for', options.textArray[i]);
			label.innerHTML = options.textArray[i];
			row.appendChild(field);
			field.appendChild(input);
			field.appendChild(label);
			console.log('ran');
		}
	};
	public.createDragDown = function() {
		let row = document.createElement('div');
		row.classList.add('row');
		let field = document.createElement('div');
		let select = document.createElement('select');
		var label = document.createElement('label');
		label.innerHTML = options.dragDownName;
		form.classList.add('col', 's12');
		row.classList.add('row');
		field.classList.add('input-field', 'col', 's12', 'm6');
		form.appendChild(row);
		row.appendChild(field);
		field.appendChild(select);
		field.appendChild(label);
		for (let i = options.dragDownArray.length - 1; i >= 0; i--) {
			var option = document.createElement('option');
			option.setAttribute('value', options.dragDownArray[i]);
			option.innerHTML = options.dragDownArray[i];
			select.appendChild(option);
		}
		$(document).ready(function() {
	    	$('select').material_select();
	  	});
	};
	public.createSlider = function() {
		let row = document.createElement('div');
				row.classList.add('row');
		let field = document.createElement('p');
		let input = document.createElement('input');
		input.setAttribute('type', 'range');
		input.setAttribute('min', options.sliderMin);
		input.setAttribute('max', options.sliderMax);
		input.setAttribute('id', options.sliderName);
		row.classList.add('row');
		field.classList.add('range-field', 'col', 's12', 'm6');
		form.appendChild(row);
		row.appendChild(field)
		field.appendChild(input);
	}
	public.createCheckBox =function createCheckBox(){
		let row = document.createElement('div');
		row.classList.add('row');
		let field = document.createElement('p');
		let input = document.createElement('input');
		input.classList.add('checkBox');
		let label = document.createElement('label');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('id', options.checkBoxName);
		label.setAttribute('for', options.checkBoxName);
		label.innerHTML = options.checkBoxName;
		form.appendChild(row);
		row.appendChild(field);
		field.appendChild(input);
		field.appendChild(label);

	}
	public.submitButton = function() {
		let row = document.createElement('row');
		row.classList.add('row', 'submit');
		let button = document.createElement('button');
		button.setAttribute('type', 'submit');
		button.setAttribute('name', 'action');
		button.classList.add('btn', 'waves-effect', 'waves-light');
		form.appendChild(row);
		row.appendChild(button);
		button.innerHTML = 'Submit <i class="material-icons right">send</i>';
		form.addEventListener('submit', function(e) {
			console.log(getInfo());
		})
	}
	public.createTab = function() {
		// console.log(this);
		let tab = document.createElement('a');
		tab.classList.add('waves-effect', 'waves-light', 'btn');
		// <a class="waves-effect waves-light btn">button</a>
		// let row = document.createElement('div');
		// row.classList.add('row');
		tab.setAttribute('type', 'button');
		tab.innerHTML = this.name;
		// document.querySelector('.reviewButtons').appendChild(row);
		// row.appendChild(tab);
		document.querySelector('.reviewButtons').appendChild(tab)
		tab.addEventListener('click', (e) => {
				let rows = document.querySelectorAll('.row');
				if(rows) {
					for (let i = rows.length - 1; i >= 0; i--) {
						console.log(rows[i]);
						rows[i].parentNode.removeChild(rows[i]);
					}
				}

				create(this);
			
		});
	}
	return public
};
var ReviewOptions = function(options){
	var public = Review(options),
		name = options.name;
		// console.log(name);

		public.getName = function () {
			return this.name;
		};
		return public
 
}


var books = ReviewOptions({
	name: 'Books',
	textArray: ['author', 'bookName', 'review'],
	dragDownName: 'genre',
	dragDownArray: ['Scifi', 'horror', 'fantasy', 'biography', 'Non-fiction', 'Poetry', 'Other'],
	dragDownNumber: 1,
	sliderNumber: 1,
	sliderMin: 0,
	sliderMax: 100,
	sliderName:'Rate this book',
	checkBoxName: ['Would Recommend'],
	checkBoxNumber:1,
	clicked: false,
});
var movies = ReviewOptions({
	name: 'Movies',
	textArray: ['Name', 'Director', 'Thoughts' , 'Actor with best performance'],
	dragDownName: 'genre',
	dragDownArray: ['Scifi', 'horror', 'fantasy', 'drama', 'Non-fiction', 'Mystery', 'Bad', 'Comedy', 'Indie', 'Foreign', 'Other'],
	dragDownNumber: 1,
	sliderNumber: 1,
	sliderMin: 0,
	sliderMax: 100,
	sliderName:'Rate this Movie',
	checkBoxName: ['Seal of Reccomendation'],
	checkBoxNumber:1,
	clicked:false,
});
var videoGames = ReviewOptions({
	name: 'Video Games',
	textArray: ['Name', 'Producer', 'Review of Art', 'Review of Gameplay', 'Overall reviewButtons'],
	dragDownName: 'genre',
	dragDownArray: ['Scifi', 'horror', 'fantasy', 'drama', 'Non-fiction', 'Mystery', 'Bad', 'Comedy', 'Indie', 'Foreign', 'Other'],
	dragDownNumber: 1,
	sliderNumber: 1,
	sliderMin: 0,
	sliderMax: 100,
	sliderName:'Rate this Game',
	checkBoxName: ['Seal of Reccomendation'],
	checkBoxNumber:1,
	clicked:false,
});
var restraunt = ReviewOptions({
	name: 'Restraunt',
	textArray: ['Name', 'location', 'What did you have', 'Drinks?', 'Overall Review'],
	dragDownName: 'Food',
	dragDownArray: ['Seafood', 'Italian', 'Asian', 'Fast Food', 'French', 'Thai', 'Indian', 'Greek', 'Turkish', 'Other'],
	dragDownNumber: 1,
	sliderNumber: 1,
	sliderMin: 0,
	sliderMax: 100,
	sliderName:'Rate this Restraunt',
	checkBoxName: ['Seal of Reccomendation'],
	checkBoxNumber:1,
	clicked: false,
})
var createYourOwn = ReviewOptions({
	name: 'Create Your Own Review',
	textArray: ['What are You Reviewing',],
	dragDownName: 'Food',
	dragDownArray: ['Seafood', 'Italian', 'Asian', 'Fast Food', 'French', 'Thai', 'Indian', 'Greek', 'Turkish', 'Other'],
	dragDownNumber: 1,
	sliderNumber: 1,
	sliderMin: 0,
	sliderMax: 100,
	sliderName:'Rate this Restraunt',
	checkBoxName: ['Seal of Reccomendation'],
	checkBoxNumber:1,
	clicked: false,
})
function create(review) {
	review.createText();
	review.createSlider();
	review.createDragDown();
	review.createCheckBox();
	review.submitButton();
	let button = document.createElement('a');
	button.style.marginLeft = '10px';
	button.classList.add('waves-effect', 'waves-light', 'btn');
	document.querySelector('.submit').appendChild(button);
	button.innerHTML = 'Reset';
	button.addEventListener('click', function(e) {
		let rows = document.querySelectorAll('.row');
		if(rows) {
			for (let i = rows.length - 1; i >= 0; i--) {
				console.log(rows[i]);
				rows[i].parentNode.removeChild(rows[i]);
			}
			create(review);
			e.currentTarget.parentNode.removeChild(e.currentTarget);
		}
	})
}
books.createTab();
movies.createTab();
videoGames.createTab();
restraunt.createTab();


function getInfo() {
	if(document.querySelector('.value')) {
		let checkBox = document.querySelector('.checkBox');
		let dropDown = document.querySelectorAll('li');
		let sliderValue = document.querySelector('.value').innerHTML;
		let inputs = document.querySelectorAll('.input-field input');
		let inputValues = [];
		let dropDownValue;
		let checkBoxValue = checkBox.checked;
		let counter = new Date()+ '';
		for (var i = dropDown.length - 1; i >= 0; i--) {
		 	if(dropDown[i].classList.contains('active')) {
		 		 dropDownValue = dropDown[i].children[0].innerHTML;
		 	} 
		}
		for (var i = inputs.length - 1; i >= 0; i--) {
			 let value = inputs[i].value;
			 let id = inputs[i].id;
			 if(id) {
			 	let info = {
			 	name: id,
			 	text:value,
			 }
			 inputValues.push(info);
			 }

		}
		let allValues = {
			text: inputValues,
			slider: sliderValue,
			checkBox: checkBoxValue,
			dropDown: dropDownValue,
		}
		let store = JSON.stringify(allValues);
		// console.log(JSON.parse(allValues));

		localStorage.setItem( counter, store);
		console.log(localStorage)
		console.log(counter)

		// console.log(dropDownValue, checkBoxValue, sliderValue, inputValues);
		return allValues
	}
}

window.onload  = function() {
	for(let inputs in localStorage) {
		localStorage[inputs];
		let a = (JSON.parse(localStorage[inputs]));
		let container = document.querySelector('.review-container');
		let close = document.createElement('a');
		let section = document.createElement('div');
		close.classList.add('btn-floating', 'btn-large' , 'waves-effect', 'waves-light', 'red');
		close.innerHTML = '<i class="material-icons">close</i>';

		section.classList.add('feedback');
		section.style.background =  '#e57373';
		section.style.padding = '20px';
		section.style.borderRadius = '20px';
		section.style.marginTop = '20px';
		container.style.display = 'flex';
		container.style.justifyContent = 'space-between';
		container.style.flexWrap = 'wrap';
		container.style.color = 'white';
		// row.classList.add('row');
		if (a.checkBox) {
			let seal = document.createElement('h4');
			seal.innerHTML = 'Recommended';
			section.appendChild(seal);
		} else {
			let seal = document.createElement('h5');
			seal.innerHTML = ' Not Recommended';
			section.appendChild(seal);

		}
		 let rating = document.createElement('h6');
		 rating.innerHTML = 'Rating:' + a.slider;
		 section.appendChild(rating);
		 for (let i = a.text.length - 1; i >= 0; i--) {
		 	 let name = a.text[i].name;
		 	 let text = a.text[i].text;
		 	 let field = document.createElement('p');
		 	 field.innerHTML = name + ': ' + text;
		 	 section.appendChild(field);
		 }
		 document.querySelector('.reviews').appendChild(container);
		 container.appendChild(section);
		 section.appendChild(close);
		 close.addEventListener('click', function(e) {
		 	let b = inputs;
		 	localStorage.removeItem(inputs);
		 	let remove = document.querySelector('.review-container').children;
		 	let button = e.currentTarget;
		 	 button.parentNode.parentNode.removeChild(button.parentNode);
		 })
		 // row.appendChild(section);
	}
}
let stringTest = 'asdasd, asdas, dasdasd, asdasd';
let comma = ','
let theInputArray = []
let  test = stringTest.split(comma);
for (var i = test.length - 1; i >= 0; i--) {
	theInputArray.push(test[i].trim());
}
console.log(theInputArray)


newReviewFrom = {
	name: 'Create Your Own Review',
	textArray: theInputArray,
	dragDownName: 'Food',
	dragDownArray: ['Seafood', 'Italian', 'Asian', 'Fast Food', 'French', 'Thai', 'Indian', 'Greek', 'Turkish', 'Other'],
	dragDownNumber: 1,
	sliderNumber: 1,
	sliderMin: 0,
	sliderMax: 100,
	sliderName:'Rate this Restraunt',
	checkBoxName: ['Seal of Reccomendation'],
	checkBoxNumber:1,
	clicked: false,
}



























