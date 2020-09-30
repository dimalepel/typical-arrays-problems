
exports.min = function min (array) {
    if (array && (array.length > 0)) {
        let tmp = array[0];

        for (let i = 0; i < array.length; i++) {
            if (array[i] < tmp) {
                tmp = array[i];
            }
        }

        return tmp;
    }

    return 0;
}

exports.max = function max (array) {
    if (array && (array.length > 0)) {
        let tmp = array[0];

        for (let i = 0; i < array.length; i++) {
            if (array[i] > tmp) {
                tmp = array[i];
            }
        }

        return tmp;
    }

    return 0;
}

exports.avg = function avg (array) {
    if (array && (array.length > 0)) {
        let tmp = 0;

        for (let i = 0; i < array.length; i++) {
            tmp += array[i];
        }

        return (tmp / array.length);
    }

    return 0;
}
