// 02-flow switch

function whatAreWeEating(meal) {
    switch (meal) {
        case 'dinner':
            return 'pizza';
        default:
            // don't recognize the meal, have a banana
            return 'banana';
    }
}

var food = whatAreWeEating();
console.log(food);
