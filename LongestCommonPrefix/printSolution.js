
function printSolution(NAME, STRATEGY, EXPLANATION, TIME, SPACE, longestCommonPrefix) {
    console.log("")
    console.log("--------------------------------------------------------------------------------------------------------------------------")
    console.log("Solution:")
    console.log(NAME)
    console.log("--------------------------------------------------------------------------------------------------------------------------")
    console.log("Strategy:")
    console.log(STRATEGY)
    console.log("--------------------------------------------------------------------------------------------------------------------------")
    console.log("Explanation:")
    console.log(EXPLANATION)
    console.log("--------------------------------------------------------------------------------------------------------------------------")
    console.log("Function:")
    console.log(prettyPrint(longestCommonPrefix.toString()));
    console.log("--------------------------------------------------------------------------------------------------------------------------")
    console.log("Complexity:")
    console.log(`Time: ${TIME}`)
    console.log(`SPACE: ${SPACE}`)
    console.log("--------------------------------------------------------------------------------------------------------------------------")
}

function prettyPrint(source) {
    let formattedSource = source.toString();
    // Add line breaks after curly braces and semicolons
    formattedSource = formattedSource.replace(/([{};])/g, "$1\n");

    // Add space after opening curly brace
    formattedSource = formattedSource.replace(/(\S)\{/g, "$1 {");

    // Indent lines ending with a semicolon
    formattedSource = formattedSource.replace(/^(.*?);/gm, "    $1;");

    return formattedSource;
}

module.exports = { printSolution };