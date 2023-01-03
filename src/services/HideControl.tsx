import React from 'react';
import { connect } from 'react-redux';

interface Props {
  hideFor: string;
  children?: any;
  renderNoAccess?: any;
  users: any;
}

const HideControl: React.FC<Props> = ({
  hideFor,
  children,
  renderNoAccess,
  users,
}) => {
  switch (hideFor) {
    case 'company-list':
      if (users.role === 'super_admin') {
        return renderNoAccess(children);
      }
      break;
    case 'dashboard-list':
      if (users.role !== 'super_admin') {
        return renderNoAccess(children);
      }
      break;
    case 'manage-list':
      if (users.role !== 'super_admin') {
        return renderNoAccess(children);
      }
      break;
    case 'inventory-list':
      if (users.role !== 'super_admin') {
        return renderNoAccess(children);
      }
      break;
    case 'sale-list':
      if (users.role !== 'super_admin') {
        return renderNoAccess(children);
      }
      break;
    case 'afe-list':
      if (users.role !== 'super_admin') {
        return renderNoAccess(children);
      }
      break;
    case 'report -list':
      if (users.role !== 'super_admin') {
        return renderNoAccess(children);
      }
      break;
  }

  return renderNoAccess();
};

HideControl.defaultProps = {
  renderNoAccess: () => null,
};

export default connect((state: any) => ({
  users: state?.data?.auth?.user,
}))(HideControl);
