window.onload = function (){

	const doSomething = function (){
		console.log('did something');
	};
	

	
	// inView('#section-2')
    // 	// .on('enter', doSomething)
    // 	.on('enter', el => {
	// 		el.style.backgroundImage = 'blue';
	// 	})
	// 	.on('exit', el=> {
	// 		el.style.backgroundColor = 'black';
	// 	})
	// 	// el.style.opacity = 0.5;	
		
	inView.offset ({
		bottom: '100vh'
	})

	inView('section')
		.on('enter', el => {
			el.className = 'active';
		})
		.on('exit', el=> {
			el.className = '';
		})
};

