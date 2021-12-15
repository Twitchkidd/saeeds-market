import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

const InternationalSectionHeadingsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.internationalSectionHeadings()} className="rw-link">
            InternationalSectionHeadings
          </Link>
        </h1>
        <Link
          to={routes.newInternationalSectionHeading()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New
          InternationalSectionHeading
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default InternationalSectionHeadingsLayout;
