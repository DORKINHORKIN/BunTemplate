import { renderToString } from "preact-render-to-string";


export function RedirectResponse(location: string, status?: number): Response {
  return new Response(null, {
    status,
    headers: {
      "Location": location,
    },
  });
};

export type RouteHandler = (req: Request) => Response | Promise<Response>;

export type Routes = {
  [key: string]: {
    [method: string]: RouteHandler;
  } | RouteHandler;
};

export function TSX(node: preact.VNode): Response {
  return new Response(renderToString(node), {
    headers: { "Content-Type": "text/html" },
  });
}
