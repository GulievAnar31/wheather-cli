export const getArgs = (args) => {
    const result = {};
    const [executer, file, ...rest] = args;

    rest.forEach((value, index, arr) => {
        if (value.charAt(0) === '-') {
            const key = value.substring(1);

            if (index === arr.length - 1 || arr[index + 1].charAt(0) === '-') {
                result[key] = true;
            } else {
                result[key] = arr[index + 1];
            }
        }
    });

    return result;
};
