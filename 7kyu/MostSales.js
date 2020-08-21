/*You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

    products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
    amounts: [3, 24, 8]
    prices: [199, 299, 399]

return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/
function top3(products, amounts, prices) {
    return amounts.map((amount, index) => {
      return [products[index], amount * prices[index], index]
    }).sort((a,b) => {
      return b[1] - a[1] || a[2] - b[2]
    }).slice(0,3).map(elem => {
      return elem[0]
    })
}