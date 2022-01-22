const emailCollector = document.getElementById('emailCollector');

emailCollector.addEventListener('submit', event => {
	event.preventDefault();
	
	const ourFormData = new FormData(event.target);

const userFirstName = ourFormData.get('firstName')
const userEmailAddress = ourFormData.get('emailAddress')

const updatedPage = `
<h3>Congratulations, ${userFirstName}</h3>



<p class="congrats-text">You're on your way to becoming a BBQ Master! &#128077; </p>





<p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
`;

let ourMainContent = document.getElementById('mainContent');

ourMainContent.innerHTML = updatedPage;
})