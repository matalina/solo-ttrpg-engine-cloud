import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

  if (event.httpMethod.toLowerCase() !== 'post') return {
    statusCode: 400,
    body: JSON.stringify({ error: 'invalid_method', message: 'Unable to process request.' }),
  };

  const clientId = process.env.DROPBOX_CLIENT_ID;
  const secret = process.env.DROPBOX_CLIENT_SECRET;

  return {
    statusCode: 200,
    body: JSON.stringify({ clientId, secret }),
  };
};


export { handler };