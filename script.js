function getFormvalue(e) {
	const form=document.querySellector("#form")
	e.preventDefault()
	const First Name = e.target[0].value.trim()
	const Last Name =e.target[1].value.trim()
    const output =e.target[2].value.trim()
    if(firstName.length<1||lastName.length<1){
		alert("please enter first and lastName")
		return
	}
	function addTableItem(firstName,lastName){
		const tr=document.createElement("tr")
		const tdOne=document.createElement("td")
		tdOne.textContent="firstName";

		const tdTwo=document.createElement("td")
		tdTwo.textContent="lastName";

		const tdThree=documnent.createElement("td")
		tdThree.textContent=firstName+""+lastName;
		tr.append(tdOne,tdTwo,tdThree)

		table.appendChild(tr)
		}
    //Write your code here
	addTableItem(firstName,lastName)

}
