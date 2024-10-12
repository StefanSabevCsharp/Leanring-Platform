
export default function upperCase(string){
    const words = string.split(" ");
    const upperCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return upperCaseWords.join(" ");
}