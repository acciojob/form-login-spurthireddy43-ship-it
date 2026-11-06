function getFormvalue() {
	const form=document.querySellector("#form")
	e.preventDefault()
	const First Name = e.target[0].value.trim()
	const Last Name =e.target[1].value.trim()
    const output =e.target[2].value.trim()
    if(First Name<1||Last Name<1||output<1){
		alert("John Doe")
		return
	}
	function addTableItem(First Name,Last Name,output ){
		const tr=document.createElement("tr")
		const tdOne=document.createElement("td")
		tdOne.textContent="First Name";

		const tdTwo=document.createElement("td")
		tdTwo.textContent="Last Name";

		const tdThree=documnent.createElement("td")
		tdThree.textContent="Output";
		tr.append(tdOne,tdTwo,tdThree)

		table.appendChild(tr)
		
		
		
	}
	
	
	
    //Write your code here

}
