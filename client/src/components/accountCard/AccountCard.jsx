import React from "react";

import "./accountCard.css";

function AccountCard({ account, children }) {
  return (
    <div className="accountCard">
      <div className="detail">
        <span className="label">ID: </span>
        <span>{account._id}</span>
      </div>
      <div className="detail">
        <span className="label">Cash: </span>
        <span>{account.cash}</span>
      </div>
      <div className="detail">
        <span className="label">Credit: </span>
        <span>{account.credit}</span>
      </div>
      <div className="detail">
        <span className="label">isActive: </span>
        <span>{account.isActive ? "true" : "false"}</span>
      </div>
      <div className="detail">
        <span className="label">Users who has access: </span>
        <span>
          {account.usersAccess.length ? account.usersAccess.join(", ") : "none"}
        </span>
      </div>
      <div className="accountCardChildren">{children}</div>
    </div>
  );
}

export default AccountCard;
