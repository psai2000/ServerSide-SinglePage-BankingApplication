const validateNarration = (value) => {
    const regex = /^[a-zA-Z]+$/;
    if(value==="")
    return "*Please fill the field"
    if (!value.match(regex))
        return "*Please enter valid data";
    return "";
}
export default validateNarration;