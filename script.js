function getFormvalue(e) {
	const form=document.querySellector("#form")
	e.preventDefault()
	const firstName = form.elements["fname"].value.trim();
    const lastName = form.elements["lname"].value.trim();

    alert(firstName + " " + lastName);
}