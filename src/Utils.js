
class Utils{

    static getScaleType(scale) {
        var s = scale.copy();
        if (s.domain([1, 2]).range([1, 2])(1.5) === 1)
            return "Ordinal";
        else if (s.domain([1, 2]).range([1, 2]).invert(1.5) === 1.5)
            return "Linear";
        else if (s.domain([1, 2]).range([1, 2]).invert(1.5) instanceof Date)
            return "Time";
        else
            return "Not supported";
    }

}

export default Utils