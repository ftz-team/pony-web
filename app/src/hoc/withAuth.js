import { useRouter } from "next/router";

export const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("token");

      if (!accessToken) {
        Router.push("/login");
        return null;
      }
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};
