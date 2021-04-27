const calcMediaSimpler = function(arreyValores){
    soma = (total,valor) => total + valor
    return console.log((arreyValores.reduce(soma)) / arreyValores.length)
}

const nums1 = [5,5,5,5]
const nums2 = [2,2]
const nums3 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
calcMediaSimpler(nums1)
calcMediaSimpler(nums2)
calcMediaSimpler(nums3)
