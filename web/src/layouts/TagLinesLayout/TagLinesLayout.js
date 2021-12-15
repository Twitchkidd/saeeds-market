import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

const TagLinesLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.tagLines()} className="rw-link">
            TagLines
          </Link>
        </h1>
        <Link to={routes.newTagLine()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New TagLine
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default TagLinesLayout;
