import Account from "../../components/Accounts/SingleAccount";

function SingleAccount(props) {
  const type = props.match.params.type;
  return (
    <div>
      <Account type={type} />
    </div>
  );
}

export default SingleAccount;
