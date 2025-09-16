import { TSX } from "./deps.ts";

const routes = {
  "/": (req: Request) => {
    return TSX(
    <>
      <h1>Hello, Preact with Bun!</h1>
      <p>This is a simple Preact component rendered on the server.</p>
    </>
  );
  },
  "/about": (req: Request) => {
    return TSX(
      <>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </>
    );
  },
};

Bun.serve({
  port: 3000,
  routes,
  error() {
    return new Response(null, { status: 404 });
  },
});
