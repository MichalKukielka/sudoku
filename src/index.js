module.exports = function solveSudoku(matrix) {

    mySolver(matrix);
    console.log(matrix);

    function isValid(matrix, horizontal, vertical, number) {
        for (let i = 0; i < matrix.length; i++) {
            const horizontalBox = 3 * Math.floor(horizontal / 3) + Math.floor(i / 3);
            const verticalBox = 3 * Math.floor(vertical / 3) + i % 3;
            if (matrix[horizontal][i] == number || matrix[i][vertical] == number || matrix[horizontalBox][verticalBox] == number) {
                return false; 
            }
        }
        return true;
    }


    function mySolver(matrix) {
        for (let horizontal = 0; horizontal < 9; horizontal++) {
            for (let vertical = 0; vertical < 9; vertical++) {
                if (matrix[horizontal][vertical] == 0) {
                    for (let number = 1; number <= 9; number++) {
                        if (isValid(matrix, horizontal, vertical, number)) {
                            matrix[horizontal][vertical] = number;
                            if (mySolver(matrix)) {
                                return true;
                            } else {
                                matrix[horizontal][vertical] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
        return matrix
}