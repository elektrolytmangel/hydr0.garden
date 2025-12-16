import { useTranslation } from "react-i18next";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import { Title } from "../../components/title/Title";
import { Button } from "../../components/ui/button/Button";
import { Paragraph } from "../../components/ui/paragraph/Paragraph";

export const ErrorBoundary = () => {
  const { t } = useTranslation();
  const error = useRouteError();

  let errorMessage = "An unexpected error occurred";
  let errorCode = "Error";

  if (isRouteErrorResponse(error)) {
    errorCode = error.status.toString();
    errorMessage = error.statusText || errorMessage;
  } else if (error && typeof error === "object" && errorHasMessage(error)) {
    errorMessage = error.message;
  }

  function errorHasMessage(error: unknown): error is { message: string } {
    return (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as { message?: unknown }).message === "string"
    );
  }

  return (
    <div className="bg-background h-screen overflow-hidden flex flex-col w-full items-center justify-center relative text-center px-6">
      <div className="max-w-2xl">
        <Title />
        <div className="flex flex-col gap-4 my-16 mx-auto">
          <div className="text-8xl md:text-9xl font-serif text-moss-light opacity-80">
            {errorCode}
          </div>
          <Paragraph className="font-semibold text-xl md:text-2xl">
            {t("error.title")}
          </Paragraph>
          <Paragraph className="text-base md:text-lg opacity-80">
            {errorMessage}
          </Paragraph>
        </div>

        <div className="w-full flex justify-center px-2">
          <Link to="/" className="w-full md:w-2/3">
            <Button>{t("error.backToGarden")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
