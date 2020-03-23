import React from "react";

export default function Account(props) {
  const { accountNumber, handleChange } = props;
  return (
    <div>
      Account Number:
      <br />
      <input
        type="text"
        onChange={handleChange}
        placeholder="123456"
        value={accountNumber}
      />
      <br />
      <span>
        {accountNumber.length ? "Вы ввели номер: " + accountNumber : ""}
      </span>
    </div>
  );
}
