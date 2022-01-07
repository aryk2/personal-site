module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + " Guy. This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // Example code for adding to Cosmos DB
    if (name) {
        context.bindings.outputDocument = JSON.stringify({
            // create a random ID
            id: new Date().toISOString() + Math.random().toString(),
            name: name
        });
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}