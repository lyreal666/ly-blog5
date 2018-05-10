module.exports = async (ctx, next) => {
    try{
        await next();
        if (ctx.status === 404) {ctx.throw(404)}
    } catch (err) {
        console.error(err.stack);
        const status = err.status || 500;
        ctx.status = status;
        switch (status) {
            case 404: ctx.render()
        }
    }


};