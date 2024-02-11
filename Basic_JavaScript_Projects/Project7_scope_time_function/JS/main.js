let glob = 'Global variable';

function locVar() {
    let loc = 'Local Variable';
    console.log(loc);
};

function locVarErr() {
    console.log(loc);
};

console.log(glob);
locVar();
locVarErr();