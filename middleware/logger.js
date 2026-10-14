const date = new Date 

const logger = (req, res, next) => {
    const date = new date

const result = `API with Endpoint: ${req.url} and Method: 
${req.method} was called at: `;

console.log(result)

next ( );


};




module.export = logger