import { ChevronRight, Home } from "lucide-react";

function Breadcrumbs() {
  const path = window.location.pathname;

  const pageName =
    path === "/"
      ? "Dashboard"
      : path
          .replace("/", "")
          .split("-")
          .map(
            (word) =>
              word.charAt(0).toUpperCase() +
              word.slice(1)
          )
          .join(" ");

  return (
    <div className="breadcrumbs">
      <div className="breadcrumb-item home">
        <Home size={14} />

        <span>Home</span>
      </div>

      <ChevronRight
        size={14}
        className="breadcrumb-separator"
      />

      <div className="breadcrumb-item current">
        {pageName}
      </div>
    </div>
  );
}

export default Breadcrumbs;