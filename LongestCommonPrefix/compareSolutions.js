const HorizontalScanning = require('./LongestCommonPrefix_HorizontalScanning.js');
const VerticalScanning = require('./LongestCommonPrefix_VerticalScanning.js');
const DivideAndConquer = require('./LongestCommonPrefix_DivideAndConquer.js');
const BinarySearch = require('./LongestCommonPrefix_BinarySearch.js');
const SortAndScan = require('./LongestCommonPrefix_SortAndScan.js');

const SOLUTIONS = [HorizontalScanning, VerticalScanning, DivideAndConquer, BinarySearch, SortAndScan];

function compareSolutions() {
    let complexities = SOLUTIONS.map((item) => {
        return { name: `${item.NAME}`, complexity: `Time: ${item.TIME}, Space: ${item.SPACE}` };
    })
    console.table(complexities);
}

compareSolutions();