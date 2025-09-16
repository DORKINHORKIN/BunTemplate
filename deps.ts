import { renderToString } from "preact-render-to-string";
import { type VNode } from "preact";


export type RouteHandler = (req: Request) => Response | Promise<Response>;

export type Routes = {
  [key: string]: {
    [method: string]: RouteHandler;
  } | RouteHandler;
};

export function TSX(node: VNode): Response {
  return new Response(renderToString(node), {
    headers: { "Content-Type": "text/html" },
  });
}
