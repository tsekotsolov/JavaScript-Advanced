let solution = (function () {

    return {
        add: function (vectorFirst, vectorSecond) {
            return [vectorFirst[0]+vectorSecond[0],vectorFirst[1]+vectorSecond[1]];
        },

        multiply : function(vector,scalar){

            return [vector[0]*scalar,vector[1]*scalar]
        },

        length : function(vector){

            return Math.sqrt(Math.pow(vector[0],2)+Math.pow(vector[1],2))
        },

        dot : function(vectorFirst,vectorSecond){

            return vectorFirst[0]*vectorSecond[0]+vectorFirst[1]*vectorSecond[1]
        },

        cross : function(vectorFirst,vectorSecond){

            return vectorFirst[0]*vectorSecond[1]-vectorFirst[1]*vectorSecond[0]
        }
    }

})();

console.log(typeof(solution));

console.log(solution.add([1, 1], [1, 0]));

console.log(solution.multiply([3.5, -2], 2));

console.log(solution.length([3, -4]));

console.log(solution.dot([1, 0], [0, -1]));

console.log(solution.cross([3, 7], [1, 0]));
