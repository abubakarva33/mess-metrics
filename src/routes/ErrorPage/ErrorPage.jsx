import { Button, ConfigProvider } from "antd";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" errorMain d-flex flex-column align-items-center justify-content-center">
      <img src="/images/error.webp" alt="" className="img-fluid error-logo" />
      <div className="d-flex flex-column align-items-center justify-content-center px-4 py-3">
        <h2>404 - PAGE NOT FOUND</h2>
        <p className="fs-5">
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </p>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                contentFontSize: 25,
                paddingInline: 20,
                defaultBg: "#0145D4",
                defaultColor: "#9AB3FF",
                fontWeight: 500,
              },
            },
          }}
        >
          <Link to="/" className="my-3">
            <Button type="primary" size="large">
              GO TO HOMEPAGE
            </Button>
          </Link>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ErrorPage;
