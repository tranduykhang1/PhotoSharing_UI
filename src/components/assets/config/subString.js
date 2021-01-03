const subString = (str, isName) => {
    let result;
    if (!isName) {
        if (str.length >= 20) {
            return result = str.slice(0, 15) + '...'
        }
        result = str
    } else {
        if (str.length >= 9) {
            return result = str.slice(0, 9) + '...'
        }
        result = str
    }
    return result
}
export default subString