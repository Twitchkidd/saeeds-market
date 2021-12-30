import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

const InternationalSectionHeadersLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.internationalSectionHeaders()} className="rw-link">
            InternationalSectionHeaders
          </Link>
        </h1>
        <Link
          to={routes.newInternationalSectionHeader()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New InternationalSectionHeader
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default InternationalSectionHeadersLayout;
