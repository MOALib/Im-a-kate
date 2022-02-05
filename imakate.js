const kate = {};

kate.Im_a_kate = function(say){
    let str = `Kate middleton is alive and fine, she is catherine.
    I'm a Kate Middleton
    I'm a Kate
    Kate Middleton is me!
    Kate is me!
    My heels get stuck in a grate every hour, because I wear them for life.
    I wear an Emilia Wickstead Alice blue midi dress for life.
    `;

    if(say){
        str = `I say: 
        ${str}
        
        You say:
        ${say}`
    }

    return str;
};

kate.Im_a_kate_dedent = function(say){
    return kate.Im_a_kate(say).replace(/  +/g, '');
};

Object.preventExtensions(kate);
Object.seal(kate);
Object.freeze(kate);


if(module){
    module.exports = kate;

    if(require.main == module){
        const assert = require('node:assert');
        const katestr = kate.Im_a_kate_dedent();

        assert.strict(typeof(katestr) === 'string');
        console.log(katestr);
    }
}