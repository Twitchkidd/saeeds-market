import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

const WhatsNewHeadersLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.whatsNewHeaders()} className="rw-link">
            WhatsNewHeaders
          </Link>
        </h1>
        <Link
          to={routes.newWhatsNewHeader()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New WhatsNewHeader
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default WhatsNewHeadersLayout;
