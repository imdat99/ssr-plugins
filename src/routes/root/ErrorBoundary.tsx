import {
    isRouteErrorResponse,
    useRouteError
} from "react-router";
export function ErrorBoundary() {
  const error = useRouteError();
  let status = 500;
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = status === 404 ? "Page not found." : error.statusText || message;
  }

  return (
    <main className="min-h-screen-sm flex items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-xl">
        {/* <img src="/assets/images/logo.svg" alt="Xemdi Logo" className="h-10" /> */}

        <p>
          <b>{status}.</b>{' '}
          <ins className="text-red-500 decoration-none">{message}.</ins>
        </p>
        <p className="text-gray-600">
          Something went wrong on our end. Please try again.
        </p>
      </div>
    </main>
  );
}