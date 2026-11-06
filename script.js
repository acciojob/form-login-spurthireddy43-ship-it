function getFormvalue(e) {
	const form=document.querySellector("#form1")
	e.preventDefault()
	const firstName = form.elements["fname"].value.trim();
    const lastName = form.elements["lname"].value.trim();

    alert(firstName + " " + lastName);
}