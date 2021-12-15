import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';

const DeliveryLinksLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.deliveryLinks()} className="rw-link">
            DeliveryLinks
          </Link>
        </h1>
        <Link
          to={routes.newDeliveryLink()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New DeliveryLink
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  );
};

export default DeliveryLinksLayout;
